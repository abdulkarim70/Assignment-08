"use client";
import logo from '@/assets/logo.png'
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { authClient } from '@/lib/auth-client';
import { Avatar, Button } from '@heroui/react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const userData = authClient.useSession();
  const user = userData.data?.user;
const handleSignOut= async()=>{
await authClient.signOut()
}
  return (
    <nav className="bg-white shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex items-center">
            <Link href={"/"}>
              <Image src={logo} alt="Logo" width={32} height={32} />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">

            {/* Left Menu */}
            <ul className="flex space-x-6">
              <li><Link href="/" className="hover:text-blue-500">Home</Link></li>
              <li><Link href="/tiles" className="hover:text-blue-500">All Tiles</Link></li>
              <li><Link href="/profile" className="hover:text-blue-500">My Profile</Link></li>
            </ul>

            {/* Right Menu */}
            <ul className="flex space-x-6 items-center">
              {!user ? (
                <>
                  <li><Link href="/signup" className="hover:text-blue-500">SignUp</Link></li>
                  <li><Link href="/signin" className="hover:text-blue-500">SignIn</Link></li>
                </>
              ) : (
                <li>
                  <Button onClick={handleSignOut} variant='danger'>
                  SignOut
                </Button>
                </li>
              )}

              {/* Avatar */}
              {user && (
                <li>
                  <Avatar>
                    <Avatar.Image
                      alt={user?.name}
                      src={user?.image}
                      referrerPolicy='no-referrer'
                    />
                    <Avatar.Fallback>
                      {user?.name?.slice(0, 2)}
                    </Avatar.Fallback>
                  </Avatar>
                </li>
              )}
            </ul>

          </div>

          {/* Mobile Button */}
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

          <ul className="space-y-2">
            <li><Link href="/" className="block py-2">Home</Link></li>
            <li><Link href="/tiles" className="block py-2">All Tiles</Link></li>
            <li><Link href="/profile" className="block py-2">My Profile</Link></li>
          </ul>

          <ul className="space-y-2 mt-4">
            {!user ? (
              <>
                <li><Link href="/signup" className="block py-2">SignUp</Link></li>
                <li><Link href="/signin" className="block py-2">SignIn</Link></li>
              </>
            ) : (
              <li>
                <Button onClick={handleSignOut} variant='danger'>
                  SignOut
                </Button>
              </li>
            )}
          </ul>

        </div>
      )}
    </nav>
  );
}