'use strict';

/* *** GLOBAL VARIABLES *** */
// Variables for General Purposes
const languages = document.querySelector(".languages");
const languageLinks = document.querySelectorAll(".lang-btn");
const tr = document.getElementById("tr");
const en = document.getElementById("en");
// Browser window title
const webTitleHtml = document.querySelector(".web-title");
// Variables for Elements in Header
const dateHtml = document.querySelector(".date");
const libraryNameHtml1 = document.getElementById("library-name-1");
const libraryNameHtml2 = document.getElementById("library-name-2");
const libraryNameHtml3 = document.getElementById("library-name-3");
const libraryNames = [libraryNameHtml1, libraryNameHtml2, libraryNameHtml3];
const libraryLogoHtml = document.getElementById("library-logo");
// Variables for Elements in Content of Tutorial (Index) Page
const tutorialTitleHtml = document.getElementById("tutorial-title");
const firstStageBtnHtml = document.getElementById("first-stage-btn");
const secondStageBtnHtml = document.getElementById("second-stage-btn");
const thirdStageBtnHtml = document.getElementById("third-stage-btn");
const forthStageBtnHtml = document.getElementById("forth-stage-btn");
const tutorialIntroHtml = document.getElementById("tutorial-intro");

/* *** VARIABLES FOR STRINGS WHICH WILL CHANGE THE LANGUAGE *** */
// English Strings
const webTitleEng = webTitleHtml.textContent;
const libraryLogoEng = "assets/image/kutuphane_logo_en.png";
const libraryNameEng = "Library";
const dateEng = dateHtml.textContent;
const tutorialTitleEng = tutorialTitleHtml.textContent;
const firstStageEng = firstStageBtnHtml.textContent;
const secondStageEng = secondStageBtnHtml.textContent;
const thirdStageEng = thirdStageBtnHtml.textContent;
const forthStageEng = forthStageBtnHtml.textContent;
const tutorialIntroEng = tutorialIntroHtml.textContent;

// Turkish Strings
const webTitleTr = "Eğitim | Kütüphane İstanbul Bilgi Üniversitesi";
const libraryLogoTr = "assets/image/kutuphane_logo_tr.png";
const libraryNameTr = "Kütüphanesi";
const dateTr = "Bugün";
const tutorialTitleTr = "Kongre Kütüphanesi Eğitimi - Etiket ve Raf Sistemi";
const firstStageTr = "Eğitim"
const secondStageTr = "1. Aşama"
const thirdStageTr = "2. Aşama"
const forthStageTr = "3. Aşama"
const tutorialIntroTr = `Aşağıda, Kongre Kütüphanes etiket numaralarının sıralandığı kuralları okuduktan sonra, 
                        kuralların uygulanışını gösteren animasyonlu bir örneği izleyebilirsiniz. 
                        Ve sayfanın altında sizi, Kongre Kütüphanesi kurallarını anladığınızı 
                        test edebileceğiniz testlere götüren bir bağlantı var.`

// JS object for languages in the pages
let contentLanguage = {
    "english": {
        "webTitle": webTitleEng,
        "libraryLogo": libraryLogoEng,
        "libraryName": libraryNameEng,
        "date": dateEng,
        "tutorialTitle": tutorialTitleEng,
        "firstStage": firstStageEng,
        "secondStage": secondStageEng,
        "thirdStage": thirdStageEng,
        "forthStage": forthStageEng,
        "tutorialIntro": tutorialIntroEng,
    },
    "turkish": {
        "webTitle": webTitleTr,
        "libraryLogo": libraryLogoTr,
        "libraryName": libraryNameTr,
        "date": dateTr,
        "tutorialTitle": tutorialTitleTr,
        "firstStage": firstStageTr,
        "secondStage": secondStageTr,
        "thirdStage": thirdStageTr,
        "forthStage": forthStageTr,
        "tutorialIntro": tutorialIntroTr,
    }
}

/* *** EVENT LISTENERS *** */
languageLinks.forEach(choosen => {
    choosen.addEventListener("click", () => {
        exchangeButton(choosen, tr, en);

        const attribute = choosen.getAttribute("language");
        const content = contentLanguage[attribute];
        
        // Call the defined function/s below
        changeLanguage();

        // Functions if needed
        function changeLanguage() {
            webTitleHtml.innerHTML = content.webTitle;
            dateHtml.innerHTML = content.date;
            iterateLibraryNames();
            libraryLogoHtml.src = content.libraryLogo;
            tutorialTitleHtml.innerHTML = content.tutorialTitle;
            firstStageBtnHtml.innerHTML = content.firstStage;
            secondStageBtnHtml.innerHTML = content.secondStage;
            thirdStageBtnHtml.innerHTML = content.thirdStage;
            forthStageBtnHtml.innerHTML = content.forthStage;
            tutorialIntroHtml.innerHTML = content.tutorialIntro;
        }

        function iterateLibraryNames() {
            for (let i = 0; i < libraryNames.length; i++) {
                libraryNames[i].innerHTML = content.libraryName;
            }
        }
    });
});

/* *** FUNCTIONS *** */
function exchangeButton(choice, firstLang, secondLang) {
    if (choice === firstLang) {
            firstLang.classList.add("hidden");
            secondLang.classList.remove("hidden");
    } 
    else {
            secondLang.classList.add("hidden");
            firstLang.classList.remove("hidden");
    }
}