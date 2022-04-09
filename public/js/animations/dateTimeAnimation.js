'use strict';

/* *** CALL DECLARED FUNCTIONS *** */
dateTimeAnimation();

/* *** FUNCTIONS *** */
function dateTimeAnimation() {
    const libraryInfo = document.querySelectorAll(".library-info");

    for (let i = 0; i < libraryInfo.length; i++) {
        hideLibrary("none", "flex", "none", 2000);
        hideLibrary("none", "none", "flex", 4000);
        hideLibrary("flex", "none", "none", 6000);
    }

    // Functions for dateTimeAnimation Func.
    function hideLibrary(dolapdereHidden, kustepeHidden, santralHidden, timerForHeader) {
        setInterval(() => {
            libraryInfo[0].style.display = dolapdereHidden;
            libraryInfo[1].style.display = kustepeHidden;
            libraryInfo[2].style.display = santralHidden;
        }, timerForHeader);
    }
};