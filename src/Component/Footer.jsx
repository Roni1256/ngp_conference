import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Conference Info */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <h2 className="text-xl font-bold mb-4">NGP Conference</h2>
            <p className="text-gray-300 mb-4">
              International Conference on Next Generation Power Systems
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition duration-150">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition duration-150">About</Link>
              </li>
              <li>
                <Link to="/committee" className="text-gray-300 hover:text-white transition duration-150">Committee</Link>
              </li>
              <li>
                <Link to="/call-for-papers" className="text-gray-300 hover:text-white transition duration-150">Call for Papers</Link>
              </li>
              <li>
                <Link to="/registration" className="text-gray-300 hover:text-white transition duration-150">Registration</Link>
              </li>
            </ul>
          </div>

          {/* Important Dates */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <h2 className="text-xl font-bold mb-4">Important Dates</h2>
            <ul className="space-y-2 text-gray-300">
              <li className="flex flex-col">
                <span className="font-medium">Paper Submission</span>
                <span>June 30, 2023</span>
              </li>
              <li className="flex flex-col">
                <span className="font-medium">Notification of Acceptance</span>
                <span>August 15, 2023</span>
              </li>
              <li className="flex flex-col">
                <span className="font-medium">Camera-Ready Submission</span>
                <span>September 1, 2023</span>
              </li>
              <li className="flex flex-col">
                <span className="font-medium">Conference Dates</span>
                <span>October 15-17, 2023</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <address className="not-italic text-gray-300 space-y-2">
              <p className="flex items-start">
                <svg className="h-6 w-6 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Undiknas University, Bali, Indonesia</span>
              </p>
              <p className="flex items-start">
                <svg className="h-6 w-6 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>ngpconference@example.com</span>
              </p>
              <p className="flex items-start">
                <svg className="h-6 w-6 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+62 123 456 7890</span>
              </p>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-950 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm text-center md:text-left">
            &copy; {currentYear} NGP Conference. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm text-gray-400">
              <li>
                <Link to="/privacy-policy" className="hover:text-white transition duration-150">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="hover:text-white transition duration-150">Terms of Service</Link>
              </li>
              <li>
                <Link to="/sitemap" className="hover:text-white transition duration-150">Sitemap</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;