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
  'k', 'HB102.B6',
  'l', 'HB103.B5', 
  'm', 'HC100.B53A9', 
  'n', 'HD97.A33', 
  'o', 'HD101.B52', );

  sortableDragAndDrop(4, 
  'p', 'J133.J321948', 
  'r', 'J133.S3c.2', 
  's', 'J133.S331950', 
  't', 'J133.S421954', 
  'u', 'J133.S51954');

  sortableDragAndDrop(5, 
  'v', 'RC793.B731967', 
  'y', 'RC793.K751965', 
  'z', 'RC793.19.A8N5', 
  'w', 'RC793.2.A6C4', 
  'x', 'RC793.2.A7C41963');

  sortableDragAndDrop(6, 
  'v', 'ND6108.M263', 
  'y', 'ND6108.M3', 
  'z', 'ND6108.M3A6', 
  'w', 'ND6108.M3.A7', 
  'x', 'ND6109.M51999');

  sortableDragAndDrop(7, 
  'v', 'QA71.R65', 
  'y', 'QA76.H184', 
  'z', 'QA76.H184c.2', 
  'w', 'QA76.3.B2x', 
  'x', 'QA76.3.B23');

  sortableDragAndDrop(8, 
  'v', 'PS118.6.B11966c.2', 
  'y', 'PS118.6.B19', 
  'z', 'PS119.45.N93v.3', 
  'w', 'PS119.5', 
  'x', 'PS119.51');

  sortableDragAndDrop(9, 
  'v', 'ND893.D3171989', 
  'y', 'ND894.B45', 
  'z', 'NK894.A13', 
  'w', 'NK894.C351988', 
  'x', 'NK894.C35x');

  sortableDragAndDrop(10, 
  'v', 'BS497.A2', 
  'y', 'BS497.A3', 
  'z', 'BS497.A315', 
  'w', 'BS497.A32', 
  'x', 'BS497.B54');

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
    dragStartIndex = +this.closest('li').getAttribute('data-index');
  }

  function dragEnter() {
    this.classList.add('over');
  }

  function dragLeave() {
    this.classList.remove('over');
  }

  function dragOver(e) {
    e.preventDefault();
  }

  function dragDrop() {
    // console.log('Event: ', 'drop');
    const dragEndIndex = +this.getAttribute('data-index');
    swapItems(dragStartIndex, dragEndIndex);

    this.classList.remove('over');
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