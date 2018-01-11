'use strict';

let leftArrow = document.querySelector('.left-arrow svg');
let rightArrow = document.querySelector('.right-arrow svg');
let pictures = document.querySelectorAll('img');
let mainPicture = document.querySelector('.main-image');
let source;

const currentPicture = mainPicture.getElementsByTagName('img')[0];
let currentPictureIndex = 0;

for (let i = 0; i < pictures.length; i++) {
  pictures[i].addEventListener('click', function(event) {
    source = pictures[i].getAttribute('src');
    currentPicture.setAttribute('src', source);
    currentPictureIndex = [i];
  });
}

function nextPic() {
  if (currentPictureIndex === 8) {
    currentPictureIndex = 1;
    let source = pictures[currentPictureIndex].getAttribute('src');
    currentPicture.setAttribute('src', source);
  } else if (currentPictureIndex === 0) {
    currentPictureIndex = 2;
    let source = pictures[currentPictureIndex].getAttribute('src');
    currentPicture.setAttribute('src', source);
  } else {
    currentPictureIndex++;
    let source = pictures[currentPictureIndex].getAttribute('src');
    currentPicture.setAttribute('src', source);
  }
}

function prevPic() {
  if (currentPictureIndex === 1) {
    currentPictureIndex = 8;
    let source = pictures[currentPictureIndex].getAttribute('src');
    currentPicture.setAttribute('src', source);
  } else {
    currentPictureIndex--;
    let source = pictures[currentPictureIndex].getAttribute('src');
    currentPicture.setAttribute('src', source);
  }
}

rightArrow.addEventListener('click', nextPic);
leftArrow.addEventListener('click', prevPic);


function checkKey(e) {  
  e = e || window.event;

  if (e.keyCode == '37') {
    prevPic();
  }
  else if (e.keyCode == '39') {
    nextPic();
  }  
}

document.onkeydown = checkKey;
