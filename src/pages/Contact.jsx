import { useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

function IconEmail() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-indigo-600">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
function IconPhone() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-indigo-600">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
function IconClock() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-indigo-600">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ fullName: '', email: '', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Optional: send form data
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <main className="flex-1 px-4 py-10 sm:px-6 md:px-8">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">Contact Us</h1>
        </div>

      <div className="mx-auto mt-10 max-w-5xl">
  <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-md">
    
    <div className="grid gap-10 lg:grid-cols-2">
      
      {/* LEFT - FORM */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Send us a message
        </h2>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              name="fullName"
              type="text"
              value={form.fullName}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="mt-2 w-full rounded-lg bg-indigo-600 py-2.5 font-medium text-white hover:bg-indigo-700"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* RIGHT - CONTACT INFO */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Our Contact Information
        </h2>

        <div className="mt-6 space-y-4 text-sm text-gray-600">
          <div>
            <p className="text-xl font-semibold text-gray-700">Address</p>
            <p class="text-gray-600">123 Artisan Lane<br />Craftsville, CA 90210<br />USA</p>
          </div>

          <div>
            <p className="text-xl font-semibold text-gray-700">Phone</p>
            <p class="text-gray-600">+1 (555) 123-4567</p>
          </div>

          <div>
            <p className="text-xl font-semibold text-gray-700">Email</p>
            <p class="text-gray-600">support@ecmaly.qubetro.com</p>
          </div>

          <div>
            <p className="text-xl font-semibold text-gray-700">Hours</p>
            <p class="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM (PST)</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>


       
      </main>

      <Footer />
    </div>
  );
}
