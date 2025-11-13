import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PricingCard from '../components/premium/PricingCard';

const Pricing: React.FC = () => {
  const navigate = useNavigate();
  const [isAnnual, setIsAnnual] = useState(false);

  const pricingPlans = [
    {
      name: 'Lunch',
      price: isAnnual ? '$0' : '$0',
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
      price: isAnnual ? '$16' : '$20',
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
      price: isAnnual ? '$28' : '$35',
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
    <div className="min-h-screen bg-background pt-16">
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
              Simple, transparent pricing
            </h1>
            <p className="text-xl md:text-2xl text-muted max-w-3xl mx-auto">
              Choose the plan that fits your needs. Start free, upgrade anytime.
            </p>

            {/* Toggle */}
            <div className="flex items-center justify-center space-x-4 pt-4">
              <span className={`text-sm ${!isAnnual ? 'text-white' : 'text-muted'}`}>
                Monthly
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`relative w-14 h-7 rounded-full transition-colors duration-200 ${
                  isAnnual ? 'bg-primary' : 'bg-neutral-800'
                }`}
              >
                <motion.div
                  animate={{
                    x: isAnnual ? 28 : 2,
                  }}
                  transition={{ duration: 0.2, ease: [0.16, 0.8, 0.24, 1] }}
                  className="absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow-lg"
                />
              </button>
              <span className={`text-sm ${isAnnual ? 'text-white' : 'text-muted'}`}>
                Annual
                {isAnnual && (
                  <span className="ml-2 px-2 py-0.5 bg-white/20 text-primary text-xs rounded">
                    Save 20%
                  </span>
                )}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-16">
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

          {/* FAQ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {[
                {
                  question: 'Can I change plans anytime?',
                  answer:
                    'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.',
                },
                {
                  question: 'What payment methods do you accept?',
                  answer:
                    'We accept all major credit cards, PayPal, and bank transfers for annual plans.',
                },
                {
                  question: 'Is there a free trial?',
                  answer:
                    'Yes, all plans come with a 14-day free trial. No credit card required.',
                },
                {
                  question: 'Do you offer refunds?',
                  answer: 'We offer a 30-day money-back guarantee for all paid plans.',
                },
                {
                  question: 'What happens if I exceed my limits?',
                  answer:
                    "We'll notify you before you hit your limits. You can upgrade your plan at any time.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-surface border border-neutral-800 rounded-lg p-6 hover:border-neutral-700 transition-all duration-200"
                >
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-muted leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-surface border-t border-neutral-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white">
              Still have questions?
            </h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              Our team is here to help. Get in touch and we'll answer your questions.
            </p>
            <motion.button
              whileHover={{ scale: 0.985 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate('/contact')}
              className="px-8 py-4 bg-primary text-background text-base font-semibold rounded-lg hover:bg-primary-100 transition-all duration-200 shadow-lg shadow-white/20"
            >
              Contact Sales
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
