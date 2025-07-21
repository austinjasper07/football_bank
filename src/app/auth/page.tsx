'use client';
import { useState, FormEvent } from 'react';
import Head from 'next/head';
import { FaEye, FaEyeSlash, FaEnvelope, FaKey, FaCheck, FaGoogle, FaFacebook } from 'react-icons/fa';

type AuthView = 'login' | 'signup' | 'forgot';

export default function AuthPage() {
  const [view, setView] = useState<AuthView>('login');
  const [showPassword, setShowPassword] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState(false);
  const [forgotSuccess, setForgotSuccess] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  const togglePassword = (field: string) => {
    setShowPassword(prev => ({ ...prev, [field]: !prev[field] }));
  };

  const getStrength = (value: string) => {
    let strength = 0;
    if (value.length >= 8) strength++;
    if (/[a-z]/.test(value) && /[A-Z]/.test(value)) strength++;
    if (/\d/.test(value)) strength++;
    if (/[^a-zA-Z0-9]/.test(value)) strength++;
    return strength;
  };

  const handleSubmit = (e: FormEvent, type: AuthView) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      if (type === 'forgot') {
        setForgotSuccess(true);
      } else {
        alert(`${type === 'login' ? 'Logged in' : 'Account created'} successfully!`);
      }
    }, 2000);
  };

  const strengthColors = ['bg-divider', 'bg-accent-red', 'bg-accent-amber', 'bg-accent-green'];

  return (
    <>
      <Head>
        <title>FootballBank Auth</title>
      </Head>

      <main className="min-h-screen flex items-center justify-center p-4 bg-primary-bg font-inter text-primary-text">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="text-center mb-8">
            <span className="font-poppins font-bold text-3xl text-accent-blue">
              FootballBank<span className="text-accent-green">.soccer</span>
            </span>
          </div>

          <div className="bg-primary-secondary rounded-2xl p-8 border border-divider shadow-2xl">
            {view === 'login' && (
              <>
                <h1 className="text-center text-2xl font-poppins font-bold mb-2">Welcome Back</h1>
                <p className="text-center text-primary-muted mb-6">Sign in to your account</p>
                <form onSubmit={(e) => handleSubmit(e, 'login')} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Email or Username</label>
                    <div className="relative">
                      <input type="email" className="w-full bg-primary-bg border border-divider rounded-lg px-4 py-3" placeholder="Enter your email" required />
                      <FaEnvelope className="absolute right-3 top-4 text-primary-muted" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Password</label>
                    <div className="relative">
                      <input type={showPassword.login ? 'text' : 'password'} className="w-full bg-primary-bg border border-divider rounded-lg px-4 py-3 pr-10" placeholder="Enter your password" required />
                      <button type="button" onClick={() => togglePassword('login')} className="absolute right-3 top-4 text-primary-muted">
                        {showPassword.login ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </div>
                    <div className="text-right mt-2">
                      <button type="button" onClick={() => setView('forgot')} className="text-sm text-accent-blue hover:text-accent-amber">Forgot Password?</button>
                    </div>
                  </div>

                  <button type="submit" disabled={loading} className="w-full bg-accent-blue hover:bg-accent-blue/80 text-white py-3 rounded-lg transition-all">
                    {loading ? 'Signing In...' : 'Sign In'}
                  </button>
                </form>

                {/* Divider */}
                <div className="flex items-center my-6">
                  <div className="flex-1 border-t border-divider"></div>
                  <span className="px-4 text-primary-muted text-sm">or continue with</span>
                  <div className="flex-1 border-t border-divider"></div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button className="flex items-center justify-center gap-2 bg-primary-bg border border-divider rounded-lg py-3 hover:border-accent-blue">
                    <FaGoogle className="text-lg" />
                    <span className="text-sm">Google</span>
                  </button>
                  <button className="flex items-center justify-center gap-2 bg-primary-bg border border-divider rounded-lg py-3 hover:border-accent-blue">
                    <FaFacebook className="text-lg" />
                    <span className="text-sm">Facebook</span>
                  </button>
                </div>

                <div className="text-center mt-6">
                  <span className="text-primary-muted">Don&apos;t have an account? </span>
                  <button onClick={() => setView('signup')} className="text-accent-blue hover:text-accent-amber font-medium">Sign up</button>
                </div>
              </>
            )}

            {view === 'signup' && (
              <>
                <h1 className="text-center text-2xl font-poppins font-bold mb-2">Create Your Account</h1>
                <p className="text-center text-primary-muted mb-6">Join the football community</p>
                <form onSubmit={(e) => handleSubmit(e, 'signup')} className="space-y-5">
                  <input type="text" required placeholder="Full Name" className="w-full bg-primary-bg border border-divider rounded-lg px-4 py-3" />
                  <input type="email" required placeholder="Email" className="w-full bg-primary-bg border border-divider rounded-lg px-4 py-3" />
                  <select required className="w-full bg-primary-bg border border-divider rounded-lg px-4 py-3">
                    <option value="">Select your role</option>
                    <option value="player">Player</option>
                    <option value="club">Club Representative</option>
                    <option value="scout">Scout</option>
                  </select>
                  <div>
                    <input
                      type={showPassword.signup ? 'text' : 'password'}
                      required
                      onChange={(e) => setPasswordStrength(getStrength(e.target.value))}
                      placeholder="Create Password"
                      className="w-full bg-primary-bg border border-divider rounded-lg px-4 py-3 pr-10"
                    />
                    <button type="button" onClick={() => togglePassword('signup')} className="absolute right-3 top-[10px] text-primary-muted">
                      {showPassword.signup ? <FaEyeSlash /> : <FaEye />}
                    </button>
                    <div className="flex gap-1 mt-2">
                      {[0, 1, 2, 3].map((i) => (
                        <div key={i} className={`flex-1 h-1 rounded ${i < passwordStrength ? strengthColors[passwordStrength] : 'bg-divider'}`} />
                      ))}
                    </div>
                  </div>
                  <input type="password" required placeholder="Confirm Password" className="w-full bg-primary-bg border border-divider rounded-lg px-4 py-3" />
                  <label className="flex gap-2 items-start text-sm">
                    <input type="checkbox" required className="mt-1" />
                    I agree to the <span className="text-accent-blue cursor-pointer hover:text-accent-amber">Terms & Privacy</span>
                  </label>
                  <button type="submit" disabled={loading} className="w-full bg-accent-blue text-white py-3 rounded-lg">
                    {loading ? 'Creating Account...' : 'Create Account'}
                  </button>
                </form>
                <div className="text-center mt-6">
                  <span className="text-primary-muted">Already have an account? </span>
                  <button onClick={() => setView('login')} className="text-accent-blue hover:text-accent-amber font-medium">Sign in</button>
                </div>
              </>
            )}

            {view === 'forgot' && (
              <>
                {!forgotSuccess ? (
                  <>
                    <div className="text-center mb-6">
                      <div className="bg-accent-blue/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <FaKey className="text-accent-blue text-2xl" />
                      </div>
                      <h1 className="font-poppins font-bold text-2xl mb-2">Reset Your Password</h1>
                      <p className="text-primary-muted">Enter your email and we&apos;ll send you reset instructions</p>
                    </div>
                    <form onSubmit={(e) => handleSubmit(e, 'forgot')} className="space-y-6">
                      <input type="email" required className="w-full bg-primary-bg border border-divider rounded-lg px-4 py-3" placeholder="Email address" />
                      <button type="submit" disabled={loading} className="w-full bg-accent-blue text-white py-3 rounded-lg">
                        {loading ? 'Sending...' : 'Send Reset Link'}
                      </button>
                    </form>
                  </>
                ) : (
                  <div className="text-center">
                    <div className="bg-accent-green/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaCheck className="text-accent-green text-2xl" />
                    </div>
                    <h2 className="text-xl font-bold mb-2">Check Your Inbox!</h2>
                    <p className="text-primary-muted mb-6">We&apos;ve sent password reset instructions to your email address.</p>
                  </div>
                )}
                <div className="text-center mt-6">
                  <button onClick={() => { setView('login'); setForgotSuccess(false); }} className="text-accent-blue hover:text-accent-amber font-medium flex items-center justify-center gap-2">
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
