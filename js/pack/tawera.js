export async function translateText(text, targetLang) {
  const res = await fetch("https://den-backend.onrender.com", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: text, target_language: targetLang })
  });
  return await res.json();
}
