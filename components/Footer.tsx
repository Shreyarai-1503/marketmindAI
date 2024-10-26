"use client";

import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const quickLinks = [
    { href: "#", label: "About Us" },
    { href: "#", label: "Contact" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms & Conditions" },
  ];

  return (
    <footer className="py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ml-10">
        {/* Column 1: About */}
        <div>
          <h4 className="text-lg font-semibold mb-4">MarketMind AI</h4>
          <p className="text-sm">
            Unlock the power of AI to understand and enhance your marketing
            strategies across India’s diverse consumer landscape.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="https://twitter.com" aria-label="Twitter">
              <FaXTwitter className="w-6 h-6" />
            </a>
            <a href="https://facebook.com" aria-label="Facebook">
              <FaFacebookF className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn">
              <FaLinkedinIn className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p className="text-sm text-gray-400">
          &copy; 2024 MarketMind AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
