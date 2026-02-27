"use client";
import { useRouter } from "next/navigation";
import { ArrowLeft, Bike, FileText, AlertCircle, CheckCircle, XCircle } from "lucide-react";

export default function TermsPage() {
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
              <FileText size={20} className="text-hfc-black" />
            </div>
            <div>
              <p className="font-display font-bold text-white">Terms of Use</p>
              <p className="text-hfc-lime text-xs">Last updated: February 2025</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">
        {/* Introduction */}
        <div className="space-y-4">
          <h1 className="font-display font-black text-white text-4xl md:text-5xl">
            Terms of Use
          </h1>
          <p className="text-hfc-muted font-body text-lg leading-relaxed">
            Welcome to HFC Transport. These Terms of Use ("Terms") govern your access to and use of our platform, mobile applications, website, and services. By using HFC Transport, you agree to be bound by these Terms.
          </p>
          <div className="bg-hfc-card border border-hfc-border rounded-xl p-6">
            <p className="text-white font-display font-bold mb-2 flex items-center gap-2">
              <AlertCircle size={18} className="text-hfc-orange" />
              Important Notice
            </p>
            <p className="text-hfc-muted text-sm font-body">
              Please read these Terms carefully before using our services. If you do not agree with any part of these Terms, you may not use our platform. By creating an account or using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms.
            </p>
          </div>
        </div>

        {/* Acceptance */}
        <section className="space-y-4">
          <h2 className="font-display font-bold text-white text-2xl">1. Acceptance of Terms</h2>
          <div className="bg-hfc-card border border-hfc-border rounded-xl p-6 text-hfc-muted font-body space-y-3">
            <p>
              By accessing or using HFC Transport's services, you agree to:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-hfc-lime mt-1 flex-shrink-0" />
                <span>Comply with these Terms and all applicable laws and regulations</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-hfc-lime mt-1 flex-shrink-0" />
                <span>Provide accurate and complete information during registration</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-hfc-lime mt-1 flex-shrink-0" />
                <span>Be at least 18 years of age</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-hfc-lime mt-1 flex-shrink-0" />
                <span>Have the legal capacity to enter into binding contracts</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Services Description */}
        <section className="space-y-4">
          <h2 className="font-display font-bold text-white text-2xl">2. Services Description</h2>
          <div className="bg-hfc-card border border-hfc-border rounded-xl p-6 space-y-4">
            <p className="text-hfc-muted font-body">
              HFC Transport operates a technology platform that connects:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-hfc-black border border-hfc-border rounded-lg p-4 space-y-2">
                <p className="font-display font-bold text-white">Riders</p>
                <p className="text-hfc-muted text-sm">Individuals seeking transportation services</p>
              </div>
              <div className="bg-hfc-black border border-hfc-border rounded-lg p-4 space-y-2">
                <p className="font-display font-bold text-white">Drivers</p>
                <p className="text-hfc-muted text-sm">Licensed operators providing ride services</p>
              </div>
              <div className="bg-hfc-black border border-hfc-border rounded-lg p-4 space-y-2">
                <p className="font-display font-bold text-white">Bike Owners</p>
                <p className="text-hfc-muted text-sm">Vehicle owners earning from their motorcycles</p>
              </div>
            </div>
            <p className="text-hfc-muted font-body text-sm border-t border-hfc-border pt-4">
              <strong className="text-white">Important:</strong> HFC Transport is a technology platform only. We do not provide transportation services directly. All rides are performed by independent third-party drivers.
            </p>
          </div>
        </section>

        {/* User Accounts */}
        <section className="space-y-4">
          <h2 className="font-display font-bold text-white text-2xl">3. User Accounts</h2>
          <div className="bg-hfc-card border border-hfc-border rounded-xl p-6 space-y-4 text-hfc-muted font-body">
            <div>
              <h3 className="text-white font-display font-bold mb-2">Account Security</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-hfc-lime mt-1">•</span>
                  <span>You are responsible for maintaining the confidentiality of your account credentials</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-hfc-lime mt-1">•</span>
                  <span>You must notify us immediately of any unauthorized access to your account</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-hfc-lime mt-1">•</span>
                  <span>You are responsible for all activities that occur under your account</span>
                </li>
              </ul>
            </div>
            <div className="border-t border-hfc-border pt-4">
              <h3 className="text-white font-display font-bold mb-2">Account Termination</h3>
              <p>
                We reserve the right to suspend or terminate your account if you violate these Terms or engage in fraudulent, abusive, or illegal activity.
              </p>
            </div>
          </div>
        </section>

        {/* User Responsibilities */}
        <section className="space-y-4">
          <h2 className="font-display font-bold text-white text-2xl">4. User Responsibilities</h2>
          
          <div className="space-y-4">
            {/* Riders */}
            <div className="bg-hfc-card border border-hfc-border rounded-xl p-6 space-y-3">
              <h3 className="text-white font-display font-bold">For Riders</h3>
              <div className="grid md:grid-cols-2 gap-4 text-hfc-muted text-sm font-body">
                <div>
                  <p className="text-hfc-green mb-2 flex items-center gap-2">
                    <CheckCircle size={14} /> You Must:
                  </p>
                  <ul className="space-y-1.5 ml-5">
                    <li>• Provide accurate pickup/drop-off locations</li>
                    <li>• Be ready at the pickup location on time</li>
                    <li>• Treat drivers with respect</li>
                    <li>• Pay the fare as displayed in the app</li>
                    <li>• Wear a helmet during the ride</li>
                  </ul>
                </div>
                <div>
                  <p className="text-hfc-red mb-2 flex items-center gap-2">
                    <XCircle size={14} /> You Must Not:
                  </p>
                  <ul className="space-y-1.5 ml-5">
                    <li>• Cancel rides excessively</li>
                    <li>• Be intoxicated or under the influence</li>
                    <li>• Harass or threaten drivers</li>
                    <li>• Carry prohibited items</li>
                    <li>• Request drivers to break traffic laws</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Drivers */}
            <div className="bg-hfc-card border border-hfc-border rounded-xl p-6 space-y-3">
              <h3 className="text-white font-display font-bold">For Drivers</h3>
              <div className="grid md:grid-cols-2 gap-4 text-hfc-muted text-sm font-body">
                <div>
                  <p className="text-hfc-green mb-2 flex items-center gap-2">
                    <CheckCircle size={14} /> You Must:
                  </p>
                  <ul className="space-y-1.5 ml-5">
                    <li>• Hold a valid motorcycle license</li>
                    <li>• Maintain comprehensive insurance</li>
                    <li>• Keep your vehicle roadworthy</li>
                    <li>• Follow traffic laws at all times</li>
                    <li>• Provide a safe, clean ride experience</li>
                    <li>• Deliver riders to their destinations</li>
                  </ul>
                </div>
                <div>
                  <p className="text-hfc-red mb-2 flex items-center gap-2">
                    <XCircle size={14} /> You Must Not:
                  </p>
                  <ul className="space-y-1.5 ml-5">
                    <li>• Accept rides while intoxicated</li>
                    <li>• Discriminate against riders</li>
                    <li>• Request payment outside the app</li>
                    <li>• Share rider information</li>
                    <li>• Use the bike for unauthorized purposes</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Bike Owners */}
            <div className="bg-hfc-card border border-hfc-border rounded-xl p-6 space-y-3">
              <h3 className="text-white font-display font-bold">For Bike Owners</h3>
              <ul className="space-y-2 text-hfc-muted text-sm font-body">
                <li className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-hfc-lime mt-1 flex-shrink-0" />
                  <span>Ensure your motorcycle is properly registered and insured</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-hfc-lime mt-1 flex-shrink-0" />
                  <span>Maintain your bike in safe, roadworthy condition</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-hfc-lime mt-1 flex-shrink-0" />
                  <span>Provide accurate bike information during registration</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-hfc-lime mt-1 flex-shrink-0" />
                  <span>Respond promptly to maintenance requests</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Payments and Fees */}
        <section className="space-y-4">
          <h2 className="font-display font-bold text-white text-2xl">5. Payments and Fees</h2>
          <div className="bg-hfc-card border border-hfc-border rounded-xl p-6 space-y-4 text-hfc-muted font-body">
            <div>
              <h3 className="text-white font-display font-bold mb-2">Fare Calculation</h3>
              <p>
                Fares are calculated based on distance, time, demand, and other factors. The estimated fare is displayed before you confirm your ride.
              </p>
            </div>
            <div className="border-t border-hfc-border pt-4">
              <h3 className="text-white font-display font-bold mb-2">Service Fees</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-hfc-lime mt-1">•</span>
                  <span>HFC Transport charges a service fee on each completed ride</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-hfc-lime mt-1">•</span>
                  <span>Riders receive their earnings after deducting platform fees</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-hfc-lime mt-1">•</span>
                  <span>Bike owners receive payments based on usage of their motorcycles</span>
                </li>
              </ul>
            </div>
            <div className="border-t border-hfc-border pt-4">
              <h3 className="text-white font-display font-bold mb-2">Cancellation Fees</h3>
              <p>
                Cancellation fees may apply if you cancel after a driver has been assigned and is en route to your pickup location.
              </p>
            </div>
          </div>
        </section>

        {/* Safety and Conduct */}
        <section className="space-y-4">
          <h2 className="font-display font-bold text-white text-2xl">6. Safety and Conduct</h2>
          <div className="bg-gradient-to-br from-hfc-orange/5 to-hfc-red/5 border border-hfc-border rounded-xl p-6 space-y-4">
            <div className="flex items-start gap-3">
              <AlertCircle size={24} className="text-hfc-orange flex-shrink-0 mt-1" />
              <div className="space-y-3 text-hfc-muted font-body">
                <p className="text-white font-display font-bold">Zero Tolerance Policy</p>
                <p>
                  We have a zero-tolerance policy for harassment, discrimination, violence, or any behavior that compromises safety. Violations will result in immediate account termination and may be reported to law enforcement.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <XCircle size={16} className="text-hfc-red mt-1 flex-shrink-0" />
                    <span>Sexual harassment or inappropriate behavior</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle size={16} className="text-hfc-red mt-1 flex-shrink-0" />
                    <span>Discrimination based on race, gender, religion, or any other factor</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle size={16} className="text-hfc-red mt-1 flex-shrink-0" />
                    <span>Violence, threats, or intimidation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle size={16} className="text-hfc-red mt-1 flex-shrink-0" />
                    <span>Operating a vehicle under the influence</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Liability */}
        <section className="space-y-4">
          <h2 className="font-display font-bold text-white text-2xl">7. Limitation of Liability</h2>
          <div className="bg-hfc-card border border-hfc-border rounded-xl p-6 text-hfc-muted font-body space-y-3">
            <p>
              <strong className="text-white">IMPORTANT:</strong> HFC Transport acts solely as a technology platform connecting riders with independent third-party drivers.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-hfc-lime mt-1">•</span>
                <span>We are not responsible for the actions, conduct, or negligence of drivers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-hfc-lime mt-1">•</span>
                <span>We are not liable for accidents, injuries, or property damage during rides</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-hfc-lime mt-1">•</span>
                <span>Drivers are independent contractors, not employees of HFC Transport</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-hfc-lime mt-1">•</span>
                <span>Our liability is limited to the maximum extent permitted by law</span>
              </li>
            </ul>
            <p className="text-sm border-t border-hfc-border pt-3 mt-3">
              While we implement safety measures, including driver background checks and insurance requirements, we cannot guarantee absolute safety. Users assume all risks associated with using the platform.
            </p>
          </div>
        </section>

        {/* Intellectual Property */}
        <section className="space-y-4">
          <h2 className="font-display font-bold text-white text-2xl">8. Intellectual Property</h2>
          <div className="bg-hfc-card border border-hfc-border rounded-xl p-6 text-hfc-muted font-body space-y-3">
            <p>
              All content, features, and functionality of the HFC Transport platform, including but not limited to text, graphics, logos, icons, images, audio clips, and software, are the exclusive property of HFC Transport and are protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p>
              You may not reproduce, distribute, modify, create derivative works of, publicly display, or exploit any of our content without our express written permission.
            </p>
          </div>
        </section>

        {/* Dispute Resolution */}
        <section className="space-y-4">
          <h2 className="font-display font-bold text-white text-2xl">9. Dispute Resolution</h2>
          <div className="bg-hfc-card border border-hfc-border rounded-xl p-6 text-hfc-muted font-body space-y-3">
            <p>
              Any disputes arising from these Terms or your use of our services shall be resolved through:
            </p>
            <ol className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-hfc-lime">1.</span>
                <span><strong className="text-white">Informal Resolution:</strong> Contact our support team first to resolve the issue</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-hfc-lime">2.</span>
                <span><strong className="text-white">Mediation:</strong> If informal resolution fails, disputes may be submitted to mediation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-hfc-lime">3.</span>
                <span><strong className="text-white">Arbitration:</strong> Final disputes shall be resolved through binding arbitration in Makurdi, Nigeria</span>
              </li>
            </ol>
          </div>
        </section>

        {/* Governing Law */}
        <section className="space-y-4">
          <h2 className="font-display font-bold text-white text-2xl">10. Governing Law</h2>
          <div className="bg-hfc-card border border-hfc-border rounded-xl p-6 text-hfc-muted font-body">
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria. Any legal action or proceeding arising under these Terms will be brought exclusively in the courts located in Benue State, Nigeria.
            </p>
          </div>
        </section>

        {/* Changes to Terms */}
        <section className="space-y-4">
          <h2 className="font-display font-bold text-white text-2xl">11. Changes to Terms</h2>
          <div className="bg-hfc-card border border-hfc-border rounded-xl p-6 text-hfc-muted font-body space-y-3">
            <p>
              We reserve the right to modify these Terms at any time. We will notify users of material changes through:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-hfc-lime mt-1">•</span>
                <span>Email notification to your registered address</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-hfc-lime mt-1">•</span>
                <span>In-app notification</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-hfc-lime mt-1">•</span>
                <span>Posting updated Terms on our website</span>
              </li>
            </ul>
            <p>
              Your continued use of our services after changes constitutes acceptance of the new Terms.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section className="space-y-4">
          <h2 className="font-display font-bold text-white text-2xl">12. Contact Information</h2>
          <div className="bg-gradient-to-br from-hfc-lime/5 to-hfc-orange/5 border border-hfc-border rounded-xl p-6 space-y-4">
            <p className="text-hfc-muted font-body">
              For questions about these Terms or our services, please contact us:
            </p>
            <div className="space-y-2 text-hfc-muted font-body">
              <p className="flex items-start gap-2">
                <span className="text-hfc-lime">📧</span>
                <span><strong className="text-white">Email:</strong> <a href="mailto:legal@howfar.ng" className="text-hfc-lime hover:underline">legal@howfar.ng</a></span>
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
          </div>
        </section>

        {/* Acceptance */}
        <div className="bg-gradient-to-br from-hfc-lime/5 to-hfc-orange/5 border border-hfc-lime/20 rounded-xl p-6 text-center space-y-3">
          <p className="text-white font-display font-bold">
            By using HowFar Transport, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use.
          </p>
          <p className="text-hfc-muted text-sm font-body">
            Last updated: February 27, 2025
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-hfc-border py-8">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-4">
          <div className="flex flex-wrap justify-center gap-6 text-hfc-muted text-sm">
            <button onClick={() => router.push("/about")} className="hover:text-white transition-colors">About</button>
            <button onClick={() => router.push("/careers")} className="hover:text-white transition-colors">Careers</button>
            <button onClick={() => router.push("/privacy")} className="hover:text-white transition-colors">Privacy Policy</button>
            <button onClick={() => router.push("/")} className="hover:text-white transition-colors">Home</button>
          </div>
          <p className="text-hfc-muted text-sm">&copy; 2025 Howfar Transport. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
