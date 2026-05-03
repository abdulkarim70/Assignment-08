"use client";
import logo from '@/assets/logo.png'
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { authClient } from '@/lib/auth-client';
import { userAc } from 'better-auth/plugins/admin/access';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
const userData=authClient.useSession()
const user=userData.data?.user
console.log(user);
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
            <Link href={"/tiles"} className="hover:text-blue-500">All Tiles</Link>
            <Link href={"/profile"} className="hover:text-blue-500">My Profile</Link>
      
             <Link href={"/signup"} className="hover:text-blue-500">SignUp</Link>
            <Link href={"/signin"} className="hover:text-blue-500">SignIn</Link>
            <Link href={"/"} className="hover:text-blue-500">SignOut</Link>

      
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
        <div className="md:hidden bg-gray-100 px-4 pb-4 ">
          <Link href={"/"} className="block py-2">Home</Link>
          <Link href={"/tiles"} className="block py-2">All Tiles</Link>
          <Link href={"/profile"} className="block py-2">My Profile</Link>
            
              <div>
                <Link href={"/signup"} className="block py-2">SignUp</Link>
            <Link href={"/signin"} className="block py-2">SignIn</Link>
            <Link href={"/"} className="block py-2">SignOut</Link>

              </div>
            
         
        </div>
      )}
    </nav>
  );
}