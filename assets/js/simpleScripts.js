'use strict';

/* *** CALL DECLARED FUNCTIONS *** */
togglerMenu();

/* *** FUNCTIONS *** */
function togglerMenu() {
    const hamburgerMenuBtn = document.querySelector('.hamburger-menu');
    const navigation = document.querySelector('.navigation');

    hamburgerMenuBtn.addEventListener('click', function() {
        navigation.classList.toggle('show-links');
    });
}