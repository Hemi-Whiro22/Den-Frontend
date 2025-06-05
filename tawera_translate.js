async function translateText(text) {
  const res = await fetch('https://den-backend.onrender.com/translate', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ text: text, target_lang: 'en' })
  });
  const data = await res.json();
  return data.translation;
}
window.translateTest = runTranslate;