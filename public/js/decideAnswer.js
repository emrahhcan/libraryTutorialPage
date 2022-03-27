'use strict';

/* *** CALL DECLARED FUNCTIONS *** */
decideAnswer();

/* *** FUNCTIONS *** */
function decideAnswer() {
    const book = document.querySelectorAll(".book");
    const jumpStage2 = document.getElementById("jump-stage-2");

    // Text for correct questions
    const correctResult0 = document.getElementById(`correct-0`);
    const correctResult1 = document.getElementById(`correct-1`);
    const correctResult2 = document.getElementById(`correct-2`);
    const correctResult3 = document.getElementById(`correct-3`);
    const correctResult4 = document.getElementById(`correct-4`);
    const correctResult5 = document.getElementById(`correct-5`);
    const correctResult6 = document.getElementById(`correct-6`);
    const correctResult7 = document.getElementById(`correct-7`);
    const correctResult8 = document.getElementById(`correct-8`);
    const correctResult9 = document.getElementById(`correct-9`);

    // Text for wrong questions
    const wrongResult0 = document.getElementById(`wrong-0`);
    const wrongResult1 = document.getElementById(`wrong-1`);
    const wrongResult2 = document.getElementById(`wrong-2`);
    const wrongResult3 = document.getElementById(`wrong-3`);
    const wrongResult4 = document.getElementById(`wrong-4`);
    const wrongResult5 = document.getElementById(`wrong-5`);
    const wrongResult6 = document.getElementById(`wrong-6`);
    const wrongResult7 = document.getElementById(`wrong-7`);
    const wrongResult8 = document.getElementById(`wrong-8`);
    const wrongResult9 = document.getElementById(`wrong-9`);
    
    book.forEach(element => {
        element.addEventListener('click', () => {
            if (book[1] === element) {
                element.classList.add("correct");
                book[0].classList.add("disabled");
                containsUnwanted("correct", 1, "wrong", 0);

                correctTextResult(0);
            }
            else if (book[2] === element) {
                element.classList.add("correct");
                book[3].classList.add("disabled");
                containsUnwanted("correct", 2, "wrong", 3);
                correctTextResult(1, "sfsdfdsf");
                
                correctTextResult(1);
            }
            else if (book[4] === element) {
                element.classList.add("correct");
                book[5].classList.add("disabled");
                containsUnwanted("correct", 4, "wrong", 5);

                correctTextResult(2);
            }
            else if (book[7] === element) {
                element.classList.add("correct");
                book[6].classList.add("disabled");
                containsUnwanted("correct", 7, "wrong", 6);

                correctTextResult(3);
            }
            else if (book[8] === element) {
                element.classList.add("correct");
                book[9].classList.add("disabled");
                containsUnwanted("correct", 8, "wrong", 9);

                correctTextResult(4);
            }
            else if (book[11] === element) {
                element.classList.add("correct");
                book[10].classList.add("disabled");
                containsUnwanted("correct", 11, "wrong", 10);

                correctTextResult(5);
            }
            else if (book[13] === element) {
                element.classList.add("correct");
                book[12].classList.add("disabled");
                containsUnwanted("correct", 13, "wrong", 12);

                correctTextResult(6);
            }
            else if (book[14] === element) {
                element.classList.add("correct");
                book[15].classList.add("disabled");
                containsUnwanted("correct", 14, "wrong", 15);

                correctTextResult(7);
            }
            else if (book[17] === element) {
                element.classList.add("correct");
                book[16].classList.add("disabled");
                containsUnwanted("correct", 17, "wrong", 16);

                correctTextResult(8);
            }
            else if (book[18] === element) {
                element.classList.add("correct");
                book[19].classList.add("disabled");
                
                jumpStage2.classList.remove("hidden");
                
                containsUnwanted("correct", 18, "wrong", 19);

                correctTextResult(9);

            }
            else {
                element.classList.add("wrong");
                
                if(book[19].classList.contains("wrong")) {
                    wrongTestResult(9);
                }
                
                if(book[16].classList.contains("wrong")) {
                    wrongTestResult(8);
                }
                
                if(book[15].classList.contains("wrong")) {
                    wrongTestResult(7);
                }
                
                if(book[12].classList.contains("wrong")) {
                    wrongTestResult(6);
                }
                
                if(book[10].classList.contains("wrong")) {
                    wrongTestResult(5);
                }
                
                if(book[9].classList.contains("wrong")) {
                    wrongTestResult(4);
                }
                
                if(book[6].classList.contains("wrong")) {
                    wrongTestResult(3);
                }
                
                if(book[5].classList.contains("wrong")) {
                    wrongTestResult(2);
                }
                
                if(book[3].classList.contains("wrong")) {
                    wrongTestResult(1);
                }
                
                if(book[0].classList.contains("wrong")) {
                    wrongTestResult(0);
                }
            }
        });
    });

    function containsUnwanted(correctParam, correctBook, wrongParam, wrongBook) {
        if (book[correctBook].classList.contains(correctParam)) {
            book[wrongBook].classList.remove(wrongParam);
        }
    }

    function correctTextResult(idNum) {
        const corrArr = [
            correctResult0,
            correctResult1,
            correctResult2,
            correctResult3,
            correctResult4,
            correctResult5,
            correctResult6,
            correctResult7,
            correctResult8,
            correctResult9,
        ];

        switchFunctionForTestResultId(idNum, "green", corrArr);
        
        wrongResult0.classList.add("hidden");
        wrongResult1.classList.add("hidden");
        wrongResult2.classList.add("hidden");
        wrongResult3.classList.add("hidden");
    }

    function wrongTestResult(idNum) {
        const wrArr = [
            wrongResult0, 
            wrongResult1,
            wrongResult2,
            wrongResult3,
            wrongResult4,
            wrongResult5,
            wrongResult6,
            wrongResult7,
            wrongResult8,
            wrongResult9,
        ];

        switchFunctionForTestResultId(idNum, "maroon", wrArr);
    }

    function switchFunctionForTestResultId(id, textColor, param = []) {
        const result = document.getElementById(`result-${id}`);

        result.style.color = textColor;

        switch (id) {
            case 0:
                param[0].classList.remove("hidden");
                break;
            case 1:
                param[1].classList.remove("hidden");
                break;
            case 2:
                param[2].classList.remove("hidden");
                break;
            case 3:
                param[3].classList.remove("hidden");
                break;
            case 4:
                param[4].classList.remove("hidden");
                break;
            case 5:
                param[5].classList.remove("hidden");
                break;
            case 6:
                param[6].classList.remove("hidden");
                break;
            case 7:
                param[7].classList.remove("hidden");
                break;
            case 8:
                param[8].classList.remove("hidden");
                break;
            case 9:
                param[9].classList.remove("hidden");
                break;
            default:
                break;
        }
    }
}