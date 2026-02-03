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
    <div className="flex flex-col min-h-screen overflow-x-hidden bg-surface">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-[60] origin-left"
        style={{ scaleX }}
      />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 lg:pt-56 lg:pb-48 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="lg:grid lg:grid-cols-12 lg:gap-24 items-center">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="lg:col-span-7 text-center lg:text-left"
            >
              <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 lg:px-5 lg:py-2 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold uppercase tracking-[0.25em] text-[8px] lg:text-[10px] mb-8 lg:mb-12 shadow-sm">
                <Sparkles className="w-3 h-3 lg:w-3.5 lg:h-3.5" />
                <span>Elite Career Intelligence</span>
              </motion.div>
              
              <motion.h1 variants={itemVariants} className="text-4xl sm:text-6xl lg:text-[96px] font-display font-extrabold tracking-[-0.05em] text-brand-900 mb-8 lg:mb-12 leading-[0.9] lg:leading-[0.85] text-balance">
                Your Career, <br />
                <span className="text-accent italic font-light">Redefined</span> by AI.
              </motion.h1>
              
              <motion.p variants={itemVariants} className="text-lg lg:text-xl text-brand-700 mb-10 lg:mb-16 max-w-xl mx-auto lg:mx-0 leading-relaxed font-semibold tracking-tight">
                Stop guessing. Start winning. Our elite AI engine dissects your resume with recruiter-level precision to unlock your true potential.
              </motion.p>
              
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center lg:justify-start">
                <Link to="/dashboard" className="bg-brand-900 text-white px-10 py-5 lg:px-14 lg:py-7 rounded-2xl lg:rounded-[2.5rem] text-base lg:text-lg font-bold hover:bg-brand-800 transition-all shadow-premium flex items-center justify-center gap-3 group active:scale-95">
                  Analyze Resume
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="glass text-brand-900 px-10 py-5 lg:px-14 lg:py-7 rounded-2xl lg:rounded-[2.5rem] text-base lg:text-lg font-bold hover:bg-white transition-all active:scale-95">
                  View Sample
                </button>
              </motion.div>

              <motion.div variants={itemVariants} className="mt-16 lg:mt-24 flex flex-col sm:flex-row items-center gap-6 lg:gap-12 border-t border-brand-900/10 pt-10 lg:pt-14">
                <div className="flex -space-x-4 lg:-space-x-5">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 lg:w-14 lg:h-14 rounded-full border-4 border-surface bg-brand-200 overflow-hidden shadow-premium">
                      <img src={`https://i.pravatar.cc/100?img=${i+30}`} alt="User" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div className="text-xs lg:text-sm font-extrabold text-brand-600 tracking-tight text-center sm:text-left">
                  <span className="text-brand-900">2,400+</span> professionals optimized today
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="mt-20 lg:mt-0 lg:col-span-5 relative"
            >
              <div className="absolute -inset-10 lg:-inset-16 bg-accent/10 rounded-[4rem] lg:rounded-[6rem] blur-[60px] lg:blur-[100px] rotate-12 opacity-50"></div>
              <div className="relative aspect-[4/5] rounded-[2.5rem] lg:rounded-[4rem] overflow-hidden shadow-premium border border-white/30 group">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
                  alt="Minimalist Office" 
                  className="w-full h-full object-cover grayscale-[0.05] group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 lg:bottom-12 lg:left-12 lg:right-12 glass p-6 lg:p-10 rounded-2xl lg:rounded-[3rem] noise-texture">
                  <div className="flex items-center gap-4 lg:gap-6 mb-4 lg:mb-5">
                    <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl bg-brand-900 flex items-center justify-center shadow-premium">
                      <Star className="w-6 h-6 lg:w-8 lg:h-8 text-white fill-white" />
                    </div>
                    <div>
                      <div className="text-brand-900 font-extrabold text-base lg:text-xl tracking-tight">Elite Performance</div>
                      <div className="text-accent text-[8px] lg:text-[11px] font-bold uppercase tracking-[0.25em]">Top 1% of Candidates</div>
                    </div>
                  </div>
                  <div className="h-2 lg:h-2.5 w-full bg-brand-900/10 rounded-full overflow-hidden">
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
      <section className="py-16 lg:py-28 border-y border-brand-900/10 bg-white/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-20">
            {[
              { label: "Success Rate", value: "98%" },
              { label: "AI Accuracy", value: "99.9%" },
              { label: "Users Worldwide", value: "150k+" },
              { label: "Avg. Salary Increase", value: "24%" }
            ].map((stat, i) => (
              <div key={i} className="text-center md:text-left group">
                <div className="text-4xl lg:text-6xl font-display font-extrabold text-brand-900 mb-2 tracking-tighter group-hover:text-accent transition-colors duration-500">{stat.value}</div>
                <div className="text-[9px] lg:text-[11px] font-bold text-brand-500 uppercase tracking-[0.25em]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 lg:py-64">
        <div className="max-w-7xl mx-auto px-6">
          <div className="lg:grid lg:grid-cols-12 lg:gap-32 items-start">
            <div className="lg:col-span-5 mb-20 lg:mb-0 lg:sticky lg:top-48">
              <h2 className="text-4xl lg:text-7xl font-display font-extrabold text-brand-900 mb-8 lg:mb-12 leading-[1] tracking-tight">
                Engineered for <br />
                <span className="text-accent italic font-light">Excellence.</span>
              </h2>
              <p className="text-lg lg:text-xl text-brand-700 font-semibold leading-relaxed mb-10 lg:mb-14 tracking-tight max-w-md">
                We've combined deep learning with recruiter psychology to build the world's most advanced career optimization platform.
              </p>
              <div className="space-y-5 lg:space-y-6">
                {["ATS Compatibility", "Keyword Optimization", "Bullet Point Mastery"].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 lg:gap-5 text-brand-900 font-extrabold tracking-tight text-base lg:text-lg">
                    <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-accent/10 flex items-center justify-center shadow-sm shrink-0">
                      <CheckCircle2 className="w-4 h-4 lg:w-5 lg:h-5 text-accent" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6 lg:gap-10">
              {[
                {
                  icon: <BarChart3 className="w-8 h-8 lg:w-9 lg:h-9" />,
                  title: "ATS Scoring",
                  description: "Deep-scan your resume against 50+ industry-standard Applicant Tracking Systems."
                },
                {
                  icon: <Zap className="w-8 h-8 lg:w-9 lg:h-9" />,
                  title: "Instant Rewriting",
                  description: "Transform passive descriptions into high-impact achievement statements in real-time."
                },
                {
                  icon: <Shield className="w-8 h-8 lg:w-9 lg:h-9" />,
                  title: "Privacy First",
                  description: "Your data is encrypted and never shared. We prioritize your professional security."
                },
                {
                  icon: <Globe className="w-8 h-8 lg:w-9 lg:h-9" />,
                  title: "Global Standards",
                  description: "Optimized for US, UK, EU, and Asian market standards and cultural nuances."
                }
              ].map((feature, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -12, scale: 1.02 }}
                  className="p-8 lg:p-12 rounded-[2.5rem] lg:rounded-[3.5rem] bg-white border border-brand-900/5 shadow-premium transition-all duration-500 flex flex-col group hover:shadow-premium-hover overflow-hidden"
                >
                  <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl lg:rounded-3xl bg-brand-900 flex items-center justify-center mb-8 lg:mb-10 shadow-premium text-white group-hover:scale-110 transition-transform duration-500">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-display font-bold mb-4 lg:mb-6 tracking-tight text-brand-900">{feature.title}</h3>
                  <p className="text-base lg:text-lg leading-relaxed font-semibold tracking-tight text-brand-600">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-24 lg:pb-48 px-6">
        <div className="max-w-7xl mx-auto bg-brand-900 rounded-[3rem] lg:rounded-[5rem] p-12 lg:p-40 text-center relative overflow-hidden shadow-premium-hover">
          <div className="absolute top-0 left-0 w-full h-full opacity-15 pointer-events-none">
            <div className="absolute top-[-30%] left-[-30%] w-[80%] h-[80%] bg-accent rounded-full blur-[120px] lg:blur-[200px]"></div>
            <div className="absolute bottom-[-30%] right-[-30%] w-[80%] h-[80%] bg-accent rounded-full blur-[120px] lg:blur-[200px]"></div>
          </div>
          <div className="relative z-10">
            <h2 className="text-4xl lg:text-8xl font-display font-extrabold text-white mb-8 lg:mb-12 leading-[1] lg:leading-[0.9] tracking-tight">
              Ready to land your <br /> dream role?
            </h2>
            <p className="text-brand-200 text-lg lg:text-2xl mb-12 lg:mb-20 max-w-3xl mx-auto font-semibold tracking-tight">
              Join thousands of professionals who have already accelerated their careers with ResumeAI.
            </p>
            <Link to="/dashboard" className="inline-flex bg-white text-brand-900 px-10 py-5 lg:px-16 lg:py-8 rounded-2xl lg:rounded-[2.5rem] text-lg lg:text-2xl font-bold hover:bg-brand-50 transition-all active:scale-95 shadow-premium">
              Get Started for Free
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
