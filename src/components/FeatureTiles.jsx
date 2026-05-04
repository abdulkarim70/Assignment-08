import { getTiles } from "@/lib/getTiles";
import Image from "next/image";
import Link from "next/link";

const FeatureTiles = async () => {
  const tiles = await getTiles();
  const featureTiles = tiles.slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl sm:text-3xl font-bold mt-5 mb-8 text-center">
        Feature Tiles
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {featureTiles.map((ft) => (
          <div
            key={ft.id}
            className="bg-white border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 flex flex-col"
          >
            <div className="relative w-full aspect-square">
              <Image
                src={ft.image}
                alt={ft.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover"
              />
            </div>

            <div className="p-5 flex flex-col items-center text-center flex-grow">
              <h3 className="text-lg font-semibold mb-2">{ft.title}</h3>
              <p className="text-gray-500 text-sm mb-2">{ft.category}</p>
              <p className="text-xl font-bold text-gray-800 mb-5">${ft.price}</p>

              <Link
                href={`/tiles/${ft.id}`}
                className="mt-auto inline-block bg-black text-white px-6 py-2.5 rounded-lg hover:bg-gray-800 transition"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureTiles;