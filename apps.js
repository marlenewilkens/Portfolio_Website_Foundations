const slideshowContainer = document.querySelector('.slide-img');
const slideshowImages = document.querySelectorAll('.slide-img img');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;
const size = slideshowImages[0].clientWidth;

slideshowContainer.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click',() => {
    if (counter >= slideshowImages.length - 1) return;
    slideshowContainer.style.transition = "transform 0.5s ease-in-out";
    counter++; 
    slideshowContainer.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click',()=>{
    if (counter <= 0) return;
    slideshowContainer.style.transition = "transform 0.5s ease-in-out";
    counter--; 
    slideshowContainer.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

slideshowContainer.addEventListener('transitionend',()=>{
    if (slideshowImages[counter].id === 'last') {
        slideshowContainer.style.transition = "none";
        counter = slideshowImages.length - 2;
        slideshowContainer.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (slideshowImages[counter].id === 'first') {
        slideshowContainer.style.transition = "none";
        counter = slideshowImages.length - counter;
        slideshowContainer.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});