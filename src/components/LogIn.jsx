import { useState, useEffect } from 'react';
import { Mail, Lock, User, X, LogIn as LogInIcon, UserPlus } from 'lucide-react';
import { signIn, signUp } from '../api/auth';

export default function LogIn() {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState('signin');
  const [plan, setPlan] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const handleOpenLogin = (event) => {
      const detail = event.detail ?? {};
      setMode(detail.mode === 'signup' ? 'signup' : 'signin');
      setPlan(detail.plan ?? null);
      setErrorMessage('');
      setIsOpen(true);
    };
    window.addEventListener('open-login', handleOpenLogin);
    return () => window.removeEventListener('open-login', handleOpenLogin);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClose = () => {
    if (isSubmitting) return;
    setIsOpen(false);
  };

  const switchMode = () => {
    setErrorMessage('');
    setMode((current) => (current === 'signin' ? 'signup' : 'signin'));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setIsSubmitting(true);
    try {
      if (mode === 'signup') {
        await signUp({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          plan,
        });
      } else {
        await signIn({ email: formData.email, password: formData.password });
      }
      setIsOpen(false);
      setFormData({ name: '', email: '', password: '' });
      window.dispatchEvent(new CustomEvent('navigate-dashboard'));
    } catch (error) {
      setErrorMessage(error?.message ?? 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  const isSignUp = mode === 'signup';

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-slate-950/70 backdrop-blur-sm"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-md bg-slate-900 border border-white/10 rounded-lg shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close login"
          className="absolute cursor-pointer top-3 right-3 p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-white">
            {isSignUp ? 'Create your account' : 'Welcome back'}
          </h2>
          <p className="text-sm text-white/60 mt-1">
            {isSignUp
              ? plan
                ? `Sign up to start with the ${plan}`
                : 'Sign up for podfix in seconds'
              : 'Sign in to your podfix account'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {isSignUp && (
            <div>
              <label htmlFor="login-name" className="block text-sm font-medium text-white mb-2">
                Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                <input
                  id="login-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full pl-10 pr-4 py-3 bg-slate-950/50 border border-white/10 rounded-md text-white placeholder-white/40 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
            </div>
          )}

          <div>
            <label htmlFor="login-email" className="block text-sm font-medium text-white mb-2">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                id="login-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full pl-10 pr-4 py-3 bg-slate-950/50 border border-white/10 rounded-md text-white placeholder-white/40 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
          </div>

          <div>
            <label htmlFor="login-password" className="block text-sm font-medium text-white mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                id="login-password"
                name="password"
                type="password"
                required
                autoComplete={isSignUp ? 'new-password' : 'current-password'}
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-3 bg-slate-950/50 border border-white/10 rounded-md text-white placeholder-white/40 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
          </div>

          {errorMessage && (
            <p className="text-sm text-red-400" role="alert">{errorMessage}</p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full cursor-pointer flex items-center justify-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors font-medium disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSignUp ? <UserPlus className="w-4 h-4" /> : <LogInIcon className="w-4 h-4" />}
            {isSubmitting
              ? isSignUp ? 'Creating account…' : 'Signing in…'
              : isSignUp ? 'Create account' : 'Sign in'}
          </button>

          <p className="text-center text-sm text-white/60">
            {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
            <button
              type="button"
              onClick={switchMode}
              className="cursor-pointer text-blue-400 hover:text-blue-300 underline-offset-2 hover:underline"
            >
              {isSignUp ? 'Sign in' : 'Create account'}
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}
