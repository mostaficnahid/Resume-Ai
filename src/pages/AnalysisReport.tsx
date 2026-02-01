import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { History, BarChart3, MessageSquare, Zap, ArrowRight, Briefcase, Shield, Globe, Cpu, Sparkles, CheckCircle2, Star } from "lucide-react";
import { useResumeStore } from "../store/resumeStore";

const AnalysisReport = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const getResultById = useResumeStore((state) => state.getResultById);
  const result = getResultById(id || "");

  if (!result) {
    return (
      <div className="min-h-screen pt-48 flex flex-col items-center justify-center px-6">
        <h1 className="text-3xl font-display font-bold text-brand-900 mb-4">Report Not Found</h1>
        <button 
          onClick={() => navigate("/dashboard")}
          className="bg-brand-900 text-white px-8 py-4 rounded-2xl font-bold"
        >
          Back to Dashboard
        </button>
      </div>
    );
  }

  const coverageFeatures = [
    { icon: <BarChart3 className="w-5 h-5" />, title: "ATS Scoring Engine", status: "Verified" },
    { icon: <Zap className="w-5 h-5" />, title: "Instant Bullet Rewriting", status: "Optimized" },
    { icon: <Shield className="w-5 h-5" />, title: "Privacy-First Analysis", status: "Secure" },
    { icon: <Globe className="w-5 h-5" />, title: "Global Market Standards", status: "Checked" },
    { icon: <Cpu className="w-5 h-5" />, title: "JD Match Intelligence", status: "Analyzed" },
    { icon: <Sparkles className="w-5 h-5" />, title: "Recruiter Feedback", status: "Generated" }
  ];

  return (
    <div className="min-h-screen pt-40 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-10"
        >
          <div>
            <button 
              onClick={() => navigate("/dashboard")}
              className="flex items-center gap-2 text-brand-500 font-bold text-[10px] uppercase tracking-[0.25em] mb-4 hover:text-brand-900 transition-colors"
            >
              <History className="w-4 h-4" />
              <span>Back to Analysis</span>
            </button>
            <h1 className="text-5xl lg:text-7xl font-display font-extrabold text-brand-900 tracking-tight leading-tight text-balance">
              Match Intelligence
            </h1>
            <p className="text-brand-400 font-bold mt-2">Report for: {result.fileName}</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-accent text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg">
              Match: {result.matchScore}%
            </div>
            <button className="bg-brand-900 text-white px-8 py-4 rounded-2xl font-bold text-sm hover:bg-brand-800 transition-all shadow-premium active:scale-95">
              Export Report
            </button>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-12">
            {/* Match Score & Feedback */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white p-12 rounded-[4rem] border border-brand-900/5 shadow-premium relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[100px] -mr-32 -mt-32"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-6 mb-10">
                  <div className="w-20 h-20 rounded-3xl bg-brand-900 flex items-center justify-center shadow-premium">
                    <Briefcase className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-display font-bold text-brand-900 tracking-tight">Job Match Analysis</h3>
                    <p className="text-brand-500 font-semibold tracking-tight">Based on the provided Job Description.</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="relative w-48 h-48 mx-auto md:mx-0">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <circle className="text-brand-50 stroke-current" strokeWidth="8" fill="transparent" r="40" cx="50" cy="50" />
                      <motion.circle 
                        className="text-accent stroke-current" 
                        strokeWidth="8" 
                        strokeLinecap="round" 
                        fill="transparent" 
                        r="40" cx="50" cy="50" 
                        initial={{ strokeDasharray: "0 251" }}
                        animate={{ strokeDasharray: `${(result.matchScore / 100) * 251} 251` }}
                        transition={{ duration: 2, ease: "easeOut" }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                      <span className="text-4xl font-display font-extrabold text-brand-900">{result.matchScore}%</span>
                      <span className="text-[10px] font-bold text-brand-400 uppercase tracking-widest">Match</span>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                        <MessageSquare className="w-5 h-5 text-accent" />
                      </div>
                      <p className="text-brand-700 font-semibold leading-relaxed tracking-tight italic">
                        "{result.feedback}"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Elite Analysis Coverage (New Section from Image) */}
            <div className="space-y-8">
              <h3 className="text-3xl font-display font-bold text-brand-900 tracking-tight px-4 text-balance">Elite Analysis Coverage</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {coverageFeatures.map((feature, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                    className="bg-white p-8 rounded-[2.5rem] border border-brand-900/5 shadow-sm flex flex-col items-center text-center group hover:shadow-premium transition-all duration-500"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-brand-900 flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                    <h4 className="text-sm font-bold text-brand-900 mb-2">{feature.title}</h4>
                    <div className="flex items-center gap-1.5 text-[10px] font-extrabold text-accent uppercase tracking-widest">
                      <CheckCircle2 className="w-3 h-3" />
                      {feature.status}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bullet Point Improvements */}
            <div className="space-y-8">
              <h3 className="text-3xl font-display font-bold text-brand-900 tracking-tight px-4">Bullet Point Mastery</h3>
              <div className="grid gap-8">
                {result.improvements.map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.2 }}
                    className="bg-white rounded-[3rem] border border-brand-900/5 shadow-premium overflow-hidden"
                  >
                    <div className="grid md:grid-cols-2">
                      <div className="p-10 bg-brand-50/50 border-r border-brand-900/5">
                        <div className="text-[10px] font-bold text-brand-400 uppercase tracking-[0.2em] mb-4">Current Version</div>
                        <p className="text-brand-600 font-medium leading-relaxed">{item.original}</p>
                      </div>
                      <div className="p-10 relative">
                        <div className="absolute top-6 right-10">
                          <Zap className="w-5 h-5 text-accent animate-pulse-subtle" />
                        </div>
                        <div className="text-[10px] font-bold text-accent uppercase tracking-[0.25em] mb-4">JD Optimized</div>
                        <p className="text-brand-900 font-bold leading-relaxed">{item.improved}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-12">
            {/* Keyword Gap Analysis */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white border border-brand-900/5 rounded-[4rem] p-12 shadow-premium"
            >
              <h3 className="font-display font-bold text-brand-900 text-2xl mb-10 tracking-tight">Keyword Alignment</h3>
              
              <div className="space-y-10">
                <div>
                  <div className="text-[10px] font-bold text-brand-400 uppercase tracking-[0.2em] mb-6">Matched Keywords</div>
                  <div className="flex flex-wrap gap-3">
                    {result.keywords.found.map((kw, i) => (
                      <span key={i} className="px-4 py-2 rounded-full bg-brand-50 text-brand-900 text-xs font-bold border border-brand-900/5">
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-10 border-t border-brand-900/10">
                  <div className="text-[10px] font-bold text-accent uppercase tracking-[0.25em] mb-6">Missing from JD</div>
                  <div className="flex flex-wrap gap-3">
                    {result.keywords.missing.map((kw, i) => (
                      <span key={i} className="px-4 py-2 rounded-full bg-accent/10 text-accent text-xs font-bold border border-accent/20">
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Global Standards Check */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white border border-brand-900/5 rounded-[4rem] p-12 shadow-premium"
            >
              <h3 className="font-display font-bold text-brand-900 text-2xl mb-10 tracking-tight">Market Standards</h3>
              <div className="space-y-6">
                {[
                  { market: "US / Canada", status: "Optimized" },
                  { market: "UK / Europe", status: "Compatible" },
                  { market: "Asia / Pacific", status: "Compatible" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-brand-50/30 rounded-2xl border border-brand-900/5">
                    <span className="text-sm font-bold text-brand-900">{item.market}</span>
                    <span className="text-[10px] font-extrabold text-accent uppercase tracking-widest">{item.status}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisReport;
