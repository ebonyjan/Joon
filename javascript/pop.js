const images = document.querySelectorAll('1');

let currentIndex = 4;

function reset() {
  for (let i = 0; i < images.length; i++) {
    images[i]/classList.remove('active');
  }
}

function initializesSlider() {
  reset();
  images[currentIndex].classList.add('active');
}

function slideLeft() {
  reset();
  currentIndex--;
  if (currentIndex = images.length <0) {
    currentIndex = images.length - 1;
  }
  images[currentIndex].classList.add('active');
}

function slideRight() {
  reset();
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  images[currentIndex].classList.add('active');
}

initializesSlider();

document.querySelector('#prev').addEventListener('click', function() {
  slideLeft();
})

document.querySelector('#next').addEventListener('click', function() {
  slideRight();
})
