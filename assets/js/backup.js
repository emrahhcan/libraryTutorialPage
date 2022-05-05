// /* *** GLOBAL VARIABLES *** */
// const totalNumberOfEmptyClasses = 10;
// const hidden = 'hidden';
// const green = 'green';
// const maroon = 'maroon';
// const lcCodeStr1 = 'HQ72.A2c.2';
// const lcCodeStr2 = 'HQ73.A19G3';

// const lcCodes = [
//     lcCodeStr1,
//     lcCodeStr2
// ];

// // TEST AREA
// // lcCodeValidation();
// // const a = document.getElementById('lc-code-1');
// // let ab = a.textContent;
// // ab = lcCodeStr1;
// // const lowercaseLcCodeStr1 = ab.toLowerCase();

// // // console.log(lowercaseLcCodeStr1);

// // const b = document.getElementById('lc-code-2');
// // let ba = b.textContent;
// // ba = lcCodeStr2;
// // const lowercaseLcCodeStr2 = ba.toLowerCase();

// // console.log(lowercaseLcCodeStr2);

// function lcCodeValidation() {
//     /*
//         The toLowerCase method is used to avoid typo mistakes both in HTML and ...
//         ... JavaScript file.
//     */

//     // Strings for empty boxes
//     const lcCodeStr1 = 'HQ72.A2c.2';
//     const lowercaseLcCodeStr1 = lcCodeStr1.toLowerCase();
//     const lcCodeStr2 = 'HQ73.A19G3';
//     const lowercaseLcCodeStr2 = lcCodeStr2.toLowerCase();
//     const lcCodeStr3 = 'HQ72.A2';
//     const lowercaseLcCodeStr3 = lcCodeStr3.toLowerCase();
//     const lcCodeStr4 = 'HQ72.A18';
//     const lowercaseLcCodeStr4 = lcCodeStr4.toLowerCase();
//     const lcCodeStr5 = 'HQ72.A2c.21988';
//     const lowercaseLcCodeStr5 = lcCodeStr5.toLowerCase();

//     // Strings which are given in Html
//     const lcCodeHtml1 = document.getElementById('lc-code-1');
//     const getLcCodeHtmlStr1 = lcCodeHtml1.textContent;
//     const getLcCodeCorrectStr1 = getLcCodeHtmlStr1.substring(53, 63);

//     const lcCodeHtml2 = document.getElementById('lc-code-2');
//     const getLcCodeHtmlStr2 = lcCodeHtml2.textContent;
//     const getLcCodeCorrectStr2 = getLcCodeHtmlStr2.substring(53, 63);

//     const lcCodeHtml3 = document.getElementById('lc-code-3');
//     const getLcCodeHtmlStr3 = lcCodeHtml3.textContent;
//     const getLcCodeCorrectStr3 = getLcCodeHtmlStr3.substring(53, 60);

//     const lcCodeHtml4 = document.getElementById('lc-code-4');
//     const getLcCodeHtmlStr4 = lcCodeHtml4.textContent;
//     const getLcCodeCorrectStr4 = getLcCodeHtmlStr4.substring(53, 61);

//     const lcCodeHtml5 = document.getElementById('lc-code-5');
//     const getLcCodeHtmlStr5 = lcCodeHtml5.textContent;
//     const getLcCodeCorrectStr5 = getLcCodeHtmlStr5.substring(53, 67);

//     if(getLcCodeCorrectStr1 === lcCodeStr1) {
//         console.log('Code 1 Ok');
//         lcCodeHtml1.parentNode.style.display = hidden;
//     }
    
//     if(getLcCodeCorrectStr2 === lcCodeStr2) {
//         console.log('Code 2 Ok');
//     }
    
//     if(getLcCodeCorrectStr3 === lcCodeStr3) {
//         console.log('Code 3 Ok');
//     }
    
//     if(getLcCodeCorrectStr4 === lcCodeStr4) {
//         console.log('Code 4 Ok');
//     }
    
//     if(getLcCodeCorrectStr5 === lcCodeStr5) {
//         console.log('Code 5 Ok');
//     }

// }

// // TEST AREA

// /* *** CALL DECLARED FUNCTIONS *** */
// for (let i = 0; i <= totalNumberOfEmptyClasses; i++) {
//     sortableDragAndDrop(i);
// }

// /* *** FUNCTIONS *** */
// function sortableDragAndDrop(classNumberOfAllElements) {
//     // Variables
//     let fills = document.querySelectorAll('.fill');
//     let empties = document.querySelectorAll('.empty-' + classNumberOfAllElements);
//     const correctResult = document.querySelector('.correct-result-' + classNumberOfAllElements);
//     const wrongResult = document.querySelector('.wrong-result-' + classNumberOfAllElements);

//     for (let j = 0; j <= totalNumberOfEmptyClasses; j++) {
//         if(classNumberOfAllElements === j) {
//             callBackDragForSortable();
//         }
//     }

//     // Functions
//     function callBackDragForSortable() {
//         fills.forEach((card)=>{
//             registerEventsOnCard(card);
//         });

//         for (let i = 0; i < empties.length; i++) {
//             empties[i].addEventListener('dragover', (e) => {
//                 // empties[0].textContent = lowercaseLcCodeStr1;

//                 e.preventDefault();

//                 let draggingCard = document.querySelector('.dragging');
//                 let cardAfterDraggingCard = getCardAfterDraggingCard(empties[i], e.clientY);

//                 if(cardAfterDraggingCard){
//                     cardAfterDraggingCard.parentNode.insertBefore(draggingCard, cardAfterDraggingCard);
//                 } else {
//                     // let some = fills[0].textContent.substring(203, 213).toLowerCase();
//                     const a = document.getElementById('code-1');
//                     const a1 = a.textContent;
                    
//                     // console.log(some);
//                     console.log(a.textContent);

//                     //console.log(lcCodes[0]);

//                     if (a1 === lcCodes[0]) {
//                         empties[i].style.border = '5px solid green';
//                     } else {
//                         fills[i].style.border = '5px solid maroon';
//                     }

//                     // if (fills[1].textContent.substring(203, 213) !== lcCodes[1]) {
//                     //     empties[1].style.border = '2px solid green';
//                     // } else {
//                     //     empties[1].style.border = '2px solid maroon';
//                     // }

//                 }
                
//             });
//         }

//         // empties.forEach((list)=>{
//         //     list.addEventListener('dragover', (e)=>{
//         //         e.preventDefault();
                
//         //         let draggingCard = document.querySelector('.dragging');
//         //         let cardAfterDraggingCard = getCardAfterDraggingCard(list, e.clientY);

//         //         if(cardAfterDraggingCard){
//         //             cardAfterDraggingCard.parentNode.insertBefore(draggingCard, cardAfterDraggingCard);
//         //             console.log('Test');
//         //         } else {
//         //             list.appendChild(draggingCard);
                    
//         //             // if (list.classList.contains('lc-code-1')) {
//         //             //     dragDropCorrect(fills[0], draggingCard);
//         //             // } else if (list.classList.contains('lc-code-2')) {
//         //             //     dragDropWrong(fills[1], draggingCard);
//         //             // }
//         //             // const lcCodeStr1 = 'HQ72.A2c.2';
//         //             // const lowercaseLcCodeStr1 = lcCodeStr1.toLowerCase();
//         //             // let a = document.getElementById('empty-1');
//         //             // let ab = a.textContent;
//         //             // ab = lowercaseLcCodeStr1;
                    
//         //             // const lcCodeHtml1 = document.getElementById('lc-code-1');
//         //             // const getLcCodeHtmlStr1 = lcCodeHtml1.textContent;
//         //             // const getLcCodeCorrectStr1 = getLcCodeHtmlStr1.substring(53, 63);
//         //             // const lower = getLcCodeCorrectStr1.toLowerCase();

//         //             // // console.log(lower);
//         //             // let a = list.textContent;
//         //             // let ab = a.substring(203, 213);
//         //             // let abc = ab.toLowerCase();

//         //             // console.log(abc);
  
//         //             // if(abc.textContent === lower.textContent) {
//         //             //     list.appendChild(draggingCard);
//         //             // }

                    

//         //             // const getLcCodeHtmlStr1 = fills[0].textContent;
//         //             // const getLcCodeCorrectStr1 = getLcCodeHtmlStr1.substring(203, 213);
//         //             // const lowerCaseLcCodeCorrectStr1 = getLcCodeCorrectStr1.toLowerCase();

//         //             // if(e0 === lowerCaseLcCodeCorrectStr1) {
//         //             //     dragDropCorrect(list, draggingCard);
//         //             // } else {
//         //             //     dragDropWrong(list, draggingCard);
//         //             // }
                    
                   
//         //         }
//         //     });
//         // });

//         function getCardAfterDraggingCard(list, yDraggingCard){

//             let listCards = [...list.querySelectorAll('.fill:not(.dragging)')];

//             return listCards.reduce((closestCard, nextCard)=>{
//                 let nextCardRect = nextCard.getBoundingClientRect();
//                 let offset = yDraggingCard - nextCardRect.top - nextCardRect.height /2;

//                 if(offset < 0 && offset > closestCard.offset){
//                     return {offset, element: nextCard}
//                 } else{
//                     return closestCard;
//                 }
            
//             }, {offset: Number.NEGATIVE_INFINITY}).element;

//         }

//         function registerEventsOnCard(card){
//             card.addEventListener('dragstart', (e)=>{
//                 card.classList.add('dragging');
//             });


//             card.addEventListener('dragend', (e)=>{
//                 card.classList.remove('dragging');
//             });
//         }

//         function dragDropCorrect(destination, item) {
//             destination.appendChild(item);
//             destination.className = ' draggable-book correct non-clickable';

//             correctResult.classList.remove(hidden);
//             wrongResult.classList.add(hidden);
//         }

//         function dragDropWrong(destination, item) {
//             destination.appendChild(item);
//             destination.className = ' draggable-book wrong';

//             correctResult.classList.add(hidden);
//             wrongResult.classList.remove(hidden);
//         }
//     }
// }