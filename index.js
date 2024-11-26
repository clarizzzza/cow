const image = document.getElementById('image');
const clickCountElement = document.getElementById('click-count');


let clickCount = 0;


image.addEventListener('click', () => {
  
    image.classList.toggle('enlarged');

  
    clickCount++;


    clickCountElement.textContent = clickCount;
});
