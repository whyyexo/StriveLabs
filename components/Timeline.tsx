"use client"

import { motion } from "framer-motion"
import { fadeInUp } from "@/lib/animations"

interface TimelineItem {
  year: string
  title: string
  description: string
}

interface TimelineProps {
  items: TimelineItem[]
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500" />

      <div className="space-y-12">
        {items.map((item, index) => (
          <motion.div
            key={item.year}
            className="relative pl-20"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            {/* Timeline Dot */}
            <div className="absolute left-6 top-2 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 ring-4 ring-background" />

            <div className="glass rounded-2xl p-8">
              <div className="text-sm font-semibold text-purple-400 mb-2">
                {item.year}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-white/70 leading-relaxed">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

