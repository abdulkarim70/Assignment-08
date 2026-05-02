export default async function TilesDetails({ params }) {
  const id = params?.id;

  const res = await fetch(
    "https://assignment-08-five-theta.vercel.app/data.json",
    { cache: "no-store" }
  );

  const tiles = await res.json();

  const tile = tiles.find((t) => t.id === Number(id));

  if (!tile) {
    return <div>Tile not found</div>;
  }

  return (
    <div>
      <h1>{tile.title}</h1>
      <p>{tile.description}</p>
    </div>
  );
}