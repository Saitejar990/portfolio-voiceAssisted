function startVoiceCommand() {
  const responseBox = document.getElementById("response");
  const transcriptBox = document.getElementById("transcript");

  if (!('webkitSpeechRecognition' in window)) {
    alert("Your browser doesn't support speech recognition. Try Chrome.");
    return;
  }

  const recognition = new webkitSpeechRecognition();
  recognition.lang = 'en-US';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  responseBox.innerHTML = "🎧 Listening...";

  recognition.start();

  recognition.onresult = function(event) {
    const speech = event.results[0][0].transcript.toLowerCase();
    transcriptBox.innerHTML = `You said: "${speech}"`;
    handleVoiceCommand(speech);
  };

  recognition.onerror = function(event) {
    responseBox.innerHTML = "❌ Error: " + event.error;
  };
}

function handleVoiceCommand(input) {
  const responseBox = document.getElementById("response");

  if (input.includes("linkedin")) {
    responseBox.innerHTML = "Opening LinkedIn...";
    window.open("https://www.linkedin.com/in/sai-teja-reddy-017963255/", "_blank");
  } else if (input.includes("github")) {
    responseBox.innerHTML = "Opening GitHub...";
    window.open("https://github.com/YOURUSERNAME", "_blank");
  } else if (input.includes("resume")) {
    responseBox.innerHTML = "Downloading resume...";
    window.open("Resume(7).pdf", "_blank"); // Replace with real file path
  } else {
    responseBox.innerHTML = "😕 Didn't understand. Try: 'Open GitHub' or 'Download resume'";
  }
}
