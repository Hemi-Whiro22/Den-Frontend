async function speakText(text) {
  const res = await fetch('https://den-backend.onrender.com/speak', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ text: text })
  });
  const audio = new Audio('/static/speak.mp3');
  audio.play();
}
window.speakText = runTTS;