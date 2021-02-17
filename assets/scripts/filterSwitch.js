let filters = document.getElementsByClassName('filters')[0].childNodes[1]
  .childNodes;

filters.forEach((childLi, index) => {
  if (index % 2 !== 0) {
    childLi.onclick = () => {
      filters.forEach((notSelected, i) => {
        if (i % 2 !== 0 && notSelected !== childLi) {
          if (notSelected.classList.contains('active')) {
            notSelected.classList.remove('active');
          }
        }
      });
      if (!childLi.classList.contains('active')) {
        childLi.classList.add('active');
      }
    };
  }
});
