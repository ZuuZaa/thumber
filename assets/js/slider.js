const previousButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const currentSlide = document.querySelector(".current-slide");
const slideDots = document.querySelector(".slide-dots");

let slideIndex = 1;

const showSlide = () => {
    currentSlide.style.background = `url('./images/img_${slideIndex}.jpg.webp') no-repeat center/cover`;
    document.querySelectorAll(".image-dot").forEach((dot, index) => {
        dot.id == `dot-${slideIndex}` 
        ? dot.classList.add("active-dot")
        : dot.classList.remove("active-dot")
    })
}

const imageClickHandler = (e)=> {
    slideIndex = e.target.value;
    showSlide();
}

const previous = () => {
    slideIndex >1 ? slideIndex-- : slideIndex = 10;
    showSlide();
}
const next = () => {
    
    slideIndex <10 ? slideIndex++ : slideIndex = 1;
    showSlide();
}
const slider = ()=>{
    slideIndex <10 ? slideIndex++ : slideIndex = 1;
    showSlide();
}

for(let i=1; i<=10; i++) {
    const imageDot = document.createElement("div");
    imageDot.style.background = `url('./images/img_${i}.jpg.webp') no-repeat center/cover`;
    imageDot.classList.add("image-dot");
    imageDot.id = `dot-${i}`;
    imageDot.value = i;
    imageDot.addEventListener("click", imageClickHandler)
    slideDots.append(imageDot);
}

showSlide(slideIndex);
setInterval(slider, 5000)

previousButton.addEventListener("click", previous)
nextButton.addEventListener("click", next)

