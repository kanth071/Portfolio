import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Instagram } from 'lucide-react';
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
                </div>
            </div>
        </section>
    );
};

export default Hero;
