'use strict';

/* *** CALL DEFINED FUNCTIONS *** */
getCurrentDay();

/* *** FUNCTIONS *** */
function getCurrentDay() {
    const todayText = document.getElementById(".date");
    const dolapdereWorkingHours = document.getElementById("dolapdere-time");
    const kustepeWorkingHours = document.getElementById("kustepe-time");
    const santralWorkingHours = document.getElementById("santral-time");
    const saturday = "Saturday";
    const sunday = "Sunday";

    var event = new Date();
    var options = { weekday: 'long' };
    var currentDay = event.toLocaleDateString('en-TR', options);

    if(currentDay === saturday || currentDay === sunday) {
        santralWorkingHours.innerHTML = "10:00 – 17:00";
        dolapdereWorkingHours.innerHTML = "Closed";
        kustepeWorkingHours.innerHTML = "Closed";
    }
}