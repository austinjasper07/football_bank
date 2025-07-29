"use client";

import { useState, FormEvent, useEffect } from "react";
import Head from "next/head";
import { notFound, usePathname } from "next/navigation";
import SignUp from "@/components/auth/SignUp";
import Login from "@/components/auth/Login";
import ForgotPassword, {
  ForgotPasswordSuccess,
} from "@/components/auth/ForgotPassword";
import { useToast } from "@/hooks/use-toast";
import { useAdminDataStore } from "@/store/adminDataStore";
import { useRouter } from "next/navigation";

export type AuthView = "" | "login" | "signup" | "forgot";

export default function AuthPage() {
  const router = useRouter();
  const pathname = usePathname();
  const { toast } = useToast();
  const { signup, login,  } = useAdminDataStore();
  // const currentUser = useAdminDataStore.getState().activeUser;
  // const activeUser = currentUser;
  // console.log(activeUser);
  const [view, setView] = useState<AuthView>("");
  const [loading, setLoading] = useState(false);
  const [forgotSuccess, setForgotSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState<{
    login: boolean;
    signup: boolean;
  }>({
    login: false,
    signup: false,
  });
  const [passwordStrength, setPasswordStrength] = useState(0);

  useEffect(() => {
    if (pathname.includes("/auth/login")) setView("login");
    else if (pathname.includes("/auth/signup")) setView("signup");
    else if (pathname.includes("/auth/forgot-password")) setView("forgot");
    else notFound();
  }, [pathname]);

  const togglePassword = (field: string) => {
    if (field !== "login" && field !== "signup") return;
    setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const getStrength = (value: string) => {
    let strength = 0;
    if (value.length >= 8) strength++;
    if (/[a-z]/.test(value) && /[A-Z]/.test(value)) strength++;
    if (/\d/.test(value)) strength++;
    if (/[^a-zA-Z0-9]/.test(value)) strength++;
    return strength;
  };

  const handleSubmit = async (e: FormEvent, type: AuthView) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    if (type === "signup") {
      const { email, password, confirmPassword, firstName, lastName, role } =
        data;

      if (
        !email ||
        !password ||
        !confirmPassword ||
        !firstName ||
        !lastName ||
        !role
      ) {
        toast({ title: "Error", description: "All fields are required." });
        setLoading(false);
        return;
      }

      if (password !== confirmPassword) {
        toast({ title: "Error", description: "Passwords do not match." });
        setLoading(false);
        return;
      }

      if ((password as string).length < 8) {
        toast({
          title: "Error",
          description: "Password must be at least 8 characters.",
        });
        setLoading(false);
        return;
      }

      try {
        await signup({
          id: "", // or leave undefined if backend generates it
          email: data.email as string,
          password: data.password as string,
          firstName: data.firstName as string,
          lastName: data.lastName as string,
          role: data.role as string,
          subscribed: false,
          createdAt: "",
          updatedAt: "",
        });

        toast({
          title: "Account Created",
          description: "You have been logged in.",
        });
        const currentUser = useAdminDataStore.getState().activeUser;
        console.log(currentUser);
        if (currentUser && currentUser.role === "admin") {
          router.replace("/admin");
        }else{
          router.replace("/");
        }
      } catch (error) {
        toast({ title: "Signup Error", description: "Failed to register." });
      } finally {
        setLoading(false);
      }

      return;
    }

    if (type === "login") {
      const { email, password } = data;

      if (!email || !password) {
        toast({
          title: "Error",
          description: "Email and password are required.",
        });
        setLoading(false);
        return;
      }
      try {
        await login({ email: email as string, password: password as string });
        toast({ title: "Logged In", description: "Welcome back!" });
        setLoading(false);
        const currentUser = useAdminDataStore.getState().activeUser;
        console.log(currentUser);
        if (currentUser && currentUser.role === "admin") {
          router.replace("/admin");
        }else{
          router.replace("/");
        }
        return;
      } catch (error) {
        toast({ title: "Login Error", description: "Failed to log in." });
      } finally {
        setLoading(false);
      }
    }

    if (type === "forgot") {
      setForgotSuccess(true);
      setLoading(false);
    }
  };

  const strengthColors = [
    "bg-divider",
    "bg-accent-red",
    "bg-accent-amber",
    "bg-accent-green",
    "bg-accent-green",
  ];

  return (
    <>
      <Head>
        <title>FootballBank Auth</title>
      </Head>

      <main className="min-h-screen flex items-center justify-center p-4 bg-primary-bg font-inter text-primary-text">
        <div className="w-full max-w-md">
          <div className="bg-primary-secondary rounded-2xl p-8 border border-divider shadow-2xl">
            {view === "login" && (
              <Login
                {...{
                  handleSubmit,
                  loading,
                  togglePassword,
                  showPassword,
                  setView: (v: string) => setView(v as AuthView),
                }}
              />
            )}

            {view === "signup" && (
              <SignUp
                {...{
                  handleSubmit,
                  loading,
                  togglePassword,
                  showPassword,
                  getStrength,
                  passwordStrength,
                  setPasswordStrength,
                  strengthColors,
                  setView,
                }}
              />
            )}

            {view === "forgot" && (
              <>
                {!forgotSuccess ? (
                  <ForgotPassword {...{ handleSubmit, loading }} />
                ) : (
                  <ForgotPasswordSuccess />
                )}
                <div className="text-center mt-6">
                  <button
                    onClick={() => {
                      setView("login");
                      setForgotSuccess(false);
                    }}
                    className="text-accent-blue hover:text-accent-amber font-medium flex items-center justify-center gap-2"
                  >
                    ← Back to Sign In
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
