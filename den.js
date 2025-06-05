async function gptWhisper() {
  const response = await fetch("https://ngati-kuia-scribe-app.onrender.com/gpt-whisper", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      whisper: document.getElementById("whisper-input").value // e.g., from a textbox
    })
  });

  const data = await response.json();
  console.log("Whisper Response:", data);

  // Optional: show in frontend
  document.getElementById("whisper-response").textContent = data.response;
}
