let recognition = new webkitSpeechRecognition();
recognition.lang = 'ta-IN'; // Specify Tamil language

const tamilWords = ["வணக்கம்", "நன்றி", "எப்படி", "என்ன", "ஆம்"]; // Five basic Tamil words

recognition.onresult = function(event) {
  let transcript = event.results[0][0].transcript;
  document.getElementById('output').innerText = transcript;

  const isMatch = tamilWords.includes(transcript); // Check if spoken word matches any in the list

  if (isMatch) {
    document.getElementById('output').style.color = "green"; // Green for correct match
    document.getElementById('output').textContent += " (சரி)"; // Add "(சரி)" for correct (Tamil for "Correct")
  } else {
    document.getElementById('output').style.color = "red"; // Red for incorrect match
    document.getElementById('output').textContent += " (தவறு)"; // Add "(தவறு)" for incorrect (Tamil for "Incorrect")
  }
};

function startRecognition() {
  recognition.start();
}

function stopRecognition() {
  recognition.stop();
}