import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-surface text-brand-900 font-sans selection:bg-brand-900 selection:text-white">
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Outlet />
      </motion.main>
      <footer className="bg-white border-t border-brand-900/10 py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-20 mb-24">
            <div className="col-span-2">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-brand-900 p-3 rounded-2xl shadow-premium">
                  <span className="text-white font-extrabold text-xl">R</span>
                </div>
                <span className="text-3xl font-display font-extrabold tracking-tighter text-brand-900">ResumeAI</span>
              </div>
              <p className="text-brand-600 max-w-sm leading-relaxed font-semibold text-lg tracking-tight">
                The world's most advanced AI-powered career optimization platform. Engineered for elite professionals.
              </p>
            </div>
            <div>
              <h4 className="font-extrabold text-brand-900 mb-8 uppercase tracking-[0.25em] text-[11px]">Product</h4>
              <ul className="space-y-5 text-base font-bold text-brand-500">
                <li><a href="#" className="hover:text-brand-900 transition-colors tracking-tight">Features</a></li>
                <li><a href="#" className="hover:text-brand-900 transition-colors tracking-tight">Pricing</a></li>
                <li><a href="#" className="hover:text-brand-900 transition-colors tracking-tight">Enterprise</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-extrabold text-brand-900 mb-8 uppercase tracking-[0.25em] text-[11px]">Company</h4>
              <ul className="space-y-5 text-base font-bold text-brand-500">
                <li><a href="#" className="hover:text-brand-900 transition-colors tracking-tight">About</a></li>
                <li><a href="#" className="hover:text-brand-900 transition-colors tracking-tight">Privacy</a></li>
                <li><a href="#" className="hover:text-brand-900 transition-colors tracking-tight">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-14 border-t border-brand-900/10 flex flex-col md:flex-row justify-between items-center gap-10 text-brand-500 text-[11px] font-extrabold uppercase tracking-[0.25em]">
            <div className="flex flex-col gap-2">
              <div>&copy; {new Date().getFullYear()} ResumeAI Intelligence. All rights reserved. Developed By Mostafic Yellahy Nahid</div>
              <a href="mailto:mostafic2003@gmail.com" className="text-brand-400 lowercase tracking-normal font-bold hover:text-brand-900 transition-colors">mostafic2003@gmail.com</a>
            </div>
            <div className="flex gap-12">
              <a href="https://www.facebook.com/mostafic.nahid.373" target="_blank" rel="noopener noreferrer" className="hover:text-brand-900 transition-colors">Facebook</a>
              <a href="https://www.linkedin.com/in/mostafic-yellahy-nahid-46a0202b5/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-900 transition-colors">LinkedIn</a>
              <a href="https://github.com/mostaficnahid" target="_blank" rel="noopener noreferrer" className="hover:text-brand-900 transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
