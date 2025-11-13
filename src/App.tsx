import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/premium/Navbar';
import Footer from './components/premium/Footer';
import LoadingScreen from './components/LoadingScreen';
import AuthGuard from './components/AuthGuard';
import SEO from './components/SEO';

// Public pages
import Home from './pages/Home';
import Product from './pages/Product';
import Pricing from './pages/Pricing';
import Docs from './pages/Docs';
import About from './pages/About';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Career from './pages/Career';
import Community from './pages/Community';
import Legal from './pages/Legal';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

// Product pages
import FiverFlow from './pages/FiverFlow';
import NeuralEdge from './pages/NeuralEdge';

// Auth pages
import SignIn from './pages/SignIn';

// Protected pages
import Dashboard from './pages/Dashboard';
import Admin from './pages/Admin';

// Layout component for public pages
const PublicLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

// Page transition wrapper
const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: [0.16, 0.8, 0.24, 1] }}
    >
      {children}
    </motion.div>
  );
};

// Main App Component
const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <LanguageProvider>
      <Router>
        <LoadingScreen isLoading={isLoading} onLoadingComplete={() => setIsLoading(false)} />
        <AnimatePresence mode="wait">
          {!isLoading && (
            <Routes>
              {/* Public Routes */}
              <Route
                path="/"
                element={
                  <PublicLayout>
                    <SEO
                      title="Home"
                      description="Build faster. Ship smarter. Premium tools for modern teams."
                    />
                    <PageTransition>
                      <Home />
                    </PageTransition>
                  </PublicLayout>
                }
              />
              <Route
                path="/product"
                element={
                  <PublicLayout>
                    <SEO
                      title="Product"
                      description="Everything you need to build better. AI-powered automation, seamless integrations, and enterprise-grade security."
                    />
                    <PageTransition>
                      <Product />
                    </PageTransition>
                  </PublicLayout>
                }
              />
              <Route
                path="/pricing"
                element={
                  <PublicLayout>
                    <SEO
                      title="Pricing"
                      description="Simple, transparent pricing. Choose the plan that fits your needs. Start free, upgrade anytime."
                    />
                    <PageTransition>
                      <Pricing />
                    </PageTransition>
                  </PublicLayout>
                }
              />
              <Route
                path="/docs"
                element={
                  <PublicLayout>
                    <SEO
                      title="Documentation"
                      description="Everything you need to build with Strive Labs. Get started, learn the API, and explore guides."
                    />
                    <PageTransition>
                      <Docs />
                    </PageTransition>
                  </PublicLayout>
                }
              />
              <Route
                path="/about"
                element={
                  <PublicLayout>
                    <SEO
                      title="About"
                      description="We're building the tools that help modern teams ship faster and smarter."
                    />
                    <PageTransition>
                      <About />
                    </PageTransition>
                  </PublicLayout>
                }
              />
              <Route
                path="/team"
                element={
                  <PublicLayout>
                    <SEO
                      title="Team"
                      description="Meet the team behind Strive Labs. We're a small team of builders, designers, and engineers."
                    />
                    <PageTransition>
                      <Team />
                    </PageTransition>
                  </PublicLayout>
                }
              />
              <Route
                path="/contact"
                element={
                  <PublicLayout>
                    <SEO
                      title="Contact"
                      description="Get in touch with Strive Labs. Have a question? Want to request a demo? We're here to help."
                    />
                    <PageTransition>
                      <Contact />
                    </PageTransition>
                  </PublicLayout>
                }
              />
              <Route
                path="/career"
                element={
                  <PublicLayout>
                    <SEO title="Careers" description="Join us on our mission. We're always looking for talented people to join our team." />
                    <PageTransition>
                      <Career />
                    </PageTransition>
                  </PublicLayout>
                }
              />
              <Route
                path="/community"
                element={
                  <PublicLayout>
                    <SEO title="Community" description="Join the Strive Labs community. Connect with others, share ideas, and get help." />
                    <PageTransition>
                      <Community />
                    </PageTransition>
                  </PublicLayout>
                }
              />
              <Route
                path="/legal"
                element={
                  <PublicLayout>
                    <SEO title="Legal" description="Legal information and policies for Strive Labs." />
                    <PageTransition>
                      <Legal />
                    </PageTransition>
                  </PublicLayout>
                }
              />
              <Route
                path="/privacy"
                element={
                  <PublicLayout>
                    <SEO title="Privacy Policy" description="Privacy policy for Strive Labs." />
                    <PageTransition>
                      <Privacy />
                    </PageTransition>
                  </PublicLayout>
                }
              />
              <Route
                path="/terms"
                element={
                  <PublicLayout>
                    <SEO title="Terms of Service" description="Terms of service for Strive Labs." />
                    <PageTransition>
                      <Terms />
                    </PageTransition>
                  </PublicLayout>
                }
              />

              {/* Product Routes */}
              <Route
                path="/product/fiverflow"
                element={
                  <PublicLayout>
                    <SEO title="FiverFlow" description="AI automation for freelancers. Automate workflows and accelerate development." />
                    <PageTransition>
                      <FiverFlow />
                    </PageTransition>
                  </PublicLayout>
                }
              />
              <Route
                path="/product/neuraledge"
                element={
                  <PublicLayout>
                    <SEO title="NeuralEdge" description="NeuralEdge - Coming soon." />
                    <PageTransition>
                      <NeuralEdge />
                    </PageTransition>
                  </PublicLayout>
                }
              />

              {/* Auth Routes */}
              <Route
                path="/dashboard/sign-in"
                element={
                  <>
                    <SEO title="Sign In" description="Sign in to your Strive Labs account." />
                    <SignIn />
                  </>
                }
              />

              {/* Protected Routes */}
              <Route
                path="/dashboard"
                element={
                  <AuthGuard>
                    <SEO title="Dashboard" description="Your Strive Labs dashboard." />
                    <Dashboard />
                  </AuthGuard>
                }
              />
              <Route
                path="/admin"
                element={
                  <AuthGuard>
                    <SEO title="Admin" description="Admin panel for Strive Labs." />
                    <Admin />
                  </AuthGuard>
                }
              />
            </Routes>
          )}
        </AnimatePresence>
      </Router>
    </LanguageProvider>
  );
};

export default App;
