'use strict';

/* *** CALL DECLARED FUNCTIONS *** */
dateTimeAnimation();
playAnimation();

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

function playAnimation() {
    // Global Variables for playAnimation Func.
    const btnPlay = document.querySelector(".play-animation");
    const animationBox = document.querySelector(".code-animation");
    const plyAniDescription = document.querySelector(".play-animation-description");
    const firstLetterCode = document.querySelector(".letter-code-1");
    const firstNumberLine = document.querySelector(".number-line-1");
    const firstDecimalPart = document.querySelector(".decimal-part-1");
    const secondLetterCode = document.querySelector(".letter-code-2");
    const secondNumberLine = document.querySelector(".number-line-2");
    const secondCutterLine = document.querySelector(".cutter-line-2");
    const thirdLetterCode = document.querySelector(".letter-code-3");
    const thirdNumberLine = document.querySelector(".number-line-3");
    const thirdCutterLine = document.querySelector(".cutter-line-3");
    const thirdVolumeLine = document.querySelector(".volume-line-3");
    const forthLetterCode = document.querySelector(".letter-code-4");
    const forthNumberLine = document.querySelector(".number-line-4");
    const forthCutterLine = document.querySelector(".cutter-line-4");
    const forthVolumeLine = document.querySelector(".volume-line-4");
    const forthCopyLine = document.querySelector(".copy-line-4");
    const inst1_1 = document.querySelector(".inst-1-1");
    const inst1_2 = document.querySelector(".inst-1-2");
    const inst1_3 = document.querySelector(".inst-1-3");
    const inst2_1 = document.querySelector(".inst-2-1");
    const inst3_1 = document.querySelector(".inst-3-1");
    const inst3_2 = document.querySelector(".inst-3-2");
    const inst4_1 = document.querySelector(".inst-4-1");
    const code1 = document.querySelector(".code-1");
    const code2 = document.querySelector(".code-2");
    const code3 = document.querySelector(".code-3");
    const code4 = document.querySelector(".code-4");
    const code5 = document.querySelector(".code-5");
    const instruction = document.querySelector(".instructions-1");
    const instruction2 = document.querySelector(".instructions-2");
    const instruction3 = document.querySelector(".instructions-3");
    const instruction4 = document.querySelector(".instructions-4");
    const completedMessageBox = document.querySelector(".complete-animation");
    
    let clickCount = 0;

    // Event Listeners for playAnimation Func.
    btnPlay.addEventListener("click", () => {
        clickCount++;

        switch (clickCount) {
            case 1:
                btnPlay.innerHTML = "Continue Animation";
                plyAniDescription.classList.add("hidden");
                animationBox.classList.remove("hidden");

                showLsCode(firstLetterCode, inst1_1, 100);
                showLsCode(firstNumberLine, inst1_2, 500);
                showLsCode(firstDecimalPart, inst1_3, 1000);

                break;
            case 2:
                code1.classList.add("hidden");
                instruction.classList.add("hidden");

                code2.classList.remove("hidden");
                instruction2.classList.remove("hidden");

                secondLetterCode.classList.remove("hidden");
                secondNumberLine.classList.remove("hidden");
                showLsCode(secondCutterLine, inst2_1, 500);

                break;
            case 3:
                code2.classList.add("hidden");
                instruction2.classList.add("hidden");

                code3.classList.remove("hidden");
                instruction3.classList.remove("hidden");
                
                thirdLetterCode.classList.remove("hidden");
                thirdNumberLine.classList.remove("hidden");
                thirdCutterLine.classList.remove("hidden");
                showLsCode(thirdVolumeLine, inst3_1, 500);
                
                code4.classList.remove("hidden");
                showLsCode(forthLetterCode, inst3_2, 1000);
                showLsCode(forthNumberLine, inst3_2, 1500);
                showLsCode(forthCutterLine, inst3_2, 2000);
                showLsCode(forthVolumeLine, inst3_2, 2500);
                showLsCode(forthCopyLine, inst3_2, 3000);
                
                break;
            case 4:
                instruction3.classList.add("hidden");
                instruction4.classList.remove("hidden");

                showLsCode(code3, inst4_1, 500);
                showLsCode(code4, inst4_1, 500);
                showLsCode(code5, inst4_1, 500);
                break;
            default:
                animationBox.classList.add("hidden");
                instruction4.classList.add("hidden");
                btnPlay.classList.add("hidden");
                completedMessageBox.classList.remove("hidden");

                animationCompleted();
                break;
        }
    });
    
    // Functions for playAnimation Func.
    function showLsCode(lsCode, inst, timerForAnimation) {
        setInterval(() => {
            lsCode.classList.remove("hidden");
            inst.classList.remove("hidden");
        }, timerForAnimation);

        if (timerForAnimation) {
            clearInterval(timerForAnimation);
            timerForAnimation = null;
        }
    }

    function animationCompleted() {
        const completedMessage = document.querySelector(".completed-text");
        const strCompletedMessage = completedMessage.textContent;
        const splitCompletedMessage = strCompletedMessage.split("");

        completedMessage.textContent = "";

        for (let i = 0; i < splitCompletedMessage.length; i++) {
            completedMessage.innerHTML += "<span>" + splitCompletedMessage[i] + "</span>";
        }

        let char = 0;
        let timer = setInterval(onTick, 50);

        // Functions for animationCompleted Func.
        function onTick() {
            const span = completedMessage.querySelectorAll("span")[char];
            
            span.classList.add("fade");
            char++;

            if (char === splitCompletedMessage.length) {
                complete();
                return;
            }
        }

        function complete() {
            clearInterval(timer);
            timer = null;
        }

    }
}