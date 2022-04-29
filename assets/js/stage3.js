'use strict';
/* *** GLOBAL VARIABLES *** */

dragAndDropSt3();

function dragAndDropSt3() {
    const fills = document.querySelectorAll('.fill-1');
    const empties = document.querySelectorAll('.empty-1');
    const parents = document.querySelectorAll('.parent');

    for (const fill of fills) {
        fill.addEventListener('dragstart', dragStart);
        fill.addEventListener('dragend', dragEnd);

        for (const empty of empties) {
            empty.addEventListener('dragover', dragOver);
            empty.addEventListener('dragenter', dragEnter);
            empty.addEventListener('dragleave', dragLeave);
            empty.addEventListener('drop', dragDrop);
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
    
    function dragDrop() {
        this.append(fills[0]);
        this.className = ' book draggable-book';
    }
}