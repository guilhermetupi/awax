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

pointers.forEach((pointer, index) => {
  pointer.onclick = () => {
    let deactivatedPointers = pointers.filter(
      (notPointer) => notPointer !== pointer
    );
    deactivatedPointers.forEach((deactivatedPointer) => {
      if (deactivatedPointer.classList.contains('active')) {
        deactivatedPointer.classList.remove('active');
      }
    });
    if (!pointer.classList.contains('active')) {
      pointer.classList.add('active');
    }
    slides.forEach((slide, i) => {
      index === i
        ? (slide.style.display = 'block')
        : (slide.style.display = 'none');
    });
  };
});
