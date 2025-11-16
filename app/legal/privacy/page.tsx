"use client"

import { motion } from "framer-motion"
import { fadeInUp } from "@/lib/animations"

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-32">
      <section className="container mx-auto px-6 max-w-4xl">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-8">Privacy Policy</h1>
          <p className="text-white/60 mb-12">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="space-y-8 text-white/80 leading-relaxed">
            <section>
              <h2 className="text-3xl font-bold mb-4 text-white">1. Introduction</h2>
              <p>
                StriveLabs ("we," "our," or "us") is committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, disclose, and safeguard
                your information when you use our website and services.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-white">2. Information We Collect</h2>
              <p className="mb-4">We collect information that you provide directly to us, including:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Name and contact information (email address, phone number)</li>
                <li>Account credentials and profile information</li>
                <li>Payment and billing information</li>
                <li>Communications with us</li>
                <li>Usage data and preferences</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-white">3. How We Use Your Information</h2>
              <p className="mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Monitor and analyze trends and usage</li>
                <li>Detect, prevent, and address technical issues</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-white">4. Information Sharing</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties.
                We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>With your consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and safety</li>
                <li>With service providers who assist us in operating our services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-white">5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect
                your personal information. However, no method of transmission over the
                Internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-white">6. Your Rights</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access and receive a copy of your personal data</li>
                <li>Rectify inaccurate personal data</li>
                <li>Request deletion of your personal data</li>
                <li>Object to processing of your personal data</li>
                <li>Request restriction of processing</li>
                <li>Data portability</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-white">7. Cookies and Tracking</h2>
              <p>
                We use cookies and similar tracking technologies to track activity on our
                website and hold certain information. You can instruct your browser to
                refuse all cookies or to indicate when a cookie is being sent.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-white">8. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you
                of any changes by posting the new Privacy Policy on this page and updating
                the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-white">9. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="mt-4">
                Email: privacy@strivelabs.com<br />
                Address: 123 Innovation Drive, San Francisco, CA 94105
              </p>
            </section>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

