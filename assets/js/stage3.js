/* *** GLOBAL VARIABLES *** */
const totalNumberOfEmptyClasses = 10;
const hidden = 'hidden';
const green = 'green';
const maroon = 'maroon';

/* *** CALL DECLARED FUNCTIONS *** */
for (let i = 0; i <= totalNumberOfEmptyClasses; i++) {
    sortableDragAndDrop(i);
}

/* *** FUNCTIONS *** */
function sortableDragAndDrop(classNumberOfAllElements) {
    // Variables
    let fills = document.querySelectorAll('.fill');
    let empties = document.querySelectorAll('.empty-' + classNumberOfAllElements);
    const correctResult = document.querySelector('.correct-result-' + classNumberOfAllElements);
    const wrongResult = document.querySelector('.wrong-result-' + classNumberOfAllElements);

    for (let j = 0; j <= totalNumberOfEmptyClasses; j++) {
        if(classNumberOfAllElements === j) {
            callBackDragForSortable();
        }
    }

    // Functions
    function callBackDragForSortable() {
        fills.forEach((card)=>{
            registerEventsOnCard(card);
        });

        empties.forEach((list)=>{
            list.addEventListener('dragover', (e)=>{
                e.preventDefault();
                let draggingCard = document.querySelector('.dragging');
                let cardAfterDraggingCard = getCardAfterDraggingCard(list, e.clientY);
                if(cardAfterDraggingCard){
                        cardAfterDraggingCard.parentNode.insertBefore(draggingCard, cardAfterDraggingCard);
                } else{
                    // dragDropWrong(list, draggingCard);
                    list.appendChild(draggingCard);
                }
                
            });
        });

        function getCardAfterDraggingCard(list, yDraggingCard){

            let listCards = [...list.querySelectorAll('.fill:not(.dragging)')];

            return listCards.reduce((closestCard, nextCard)=>{
                let nextCardRect = nextCard.getBoundingClientRect();
                let offset = yDraggingCard - nextCardRect.top - nextCardRect.height /2;

                if(offset < 0 && offset > closestCard.offset){
                    return {offset, element: nextCard}
                } else{
                    return closestCard;
                }
            
            }, {offset: Number.NEGATIVE_INFINITY}).element;

        }

        function registerEventsOnCard(card){
            card.addEventListener('dragstart', (e)=>{
                card.classList.add('dragging');
            });


            card.addEventListener('dragend', (e)=>{
                card.classList.remove('dragging');
            });
        }

        function dragDropCorrect(destination, item) {
            destination.appendChild(item);
            destination.className = ' book draggable-book correct non-clickable';

            correctResult.classList.remove(hidden);
            wrongResult.classList.add(hidden);
        }

        function dragDropWrong(destination, item) {
            destination.appendChild(item);
            destination.className = ' book draggable-book wrong';

            correctResult.classList.remove(hidden);
            wrongResult.classList.add(hidden);
        }
    }
}