import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface FeatureBlockProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  image?: React.ReactNode;
  variant?: 'left' | 'right';
  index?: number;
}

const FeatureBlock: React.FC<FeatureBlockProps> = ({
  title,
  description,
  icon,
  image,
  variant = 'left',
  index = 0,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.98 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.98 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.16, 0.8, 0.24, 1],
      }}
      className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
        variant === 'right' ? 'lg:grid-flow-dense' : ''
      }`}
    >
      {/* Content */}
      <div className={`${variant === 'right' ? 'lg:col-start-2' : ''}`}>
        <motion.div
          initial={{ opacity: 0, x: variant === 'right' ? -20 : 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: variant === 'right' ? -20 : 20 }}
          transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
          className="space-y-6"
        >
          {icon && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
              className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-lg text-primary"
            >
              {icon}
            </motion.div>
          )}
          <h3 className="text-3xl md:text-4xl font-bold text-white">{title}</h3>
          <p className="text-lg text-muted leading-relaxed max-w-xl">{description}</p>
        </motion.div>
      </div>

      {/* Visual */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, x: variant === 'right' ? 20 : -20 }}
        animate={isInView ? { opacity: 1, scale: 1, x: 0 } : { opacity: 0, scale: 0.95, x: variant === 'right' ? 20 : -20 }}
        transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
        className={`${variant === 'right' ? 'lg:col-start-1 lg:row-start-1' : ''}`}
      >
        {image || (
          <div className="relative w-full aspect-video bg-surface border border-neutral-800 rounded-xl p-8 shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/5 rounded-xl" />
            <div className="relative space-y-3">
              <div className="h-3 bg-neutral-800 rounded w-3/4" />
              <div className="h-3 bg-neutral-800 rounded w-full" />
              <div className="h-3 bg-neutral-800 rounded w-5/6" />
              <div className="h-24 bg-gradient-to-br from-white/10 to-white/10 rounded-lg mt-4" />
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default FeatureBlock;

