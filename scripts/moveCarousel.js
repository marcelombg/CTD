// ** DOM ELEMENTS

const buttonRight = document.querySelector('.btn--right');
const buttonLeft = document.querySelector('.btn--left');
const carousel = document.querySelector('.items-carousel');
const listWidth = carousel.getBoundingClientRect().width;

// ** VARIABLES

let position = 0;

// FUNCTIONS

const showArrow = () => {

    // ** RIGHT ARROW
    if(position <= listWidth * 2) {

        buttonRight.style.visibility = 'visible';
    
    } else if(position >= listWidth * 2) {
    
        buttonRight.style.visibility = 'hidden';
    
    }
    
    // ** LEFT ARROW
    if(position <= 0) {

        buttonLeft.style.visibility = 'hidden';

    } else if(position > 0) {

        buttonLeft.style.visibility = 'visible';

    }

};

showArrow();

// ** EVENTS

buttonRight.addEventListener('click', () => {
    
    position += 350 * 3;
    
    carousel.style.right = `${position}px`;

    showArrow();

    return position;

});

buttonLeft.addEventListener('click', () => {

    position -= 350 * 3;

    carousel.style.right = `${position}px`;
    
    showArrow();

    return position;

});