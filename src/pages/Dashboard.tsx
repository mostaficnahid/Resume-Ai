import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Upload, FileText, CheckCircle2, Loader2, Sparkles, History, TrendingUp, ShieldCheck, ArrowUpRight, Briefcase, Trash2 } from "lucide-react";
import { motion } from "framer-motion";
import { useAuthStore } from "../store/authStore";
import { useResumeStore } from "../store/resumeStore";

// Simple keyword extractor for simulation
const extractKeywords = (text: string) => {
  const commonTech = ["React", "TypeScript", "Node.js", "Python", "AWS", "Docker", "Kubernetes", "SQL", "NoSQL", "GraphQL", "Tailwind", "Next.js", "CI/CD", "Agile", "Scrum", "Java", "C++", "Go", "Rust", "Terraform", "Cloud", "DevOps", "Frontend", "Backend", "Fullstack"];
  const found = commonTech.filter(tech => text.toLowerCase().includes(tech.toLowerCase()));
  return found.length > 0 ? found : ["Strategic Planning", "Team Leadership", "Project Management", "Communication"];
};

const generateDynamicResult = (fileName: string, jd: string) => {
  const jdKeywords = extractKeywords(jd);
  const foundKeywords = ["React", "TypeScript", "Tailwind CSS", "Agile"].filter(k => !jdKeywords.includes(k));
  const missingKeywords = jdKeywords.slice(0, 5);
  
  const baseScore = 65;
  const keywordBonus = Math.min(jdKeywords.length * 5, 25);
  const matchScore = Math.min(baseScore + keywordBonus, 98);
  
  return {
    score: 82,
    matchScore,
    keywords: {
      found: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Agile", ...foundKeywords].slice(0, 6),
      missing: missingKeywords.length > 0 ? missingKeywords : ["Cloud Architecture", "System Design"]
    },
    improvements: [
      {
        original: "Responsible for building the frontend of the application.",
        improved: `Architected and implemented a high-performance ${jdKeywords[0] || 'React'} frontend, reducing initial load time by 40% through code-splitting.`
      },
      {
        original: "Worked with the team to fix bugs.",
        improved: `Collaborated with cross-functional teams using ${jdKeywords[1] || 'Agile'} methodologies to resolve 150+ critical production issues.`
      }
    ],
    feedback: `Your resume shows strong alignment with the core technical requirements. However, to better match this specific role, you should emphasize your experience with ${missingKeywords.join(", ")}. Quantifying your impact in these areas will significantly increase your match score.`
  };
};

const Dashboard = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState("");
  const [dragActive, setDragActive] = useState(false);

  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const { history, addResult, deleteResult } = useResumeStore();
  const navigate = useNavigate();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (!file || !jobDescription) {
      alert("Please upload a resume and provide a job description.");
      return;
    }
    setIsUploading(true);
    setTimeout(() => {
      setIsUploading(false);
      const dynamicData = generateDynamicResult(file.name, jobDescription);
      const id = addResult({
        fileName: file.name,
        ...dynamicData
      });
      navigate(`/report/${id}`);
    }, 3500);
  };

  return (
    <div className="min-h-screen pt-32 lg:pt-48 pb-24 lg:pb-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 lg:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-10"
        >
          <div>
            <div className="flex items-center gap-3 text-accent font-bold text-[10px] lg:text-[11px] uppercase tracking-[0.25em] mb-4 lg:mb-5">
              <Sparkles className="w-4 h-4" />
              <span>AI Analysis Engine v4.0</span>
            </div>
            <h1 className="text-4xl lg:text-7xl font-display font-extrabold text-brand-900 tracking-tight leading-tight">
              Hello, {user?.name.split(' ')[0]}
            </h1>
          </div>
          <div className="flex items-center gap-6 lg:gap-8">
            <div className="text-right hidden sm:block">
              <div className="text-[10px] lg:text-[11px] font-bold text-brand-500 uppercase tracking-[0.25em] mb-2">Account Status</div>
              <div className="text-brand-900 font-extrabold text-base lg:text-lg tracking-tight">Verified Professional</div>
            </div>
            <button 
              onClick={logout}
              className="bg-brand-50 text-brand-900 px-6 py-3 lg:px-8 lg:py-4 rounded-xl lg:rounded-2xl font-bold text-xs lg:text-sm hover:bg-brand-100 transition-all active:scale-95"
            >
              Sign Out
            </button>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-8 space-y-10 lg:space-y-16">
            {/* Upload Area */}
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`relative group rounded-[2.5rem] lg:rounded-[4rem] border-2 border-dashed transition-all duration-700 ${dragActive ? "border-accent bg-accent/5" : "border-brand-200 bg-white hover:border-brand-400 shadow-premium"}`}
                onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
                onDragLeave={() => setDragActive(false)}
                onDrop={(e) => { e.preventDefault(); setDragActive(false); if (e.dataTransfer.files[0]) setFile(e.dataTransfer.files[0]); }}
              >
                <input 
                  type="file" 
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" 
                  onChange={handleFileChange}
                  accept=".pdf,.docx"
                />
                <div className="p-10 lg:p-12 text-center">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-brand-50 rounded-2xl lg:rounded-[2.5rem] flex items-center justify-center mx-auto mb-6 lg:mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-700 shadow-sm">
                    <Upload className="w-8 h-8 text-brand-900" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-display font-bold text-brand-900 mb-2 lg:mb-3 tracking-tight">
                    {file ? file.name : "Upload Resume"}
                  </h3>
                  <p className="text-brand-500 font-medium mb-4 text-xs lg:text-sm leading-relaxed tracking-tight">
                    PDF or DOCX (Max 5MB)
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white rounded-[2.5rem] lg:rounded-[3rem] border border-brand-900/5 shadow-premium p-8 lg:p-10 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-brand-900" />
                  </div>
                  <h4 className="font-display font-bold text-brand-900 text-base lg:text-lg tracking-tight">Job Description</h4>
                </div>
                <textarea 
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  placeholder="Paste the job description here..."
                  className="flex-1 w-full bg-brand-50/50 border border-brand-900/5 rounded-2xl p-5 lg:p-6 text-xs lg:text-sm font-bold text-brand-900 placeholder:text-brand-300 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all resize-none min-h-[120px] lg:min-h-[150px]"
                />
              </motion.div>
            </div>

            <div className="flex justify-center">
              <button 
                onClick={handleUpload}
                disabled={isUploading || !file || !jobDescription}
                className="w-full sm:w-auto bg-brand-900 text-white px-10 py-5 lg:px-16 lg:py-6 rounded-2xl lg:rounded-[2rem] font-bold text-base lg:text-lg hover:bg-brand-800 transition-all flex items-center justify-center gap-4 shadow-premium disabled:opacity-50 active:scale-95"
              >
                {isUploading ? (
                  <>
                    <Loader2 className="w-6 h-6 animate-spin" />
                    Analyzing Match...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-6 h-6" />
                    Check Match Score
                  </>
                )}
              </button>
            </div>

            <div className="grid sm:grid-cols-2 gap-8 lg:gap-12">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white p-8 lg:p-12 rounded-[2.5rem] lg:rounded-[4rem] border border-brand-900/5 shadow-premium overflow-hidden"
              >
                <div className="flex items-center gap-5 mb-8 lg:mb-10">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 bg-brand-50 rounded-xl lg:rounded-2xl flex items-center justify-center shadow-sm">
                    <History className="w-6 h-6 lg:w-8 lg:h-8 text-brand-900" />
                  </div>
                  <h4 className="font-display font-bold text-brand-900 text-lg lg:text-2xl tracking-tight">Recent History</h4>
                </div>
                <div className="space-y-4">
                  {history.length > 0 ? (
                    <div className="space-y-3">
                      {history.map((item) => (
                        <div 
                          key={item.id} 
                          className="flex items-center justify-between p-4 bg-brand-50/50 rounded-2xl border border-brand-900/5 group hover:bg-white hover:shadow-md transition-all cursor-pointer overflow-hidden"
                          onClick={() => navigate(`/report/${item.id}`)}
                        >
                          <div className="flex items-center gap-3">
                            <FileText className="w-5 h-5 text-brand-400" />
                            <div className="max-w-[120px] sm:max-w-none">
                              <div className="text-xs lg:text-sm font-bold text-brand-900 truncate">{item.fileName}</div>
                              <div className="text-[8px] lg:text-[10px] font-bold text-brand-400 uppercase tracking-widest">{new Date(item.date).toLocaleDateString()}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 lg:gap-4">
                            <div className="text-xs lg:text-sm font-extrabold text-accent">{item.matchScore}%</div>
                            <button 
                              onClick={(e) => { e.stopPropagation(); deleteResult(item.id); }}
                              className="p-2 text-brand-300 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex items-center justify-center py-14 lg:py-20 border-2 border-dashed border-brand-50 rounded-2xl lg:rounded-[3rem]">
                      <p className="text-xs lg:text-sm text-brand-400 font-extrabold italic tracking-tight">No previous scans found.</p>
                    </div>
                  )}
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white p-8 lg:p-12 rounded-[2.5rem] lg:rounded-[4rem] border border-brand-900/5 shadow-premium overflow-hidden"
              >
                <div className="flex items-center gap-5 mb-8 lg:mb-10">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 bg-brand-50 rounded-xl lg:rounded-2xl flex items-center justify-center shadow-sm">
                    <TrendingUp className="w-6 h-6 lg:w-8 lg:h-8 text-brand-900" />
                  </div>
                  <h4 className="font-display font-bold text-brand-900 text-lg lg:text-2xl tracking-tight">Optimization Tips</h4>
                </div>
                <ul className="space-y-4 lg:space-y-6">
                  {[
                    "Use standard sans-serif fonts",
                    "Quantify your achievements",
                    "Keep it under 2 pages",
                    "Avoid complex graphics"
                  ].map((tip, i) => (
                    <li key={i} className="flex items-start gap-4 text-xs lg:text-base font-bold text-brand-700 tracking-tight">
                      <div className="w-6 h-6 lg:w-7 lg:h-7 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                        <CheckCircle2 className="w-4 h-4 text-accent" />
                      </div>
                      {tip}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-10 lg:space-y-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-brand-900 rounded-[2.5rem] lg:rounded-[4rem] p-10 lg:p-14 text-white shadow-premium-hover relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 lg:w-48 lg:h-48 bg-accent/20 rounded-full blur-[80px] lg:blur-[100px] -mr-20 -mt-20 lg:-mr-24 lg:-mt-24"></div>
              <h3 className="text-2xl lg:text-4xl font-display font-bold mb-6 lg:mb-8 relative z-10 tracking-tight leading-tight text-balance">Unlock Pro Intelligence</h3>
              <p className="text-brand-200 mb-8 lg:mb-12 text-sm lg:text-base leading-relaxed font-semibold relative z-10 tracking-tight">
                Get unlimited deep-scans, direct recruiter feedback, and keyword gap analysis for specific job roles.
              </p>
              <Link to="/billing" className="block w-full bg-white text-brand-900 py-4 lg:py-6 rounded-xl lg:rounded-[2rem] font-bold hover:bg-brand-50 transition-all active:scale-95 shadow-premium relative z-10 text-base lg:text-lg text-center">
                View Pro Plans
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-white border border-brand-900/5 rounded-[2.5rem] lg:rounded-[4rem] p-10 lg:p-14 shadow-premium overflow-hidden"
            >
              <h3 className="font-display font-bold text-brand-900 text-xl lg:text-3xl mb-8 lg:mb-12 tracking-tight">Profile Strength</h3>
              <div className="space-y-10 lg:space-y-12">
                <div>
                  <div className="flex justify-between text-sm mb-4 lg:mb-5">
                    <span className="text-brand-500 font-bold uppercase tracking-[0.25em] text-[9px] lg:text-[11px]">Overall Score</span>
                    <span className="font-extrabold text-brand-900 text-lg lg:text-xl">35%</span>
                  </div>
                  <div className="w-full bg-brand-50 h-3 lg:h-4 rounded-full overflow-hidden shadow-inner">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "35%" }}
                      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 1 }}
                      className="bg-accent h-full rounded-full shadow-premium"
                    />
                  </div>
                </div>

                <div className="pt-10 lg:pt-12 border-t border-brand-900/10 space-y-5 lg:space-y-6">
                  <div className="flex items-center gap-4 lg:gap-5 text-sm lg:text-base font-extrabold text-brand-900 tracking-tight">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl lg:rounded-2xl bg-accent/10 flex items-center justify-center shadow-sm">
                      <ShieldCheck className="w-6 h-6 lg:w-7 lg:h-7 text-accent" />
                    </div>
                    Security Verified
                  </div>
                  <p className="text-[10px] lg:text-sm text-brand-600 leading-relaxed font-bold tracking-tight">
                    Your documents are processed in a secure environment and automatically deleted after 24 hours.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
