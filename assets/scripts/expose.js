// expose.js

window.addEventListener('DOMContentLoaded', init);
let sound = "";
let vol = 50;
const jsConfetti = new JSConfetti();

function init() {
  // TODO
  let img = document.getElementsByTagName('img')[0];
  let horn = document.getElementsByName('horn')[0];
  let volume = document.getElementById('volume');
  let speaker = document.getElementsByTagName('img')[1];
  let play = document.getElementsByTagName('button')[0];
  

  horn.addEventListener('change', () => { changeHorn(img, horn.value); });
  volume.addEventListener('input', () => { changeVolume(speaker, volume.value); });
  play.addEventListener('click', () => { playHorn(); })


}

function changeHorn(img, horn) {
  img.src = `../assets/images/${horn}.svg`;
  img.alt = `${horn}`;
  sound = `../assets/audio/${horn}.mp3`;
}

function changeVolume(speaker, volume){
  vol = volume;
  if(vol == 0){
    speaker.src = "../assets/icons/volume-level-0.svg";
    speaker.alt = "volume level 0";
  }
  else if(vol < 33){
    speaker.src = "../assets/icons/volume-level-1.svg";
    speaker.alt = "volume level 1";
  }
  else if(vol < 67){
    speaker.src = "../assets/icons/volume-level-2.svg";
    speaker.alt = "volume level 2";
  }
  else {
    speaker.src = "../assets/icons/volume-level-3.svg";
    speaker.alt = "volume level 3";
  }
}

async function playHorn(){
  if(sound == "") return;
  let audio = new Audio(sound);
  audio.volume = vol/100;

  if(sound.includes("party")){
    jsConfetti.addConfetti({
      emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
      confettiRadius: 12, 
      confettiNumber: 100
    });
  }
  audio.play();
}
