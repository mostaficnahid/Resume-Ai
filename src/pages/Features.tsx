import { motion } from "framer-motion";
import { BarChart3, Zap, Shield, Globe, Cpu, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Features = () => {
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

  const features = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "ATS Scoring Engine",
      description: "Deep-scan your resume against 50+ industry-standard Applicant Tracking Systems to ensure you never get filtered out."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Bullet Rewriting",
      description: "Transform passive descriptions into high-impact achievement statements using our elite AI models."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Privacy-First Analysis",
      description: "Your data is encrypted and processed in a secure environment. We never share your professional information."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Market Standards",
      description: "Optimized for US, UK, EU, and Asian market standards, including cultural nuances and formatting preferences."
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "JD Match Intelligence",
      description: "Analyze your resume against specific job descriptions to identify keyword gaps and alignment scores."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Recruiter Feedback",
      description: "Get actionable insights and tips from the perspective of elite recruiters to make your profile stand out."
    }
  ];

  return (
    <div className="min-h-screen pt-48 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-32"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold uppercase tracking-[0.25em] text-[10px] mb-10 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Elite Capabilities</span>
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-6xl lg:text-8xl font-display font-extrabold text-brand-900 tracking-tight leading-tight mb-10">
            Engineered for <br />
            <span className="text-accent italic font-light">Excellence.</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xl text-brand-600 max-w-2xl mx-auto font-semibold leading-relaxed tracking-tight">
            We've combined deep learning with recruiter psychology to build the world's most advanced career optimization platform.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="p-12 rounded-[3.5rem] bg-white border border-brand-900/5 shadow-premium transition-all duration-500"
            >
              <div className="w-20 h-20 rounded-3xl bg-brand-900 flex items-center justify-center mb-10 shadow-premium text-white">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-display font-bold text-brand-900 mb-5 tracking-tight">{feature.title}</h3>
              <p className="text-brand-600 leading-relaxed font-semibold tracking-tight">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-40 bg-brand-900 rounded-[4rem] p-16 lg:p-32 text-center relative overflow-hidden shadow-premium-hover"
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-15 pointer-events-none">
            <div className="absolute top-[-30%] left-[-20%] w-[80%] h-[80%] bg-accent rounded-full blur-[200px]"></div>
          </div>
          <div className="relative z-10">
            <h2 className="text-5xl lg:text-7xl font-display font-extrabold text-white mb-10 leading-[0.9] tracking-tight">
              Ready to experience <br /> the difference?
            </h2>
            <Link to="/dashboard" className="inline-flex bg-white text-brand-900 px-16 py-8 rounded-[2.5rem] text-2xl font-bold hover:bg-brand-50 transition-all active:scale-95 shadow-premium">
              Get Started Now
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Features;
