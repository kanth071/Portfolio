import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', to: 'home' },
        { name: 'About', to: 'about' },
        { name: 'Skills', to: 'skills' },
        { name: 'Projects', to: 'projects' },
        { name: 'Contact', to: 'contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 flex justify-center py-8 px-4 md:px-8 pointer-events-none">
            <div className={`transition-all duration-700 flex items-center justify-between px-10 py-5 rounded-full border border-slate-100 pointer-events-auto ${scrolled
                ? 'bg-white/95 backdrop-blur-xl shadow-2xl w-full max-w-5xl translate-y-[-10px]'
                : 'bg-white shadow-xl w-full max-w-6xl'
                }`}>

                {/* Logo Section */}
                <div className="flex items-center gap-4 group cursor-pointer shrink-0">
                    <div className="w-12 h-12 bg-[#1e40af] text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg shadow-blue-200 transition-transform group-hover:scale-105">
                        P
                    </div>
                    <span className="font-bold text-slate-900 text-lg tracking-tight">
                        Lakshmi Kanth
                    </span>
                </div>

                {/* Desktop Navigation Group */}
                <div className="hidden lg:flex items-center gap-12">
                    <div className="flex items-center gap-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.to}
                                smooth={true}
                                spy={true}
                                offset={-100}
                                activeClass="active-nav-link text-[#1e40af]"
                                className="text-sm font-bold text-slate-600 hover:text-[#1e40af] transition-all cursor-pointer py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#1e40af] after:transition-all hover:after:w-full"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                </div>

                {/* Mobile Menu Icon */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="lg:hidden p-3 text-slate-800 hover:bg-slate-50 rounded-full transition-colors"
                >
                    {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                </button>
            </div>

            {/* Enhanced Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden absolute top-32 left-4 right-4 bg-white/98 backdrop-blur-2xl rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 p-12 animate-in fade-in zoom-in duration-300 z-50 pointer-events-auto">
                    <div className="flex flex-col items-center gap-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.to}
                                smooth={true}
                                spy={true}
                                onClick={() => setIsMenuOpen(false)}
                                className="text-2xl font-bold text-slate-800 hover:text-[#1e40af] transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
