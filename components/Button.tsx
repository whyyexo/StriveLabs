"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"

interface ButtonProps {
  children: ReactNode
  variant?: "primary" | "secondary"
  className?: string
  onClick?: () => void
  href?: string
  icon?: ReactNode
  type?: "button" | "submit" | "reset"
}

export function Button({
  children,
  variant = "primary",
  className,
  onClick,
  href,
  icon,
  type = "button",
}: ButtonProps) {
  const baseClasses = "relative px-8 py-4 rounded-full font-medium text-base transition-all duration-300 flex items-center gap-2 group"
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 text-white shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40",
    secondary: "glass border-white/20 text-white hover:bg-white/10 hover:border-white/30",
  }

  const content = (
    <>
      {variant === "primary" && (
        <motion.div
          className="absolute inset-0 rounded-full bg-white/20"
          initial={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon || (variant === "primary" && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />)}
      </span>
    </>
  )

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link
          href={href}
          className={cn(baseClasses, variantClasses[variant], className)}
        >
          {content}
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={cn(baseClasses, variantClasses[variant], className)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {content}
    </motion.button>
  )
}

