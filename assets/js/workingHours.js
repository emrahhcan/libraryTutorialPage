'use strict';

getCurrentDay();

function getCurrentDay() {
    const dolapdereWorkingHours = document.getElementById("dolapdere-time");
    const kustepeWorkingHours = document.getElementById("kustepe-time");
    const santralWorkingHours = document.getElementById("santral-time");
    const saturday = "Saturday";
    const sunday = "Sunday";

    var event = new Date();
    var options = { weekday: 'long' };
    var currentDay = event.toLocaleDateString('en-TR', options);

    console.log(currentDay);

    if (currentDay === saturday || currentDay === sunday) {
        dolapdereWorkingHours.innerHTML = "Closed";
        kustepeWorkingHours.innerHTML = "Closed";
        santralWorkingHours.innerHTML = "10:00 – 17:00";
    }
}