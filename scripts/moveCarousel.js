// ** DOM ELEMENTS

const buttonRight = document.querySelectorAll('.btn--right');
const buttonLeft = document.querySelectorAll('.btn--left');
const carousel = document.querySelector('.items-carousel');
const listWidth = carousel.getBoundingClientRect().width;

// ** VARIABLES

let position = 0;

// FUNCTIONS

const showArrow = (arrow) => {

    // ** RIGHT ARROW
    if(position <= listWidth * 2) {

        arrow.style.visibility = 'visible';
    
    } else if(position >= listWidth * 2) {
    
        arrow.style.visibility = 'hidden';
    
    }
    
    // ** LEFT ARROW
    if(position <= 0) {

        arrow.style.visibility = 'hidden';

    } else if(position > 0) {

        arrow.style.visibility = 'visible';

    }

};

// showArrow();

// ** EVENTS

buttonRight.forEach(e => {

    e.addEventListener('click', () => {
            
        let carousel = e.previousElementSibling;

        if(position <= listWidth * 2) {
            
            position += listWidth;

            carousel.style.right = `${position}px`;

        }
    
        // showArrow(e);
        
        // return position;
    
    });

});

buttonLeft.forEach(e => {

    e.addEventListener('click', () => {

        let carousel = e.nextElementSibling;
    
        if(position >= 1000) {

            position -= listWidth;

            carousel.style.right = `${position}px`;

        }
        
        // showArrow(e);
    
        // return position;
    
    });

});