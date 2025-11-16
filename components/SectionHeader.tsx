"use client"

import { motion } from "framer-motion"
import { fadeInUp } from "@/lib/animations"

interface SectionHeaderProps {
  title: string
  description?: string
  className?: string
}

export function SectionHeader({
  title,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      className={`text-center mb-16 ${className}`}
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <h2 className="text-5xl md:text-6xl font-bold mb-6">{title}</h2>
      {description && (
        <p className="text-xl text-white/70 max-w-3xl mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  )
}

