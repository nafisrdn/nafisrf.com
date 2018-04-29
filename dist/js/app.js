'use strict';$(document).ready(function(){

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var nav = document.querySelector('header#top nav.items');
var navListParrent = document.querySelector('header#top nav ul');
var navList = document.querySelector('header#top nav ul li');
var navListItems = document.querySelectorAll('header#top nav ul li a');
var navToggle = document.querySelector('.nav-toggle');
var firstSection = document.querySelector('body section');

var headerShow = false;

nav.classList.add('nav-nobg');

navToggle.addEventListener('click', function () {
    navShow(headerShow);
    headerShow = !headerShow;
});

window.addEventListener('scroll', function (e) {

    if (window.pageYOffset > getOffsetTop(firstSection) - nav.offsetHeight / 2 && window.pageYOffset < getOffsetTop(firstSection) + firstSection.offsetHeight - nav.offsetHeight / 2) {

        nav.classList.remove('nav-bg');
    } else {
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
var NoiseSketch = function NoiseSketch(section) {
    var img = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;


    this.img = img;
    this.section = section;

    var clsp = this;

    this.sketch = function (p) {
        var section = clsp.section;
        var noiseScale = 0.02;
        var fps = void 0;
        var img = clsp.img;
        var bgImg = void 0;

        p.preload = function () {
            if (img != null) {
                bgImg = p.loadImage(img);
            }
        };

        p.setup = function () {

            p.createCanvas(section.width(), section.outerHeight());
            if (img != null) {
                bgImg.loadPixels();
            }
            p.noLoop();
        };

        p.draw = function () {
            p.background(13, 18, 24);

            if (img != null) {
                p.image(bgImg, 0, 0, section.width(), section.outerHeight());
            }

            p.stroke(255);

            for (var x = 0; x < p.width; x++) {
                var noiseVal = p.noise(x * noiseScale, noiseScale * 500);
                p.line(x, p.height - 50 + noiseVal * 80, x, p.height);
            }
        };

        p.windowResized = function () {
            p.resizeCanvas(section.width(), section.outerHeight());
        };
    };
};

var BubbleAndNum = function BubbleAndNum(section) {
    var val = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
    var img = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;


    this.section = section;
    this.val = val;
    this.img = img;

    // console.log(img);


    this.sketch = function (p) {
        var bgimg = void 0;

        var rightWall = {
            pos: {
                x: section.outerWidth() / 2,
                y: 0
            },
            size: {
                width: section.outerWidth() / 2
            }

        };

        var circles = [];
        var numbers = [];

        var objAmount = val;
        var objSize = void 0;

        var circleMouse = void 0;

        p.setup = function () {

            p.createCanvas(section.outerWidth(), section.outerHeight());

            p.background(255);

            circleMouse = new Circle(0, 0, 50);

            if (img != null) {
                if (window.innerWidth <= 480) {
                    bgimg = new BrainImg(img, 0, 0, 200, 170);
                } else {
                    bgimg = new BrainImg(img, 0, 0, 500, 430);
                }
            }

            if (screen.width <= 480) {
                objSize = 30;
            } else {
                objSize = 50;
            }

            // Circles
            for (var i = 0; i < objAmount; i++) {

                var x = p.random(rightWall.pos.x, rightWall.pos.x * 2 - 50);
                var y = p.random(0, section.outerHeight());

                var speedX = p.random(-1.5, 1.5);
                var speedY = p.random(-1.5, 1.5);

                if (speedX == 0) {
                    speedX = 1;
                }

                if (speedY == 0) {
                    speedY = 1;
                }

                circles[i] = new Circle(x, y, objSize, speedX, speedY);
            }

            // Numbers
            for (var _i2 = 0; _i2 < objAmount; _i2++) {
                var _x4 = p.random(0, rightWall.pos.x - 50);
                var _y = p.random(0, section.outerHeight());

                var _speedX = p.random(-1.5, 1.5);
                var _speedY = p.random(-1.5, 1.5);

                if (_speedX == 0) {
                    _speedX = 1;
                }

                if (_speedY == 0) {
                    _speedY = 1;
                }

                numbers[_i2] = new Text(_i2, _x4, _y, objSize, _speedX, _speedY);
            }

            p.frameRate(60);
        };

        p.draw = function () {

            p.background(255);

            // if (img != null) {
            //     bgimg.update();
            //     bgimg.draw();
            // }


            p.strokeWeight(4);
            p.stroke(156, 205, 207);

            // Numbers
            for (var i = 0; i < numbers.length; i++) {
                var number = numbers[i];

                number.update();
                number.draw();

                // p.fill(0, 255,0);
                // p.ellipse(number.x, number.y, 5, 5);
            }

            // Circles
            for (var _i3 = 0; _i3 < circles.length; _i3++) {

                var overlapping = false;

                circles[_i3].noFill();

                circles[_i3].update();
                circles[_i3].draw();

                for (var other = 0; other < circles.length; other++) {
                    if (_i3 != other && circles[_i3].intersectCircle(circles[other])) {
                        overlapping = true;
                    }
                }

                if (overlapping) {
                    circles[_i3].stroke([0, 98, 255]);
                } else {
                    circles[_i3].stroke([156, 205, 207]);
                }
            }
        };

        p.windowResized = function () {

            if (window.innerWidth <= 480) {
                objAmount = 5;
                objSize = 30;
            } else {
                objAmount = 10;
                objSize = 50;
            }

            rightWall = {
                pos: {
                    x: section.outerWidth() / 2,
                    y: 0
                },
                size: {
                    width: section.outerWidth() / 2
                }

            };

            if (window.innerWidth <= 480) {
                BrainImg.width = 200;
                BrainImg.height = 170;
            } else {
                BrainImg.width = 500;
                BrainImg.height = 430;
            }

            if (window.innerWidth >= 1200) {
                BrainImg.width = 700;
                BrainImg.height = 630;
            }

            p.resizeCanvas(section.outerWidth(), section.outerHeight());
        };

        var Text = function () {
            function Text(text, x, y, size) {
                var speedX = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 2;
                var speedY = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 2;

                _classCallCheck(this, Text);

                this.text = text;

                this.x = x + 50;
                this.y = y + 50;

                this.size = size;

                this.speedX = speedX;
                this.speedY = speedY;

                this.fillColor = [156, 205, 207];
            }

            _createClass(Text, [{
                key: 'draw',
                value: function draw() {
                    p.noStroke();

                    p.fill(this.fillColor);
                    p.textSize(this.size);
                    p.text(this.text, this.x, this.y);
                }
            }, {
                key: 'update',
                value: function update() {
                    this.x += this.speedX;
                    this.y += this.speedY;

                    this.intersectWall();
                }
            }, {
                key: 'intersectWall',
                value: function intersectWall() {
                    if (this.x >= rightWall.pos.x - this.size / 2) {
                        this.x = rightWall.pos.x - this.size / 2;
                        this.speedX *= -1;
                    }

                    if (this.x <= 0) {
                        this.x = 0;
                        this.speedX *= -1;

                        // this.fillColor = [255, 0, 0];
                    }

                    if (this.y >= p.height) {
                        this.y = p.height;
                        this.speedY *= -1;
                    }

                    if (this.y - this.size <= 0) {
                        this.y = this.size;
                        this.speedY *= -1;
                    }
                }
            }]);

            return Text;
        }();

        var Circle = function () {
            function Circle(x, y, size) {
                var speedX = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 2;
                var speedY = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 2;

                _classCallCheck(this, Circle);

                this.x = x + 50;
                this.y = y + 50;

                this.size = size;

                this.speedX = speedX;
                this.speedY = speedY;

                this.fillColor = 0;
                this.strokeColor = 0;
            }

            _createClass(Circle, [{
                key: 'draw',
                value: function draw() {
                    p.stroke(this.strokeColor);
                    if (this.noFill) {
                        p.noFill();
                    } else {
                        p.fill(this.fillColor);
                    }

                    p.ellipse(this.x, this.y, this.size, this.size);
                }
            }, {
                key: 'update',
                value: function update() {
                    this.x += this.speedX;
                    this.y += this.speedY;

                    this.intersectWall();
                }
            }, {
                key: 'noFill',
                value: function noFill(b) {
                    return b;
                }
            }, {
                key: 'fill',
                value: function fill(color) {
                    this.fillColor = color;
                }
            }, {
                key: 'stroke',
                value: function stroke(color) {
                    this.strokeColor = color;
                }
            }, {
                key: 'intersectCircle',
                value: function intersectCircle(other) {
                    var d = p.dist(this.x, this.y, other.x, other.y);
                    var fd = this.size / 2 + other.size / 2;

                    return d < fd;
                }
            }, {
                key: 'intersectWall',
                value: function intersectWall() {
                    if (this.x >= p.width - this.size / 2) {
                        this.x = p.width - this.size / 2;
                        this.speedX = this.speedX * -1;
                    }

                    if (this.x <= rightWall.pos.x + this.size / 2) {
                        this.x = rightWall.pos.x + this.size / 2;
                        this.speedX = this.speedX * -1;
                    }

                    if (this.y >= p.height - this.size / 2) {
                        this.y = p.height - this.size / 2;
                        this.speedY = this.speedY * -1;
                    }

                    if (this.y <= this.size / 2) {
                        this.y = this.size / 2;
                        this.speedY = this.speedY * -1;
                    }
                }
            }]);

            return Circle;
        }();

        var BrainImg = function () {
            function BrainImg(img, x, y, width, height) {
                _classCallCheck(this, BrainImg);

                this.img = p.loadImage(img);

                this.x = x;
                this.y = y;

                this.width = width;
                this.height = height;
            }

            _createClass(BrainImg, [{
                key: 'draw',
                value: function draw() {
                    p.image(this.img, this.x, this.y, this.width, this.height);
                    // console.log(this.img);
                }
            }, {
                key: 'update',
                value: function update() {
                    this.x = p.width / 2 - this.width / 2;
                    this.y = p.height / 2 - this.height / 2;
                }
            }, {
                key: 'followY',
                value: function followY(targetY, speedY) {
                    if (this.y < targetY) {
                        this.y += speedY;
                    }

                    if (this.y > targetY) {
                        this.y -= speedY;
                    }
                }
            }]);

            return BrainImg;
        }();
    };
};

var sectionWork = document.querySelector('section#work');
var workArticles = document.querySelectorAll('section#work article');

// for (let i = 0; i < workArticles.length; i++) {
//     const article = workArticles[i];

//     const title = document.querySelector(`article.${article.classList}`);


//     article.addEventListener('mouseover', () => {
//         title.classList.add('article-hover');
//     });

//     article.addEventListener('mouseleave', () => {
//         title.classList.remove('article-hover');
//     });

// }

// work sketch

var aboutSection = $('section#about');
var skillSection = $('section#skill');

if (aboutSection.length) {
    var showAboutSketch = new NoiseSketch(aboutSection, '/img/particles.jpg').sketch;

    var showAboutSketch2 = new p5(showAboutSketch, 'about');
}

if (skillSection.length) {

    var objTotal = 7;

    if ($(window).width() < 960) {
        objTotal = 4;
    }

    var test = new BubbleAndNum(skillSection, 7, '/img/white-brain.jpg');

    var skillSectionSketch2 = new p5(test.sketch, 'skill');
}

var workSection = $('section#work');
var workWrapper = $('.work-wrapper');
var group = $('.work-group');
var workPaginator = $('.work-paginator');

var groupLength = workWrapper.children().length;
var visible = 1;
var index = 0;
var endIndex = group.length / visible - 1;
var active = true;

for (var i = 0; i < groupLength; i++) {
    $('.work-paginator ul').append('\n    <li><a href=\'#0\'>' + (i + 1) + '</a></li>\n    ');
}

workPaginator.css('top', '-' + (workSection.height() / 2 - 70) + 'px');

$(window).resize(function () {
    workPaginator.css('top', '-' + (workSection.height() / 2 - 70) + 'px');
});

updatePaginatorNumbers(1);

$('.work-paginator ul li').click(function () {
    updatePaginatorNumbers($(this).index() + 1);

    index = $(this).index();
    leftWork('-' + group.width() * index + 'px');
});

$('.work-paginator .icon-arrow-left').click(function () {

    if (active) {
        active = false;

        if (index > 0) {
            previousWork();
        } else {
            endWork();
        }

        window.setTimeout(function () {
            active = true;
        }, 300);
    }

    updatePaginatorNumbers(index + 1);
});

$('.work-paginator .icon-arrow-right').click(function () {

    if (active) {
        active = false;
        if (index < endIndex) {
            nextWork();
        } else {
            startWork();
        }

        window.setTimeout(function () {
            active = true;
        }, 300);
    }

    updatePaginatorNumbers(index + 1);
});

function leftWork(pos) {
    group.css({ 'left': pos });
}

function previousWork() {
    index--;
    group.css({ 'left': '+=' + group.width() });
}

function nextWork() {

    index++;
    group.css({ 'left': '-=' + group.width() });
}

function startWork() {
    index = 0;
    group.css({ 'left': '0px' });
}

function endWork() {
    index = endIndex;
    group.css({ 'left': '-' + group.width() * (groupLength - 1) + 'px' });
}

function updatePaginatorNumbers(i) {
    var num = $('.work-paginator ul li:nth-child(' + i + ')');

    $('.work-paginator ul li').removeClass('selected');

    num.addClass('selected');
}

// work sketch

var firstSectionWork = $('section#first');
var postContentSection = $('section#post-content');

if (firstSectionWork.length) {
    var showFirstSketch = new NoiseSketch(firstSectionWork, '/img/particles.jpg').sketch;

    var showFirstSketch2 = new p5(showFirstSketch, 'first');
}

if (postContentSection.length && $(window).width() > 960) {

    var _objTotal = 20;

    var _test = new BubbleAndNum(postContentSection, _objTotal);

    var showPostSketch2 = new p5(_test.sketch, 'post-content');
}

$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]').not('[href="#0"]').click(function (event) {
    // On-page links
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 500, function () {
                // Callback after animation
                // Must change focus!
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) {
                    // Checking if the target was focused
                    return false;
                } else {
                    $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                    $target.focus(); // Set focus again
                };
            });
        }
    }
});});
//# sourceMappingURL=app.js.map
