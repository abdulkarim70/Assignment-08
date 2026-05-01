export async function getTiles() {
  const res = await fetch(
    "https://assignment-08-five-theta.vercel.app/data.json",
    {
      cache: "no-store", // always fresh data (optional)
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch tiles");
  }

  return res.json();
}