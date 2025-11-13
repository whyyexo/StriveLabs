import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { supabase } from '../../lib/supabase';

interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

const navItems: NavItem[] = [
  { label: 'Product', href: '/product' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Docs', href: '/docs' },
  {
    label: 'Company',
    href: '#',
    children: [
      { label: 'About', href: '/about' },
      { label: 'Team', href: '/team' },
      { label: 'Contact', href: '/contact' },
    ],
  },
];

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [user, setUser] = useState<any>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user || null);
    };

    checkAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user || null);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (href: string) => {
    if (href !== '#') {
      navigate(href);
      setIsMobileMenuOpen(false);
    }
  };

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 0.8, 0.24, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-surface/80 backdrop-blur-md border-b border-neutral-800/50'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center cursor-pointer"
              onClick={() => navigate('/')}
            >
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-600 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <span className="text-xl font-bold text-white">Strive Labs</span>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <div key={item.label} className="relative" ref={item.children ? dropdownRef : null}>
                  <button
                    onMouseEnter={() => item.children && setHoveredItem(item.label)}
                    onMouseLeave={() => setHoveredItem(null)}
                    onClick={() => !item.children && handleNavClick(item.href)}
                    className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      isActive(item.href)
                        ? 'text-primary'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    {item.label}
                    {isActive(item.href) && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                        initial={false}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    {item.children && (
                      <motion.svg
                        animate={{ rotate: hoveredItem === item.label ? 180 : 0 }}
                        className="inline-block ml-1 w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </motion.svg>
                    )}
                  </button>

                  {/* Dropdown */}
                  {item.children && (
                    <AnimatePresence>
                      {hoveredItem === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-48 bg-surface border border-neutral-800 rounded-lg shadow-xl py-2"
                          onMouseEnter={() => setHoveredItem(item.label)}
                          onMouseLeave={() => setHoveredItem(null)}
                        >
                          {item.children.map((child) => (
                            <button
                              key={child.label}
                              onClick={() => handleNavClick(child.href)}
                              className={`w-full text-left px-4 py-2 text-sm transition-colors duration-200 ${
                                isActive(child.href)
                                  ? 'text-primary bg-primary/10'
                                  : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
                              }`}
                            >
                              {child.label}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {user ? (
                <>
                  <button
                    onClick={() => navigate('/dashboard')}
                    className="hidden sm:block px-4 py-2 text-sm font-medium text-neutral-400 hover:text-white transition-colors duration-200"
                  >
                    Dashboard
                  </button>
                  <button
                    onClick={async () => {
                      await supabase.auth.signOut();
                      navigate('/');
                    }}
                    className="px-4 py-2 text-sm font-medium text-neutral-400 hover:text-white transition-colors duration-200"
                  >
                    Sign out
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => navigate('/dashboard/sign-in')}
                    className="hidden sm:block px-4 py-2 text-sm font-medium text-neutral-400 hover:text-white transition-colors duration-200"
                  >
                    Sign in
                  </button>
                  <motion.button
                    whileHover={{ scale: 0.985 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => navigate('/dashboard/sign-in')}
                    className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-600 transition-all duration-200 shadow-lg shadow-primary/20"
                  >
                    Get started
                  </motion.button>
                </>
              )}

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-neutral-400 hover:text-white transition-colors duration-200"
                aria-label="Toggle mobile menu"
              >
                <motion.svg
                  animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </motion.svg>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-16 right-0 bottom-0 w-80 bg-surface border-l border-neutral-800 z-50 md:hidden overflow-y-auto"
            >
              <div className="p-6 space-y-6">
                {navItems.map((item) => (
                  <div key={item.label}>
                    <button
                      onClick={() => {
                        if (item.children) {
                          // Toggle submenu
                          setHoveredItem(hoveredItem === item.label ? null : item.label);
                        } else {
                          handleNavClick(item.href);
                        }
                      }}
                      className={`w-full text-left py-2 text-base font-medium ${
                        isActive(item.href)
                          ? 'text-primary'
                          : 'text-neutral-400'
                      }`}
                    >
                      {item.label}
                    </button>
                    {item.children && hoveredItem === item.label && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.children.map((child) => (
                          <button
                            key={child.label}
                            onClick={() => handleNavClick(child.href)}
                            className={`block w-full text-left py-2 text-sm ${
                              isActive(child.href)
                                ? 'text-primary'
                                : 'text-neutral-400'
                            }`}
                          >
                            {child.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 border-t border-neutral-800 space-y-3">
                  {user ? (
                    <>
                      <button
                        onClick={() => handleNavClick('/dashboard')}
                        className="w-full px-4 py-2 text-sm font-medium text-neutral-400 hover:text-white transition-colors duration-200"
                      >
                        Dashboard
                      </button>
                      <button
                        onClick={async () => {
                          await supabase.auth.signOut();
                          navigate('/');
                        }}
                        className="w-full px-4 py-2 text-sm font-medium text-neutral-400 hover:text-white transition-colors duration-200"
                      >
                        Sign out
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => handleNavClick('/dashboard/sign-in')}
                        className="w-full px-4 py-2 text-sm font-medium text-neutral-400 hover:text-white transition-colors duration-200"
                      >
                        Sign in
                      </button>
                      <button
                        onClick={() => handleNavClick('/dashboard/sign-in')}
                        className="w-full px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-600 transition-all duration-200"
                      >
                        Get started
                      </button>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

