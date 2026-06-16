import React, { useState, useEffect } from 'react';
import { Mail, User, Phone, Send, Trash2, CheckCircle2, MessageSquare } from 'lucide-react';
import { ContactMessage } from '../types';

export default function ContactForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [savedMessages, setSavedMessages] = useState<ContactMessage[]>([]);
  const [errorMsg, setErrorMsg] = useState('');

  // Load existing messages on mount
  useEffect(() => {
    const loaded = localStorage.getItem('joe90z_messages');
    if (loaded) {
      try {
        setSavedMessages(JSON.parse(loaded));
      } catch (e) {
        console.error("Failed to parse saved messages: ", e);
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setSubmitSuccess(false);

    // Simple validation
    if (!email.trim() || !name.trim() || !message.trim()) {
      setErrorMsg('Please fill in all required fields (*).');
      return;
    }

    setIsSubmitting(true);

    // Simulate network delay beautifully
    setTimeout(() => {
      const newMessage: ContactMessage = {
        id: `msg-${Date.now()}`,
        email: email.trim(),
        name: name.trim(),
        phone: phone.trim() || undefined,
        message: message.trim(),
        timestamp: new Date().toLocaleString()
      };

      const updated = [newMessage, ...savedMessages];
      setSavedMessages(updated);
      localStorage.setItem('joe90z_messages', JSON.stringify(updated));

      // Clear inputs
      setEmail('');
      setName('');
      setPhone('');
      setMessage('');
      
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 1200);
  };

  const deleteMessage = (id: string) => {
    const filtered = savedMessages.filter(msg => msg.id !== id);
    setSavedMessages(filtered);
    localStorage.setItem('joe90z_messages', JSON.stringify(filtered));
  };

  const clearAllMessages = () => {
    if (window.confirm("Are you sure you want to clear all submission logs?")) {
      setSavedMessages([]);
      localStorage.removeItem('joe90z_messages');
    }
  };

  return (
    <div id="contact-form-widget" className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      {/* Contact Form Details */}
      <div className="bg-zinc-900 border border-zinc-800/80 rounded-2xl p-6 md:p-8">
        <h3 className="text-2xl font-bold font-heading text-white tracking-tight mb-2">
          Drop me a line
        </h3>
        <p className="text-zinc-400 text-sm mb-6">
          Submit your email, request beats, license sample clearance, or secure bookings for DJ slots.
        </p>

        {submitSuccess && (
          <div className="mb-6 p-4 bg-emerald-950/40 border border-emerald-500/30 rounded-xl flex items-start gap-3 animate-fade-in">
            <CheckCircle2 className="text-emerald-400 w-5 h-5 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-emerald-200 font-semibold text-sm">Message Sent Successfully!</p>
              <p className="text-emerald-400/80 text-xs mt-0.5">Your message has been registered in the database list below.</p>
            </div>
          </div>
        )}

        {errorMsg && (
          <div className="mb-6 p-4 bg-red-950/40 border border-red-500/30 rounded-xl text-red-200 text-xs">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <label htmlFor="name-input" className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
              Name <span className="text-fuchsia-500">*</span>
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
                <User className="w-4 h-4" />
              </span>
              <input
                id="name-input"
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl py-3 pl-11 pr-4 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-fuchsia-500 transition-colors"
                disabled={isSubmitting}
                required
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="email-input" className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
              Email Address <span className="text-fuchsia-500">*</span>
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
                <Mail className="w-4 h-4" />
              </span>
              <input
                id="email-input"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl py-3 pl-11 pr-4 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-fuchsia-500 transition-colors"
                disabled={isSubmitting}
                required
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="phone-input" className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
              Phone Number
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
                <Phone className="w-4 h-4" />
              </span>
              <input
                id="phone-input"
                type="tel"
                placeholder="+44 7123 456789"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl py-3 pl-11 pr-4 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-fuchsia-500 transition-colors"
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="message-input" className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
              Message <span className="text-fuchsia-500">*</span>
            </label>
            <textarea
              id="message-input"
              rows={4}
              placeholder="Enter your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-fuchsia-500 transition-colors resize-none"
              disabled={isSubmitting}
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-fuchsia-600 hover:bg-fuchsia-500 active:scale-[0.99] text-white py-3 px-6 rounded-xl font-semibold text-sm transition-all shadow-lg hover:shadow-fuchsia-500/10 flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            ) : (
              <Send className="w-4 h-4" />
            )}
            {isSubmitting ? 'Sending...' : 'Contact JOE90z'}
          </button>
        </form>
      </div>

      {/* Submission Logs (Proof of Real Functionality) */}
      <div className="bg-zinc-900 border border-zinc-800/80 rounded-2xl p-6 md:p-8 h-full flex flex-col justify-between max-h-[580px] overflow-y-auto">
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold font-heading text-white tracking-tight flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-fuchsia-500" />
              Submission Logs
            </h3>
            {savedMessages.length > 0 && (
              <button
                onClick={clearAllMessages}
                className="text-xs text-zinc-500 hover:text-red-400 transition-colors flex items-center gap-1 font-mono"
              >
                <Trash2 className="w-3.5 h-3.5" />
                Clear All
              </button>
            )}
          </div>
          
          <div className="space-y-4">
            {savedMessages.length === 0 ? (
              <div className="text-center py-12 border-2 border-dashed border-zinc-800 rounded-xl text-zinc-500">
                <MessageSquare className="w-8 h-8 mx-auto mb-2 text-zinc-600" />
                <p className="text-xs font-mono">No submissions recorded yet.</p>
                <p className="text-[11px] text-zinc-600 mt-1 max-w-[200px] mx-auto">
                  Messages submitted on the left are saved here locally.
                </p>
              </div>
            ) : (
              savedMessages.map((msg) => (
                <div key={msg.id} className="bg-zinc-950 border border-zinc-800/60 rounded-xl p-4 space-y-3 relative group">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-sm font-semibold text-white leading-none">{msg.name}</h4>
                      <p className="text-[11px] text-zinc-500 font-mono mt-1">{msg.email}</p>
                      {msg.phone && <p className="text-[11px] text-zinc-500 font-mono mt-0.5">{msg.phone}</p>}
                    </div>
                    <button
                      onClick={() => deleteMessage(msg.id)}
                      className="p-1 rounded bg-zinc-900 hover:bg-red-950/30 text-zinc-500 hover:text-red-400 transition-colors"
                      title="Delete log"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed bg-zinc-900/60 px-3 py-2 rounded-lg break-all">
                    {msg.message}
                  </p>
                  <p className="text-[10px] text-zinc-600 font-mono text-right">{msg.timestamp}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
