const micButton = document.getElementById("micButton");
const micIcon = document.getElementById("micIcon");
const micPath = document.getElementById("micPath");
const listeningIndicator = document.getElementById("listeningIndicator");
const recognition = new webkitSpeechRecognition() || new SpeechRecognition();
recognition.lang = "en-US";
recognition.continuous = false;
recognition.interimResults = false;
let isListening = false;

if (micButton) {
  micButton.addEventListener("click", () => {
    if (recognition && recognition.start) {
      if (isListening) {
        recognition.stop();
      } else {
        recognition.start();
        showListeningIndicator();
      }
    }
  });
}

recognition.onstart = () => {
  isListening = true;
  micIcon.classList.add("text-red-500");
  micPath.classList.add("text-red-500");
};

recognition.onresult = (event) => {
  let result = event.results[0][0].transcript;
  // Remove trailing fullstop/period if present
  if (result.endsWith(".")) {
    result = result.slice(0, -1);
  }
  document.getElementById("voice-search").value = result;
  hideListeningIndicator();
};

recognition.onerror = (event) => {
  console.error("Speech recognition error:", event.error);
  hideListeningIndicator();
};

recognition.onend = () => {
  console.log("Speech recognition ended");
  isListening = false;
  hideListeningIndicator();
};

function showListeningIndicator() {
  listeningIndicator.classList.remove("hidden");
}

function hideListeningIndicator() {
  micIcon.classList.remove("text-red-500");
  micPath.classList.remove("text-red-500");
  listeningIndicator.classList.add("hidden");
}

//NAV BAR PHONE

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggleButton");
  const navbarSticky = document.getElementById("navbar-sticky");

  toggleButton.addEventListener("click", function () {
    navbarSticky.classList.toggle("hidden");
  });
});
