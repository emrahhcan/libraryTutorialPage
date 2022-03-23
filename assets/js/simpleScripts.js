'use strict';

/* *** CALL DECLARED FUNCTIONS *** */
togglerMenu();
correctAnswer();

/* *** FUNCTIONS *** */
function togglerMenu() {
    const hamburgerMenuBtn = document.querySelector('.hamburger-menu');
    const navigation = document.querySelector('.navigation');

    hamburgerMenuBtn.addEventListener('click', function() {
        navigation.classList.toggle('show-links');
    });
}

function correctAnswer() {
    const book = document.querySelectorAll(".book");

    book.forEach(element => {
        element.addEventListener('click', () => {
            if(
                (book[1] === element) || 
                (book[2] === element) || 
                (book[4] === element) || 
                (book[7] === element) || 
                (book[8] === element) || 
                (book[11] === element) || 
                (book[13] === element) || 
                (book[14] === element) || 
                (book[17] === element) || 
                (book[18] === element)
            ) {
                element.classList.add("correct");
            } 
            else {
                element.classList.add("wrong");
            }
        });
    });
}