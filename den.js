async function gptWhisper() {
  const whisper = document.getElementById("whisper-input").value;

  const response = await fetch("https://den-backend.onrender.com/gpt-whisper", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ whisper })
  });

  const data = await response.json();
  console.log("Whisper Response:", data);

  document.getElementById("whisper-response").textContent = data.response;
}

// 🌕 Make it global *after* the function is defined
window.gptWhisper = gptWhisper;
