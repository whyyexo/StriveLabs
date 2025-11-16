"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface Tilt3DBlockProps {
  title: string
  children: ReactNode
  className?: string
  delay?: number
}

export function Tilt3DBlock({
  title,
  children,
  className,
  delay = 0,
}: Tilt3DBlockProps) {
  return (
    <motion.div
      className={cn("glass rounded-2xl p-6", className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{
        rotateY: 5,
        rotateX: -5,
        y: -8,
        transition: { duration: 0.3 },
      }}
      style={{ transformStyle: "preserve-3d" }}
    >
      <h4 className="text-lg font-semibold text-white mb-4">{title}</h4>
      {children}
    </motion.div>
  )
}

