import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle, Github, Linkedin, Instagram, CheckCircle2, AlertCircle } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState({ submitting: false, success: false, error: null });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ submitting: true, success: false, error: null });

        try {
            const response = await fetch('https://formspree.io/f/xpqywwzw', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus({ submitting: false, success: true, error: null });
                setFormData({ name: '', email: '', subject: '', message: '' });
                setTimeout(() => setStatus(s => ({ ...s, success: false })), 5000);
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            setStatus({ submitting: false, success: false, error: 'Something went wrong. Please try again.' });
        }
    };

    const contactInfo = [
        { label: 'Email', value: 'kanthpuli07@gmail.com', icon: <Mail className="w-8 h-8 text-[#1e40af]" />, color: 'bg-blue-50' },
        { label: 'Phone', value: '+91 95054 58711', icon: <Phone className="w-8 h-8 text-[#1e40af]" />, color: 'bg-indigo-50' },
        { label: 'Location', value: 'Bhimavaram, India', icon: <MapPin className="w-8 h-8 text-[#1e40af]" />, color: 'bg-sky-50' },
    ];

    return (
        <section id="contact" className="section-padding py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold text-[#1e40af] mb-4">
                        Get In Touch
                    </h2>
                    <p className="text-slate-600 font-medium">Have a project in mind? Let's talk.</p>
                </div>

                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 space-y-8"
                    >
                        <div className="grid grid-cols-1 gap-8">
                            {contactInfo.map((info, idx) => (
                                <div key={idx} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm flex items-center gap-8 group hover:shadow-lg transition-all">
                                    <div className={`p-6 ${info.color} rounded-2xl group-hover:scale-110 transition-transform shadow-sm`}>
                                        {info.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mb-2">{info.label}</h4>
                                        <p className="text-xl sm:text-2xl font-bold text-slate-800 tracking-tight transition-colors truncate max-w-[200px] sm:max-w-none">{info.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-slate-50 p-12 rounded-[3.5rem] border border-slate-100">
                            <h3 className="text-2xl font-bold text-slate-800 mb-10 tracking-tight transition-colors">Social Profiles</h3>
                            <div className="flex flex-wrap gap-6">
                                <a href="https://github.com/kanth071" target="_blank" rel="noopener noreferrer" className="p-5 bg-white border border-slate-100 shadow-sm text-[#1e40af] rounded-full hover:scale-110 hover:shadow-md transition-all">
                                    <Github className="w-8 h-8" />
                                </a>
                                <a href="https://www.linkedin.com/in/lakshmi-kanth-pulipaka-6957b932b" target="_blank" rel="noopener noreferrer" className="p-5 bg-white border border-slate-100 shadow-sm text-[#1e40af] rounded-full hover:scale-110 hover:shadow-md transition-all">
                                    <Linkedin className="w-8 h-8" />
                                </a>
                                <a href="https://www.instagram.com/mr__cool_071" target="_blank" rel="noopener noreferrer" className="p-5 bg-white border border-slate-100 shadow-sm text-[#1e40af] rounded-full hover:scale-110 hover:shadow-md transition-all">
                                    <Instagram className="w-8 h-8" />
                                </a>
                                <a href="https://wa.me/919505458711" target="_blank" rel="noopener noreferrer" className="p-5 bg-green-50 border border-green-100 shadow-sm text-green-600 rounded-full hover:scale-110 hover:shadow-md transition-all">
                                    <MessageCircle className="w-8 h-8" />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1"
                    >
                        <div className="bg-white p-8 sm:p-12 rounded-[3.5rem] border border-slate-100 shadow-xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 group-hover:bg-blue-100 rounded-full -mr-16 -mt-16 transition-colors duration-500"></div>
                            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-3 tracking-wide uppercase">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Your Name"
                                            className="w-full px-6 py-5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-[#1e40af] focus:border-transparent outline-none transition-all font-medium"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-3 tracking-wide uppercase">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="your@email.com"
                                            className="w-full px-6 py-5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-[#1e40af] focus:border-transparent outline-none transition-all font-medium"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-3 tracking-wide uppercase">Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        placeholder="How can I help?"
                                        className="w-full px-6 py-5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-[#1e40af] focus:border-transparent outline-none transition-all font-medium"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-3 tracking-wide uppercase">Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="5"
                                        required
                                        placeholder="Write your message here..."
                                        className="w-full px-6 py-5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-[#1e40af] focus:border-transparent outline-none transition-all resize-none font-medium"
                                    ></textarea>
                                </div>

                                {status.error && (
                                    <div className="flex items-center gap-2 text-red-600 font-bold bg-red-50 p-4 rounded-xl animate-in fade-in">
                                        <AlertCircle className="w-5 h-5" />
                                        {status.error}
                                    </div>
                                )}

                                {status.success && (
                                    <div className="flex items-center gap-2 text-green-600 font-bold bg-green-50 p-4 rounded-xl animate-in fade-in slide-in-from-bottom-2">
                                        <CheckCircle2 className="w-5 h-5" />
                                        Message sent! I will get back to you soon.
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={status.submitting}
                                    className={`bg-[#1e40af] text-white w-full flex items-center justify-center gap-3 text-xl py-6 rounded-[2rem] font-bold shadow-2xl hover:bg-blue-800 transition-all active:scale-95 group-hover:-translate-y-1 ${status.submitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                >
                                    {status.submitting ? (
                                        <>Sending <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div></>
                                    ) : (
                                        <>Send Message <Send className="w-6 h-6" /></>
                                    )}
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
