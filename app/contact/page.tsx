"use client"

import { ContactForm } from "@/components/ContactForm"
import { SectionHeader } from "@/components/SectionHeader"
import { motion } from "framer-motion"
import { fadeInUp } from "@/lib/animations"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="pt-32 pb-32">
      <section className="container mx-auto px-6">
        <SectionHeader
          title="Let's build something great"
          description="Get in touch with our team to discuss your project or learn more about StriveLabs"
        />

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <div className="glass rounded-2xl p-6">
              <Mail className="w-6 h-6 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-white/70">hello@strivelabs.com</p>
            </div>

            <div className="glass rounded-2xl p-6">
              <Phone className="w-6 h-6 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-white/70">+1 (555) 123-4567</p>
            </div>

            <div className="glass rounded-2xl p-6">
              <MapPin className="w-6 h-6 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Office</h3>
              <p className="text-white/70">
                123 Innovation Drive
                <br />
                San Francisco, CA 94105
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.1 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </div>
  )
}

