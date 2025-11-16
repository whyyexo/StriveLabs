"use client"

import { SectionHeader } from "@/components/SectionHeader"
import { Timeline } from "@/components/Timeline"
import { motion } from "framer-motion"
import { fadeInUp } from "@/lib/animations"

const timelineItems = [
  {
    year: "2024",
    title: "Foundation",
    description:
      "StriveLabs was founded with a vision to build the next generation of AI companies. We launched our first products and established our core infrastructure.",
  },
  {
    year: "2025",
    title: "Expansion",
    description:
      "We expanded our ecosystem with multiple products, built our unified infrastructure, and established partnerships with leading technology companies.",
  },
  {
    year: "2026",
    title: "Scale",
    description:
      "Our platform reaches new heights with advanced AI capabilities, serving thousands of teams and powering the next wave of intelligent applications.",
  },
]

const founders = [
  {
    name: "Alex Morgan",
    role: "Co-Founder & CEO",
    bio: "Former AI researcher at leading tech companies. Passionate about building products that push the boundaries of what's possible.",
  },
  {
    name: "Jordan Kim",
    role: "Co-Founder & CTO",
    bio: "Architect of large-scale AI systems. Believes in the power of unified infrastructure to accelerate innovation.",
  },
]

export default function AboutPage() {
  return (
    <div className="pt-32 pb-32">
      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-32">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-8">
            Built to Push{" "}
            <span className="gradient-text">What's Possible</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 leading-relaxed">
            StriveLabs exists to build the next generation of AI companies. Our
            mission is to create an ecosystem of products designed to accelerate
            human capability, automate complexity, and expand what people can
            achieve.
          </p>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="container mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            className="glass rounded-2xl p-10"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-white/80 leading-relaxed text-lg">
              To democratize access to advanced AI capabilities by building
              products that are powerful, intuitive, and accessible. We believe
              that AI should augment human potential, not replace it.
            </p>
          </motion.div>

          <motion.div
            className="glass rounded-2xl p-10"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-white/80 leading-relaxed text-lg">
              A future where AI-powered tools are seamlessly integrated into
              every workflow, enabling people to achieve more than ever before.
              We envision a world where complexity is automated and creativity
              is amplified.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="container mx-auto px-6 mb-32">
        <SectionHeader title="Our Journey" />
        <Timeline items={timelineItems} />
      </section>

      {/* Founders */}
      <section className="container mx-auto px-6 mb-32">
        <SectionHeader title="The Founders" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              className="glass rounded-2xl p-8"
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-bold mb-2">{founder.name}</h3>
              <p className="text-purple-400 mb-4">{founder.role}</p>
              <p className="text-white/70 leading-relaxed">{founder.bio}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Ecosystem Philosophy */}
      <section className="container mx-auto px-6">
        <motion.div
          className="max-w-4xl mx-auto glass rounded-2xl p-12"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">Ecosystem Philosophy</h2>
          <div className="space-y-6 text-white/80 leading-relaxed text-lg">
            <p>
              At StriveLabs, we don't just build individual products—we build an
              ecosystem. Every product we create is designed to work seamlessly
              with others, sharing infrastructure, data, and intelligence.
            </p>
            <p>
              This unified approach means that when you use one StriveLabs
              product, you're not just getting that product—you're gaining
              access to an entire platform of interconnected tools and
              capabilities.
            </p>
            <p>
              Our ecosystem philosophy extends beyond our own products. We
              believe in open standards, developer-friendly APIs, and
              integrations that make it easy to connect StriveLabs products with
              the tools you already use.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

