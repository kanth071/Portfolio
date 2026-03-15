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
        { name: 'Experience', to: 'experience' },
        { name: 'Projects', to: 'projects' },
        { name: 'Contact', to: 'contact' },
    ];

    return (
        <nav className={`fixed left-0 right-0 z-50 transition-all duration-500 w-full ${
            scrolled ? 'top-4' : 'top-6'
        }`}>
            <div className="max-w-7xl mx-auto px-4 md:px-12">
                <div className={`flex items-center justify-between transition-all duration-500 rounded-full bg-white border border-slate-100/80 ${
                    scrolled 
                        ? 'shadow-[0_8px_30px_rgb(0,0,0,0.08)] py-3 px-6 md:px-10' 
                        : 'shadow-[0_8px_30px_rgb(0,0,0,0.04)] py-4 px-6 md:px-10'
                }`}>
                    {/* Logo Section */}
                    <div className="flex items-center gap-3 shrink-0 cursor-pointer group">
                        <div className="w-10 h-10 bg-[#1e40af] text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md shadow-blue-100 transition-transform duration-300">
                            P
                        </div>
                        <span className="font-bold text-slate-900 text-[17px] tracking-tight">
                            Lakshmi Kanth
                        </span>
                    </div>

                    {/* Desktop Navigation Group */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.to}
                                smooth={true}
                                duration={500}
                                spy={true}
                                offset={-120}
                                activeClass="!text-[#1e40af] after:scale-x-100"
                                className="relative text-[14px] font-semibold text-slate-600 hover:text-[#1e40af] capitalize tracking-wide transition-all cursor-pointer py-1 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2.5px] after:-bottom-1 after:left-0 after:bg-[#1e40af] after:origin-center hover:after:scale-x-100 after:transition-transform after:duration-300"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Icon */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-2 text-slate-800 hover:bg-slate-50 rounded-full transition-colors"
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Enhanced Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden absolute top-24 left-4 right-4 bg-white rounded-3xl border border-slate-100 shadow-xl p-8 animate-in fade-in slide-in-from-top-4 duration-300">
                    <div className="flex flex-col items-center gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.to}
                                smooth={true}
                                duration={500}
                                spy={true}
                                offset={-100}
                                onClick={() => setIsMenuOpen(false)}
                                className="text-lg font-bold text-slate-800 hover:text-[#1e40af] transition-colors"
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
