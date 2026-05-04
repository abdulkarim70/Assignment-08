"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
      
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      
      <h2 className="text-2xl mt-4 font-semibold text-gray-600">
        Page Not Found
      </h2>

      <p className="text-gray-500 mt-2">
        The page you are looking for does not exist or has been moved.
      </p>

      <Link
        href="/"
        className="mt-6 px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition"
      >
        Go Home
      </Link>
    </div>
  );
}