import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Briefcase, Sparkles } from 'lucide-react';
import vishnuLogo from '../assets/vishnu-logo.jpeg';
import aspireLogo from '../assets/aspire-logo.png';
import deloitteCertImg from '../assets/deloitte-cert.jpeg';
import htmlCssCertImg from '../assets/html-css-cert.jpeg';
import mlPythonCertImg from '../assets/ml-python-cert.jpeg';
import gettingStartedCertImg from '../assets/getting-started-data-cert.jpeg';
import ibmLogo from '../assets/ibm-logo.svg';
import googleLogo from '../assets/google-logo.png';

import webDevCertImg from '../assets/web-dev-cert.jpeg';
import googleAnalyticsCertImg from '../assets/google-analytics-cert.jpeg';
import smartbridgeLogo from '../assets/smartbridge-logo.png';
import aspireExpLogo from '../assets/aspire-experience-logo.jpg';
import edunetLogo from '../assets/edunet-logo.png';
import icatLogo from '../assets/icat-logo.png';
import aspireLogoJpg from '../assets/aspire-logo.jpg';
import deloitteLogoImg from '../assets/deloitte-logo.jpg';
import letsupgradeLogo from '../assets/letsupgrade-logo.png';

const DeloitteLogo = () => (
    <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg" className="w-full h-full p-1">
        <text x="2" y="30" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="bold" fill="#86BC25">Deloitte.</text>
    </svg>
);

const ExtraSections = () => {
    const [selectedCert, setSelectedCert] = useState(null);

    const certificates = [
        {
            id: 1,
            title: "Getting Started with Data",
            issuer: "IBM SkillsBuild",
            category: "IBM",
            logoText: "IBM",
            logoColor: "text-blue-600 font-bold italic text-sm",
            logoImage: ibmLogo,
            type: "ibm",
            date: "Dec 08, 2025",
            recipient: "Lakshmi Kanth",
            image: gettingStartedCertImg
        },
        {
            id: 2,
            title: "Machine Learning with Python",
            issuer: "IBM / Coursera",
            category: "IBM • COURSERA",
            logoText: "IBM",
            logoColor: "text-blue-600 font-bold italic text-sm",
            logoImage: ibmLogo,
            type: "ibm",
            date: "Feb 2, 2026",
            recipient: "Pulipaka Lakshmi Kanth",
            image: mlPythonCertImg
        },
        {
            id: 3,
            title: "HTML & CSS Bootcamp",
            issuer: "Let's Upgrade",
            category: "LETSUPGRADE",
            logoImage: letsupgradeLogo,
            bgIcon: "bg-white border border-slate-100",
            type: "letsupgrade",
            date: "19 JULY 2025",
            recipient: "Lakshmi Kanth",
            image: htmlCssCertImg
        },
        {
            id: 4,
            title: "Deloitte Data Analytics",
            issuer: "Deloitte",
            category: "DELOITTE",
            logoImage: deloitteLogoImg,
            bgIcon: "bg-white border border-slate-200",
            type: "deloitte",
            image: deloitteCertImg
        },
        {
            id: 5,
            title: "Google Advanced Data Analytics",
            issuer: "Google / Coursera",
            category: "GOOGLE • COURSERA",
            logoText: "G",
            logoColor: "text-blue-500 font-bold text-2xl",
            logoImage: googleLogo,
            type: "google",
            image: googleAnalyticsCertImg
        },
        {
            id: 6,
            title: "Web Development Fundamentals",
            issuer: "IBM",
            category: "IBM",
            logoText: "IBM",
            logoColor: "text-blue-600 font-bold italic text-sm",
            logoImage: ibmLogo,
            type: "ibm",
            image: webDevCertImg
        }
    ];

    return (
        <>
            {/* Experience */}
            <section id="experience" className="section-padding py-24 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-[#1e40af] mb-12 text-center uppercase tracking-tight">Experience</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Data Science Intern */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-[#f8fbfe] p-8 rounded-[2.5rem] border border-blue-50 shadow-sm hover:shadow-xl transition-all duration-500 group relative overflow-hidden"
                        >
                            <div className="absolute top-8 right-10 text-4xl font-black text-blue-100/50 group-hover:text-blue-200/50 transition-colors duration-500">01</div>
                            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-slate-100 group-hover:border-[#1e40af]/30 group-hover:shadow-md transition-all duration-500 p-2 text-[#1e40af]">
                                <Briefcase className="w-8 h-8" strokeWidth={2.5} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-1">
                                Data Science and Analytics Intern
                            </h3>
                            <p className="text-sm font-semibold text-slate-500 mb-4 tracking-wide uppercase">Developers Arena</p>
                            <p className="text-slate-600 leading-relaxed font-medium text-sm">
                                Analyze complex datasets and deliver actionable insights using predictive modeling, statistical analysis, and advanced visualization.
                            </p>
                        </motion.div>

                        {/* Power BI Intern */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-[#f8fbfe] p-8 rounded-[2.5rem] border border-blue-50 shadow-sm hover:shadow-xl transition-all duration-500 group relative overflow-hidden"
                        >
                            <div className="absolute top-8 right-10 text-4xl font-black text-blue-100/50 group-hover:text-blue-200/50 transition-colors duration-500">02</div>
                            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-slate-100 group-hover:border-[#1e40af]/30 group-hover:shadow-md transition-all duration-500 p-2">
                                <img src={smartbridgeLogo} alt="SmartBridge Logo" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-1">
                                Power BI Intern
                            </h3>
                            <p className="text-sm font-semibold text-slate-500 mb-4 tracking-wide uppercase">The SmartBridge</p>
                            <p className="text-slate-600 leading-relaxed font-medium text-sm">
                                Designing and developing interactive Power BI dashboards and reports to transform complex data into clear, actionable insights, enabling stakeholders to make informed, data-driven decisions.
                            </p>
                        </motion.div>

                        {/* AI Leadership Program */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-[#f8fbfe] p-8 rounded-[2.5rem] border border-blue-50 shadow-sm hover:shadow-xl transition-all duration-500 group relative overflow-hidden"
                        >
                            <div className="absolute top-8 right-10 text-4xl font-black text-blue-100/50 group-hover:text-blue-200/50 transition-colors duration-500">03</div>
                            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-slate-100 group-hover:border-[#1e40af]/30 group-hover:shadow-md transition-all duration-500 p-2">
                                <img src={aspireExpLogo} alt="Aspire Institute Logo" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-1">
                                AI Leadership Program
                            </h3>
                            <p className="text-sm font-semibold text-slate-500 mb-4 tracking-wide uppercase">Aspire Institute</p>
                            <p className="text-slate-600 leading-relaxed font-medium text-sm">
                                Engaged in the AI Leadership Program – ASPIRE to strengthen AI and emerging technologies, while developing strategic thinking and leadership for data-driven solutions.
                            </p>
                        </motion.div>

                        {/* Front End Developer */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-[#f8fbfe] p-8 rounded-[2.5rem] border border-blue-50 shadow-sm hover:shadow-xl transition-all duration-500 group relative overflow-hidden"
                        >
                            <div className="absolute top-8 right-10 text-4xl font-black text-blue-100/50 group-hover:text-blue-200/50 transition-colors duration-500">04</div>
                            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-slate-100 group-hover:border-[#1e40af]/30 group-hover:shadow-md transition-all duration-500 p-2">
                                <img src={edunetLogo} alt="Edunet Foundation Logo" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-1">
                                Front End Developer
                            </h3>
                            <p className="text-sm font-semibold text-slate-500 mb-4 tracking-wide uppercase">Edunet Foundation</p>
                            <p className="text-slate-600 leading-relaxed font-medium text-sm">
                                Building intuitive and responsive web applications with HTML, CSS, and JavaScript, focusing on seamless user experience and interactive design.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Education */}
            <section id="education" className="section-padding py-24 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-[#1e40af] mb-12 text-center uppercase tracking-tight">Education</h2>
                    <div className="flex flex-col gap-8">
                        {/* VIT */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-[#f8fbfe] p-8 md:p-10 rounded-[2.5rem] border border-blue-50 flex flex-col md:flex-row items-center gap-8 shadow-sm hover:shadow-xl transition-all duration-500 group"
                        >
                            <div className="p-2 bg-white border border-slate-100 rounded-2xl flex-shrink-0 flex items-center justify-center w-28 h-28 shadow-sm overflow-hidden group-hover:scale-105 transition-transform duration-500">
                                <img src={vishnuLogo} alt="Vishnu Institute Logo" className="w-full h-full object-contain" />
                            </div>
                            <div className="flex-1 text-center md:text-left">
                                <h3 className="text-2xl font-bold text-slate-800 tracking-tight mb-1">Vishnu Institute of Technology (Autonomous)</h3>
                                <p className="text-[#1e40af] font-bold text-lg mb-3">B.Tech in Artificial Intelligence and Machine Learning</p>
                                <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm font-semibold">
                                    <span className="text-slate-500 uppercase tracking-widest">2024 - 2028</span>
                                    <span className="hidden md:inline text-slate-300">|</span>
                                    <span className="text-blue-600 bg-blue-50 px-4 py-1 rounded-full border border-blue-100">Grade: 8.78 CGPA</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Aspire */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-[#f8fbfe] p-8 md:p-10 rounded-[2.5rem] border border-blue-50 flex flex-col md:flex-row items-center gap-8 shadow-sm hover:shadow-xl transition-all duration-500 group"
                        >
                            <div className="p-2 bg-[#f5f0e8] border border-[#f0e8d8] rounded-2xl flex-shrink-0 flex items-center justify-center w-28 h-28 shadow-sm overflow-hidden group-hover:scale-105 transition-transform duration-500">
                                <img src={aspireLogo} alt="Aspire Institute Logo" className="w-full h-full object-contain" />
                            </div>
                            <div className="flex-1 text-center md:text-left">
                                <h3 className="text-2xl font-bold text-slate-800 tracking-tight mb-1">Aspire Institute</h3>
                                <p className="text-[#4338ca] font-bold text-lg mb-3">AI Leadership Program</p>
                                <span className="text-slate-500 text-sm font-bold uppercase tracking-widest">Global Leadership Program</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Certifications Grid */}
            <section id="certifications" className="section-padding py-24 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-[#1e40af] mb-12 text-center uppercase tracking-tight">Certifications</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {certificates.map((cert) => (
                            <motion.div
                                key={cert.id}
                                whileHover={{ y: -6 }}
                                className="bg-[#f8fbfe] rounded-[2.5rem] p-8 flex flex-col justify-between items-start border border-blue-50 shadow-sm hover:shadow-xl transition-all duration-500 group h-80"
                            >
                                <div className="w-full">
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className={`w-16 h-16 flex-shrink-0 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#1e40af]/30 group-hover:shadow-md bg-white flex items-center justify-center overflow-hidden transition-all duration-500 p-2 ${cert.bgIcon || ''}`}>
                                            {cert.logoComponent ? (
                                                <div className="w-full h-full group-hover:scale-110 transition-transform duration-500">
                                                    <cert.logoComponent />
                                                </div>
                                            ) : cert.logoImage ? (
                                                <img src={cert.logoImage} alt={cert.issuer} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                                            ) : cert.image ? (
                                                <img src={cert.image} alt={cert.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                            ) : (
                                                <span className={`${cert.logoColor} group-hover:scale-110 transition-transform duration-500`}>{cert.logoText}</span>
                                            )}
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-1">{cert.category}</p>
                                            <h3 className="text-xl font-bold text-slate-800 leading-tight tracking-tight">{cert.title}</h3>
                                        </div>
                                    </div>
                                    <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">{cert.issuer}</p>
                                </div>

                                <div className="w-full flex justify-end mt-4">
                                    <button
                                        onClick={() => setSelectedCert(cert)}
                                        className="px-6 py-3 rounded-full bg-white border border-slate-200 text-[11px] font-bold tracking-widest text-[#1e40af] uppercase hover:bg-[#1e40af] hover:text-white hover:shadow-lg transition-all duration-300 active:scale-95 shadow-sm"
                                    >
                                        VIEW CERTIFICATE
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certificate Modal */}
            {selectedCert && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setSelectedCert(null)}></div>
                    <div className="relative bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden shadow-2xl">
                        {/* Header */}
                        <div className="px-6 py-4 flex items-center justify-between border-b border-slate-100 bg-white z-10 flex-shrink-0">
                            <div className="flex flex-col">
                                <span className="text-[10px] font-bold text-slate-400 tracking-widest uppercase mb-1">{selectedCert.issuer}</span>
                                <span className="text-xl font-bold text-slate-900 tracking-tight">{selectedCert.title}</span>
                            </div>
                            <button
                                onClick={() => setSelectedCert(null)}
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors flex-shrink-0"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Certificate Body */}
                        <div className="p-4 md:p-8 bg-slate-50 flex-1 overflow-y-auto flex items-center justify-center">
                            {selectedCert.pdf ? (
                                /* PDF viewer */
                                <div className="w-full h-[70vh] rounded-xl overflow-hidden shadow-2xl">
                                    <iframe
                                        src={selectedCert.pdf}
                                        title={selectedCert.title}
                                        className="w-full h-full border-0"
                                    />
                                </div>
                            ) : selectedCert.image ? (
                                <div className="w-full max-w-3xl mx-auto shadow-2xl rounded-xl overflow-hidden">
                                    <img
                                        src={selectedCert.image}
                                        alt={`${selectedCert.title} Certificate`}
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                            ) : (
                                <div className="w-full max-w-3xl bg-white relative p-3 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] mx-auto">
                                    <div className="absolute inset-4 border-[12px] border-[#335099] pointer-events-none z-10"></div>
                                    <div className="relative z-20 px-6 py-10 md:px-14 md:py-16 bg-white border border-slate-100 min-h-[400px] flex flex-col justify-between">
                                        <div>
                                            <p className="text-slate-700 font-medium text-lg mb-12">
                                                In recognition of the commitment to achieve professional excellence
                                            </p>
                                            <h3 className="text-5xl md:text-6xl text-slate-800 tracking-tight font-light mb-8">
                                                {selectedCert.recipient || 'Pulipaka Lakshmi Kanth'}
                                            </h3>
                                            <div className="border-t border-slate-300 pt-8 mb-4">
                                                <p className="text-slate-600 text-sm mb-4 font-medium">Has successfully satisfied the requirements for:</p>
                                                <h4 className="text-2xl md:text-3xl text-slate-800 font-medium">{selectedCert.title}</h4>
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-end mt-8">
                                            <div className="text-xs text-slate-500">
                                                <p className="mb-1">Issued on: {selectedCert.date || 'Jul 14, 2025'}</p>
                                                <p>Issued by: {selectedCert.issuer}</p>
                                            </div>
                                            <div className="text-blue-600 font-bold text-4xl tracking-tighter italic">
                                                {selectedCert.logoText}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* Achievements */}
            <section id="achievements" className="section-padding py-24 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-[#1e40af] mb-12 text-center uppercase tracking-tight">Achievements</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {/* ICAT */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-[#f8fbfe] p-8 md:p-10 rounded-[2.5rem] border border-blue-50 shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-col items-center text-center h-full"
                        >
                            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-slate-100 group-hover:border-[#1e40af]/30 group-hover:shadow-md transition-all duration-500 p-2 overflow-hidden">
                                <img src={icatLogo} alt="ICAT Logo" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <h4 className="text-2xl font-bold text-slate-800 mb-2">ICAT Exam</h4>
                            <p className="text-sm font-bold text-[#1e40af] uppercase tracking-widest mb-4">Rank #2139</p>
                            <p className="text-slate-600 text-sm leading-relaxed font-medium">
                                Achieved Rank #2139 in the Internship Common Aptitude Test (ICAT), qualifying among top candidates in a competitive national-level assessment.
                            </p>
                        </motion.div>

                        {/* AI Leadership */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-[#f8fbfe] p-8 md:p-10 rounded-[2.5rem] border border-blue-50 shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-col items-center text-center h-full"
                        >
                            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-slate-100 group-hover:border-[#1e40af]/30 group-hover:shadow-md transition-all duration-500 p-2 overflow-hidden">
                                <img src={aspireLogoJpg} alt="Aspire Logo" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <h4 className="text-2xl font-bold text-slate-800 mb-2">AI Leadership Program</h4>
                            <p className="text-sm font-bold text-[#1e40af] uppercase tracking-widest mb-4">National Recognition</p>
                            <p className="text-slate-600 text-sm leading-relaxed font-medium">
                                Engagement in an Global AI Leadership Program emphasizing AI fundamentals, leadership capabilities, and collaborative problem-solving in technology-driven environments.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ExtraSections;
