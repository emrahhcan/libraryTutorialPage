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

        const correctResults = {
            result0: "You got this chief!",
            result1: "You got this chief!",
            result2: "You got this chief! 'Letters before numbers', so the .M in the Cutter Line comes before .65",
            result3: "You got this chief! It's sometimes easy to overlook the Letter Line when you have a large collection of books.",
            result4: "You got this chief! You are remembering the 'Nothing before something' rule.",
            result5: "You got this chief!",
            result6: "You got this chief!",
            result7: "You got this chief!",
            result8: "You got this chief!",
            result9: "You got this chief!"
        }

        switchFunctionForTestResultId(correctResults, idNum, "green");
    }

    function wrongTestResult(idNum) {

        const wrongResults = {
            result0: "This is a tough one. Remember, when you see a letter in the Cutter Line, envision that letter starting on the next line down.",
            result1: "Sorry - Remember to read each digit seperately in the Cutter Line. In this case the 2 (in .M263) comes before 3 (in .M3).",
            result2: "Sorry - Remember 'Letters before numbers'. Try again.",
            result3: "Try again! Look closely at the entire call number.",
            result4: "Incorrect! Don't forget two of the most basic Library of Congress rules - that the Cutter Line is digit-by-digit, and 'Nothing before something'.",
            result5: "Sorry! Remember to read EACH line.",
            result6: "Wrong! Make sure you treat the second line as a whole number (467 is less than 674).",
            result7: "Try again. HV comes before HX.",
            result8: "Wrong! Remember, the second line is treated as a whole number - 143 is less than 1421.",
            result9: "Try again! If a number on the third line looks like a year and has no decimal or letter in front of it, shelve it before anything else on the third line."
        }

        switchFunctionForTestResultId(wrongResults, idNum, "maroon");
    }

    function switchFunctionForTestResultId(resultParameter, id, textColor) {
        const result = document.getElementById(`result-${id}`);

        result.style.color = textColor;

        switch (id) {
            case 0:
                result.innerHTML = resultParameter.result0;
                break;
            case 1:
                result.innerHTML = resultParameter.result1;
                break;
            case 2:
                result.innerHTML = resultParameter.result2;
                break;
            case 3:
                result.innerHTML = resultParameter.result3;
                break;
            case 4:
                result.innerHTML = resultParameter.result4;
                break;
            case 5:
                result.innerHTML = resultParameter.result5;
                break;
            case 6:
                result.innerHTML = resultParameter.result6;
                break;
            case 7:
                result.innerHTML = resultParameter.result7;
                break;
            case 8:
                result.innerHTML = resultParameter.result8;
                break;
            case 9:
                result.innerHTML = resultParameter.result9;
                break;
            default:
                break;
        }
    }
}