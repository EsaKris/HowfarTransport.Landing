"use client";
import { useRouter } from "next/navigation";
import { ArrowLeft, Bike, Shield, Lock, Eye, Bell } from "lucide-react";

export default function PrivacyPolicyPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-hfc-black">
      {/* Header */}
      <header className="border-b border-hfc-border bg-hfc-black/90 backdrop-blur sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center gap-4">
          <button
            onClick={() => router.push("/")}
            className="text-hfc-muted hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-hfc-lime rounded-xl flex items-center justify-center">
              <Shield size={20} className="text-hfc-black" />
            </div>
            <div>
              <p className="font-display font-bold text-white">Privacy Policy</p>
              <p className="text-hfc-lime text-xs">Last updated: February 2025</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">
        {/* Introduction */}
        <div className="space-y-4">
          <h1 className="font-display font-black text-white text-4xl md:text-5xl">
            Privacy Policy
          </h1>
          <p className="text-hfc-muted font-body text-lg leading-relaxed">
            At HFC Transport ("we," "our," or "us"), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you use our mobile applications, website, and services.
          </p>
          <div className="bg-hfc-card border border-hfc-border rounded-xl p-6">
            <p className="text-white font-display font-bold mb-2">Quick Summary</p>
            <ul className="space-y-2 text-hfc-muted text-sm font-body">
              <li className="flex items-start gap-2">
                <span className="text-hfc-lime mt-1">•</span>
                We collect information necessary to provide safe, reliable transportation services
              </li>
              <li className="flex items-start gap-2">
                <span className="text-hfc-lime mt-1">•</span>
                Your location data is used only during active rides
              </li>
              <li className="flex items-start gap-2">
                <span className="text-hfc-lime mt-1">•</span>
                We never sell your personal information to third parties
              </li>
              <li className="flex items-start gap-2">
                <span className="text-hfc-lime mt-1">•</span>
                You have control over your data and can request deletion at any time
              </li>
            </ul>
          </div>
        </div>

        {/* Information We Collect */}
        <section className="space-y-4">
          <h2 className="font-display font-bold text-white text-2xl flex items-center gap-3">
            <Eye size={24} className="text-hfc-lime" />
            Information We Collect
          </h2>

          <div className="space-y-6">
            <div className="bg-hfc-card border border-hfc-border rounded-xl p-6 space-y-3">
              <h3 className="font-display font-bold text-white">1. Personal Information</h3>
              <ul className="space-y-2 text-hfc-muted font-body">
                <li className="flex items-start gap-2">
                  <span className="text-hfc-lime mt-1">•</span>
                  <span><strong className="text-white">Account Information:</strong> Name, phone number, email address, profile photo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-hfc-lime mt-1">•</span>
                  <span><strong className="text-white">Identity Verification:</strong> Government-issued ID, driver's license (for drivers)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-hfc-lime mt-1">•</span>
                  <span><strong className="text-white">Payment Information:</strong> Bank account details, transaction history</span>
                </li>
              </ul>
            </div>

            <div className="bg-hfc-card border border-hfc-border rounded-xl p-6 space-y-3">
              <h3 className="font-display font-bold text-white">2. Location Data</h3>
              <ul className="space-y-2 text-hfc-muted font-body">
                <li className="flex items-start gap-2">
                  <span className="text-hfc-lime mt-1">•</span>
                  <span><strong className="text-white">Precise Location:</strong> GPS coordinates during ride requests and active rides</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-hfc-lime mt-1">•</span>
                  <span><strong className="text-white">Pickup and Drop-off:</strong> Start and end points of your journeys</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-hfc-lime mt-1">•</span>
                  <span className="text-hfc-orange"><strong>Note:</strong> Location tracking stops when the ride is completed</span>
                </li>
              </ul>
            </div>

            <div className="bg-hfc-card border border-hfc-border rounded-xl p-6 space-y-3">
              <h3 className="font-display font-bold text-white">3. Usage Data</h3>
              <ul className="space-y-2 text-hfc-muted font-body">
                <li className="flex items-start gap-2">
                  <span className="text-hfc-lime mt-1">•</span>
                  <span>Device information, IP address, browser type</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-hfc-lime mt-1">•</span>
                  <span>App interactions, features used, pages visited</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-hfc-lime mt-1">•</span>
                  <span>Ride history, ratings, and reviews</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* How We Use Your Information */}
        <section className="space-y-4">
          <h2 className="font-display font-bold text-white text-2xl flex items-center gap-3">
            <Lock size={24} className="text-hfc-lime" />
            How We Use Your Information
          </h2>

          <div className="bg-hfc-card border border-hfc-border rounded-xl p-6 space-y-4">
            <div className="space-y-2">
              <h3 className="font-display font-bold text-white">Service Delivery</h3>
              <ul className="space-y-2 text-hfc-muted font-body">
                <li className="flex items-start gap-2">
                  <span className="text-hfc-lime mt-1">✓</span>
                  <span>Match riders with nearby drivers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-hfc-lime mt-1">✓</span>
                  <span>Process payments and calculate fares</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-hfc-lime mt-1">✓</span>
                  <span>Provide customer support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-hfc-lime mt-1">✓</span>
                  <span>Send ride notifications and updates</span>
                </li>
              </ul>
            </div>

            <div className="border-t border-hfc-border pt-4 space-y-2">
              <h3 className="font-display font-bold text-white">Safety and Security</h3>
              <ul className="space-y-2 text-hfc-muted font-body">
                <li className="flex items-start gap-2">
                  <span className="text-hfc-lime mt-1">✓</span>
                  <span>Verify driver identities and backgrounds</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-hfc-lime mt-1">✓</span>
                  <span>Detect and prevent fraud</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-hfc-lime mt-1">✓</span>
                  <span>Respond to safety incidents and emergencies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-hfc-lime mt-1">✓</span>
                  <span>Maintain platform security</span>
                </li>
              </ul>
            </div>

            <div className="border-t border-hfc-border pt-4 space-y-2">
              <h3 className="font-display font-bold text-white">Improvement and Analysis</h3>
              <ul className="space-y-2 text-hfc-muted font-body">
                <li className="flex items-start gap-2">
                  <span className="text-hfc-lime mt-1">✓</span>
                  <span>Analyze usage patterns to improve our services</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-hfc-lime mt-1">✓</span>
                  <span>Conduct research and development</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-hfc-lime mt-1">✓</span>
                  <span>Personalize your experience</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Data Sharing */}
        <section className="space-y-4">
          <h2 className="font-display font-bold text-white text-2xl">
            How We Share Your Information
          </h2>

          <div className="bg-hfc-card border border-hfc-border rounded-xl p-6 space-y-4 text-hfc-muted font-body">
            <p>
              We <strong className="text-hfc-orange">never sell</strong> your personal information. We only share data in these limited circumstances:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-hfc-lime mt-1">•</span>
                <span><strong className="text-white">With Drivers:</strong> Your name, pickup location, and phone number (last 4 digits) are shared to facilitate the ride</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-hfc-lime mt-1">•</span>
                <span><strong className="text-white">Service Providers:</strong> Payment processors, SMS providers, cloud hosting (under strict contracts)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-hfc-lime mt-1">•</span>
                <span><strong className="text-white">Legal Obligations:</strong> When required by law or to protect rights and safety</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-hfc-lime mt-1">•</span>
                <span><strong className="text-white">Business Transfers:</strong> In case of merger or acquisition (you'll be notified)</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Your Rights */}
        <section className="space-y-4">
          <h2 className="font-display font-bold text-white text-2xl flex items-center gap-3">
            <Shield size={24} className="text-hfc-lime" />
            Your Rights and Choices
          </h2>

          <div className="bg-gradient-to-br from-hfc-lime/5 to-hfc-orange/5 border border-hfc-border rounded-xl p-6 space-y-4">
            <p className="text-white font-display font-bold">You have the right to:</p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: "Access", desc: "Request a copy of your data" },
                { title: "Correction", desc: "Update incorrect information" },
                { title: "Deletion", desc: "Request account and data deletion" },
                { title: "Portability", desc: "Download your data" },
                { title: "Opt-out", desc: "Unsubscribe from marketing emails" },
                { title: "Location Control", desc: "Disable location services (when not riding)" },
              ].map((right) => (
                <div key={right.title} className="flex items-start gap-2">
                  <span className="text-hfc-lime mt-1">✓</span>
                  <div>
                    <p className="text-white font-medium">{right.title}</p>
                    <p className="text-hfc-muted text-sm">{right.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-hfc-muted text-sm">
              To exercise these rights, contact us at <a href="mailto:privacy@howfar.ng" className="text-hfc-lime hover:underline">privacy@howfar.ng</a>
            </p>
          </div>
        </section>

        {/* Data Security */}
        <section className="space-y-4">
          <h2 className="font-display font-bold text-white text-2xl">Data Security</h2>
          <div className="bg-hfc-card border border-hfc-border rounded-xl p-6 space-y-3 text-hfc-muted font-body">
            <p>
              We implement industry-standard security measures to protect your information:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-hfc-lime mt-1">•</span>
                <span>End-to-end encryption for sensitive data</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-hfc-lime mt-1">•</span>
                <span>Secure servers with regular security audits</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-hfc-lime mt-1">•</span>
                <span>Access controls and authentication protocols</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-hfc-lime mt-1">•</span>
                <span>Regular employee training on data protection</span>
              </li>
            </ul>
            <p className="text-sm text-hfc-orange border-t border-hfc-border pt-3 mt-3">
              While we use reasonable efforts to protect your data, no system is 100% secure. Please use strong passwords and keep your account credentials confidential.
            </p>
          </div>
        </section>

        {/* Data Retention */}
        <section className="space-y-4">
          <h2 className="font-display font-bold text-white text-2xl">Data Retention</h2>
          <div className="bg-hfc-card border border-hfc-border rounded-xl p-6 text-hfc-muted font-body space-y-3">
            <p>We retain your information for as long as necessary to:</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-hfc-lime mt-1">•</span>
                <span>Provide our services to you</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-hfc-lime mt-1">•</span>
                <span>Comply with legal obligations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-hfc-lime mt-1">•</span>
                <span>Resolve disputes and enforce agreements</span>
              </li>
            </ul>
            <p>
              After account deletion, we may retain anonymized data for analytics and legal compliance.
            </p>
          </div>
        </section>

        {/* Children's Privacy */}
        <section className="space-y-4">
          <h2 className="font-display font-bold text-white text-2xl">Children's Privacy</h2>
          <div className="bg-hfc-card border border-hfc-border rounded-xl p-6 text-hfc-muted font-body">
            <p>
              Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately at <a href="mailto:privacy@howfar.ng" className="text-hfc-lime hover:underline">privacy@howfar.ng</a>.
            </p>
          </div>
        </section>

        {/* Updates to Policy */}
        <section className="space-y-4">
          <h2 className="font-display font-bold text-white text-2xl flex items-center gap-3">
            <Bell size={24} className="text-hfc-lime" />
            Updates to This Policy
          </h2>
          <div className="bg-hfc-card border border-hfc-border rounded-xl p-6 text-hfc-muted font-body space-y-3">
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-hfc-lime mt-1">•</span>
                <span>Posting the updated policy on our website and apps</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-hfc-lime mt-1">•</span>
                <span>Sending you an email notification</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-hfc-lime mt-1">•</span>
                <span>Displaying an in-app notification</span>
              </li>
            </ul>
            <p>
              Continued use of our services after changes constitutes acceptance of the updated policy.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section className="space-y-4">
          <h2 className="font-display font-bold text-white text-2xl">Contact Us</h2>
          <div className="bg-gradient-to-br from-hfc-lime/5 to-hfc-orange/5 border border-hfc-border rounded-xl p-6 space-y-4">
            <p className="text-hfc-muted font-body">
              If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact us:
            </p>
            <div className="space-y-2 text-hfc-muted font-body">
              <p className="flex items-start gap-2">
                <span className="text-hfc-lime">📧</span>
                <span><strong className="text-white">Email:</strong> <a href="mailto:privacy@howfar.ng" className="text-hfc-lime hover:underline">privacy@howfar.ng</a></span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-hfc-lime">📞</span>
                <span><strong className="text-white">Phone:</strong> +234 801 234 5678</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-hfc-lime">📍</span>
                <span><strong className="text-white">Address:</strong> HFC Transport, Makurdi, Benue State, Nigeria</span>
              </p>
            </div>
            <p className="text-hfc-muted text-sm">
              We aim to respond to all privacy-related inquiries within 14 business days.
            </p>
          </div>
        </section>

        {/* Last Updated */}
        <div className="text-center pt-8 pb-4">
          <p className="text-hfc-muted text-sm font-body">
            This Privacy Policy was last updated on <span className="text-white">February 27, 2025</span>
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-hfc-border py-8">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-4">
          <div className="flex flex-wrap justify-center gap-6 text-hfc-muted text-sm">
            <button onClick={() => router.push("/about")} className="hover:text-white transition-colors">About</button>
            <button onClick={() => router.push("/careers")} className="hover:text-white transition-colors">Careers</button>
            <button onClick={() => router.push("/terms")} className="hover:text-white transition-colors">Terms of Use</button>
            <button onClick={() => router.push("/")} className="hover:text-white transition-colors">Home</button>
          </div>
          <p className="text-hfc-muted text-sm">&copy; 2025 HFC Transport. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
