"use client";
import { useState, FormEvent, useEffect } from "react";
import Head from "next/head";
import { notFound, usePathname } from "next/navigation";
import { FaKey, FaCheck } from "react-icons/fa";
import SignUp from "@/components/auth/SignUp";
import Login from "@/components/auth/Login";
import ForgotPassword, { ForgotPasswordSuccess } from "@/components/auth/ForgotPassword";

export type AuthView = "" | "login" | "signup" | "forgot";

export default function AuthPage() {
  const [view, setView] = useState<AuthView>("");
  const [showPassword, setShowPassword] = useState<{ login: boolean }>({login: false,});
  const [loading, setLoading] = useState(false);
  const [forgotSuccess, setForgotSuccess] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const pathname = usePathname();

  const togglePassword = (field: string) => {
    setShowPassword((prev) => ({
      ...prev,
      [field as keyof typeof prev]: !prev[field as keyof typeof prev],
    }));
  };

  const getStrength = (value: string) => {
    let strength = 0;
    if (value.length >= 8) strength++;
    if (/[a-z]/.test(value) && /[A-Z]/.test(value)) strength++;
    if (/\d/.test(value)) strength++;
    if (/[^a-zA-Z0-9]/.test(value)) strength++;
    return strength;
  };

  useEffect(() => {
    if (pathname.includes("/auth/login")) {
      setView("login");
    } else if (pathname.includes("/auth/signup")) {
      setView("signup");
    } else if (pathname.includes("/auth/forgot-password")) {
      setView("forgot");
    } else {
      notFound();
    }
  }, [pathname]);

  const handleSubmit = (e: FormEvent, type: AuthView) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      if (type === "forgot") {
        setForgotSuccess(true);
      } else {
        alert(
          `${type === "login" ? "Logged in" : "Account created"} successfully!`
        );
      }
    }, 2000);
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
                  setView: (view: string) => setView(view as AuthView),
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
