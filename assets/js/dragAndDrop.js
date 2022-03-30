'use strict';
/* *** GLOBAL VARIABLES *** */
const totalNumberOfEmptyClasses = 10;

/* *** CALL DECLARED FUNCTIONS *** */
for (let i = 0; i <= totalNumberOfEmptyClasses; i++) {
    dragAndDrop(i);
}

/* *** FUNCTIONS *** */
function dragAndDrop(classNameOfEmptyGroups) {
    // Variables
    const fill = document.querySelector(`.fill-${classNameOfEmptyGroups}`);
    const empties = document.querySelectorAll(`.empty-${classNameOfEmptyGroups}`);
    const parents = document.querySelectorAll('.parent');
    const correctResult = document.querySelector('.correct-result');
    const wrongResult = document.querySelector('.wrong-result');

    for(let j = 0; j <= totalNumberOfEmptyClasses; j++) {
        if(classNameOfEmptyGroups === j) {
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
            } else {
                empty.addEventListener('drop', dragDropWrong);
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
            this.className = ' book draggable-book correct';

            correctResult.classList.remove('hidden');
        }

        function dragDropWrong() {
            this.append(fill);
            this.className = ' book draggable-book wrong';

            wrongResult.classList.remove('hidden');
        }
    }
}