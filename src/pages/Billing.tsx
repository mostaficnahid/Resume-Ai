import { motion } from "framer-motion";
import { CheckCircle2, Sparkles, ArrowRight, Star, Zap, Shield, CreditCard, Receipt, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

const Billing = () => {
  const user = useAuthStore((state) => state.user);

  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for a quick check.",
      features: ["3 Resume Scans", "Basic ATS Score", "Keyword Extraction", "Community Support"],
      button: "Current Plan",
      accent: false,
      current: true
    },
    {
      name: "Professional",
      price: "$19",
      description: "For serious job seekers.",
      features: ["Unlimited Scans", "Elite AI Rewriting", "JD Match Intelligence", "Priority Support", "Export to PDF/Docx"],
      button: "Upgrade Now",
      accent: true,
      popular: true,
      current: false
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For teams and agencies.",
      features: ["Bulk Processing", "API Access", "Custom Branding", "Dedicated Account Manager", "SLA Guarantee"],
      button: "Contact Sales",
      accent: false,
      current: false
    }
  ];

  return (
    <div className="min-h-screen pt-40 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-10"
        >
          <div>
            <div className="flex items-center gap-3 text-accent font-bold text-[11px] uppercase tracking-[0.25em] mb-5">
              <CreditCard className="w-4 h-4" />
              <span>Subscription Management</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-display font-extrabold text-brand-900 tracking-tight leading-tight">
              Billing & Plans
            </h1>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 space-y-12">
            {/* Pricing Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative p-10 rounded-[3rem] border transition-all duration-500 flex flex-col ${plan.accent ? "bg-brand-900 text-white border-brand-900 shadow-premium-hover scale-105 z-10" : "bg-white text-brand-900 border-brand-900/5 shadow-premium"}`}
                >
                  {plan.popular && (
                    <div className="absolute top-8 right-8 bg-accent text-white px-3 py-1 rounded-full text-[8px] font-bold uppercase tracking-widest shadow-lg">
                      Most Popular
                    </div>
                  )}
                  <div className="mb-8">
                    <h3 className="text-xl font-display font-bold mb-3 tracking-tight">{plan.name}</h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-display font-extrabold tracking-tighter">{plan.price}</span>
                      {plan.price !== "Custom" && <span className={`text-[10px] font-bold uppercase tracking-widest ${plan.accent ? "text-brand-300" : "text-brand-400"}`}>/ mo</span>}
                    </div>
                  </div>

                  <div className="space-y-4 mb-10 flex-1">
                    {plan.features.map((feature, j) => (
                      <div key={j} className="flex items-center gap-3 text-[11px] font-bold tracking-tight">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${plan.accent ? "bg-accent/20 text-accent" : "bg-accent/10 text-accent"}`}>
                          <CheckCircle2 className="w-3 h-3" />
                        </div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <button 
                    disabled={plan.current}
                    className={`flex items-center justify-center gap-2 w-full py-4 rounded-2xl font-bold text-sm transition-all active:scale-95 shadow-lg ${plan.current ? "bg-brand-50 text-brand-400 cursor-default" : plan.accent ? "bg-white text-brand-900 hover:bg-brand-50" : "bg-brand-900 text-white hover:bg-brand-800"}`}
                  >
                    {plan.button}
                    {!plan.current && <ArrowRight className="w-4 h-4" />}
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Billing History */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white p-12 rounded-[4rem] border border-brand-900/5 shadow-premium"
            >
              <div className="flex items-center gap-5 mb-10">
                <div className="w-16 h-16 bg-brand-50 rounded-2xl flex items-center justify-center shadow-sm">
                  <Receipt className="w-8 h-8 text-brand-900" />
                </div>
                <h4 className="font-display font-bold text-brand-900 text-2xl tracking-tight">Billing History</h4>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-center py-20 border-2 border-dashed border-brand-50 rounded-[3rem]">
                  <p className="text-sm text-brand-400 font-extrabold italic tracking-tight">No transactions found.</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-4 space-y-12">
            {/* Payment Method */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white border border-brand-900/5 rounded-[4rem] p-12 shadow-premium"
            >
              <h3 className="font-display font-bold text-brand-900 text-2xl mb-10 tracking-tight">Payment Method</h3>
              <div className="p-8 bg-brand-50/30 rounded-[2.5rem] border border-brand-900/5 flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6">
                  <CreditCard className="w-7 h-7 text-brand-300" />
                </div>
                <p className="text-sm text-brand-500 font-bold tracking-tight mb-8">No payment method on file.</p>
                <button className="bg-brand-900 text-white px-8 py-4 rounded-2xl font-bold text-xs hover:bg-brand-800 transition-all shadow-lg active:scale-95">
                  Add Card
                </button>
              </div>
            </motion.div>

            {/* Usage Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-brand-900 rounded-[4rem] p-12 text-white shadow-premium-hover relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-accent/20 rounded-full blur-[100px] -mr-24 -mt-24"></div>
              <h3 className="text-3xl font-display font-bold mb-8 relative z-10 tracking-tight">Usage Limits</h3>
              <div className="space-y-8 relative z-10">
                <div>
                  <div className="flex justify-between text-xs mb-3">
                    <span className="text-brand-300 font-bold uppercase tracking-widest">Resume Scans</span>
                    <span className="font-extrabold">1 / 3</span>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                    <div className="bg-accent h-full w-[33%] rounded-full"></div>
                  </div>
                </div>
                <div className="pt-8 border-t border-white/10 flex items-center gap-4">
                  <Clock className="w-5 h-5 text-accent" />
                  <p className="text-[10px] font-bold text-brand-200 uppercase tracking-widest leading-relaxed">
                    Resets on March 1, 2026
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

export default Billing;
