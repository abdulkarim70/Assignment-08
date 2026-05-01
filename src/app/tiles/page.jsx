import TileCard from "@/components/TileCard";
import { getTiles } from "@/lib/getTiles";

const AllTilesPage = async () => {
  const tiles = await getTiles();

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      
      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {tiles.map((tile) => (
          <TileCard key={tile.id} tile={tile} />
        ))}
      </div>

    </div>
  );
};

export default AllTilesPage;