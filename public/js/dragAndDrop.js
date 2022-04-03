'use strict';
/* *** GLOBAL VARIABLES *** */
const totalNumberOfEmptyClasses = 13;
const hidden = 'hidden';
const green = 'green';
const maroon = 'maroon';

/* *** CALL DECLARED FUNCTIONS *** */
for (let i = 0; i <= totalNumberOfEmptyClasses; i++) {
    dragAndDrop(i);
}

/* *** FUNCTIONS *** */
function dragAndDrop(classNumberOfAllElements) {
    // Variables
    const fill = document.querySelector(`.fill-${classNumberOfAllElements}`);
    const empties = document.querySelectorAll(`.empty-${classNumberOfAllElements}`);
    const parents = document.querySelectorAll('.parent');
    const correctResult = document.querySelector(`.correct-result-${classNumberOfAllElements}`);
    const wrongResult = document.querySelector(`.wrong-result-${classNumberOfAllElements}`);

    for(let j = 0; j <= totalNumberOfEmptyClasses; j++) {
        if(classNumberOfAllElements === j) {
            callBackDrag();
        }
    }

    // Functions
    function callBackDrag() {
        // Event Listeners
        fill.addEventListener('dragstart', dragStart);
        fill.addEventListener('dragend', dragEnd);

        for(const empty of empties) {
            empty.addEventListener('dragover', dragOver);
            empty.addEventListener('dragenter', dragEnter);
            empty.addEventListener('dragleave', dragLeave);

            if (!empty.parentElement.classList.contains('uncorrect')) {
                empty.addEventListener('drop', dragDropCorrect);

                correctResult.style.color = green;
            } else {
                empty.addEventListener('drop', dragDropWrong);

                wrongResult.style.color = maroon;
            }
        }

        // Drag Functions
        function dragStart() {
            setTimeout(() => (this.className = 'hidden'), 0);
        }

        function dragEnd() {
            this.className = 'fill';
        }

        function dragOver(e) {
            e.preventDefault();
        }

        function dragEnter(e) {
            e.preventDefault();
            this.className = ' hovered';
        }

        function dragLeave() {
            this.className = ' empty';
        }

        function dragDropCorrect() {
            this.append(fill);
            this.className = ' book draggable-book correct non-clickable';

            correctResult.classList.remove(hidden);
            wrongResult.classList.add(hidden);
        }

        function dragDropWrong() {
            this.append(fill);
            this.className = ' book draggable-book wrong';

            wrongResult.classList.remove(hidden);
            correctResult.classList.add(hidden);
        }
    }
}