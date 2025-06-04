import { scribeEntry } from './pack/rongohia.js';
import { runOCR } from './pack/kitenga.js';
import { translateText } from './pack/tawera.js';
import { speak } from './pack/wairua.js';

window.scribeTest = async function () {
  const result = await scribeEntry({
    speaker: "Te Ariki Hemi",
    text: "Kia kaha te reo Māori",
    tone: "wānanga",
    glyph_id: "glyph-001",
    translate: true
  });
  document.getElementById("scribeOutput").textContent = JSON.stringify(result, null, 2);
}

window.ocrTest = async function () {
  const result = await runOCR("dGVzdCBpbWFnZSBkYXRh");
  document.getElementById("ocrOutput").textContent = JSON.stringify(result, null, 2);
}

window.translateTest = async function () {
  const result = await translateText("Tēnei te kōrero i kitea i te whakapakoko.", "en");
  document.getElementById("translateOutput").textContent = JSON.stringify(result, null, 2);
}

window.ttsTest = async function () {
  const result = await speak("Tēnei te kōrero", "default");
  document.getElementById("ttsOutput").textContent = JSON.stringify(result, null, 2);
}
