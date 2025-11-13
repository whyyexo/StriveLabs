import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import FeatureBlock from '../components/premium/FeatureBlock';

const Product: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: 'AI-Powered Automation',
      description:
        'Automate repetitive tasks with intelligent workflows. Our AI learns from your patterns and suggests optimizations to save hours every week.',
      variant: 'left' as const,
    },
    {
      title: 'Real-time Collaboration',
      description:
        'Work together seamlessly with real-time sync, comments, and notifications. Keep your team aligned and productive.',
      variant: 'right' as const,
    },
    {
      title: 'Advanced Analytics',
      description:
        'Track performance, identify bottlenecks, and make data-driven decisions. Comprehensive dashboards and insights at your fingertips.',
      variant: 'left' as const,
    },
    {
      title: 'Enterprise Security',
      description:
        'Bank-level encryption, SSO, audit logs, and compliance certifications. Your data is secure and compliant with industry standards.',
      variant: 'right' as const,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-background border-b border-neutral-800">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
              Everything you need to{' '}
              <span className="text-primary">
                build better
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted max-w-3xl mx-auto">
              A complete platform with AI automation, seamless integrations, and enterprise-grade security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 0.985 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate('/dashboard/sign-in')}
                className="px-8 py-4 bg-primary text-background text-base font-semibold rounded-lg hover:bg-primary-100 transition-all duration-200 shadow-lg shadow-white/20"
              >
                Get started
              </motion.button>
              <motion.button
                whileHover={{ scale: 0.985 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate('/pricing')}
                className="px-8 py-4 bg-surface border border-neutral-800 text-white text-base font-semibold rounded-lg hover:border-neutral-700 hover:bg-neutral-900 transition-all duration-200"
              >
                View pricing
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto space-y-24">
          {features.map((feature, index) => (
            <FeatureBlock
              key={index}
              title={feature.title}
              description={feature.description}
              variant={feature.variant}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* Integrations */}
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
              Integrations that work
            </h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              Connect with the tools you already use and love.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              'Stripe',
              'Supabase',
              'GitHub',
              'Vercel',
              'OpenAI',
              'Framer',
            ].map((name, index) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="bg-surface border border-neutral-800 rounded-lg p-6 flex items-center justify-center hover:border-neutral-700 transition-all duration-200"
              >
                <span className="text-muted font-medium text-sm">{name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
              Ready to get started?
            </h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              Join thousands of teams already using Strive Labs to build faster.
            </p>
            <motion.button
              whileHover={{ scale: 0.985 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate('/dashboard/sign-in')}
              className="px-8 py-4 bg-primary text-background text-base font-semibold rounded-lg hover:bg-primary-100 transition-all duration-200 shadow-lg shadow-white/20"
            >
              Start free trial
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Product;

