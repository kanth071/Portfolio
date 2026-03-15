import React from 'react';
import { motion } from 'framer-motion';
import { Brain, BarChart3, Eye, Layout } from 'lucide-react';

const About = () => {
    const specializations = [
        {
            title: 'Neural Intelligence',
            desc: 'Training advanced models to enable systems to learn from data and make intelligent predictions.',
            icon: <Brain className="w-10 h-10 text-[#1e40af]" />,
            color: 'bg-blue-50'
        },
        {
            title: 'Computational Analytics',
            desc: 'Using statistics and machine learning to analyze data and uncover actionable insights.',
            icon: <BarChart3 className="w-10 h-10 text-[#1e40af]" />,
            color: 'bg-indigo-50'
        },
        {
            title: 'Cognitive Vision',
            desc: 'Building computer vision systems with Python and OpenCV to enable machines to interpret and act on visual data.',
            icon: <Eye className="w-10 h-10 text-[#1e40af]" />,
            color: 'bg-sky-50'
        },
        {
            title: 'UI/Frontend Engineering',
            desc: 'Creating responsive and interactive UIs using HTML, CSS, Tailwind, and JavaScript.',
            icon: <Layout className="w-10 h-10 text-[#1e40af]" />,
            color: 'bg-purple-50'
        }
    ];

    return (
        <section id="about" className="section-padding py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-12">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl font-bold text-[#1e40af] mb-16 text-center tracking-tight"
                >
                    About Me
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-xl text-slate-700 leading-relaxed max-w-4xl mx-auto mb-20 font-medium text-center"
                >
                    I am <span className="font-bold text-[#1e40af]">Lakshmi Kanth</span>, a <span className="font-bold text-[#1e40af]">B.Tech student</span> specializing in <span className="font-bold text-[#1e40af]">Artificial Intelligence and Machine Learning</span>, focused on developing intelligent, data-driven AI solutions for real-world challenges, empowered by strong analytical and leadership capabilities.
                </motion.p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
                    {specializations.map((spec, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ delay: idx * 0.05, duration: 0.6 }}
                            className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left bg-[#f8fbfe] py-8 px-6 sm:py-10 sm:px-12 rounded-[2.5rem] border border-blue-50 shadow-sm hover:shadow-xl transition-all duration-500 group cursor-pointer motion-safe-gpu"
                        >
                            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-3xl flex items-center justify-center shadow-md border border-slate-100 group-hover:border-[#1e40af]/30 group-hover:shadow-lg transition-all duration-500 p-2 overflow-hidden flex-shrink-0">
                                <div className="w-full h-full group-hover:scale-110 transition-transform duration-500 flex items-center justify-center">
                                    {spec.icon}
                                </div>
                            </div>

                            <div className="mt-6 sm:mt-0 sm:ml-10 flex-1">
                                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-[#1e40af] transition-colors">{spec.title}</h3>
                                <p className="text-slate-600 font-medium leading-relaxed text-sm sm:text-base">
                                    {spec.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
