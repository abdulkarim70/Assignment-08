import Link from "next/link";
import Marquee from "react-fast-marquee";

export default function Banner() {
  return (
    <section className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 md:py-28 text-center">
        
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Discover Your Perfect Aesthetic
        </h1>

        {/* Description */}
        <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8">
          Find the perfect tiles to match your style and transform your space beautifully.
        </p>

        {/* Button */}
        <Link
          href="/tiles"
          className="inline-block bg-blue-500 hover:bg-blue-600 px-6 sm:px-8 py-3 text-sm sm:text-base md:text-lg rounded-lg font-semibold transition duration-300"
        >
          Browse Now
        </Link>

      </div>
      <div>
        <Marquee >New Arrivals: Tile Gallery | Weekly Feature: Modern Geometric Patterns | Join the Community...
</Marquee>
      </div>
    </section>
  );
}