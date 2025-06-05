async function logToRongo(speaker, text) {
  const res = await fetch('https://den-backend.onrender.com/scribe', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ speaker, text, tone: 'insight', glyph_id: 'glyph-002', translate: false })
  });
  const data = await res.json();
  console.log("Rongo Whisper:", data.rongo);
  document.getElementById('rongoWhisper').innerText = data.rongo;
}