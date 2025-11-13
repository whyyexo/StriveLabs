import React from 'react';
import { motion } from 'framer-motion';

const Team: React.FC = () => {
  const team = [
    {
      name: 'Alex Johnson',
      role: 'CEO & Co-founder',
      bio: 'Former engineer at Google. Passionate about building tools that help teams ship faster.',
      image: null,
    },
    {
      name: 'Sarah Chen',
      role: 'CTO & Co-founder',
      bio: 'Ex-Stripe. Led infrastructure teams building scalable systems used by millions.',
      image: null,
    },
    {
      name: 'Michael Park',
      role: 'Head of Design',
      bio: 'Designer at heart. Previously at Linear and Vercel. Focused on creating beautiful, intuitive experiences.',
      image: null,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Engineering',
      bio: 'Full-stack engineer with 10+ years of experience. Led teams at startups and scale-ups.',
      image: null,
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
              Meet the Team
            </h1>
            <p className="text-xl md:text-2xl text-muted max-w-3xl mx-auto">
              We're a small team of builders, designers, and engineers passionate about creating great tools.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-surface border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-all duration-200"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">
                    {member.name.split(' ').map((n) => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white text-center mb-1">{member.name}</h3>
                <p className="text-primary text-sm text-center mb-4">{member.role}</p>
                <p className="text-muted text-sm text-center leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
