import React from 'react';
import { motion } from 'framer-motion';
import { Brain, BarChart3, Eye, Layout } from 'lucide-react';

const About = () => {
    const specializations = [
        {
            title: 'Neural Intelligence',
            desc: 'Designing and implementing advanced deep learning models and custom neural architectures to extract intelligence from complex datasets.',
            icon: <Brain className="w-10 h-10 text-[#1e40af]" />,
            color: 'bg-blue-50'
        },
        {
            title: 'Computational Analytics',
            desc: 'Applying robust statistical methodologies and predictive modeling to transform raw data into high-impact strategic insights.',
            icon: <BarChart3 className="w-10 h-10 text-[#1e40af]" />,
            color: 'bg-indigo-50'
        },
        {
            title: 'Cognitive Vision',
            desc: 'Developing real-time computer vision applications utilizing OpenCV and deep learning for intelligent visual data processing.',
            icon: <Eye className="w-10 h-10 text-[#1e40af]" />,
            color: 'bg-sky-50'
        },
        {
            title: 'Frontend Development',
            desc: 'Architecting high-performance, responsive user interfaces and interactive digital experiences using React and modern CSS frameworks.',
            icon: <Layout className="w-10 h-10 text-[#1e40af]" />,
            color: 'bg-purple-50'
        }
    ];

    return (
        <section id="about" className="section-padding py-24 bg-white">
            <div className="max-w-[1400px] mx-auto px-4">
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
                    I'm <span className="font-bold text-[#1e40af]">Pulipaka Lakshmi Kanth</span>, a <span className="font-bold text-[#1e40af]">B.Tech Computer Science</span> student specializing in <span className="font-bold text-[#1e40af]">Artificial Intelligence and Machine Learning</span>, with hands-on experience in <span className="font-bold text-[#1e40af]">Machine Learning, Data Analytics, Power BI</span>, and <span className="font-bold text-[#1e40af]">Computer Vision</span>. I have built real-world projects including face recognition systems, data dashboards, and web applications. Proficient in Python-based analysis and scalable AI solutions, I bring strong problem-solving, analytical, and leadership skills to every project I undertake.
                </motion.p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
                    {specializations.map((spec, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ delay: idx * 0.05, duration: 0.6 }}
                            className="flex flex-row items-center bg-[#f8fbfe] py-10 px-12 rounded-[2.5rem] border border-blue-50 shadow-sm hover:shadow-xl transition-all duration-500 group cursor-pointer motion-safe-gpu"
                        >
                            <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center shadow-md border border-slate-100 group-hover:border-[#1e40af]/30 group-hover:shadow-lg transition-all duration-500 p-2 overflow-hidden flex-shrink-0">
                                <div className="w-full h-full group-hover:scale-110 transition-transform duration-500 flex items-center justify-center">
                                    {spec.icon}
                                </div>
                            </div>

                            <div className="ml-10 text-left flex-1">
                                <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-[#1e40af] transition-colors">{spec.title}</h3>
                                <p className="text-slate-600 font-medium leading-relaxed text-base">
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
