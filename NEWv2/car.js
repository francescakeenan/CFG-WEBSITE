const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

//slides[0].style.left = slideWidth*0 +'px';
//slides[1].style.left=slideWidth*1 +'px';
//slides[2].style.left=slideWidth*2+'px';
//slides[3].style.left=slideWidth*3+'px';
//slides[4].style.left=slideWidth*4+'px';
const setSlidePosition = (slide,index)=> {
    slide.style.left=slideWidth*index+'px';
}

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform='translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');   
}

prevButton.addEventListener('click', e=> {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;

    moveToSlide(track, currentSlide, prevSlide)
})

nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;

   moveToSlide(track, currentSlide, nextSlide); 
   
})
