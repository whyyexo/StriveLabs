import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/premium/Hero';
import FeatureBlock from '../components/premium/FeatureBlock';
import PricingCard from '../components/premium/PricingCard';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: 'Build faster with AI-powered tools',
      description:
        'Leverage cutting-edge AI to automate workflows, generate content, and accelerate development. Focus on what matters while AI handles the rest.',
      icon: (
        <svg
          className="w-6 h-6"
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
      ),
      variant: 'left' as const,
    },
    {
      title: 'Seamless integrations with your stack',
      description:
        'Connect with Stripe, Supabase, GitHub, and 100+ tools. One unified platform that works with your existing infrastructure.',
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
          />
        </svg>
      ),
      variant: 'right' as const,
    },
    {
      title: 'Enterprise-grade security and scale',
      description:
        'Built on secure, scalable infrastructure. SOC 2 compliant with end-to-end encryption. Scale from startup to enterprise without limits.',
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
      variant: 'left' as const,
    },
  ];

  const pricingPlans = [
    {
      name: 'Lunch',
      price: '$0',
      period: 'forever',
      description: 'Perfect for getting started',
      features: [
        { text: 'Public projects', included: true },
        { text: 'Basic support', included: true },
        { text: 'Community access', included: true },
        { text: '10GB storage', included: true },
        { text: 'Private projects', included: false },
        { text: 'Priority support', included: false },
      ],
      popular: false,
      ctaLabel: 'Get started',
    },
    {
      name: 'Boost',
      price: '$20',
      period: 'month',
      description: 'For growing teams',
      features: [
        { text: 'Everything in Lunch', included: true },
        { text: 'Private projects', included: true },
        { text: 'Priority support', included: true },
        { text: 'Advanced analytics', included: true },
        { text: '100GB storage', included: true },
        { text: 'Custom integrations', included: false },
      ],
      popular: true,
      ctaLabel: 'Start free trial',
    },
    {
      name: 'Scale',
      price: '$35',
      period: 'month',
      description: 'For enterprise needs',
      features: [
        { text: 'Everything in Boost', included: true },
        { text: 'Custom integrations', included: true },
        { text: 'Dedicated support', included: true },
        { text: 'Advanced security', included: true },
        { text: 'Unlimited storage', included: true },
        { text: 'SLA guarantee', included: true },
      ],
      popular: false,
      ctaLabel: 'Contact sales',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Hero
        headline="Build faster. Ship smarter."
        subtext="Premium tools for modern teams. Accelerate development with AI-powered automation and seamless integrations."
        primaryCTA={{ label: 'Get started', href: '/dashboard/sign-in' }}
        secondaryCTA={{ label: 'See pricing', href: '/pricing' }}
      />

      {/* Features Section */}
      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto space-y-24">
          {features.map((feature, index) => (
            <FeatureBlock
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              variant={feature.variant}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* Pricing Preview Section */}
      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-surface border-t border-neutral-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              Choose the plan that fits your needs. Start free, upgrade anytime.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-12">
            {pricingPlans.map((plan, index) => (
              <PricingCard
                key={plan.name}
                name={plan.name}
                price={plan.price}
                period={plan.period}
                description={plan.description}
                features={plan.features}
                popular={plan.popular}
                ctaLabel={plan.ctaLabel}
                index={index}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <button
              onClick={() => navigate('/pricing')}
              className="text-primary hover:text-white transition-colors duration-200 font-medium"
            >
              View full pricing →
            </button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-background border-t border-neutral-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white">
              Ready to transform your workflow?
            </h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              Join thousands of teams already building faster with Strive Labs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 0.985 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate('/dashboard/sign-in')}
                className="px-8 py-4 bg-primary text-background text-base font-semibold rounded-lg hover:bg-primary-100 transition-all duration-200 shadow-lg shadow-white/20 hover:shadow-white/30"
              >
                Start building now
              </motion.button>
              <motion.button
                whileHover={{ scale: 0.985 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate('/contact')}
                className="px-8 py-4 bg-surface border border-neutral-800 text-white text-base font-semibold rounded-lg hover:border-neutral-700 hover:bg-neutral-900 transition-all duration-200"
              >
                Request a demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;

