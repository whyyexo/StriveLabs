import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface HeroProps {
  headline: string;
  subtext: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  visual?: React.ReactNode;
}

const Hero: React.FC<HeroProps> = ({
  headline,
  subtext,
  primaryCTA = { label: 'Get started', href: '/dashboard/sign-in' },
  secondaryCTA = { label: 'See pricing', href: '/pricing' },
  visual,
}) => {
  const navigate = useNavigate();

  const words = headline.split(' ');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-surface to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0F1115_1px,transparent_1px),linear-gradient(to_bottom,#0F1115_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 pt-32 lg:pt-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 0.8, 0.24, 1] }}
            className="space-y-8"
          >
            {/* Headline with mask reveal */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20, clipPath: 'inset(100% 0 0 0)' }}
                  animate={{ opacity: 1, y: 0, clipPath: 'inset(0% 0 0% 0)' }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                    ease: [0.16, 0.8, 0.24, 1],
                  }}
                  className="inline-block mr-2"
                >
                  {word === 'Strive' ? (
                    <span className="text-primary">
                      {word}
                    </span>
                  ) : (
                    word
                  )}
                </motion.span>
              ))}
            </h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 0.8, 0.24, 1] }}
              className="text-xl md:text-2xl text-muted max-w-2xl leading-relaxed"
            >
              {subtext}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 0.8, 0.24, 1] }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 0.985 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate(primaryCTA.href)}
                className="px-8 py-4 bg-primary text-background text-base font-semibold rounded-lg hover:bg-primary-100 transition-all duration-200 shadow-lg shadow-white/20 hover:shadow-white/30"
              >
                {primaryCTA.label}
              </motion.button>
              <motion.button
                whileHover={{ scale: 0.985 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate(secondaryCTA.href)}
                className="px-8 py-4 bg-surface border border-neutral-800 text-white text-base font-semibold rounded-lg hover:border-neutral-700 hover:bg-neutral-900 transition-all duration-200"
              >
                {secondaryCTA.label}
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 0.8, 0.24, 1] }}
            className="relative"
          >
            {visual || (
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Placeholder visual */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/20 rounded-2xl blur-3xl" />
                <div className="relative bg-surface border border-neutral-800 rounded-2xl p-8 shadow-2xl">
                  <div className="space-y-4">
                    <div className="h-4 bg-neutral-800 rounded w-3/4" />
                    <div className="h-4 bg-neutral-800 rounded w-full" />
                    <div className="h-4 bg-neutral-800 rounded w-5/6" />
                    <div className="h-32 bg-gradient-to-br from-white/10 to-white/10 rounded-lg mt-6" />
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-neutral-700 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 bg-neutral-500 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

