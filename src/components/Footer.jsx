import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center">
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                    © {currentYear} Pulipaka Lakshmi Kanth. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
