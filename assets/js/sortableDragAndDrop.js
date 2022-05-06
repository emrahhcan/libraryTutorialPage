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
  'Of Human Bondage', 'HQ<br>72<br>.A2', 
  'Vanity Fair', 'HQ<br>72<br>.A2<br>c.2', 
  'The Waste Land', 'HQ<br>72<br>.A2<br>c.2<br>1988', 
  'Dying of The Light', 'HQ<br>72<br>.A18', 
  'The Line of Beauty', 'HQ<br>73<br>.A19<br>G3');

  sortableDragAndDrop(2, 
  'This Side of Paradise', 'Q<br>284.2<br>.L94', 
  'Of Mice and Men', 'Q<br>284.2<br>.R17', 
  'A Thousand Splendid Suns', 'Q<br>284.2<br>.R2', 
  'Nectar In a Sieve', 'Q<br>284.3<br>.K94', 
  'No Country For Old Men', 'Q<br>284.3<br>.K94x');

  sortableDragAndDrop(3, 
  'Kıskanmak', 'HB<br>102<br>.B6',
  'İnce Memed', 'HB<br>103<br>.B5', 
  'Kara Kitap', 'HC<br>100<br>.B53<br>A9', 
  'Anayurt Oteli', 'HD<br>97<br>.A33', 
  'Puslu Kıtalar Atlası', 'HD<br>101<br>.B52', );

  sortableDragAndDrop(4, 
  'Sevgili Arsız Ölüm', 'J<br>133<br>.J32<br>1948', 
  'Tehlikeli Oyunlar', 'J<br>133<br>.S3<br>c.2', 
  'Dokuzuncu Hariciye Koğuşu', 'J<br>133<br>.S33<br>1950', 
  'Saatleri Ayarlama Enstitüsü', 'J<br>133<br>.S42<br>1954', 
  'Huzur', 'J<br>133<br>.S5<br>1954');

  sortableDragAndDrop(5, 
  'Ancient Greek Language', 'RC<br>793<br>.B73<br>1967', 
  'History of Spanish Grammar', 'RC<br>793<br>.K75<br>1965', 
  'English Language Skills Police', 'RC<br>793<br>.19<br>.A8N5', 
  'Advanced Turkish', 'RC<br>793.2<br>.A6C4', 
  'Language and Scottish Literature', 'RC<br>793.2<br>.A7C4<br>1963');

  sortableDragAndDrop(6, 
  'Dil Tarih Kültür', 'ND<br>6108<br>.M263', 
  'Tarih Toplum ve İnanç', 'ND<br>6108<br>.M3', 
  'Sinema Tarih Yazımı', 'ND<br>6108<br>.M3A6', 
  'Tarih Boyunca Para Sistemleri', 'ND<br>6108<br>.M3<br>.A7', 
  'Tarih Öncesi Çağlar', 'ND<br>6109<br>.M5<br>1999');

  sortableDragAndDrop(7, 
  'The A to Z Sweden', 'QA<br>71<br>.R65', 
  '20th Century Photography', 'QA<br>76<br>.H184', 
  'Abbreviatur<br> - <br>Einfach', 'QA<br>76<br>.H184<br>c.2', 
  '1862-1893', 'QA<br>76<br>.3<br>.B2x', 
  'Access to History', 'QA<br>76<br>.3<br>.B23');

  sortableDragAndDrop(8, 
  'Dream Town', 'PS<br>118.6<br>.B1<br>1966<br>c.2', 
  'Beautiful', 'PS<br>118<br>.6<br>.B19', 
  'Run, Rose, Run', 'PS<br>119<br>.45<br>.N93v.3', 
  'The İnvestigator', 'PS<br>119<br>.5', 
  'Sea of Tranquility', 'PS<br>119<br>.51');

  sortableDragAndDrop(9, 
  'Kilis Hatıralarım', 'ND<br>893<br>.D317<br>1989', 
  'Zamansız', 'ND<br>894<br>.B45', 
  'Türk Kağanlığı', 'NK<br>894<br>.A13', 
  'Yabancı', 'NK<br>894<br>.C35<br>1988', 
  'İnsanlar', 'NK<br>894<br>.C35x');

  sortableDragAndDrop(10, 
  'Actual Minds, Possible Words', 'BS<br>497<br>.A2', 
  'Advances in Group Processes', 'BS<br>497<br>.A3', 
  'Basic Psychology', 'BS<br>497<br>.A315', 
  'Chaos and Complexity', 'BS<br>497<br>.A32', 
  'Cumulative Record', 'BS<br>497<br>.B54');

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
      const code = listItem.querySelector('.draggable').innerText.substr(2, 40).trim().split('\n').join('');
      const lowerCaseCode = code.toLowerCase();
      
      const correctLcCode = lcCodes[index].split('<br>').join('');
      const lowerCaseCorrectLcCode = correctLcCode.toLowerCase();

      // console.log(lowerCaseCode, lowerCaseCorrectLcCode);
      
      if (lowerCaseCode !== lowerCaseCorrectLcCode) {
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