import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa6';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              DigiWallet
            </h3>
            <p className="text-sm text-gray-600">
              The secure digital wallet for all your financial needs. Send,
              receive, and manage your money with ease.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-800 mb-4">
              Features
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-indigo-600 cursor-pointer"
                >
                  Money Transfers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-indigo-600 cursor-pointer"
                >
                  Currency Exchange
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-indigo-600 cursor-pointer"
                >
                  Bill Payments
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-indigo-600 cursor-pointer"
                >
                  Savings Goals
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-800 mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-indigo-600 cursor-pointer"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-indigo-600 cursor-pointer"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-indigo-600 cursor-pointer"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-indigo-600 cursor-pointer"
                >
                  Press
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-800 mb-4">
              Support
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-indigo-600 cursor-pointer"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-indigo-600 cursor-pointer"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-indigo-600 cursor-pointer"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-indigo-600 cursor-pointer"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">
            &copy; 2025 DigiWallet. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className="text-gray-600 hover:text-indigo-600 cursor-pointer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://x.com/"
              target="_blank"
              className="text-gray-600 hover:text-indigo-600 cursor-pointer"
            >
              <FaTwitter />{' '}
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="text-gray-600 hover:text-indigo-600 cursor-pointer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              className="text-gray-600 hover:text-indigo-600 cursor-pointer"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
