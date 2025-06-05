const BASE_URL = "https://your-render-url.onrender.com"; // <-- Replace this with your actual backend URL

async function scribeTest() {
  const res = await fetch(BASE_URL + "/scribe", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      speaker: "Te Ariki Hemi",
      text: "Kia kaha te reo Māori",
      tone: "wānanga",
      glyph_id: "glyph-001",
      translate: true
    })
  });
  const data = await res.json();
  document.getElementById("scribeOutput").textContent = JSON.stringify(data, null, 2);
}

async function ocrTest() {
  const res = await fetch(BASE_URL + "/ocr", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      image_base64: "dGVzdCBpbWFnZSBkYXRh" // Fake base64
    })
  });
  const data = await res.json();
  document.getElementById("ocrOutput").textContent = JSON.stringify(data, null, 2);
}

async function translateTest() {
  const res = await fetch(BASE_URL + "/translate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      text: "Tēnei te kōrero i kitea i te whakapakoko.",
      target_language: "en"
    })
  });
  const data = await res.json();
  document.getElementById("translateOutput").textContent = JSON.stringify(data, null, 2);
}

async function ttsTest() {
  const res = await fetch(BASE_URL + "/speak", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      text: "Tēnei te kōrero",
      voice: "default"
    })
  });
  const data = await res.json();
  document.getElementById("ttsOutput").textContent = JSON.stringify(data, null, 2);
}
