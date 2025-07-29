import { AuthView } from "@/app/[...auth]/page";
import React, { FormEvent, Dispatch, SetStateAction} from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

type SignUp = {
  handleSubmit: (e: FormEvent, type: AuthView) => void;
  loading: boolean;
  togglePassword: (field: string) => void;
  showPassword: { login: boolean; signup: boolean };
  getStrength: (value: string) => number;
  passwordStrength: number;
  setPasswordStrength: React.Dispatch<React.SetStateAction<number>>;
  strengthColors: string[];
  setView: Dispatch<SetStateAction<AuthView>>;
};

export default function SignUp({
  handleSubmit,
  loading,
  togglePassword,
  showPassword,
  getStrength,
  passwordStrength,
  setPasswordStrength,
  strengthColors,
  setView,
}: SignUp) {
  return (
    <>
      <h1 className="text-center text-2xl font-poppins font-bold mb-2">
        Create Your Account
      </h1>
      <p className="text-center text-primary-muted mb-6">
        Join the football community
      </p>
      <form onSubmit={(e) => handleSubmit(e, "signup")} className="space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <input
          type="text"
          name="firstName" // ✅ required for FormData
          required
          placeholder="First Name"
          className="w-full bg-primary-bg border border-divider rounded-lg px-4 py-3"
        />
          <input
          type="text"
          name="lastName" // ✅ required for FormData
          required
          placeholder="Last Name"
          className="w-full bg-primary-bg border border-divider rounded-lg px-4 py-3"
        />
        </div>
        
        <input
          type="email"
          name="email" // ✅
          required
          placeholder="Email"
          className="w-full bg-primary-bg border border-divider rounded-lg px-4 py-3"
        />
        <select
          name="role" // ✅
          required
          className="w-full bg-primary-bg border border-divider rounded-lg px-4 py-3"
        >
          <option value="">Select your role</option>
          <option value="user">Regular User</option>
          <option value="player">Player</option>
          <option value="club">Club Representative</option>
          <option value="scout">Scout</option>
        </select>
        <div className="relative">
          <input
            type={showPassword.signup ? "text" : "password"}
            name="password" // ✅
            required
            onChange={(e) => setPasswordStrength(getStrength(e.target.value))}
            placeholder="Create Password"
            className="w-full bg-primary-bg border border-divider rounded-lg px-4 py-3 pr-10"
          />
          <button
            type="button"
            onClick={() => togglePassword("signup")}
            className="absolute right-3 top-[15px] text-primary-muted"
          >
            {showPassword.signup ? <FaEyeSlash /> : <FaEye />}
          </button>
          <div className="flex gap-1 mt-2">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className={`flex-1 h-1 rounded ${
                  i < passwordStrength
                    ? strengthColors[passwordStrength]
                    : "bg-divider"
                }`}
              />
            ))}
          </div>
        </div>
        <input
          type="password"
          name="confirmPassword" // ✅
          required
          placeholder="Confirm Password"
          className="w-full bg-primary-bg border border-divider rounded-lg px-4 py-3"
        />
        <label className="flex gap-2 items-start text-sm">
          <input type="checkbox" name="terms" required className="mt-1" />I
          agree to the{" "}
          <span className="text-accent-red cursor-pointer hover:text-accent-amber">
            Terms & Privacy
          </span>
        </label>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-accent-red text-white py-3 rounded-lg"
        >
          {loading ? "Creating Account..." : "Create Account"}
        </button>
      </form>

      <div className="text-center mt-6">
        <span className="text-primary-muted">Already have an account? </span>
        <button
          onClick={() => setView("login")}
          className="text-accent-red hover:text-accent-amber font-medium"
        >
          Sign in
        </button>
      </div>
    </>
  );
}
