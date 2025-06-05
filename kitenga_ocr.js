
export async function runOCR() {
  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.accept = "image/*";
  fileInput.click();

  fileInput.onchange = async () => {
    const file = fileInput.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64Image = reader.result.split(",")[1]; // strip data:image/... prefix
      const res = await fetch("https://den-backend.onrender.com/ocr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image_base64: base64Image })
      });

      const data = await res.json();
      document.getElementById("ocrOutput").textContent = JSON.stringify(data, null, 2);

      if (window.logToRongo) {
        window.logToRongo("Kitenga", data.extracted_text || data.text || "No glyphs detected.");
      }
    };

    reader.readAsDataURL(file);
  };
}

// Attach globally for HTML buttons
window.ocrTest = runOCR;
