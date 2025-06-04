export async function scribeEntry(data) {
  const res = await fetch("https://den-backend.onrender.com/scribe", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  return await res.json();
}
