'use strict';

/*
 * The method called toLowerCase is used to avoid typo mistakes both in HTML and ...
 * ... JavaScript file below within checkOrder method. Therefore, the LC Codes ...
 * ... which are defined as parameters below might be typed lowercase as well, ...
 * ... It is not going to cause any error or mistake e.g., HQ72 = hq72
 * 
 * <br> tag wihtin sortableDragAndDrop is used to have a better view on client ...
 * ... side (HTML), it depends on personal preferences to add it or not. ...
 * ... Functionality will not change.
 * 
 * FUTURE TODO FOR DEVELOPER: Pass the parameters in sortableDragAndDrop function ...
 * ... with a correct order you would like to see given below.
 */

sortableDragAndDrop(1, 
  'Sortable Book', 'HQ<br>72<br>.A2', 
  'Sortable Book', 'HQ<br>72<br>.A2<br>c.2', 
  'Sortable Book', 'HQ<br>72<br>.A2<br>c.2<br>1988', 
  'Sortable Book', 'HQ<br>72<br>.A18', 
  'Sortable Book', 'HQ<br>73<br>.A19<br>G3');

  sortableDragAndDrop(2, 
  'Sortable Book', 'Q<br>284.2<br>.L94', 
  'Sortable Book', 'Q<br>284.2<br>.R17', 
  'Sortable Book', 'Q<br>284.2<br>.R2', 
  'Sortable Book', 'Q<br>284.3<br>.K94', 
  'Sortable Book', 'Q<br>284.3<br>.K94x');

  sortableDragAndDrop(3, 
  'Sortable Book', 'HB<br>102<br>.B6',
  'Sortable Book', 'HB<br>103<br>.B5', 
  'Sortable Book', 'HC<br>100<br>.B53<br>A9', 
  'Sortable Book', 'HD<br>97<br>.A33', 
  'Sortable Book', 'HD<br>101<br>.B52', );

  sortableDragAndDrop(4, 
  'Sortable Book', 'J<br>133<br>.J32<br>1948', 
  'Sortable Book', 'J<br>133<br>.S3<br>c.2', 
  'Sortable Book', 'J<br>133<br>.S33<br>1950', 
  'Sortable Book', 'J<br>133<br>.S42<br>1954', 
  'Sortable Book', 'J<br>133<br>.S5<br>1954');

  sortableDragAndDrop(5, 
  'Sortable Book', 'RC<br>793<br>.B73<br>1967', 
  'Sortable Book', 'RC<br>793<br>.K75<br>1965', 
  'Sortable Book', 'RC<br>793<br>.19<br>.A8N5', 
  'Sortable Book', 'RC<br>793.2<br>.A6C4', 
  'Sortable Book', 'RC<br>793.2<br>.A7C4<br>1963');

  sortableDragAndDrop(6, 
  'Sortable Book', 'ND<br>6108<br>.M263', 
  'Sortable Book', 'ND<br>6108<br>.M3', 
  'Sortable Book', 'ND<br>6108<br>.M3A6', 
  'Sortable Book', 'ND<br>6108<br>.M3<br>.A7', 
  'Sortable Book', 'ND<br>6109<br>.M5<br>1999');

  sortableDragAndDrop(7, 
  'Sortable Book', 'QA<br>71<br>.R65', 
  'Sortable Book', 'QA<br>76<br>.H184', 
  'Sortable Book', 'QA<br>76<br>.H184<br>c.2', 
  'Sortable Book', 'QA<br>76<br>.3<br>.B2x', 
  'Sortable Book', 'QA<br>76<br>.3<br>.B23');

  sortableDragAndDrop(8, 
  'Sortable Book', 'PS<br>118.6<br>.B1<br>1966<br>c.2', 
  'Sortable Book', 'PS<br>118<br>.6<br>.B19', 
  'Sortable Book', 'PS<br>119<br>.45<br>.N93v.3', 
  'Sortable Book', 'PS<br>119<br>.5', 
  'Sortable Book', 'PS<br>119<br>.51');

  sortableDragAndDrop(9, 
  'Sortable Book', 'ND<br>893<br>.D317<br>1989', 
  'Sortable Book', 'ND<br>894<br>.B45', 
  'Sortable Book', 'NK<br>894<br>.A13', 
  'Sortable Book', 'NK<br>894<br>.C35<br>1988', 
  'Sortable Book', 'NK<br>894<br>.C35x');

  sortableDragAndDrop(10, 
  'Sortable Book', 'BS<br>497<br>.A2', 
  'Sortable Book', 'BS<br>497<br>.A3', 
  'Sortable Book', 'BS<br>497<br>.A315', 
  'Sortable Book', 'BS<br>497<br>.A32', 
  'Sortable Book', 'BS<br>497<br>.B54');

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
    const correct = 'correct';
    const wrong = 'wrong';
    const disabled = 'disabled';
    const nonClickable = 'non-clickable';

    let correctArr = [];
    let wrongArr = [];

    listItems.forEach((listItem, index) => {
      let numberOfCorrects = document.getElementById('correct');
      let numberOfWrongs = document.getElementById('wrong');
      const code = listItem.querySelector('.draggable').innerText.substr(13, 40).trim().split('\n').join('');
      const lowerCaseCode = code.toLowerCase();
      
      const correctLcCode = lcCodes[index].split('<br>').join('');
      const lowerCaseCorrectLcCode = correctLcCode.toLowerCase();

      const lcCodeValidation = (lowerCaseCode !== lowerCaseCorrectLcCode);
  
      if (lcCodeValidation) {
        listItem.classList.add(wrong);

        counter(listItem, wrong, lowerCaseCode, wrongArr, numberOfWrongs);
        
        if (wrongArr.length === 5) {
          numberOfCorrects.innerText = '0';
        }

      } else {
        listItem.classList.remove(wrong);
        listItem.classList.add(correct, disabled, nonClickable);

        counter(listItem, correct, lowerCaseCode, correctArr, numberOfCorrects);

        if (correctArr.length > 3) {
          numberOfWrongs.innerText = '0';
        }
      }
    });
  }

  function counter(parent, param, parentParam, arr, label) {
    if (parent.classList.contains(param)) {
      arr.push(parentParam);
          
      for(let i = 0; i < arr.length; i++) {
        if (arr.length === arr[i]) {
          label.innerText = arr.length.toString(); 
        } else {
          label.innerText = arr.length.toString(); 
        }
      }
    }
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
