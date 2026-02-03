import { motion } from "framer-motion";
import { Globe, Users, Award, Sparkles, ArrowRight, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen pt-48 pb-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="lg:grid lg:grid-cols-12 lg:gap-24 items-center mb-40">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold uppercase tracking-[0.25em] text-[10px] mb-10 shadow-sm">
              <Heart className="w-3.5 h-3.5" />
              <span>Our Mission</span>
            </div>
            <h1 className="text-5xl lg:text-8xl font-display font-extrabold text-brand-900 tracking-tight leading-tight mb-10">
              Empowering <br />
              <span className="text-accent italic font-light">Ambition.</span>
            </h1>
            <p className="text-xl text-brand-600 font-semibold leading-relaxed tracking-tight mb-12 max-w-2xl">
              ResumeAI was founded with a simple goal: to level the playing field in the modern job market. We believe that every professional deserves elite-level career intelligence.
            </p>
            <div className="grid sm:grid-cols-2 gap-10">
              <div className="space-y-4">
                <div className="text-4xl font-display font-extrabold text-brand-900 tracking-tighter">150k+</div>
                <div className="text-[10px] font-bold text-brand-400 uppercase tracking-[0.2em]">Users Worldwide</div>
              </div>
              <div className="space-y-4">
                <div className="text-4xl font-display font-extrabold text-brand-900 tracking-tighter">98%</div>
                <div className="text-[10px] font-bold text-brand-400 uppercase tracking-[0.2em]">Success Rate</div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-24 lg:mt-0 lg:col-span-5 relative"
          >
            <div className="absolute -inset-16 bg-accent/10 rounded-[6rem] blur-[100px] opacity-50"></div>
            <div className="relative aspect-square rounded-[4rem] overflow-hidden shadow-premium border border-white/30">
              <img 
                src="https://cdn.pixabay.com/photo/2017/09/05/10/08/office-2717014_1280.jpg" 
                alt="Our Team" 
                className="w-full h-full object-cover grayscale-[0.1]"
              />
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-40">
          {[
            { icon: <Globe className="w-8 h-8 text-white" />, title: "Global Vision", desc: "We're building tools that work across borders, cultures, and industries." },
            { icon: <Users className="w-8 h-8 text-white" />, title: "User Centric", desc: "Every feature we build starts with a real problem faced by job seekers." },
            { icon: <Award className="w-8 h-8 text-white" />, title: "Elite Standards", desc: "We don't settle for 'good enough'. We aim for recruiter-level precision." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-12 rounded-[3.5rem] bg-white border border-brand-900/5 shadow-premium"
            >
              <div className="w-20 h-20 rounded-3xl bg-brand-900 flex items-center justify-center mb-10 shadow-premium">
                {item.icon}
              </div>
              <h3 className="text-2xl font-display font-bold text-brand-900 mb-5 tracking-tight">{item.title}</h3>
              <p className="text-brand-600 leading-relaxed font-semibold tracking-tight">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand-900 rounded-[3rem] lg:rounded-[5rem] p-12 lg:p-32 text-center relative overflow-hidden shadow-premium-hover"
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-15 pointer-events-none">
            <div className="absolute top-[-30%] left-[-20%] w-[80%] h-[80%] bg-accent rounded-full blur-[200px]"></div>
          </div>
          <div className="relative z-10">
            <h2 className="text-4xl lg:text-8xl font-display font-extrabold text-white mb-10 leading-[1.1] tracking-tight text-balance">
              Join the career <br /> revolution.
            </h2>
            <Link to="/register" className="inline-flex bg-white text-brand-900 px-10 py-5 lg:px-16 lg:py-8 rounded-2xl lg:rounded-[2.5rem] text-lg lg:text-2xl font-bold hover:bg-brand-50 transition-all active:scale-95 shadow-premium">
              Create Your Account
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
