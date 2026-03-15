import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Eye, Layout, Database } from 'lucide-react';
import weatherImg from '../assets/weather-dashboard-v2.png';
import campusImg from '../assets/campus-eye-v2.jpeg';
import malnutritionImg from '../assets/malnutrition-v2.jpeg';

const Projects = () => {
    const projects = [
        {
            title: 'Campus Eye',
            description: 'An OpenCV-based computer vision model developed for intelligent surveillance with face and ID card detection.',
            tech: ['Python', 'OpenCV', 'Deep Learning'],
            img: campusImg,
            icon: <Eye className="w-6 h-6 text-[#1e40af]" />,
            github: 'https://github.com/kanth071',
            live: '#',
        },
        {
            title: 'Global Malnutrition',
            description: 'An interactive Power BI dashboard analyzing malnutrition trends across countries for public health support.',
            tech: ['Power BI', 'Data Analytics', 'Data Visualization'],
            img: malnutritionImg,
            icon: <Database className="w-6 h-6 text-[#1e40af]" />,
            github: 'https://github.com/kanth071',
            live: '#',
        },
        {
            title: 'Weather Dashboard',
            description: 'A responsive dashboard providing real-time temperatures and weekly forecasts in a clean interface.',
            tech: ['HTML', 'CSS', 'JavaScript'],
            img: weatherImg,
            icon: <Layout className="w-6 h-6 text-[#1e40af]" />,
            github: 'https://github.com/kanth071',
            live: '#',
        },
    ];

    return (
        <section id="projects" className="section-padding py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-12">
                <h2 className="text-4xl font-bold text-[#1e40af] text-center mb-16 uppercase tracking-tight">Featured Projects</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ delay: idx * 0.05, duration: 0.4 }}
                            className="bg-[#f8fbfe] rounded-[2.5rem] border border-blue-50 shadow-sm overflow-hidden flex flex-col hover:shadow-xl transition-all duration-500 group h-full motion-safe-gpu"
                        >
                            <div className="relative overflow-hidden aspect-video">
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="bg-white p-4 rounded-full text-[#1e40af] shadow-lg hover:scale-110 transition-transform">
                                        <Github className="w-6 h-6" />
                                    </a>
                                </div>
                            </div>

                            <div className="p-6 sm:p-10 flex-1 flex flex-col items-center text-center">
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-slate-100 group-hover:border-[#1e40af]/30 group-hover:shadow-md transition-all duration-500 p-2">
                                    <div className="w-full h-full group-hover:scale-110 transition-transform duration-500 flex items-center justify-center">
                                        {project.icon}
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-slate-800 tracking-tight mb-2 group-hover:text-[#1e40af] transition-colors">{project.title}</h3>

                                <p className="text-slate-600 mb-8 font-medium leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="mt-auto flex flex-wrap justify-center gap-2">
                                    {project.tech.map((tag, tIdx) => (
                                        <span
                                            key={tIdx}
                                            className="px-4 py-1.5 bg-white text-[#1e40af] text-[10px] font-bold rounded-lg uppercase tracking-widest border border-blue-50 shadow-sm"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
