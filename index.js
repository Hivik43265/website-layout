let slideIndex = 1;
let x = 0;
let slides = document.getElementsByClassName("slide");

showSlides(x);

function nextSlide() {
    if(x != (-(slides.length-1)*1155)){
        showSlides(x += -1155)
    }
}

function previousSlide() {
    if(x !=0){
         showSlides(x += 1155)
    }
}

function showSlides(x) {
    for (let slide of slides) {
            slide.style.transform = `translateX(${x}px)`;
    }
}


