// Shlokas remain Sanskrit and do NOT translate
const shlokas = [
  "ॐ असतो मा सद्गमय ।",
  "तमसो मा ज्योतिर्गमय ।",
  "मृत्योर्मा अमृतं गमय ॥",
  "सर्वे भवन्तु सुखिनः ।",
  "सर्वे सन्तु निरामयाः ॥",
  "ॐ शान्तिः शान्तिः शान्तिः ॥",
  "धर्मो रक्षति रक्षितः ॥",
  "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ॥",
  "ॐ नमः शिवाय ॥",
  "हरे राम हरे राम राम राम हरे हरे ॥",
  // Add more if needed
];

// Show random shloka on page load
function showRandomShloka() {
  const shlokaBox = document.getElementById("shloka-box");
  const randomIndex = Math.floor(Math.random() * shlokas.length);
  shlokaBox.innerText = shlokas[randomIndex];
}

// Toggle dark mode
function setupModeToggle() {
  const modeToggle = document.getElementById("mode-toggle");
  modeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    modeToggle.innerText = document.body.classList.contains("dark-mode")
      ? "🌙"
      : "🌞";
  });
}

// Toggle background audio
function setupAudioToggle() {
  const audioToggle = document.getElementById("audio-toggle");
  const bgAudio = document.getElementById("bg-audio");
  audioToggle.addEventListener("click", () => {
    if (bgAudio.paused) {
      bgAudio.play();
      audioToggle.innerText = "🔊";
    } else {
      bgAudio.pause();
      audioToggle.innerText = "🔈";
    }
  });
}

// Setup language selection
function setupLanguageSelect() {
  const langSelect = document.getElementById("language-select");
  langSelect.addEventListener("change", (e) => {
    translatePage(e.target.value);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  showRandomShloka();
  setupModeToggle();
  setupAudioToggle();
  setupLanguageSelect();
});