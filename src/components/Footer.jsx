"use client";
import logo from '@/assets/logo.png'
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-white shadow-inner mt-10">
      <div className="max-w-7xl mx-auto px-4 py-10">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center md:text-left">

          {/* Logo / About */}
          <div className="flex flex-col items-center md:items-start">
            <Image src={logo} alt="logo" width={40} height={40} />
            <p className="text-gray-600 mt-3 max-w-xs">
              We are here to provide the best tiles collection for your home and office.
            </p>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-5 text-xl text-gray-600">
              <a href="#" className="hover:text-blue-600 transition"><FaFacebook /></a>
              <a href="#" className="hover:text-blue-400 transition"><FaTwitter /></a>
              <a href="#" className="hover:text-pink-500 transition"><FaInstagram /></a>
              <a href="#" className="hover:text-blue-700 transition"><FaLinkedin /></a>
            </div>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>

            <p className="text-gray-600">Dhaka, Bangladesh</p>

            <p className="text-gray-600 flex items-center gap-2 mt-2">
              <FaPhone />
              +880 1234-567890
            </p>

            <p className="text-gray-600 flex items-center gap-2 mt-2">
              <MdAttachEmail />
              info@example.com
            </p>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t mt-8 pt-4 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Your Website. All rights reserved.
        </div>

      </div>
    </footer>
  );
}