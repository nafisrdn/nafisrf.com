const sectionWork = document.querySelector('section#work');
const workArticles = document.querySelectorAll('section#work article');

$('.contact-btn').on('click', function () {
    $('html, body').animate({
        scrollTop: $('html').height()
    }, 800, function () {
        // window.location.hash = '';
    });
});
