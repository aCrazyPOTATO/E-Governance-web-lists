const micButton = document.getElementById("micButton");
const micIcon = document.getElementById("micIcon");
const micPath = document.getElementById("micPath");
const listeningIndicator = document.getElementById("listeningIndicator");

const recognition = new webkitSpeechRecognition() || new SpeechRecognition();
recognition.lang = "en-US";
recognition.continuous = false;
recognition.interimResults = false;

let isListening = false;

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

recognition.onstart = () => {
  isListening = true;
  micIcon.classList.add("text-red-500");
  micPath.classList.add("text-red-500");
};

recognition.onresult = (event) => {
  const result = event.results[0][0].transcript;
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
