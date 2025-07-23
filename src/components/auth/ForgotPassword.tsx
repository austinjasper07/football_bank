import { AuthView } from "@/app/[...auth]/page";
import React from "react";
import { FaCheck, FaKey } from "react-icons/fa";

export default function ForgotPassword({
  handleSubmit,
  loading,
}: {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>, type: AuthView) => void;
  loading: boolean;
}) {
  return (
    <>
      <div className="text-center mb-6">
        <div className="bg-accent-blue/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <FaKey className="text-accent-blue text-2xl" />
        </div>
        <h1 className="font-poppins font-bold text-2xl mb-2">
          Reset Your Password
        </h1>
        <p className="text-primary-muted">
          Enter your email and we&apos;ll send you reset instructions
        </p>
      </div>
      <form onSubmit={(e) => handleSubmit(e, "forgot")} className="space-y-6">
        <input
          type="email"
          required
          className="w-full bg-primary-bg border border-divider rounded-lg px-4 py-3"
          placeholder="Email address"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-accent-blue text-white py-3 rounded-lg"
        >
          {loading ? "Sending..." : "Send Reset Link"}
        </button>
      </form>
    </>
  );
}

export function ForgotPasswordSuccess() {
  return (
    <>
      <div className="text-center">
        <div className="bg-accent-green/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <FaCheck className="text-accent-green text-2xl" />
        </div>
        <h2 className="text-xl font-bold mb-2">Check Your Inbox!</h2>
        <p className="text-primary-muted mb-6">
          We&apos;ve sent password reset instructions to your email address.
        </p>
      </div>
    </>
  );
}
