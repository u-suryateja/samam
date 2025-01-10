// components/Footer.tsx
import React from "react";
import { Link } from "@/i18n/routing";

const Footer = () => {
  return (
    <footer className="bg-white text-white py-8 border-t border-gray-100">
      <div className="container mx-auto px-4">
        

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
