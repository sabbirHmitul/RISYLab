import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, HeartHandshake, CheckCircle2, Send, Sparkles } from 'lucide-react';
import Button from '../Common/Button';

interface VolunteerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VolunteerModal: React.FC<VolunteerModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    researchInterest: 'Unit 01 - Youth Leadership',
    background: '',
    motivation: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      researchInterest: 'Unit 01 - Youth Leadership',
      background: '',
      motivation: '',
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl p-6 sm:p-8 z-10 border border-gray-100 my-8"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-pink-50 rounded-full flex items-center justify-center text-pink-500 mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-extrabold font-heading text-gray-900">
                  Application Received!
                </h3>
                <p className="text-gray-600 text-sm font-sans max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.fullName}</strong>. Our research committee will review your volunteer application for <strong>{formData.researchInterest}</strong> and get back to you via email within 2-3 business days.
                </p>
                <div className="pt-4">
                  <Button variant="primary" size="md" onClick={handleReset}>
                    Done & Return to Site
                  </Button>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-2 rounded-xl bg-pink-50 text-pink-500">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <span className="text-xs uppercase font-bold text-pink-600 tracking-wider">
                    Join RISY Team
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold font-heading text-gray-900">
                  Become a Research Volunteer
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm font-sans mt-1 mb-6">
                  Contribute your skills to youth social studies, community activism, and scientific initiatives.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="sarah@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Preferred Research Unit *
                    </label>
                    <select
                      value={formData.researchInterest}
                      onChange={(e) => setFormData({ ...formData, researchInterest: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all text-sm"
                    >
                      <option>Unit 01 - Youth Leadership & Social Innovation</option>
                      <option>Unit 02 - STEM Education & Digital Literacy</option>
                      <option>Unit 03 - Mental Health & Adolescent Well-being</option>
                      <option>Unit 04 - Climate Action & Ecological Resilience</option>
                      <option>Unit 05 - Future of Work & Youth Entrepreneurship</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Brief Background & Skills
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Share your current school/degree, key technical or writing skills..."
                      value={formData.background}
                      onChange={(e) => setFormData({ ...formData, background: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all text-sm"
                    />
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="md"
                      className="w-full justify-center"
                      icon={<Send className="w-4 h-4" />}
                    >
                      Submit Volunteer Application
                    </Button>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default VolunteerModal;
