import React, { useEffect, Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Lazy load below-the-fold components for faster initial page load
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const ExtraSections = lazy(() => import('./components/ExtraSections'));

function App() {
  useEffect(() => {
    // Force light mode to match screenshots, but allow toggle if user wants
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Simple loading fallback
  const Fallback = () => (
    <div className="flex justify-center items-center py-20">
      <div className="w-8 h-8 rounded-full border-4 border-slate-200 border-t-[#1e40af] animate-spin"></div>
    </div>
  );

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900 transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<Fallback />}>
          <About />
          <Skills />
          <Projects />
          <ExtraSections />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
