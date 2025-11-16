"use client"

import { motion } from "framer-motion"
import { fadeInUp } from "@/lib/animations"

export default function TermsPage() {
  return (
    <div className="pt-32 pb-32">
      <section className="container mx-auto px-6 max-w-4xl">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-8">Terms of Service</h1>
          <p className="text-white/60 mb-12">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="space-y-8 text-white/80 leading-relaxed">
            <section>
              <h2 className="text-3xl font-bold mb-4 text-white">1. Agreement to Terms</h2>
              <p>
                By accessing or using StriveLabs services, you agree to be bound by these
                Terms of Service and all applicable laws and regulations. If you do not
                agree with any of these terms, you are prohibited from using our services.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-white">2. Use License</h2>
              <p className="mb-4">
                Permission is granted to temporarily access StriveLabs services for personal,
                non-commercial transitory viewing only. This is the grant of a license, not
                a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose</li>
                <li>Attempt to reverse engineer any software</li>
                <li>Remove any copyright or proprietary notations</li>
                <li>Transfer the materials to another person</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-white">3. User Accounts</h2>
              <p className="mb-4">
                When you create an account with us, you must provide accurate, complete,
                and current information. You are responsible for:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Maintaining the security of your account and password</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized use</li>
                <li>Complying with all applicable laws and regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-white">4. Acceptable Use</h2>
              <p className="mb-4">You agree not to use our services to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Violate any laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Transmit harmful or malicious code</li>
                <li>Interfere with or disrupt the services</li>
                <li>Attempt to gain unauthorized access</li>
                <li>Collect or harvest user information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-white">5. Payment Terms</h2>
              <p className="mb-4">
                For paid services, you agree to pay all fees associated with your account.
                Fees are billed in advance on a monthly or annual basis. You are responsible
                for:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Providing accurate billing information</li>
                <li>Maintaining current payment methods</li>
                <li>Paying all fees when due</li>
                <li>Understanding that fees are non-refundable except as required by law</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-white">6. Intellectual Property</h2>
              <p>
                All content, features, and functionality of StriveLabs services are owned by
                StriveLabs and are protected by international copyright, trademark, patent,
                trade secret, and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-white">7. Disclaimer</h2>
              <p>
                The materials on StriveLabs services are provided on an 'as is' basis.
                StriveLabs makes no warranties, expressed or implied, and hereby disclaims
                and negates all other warranties including, without limitation, implied
                warranties or conditions of merchantability, fitness for a particular purpose,
                or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-white">8. Limitations</h2>
              <p>
                In no event shall StriveLabs or its suppliers be liable for any damages
                (including, without limitation, damages for loss of data or profit, or due
                to business interruption) arising out of the use or inability to use the
                materials on StriveLabs services, even if StriveLabs or a StriveLabs
                authorized representative has been notified orally or in writing of the
                possibility of such damage.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-white">9. Termination</h2>
              <p>
                We may terminate or suspend your account and access to our services immediately,
                without prior notice or liability, for any reason whatsoever, including
                without limitation if you breach the Terms. Upon termination, your right to
                use the services will immediately cease.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-white">10. Governing Law</h2>
              <p>
                These Terms shall be governed and construed in accordance with the laws of
                the State of California, United States, without regard to its conflict of
                law provisions. Our failure to enforce any right or provision of these Terms
                will not be considered a waiver of those rights.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-white">11. Changes to Terms</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these
                Terms at any time. If a revision is material, we will provide at least 30
                days notice prior to any new terms taking effect.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-white">12. Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <p className="mt-4">
                Email: legal@strivelabs.com<br />
                Address: 123 Innovation Drive, San Francisco, CA 94105
              </p>
            </section>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

