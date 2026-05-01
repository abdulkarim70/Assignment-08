import Link from "next/link";
import Image from "next/image";

export default function TileCard({ tile }) {
  return (
    <div className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300 flex flex-col w-full">
      
      {/* Responsive Image */}
      <div className="relative w-full aspect-[4/3] sm:aspect-square md:aspect-[4/3]">
        <Image
          src={tile.image}
          alt={tile.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        
        <h2 className="text-base sm:text-lg font-semibold mb-1">
          {tile.title}
        </h2>

        <p className="text-gray-500 text-sm mb-2">
          {tile.category}
        </p>

        <p className="font-bold text-gray-800 mb-4">
          ${tile.price}
        </p>

        <div className="mt-auto">
          <Link
            href={`/tiles/${tile.id}`}
            className="block text-center bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
          >
            View Details
          </Link>
        </div>

      </div>
    </div>
  );
}