import { AuthView } from "@/app/[...auth]/page";
import React, { FormEvent } from "react";
import {
  FaEnvelope,
  FaEye,
  FaEyeSlash,
  FaFacebook,
  FaGoogle,
} from "react-icons/fa";

interface LoginProps {
  handleSubmit: (e: FormEvent, type: AuthView) => void;
  loading: boolean;
  togglePassword: (field: string) => void;
  showPassword: { login: boolean };
  setView: (view: string) => void;
}

export default function Login({
  handleSubmit,
  loading,
  togglePassword,
  showPassword,
  setView,
}: LoginProps) {
  return (
    <>
      <h1 className="text-center text-2xl font-poppins font-bold mb-2">
        Welcome Back
      </h1>
      <p className="text-center text-primary-muted mb-6">
        Sign in to your account
      </p>
      <form onSubmit={(e) => handleSubmit(e, "login")} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">
            Email or Username
          </label>
          <div className="relative">
            <input
              type="email"
              className="w-full bg-primary-bg border border-divider rounded-lg px-4 py-3"
              placeholder="Enter your email"
              required
            />
            <FaEnvelope className="absolute right-3 top-4 text-primary-muted" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Password</label>
          <div className="relative">
            <input
              type={showPassword.login ? "text" : "password"}
              className="w-full bg-primary-bg border border-divider rounded-lg px-4 py-3 pr-10"
              placeholder="Enter your password"
              required
            />
            <button
              type="button"
              onClick={() => togglePassword("login")}
              className="absolute right-3 top-4 text-primary-muted"
            >
              {showPassword.login ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <div className="text-right mt-2">
            <button
              type="button"
              onClick={() => setView("forgot")}
              className="text-sm text-accent-red hover:text-accent-amber"
            >
              Forgot Password?
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-accent-red hover:bg-accent-red/80 text-white py-3 rounded-lg transition-all"
        >
          {loading ? "Signing In..." : "Sign In"}
        </button>
      </form>

      {/* Divider */}
      <div className="flex items-center my-6">
        <div className="flex-1 border-t border-divider"></div>
        <span className="px-4 text-primary-muted text-sm">
          or continue with
        </span>
        <div className="flex-1 border-t border-divider"></div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <button className="flex items-center justify-center gap-2 bg-primary-bg border border-divider rounded-lg py-3 hover:border-accent-red">
          <FaGoogle className="text-lg" />
          <span className="text-sm">Google</span>
        </button>
        <button className="flex items-center justify-center gap-2 bg-primary-bg border border-divider rounded-lg py-3 hover:border-accent-red">
          <FaFacebook className="text-lg" />
          <span className="text-sm">Facebook</span>
        </button>
      </div>

      <div className="text-center mt-6">
        <span className="text-primary-muted">Don&apos;t have an account? </span>
        <button
          onClick={() => setView("signup")}
          className="text-accent-red hover:text-accent-amber font-medium"
        >
          Sign up
        </button>
      </div>
    </>
  );
}
