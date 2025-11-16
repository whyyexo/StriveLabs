"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"
import { fadeInUp } from "@/lib/animations"

interface FeatureSplitProps {
  title: string
  description: string
  visual: ReactNode
  reverse?: boolean
}

export function FeatureSplit({
  title,
  description,
  visual,
  reverse = false,
}: FeatureSplitProps) {
  return (
    <div className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-12 py-20`}>
      <motion.div
        className="flex-1"
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">{title}</h2>
        <p className="text-xl text-white/70 leading-relaxed">{description}</p>
      </motion.div>

      <motion.div
        className="flex-1"
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {visual}
      </motion.div>
    </div>
  )
}

