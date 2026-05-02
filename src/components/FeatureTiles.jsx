import { getTiles } from "@/lib/getTiles";
import Image from "next/image";
import Link from "next/link";

const FeatureTiles = async () => {
  const tiles = await getTiles();
  const featureTiles = tiles.slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      
      <h2 className="text-2xl sm:text-3xl font-bold mt-5 mb-6 text-center">
        Feature Tiles
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        {featureTiles.map((ft) => (
          <div
            key={ft.id}
            className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300 flex flex-col w-full"
          >
            
            {/* Image */}
            <div className="relative w-full aspect-[4/3] sm:aspect-square md:aspect-[4/3]">
              <Image
                src={ft.image}
                alt={ft.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col flex-grow">
              
              <h2 className="text-base sm:text-lg font-semibold mb-1">
                {ft.title}
              </h2>

              <p className="text-gray-500 text-sm mb-2">
                {ft.category}
              </p>

              <p className="font-bold text-gray-800 mb-4">
                ${ft.price}
              </p>

              <div className="mt-auto">
                <Link
                  href={`/tiles/${ft.id}`}
                  className="block text-center bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
                >
                  View Details
                </Link>
              </div>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default FeatureTiles;