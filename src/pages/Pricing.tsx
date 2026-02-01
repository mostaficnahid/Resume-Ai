import { motion } from "framer-motion";
import { CheckCircle2, Sparkles, ArrowRight, Star, Zap, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for a quick check.",
      features: ["3 Resume Scans", "Basic ATS Score", "Keyword Extraction", "Community Support"],
      button: "Get Started",
      accent: false
    },
    {
      name: "Professional",
      price: "$19",
      description: "For serious job seekers.",
      features: ["Unlimited Scans", "Elite AI Rewriting", "JD Match Intelligence", "Priority Support", "Export to PDF/Docx"],
      button: "Go Pro",
      accent: true,
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For teams and agencies.",
      features: ["Bulk Processing", "API Access", "Custom Branding", "Dedicated Account Manager", "SLA Guarantee"],
      button: "Contact Sales",
      accent: false
    }
  ];

  return (
    <div className="min-h-screen pt-48 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-32">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold uppercase tracking-[0.25em] text-[10px] mb-10 shadow-sm">
            <Star className="w-3.5 h-3.5" />
            <span>Transparent Pricing</span>
          </div>
          <h1 className="text-6xl lg:text-8xl font-display font-extrabold text-brand-900 tracking-tight leading-tight mb-10">
            Invest in your <br />
            <span className="text-accent italic font-light">Future.</span>
          </h1>
          <p className="text-xl text-brand-600 max-w-2xl mx-auto font-semibold leading-relaxed tracking-tight">
            Choose the plan that fits your career goals. No hidden fees, just elite intelligence.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {plans.map((plan, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-14 rounded-[4rem] border transition-all duration-500 ${plan.accent ? "bg-brand-900 text-white border-brand-900 shadow-premium-hover scale-105 z-10" : "bg-white text-brand-900 border-brand-900/5 shadow-premium"}`}
            >
              {plan.popular && (
                <div className="absolute top-10 right-10 bg-accent text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg">
                  Most Popular
                </div>
              )}
              <div className="mb-10">
                <h3 className="text-2xl font-display font-bold mb-4 tracking-tight">{plan.name}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-display font-extrabold tracking-tighter">{plan.price}</span>
                  {plan.price !== "Custom" && <span className={`text-sm font-bold uppercase tracking-widest ${plan.accent ? "text-brand-300" : "text-brand-400"}`}>/ month</span>}
                </div>
                <p className={`mt-6 font-semibold tracking-tight ${plan.accent ? "text-brand-200" : "text-brand-500"}`}>{plan.description}</p>
              </div>

              <div className="space-y-6 mb-12">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-center gap-4 text-sm font-bold tracking-tight">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${plan.accent ? "bg-accent/20 text-accent" : "bg-accent/10 text-accent"}`}>
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    {feature}
                  </div>
                ))}
              </div>

              <Link 
                to="/dashboard" 
                className={`flex items-center justify-center gap-3 w-full py-6 rounded-[2rem] font-bold text-lg transition-all active:scale-95 shadow-xl ${plan.accent ? "bg-white text-brand-900 hover:bg-brand-50" : "bg-brand-900 text-white hover:bg-brand-800"}`}
              >
                {plan.button}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-40 grid md:grid-cols-3 gap-12 text-center">
          {[
            { icon: <Zap className="w-8 h-8 text-accent" />, title: "Instant Access", desc: "Get started in seconds with no credit card required." },
            { icon: <Shield className="w-8 h-8 text-accent" />, title: "Secure Payments", desc: "All transactions are encrypted and processed securely." },
            { icon: <Sparkles className="w-8 h-8 text-accent" />, title: "Cancel Anytime", desc: "No long-term contracts. Switch or cancel your plan at any time." }
          ].map((item, i) => (
            <div key={i} className="space-y-6">
              <div className="w-16 h-16 bg-brand-50 rounded-3xl flex items-center justify-center mx-auto shadow-sm">
                {item.icon}
              </div>
              <h4 className="text-xl font-display font-bold text-brand-900 tracking-tight">{item.title}</h4>
              <p className="text-brand-500 font-semibold tracking-tight leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
