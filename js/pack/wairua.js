export async function speak(text, voice) {
  const res = await fetch("https://den-backend.onrender.com/speak", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: text, voice: voice })
  });
  return await res.json();
}
