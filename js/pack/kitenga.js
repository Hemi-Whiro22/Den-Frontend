export async function runOCR(imageBase64) {
  const res = await fetch("https://den-backend.onrender.com", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ image_base64: imageBase64 })
  });
  return await res.json();
}
