// components/layout/Footer.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image src="/logo.png" alt="Logo" width={40} height={40} />
            <span className="text-xl font-bold text-white">StayFinder</span>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            <Link href="/about">
              <a className="hover:text-blue-400">About</a>
            </Link>
            <Link href="/services">
              <a className="hover:text-blue-400">Services</a>
            </Link>
            <Link href="/contact">
              <a className="hover:text-blue-400">Contact</a>
            </Link>
            <Link href="/privacy">
              <a className="hover:text-blue-400">Privacy Policy</a>
            </Link>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col space-y-1">
            <span>Email: info@stayfinder.com</span>
            <span>Phone: +1 (123) 456-7890</span>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
          &copy; {new Date().getFullYear()} StayFinder. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
