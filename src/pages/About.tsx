import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const About: React.FC = () => {
  const navigate = useNavigate();

  const values = [
    {
      title: 'Build for developers',
      description:
        'We understand the pain points developers face daily. Our tools are built by developers, for developers.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
    },
    {
      title: 'Ship fast, ship smart',
      description:
        'Speed matters, but quality matters more. We help teams move fast without compromising on quality.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      title: 'Open by default',
      description:
        'Transparency is at our core. Open source where possible, clear pricing, and honest communication.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
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
              About Strive Labs
            </h1>
            <p className="text-xl md:text-2xl text-muted max-w-3xl mx-auto">
              We're building the tools that help modern teams ship faster and smarter.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-lg text-muted leading-relaxed"
          >
            <p>
              Strive Labs was founded with a simple mission: make it easier for teams to build
              great products. We believe that great tools should be powerful, intuitive, and
              accessible to everyone.
            </p>
            <p>
              Today, thousands of teams use Strive Labs to automate workflows, integrate tools,
              and accelerate development. We're proud to be part of their journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-surface border-t border-neutral-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Values</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-background border border-neutral-800 rounded-xl p-8 hover:border-neutral-700 transition-all duration-200"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-muted leading-relaxed">{value.description}</p>
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
              Join us on our mission
            </h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              We're always looking for talented people to join our team.
            </p>
            <motion.button
              whileHover={{ scale: 0.985 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate('/careers')}
              className="px-8 py-4 bg-primary text-white text-base font-semibold rounded-lg hover:bg-primary-600 transition-all duration-200 shadow-lg shadow-primary/20"
            >
              View Careers
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;

