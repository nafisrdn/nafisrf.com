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
var noiseSketch = function noiseSketch(section, img) {

    this.img = img;
    this.section = section;

    var clsp = this;

    this.sketch = function (p) {
        var section = clsp.section;
        var noiseScale = 0.02;
        var fps = void 0;
        var bgImg = void 0;

        console.log(section.width());

        p.preload = function () {
            bgImg = p.loadImage(clsp.img);
        };

        p.setup = function () {
            p.createCanvas(section.width(), section.height());
            bgImg.loadPixels();
            p.noLoop();
        };

        p.draw = function () {
            p.background(13, 18, 24);

            p.image(bgImg, 0, 0, section.width(), section.height());

            p.stroke(255);

            for (var x = 0; x < p.width; x++) {
                var noiseVal = p.noise(x * noiseScale, noiseScale * 500);
                p.line(x, p.height - 50 + noiseVal * 80, x, p.height);
            }
        };

        p.windowResized = function () {
            p.resizeCanvas(section.width(), section.height());
        };
    };
};

var aboutSection = $('#about');

var showAboutSketch = new noiseSketch(aboutSection, '/img/particles.jpg').sketch;

var showAboutSketch2 = new p5(showAboutSketch, 'about');
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


var skillSection = {
    e: document.getElementById('skill'),
    id: 'skill',
    size: {
        width: document.getElementById('skill').offsetWidth,
        height: document.getElementById('skill').offsetHeight
    }
};

var skillSketch = function skillSketch(p) {

    var brain = void 0;

    var rightWall = {
        pos: {
            x: skillSection.e.offsetWidth / 2,
            y: 0
        },
        size: {
            width: skillSection.e.offsetWidth / 2
        }

    };

    var circles = [];
    var numbers = [];

    var objAmount = void 0;
    var objSize = void 0;

    var circleMouse = void 0;

    p.setup = function () {

        p.createCanvas(skillSection.e.offsetWidth, skillSection.e.offsetHeight);

        p.background(255);

        circleMouse = new Circle(0, 0, 50);

        if (window.innerWidth <= 480) {
            brain = new BrainImg(p.loadImage('/img/white-brain.jpg'), 0, 0, 200, 170);
        } else {
            brain = new BrainImg(p.loadImage('/img/white-brain.jpg'), 0, 0, 500, 430);
        }

        if (screen.width <= 480) {
            objAmount = 4;
            objSize = 30;
        } else {
            objAmount = 4;
            objSize = 50;
        }

        // Circles
        for (var i = 0; i < objAmount; i++) {

            var x = p.random(rightWall.pos.x, rightWall.pos.x * 2 - 50);
            var y = p.random(0, skillSection.e.offsetHeight);

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
            var _x = p.random(0, rightWall.pos.x - 50);
            var _y = p.random(0, skillSection.e.offsetHeight);

            var _speedX = p.random(-1.5, 1.5);
            var _speedY = p.random(-1.5, 1.5);

            if (_speedX == 0) {
                _speedX = 1;
            }

            if (_speedY == 0) {
                _speedY = 1;
            }

            numbers[_i2] = new Text(_i2, _x, _y, objSize, _speedX, _speedY);
        }

        p.frameRate(60);
    };

    p.draw = function () {

        p.background(255);

        brain.update();
        brain.draw();

        p.strokeWeight(4);
        p.stroke(156, 205, 207);

        // circleMouse.draw();

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
        } else {
            objAmount = 10;
        }

        rightWall = {
            pos: {
                x: skillSection.e.offsetWidth / 2,
                y: 0
            },
            size: {
                width: skillSection.e.offsetWidth / 2
            }

        };

        if (window.innerWidth <= 480) {
            brain.width = 200;
            brain.height = 170;
        } else {
            brain.width = 500;
            brain.height = 430;
        }

        if (window.innerWidth >= 1200) {
            brain.width = 700;
            brain.height = 630;
        }

        p.resizeCanvas(skillSection.e.offsetWidth, skillSection.e.offsetHeight);
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

            this.img = img;

            this.x = x;
            this.y = y;

            this.width = width;
            this.height = height;
        }

        _createClass(BrainImg, [{
            key: 'draw',
            value: function draw() {
                p.image(this.img, this.x, this.y, this.width, this.height);
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

var showSkillSketch = new p5(skillSketch, skillSection.id);

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
    $('.work-paginator ul').append('\n    <li><a href=\'#work\'>' + (i + 1) + '</a></li>\n    ');
}

workPaginator.css('top', '-' + (workSection.height() / 2 - 70) + 'px');

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

document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});});
//# sourceMappingURL=app.js.map
