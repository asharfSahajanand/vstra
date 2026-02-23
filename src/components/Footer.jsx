export default function Footer() {
  const quickLinks = [
    { label: 'Shop', href: '/' },
    { label: 'About Us', href: '/about-us' },
    { label: 'FAQ', href: '/FAQ' },
    { label: 'Contact', href: '/contact-us' },
    { label: 'Policy', href: '/policy' },
 ];

  return (
    <footer className="bg-white py-8 rounded-t-lg shadow-inner">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h4 className="text-xl font-bold text-gray-800 mb-4">Ecamly</h4>
            <p className="text-gray-600 leading-relaxed">
              Walrush Market Place deal in daily new arriving new fashions in men and women.
            </p>
          </div>

          {/* Quick Links - centered on md and up */}
          <div className="md:text-center">
            <h4 className="text-xl font-bold text-gray-800 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-8 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © 2026 Ecamly. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
