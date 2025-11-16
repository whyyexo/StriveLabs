"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface ProductCardProps {
  name: string
  description: string
  href?: string
  delay?: number
}

export function ProductCard({
  name,
  description,
  href = "#",
  delay = 0,
}: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      <Link href={href}>
        <div className="glass rounded-2xl p-8 h-full group cursor-pointer">
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-2xl font-bold text-white">{name}</h3>
            <ArrowRight className="w-5 h-5 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all" />
          </div>
          <p className="text-white/70 leading-relaxed">{description}</p>
        </div>
      </Link>
    </motion.div>
  )
}

