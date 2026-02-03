import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AnalysisReport from "./pages/AnalysisReport";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Billing from "./pages/Billing";
import MainLayout from "./layouts/MainLayout";
import { useAuthStore } from "./store/authStore";

const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 border border-brand-900/20 rounded-full pointer-events-none z-[100] hidden lg:block"
      animate={{ x: mousePos.x - 16, y: mousePos.y - 16 }}
      transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
    />
  );
};

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const [isHydrated, setIsHydrated] = useState(false);

  // Handle Zustand hydration
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) return null;
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  
  return <>{children}</>;
};

function App() {
  return (
    <Router>
      <CustomCursor />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="features" element={<Features />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route 
            path="dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="billing" 
            element={
              <ProtectedRoute>
                <Billing />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="report/:id" 
            element={
              <ProtectedRoute>
                <AnalysisReport />
              </ProtectedRoute>
            } 
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
