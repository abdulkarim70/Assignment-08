export default async function TilesDetails({ params }) {
  const { id } = await params;

  const res = await fetch("https://assignment-08-five-theta.vercel.app/data.json", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const tiles = await res.json();

  const tile = tiles.find((t) => t.id === Number(id));

  if (!tile) {
    return <div>Tile not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{tile.title}</h1>
      <p className="text-gray-700">{tile.description}</p>
    </div>
  );
}