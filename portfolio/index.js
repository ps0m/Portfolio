import i18Obj from './translate.js';


const allText = document.querySelectorAll("[data-i18]");
const enLang = document.getElementById('en');
const ruLang = document.getElementById('ru');

// console.log (enLang);

 

function getTranslate(event) {
  allText.forEach((e) => {
    // if (e.placeholder) {
    //     e.placeholder = i18Obj.[e.dataset.i18];
    // } else 
    e.textContent = i18Obj.ru[e.dataset.i18];
    console.log(e.textContent);
  })
}
getTranslate ();

enLang.addEventListener('click', getTranslate);
ruLang.addEventListener('click', getTranslate);

// enLang.addEventListener('click', () => {console.log('en')} );
// ruLang.addEventListener('click', () => {console.log('ru')});


// function for Burger menu 

(function() {
    
    const clickBurger = document.querySelector('.burger');
    const menu = document.querySelector('.header_nav');
    const clickCross = document.querySelector ('.nav_close');
    const navLinks = document.querySelectorAll ('.header_link');
    const lineBurger = document.querySelectorAll ('.line_burger');

    function closeMenu (event) {
        if (!event.target.classList.contains ('header_nav_active')){
            menu.classList.toggle('header_nav_active');
            lineBurger[0].classList.toggle ('line_burger_first_cress');
            lineBurger[1].classList.toggle ('line_burger_second_cress');
            lineBurger[2].classList.toggle ('line_burger_third_cress');
        };
    }

    clickBurger.addEventListener('click', closeMenu);

    clickCross.addEventListener ('click',closeMenu);

    navLinks.forEach((el) => el.addEventListener('click', closeMenu ));
       
}());

// function for change Portfolio

(function() {
    const portfolioBtn = document.querySelectorAll ('.button_portfolio');
    const portfolioImages = document.querySelectorAll ('.photo_portfolio');

    function changePhotoPortfolio (event){
        if (event.target.classList.contains ('button_portfolio')) {
            portfolioImages.forEach((img, index) => img.src = `./assets/jpg/${event.target.dataset.season}/${index+1}.jpg`);
        }
    }

    function addActiveButton (event) {
        if (event.target.classList.contains ('button_portfolio')) {
            portfolioBtn.forEach((item) => item.classList.remove ('button_portfolio_active'));
            event.target.classList.toggle ('button_portfolio_active');
        }
    }

    portfolioBtn.forEach((el) => el.addEventListener('click', changePhotoPortfolio));
    portfolioBtn.forEach((el) => el.addEventListener('click', addActiveButton ));
    
    function preLoadImages () {
        for (let i=1; i<=6; i++) {
            const img = new Image ();
            portfolioBtn.forEach((item) => img.src= `./assets/jpg/${item.dataset.season}/${i}.jpg`);
        }
    }
    preLoadImages ();

}());





