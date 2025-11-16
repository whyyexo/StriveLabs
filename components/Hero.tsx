"use client"

import { motion } from "framer-motion"
import { Button } from "./Button"
import { GradientBlob } from "./GradientBlob"
import { fadeInUp, staggerContainer } from "@/lib/animations"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Blobs */}
      <GradientBlob className="top-20 left-10 w-96 h-96" color="purple" />
      <GradientBlob className="bottom-20 right-10 w-96 h-96" color="blue" />
      <GradientBlob className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]" color="cyan" />

      {/* Noise Texture */}
      <div className="absolute inset-0 noise opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-5xl mx-auto text-center"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            We Build the{" "}
            <span className="gradient-text">AI Companies</span> of Tomorrow
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            StriveLabs is a next-generation AI holding company. We design, build
            and launch products that push the boundaries of automation,
            intelligence and creativity.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button href="/products">Explore Our Products</Button>
            <Button variant="secondary" href="/about">
              Join the Ecosystem
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

