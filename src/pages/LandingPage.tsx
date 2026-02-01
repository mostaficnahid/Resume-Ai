import { ArrowRight, CheckCircle2, Zap, Shield, BarChart3, Star, Globe, Cpu, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";

const LandingPage = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-[60] origin-left"
        style={{ scaleX }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-56 lg:pb-48 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="lg:grid lg:grid-cols-12 lg:gap-24 items-center">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="lg:col-span-7 text-left"
            >
              <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold uppercase tracking-[0.25em] text-[10px] mb-12 shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Elite Career Intelligence</span>
              </motion.div>
              
              <motion.h1 variants={itemVariants} className="text-6xl lg:text-[96px] font-display font-extrabold tracking-[-0.05em] text-brand-900 mb-12 leading-[0.85] text-balance">
                Your Career, <br />
                <span className="text-accent italic font-light">Redefined</span> by AI.
              </motion.h1>
              
              <motion.p variants={itemVariants} className="text-xl text-brand-700 mb-16 max-w-xl leading-relaxed font-semibold tracking-tight">
                Stop guessing. Start winning. Our elite AI engine dissects your resume with recruiter-level precision to unlock your true potential.
              </motion.p>
              
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6">
                <Link to="/dashboard" className="bg-brand-900 text-white px-14 py-7 rounded-[2.5rem] text-lg font-bold hover:bg-brand-800 transition-all shadow-premium flex items-center justify-center gap-3 group active:scale-95">
                  Analyze Resume
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="glass text-brand-900 px-14 py-7 rounded-[2.5rem] text-lg font-bold hover:bg-white transition-all active:scale-95">
                  View Sample
                </button>
              </motion.div>

              <motion.div variants={itemVariants} className="mt-24 flex items-center gap-12 border-t border-brand-900/10 pt-14">
                <div className="flex -space-x-5">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-14 h-14 rounded-full border-4 border-surface bg-brand-200 overflow-hidden shadow-premium">
                      <img src={`https://i.pravatar.cc/100?img=${i+30}`} alt="User" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div className="text-sm font-extrabold text-brand-600 tracking-tight">
                  <span className="text-brand-900">2,400+</span> professionals optimized today
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="mt-24 lg:mt-0 lg:col-span-5 relative"
            >
              <div className="absolute -inset-16 bg-accent/10 rounded-[6rem] blur-[100px] rotate-12 opacity-50"></div>
              <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden shadow-premium border border-white/30 group">
                <img 
                  src="https://cdn.pixabay.com/photo/2017/03/28/12/06/chairs-2181916_1280.jpg" 
                  alt="Minimalist Office" 
                  className="w-full h-full object-cover grayscale-[0.05] group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-12 left-12 right-12 glass p-10 rounded-[3rem] noise-texture">
                  <div className="flex items-center gap-6 mb-5">
                    <div className="w-16 h-16 rounded-2xl bg-brand-900 flex items-center justify-center shadow-premium">
                      <Star className="w-8 h-8 text-white fill-white" />
                    </div>
                    <div>
                      <div className="text-brand-900 font-extrabold text-xl tracking-tight">Elite Performance</div>
                      <div className="text-accent text-[11px] font-bold uppercase tracking-[0.25em]">Top 1% of Candidates</div>
                    </div>
                  </div>
                  <div className="h-2.5 w-full bg-brand-900/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "94%" }}
                      transition={{ duration: 2, delay: 1.2 }}
                      className="h-full bg-accent"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-28 border-y border-brand-900/10 bg-white/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-20">
            {[
              { label: "Success Rate", value: "98%" },
              { label: "AI Accuracy", value: "99.9%" },
              { label: "Users Worldwide", value: "150k+" },
              { label: "Avg. Salary Increase", value: "24%" }
            ].map((stat, i) => (
              <div key={i} className="text-center md:text-left group">
                <div className="text-6xl font-display font-extrabold text-brand-900 mb-3 tracking-tighter group-hover:text-accent transition-colors duration-500">{stat.value}</div>
                <div className="text-[11px] font-bold text-brand-500 uppercase tracking-[0.25em]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-48 lg:py-64">
        <div className="max-w-7xl mx-auto px-6">
          <div className="lg:grid lg:grid-cols-12 lg:gap-40 items-start">
            <div className="lg:col-span-4 mb-32 lg:mb-0 sticky top-48">
              <h2 className="text-5xl lg:text-7xl font-display font-extrabold text-brand-900 mb-12 leading-[1] tracking-tight">
                Engineered for <br />
                <span className="text-accent italic font-light">Excellence.</span>
              </h2>
              <p className="text-xl text-brand-700 font-semibold leading-relaxed mb-14 tracking-tight">
                We've combined deep learning with recruiter psychology to build the world's most advanced career optimization platform.
              </p>
              <div className="space-y-6">
                {["ATS Compatibility", "Keyword Optimization", "Bullet Point Mastery"].map((item, i) => (
                  <div key={i} className="flex items-center gap-5 text-brand-900 font-extrabold tracking-tight text-lg">
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shadow-sm">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-12">
              {[
                {
                  icon: <BarChart3 className="w-9 h-9" />,
                  title: "ATS Scoring",
                  description: "Deep-scan your resume against 50+ industry-standard Applicant Tracking Systems."
                },
                {
                  icon: <Zap className="w-9 h-9" />,
                  title: "Instant Rewriting",
                  description: "Transform passive descriptions into high-impact achievement statements in real-time."
                },
                {
                  icon: <Shield className="w-9 h-9" />,
                  title: "Privacy First",
                  description: "Your data is encrypted and never shared. We prioritize your professional security."
                },
                {
                  icon: <Globe className="w-9 h-9" />,
                  title: "Global Standards",
                  description: "Optimized for US, UK, EU, and Asian market standards and cultural nuances."
                }
              ].map((feature, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -16, scale: 1.02 }}
                  className={`p-14 rounded-[3.5rem] border border-brand-900/5 transition-all duration-500 ${i % 2 === 0 ? "bg-white shadow-premium" : "bg-brand-900 text-white shadow-premium-hover"}`}
                >
                  <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-12 shadow-premium ${i % 2 === 0 ? "bg-brand-900 text-white" : "bg-accent text-white"}`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-3xl font-display font-bold mb-6 tracking-tight">{feature.title}</h3>
                  <p className={`text-lg leading-relaxed font-semibold tracking-tight ${i % 2 === 0 ? "text-brand-700" : "text-brand-200"}`}>
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-48 px-6">
        <div className="max-w-7xl mx-auto bg-brand-900 rounded-[5rem] p-20 lg:p-40 text-center relative overflow-hidden shadow-premium-hover">
          <div className="absolute top-0 left-0 w-full h-full opacity-15 pointer-events-none">
            <div className="absolute top-[-30%] left-[-30%] w-[80%] h-[80%] bg-accent rounded-full blur-[200px]"></div>
            <div className="absolute bottom-[-30%] right-[-30%] w-[80%] h-[80%] bg-accent rounded-full blur-[200px]"></div>
          </div>
          <div className="relative z-10">
            <h2 className="text-6xl lg:text-8xl font-display font-extrabold text-white mb-12 leading-[0.9] tracking-tight">
              Ready to land your <br /> dream role?
            </h2>
            <p className="text-brand-200 text-2xl mb-20 max-w-3xl mx-auto font-semibold tracking-tight">
              Join thousands of professionals who have already accelerated their careers with ResumeAI.
            </p>
            <Link to="/dashboard" className="inline-flex bg-white text-brand-900 px-16 py-8 rounded-[2.5rem] text-2xl font-bold hover:bg-brand-50 transition-all active:scale-95 shadow-premium">
              Get Started for Free
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
