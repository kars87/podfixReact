import { useState, useEffect } from 'react';
import { Mail, MessageSquare, User, Send, X } from 'lucide-react';
import { sendContactMessage } from '../api/contact';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#contact') setIsOpen(true);
    };
    const handleOpenContact = () => {
      setIsOpen(true);
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };
    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('open-contact', handleOpenContact);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('open-contact', handleOpenContact);
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setIsSubmitting(true);
    try {
      await sendContactMessage(formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 4000);
    } catch (error) {
      setErrorMessage(error?.message ?? 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <section id="contact" className="relative bg-slate-900 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Have questions about podfix? We'd love to hear from you.</h2>
          
        </div>

        {!isOpen && (
          <div className="text-center">
            <button
              onClick={() => setIsOpen(true)}
              className="cursor-pointer px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors font-medium"
            >
                Contact Us
            </button>
          </div>
        )}

        {isOpen && (
        <form
          onSubmit={handleSubmit}
          className="relative bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-lg shadow-lg border border-white/5 space-y-6"
        >
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close contact form"
            className="absolute cursor-pointer top-3 right-3 p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
              Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full pl-10 pr-4 py-3 bg-slate-950/50 border border-white/10 rounded-md text-white placeholder-white/40 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full pl-10 pr-4 py-3 bg-slate-950/50 border border-white/10 rounded-md text-white placeholder-white/40 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
              Message
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-white/40" />
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us what's on your mind..."
                className="w-full pl-10 pr-4 py-3 bg-slate-950/50 border border-white/10 rounded-md text-white placeholder-white/40 focus:outline-none focus:border-blue-500 transition-colors resize-none"
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
            <Send className="w-4 h-4" />
            {isSubmitting ? 'Sending…' : 'Send message'}
          </button>

          {submitted && (
            <p className="text-center text-sm text-blue-400">
              Thanks! Your message has been sent.
            </p>
          )}
        </form>
        )}
      </div>
    </section>
  );
}