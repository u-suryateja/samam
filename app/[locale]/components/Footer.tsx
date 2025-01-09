// components/Footer.tsx
import React from "react";
import { Link } from "@/i18n/routing";

const Footer = () => {
  return (
    <footer className="bg-white text-white py-8 border-t border-gray-600">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-3xl font-semibold text-black">సత్యాన్వేషణ మండలి</h3>
            <p className=" mt-2 text-black">
              A journey to discover truth, wisdom, and societal harmony.
            </p>
          </div>
          <div className="flex space-x-8 mb-6 md:mb-0">
            <div>
              <h4 className="text-lg font-semibold text-black">Links</h4>
              <ul className="mt-4 text-gray-400">
                <li><Link href="/about" className="hover:text-red-200 text-black">About Us</Link></li>
                <li><Link href="/blog" className="hover:text-red-200 text-black">Blog</Link></li>
               
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-black">Contact Us</h4>
              <ul className="mt-4 text-gray-400">
                <li className="text-black">Email: <a href="mailto:support@satyavishwanth.org" className="hover:text-white text-black">support@satyavishwanth.org</a></li>
                <li className="text-black">Phone: +91 123 456 7890</li>
                <li className="text-black">Address: 123 Truth Lane, Hyderabad, Telangana</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="  text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} సత్యాన్వేషణ మండలి. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
