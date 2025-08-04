import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Conference Info */}
          <div>
            <h2 className="text-2xl font-bold mb-4">AICOST-2026</h2>
            <p className="text-gray-300 leading-relaxed">
              Emerging Trends in Applied Intelligence, Communication and Security Technologies
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link to="/schedule" className="hover:text-white transition-colors">Schedule</Link></li>
              <li><Link to="/speakers" className="hover:text-white transition-colors">Speakers</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <address className="not-italic text-gray-300 space-y-2">
              <p className="flex items-center">
                <span className="block">NGP Conference Center,<br />Dr. N.G.P Arts and Science College,<br />Coimbatore, India</span>
              </p>
              <p className="flex items-center">3rd January 2026</p>
              <p className="flex items-center">Email: aicost2026@drngpasc.ac.in</p>
              <p className="flex items-center">Tel: +91 4222 369 253</p>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-950 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} AICOST. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;