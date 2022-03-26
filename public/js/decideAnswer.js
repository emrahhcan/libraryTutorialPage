'use strict';

/* *** CALL DECLARED FUNCTIONS *** */
decideAnswer();

/* *** FUNCTIONS *** */
function decideAnswer() {
    const book = document.querySelectorAll(".book");
    
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
                containsUnwanted("correct", 18, "wrong", 19);

                correctTextResult(9);
            }
            else {
                element.classList.add("wrong");
                
                if(book[0].classList.contains("wrong")) {
            
                    wrongTestResult(0);
                }
                else if(book[3].classList.contains("wrong")) {
                    wrongTestResult(1);
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
        const result = document.getElementById(`result-${idNum}`);

        const correctResults = {
            result0: "Correct 1",
            result1: "Correct 2"
        }

        switch (idNum) {
            case 0:
                result.innerHTML = correctResults.result0;
                break;
            case 1:
                result.innerHTML = correctResults.result1;
                break;
            default:
                break;
        }
    }

    function wrongTestResult(idNum) {
        const result = document.getElementById(`result-${idNum}`);

        result.innerHTML = "You should check the given tip";
    }
}