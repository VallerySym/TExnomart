// Личный кабинет

const loginButton = document.querySelector('.login-button');
const closeButton = document.querySelector('.close-login-button');
const popup = document.querySelector('.login-popup-one');

loginButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    popup.classList.add('is-open');
});

closeButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    popup.classList.remove('is-open');
});

document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
        evt.preventDefault();
        popup.classList.remove('is-open');
    }
});

const loginButtonTwo = document.querySelector('.login-button-name');
const closeButtonTwo = document.querySelector('.close-login-button-two');
const popupTwo = document.querySelector('.login-popup-two');

loginButtonTwo.addEventListener('click', (evt) => {
    evt.preventDefault();
    popupTwo.classList.add('is-open');
});

closeButtonTwo.addEventListener('click', (evt) => {
    evt.preventDefault();
    popupTwo.classList.remove('is-open');
});

document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
        evt.preventDefault();
        popupTwo.classList.remove('is-open');
    }
});

// // Поиск

// const input = document.querySelector(".search-input");

// input.addEventListener("click", (evt) => {
//     const condition ="Поиск по сайту";
//     input.placeholder = condition;
// });

// document.addEventListener('keydown', (evt) => {
//     if (evt.key === 'Escape') {
//         const condition ="Поиск: ";
//         input.placeholder = condition;
//     }
// });


// Слайдер 

const sliderButtons = document.querySelectorAll('.slider-pagination-button');
const sliderCards = document.querySelectorAll('.slider-item');

const sliderButtonNext = document.querySelector('.next-slide-button');
const sliderButtonPrev = document.querySelector('.prev-slider-button');

let slideIndex = 0;

sliderButtons.forEach((button, index) => {
    button.addEventListener('click', (evt) => {
        evt.preventDefault();
        slideIndex = index;
        document.querySelector('.slider-pagination-button.is-active').classList.remove('is-active');
        document.querySelector('.slider-item.is-active').classList.remove('is-active');
        button.classList.add('is-active');
        sliderCards[index].classList.add('is-active');
    });
})

sliderButtonNext.addEventListener('click', (evt) => {
    evt.preventDefault();
    sliderButtons[slideIndex].classList.remove('is-active');
    sliderCards[slideIndex].classList.remove('is-active');
    if (slideIndex === sliderButtons.length - 1) {
        slideIndex = 0;
    } else {
        slideIndex = slideIndex + 1;
    }
    sliderButtons[slideIndex].classList.add('is-active');
    sliderCards[slideIndex].classList.add('is-active');
});

sliderButtonPrev.addEventListener('click', (evt) => {
    evt.preventDefault();
    sliderButtons[slideIndex].classList.remove('is-active');
    sliderCards[slideIndex].classList.remove('is-active');
    if (!slideIndex) {
        slideIndex = sliderButtons.length - 1;
    } else {
        slideIndex = slideIndex - 1;
    }
    sliderButtons[slideIndex].classList.add('is-active');
    sliderCards[slideIndex].classList.add('is-active');
});
