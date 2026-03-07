import React from 'react';
import { motion } from 'framer-motion';
import { Brain, BarChart3, Eye, Layout } from 'lucide-react';

const About = () => {
    const specializations = [
        {
            title: 'Neural Intelligence',
            desc: 'Designing and training advanced machine learning and deep learning models that enable systems to learn from data and perform intelligent predictions.',
            icon: <Brain className="w-12 h-12 text-[#1e40af]" />,
            color: 'bg-blue-50'
        },
        {
            title: 'Computational Analytics',
            desc: 'Transforming complex datasets through statistical modeling, data preprocessing, and machine learning techniques to uncover patterns and generate actionable insights.',
            icon: <BarChart3 className="w-12 h-12 text-[#1e40af]" />,
            color: 'bg-indigo-50'
        },
        {
            title: 'Cognitive Vision',
            desc: 'Architecting computer vision systems with Python and OpenCV to enable machines to interpret, analyze, and act upon visual data in real-world applications.',
            icon: <Eye className="w-12 h-12 text-[#1e40af]" />,
            color: 'bg-sky-50'
        },
        {
            title: 'Frontend Development',
            desc: 'Developed responsive, interactive UIs with React, Tailwind, JavaScript efficiently.',
            icon: <Layout className="w-12 h-12 text-[#1e40af]" />,
            color: 'bg-purple-50'
        }
    ];

    return (
        <section id="about" className="section-padding py-24 bg-white">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl font-bold text-[#1e40af] mb-12"
                >
                    About Me
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-xl text-slate-700 leading-relaxed max-w-4xl mx-auto mb-20 font-medium"
                >
                    I'm <span className="font-bold text-[#1e40af]">Pulipaka Lakshmi Kanth</span>, a <span className="font-bold text-[#1e40af]">B.Tech Computer Science</span> student specializing in <span className="font-bold text-[#1e40af]">Artificial Intelligence and Machine Learning</span>, with hands-on experience in <span className="font-bold text-[#1e40af]">Machine Learning, Data Analytics, Power BI</span>, and <span className="font-bold text-[#1e40af]">Computer Vision</span>. I have built real-world projects including face recognition systems, data dashboards, and web applications. Proficient in Python-based analysis and scalable AI solutions, I bring strong problem-solving, analytical, and leadership skills to every project I undertake.
                </motion.p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {specializations.map((spec, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex flex-col items-center bg-[#f8fbfe] p-10 rounded-[2.5rem] border border-blue-50 hover:border-[#1e40af]/20 shadow-sm hover:shadow-xl transition-all duration-500 group cursor-pointer h-full"
                        >
                            <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm border border-slate-100 group-hover:border-[#1e40af]/30 group-hover:shadow-md transition-all duration-500 p-2 overflow-hidden flex-shrink-0">
                                <div className="w-full h-full group-hover:scale-110 transition-transform duration-500 flex items-center justify-center">
                                    {spec.icon}
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-slate-800 mb-4 tracking-tight group-hover:text-[#1e40af] transition-colors text-center">{spec.title}</h3>

                            <p className="text-slate-600 font-medium leading-[1.6] text-center text-sm md:text-base">
                                {spec.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
