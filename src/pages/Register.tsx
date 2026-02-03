import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FileText, Mail, Lock, ArrowRight, User } from "lucide-react";
import { useAuthStore } from "../store/authStore";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const register = useAuthStore((state) => state.register);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate network delay
    setTimeout(() => {
      register(email, name);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen pt-40 pb-24 flex items-center justify-center px-6 bg-surface">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-white rounded-[3rem] border border-brand-900/5 shadow-premium p-12"
      >
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-900 rounded-2xl mb-6 shadow-lg">
            <FileText className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-display font-extrabold text-brand-900 tracking-tight">Join ResumeAI</h1>
          <p className="text-brand-500 font-semibold mt-2">Start your elite career journey.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-brand-400 uppercase tracking-[0.2em] ml-4">Full Name</label>
            <div className="relative">
              <User className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-300" />
              <input 
                type="text" 
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                className="w-full bg-brand-50/50 border border-brand-900/5 rounded-2xl py-4 pl-14 pr-6 text-sm font-bold text-brand-900 placeholder:text-brand-200 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold text-brand-400 uppercase tracking-[0.2em] ml-4">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-300" />
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@company.com"
                className="w-full bg-brand-50/50 border border-brand-900/5 rounded-2xl py-4 pl-14 pr-6 text-sm font-bold text-brand-900 placeholder:text-brand-200 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold text-brand-400 uppercase tracking-[0.2em] ml-4">Password</label>
            <div className="relative">
              <Lock className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-300" />
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-brand-50/50 border border-brand-900/5 rounded-2xl py-4 pl-14 pr-6 text-sm font-bold text-brand-900 placeholder:text-brand-200 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
              />
            </div>
          </div>

          <button 
            type="submit"
            disabled={isLoading}
            className="w-full bg-brand-900 text-white py-5 rounded-2xl font-bold hover:bg-brand-800 transition-all shadow-premium active:scale-95 flex items-center justify-center gap-3 disabled:opacity-50"
          >
            {isLoading ? "Creating Account..." : "Create Account"}
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>

        <div className="mt-10 text-center">
          <p className="text-sm font-bold text-brand-400">
            Already have an account?{" "}
            <Link to="/login" className="text-brand-900 hover:text-accent transition-colors">Sign in</Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
