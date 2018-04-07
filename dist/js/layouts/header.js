'use strict';

/*

const nav = document.querySelector('header#top nav');
const navToggle = document.querySelector('.mobile-nav-toggle');
const overlay = document.querySelector('#header-overlay');
const itemList = document.querySelector('header#top nav ul li a');

let headerShow = false;
let itemListPaddingRight = window.getComputedStyle(itemList, null).getPropertyValue('padding-right');
let navHideX = parseInt(nav.offsetWidth) + parseInt(itemListPaddingRight) - 30;
// nav.setAttribute('style', `transform:translate(${nav.offsetWidth}px);`)


navToggle.addEventListener('click', () => {
    navShow(headerShow);
    headerShow = !headerShow;
});

overlay.addEventListener('click', () => {
    navShow(true);
})


function navShow(b){
    if (!b) {
        nav.setAttribute('style', `transform: translateX(0);`);
        overlay.setAttribute('style', 'display:block; opacity:0.5; z-index:100;');
        
        navToggle.classList.add('is-open');
    } else {
        nav.setAttribute('style', `transform:translateX(${navHideX}px);`)
        overlay.setAttribute('style', 'display:none; opacity:0; z-index:-100;');
        
        navToggle.classList.remove('is-open');
        console.log(nav.offsetWidth);
    }

    
    
    
}

*/

var navListParrent = document.querySelector('header#top nav ul');
var navList = document.querySelector('header#top nav ul li');
var navListItems = document.querySelectorAll('header#top nav ul li a');
var navToggle = document.querySelector('.nav-toggle');

var headerShow = false;

navToggle.addEventListener('click', function () {
    navShow(headerShow);
    headerShow = !headerShow;
    console.log('test');
});

// overlay.addEventListener('click', () => {
//     navShow(true);
// })


function navShow(b) {
    if (!b) {
        navListParrent.setAttribute('style', 'width: 200px;');
        for (var i = 0; i < navListItems.length; i++) {
            navListItems[i].setAttribute('style', 'right: 0;');
        }
        // overlay.setAttribute('style', 'display:block; opacity:0.5; z-index:100;');

        navToggle.classList.add('is-open');
    } else {
        navListParrent.setAttribute('style', 'width: 0px;');
        for (var _i = 0; _i < navListItems.length; _i++) {
            navListItems[_i].setAttribute('style', 'right: -200px;');
        }
        console.log('umbau');
        // nav.setAttribute('style', `transform:translateX(${navHideX}px);`)
        // overlay.setAttribute('style', 'display:none; opacity:0; z-index:-100;');

        navToggle.classList.remove('is-open');
    }
}
//# sourceMappingURL=header.js.map
