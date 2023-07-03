// WRITE YOUR CODE HERE

const images = document.querySelectorAll('#slider img');


let currentIndex = 0;


function reset() {
  for (let i = 0; i < images.length; i++) {
    images[i].classList.remove('active');
  }
}


function initializeSlider() {
  reset();
  images[currentIndex].classList.add('active');
}


function slideLeft() {
  reset();
  currentIndex--;
  if (currentIndex < 0) {
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


initializeSlider();


document.querySelector('#prev').addEventListener('click', function() {
  slideLeft();
});


document.querySelector('#next').addEventListener('click', function() {
  slideRight();
});


