import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Skills = () => {
    const [activeTab, setActiveTab] = useState('ALL');

    const categories = [
        'ALL',
        'PROGRAMMING',
        'AI & DATA SCIENCE',
        'TOOLS & FRAMEWORKS',
        'Soft Skills'
    ];

    const skillData = [
        { name: 'PYTHON', category: 'PROGRAMMING' },
        { name: 'HTML', category: 'PROGRAMMING' },
        { name: 'CSS', category: 'PROGRAMMING' },
        { name: 'SQL', category: 'PROGRAMMING' },
        { name: 'JAVA', category: 'PROGRAMMING' },
        { name: 'DATA ANALYTICS', category: 'AI & DATA SCIENCE' },
        { name: 'MACHINE LEARNING', category: 'AI & DATA SCIENCE' },
        { name: 'DATA VISUALIZATION', category: 'AI & DATA SCIENCE' },
        { name: 'Open CV', category: 'AI & DATA SCIENCE' },
        { name: 'Power BI', category: 'AI & DATA SCIENCE' },
        { name: 'Deep Learning', category: 'AI & DATA SCIENCE' },
        { name: 'Neural Networks', category: 'AI & DATA SCIENCE' },
        { name: 'YOLO v8', category: 'AI & DATA SCIENCE' },
        { name: 'GIT', category: 'TOOLS & FRAMEWORKS' },
        { name: 'GITHUB', category: 'TOOLS & FRAMEWORKS' },
        { name: 'VS CODE', category: 'TOOLS & FRAMEWORKS' },
        { name: 'GOOGLE COLAB', category: 'TOOLS & FRAMEWORKS' },
        { name: 'Leadership', category: 'Soft Skills' },
        { name: 'Networking', category: 'Soft Skills' },
        { name: 'Teamwork', category: 'Soft Skills' },
        { name: 'Communication', category: 'Soft Skills' },


    ];

    const filteredSkills = activeTab === 'ALL'
        ? skillData
        : skillData.filter(skill => skill.category === activeTab);

    return (
        <section id="skills" className="section-padding py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                {/* Section Heading - Centered and Styled like Payal Sahu's Portflio */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold text-[#1e40af] mb-12">
                        Skills Section
                    </h2>

                    {/* Centered Filter Tabs */}
                    <div className="flex flex-wrap justify-center gap-4 mb-16">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveTab(cat)}
                                className={`px-8 py-2.5 rounded-xl text-sm font-bold tracking-tight transition-all duration-300 ${activeTab === cat
                                    ? 'bg-[#1e40af] text-white shadow-lg scale-105'
                                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                    }`}
                            >
                                {cat.charAt(0) + cat.slice(1).toLowerCase()}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Keeping the large box structure as requested */}
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredSkills.map((skill) => (
                            <motion.div
                                layout
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="bg-slate-50 border border-slate-100 p-12 rounded-[2.5rem] flex items-center justify-center text-center group hover:bg-white hover:shadow-2xl hover:border-blue-100 transition-all duration-500 h-32"
                            >
                                <span className="text-sm font-bold text-slate-800 tracking-widest group-hover:text-[#1e40af] transition-colors uppercase">
                                    {skill.name}
                                </span>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
