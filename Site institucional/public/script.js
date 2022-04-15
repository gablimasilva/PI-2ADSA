const carouselImgs = document.querySelectorAll('.carouselImg');

let currentSlide = 0;

addDots();

const divDots = document.querySelectorAll('.dots');
divDots[0].classList.add('dotsActive')

const aRight = document.querySelector('.aRight');
const aLeft = document.querySelector('.aLeft');

aRight.addEventListener('click', ()=>{
    changeNextSlide(currentSlide+1)
})

aLeft.addEventListener('click', ()=>{
    chengePreviousSlide(currentSlide-1)
})

function addDots(){
    const carouselDots = document.querySelector('.carouselDots');

    carouselImgs.forEach((e, index)=>{
        let dot = document.createElement('div');
        dot.classList.add('dots');

        dot.addEventListener('click', ()=>{
            changeSlide(index)
        })

        carouselDots.append(dot);
    })
    
}

function changeSlide(slideNumber){

    dotActive = document.querySelector('.dotsActive');
        dotActive.classList.remove('dotsActive');

        divDots[slideNumber].classList.add('dotsActive');

        carouselImgActive = document.querySelector('.carouselImgActive');
        carouselImgActive.classList.remove('carouselImgActive');

        carouselImgs[slideNumber].classList.add('carouselImgActive');

        currentSlide = slideNumber;
}

function changeNextSlide(nextSlide){
    let axNextSlide = nextSlide == carouselImgs.length ? 0:nextSlide

    changeSlide(axNextSlide)
}

function chengePreviousSlide(previousSlide){
    let axPreviousSlide = previousSlide == -1 ? carouselImgs.length-1:previousSlide

    changeSlide(axPreviousSlide)
}