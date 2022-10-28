// explore.js

window.addEventListener('DOMContentLoaded', init);
const synth = window.speechSynthesis;
let voices = [];

function init() {
  // TODO
  
  let button = document.getElementsByTagName('button')[0];

  synth.addEventListener('voiceschanged', loadVoices);
  button.addEventListener('click', speak);
}

function loadVoices(){
  voices = synth.getVoices();
  voices.forEach((voice)=> {
    let select = document.getElementById('voice-select');
    var option = document.createElement('option');
    option.text = voice.name;
    select.add(option);
  })
}

function speak(){
  let text = document.getElementById('text-to-speak');
  let utterThis = new SpeechSynthesisUtterance(text.value);
  let voice = document.getElementById('voice-select').value;
  let img = document.getElementsByTagName('img')[0];
  
  for (let i = 0; i < voices.length ; i++) {
    if (voices[i].name === voice) {
      utterThis.voice = voices[i];
      break;
    }
  }

  utterThis.addEventListener('start', () => {
    img.src = '../assets/images/smiling-open.png';
    img.alt = 'Smiling face with open mouth'; 
  });

  utterThis.addEventListener('end', () => { 
    img.src = '../assets/images/smiling.png';
    img.alt = 'Smiling face';
  });

  synth.speak(utterThis);
}
