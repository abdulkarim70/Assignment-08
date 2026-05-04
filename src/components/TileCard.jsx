import Link from "next/link";
import Image from "next/image";

export default function TileCard({ tile }) {
  return (
    <div className="bg-white border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 w-full max-w-sm mx-auto">
      <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
        <Image
          src={tile.image}
          alt={tile.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-5">
        <h2 className="text-xl font-semibold text-center mb-6">
          {tile.title}
        </h2>

        <div className="flex items-center justify-between gap-4">
          <button className="flex-1 bg-gray-100 text-gray-800 py-2.5 rounded-xl hover:bg-gray-200 transition">
            Preview
          </button>

          <Link
            href={`/tiles/${tile.id}`}
            className="flex-1 text-center bg-black text-white py-2.5 rounded-xl hover:bg-gray-800 transition"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}