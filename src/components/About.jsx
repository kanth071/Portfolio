import React from 'react';
import { motion } from 'framer-motion';
import { Brain, BarChart3, Eye, Layout } from 'lucide-react';

const About = () => {
    const specializations = [
        {
            title: 'Neural Intelligence',
            desc: 'Developing advanced deep learning models and neural architectures for intelligent predictions.',
            icon: <Brain className="w-10 h-10 text-[#1e40af]" />,
            color: 'bg-blue-50'
        },
        {
            title: 'Computational Analytics',
            desc: 'Utilizing statistical modeling and data analytics to derive actionable business insights.',
            icon: <BarChart3 className="w-10 h-10 text-[#1e40af]" />,
            color: 'bg-indigo-50'
        },
        {
            title: 'Cognitive Vision',
            desc: 'Building computer vision systems using OpenCV for real-time visual data interpretation.',
            icon: <Eye className="w-10 h-10 text-[#1e40af]" />,
            color: 'bg-sky-50'
        },
        {
            title: 'Frontend Development',
            desc: 'Creating responsive, interactive user interfaces with modern React frameworks.',
            icon: <Layout className="w-10 h-10 text-[#1e40af]" />,
            color: 'bg-purple-50'
        }
    ];

    return (
        <section id="about" className="section-padding py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl font-bold text-[#1e40af] mb-16 text-center"
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
                    I'm <span className="font-bold text-[#1e40af]">Pulipaka Lakshmi Kanth</span>, a <span className="font-bold text-[#1e40af]">B.Tech Computer Science</span> student specializing in <span className="font-bold text-[#1e40af]">Artificial Intelligence and Machine Learning</span>, with hands-on experience in <span className="font-bold text-[#1e40af]">Machine Learning, Data Analytics, Power BI</span>, and <span className="font-bold text-[#1e40af]">Computer Vision</span>. I have built real-world projects including face recognition systems, data dashboards, and web applications. Proficient in Python-based analysis and scalable AI solutions, I bring strong problem-solving, analytical, and leadership skills to every project I undertake.
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {specializations.map((spec, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ delay: idx * 0.05, duration: 0.5 }}
                            className="flex items-center bg-[#f8fbfe] p-8 rounded-[2rem] border border-blue-50 shadow-sm hover:shadow-xl transition-all duration-500 group cursor-pointer motion-safe-gpu"
                        >
                            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-slate-100 group-hover:border-[#1e40af]/30 group-hover:shadow-md transition-all duration-500 p-2 overflow-hidden flex-shrink-0">
                                <div className="w-full h-full group-hover:scale-110 transition-transform duration-500 flex items-center justify-center">
                                    {spec.icon}
                                </div>
                            </div>

                            <div className="ml-8 text-left">
                                <h3 className="text-xl font-bold text-slate-900 mb-2 tracking-tight group-hover:text-[#1e40af] transition-colors">{spec.title}</h3>
                                <p className="text-slate-600 font-medium leading-relaxed text-sm md:text-base">
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
