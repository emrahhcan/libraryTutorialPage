'use strict';

sortableDragAndDrop(1, 
  'a', 'HQ72.A2', 
  'b', 'HQ72.A2c.2', 
  'c', 'HQ72.A2c.21988', 
  'd', 'HQ72.A18', 
  'e', 'HQ73.A19G3');

  sortableDragAndDrop(2, 
  'f', 'Q284.2.L94', 
  'g', 'Q284.2.R17', 
  'h', 'Q284.2.R2', 
  'i', 'Q284.3.K94', 
  'j', 'Q284.3.K94x');

  sortableDragAndDrop(3, 
  'k', 'Q284.2.L94', 
  'l', 'Q284.2.R17', 
  'm', 'Q284.2.R2', 
  'n', 'Q284.3.K94', 
  'o', 'Q284.3.K94x');

  sortableDragAndDrop(4, 
  'p', 'Q284.2.L94', 
  'r', 'Q284.2.R17', 
  's', 'Q284.2.R2', 
  't', 'Q284.3.K94', 
  'u', 'Q284.3.K94x');

  sortableDragAndDrop(5, 
  'v', 'Q284.2.L94', 
  'y', 'Q284.2.R17', 
  'z', 'Q284.2.R2', 
  'w', 'Q284.3.K94', 
  'x', 'Q284.3.K94x');

  sortableDragAndDrop(6, 
  'v', 'Q284.2.L94', 
  'y', 'Q284.2.R17', 
  'z', 'Q284.2.R2', 
  'w', 'Q284.3.K94', 
  'x', 'Q284.3.K94x');

  sortableDragAndDrop(7, 
  'v', 'Q284.2.L94', 
  'y', 'Q284.2.R17', 
  'z', 'Q284.2.R2', 
  'w', 'Q284.3.K94', 
  'x', 'Q284.3.K94x');

  sortableDragAndDrop(8, 
  'v', 'Q284.2.L94', 
  'y', 'Q284.2.R17', 
  'z', 'Q284.2.R2', 
  'w', 'Q284.3.K94', 
  'x', 'Q284.3.K94x');

  sortableDragAndDrop(9, 
  'v', 'Q284.2.L94', 
  'y', 'Q284.2.R17', 
  'z', 'Q284.2.R2', 
  'w', 'Q284.3.K94', 
  'x', 'Q284.3.K94x');

  sortableDragAndDrop(10, 
  'v', 'Q284.2.L94', 
  'y', 'Q284.2.R17', 
  'z', 'Q284.2.R2', 
  'w', 'Q284.3.K94', 
  'x', 'Q284.3.K94x');

function sortableDragAndDrop(questionNumber, 
  bookName1, lcCode1, 
  bookName2, lcCode2, 
  bookName3, lcCode3, 
  bookName4, lcCode4, 
  bookName5, lcCode5) {
  const draggableList = document.getElementById('draggable-list-' + questionNumber);
  const check = document.getElementById('check-' + questionNumber);

  const bookNames = [
    bookName1,
    bookName2,
    bookName3,
    bookName4,
    bookName5,
  ]
  const lcCodes = [
    lcCode1,
    lcCode2,
    lcCode3,
    lcCode4,
    lcCode5,
  ];

  const listItems = [];

  let dragStartIndex;

  // Call the defined function
  createList();

  // Insert list items into DOM
  function createList() {
    [...lcCodes]
      .map(a => ({ value: a, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort) // Without parameter it's gonna sort 
                                      // based on string e.g. => .sort()
      .map(a => a.value)
      .forEach((lcCode, index) => {
        const listItem = document.createElement('li');

        listItem.setAttribute('data-index', index);

        listItem.innerHTML = `
          <div class="draggable" draggable="true">
              <div class="book book-color-${index+1}-st3 draggable-book">
                  <div class="book-name">${bookNames[index]}</div>
                  <div class="lc-code-test">
                      <h3>${lcCode}</h3>
                  </div>
              </div>
          </div>
        `;

        listItems.push(listItem);

        draggableList.appendChild(listItem);
      });

    addEventListeners();
  }

  function dragStart() {
    // console.log('Event: ', 'dragstart');
    dragStartIndex = +this.closest('li').getAttribute('data-index');
  }

  function dragEnter() {
    this.classList.add('hovered');
  }

  function dragLeave() {
    this.classList.remove('hovered');
  }

  function dragOver(e) {
    e.preventDefault();
  }

  function dragDrop() {
    // console.log('Event: ', 'drop');
    const dragEndIndex = +this.getAttribute('data-index');
    swapItems(dragStartIndex, dragEndIndex);

    this.classList.remove('hovered');
  }

  // Swap list items that are drag and drop
  function swapItems(fromIndex, toIndex) {
    const itemOne = listItems[fromIndex].querySelector('.draggable');
    const itemTwo = listItems[toIndex].querySelector('.draggable');

    listItems[fromIndex].appendChild(itemTwo);
    listItems[toIndex].appendChild(itemOne);
  }

  // Check the order of list items
  function checkOrder() {
    listItems.forEach((listItem, index) => {
      const code = listItem.querySelector('.draggable').innerText.substr(2, 40).trim();

      console.log(code.split(''));
      
      if (code !== lcCodes[index]) {
        listItem.classList.add('wrong');

      } else {
        listItem.classList.remove('wrong');
        listItem.classList.add('correct', 'disabled', 'non-clickable');

      }
    });
  }

  function addEventListeners() {
    const draggables = document.querySelectorAll('.draggable');
    const dragListItems = document.querySelectorAll(`.draggable-list-${questionNumber} li`);

    draggables.forEach(draggable => {
      draggable.addEventListener('dragstart', dragStart);
    });

    dragListItems.forEach(item => {
      item.addEventListener('dragover', dragOver);
      item.addEventListener('drop', dragDrop);
      item.addEventListener('dragenter', dragEnter);
      item.addEventListener('dragleave', dragLeave);
    });
  }

  check.addEventListener('click', checkOrder);
}