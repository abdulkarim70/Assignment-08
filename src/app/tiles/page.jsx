'use client';

import { useEffect, useState } from 'react';
import TileCard from '@/components/TileCard';
import { getTiles } from '@/lib/getTiles';

const AllTilesPage = () => {
  const [tiles, setTiles] = useState([]);
  const [filteredTiles, setFilteredTiles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchTiles = async () => {
      const data = await getTiles();
      setTiles(data);
      setFilteredTiles(data);
    };

    fetchTiles();
  }, []);

  useEffect(() => {
    const filtered = tiles.filter((tile) =>
      tile.category?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTiles(filtered);
  }, [searchTerm, tiles]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search by title"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredTiles.length > 0 ? (
          filteredTiles.map((tile) => (
            <TileCard key={tile.id} tile={tile} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 text-lg">
            No tiles found in this category.
          </p>
        )}
      </div>
    </div>
  );
};

export default AllTilesPage;
