import { getTiles } from "@/lib/getTiles";

const TilesDetails = async ({ params }) => {
  const id = params?.id;

  const details = await getTiles();

  const tile = details.find((t) => t.id === id);

  if (!tile) {
    return <div>Tile not found</div>;
  }

  return (
    <div>
      <h1>{tile.title}</h1>
      <p>{tile.description}</p>
      <img src={tile.image} alt={tile.title} />
    </div>
  );
};

export default TilesDetails;