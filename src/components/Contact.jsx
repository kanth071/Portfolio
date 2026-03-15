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
            <div className="max-w-7xl mx-auto px-4 md:px-12">
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
                                <div key={idx} className="bg-white p-6 sm:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 group hover:shadow-lg transition-all">
                                    <div className={`p-4 sm:p-6 ${info.color} rounded-2xl group-hover:scale-110 transition-transform shadow-sm flex-shrink-0`}>
                                        {info.icon}
                                    </div>
                                    <div className="w-full overflow-hidden">
                                        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mb-1 sm:mb-2">{info.label}</h4>
                                        <p className="text-base sm:text-xl md:text-2xl font-bold text-slate-800 tracking-tight transition-colors truncate">{info.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-slate-50 p-6 sm:p-8 md:p-12 rounded-[2.5rem] sm:rounded-[3.5rem] border border-slate-100">
                            <h3 className="text-2xl font-bold text-slate-800 mb-6 sm:mb-10 tracking-tight transition-colors">Social Profiles</h3>
                            <div className="flex flex-wrap gap-4 sm:gap-6">
                                <a href="https://github.com/kanth071" target="_blank" rel="noopener noreferrer" className="p-4 sm:p-5 bg-white border border-slate-100 shadow-sm text-[#1e40af] rounded-full hover:scale-110 hover:shadow-md transition-all">
                                    <Github className="w-6 h-6 sm:w-8 sm:h-8" />
                                </a>
                                <a href="https://www.linkedin.com/in/lakshmi-kanth-pulipaka-6957b932b" target="_blank" rel="noopener noreferrer" className="p-4 sm:p-5 bg-white border border-slate-100 shadow-sm text-[#1e40af] rounded-full hover:scale-110 hover:shadow-md transition-all">
                                    <Linkedin className="w-6 h-6 sm:w-8 sm:h-8" />
                                </a>
                                <a href="https://www.instagram.com/mr__cool_071" target="_blank" rel="noopener noreferrer" className="p-4 sm:p-5 bg-white border border-slate-100 shadow-sm text-[#1e40af] rounded-full hover:scale-110 hover:shadow-md transition-all">
                                    <Instagram className="w-6 h-6 sm:w-8 sm:h-8" />
                                </a>
                                <a href="https://wa.me/919505458711" target="_blank" rel="noopener noreferrer" className="p-4 sm:p-5 bg-green-50 border border-green-100 shadow-sm text-green-600 rounded-full hover:scale-110 hover:shadow-md transition-all">
                                    <svg className="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.412c-1.935 0-3.83-.502-5.496-1.455l-.392-.224-4.085 1.071 1.09-3.982-.246-.392c-.996-1.587-1.52-3.421-1.52-5.308 0-5.741 4.673-10.415 10.417-10.415 2.78 0 5.394 1.082 7.359 3.049 1.966 1.967 3.048 4.581 3.048 7.366 0 5.742-4.675 10.416-10.417 10.416m10.414-20.781c-2.781-2.783-6.478-4.314-10.414-4.314-8.1 0-14.693 6.591-14.693 14.693 0 2.59.676 5.116 1.961 7.347l-2.083 7.611 7.787-2.041c2.152 1.171 4.59 1.789 7.076 1.789 8.1 0 14.695-6.591 14.695-14.695 0-3.924-1.527-7.619-4.315-10.414"/>
                                    </svg>
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
                        <div className="bg-white p-6 sm:p-8 md:p-12 rounded-[2.5rem] sm:rounded-[3.5rem] border border-slate-100 shadow-xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 group-hover:bg-blue-100 rounded-full -mr-16 -mt-16 transition-colors duration-500"></div>
                            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8 relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
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
