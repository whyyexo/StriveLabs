"use client"

import { Hero } from "@/components/Hero"
import { ValueCard } from "@/components/ValueCard"
import { Tilt3DBlock } from "@/components/Tilt3DBlock"
import { FeatureSplit } from "@/components/FeatureSplit"
import { ProductCard } from "@/components/ProductCard"
import { SectionHeader } from "@/components/SectionHeader"
import { PricingTable } from "@/components/PricingTable"
import { Button } from "@/components/Button"
import { products } from "@/content/products"
import { LineChart, Line, BarChart, Bar, Users, Zap } from "lucide-react"
import { motion } from "framer-motion"

const valueProps = [
  {
    title: "AI-Native by Design",
    description:
      "We engineer products that leverage intelligence at the core, not as an afterthought.",
  },
  {
    title: "Fast Iteration. Faster Innovation.",
    description:
      "We launch, test and refine products at startup speed, powered by automation.",
  },
  {
    title: "Deeply Integrated Ecosystem",
    description:
      "All StriveLabs products share a unified infrastructure designed for performance.",
  },
  {
    title: "Built for Scale",
    description:
      "Our architecture allows rapid expansion across new platforms and markets.",
  },
]

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO, TechCorp",
    content:
      "StriveLabs has transformed how we think about AI integration. Their ecosystem approach is revolutionary.",
  },
  {
    name: "Marcus Rodriguez",
    role: "Founder, StartupXYZ",
    content:
      "The speed at which we can iterate with StriveLabs products is unmatched. It's like having a superpower.",
  },
  {
    name: "Emily Watson",
    role: "Product Lead, Innovation Labs",
    content:
      "Working with StriveLabs feels like working with the future. Their vision is clear and execution is flawless.",
  },
]

export default function Home() {
  return (
    <>
      <Hero />

      {/* Value Propositions */}
      <section className="container mx-auto px-6 py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {valueProps.map((prop, index) => (
            <ValueCard
              key={prop.title}
              title={prop.title}
              description={prop.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </section>

      {/* 3D UI Blocks */}
      <section className="container mx-auto px-6 py-32">
        <SectionHeader
          title="The Future Ecosystem"
          description="Interactive components showcasing our integrated platform"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Strive Engine Block */}
          <Tilt3DBlock title="Strive Engine" delay={0}>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-white/60">Requests Today</span>
                <span className="text-2xl font-bold text-white">2.4M</span>
              </div>
              <div className="h-24 bg-white/5 rounded-lg flex items-end gap-2 p-2">
                {[60, 80, 45, 90, 70, 85, 95].map((height, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-gradient-to-t from-purple-500 to-blue-500 rounded"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
              <div className="space-y-2">
                <div className="text-xs text-white/40 font-mono">
                  [AI Request] Model: strive-pro | Latency: 120ms
                </div>
                <div className="text-xs text-white/40 font-mono">
                  [AI Request] Model: strive-pro | Latency: 98ms
                </div>
              </div>
            </div>
          </Tilt3DBlock>

          {/* Neuron SDK Block */}
          <Tilt3DBlock title="Neuron SDK" delay={0.1}>
            <div className="bg-black/40 rounded-lg p-4 font-mono text-sm">
              <div className="text-purple-400 mb-2">const ai = await</div>
              <div className="text-blue-400 mb-2">  neuron.generate(</div>
              <div className="text-white ml-4 mb-2">
                model: <span className="text-cyan-400">"strive-pro"</span>,
              </div>
              <div className="text-white ml-4 mb-2">
                input: <span className="text-cyan-400">"Build me a landing page."</span>
              </div>
              <div className="text-blue-400">)</div>
            </div>
          </Tilt3DBlock>

          {/* Automation Core Block */}
          <Tilt3DBlock title="Automation Core" delay={0.2}>
            <div className="space-y-4">
              <div className="flex items-center justify-between glass rounded-lg p-3">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm text-white">Scheduled Tasks</span>
                </div>
                <span className="text-sm font-semibold text-white">142</span>
              </div>
              <div className="flex items-center justify-between glass rounded-lg p-3">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-blue-400" />
                  <span className="text-sm text-white">Active Automations</span>
                </div>
                <span className="text-sm font-semibold text-white">89</span>
              </div>
              <div className="glass rounded-lg p-3">
                <div className="text-xs text-white/60 mb-1">Throughput</div>
                <div className="text-2xl font-bold text-white">12.4K/min</div>
              </div>
            </div>
          </Tilt3DBlock>

          {/* Identity & Auth Block */}
          <Tilt3DBlock title="Identity & Auth" delay={0.3}>
            <div className="space-y-3">
              <div className="glass rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-white">Teams</span>
                  <span className="text-xs text-white/60">3 active</span>
                </div>
                <div className="space-y-2">
                  {["Engineering", "Design", "Product"].map((team) => (
                    <div
                      key={team}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="text-white/80">{team}</span>
                      <span className="text-white/40">Admin</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="glass rounded-lg p-3">
                <div className="text-xs text-white/60 mb-1">Permissions</div>
                <div className="text-sm text-white">Full Access</div>
              </div>
            </div>
          </Tilt3DBlock>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-32">
        <FeatureSplit
          title="Unified Infrastructure"
          description="Every StriveLabs product is powered by a shared infrastructure designed to reduce complexity and maximize speed."
          visual={
            <div className="relative h-64 glass rounded-2xl p-8">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-3 gap-4 w-full">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <motion.div
                      key={i}
                      className="h-20 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg border border-white/10"
                      animate={{
                        y: [0, -10, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          }
        />

        <FeatureSplit
          title="The Strive AI Foundation"
          description="A collection of models, agents and workflow engines optimized for real-world automation."
          reverse
          visual={
            <div className="relative h-64 glass rounded-2xl p-8">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                    const radius = 80
                    const x = Math.cos((angle * Math.PI) / 180) * radius
                    const y = Math.sin((angle * Math.PI) / 180) * radius
                    return (
                      <motion.div
                        key={i}
                        className="absolute w-4 h-4 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"
                        style={{
                          left: `calc(50% + ${x}px)`,
                          top: `calc(50% + ${y}px)`,
                        }}
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3,
                        }}
                      />
                    )
                  })}
                </div>
              </div>
            </div>
          }
        />

        <FeatureSplit
          title="Developer-First Tooling"
          description="We provide APIs, SDKs and automation layers used across all our internal products."
          visual={
            <div className="relative h-64 glass rounded-2xl p-8 overflow-hidden">
              <div className="absolute inset-0 p-4 space-y-2">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    className="h-8 bg-white/5 rounded border border-white/10"
                    animate={{
                      x: [0, 20, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                  />
                ))}
              </div>
            </div>
          }
        />
      </section>

      {/* Product Highlight */}
      <section className="container mx-auto px-6 py-32">
        <SectionHeader
          title="The Ecosystem"
          description="A growing suite of intelligent tools built under StriveLabs"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.slice(0, 6).map((product, index) => (
            <ProductCard
              key={product.id}
              name={product.name}
              description={product.description}
              href={`/products#${product.id}`}
              delay={index * 0.1}
            />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-6 py-32">
        <SectionHeader title="What People Say" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="glass rounded-2xl p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <p className="text-white/80 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div>
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-sm text-white/60">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="container mx-auto px-6 py-32">
        <SectionHeader
          title="Flexible pricing built for teams"
          description="Choose the plan that fits your needs"
        />
        <div className="max-w-4xl mx-auto mb-12">
          <PricingTable />
        </div>
        <div className="text-center">
          <Button href="/pricing" variant="secondary">
            View Complete Pricing
          </Button>
        </div>
      </section>
    </>
  )
}

