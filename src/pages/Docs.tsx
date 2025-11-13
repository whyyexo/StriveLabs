import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Docs: React.FC = () => {
  const navigate = useNavigate();

  const docSections = [
    {
      title: 'Getting Started',
      description: 'Learn the basics and get up and running in minutes',
      links: [
        { label: 'Quick Start Guide', href: '/docs/quickstart' },
        { label: 'Installation', href: '/docs/installation' },
        { label: 'Configuration', href: '/docs/configuration' },
        { label: 'First Steps', href: '/docs/first-steps' },
      ],
    },
    {
      title: 'API Reference',
      description: 'Complete API documentation and examples',
      links: [
        { label: 'Authentication', href: '/docs/api/auth' },
        { label: 'Endpoints', href: '/docs/api/endpoints' },
        { label: 'Webhooks', href: '/docs/api/webhooks' },
        { label: 'Rate Limits', href: '/docs/api/rate-limits' },
      ],
    },
    {
      title: 'Guides',
      description: 'Step-by-step tutorials and best practices',
      links: [
        { label: 'Building Workflows', href: '/docs/guides/workflows' },
        { label: 'Integrations', href: '/docs/guides/integrations' },
        { label: 'Security', href: '/docs/guides/security' },
        { label: 'Deployment', href: '/docs/guides/deployment' },
      ],
    },
    {
      title: 'Resources',
      description: 'Additional resources and community',
      links: [
        { label: 'Examples', href: '/docs/examples' },
        { label: 'SDKs', href: '/docs/sdks' },
        { label: 'Community', href: '/community' },
        { label: 'Support', href: '/support' },
      ],
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
              Documentation
            </h1>
            <p className="text-xl md:text-2xl text-muted max-w-3xl mx-auto">
              Everything you need to build with Strive Labs. Get started, learn the API, and explore guides.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 0.985 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate('/docs/quickstart')}
                className="px-8 py-4 bg-primary text-white text-base font-semibold rounded-lg hover:bg-primary-600 transition-all duration-200 shadow-lg shadow-primary/20"
              >
                Quick Start
              </motion.button>
              <motion.button
                whileHover={{ scale: 0.985 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate('/docs/api')}
                className="px-8 py-4 bg-surface border border-neutral-800 text-white text-base font-semibold rounded-lg hover:border-neutral-700 hover:bg-neutral-900 transition-all duration-200"
              >
                API Reference
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Docs Sections */}
      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {docSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-surface border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-all duration-200"
              >
                <h3 className="text-xl font-bold text-white mb-2">{section.title}</h3>
                <p className="text-muted text-sm mb-6">{section.description}</p>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <button
                        onClick={() => navigate(link.href)}
                        className="text-sm text-muted hover:text-primary transition-colors duration-200 text-left"
                      >
                        {link.label} →
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
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
              Need help?
            </h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              Our team is here to help. Get in touch or join our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 0.985 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate('/contact')}
                className="px-8 py-4 bg-primary text-white text-base font-semibold rounded-lg hover:bg-primary-600 transition-all duration-200 shadow-lg shadow-primary/20"
              >
                Contact Support
              </motion.button>
              <motion.button
                whileHover={{ scale: 0.985 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate('/community')}
                className="px-8 py-4 bg-surface border border-neutral-800 text-white text-base font-semibold rounded-lg hover:border-neutral-700 hover:bg-neutral-900 transition-all duration-200"
              >
                Join Community
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Docs;

