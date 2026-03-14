import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Instagram, User } from 'lucide-react';
import { Link } from 'react-scroll';

import profileImg from '../assets/profile.png';

const Hero = () => {
    return (
        <section id="home" className="min-h-[85vh] flex items-center pt-32 pb-12 bg-[#f8fbfe]">
            <div className="max-w-7xl mx-auto px-4 md:px-12 w-full">
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 text-center md:text-left"
                    >
                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold mb-10 text-[#1e40af] tracking-tight leading-[1.1] transition-all overflow-visible">
                            Pulipaka <br />
                            <span className="whitespace-nowrap">Lakshmi Kanth</span>
                        </h1>
                        <p className="text-xl font-medium text-slate-600 mb-10 tracking-wide transition-all">
                            Welcome to my professional portfolio
                        </p>

                        <div className="flex flex-col gap-5 mb-10 items-center md:items-start text-lg font-medium text-[#1e40af]">
                            <div className="flex items-center gap-4 hover:translate-x-2 transition-transform duration-300">
                                <Mail className="w-5 h-5" strokeWidth={2.5} />
                                <span>kanthpuli07@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-4 hover:translate-x-2 transition-transform duration-300">
                                <MapPin className="w-5 h-5" strokeWidth={2.5} />
                                <span>Bhimavaram, India</span>
                            </div>
                        </div>

                        <div className="flex items-center justify-center md:justify-start gap-8 mb-12 text-[#1e40af]">
                            <a href="https://github.com/kanth071" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform duration-300">
                                <Github strokeWidth={2.5} className="w-7 h-7" />
                            </a>
                            <a href="https://www.linkedin.com/in/lakshmi-kanth-pulipaka-6957b932b" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform duration-300">
                                <Linkedin strokeWidth={2.5} className="w-7 h-7" />
                            </a>
                            <a href="https://www.instagram.com/mr__cool_071" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform duration-300">
                                <Instagram strokeWidth={2.5} className="w-7 h-7" />
                            </a>
                        </div>

                        <Link
                            to="contact"
                            smooth={true}
                            duration={800}
                            offset={-100}
                        >
                            <button className="bg-[#1e40af] text-white px-10 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:bg-blue-800 transition-all duration-300 transform active:scale-95 cursor-pointer">
                                Contact
                            </button>
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="flex-1 flex justify-center lg:justify-end items-center"
                    >
                        <div className="relative group">
                            {/* Layered Background Glows */}
                            <div className="absolute -inset-4 bg-gradient-to-tr from-[#1e40af] to-indigo-600 rounded-[4rem] blur-3xl opacity-10 group-hover:opacity-20 transition duration-1000"></div>
                            <div className="absolute -inset-1 bg-gradient-to-r from-[#1e40af] to-sky-400 rounded-[4rem] opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                            
                            {/* The Main Frame */}
                            <motion.div 
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[520px] bg-white p-4 rounded-[4rem] shadow-[0_32px_64px_-16px_rgba(30,64,175,0.15)] border border-slate-100 overflow-hidden group-hover:shadow-[0_48px_80px_-20px_rgba(30,64,175,0.25)] transition-all duration-500"
                            >
                                {/* Tech Brackets/Corners */}
                                <div className="absolute top-8 left-8 w-12 h-12 border-t-4 border-l-4 border-[#1e40af]/20 rounded-tl-2xl"></div>
                                <div className="absolute top-8 right-8 w-12 h-12 border-t-4 border-r-4 border-[#1e40af]/20 rounded-tr-2xl"></div>
                                <div className="absolute bottom-8 left-8 w-12 h-12 border-b-4 border-l-4 border-[#1e40af]/20 rounded-bl-2xl"></div>
                                <div className="absolute bottom-8 right-8 w-12 h-12 border-b-4 border-r-4 border-[#1e40af]/20 rounded-br-2xl"></div>

                                {/* Content Interior */}
                                <div className="w-full h-full bg-slate-50/50 rounded-[3.5rem] border-2 border-dashed border-slate-200 flex flex-col items-center justify-center relative overflow-hidden group-hover:bg-blue-50/30 transition-colors duration-500">
                                    <div className="relative">
                                        <div className="w-24 h-24 lg:w-36 lg:h-36 bg-white rounded-full flex items-center justify-center shadow-xl border border-slate-100 group-hover:scale-105 transition-transform duration-700">
                                            <User className="w-12 h-12 lg:w-16 lg:h-16 text-[#1e40af]/40" strokeWidth={1.5} />
                                        </div>
                                        {/* Scanning Line Effect */}
                                        <motion.div 
                                            animate={{ top: ['0%', '100%', '0%'] }}
                                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                            className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#1e40af]/20 to-transparent z-10"
                                        />
                                    </div>
                                    
                                    <h3 className="mt-8 text-slate-400 font-bold uppercase tracking-[0.3em] text-xs lg:text-sm">Profile Visual</h3>
                                    <div className="mt-4 flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                        <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">System Ready</span>
                                    </div>

                                    {/* Placeholder for future Image */}
                                    {/* <img src={profileImg} alt="Lakshmi Kanth" className="absolute inset-0 w-full h-full object-cover rounded-[3.5rem] z-20" /> */}
                                </div>

                                {/* Floating Badge */}
                                <div className="absolute top-12 left-12 bg-[#1e40af] text-white px-4 py-1.5 rounded-full text-[10px] font-bold tracking-tighter shadow-lg transform -rotate-12 translate-y-2 group-hover:translate-y-0 transition-transform">
                                    AI/ML SPECIALIST
                                </div>
                            </motion.div>

                            {/* Background Shapes */}
                            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border-[20px] border-[#1e40af]/5 rounded-[5rem] rotate-12 group-hover:rotate-6 transition-transform duration-1000"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
