"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "./Button"
import { pricingTiers } from "@/content/pricing"
import { cn } from "@/lib/utils"

export function PricingTable() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {pricingTiers.map((tier, index) => (
        <motion.div
          key={tier.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={cn(
            "glass rounded-2xl p-8 relative",
            tier.highlighted && "ring-2 ring-purple-500/50 bg-gradient-to-b from-purple-500/10 to-transparent"
          )}
        >
          {tier.highlighted && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-sm font-semibold">
              Popular
            </div>
          )}

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-4xl font-bold text-white">{tier.price}</span>
              {tier.price !== "Custom" && (
                <span className="text-white/60">/mo</span>
              )}
            </div>
            <p className="text-white/70">{tier.description}</p>
          </div>

          <ul className="space-y-4 mb-8">
            {tier.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <span className="text-white/80">{feature}</span>
              </li>
            ))}
          </ul>

          <Button
            variant={tier.highlighted ? "primary" : "secondary"}
            className="w-full"
            href="/contact"
          >
            Get Started
          </Button>
        </motion.div>
      ))}
    </div>
  )
}

