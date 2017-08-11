//-- Get elements --
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelector('[data-skip]');
const range = player.querySelector('.player__slider');

//-- functions --
// make play and pause video (es5)
function toggleplay(){
  if(video.paused){
    video.play();
  }else{
    video.pause();
  }
}

// make update play and pause buttons
function updateButton(){
  // console.log("update button");
  // this === video
  const icon = this.paused ? '▶' : '▮▮';
  toggle.textContent = icon;
}

function skip(){
  console.log(this.dataset.skip);
  video.currentTime += parseFloat(this.dataset.skip);
}

//-- event listeners --
// when click on the screen function toggleplay is started
video.addEventListener('click', toggleplay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
toggle.addEventListener('click', toggleplay);
skipButtons.forEach(button => button.addEventListener('click', skip));
