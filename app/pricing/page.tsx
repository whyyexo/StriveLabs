"use client"

import { SectionHeader } from "@/components/SectionHeader"
import { PricingTable } from "@/components/PricingTable"
import { motion } from "framer-motion"
import { fadeInUp } from "@/lib/animations"

export default function PricingPage() {
  return (
    <div className="pt-32 pb-32">
      <section className="container mx-auto px-6">
        <SectionHeader
          title="Pricing"
          description="Choose the plan that fits your needs. All plans include access to our core ecosystem."
        />
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="max-w-6xl mx-auto"
        >
          <PricingTable />
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          className="max-w-4xl mx-auto mt-32"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Can I change plans later?",
                a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit cards and support annual billing with discounts.",
              },
              {
                q: "Is there a free trial?",
                a: "Yes, the Starter plan is free forever. Pro plans include a 14-day free trial.",
              },
              {
                q: "What kind of support do you offer?",
                a: "Starter includes community support. Pro includes priority email support. Enterprise includes dedicated support with SLA guarantees.",
              },
            ].map((faq, index) => (
              <motion.div
                key={faq.q}
                className="glass rounded-2xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-3">{faq.q}</h3>
                <p className="text-white/70">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  )
}

