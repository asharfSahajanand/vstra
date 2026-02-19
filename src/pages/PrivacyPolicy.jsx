import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-100">
      <Navbar />

      <main className="flex-1">
        <section className="container mx-auto px-4 sm:px-6 md:px-12 py-16 md:py-24">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-12">

            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
              Privacy Policiy
            </h2>

            <div className="space-y-8 text-gray-600 leading-relaxed">

              <div className="max-w-4xl mx-auto px-6 py-16">
                {/* RETURN POLICY */}
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Privacy Policiy
                </h2>

                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  We value your privacy and are committed to protecting your personal information. This policy explains how we collect, use, and protect your data when you visit our website or make a purchase. By using our site, you consent to the data practices described in this policy.
                </p>
                {/* RETURN POLICY */}
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  1.Information We Collect
                </h3>

                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  When you make a purchase or attempt to make a purchase through the Site, we collect certain information from you, including your name, billing address, shipping address, payment information, email address, and phone number. We refer to this information as "Order Information."
                </p>

                {/* information */}
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  2.How We Use Your Information
                </h3>

                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations).</p>
                {/* RETURN POLICY */}
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Return Policy
                </h2>

                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Your satisfaction is our top priority. If you are not completely satisfied with your
                  purchase, we're here to help. This policy outlines the terms and conditions for returning an item.
                </p>

                {/* Section 1 */}
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  1. Eligibility for Returns
                </h3>

                <p className="text-gray-600 leading-relaxed mb-8">
                  To be eligible for a return, your item must be unused and in the same condition that you
                  received it. It must also be in the original packaging. Our return policy lasts 30 days.
                  If 30 days have gone by since your purchase, unfortunately, we can't offer you a refund or exchange.
                </p>

                {/* Section 2 */}
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  2. How to Initiate a Return
                </h3>

                <p className="text-gray-600 leading-relaxed mb-12">
                  To initiate a return, please contact our customer support team at
                  <span className="font-medium text-gray-800"> support@theartisan.shop </span>
                  with your order number and a brief explanation of the reason for the return.
                  We will provide you with a return shipping label and instructions on how to send your package.
                </p>

                {/* TERMS AND CONDITIONS */}
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Terms and Conditions
                </h2>

                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Please read these Terms and Conditions ("Terms") carefully before using the website.
                  Your access to and use of the website is conditioned on your acceptance of and compliance
                  with these Terms.
                </p>

                {/* Intellectual Property */}
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  1. Intellectual Property
                </h3>

                <p className="text-gray-600 leading-relaxed mb-8">
                  The content on this website, including all text, images, and graphics, is the property
                  of The Artisan's Shop and is protected by intellectual property laws.
                  You may not use, reproduce, or distribute any content without our express written permission.
                </p>

                {/* Limitation of Liability */}
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  2. Limitation of Liability
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  In no event shall The Artisan's Shop be liable for any indirect, incidental, special,
                  or consequential damages arising out of your use of or inability to use the site.
                </p>

              </div>


            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
