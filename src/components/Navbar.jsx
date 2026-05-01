"use client";
import logo from '@/assets/logo.png'
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar({ isLoggedIn }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* Left: Logo */}
          <div className="flex items-center">
            <Link href={"/"} className="text-2xl font-bold text-blue-600">
              <Image src={logo} alt="Logo" width={32} height={32} />
            </Link>
          </div>
  
          {/* Center: Menu (Desktop) */}
          <div className="hidden md:flex space-x-6">
            <Link href={"/"} className="hover:text-blue-500">Home</Link>
            <Link href={"/all-tiles"} className="hover:text-blue-500">All Tiles</Link>
            <Link href={"/profile"} className="hover:text-blue-500">My Profile</Link>
          </div>

          {/* Right: Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {!isLoggedIn ? (
              <Link href={"/login"}>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  Login
                </button>
              </Link>
            ) : (
              <>
                <Link href= {"/profile"} className="hover:text-blue-500">
                  Profile
                </Link>
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
                  Logout
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-100 px-4 pb-4">
          <Link href={"/"} className="block py-2">Home</Link>
          <Link href={"/all-tiles"} className="block py-2">All Tiles</Link>
          <Link href={"/profile"} className="block py-2">My Profile</Link>

          {!isLoggedIn ? (
            <Link href={"/login"}>
              <button className="w-full mt-2 bg-blue-600 text-white py-2 rounded-lg">
                Login
              </button>
            </Link>
          ) : (
            <>
              <Link href={"/profile"} className="block py-2">Profile</Link>
              <button className="w-full mt-2 bg-red-500 text-white py-2 rounded-lg">
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
}