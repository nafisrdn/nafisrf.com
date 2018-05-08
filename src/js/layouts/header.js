const nav = document.querySelector('header#top nav.items');
const navListParrent = document.querySelector('header#top nav ul');
const navList = document.querySelector('header#top nav ul li');
const navListItems = document.querySelectorAll('header#top nav ul li a');
const navToggle = document.querySelector('.nav-toggle');
const firstSection = document.querySelector('body section');

let headerShow = false;

nav.classList.add('nav-nobg');

navToggle.addEventListener('click', () => {
    navShow(headerShow);
    headerShow = !headerShow;
});

window.addEventListener('scroll', e => {

    if (window.pageYOffset > getOffsetTop(firstSection) - (nav.offsetHeight / 2) &&
        window.pageYOffset < getOffsetTop(firstSection) + firstSection.offsetHeight - (nav.offsetHeight / 2)) {

        nav.classList.remove('nav-bg');
    }else{
        nav.classList.add('nav-bg');
    }

    // console.log(firstSection);
    
});

function getOffsetTop(elem) {
    var offsetTop = 0;
    do {
        if (!isNaN(elem.offsetTop)) {
            offsetTop += elem.offsetTop;
        }
    } while (elem = elem.offsetParent);
    return offsetTop;
}

function navShow(b) {
    if (!b) {
        navListParrent.setAttribute('style', `width: 200px;`);
        for (let i = 0; i < navListItems.length; i++ ){
            navListItems[i].setAttribute('style', 'right: 0;');
        }
        // overlay.setAttribute('style', 'display:block; opacity:0.5; z-index:100;');

        navToggle.classList.add('is-open');
    } else {
        navListParrent.setAttribute('style', `width: 0px;`);
        for (let i = 0; i < navListItems.length; i++) {
            navListItems[i].setAttribute('style', 'right: -200px;');
        }
        console.log('umbau');
        // nav.setAttribute('style', `transform:translateX(${navHideX}px);`)
        // overlay.setAttribute('style', 'display:none; opacity:0; z-index:-100;');

        navToggle.classList.remove('is-open');
    }
}

$('body').scrollspy({ target: "header#top" });

$("header#top a").on('click', function (event) {



    if (this.hash !== "") {

        let speed = 600;
        let offset = 0;

        event.preventDefault();

        var hash = this.hash;

        if (hash == "#work") {
            offset = ($(hash).height() / 2) - ($(window).height() / 2) + 60;
        }

        if (hash == "#contact") {
            offset = 999;
            speed = 800;
        }

        $('html, body').animate({
            scrollTop: $(hash).offset().top + offset
        }, speed, function () {
            // window.location.hash = hash;
        });

    }

});