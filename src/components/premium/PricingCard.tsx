import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: PricingFeature[];
  popular?: boolean;
  ctaLabel?: string;
  onSelect?: () => void;
  index?: number;
}

const PricingCard: React.FC<PricingCardProps> = ({
  name,
  price,
  period,
  description,
  features,
  popular = false,
  ctaLabel = 'Get started',
  onSelect,
  index = 0,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onSelect) {
      onSelect();
    } else {
      navigate('/dashboard/sign-in');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 0.8, 0.24, 1] }}
      className={`relative ${popular ? 'lg:-mt-4' : ''}`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
            className="px-4 py-1 bg-primary text-background text-xs font-semibold rounded-full shadow-lg shadow-white/30"
          >
            Most Popular
          </motion.div>
        </div>
      )}

      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className={`relative h-full bg-surface border rounded-xl p-8 shadow-lg transition-all duration-200 ${
          popular
            ? 'border-white/50 bg-surface shadow-white/10'
            : 'border-neutral-800 hover:border-neutral-700'
        }`}
      >
        {/* Header */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
          <div className="flex items-baseline space-x-2 mb-4">
            <span className="text-4xl font-bold text-white">{price}</span>
            <span className="text-muted">/{period}</span>
          </div>
          <p className="text-muted">{description}</p>
        </div>

        {/* Features */}
        <ul className="space-y-4 mb-8">
          {features.map((feature, featureIndex) => (
            <motion.li
              key={featureIndex}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 + featureIndex * 0.05 }}
              className="flex items-start space-x-3"
            >
              {feature.included ? (
                <svg
                  className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 text-neutral-600 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
              <span
                className={`text-sm ${
                  feature.included ? 'text-neutral-300' : 'text-neutral-600'
                }`}
              >
                {feature.text}
              </span>
            </motion.li>
          ))}
        </ul>

        {/* CTA */}
        <motion.button
          whileHover={{ scale: 0.985 }}
          whileTap={{ scale: 0.97 }}
          onClick={handleClick}
          className={`w-full py-3 px-6 rounded-lg font-semibold text-sm transition-all duration-200 ${
            popular
              ? 'bg-primary text-background hover:bg-primary-100 shadow-lg shadow-white/20'
              : 'bg-neutral-800 text-white hover:bg-neutral-700 border border-neutral-700'
          }`}
        >
          {ctaLabel}
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default PricingCard;

