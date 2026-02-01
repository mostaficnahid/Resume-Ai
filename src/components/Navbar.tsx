import { Link, useLocation } from "react-router-dom";
import { FileText, Menu, X, ArrowUpRight, CreditCard } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuthStore } from "../store/authStore";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { name: "Features", path: "/features" },
    { name: "Pricing", path: "/pricing" },
    { name: "About", path: "/about" }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrolled ? "py-5" : "py-10"}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`glass rounded-[2.5rem] px-10 py-5 flex justify-between items-center transition-all duration-700 ${scrolled ? "shadow-premium border-white/50" : "bg-transparent border-transparent shadow-none"}`}>
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-5 group">
              <div className="bg-brand-900 p-3 rounded-2xl group-hover:rotate-6 transition-transform duration-500 shadow-premium">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <span className="text-3xl font-display font-extrabold tracking-tighter text-brand-900">ResumeAI</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center gap-14">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                to={item.path} 
                className="text-[12px] font-extrabold uppercase tracking-[0.25em] text-brand-600 hover:text-brand-900 transition-colors relative group"
              >
                {item.name}
                <span className={`absolute -bottom-3 left-0 w-0 h-0.5 bg-accent transition-all duration-500 group-hover:w-full shadow-sm ${location.pathname === item.path ? "w-full" : ""}`} />
              </Link>
            ))}
            
            {isAuthenticated ? (
              <div className="flex items-center gap-8">
                <Link 
                  to="/billing" 
                  className="text-[12px] font-extrabold uppercase tracking-[0.25em] text-brand-600 hover:text-brand-900 transition-colors flex items-center gap-2"
                >
                  <CreditCard className="w-4 h-4" />
                  Billing
                </Link>
                <Link 
                  to="/dashboard" 
                  className="bg-brand-900 text-white px-10 py-4 rounded-2xl text-sm font-bold hover:bg-brand-800 transition-all shadow-premium active:scale-95 flex items-center gap-3"
                >
                  Dashboard
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            ) : (
              <Link 
                to="/dashboard" 
                className="bg-brand-900 text-white px-10 py-4 rounded-2xl text-sm font-bold hover:bg-brand-800 transition-all shadow-premium active:scale-95 flex items-center gap-3"
              >
                Get Started
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            )}
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-brand-900 p-3 hover:bg-brand-50 rounded-2xl transition-colors shadow-sm">
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-full left-0 w-full px-6 pt-6 md:hidden"
          >
            <div className="glass rounded-[3rem] p-12 space-y-10 shadow-premium border-white/60 noise-texture">
              {navItems.map((item) => (
                <Link key={item.name} to={item.path} className="block text-3xl font-display font-extrabold text-brand-900 hover:text-accent transition-colors tracking-tight">{item.name}</Link>
              ))}
              {isAuthenticated && (
                <Link to="/billing" className="block text-3xl font-display font-extrabold text-brand-900 hover:text-accent transition-colors tracking-tight">Billing</Link>
              )}
              <Link to="/dashboard" className="flex items-center justify-center gap-3 w-full bg-brand-900 text-white px-6 py-6 rounded-[2rem] text-lg font-bold shadow-premium">
                {isAuthenticated ? "Dashboard" : "Get Started"}
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;