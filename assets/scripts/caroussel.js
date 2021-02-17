let pointers = [
  document.getElementById('first'),
  document.getElementById('second'),
  document.getElementById('third'),
];
let slides = [
  document.getElementById('firstSlide'),
  document.getElementById('secondSlide'),
  document.getElementById('thirdSlide'),
];

let time = 0,
  newSlider = 0,
  actualSlider = 0;

let carrouselInterval = setInterval(() => {
  if (actualSlider === newSlider) {
    actualSlider < 2 ? ++actualSlider : (actualSlider = 0);
    newSlider = actualSlider;
    changeCarrousel();
    carrouselInterval;
  } else {
    actualSlider = newSlider;
    changeCarrousel();
    carrouselInterval;
  }
}, 4000);

carrouselInterval;

pointers.forEach((pointer, index) => {
  pointer.onclick = () => {
    newSlider = index;
    time = 0;
    if (actualSlider === newSlider) {
      actualSlider < 2 ? ++actualSlider : (actualSlider = 0);
      newSlider = actualSlider;
      changeCarrousel();
      carrouselInterval;
    } else {
      actualSlider = newSlider;
      changeCarrousel();
      carrouselInterval;
    }
  };
});

setInterval;

function changeCarrousel() {
  let deactivatedPointers = pointers.filter(
    (notPointer) => notPointer !== pointers[actualSlider]
  );
  deactivatedPointers.forEach((deactivatedPointer) => {
    if (deactivatedPointer.classList.contains('active')) {
      deactivatedPointer.classList.remove('active');
    }
  });
  if (!pointers[actualSlider].classList.contains('active')) {
    pointers[actualSlider].classList.add('active');
  }
  slides.forEach((slide, i) => {
    newSlider === i
      ? (slide.style.display = 'block')
      : (slide.style.display = 'none');
  });
}
