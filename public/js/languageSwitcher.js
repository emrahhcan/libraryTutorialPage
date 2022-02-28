// 'use strict';

/* *** GLOBAL VARIABLES *** */
// Variables for General Purposes
const languages = document.querySelector(".languages");
const languageLinks = document.querySelectorAll(".lang-btns");
const tr = document.getElementById("tr");
const en = document.getElementById("en");
const tr1 = document.getElementById("tr-1");
const en1 = document.getElementById("en-1");
// // Browser window title
// const webTitleHtml = document.querySelector(".web-title");
// // Variables for Elements in Header
// const dateHtml = document.querySelector(".date");
// const libraryNameHtml1 = document.getElementById("library-name-1");
// const libraryNameHtml2 = document.getElementById("library-name-2");
// const libraryNameHtml3 = document.getElementById("library-name-3");
// const libraryNames = [libraryNameHtml1, libraryNameHtml2, libraryNameHtml3];
// const libraryLogoHtml = document.getElementById("library-logo");
// // Variables for Elements in Content of Tutorial (Index) Page
// const tutorialTitleHtml = document.getElementById("tutorial-title");
// const firstStageBtnHtml = document.getElementById("first-stage-btn");
// const secondStageBtnHtml = document.getElementById("second-stage-btn");
// const thirdStageBtnHtml = document.getElementById("third-stage-btn");
// const forthStageBtnHtml = document.getElementById("forth-stage-btn");
// const tutorialIntroHtml = document.getElementById("tutorial-intro");
// const tutorialListHtml0 = document.getElementById("tutorial-list-0");
// const tutorialListHtml1 = document.getElementById("tutorial-list-1");
// const tutorialListHtml2 = document.getElementById("tutorial-list-2");
// const tutorialListHtml3 = document.getElementById("tutorial-list-3");
// const tutorialListHtml4 = document.getElementById("tutorial-list-4");
// const tutorialListHtml5 = document.getElementById("tutorial-list-5");
// const tutorialListHtml6 = document.getElementById("tutorial-list-6");
// const tutorialListHtml7 = document.getElementById("tutorial-list-7");
// const tutorialListHtml8 = document.getElementById("tutorial-list-8");
// const tutorialListHtml9 = document.getElementById("tutorial-list-9");
// const tutorialListHtml10 = document.getElementById("tutorial-list-10");
// const tutorialListHtml11 = document.getElementById("tutorial-list-11");
// const playAnimationDescriptionHtml = document.querySelector(".play-animation-description");
// const playAnimationHtml = document.querySelector(".play-animation");
// const startTestHtml = document.getElementById("start-test");
// const instHtml1_1 = document.querySelector(".inst-1-1");
// const instHtml1_2 = document.querySelector(".inst-1-2");
// const instHtml1_3 = document.querySelector(".inst-1-3");
// const instHtml2_1 = document.querySelector(".inst-2-1");
// const instHtml3_1 = document.querySelector(".inst-3-1");
// const instHtml3_2 = document.querySelector(".inst-3-2");
// const instHtml4_1 = document.querySelector(".inst-4-1");
// const completedTextHtml = document.querySelector(".completed-text");
// // Variables for Elements in Footer and Nav
// const navHomeHtml = document.getElementById("nav-home");
// const researchHtml = document.getElementById("research");
// const databasesHtml = document.getElementById("databases");
// const reservesHtml = document.getElementById("reserves");
// const eJournalsHtml = document.getElementById("e-Journals");
// const classicsHtml = document.getElementById("classics");
// const openAccessHtml = document.getElementById("open-access");
// const kpyCollectionHtml = document.getElementById("kpy-collection");
// const euInfoHtml = document.getElementById("eu-info");
// const hrCollectionHtml = document.getElementById("hr-collection");
// const heCollectionHtml = document.getElementById("he-collection");
// const arrivalsHtml = document.getElementById("arrivals");
// const servicesHtml = document.getElementById("services");
// const borrowingHtml = document.getElementById("borrowing");
// const articleProcessingHtml = document.getElementById("article-processing");
// const collectionDevelopmentHtml = document.getElementById("collection-development");
// const illHtml = document.getElementById("ill");
// const reserveRequestHtml = document.getElementById("reserve-request");
// const internshipHtml = document.getElementById("internship");
// const supportHtml = document.getElementById("support");
// const libraryInstructionHtml = document.getElementById("library-instruction");
// const libraryGuidesHtml = document.getElementById("library-guides");
// const askHtml = document.getElementById("ask");
// const offCampusHtml = document.getElementById("off-campus");
// const faqHtml = document.getElementById("faq");
// const aboutHtml = document.getElementById("about");
// const libraryHtml = document.getElementById("the-library");
// const contactHtml = document.getElementById("contact");
// const rulesHtml = document.getElementById("rules");
// const teamHtml = document.getElementById("team");
// const hoursHtml = document.getElementById("hours");
// const alumniHtml = document.getElementById("alumni");
// const externalUsersHtml = document.getElementById("external-users");
// const membershipHtml = document.getElementById("membership");
// const copyrightHtml = document.getElementById("copyright");
// const outcomesHtml = document.getElementById("outcomes");
// const newsHtml = document.getElementById("news");

// /* *** VARIABLES FOR STRINGS WHICH WILL CHANGE THE LANGUAGE *** */
// // English Strings
// const webTitleEng = webTitleHtml.textContent;
// const libraryLogoEng = "image/kutuphane_logo_en.png";
// const libraryNameEng = "Library";
// const dateEng = dateHtml.textContent;
// const tutorialTitleEng = tutorialTitleHtml.textContent;
// const firstStageEng = firstStageBtnHtml.textContent;
// const secondStageEng = secondStageBtnHtml.textContent;
// const thirdStageEng = thirdStageBtnHtml.textContent;
// const forthStageEng = forthStageBtnHtml.textContent;
// const tutorialIntroEng = tutorialIntroHtml.textContent;
// const tutorialListEng0 = tutorialListHtml0.textContent;
// const tutorialListEng1 = tutorialListHtml1.textContent;
// const tutorialListEng2 = tutorialListHtml2.textContent;
// const tutorialListEng3 = tutorialListHtml3.textContent;
// const tutorialListEng4 = tutorialListHtml4.textContent;
// const tutorialListEng5 = tutorialListHtml5.textContent;
// const tutorialListEng6 = tutorialListHtml6.textContent;
// const tutorialListEng7 = tutorialListHtml7.textContent;
// const tutorialListEng8 = tutorialListHtml8.textContent;
// const tutorialListEng9 = tutorialListHtml9.textCont
// const tutorialListEng10 = tutorialListHtml10.textContent;
// const tutorialListEng11 = tutorialListHtml11.textContent;
// const playAnimationDescriptionEng = playAnimationDescriptionHtml.textContent;
// const playAnimationEng = playAnimationHtml.textContent;
// const startTestEng = startTestHtml.textContent;
// const instEng1_1 = instHtml1_1.textContent;
// const instEng1_2 = instHtml1_2.textContent;
// const instEng1_3 = instHtml1_3.textContent;
// const instEng2_1 = instHtml2_1.textContent;
// const instEng3_1 = instHtml3_1.textContent;
// const instEng3_2 = instHtml3_2.textContent;
// const instEng4_1 = instHtml4_1.textContent;
// const completedTextEng = completedTextHtml.textContent;
// const navHomeEng = navHomeHtml.textContent;
// const tr1Eng = tr1.textContent;
// const en1Eng = en1.textContent;
// const researchEng = researchHtml.textContent;
// const databasesEng = databasesHtml.textContent;
// const reservesEng = reservesHtml.textContent;
// const eJournalsEng = eJournalsHtml.textContent;
// const classicsEng = classicsHtml.textContent;
// const openAccessEng = openAccessHtml.textContent;
// const kpyCollectionEng = kpyCollectionHtml.textContent;
// const euInfoEng = euInfoHtml.textContent;
// const hrCollectionEng = hrCollectionHtml.textContent;
// const heCollectionEng = heCollectionHtml.textContent;
// const arrivalsEng = arrivalsHtml.textContent;
// const servicesEng = servicesHtml.textContent;
// const borrowingEng = borrowingHtml.textContent;
// const articleProcessingEng = articleProcessingHtml.textContent;
// const collectionDevelopmentEng = borrowingHtml.textContent;
// const illEng = illHtml.textContent;
// const reserveRequestEng = reserveRequestHtml.textContent;
// const internshipEng = internshipHtml.textContent;
// const supportEng = supportHtml.textContent;
// const libraryInstructionEng = libraryInstructionHtml.textContent;
// const libraryGuidesEng = libraryGuidesHtml.textContent;
// const askEng = askHtml.textContent;
// const offCampusEng = offCampusHtml.textContent;
// const faqEng = faqHtml.textContent;
// const aboutEng = aboutHtml.textContent;
// const libraryEng = libraryHtml.textContent;
// const contactEng = contactHtml.textContent;
// const rulesEng = rulesHtml.textContent;
// const teamEng = teamHtml.textContent;
// const hoursEng = hoursHtml.textContent;
// const alumniEng = alumniHtml.textContent;
// const externalUsersEng = externalUsersHtml.textContent;
// const membershipEng = membershipHtml.textContent;
// const copyrightEng = copyrightHtml.textContent;
// const outcomesEng = outcomesHtml.textContent;
// const newsEng = newsHtml.textContent;

// // Turkish Strings
// const webTitleTr = "Eğitim | Kütüphane İstanbul Bilgi Üniversitesi";
// const libraryLogoTr = "image/kutuphane_logo_tr.png";
// const libraryNameTr = "Kütüphanesi";
// const dateTr = "Bugün";
// const tutorialTitleTr = "Kongre Kütüphanesi Eğitimi - Etiket ve Raf Sistemi";
// const firstStageTr = "Eğitim"
// const secondStageTr = "1. Aşama"
// const thirdStageTr = "2. Aşama"
// const forthStageTr = "3. Aşama"
// const tutorialIntroTr = `Aşağıda, Kongre Kütüphanes etiket numaralarının sıralandığı kuralları okuduktan sonra, 
//                         kuralların uygulanışını gösteren animasyonlu bir örneği izleyebilirsiniz. 
//                         Ve sayfanın altında sizi, Kongre Kütüphanesi kurallarını anladığınızı 
//                         test edebileceğiniz testlere götüren bir bağlantı var.`
// const tutorialListTr0 = `İlk satır her zaman bir Harf Satırıdır ve alfabetik olarak sıralanır.`;
// const tutorialListTr1 = `İkinci satır bir Tam Sayı satırıdır ve sayısal olarak sıralanır.`;
// const tutorialListTr2 = `Bazen ikinci satır ondalık olarak yazılır ve aynı satırda veya üçüncü satırda devam eder. 
//                         Ne zaman bir ondalık nokta görürseniz, her boşluğu ayrı ayrı değerlendirin 
//                         (tam sayı olarak kabul etmeyin).`;
// const tutorialListTr3 = `Genellikle üçüncü satır bir Kesici satırdır. Bir ondalık sayı ile başlar 
//                         ve bir harf ile devam eder. Kesici Satırdaki her rakamı, her zaman ayrı ayrı okuyun.
//                         Bazen, kesici satır ikiye ayrılabilir. Bu durumlarda ilk baştaki ondalık kısımı baz
//                         alarak ilerleyin.`;
// const tutorialListTr4 = `Diğer satırlar cilt numaralarını, kopya numaralarını, tarihleri veya bunların 
//                         bir kombinasyonunu içerebilir.`;
// const tutorialListTr5 = `Harfler, sayılardan önce gelir.`;
// const tutorialListTr6 = `Tek harfli isimler, aynı harfle başlayan isimlerden önce gelir.`;
// const tutorialListTr7 = `Bir tarihten önce başka bir tarih gelmez.`;
// const tutorialListTr8 = `Ciltler, kopyalardan önce gelir.`;
// const tutorialListTr9 = `Kopyalar, tarihlerden önce gelir`;
// const tutorialListTr10 = `x ("Küçük x"), 1/2'i temsil eder. Harflerden sonra, numaralardan önce gelir.`;
// const tutorialListTr11 = `Etiket numaralarının başındaki "Undergrad" veya "UrbLib"i dikkate almayın
//                          - bunlar Kütüphanelerin farklı düzenlendiği bir zamana ait eski etiketlerdir.`;
// const playAnimationDescriptionTr = `Kongre Kütüphanesi Kurallarının animasyonlu bir örneği aşağıda verilmiştir `;
// const playAnimationTr = `Animasyonu Oynatmak İçin Buraya Tıkla`;
// const startTestTr = `Teste Başla`;
// const instTr1_1 = `İlk satır her zaman bir Harf Satırıdır ve alfabetik olarak sıralanır.`;
// const instTr1_2 = `İkinci satır bir Tam Sayı satırıdır ve sayısal olarak sıralanır.`;
// const instTr1_3 = `Bazen ikinci satır ondalık olarak yazılır ve aynı satırda veya üçüncü satırda devam eder. 
//                     Ne zaman bir ondalık nokta görürseniz, her boşluğu ayrı ayrı değerlendirin 
//                     (tam sayı olarak kabul etmeyin).`;
// const instTr2_1 = `Genellikle üçüncü satır bir Kesici satırdır. Bir ondalık sayı ile başlar 
//                     ve bir harf ile devam eder. Kesici Satırdaki her rakamı, her zaman ayrı ayrı okuyun.
//                     Bazen, kesici satır ikiye ayrılabilir. Bu durumlarda ilk baştaki ondalık kısımı baz
//                     alarak ilerleyin.`;
// const instTr3_1 = `Diğer satırlar cilt numaralarını, kopya numaralarını, tarihleri veya bunların 
//                     bir kombinasyonunu içerebilir.`;
// const instTr3_2 = `Bu durumda, ikinci arama numarasının ek bilgileri vardır, bu nedenle ilk etiket numarasından 
//                     sonra gelir. Yılsız bir etiket numarasının, yıllı bir etiket numarasından önce geldiğini 
//                     unutmamanızda fayda var.`;
// const instTr4_1 = `"Harfler, sayılardan önce gelir", Kongre Kütüphanesinin bir başka temel kuralıdır. Burada ilk iki 
//                     etiket numarasındaki .H'nin önce geldiğini görebilirsiniz. 1 ("bir") olan satır ise sonra gelir.`;
// const completedTextTr = `Kongre Kütüphanesi eğitimini tamamladın. Şimdi, testi başlatabilirsin`;
// const navHomeTr = `Anasayfa`;
// const tr1Tr = `Türkçe`;
// const en1Tr = `İngilizce`;
// const researchTr = `Araştırma ve Kaynaklar`;
// const databasesTr = `Veritabanları`;
// const reservesTr = `Rezerv Koleksiyonu`;
// const eJournalsTr = `E-Dergiler`;
// const classicsTr = `Klasik Katalog`;
// const openAccessTr = `Açık Erişim`;
// const kpyCollectionTr = `KPY Koleksiyonu`;
// const euInfoTr = `AB Enformasyon`;
// const hrCollectionTr = `İnsan Hakları Koleksiyonu`;
// const heCollectionTr = `Yükseköğretim Koleksiyonu`;
// const arrivalsTr = `Yeni Gelen Yayınlar`;
// const servicesTr = `Hizmetler`;
// const borrowingTr = `Ödünç Verme`;
// const articleProcessingTr = `Makale İşlem Ücretleri`;
// const collectionDevelopmentTr = `Koleksiyon Geliştirme & Sipariş`;
// const illTr = `Kütüphaneler Arası Ödünç (ILL)`;
// const reserveRequestTr = `Ders Kaynakları Formu`;
// const internshipTr = `Staj Formu`;
// const supportTr = `Destek`;
// const libraryInstructionTr = `Kullanıcı Eğitimi`;
// const libraryGuidesTr = `Rehberler`;
// const askTr = `Online Danışman`;
// const offCampusTr = `Kampüs Dışı Erişim`;
// const faqTr = `SSS`;
// const aboutTr = `Hakkımızda`;
// const libraryTr = `Kütüphanemiz`;
// const contactTr = `İletişim`;
// const rulesTr = `Kütüphane Kuralları`;
// const teamTr = `Ekibimiz`;
// const hoursTr = `Kütüphane Saatleri`;
// const alumniTr = `Mezun`;
// const externalUsersTr = `Dış Kullanıcılar`;
// const membershipTr = `Üyelikler`;
// const copyrightTr = `Telif Hakları`;
// const outcomesTr = `Öğrenme Kazanımları`;
// const newsTr = `Etkinlikler`;

// // JS object for languages in the pages
// let contentLanguage = {
//     "english": {
//         "webTitle": webTitleEng,
//         "libraryLogo": libraryLogoEng,
//         "libraryName": libraryNameEng,
//         "date": dateEng,
//         "tutorialTitle": tutorialTitleEng,
//         "firstStage": firstStageEng,
//         "secondStage": secondStageEng,
//         "thirdStage": thirdStageEng,
//         "forthStage": forthStageEng,
//         "tutorialIntro": tutorialIntroEng,
//         "tutorialList0": tutorialListEng0,
//         "tutorialList1": tutorialListEng1,
//         "tutorialList2": tutorialListEng2,
//         "tutorialList3": tutorialListEng3,
//         "tutorialList4": tutorialListEng4,
//         "tutorialList5": tutorialListEng5,
//         "tutorialList6": tutorialListEng6,
//         "tutorialList7": tutorialListEng7,
//         "tutorialList8": tutorialListEng8,
//         "tutorialList9": tutorialListEng9,
//         "tutorialList10": tutorialListEng10,
//         "tutorialList11": tutorialListEng11,
//         "playAnimationDescription": playAnimationDescriptionEng,
//         "playAnimation": playAnimationEng,
//         "startTest": startTestEng,
//         "instr1_1": instEng1_1,
//         "instr1_2": instEng1_2,
//         "instr1_3": instEng1_3,
//         "instr2_1": instEng2_1,
//         "instr3_1": instEng3_1,
//         "instr3_2": instEng3_2,
//         "instr4_1": instEng4_1,
//         "completedText": completedTextEng,
//         "navHome": navHomeEng,
//         "tr1Btn": tr1Eng,
//         "en1Btn": en1Eng, 
//         "research": researchEng,
//         "databases": databasesEng,
//         "reserves": reservesEng,
//         "eJournals": eJournalsEng,
//         "classics": classicsEng,
//         "openAccess": openAccessEng,
//         "kpyCollection": kpyCollectionEng,
//         "euInfo": euInfoEng,
//         "hrCollection": hrCollectionEng,
//         "heCollection": heCollectionEng,
//         "arrivals": arrivalsEng,
//         "services": servicesEng,
//         "borrowing": borrowingEng,
//         "articleProcessing": articleProcessingEng,
//         "collectionDevelopment": collectionDevelopmentEng,
//         "ill": illEng,
//         "reserveRequest": reserveRequestEng,
//         "internship": internshipEng,
//         "support": supportEng,
//         "libraryInstruction": libraryInstructionEng,
//         "libraryGuides": libraryGuidesEng,
//         "ask": askEng,
//         "offCampus": offCampusEng,
//         "faq": faqEng,
//         "about": aboutEng,
//         "library": libraryEng,
//         "contact": contactEng,
//         "rules": rulesEng,
//         "team": teamEng,
//         "hours": hoursEng,
//         "alumni": alumniEng,
//         "externalUsers": externalUsersEng,
//         "membership": membershipEng,
//         "copyright": copyrightEng,
//         "outcomes": outcomesEng,
//         "news": newsEng,
//     },
//     "turkish": {
//         "webTitle": webTitleTr,
//         "libraryLogo": libraryLogoTr,
//         "libraryName": libraryNameTr,
//         "date": dateTr,
//         "tutorialTitle": tutorialTitleTr,
//         "firstStage": firstStageTr,
//         "secondStage": secondStageTr,
//         "thirdStage": thirdStageTr,
//         "forthStage": forthStageTr,
//         "tutorialIntro": tutorialIntroTr,
//         "tutorialList0": tutorialListTr0,
//         "tutorialList1": tutorialListTr1,
//         "tutorialList2": tutorialListTr2,
//         "tutorialList3": tutorialListTr3,
//         "tutorialList4": tutorialListTr4,
//         "tutorialList5": tutorialListTr5,
//         "tutorialList6": tutorialListTr6,
//         "tutorialList7": tutorialListTr7,
//         "tutorialList8": tutorialListTr8,
//         "tutorialList9": tutorialListTr9,
//         "tutorialList10": tutorialListTr10,
//         "tutorialList11": tutorialListTr11,
//         "playAnimationDescription": playAnimationDescriptionTr,
//         "playAnimation": playAnimationTr,
//         "startTest": startTestTr,
//         "instr1_1": instTr1_1,
//         "instr1_2": instTr1_2,
//         "instr1_3": instTr1_3,
//         "instr2_1": instTr2_1,
//         "instr3_1": instTr3_1,
//         "instr3_2": instTr3_2,
//         "instr4_1": instTr4_1,
//         "completedText": completedTextTr,
//         "navHome": navHomeTr,
//         "tr1Btn": tr1Tr,
//         "en1Btn": en1Tr, 
//         "research": researchTr,
//         "databases": databasesTr,
//         "reserves": reservesTr,
//         "eJournals": eJournalsTr,
//         "classics": classicsTr,
//         "openAccess": openAccessTr,
//         "kpyCollection": kpyCollectionTr,
//         "euInfo": euInfoTr,
//         "hrCollection": hrCollectionTr,
//         "heCollection": heCollectionTr,
//         "arrivals": arrivalsTr,
//         "services": servicesTr,
//         "borrowing": borrowingTr,
//         "articleProcessing": articleProcessingTr,
//         "collectionDevelopment": collectionDevelopmentTr,
//         "ill": illTr,
//         "reserveRequest": reserveRequestTr,
//         "internship": internshipTr,
//         "support": supportTr,
//         "libraryInstruction": libraryInstructionTr,
//         "libraryGuides": libraryGuidesTr,
//         "ask": askTr,
//         "offCampus": offCampusTr,
//         "faq": faqTr,
//         "about": aboutTr,
//         "library": libraryTr,
//         "contact": contactTr,
//         "rules": rulesTr,
//         "team": teamTr,
//         "hours": hoursTr,
//         "alumni": alumniTr,
//         "externalUsers": externalUsersTr,
//         "membership": membershipTr,
//         "copyright": copyrightTr,
//         "outcomes": outcomesTr,
//         "news": newsTr,
//     }
// }

/* *** EVENT LISTENERS *** */
languageLinks.forEach(choosen => {
    choosen.addEventListener("click", () => {
        exchangeButton(choosen, tr, en);
        exchangeButton(choosen, tr1, en1);

    //     const attribute = choosen.getAttribute("language");
    //     const content = contentLanguage[attribute];
        
    //     // Call the defined function/s below
    //     changeLanguage();

    //     // Functions if needed
    //     function changeLanguage() {
    //         webTitleHtml.innerHTML = content.webTitle;
    //         dateHtml.innerHTML = content.date;
    //         iterateLibraryNames();
    //         libraryLogoHtml.src = content.libraryLogo;
    //         tutorialTitleHtml.innerHTML = content.tutorialTitle;
    //         firstStageBtnHtml.innerHTML = content.firstStage;
    //         secondStageBtnHtml.innerHTML = content.secondStage;
    //         thirdStageBtnHtml.innerHTML = content.thirdStage;
    //         forthStageBtnHtml.innerHTML = content.forthStage;
    //         tutorialIntroHtml.innerHTML = content.tutorialIntro;
    //         tutorialListHtml0.innerHTML = content.tutorialList0;
    //         tutorialListHtml1.innerHTML = content.tutorialList1;
    //         tutorialListHtml2.innerHTML = content.tutorialList2;
    //         tutorialListHtml3.innerHTML = content.tutorialList3;
    //         tutorialListHtml4.innerHTML = content.tutorialList4;
    //         tutorialListHtml5.innerHTML = content.tutorialList5;
    //         tutorialListHtml6.innerHTML = content.tutorialList6;
    //         tutorialListHtml7.innerHTML = content.tutorialList7;
    //         tutorialListHtml8.innerHTML = content.tutorialList8;
    //         tutorialListHtml9.innerHTML = content.tutorialList9;
    //         tutorialListHtml10.innerHTML = content.tutorialList10;
    //         tutorialListHtml11.innerHTML = content.tutorialList11;
    //         playAnimationDescriptionHtml.innerHTML = content.playAnimationDescription;
    //         playAnimationHtml.innerHTML = content.playAnimation;
    //         startTestHtml.innerHTML = content.startTest;
    //         instHtml1_1.innerHTML = content.instr1_1;
    //         instHtml1_2.innerHTML = content.instr1_2;
    //         instHtml1_3.innerHTML = content.instr1_3;
    //         instHtml2_1.innerHTML = content.instr2_1;
    //         instHtml3_1.innerHTML = content.instr3_1;
    //         instHtml3_2.innerHTML = content.instr3_2;
    //         instHtml4_1.innerHTML = content.instr4_1;
    //         completedTextHtml.innerHTML = content.completedText;
    //         navHomeHtml.innerHTML = content.navHome;
    //         tr1.innerHTML = content.tr1Btn;
    //         en1.innerHTML = content.en1Btn;
    //         navHomeHtml.innerHTML = content.navHome;
    //         researchHtml.innerHTML = content.research;
    //         databasesHtml.innerHTML = content.databases;
    //         reservesHtml.innerHTML = content.reserves;
    //         eJournalsHtml.innerHTML = content.eJournals;
    //         classicsHtml.innerHTML = content.classics;
    //         openAccessHtml.innerHTML = content.openAccess;
    //         kpyCollectionHtml.innerHTML = content.kpyCollection;
    //         euInfoHtml.innerHTML = content.euInfo;
    //         hrCollectionHtml.innerHTML = content.hrCollection;
    //         heCollectionHtml.innerHTML = content.heCollection;
    //         arrivalsHtml.innerHTML = content.arrivals;
    //         servicesHtml.innerHTML = content.services;
    //         borrowingHtml.innerHTML = content.borrowing;
    //         articleProcessingHtml.innerHTML = content.articleProcessing;
    //         collectionDevelopmentHtml.innerHTML = content.collectionDevelopment;
    //         illHtml.innerHTML = content.ill;
    //         reserveRequestHtml.innerHTML = content.reserveRequest;
    //         internshipHtml.innerHTML = content.internship;
    //         supportHtml.innerHTML = content.support;
    //         libraryInstructionHtml.innerHTML = content.libraryInstruction;
    //         libraryGuidesHtml.innerHTML = content.libraryGuides;
    //         askHtml.innerHTML = content.ask;
    //         offCampusHtml.innerHTML = content.offCampus;
    //         faqHtml.innerHTML = content.faq;
    //         aboutHtml.innerHTML = content.about;
    //         libraryHtml.innerHTML = content.library;
    //         contactHtml.innerHTML = content.contact;
    //         rulesHtml.innerHTML = content.rules;
    //         teamHtml.innerHTML = content.team;
    //         hoursHtml.innerHTML = content.hours;
    //         alumniHtml.innerHTML = content.alumni;
    //         externalUsersHtml.innerHTML = content.externalUsers;
    //         membershipHtml.innerHTML = content.membership;
    //         copyrightHtml.innerHTML = content.copyright;
    //         outcomesHtml.innerHTML = content.outcomes;
    //         newsHtml.innerHTML = content.news;
    //     }

    //     function iterateLibraryNames() {
    //         for (let i = 0; i < libraryNames.length; i++) {
    //             libraryNames[i].innerHTML = content.libraryName;
    //         }
    //     }
    // });
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