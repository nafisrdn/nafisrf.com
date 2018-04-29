var NoiseSketch = function(section, img=null) {

    this.img = img;
    this.section = section;
    

    var clsp = this;
    

    this.sketch = function(p) {
        const section = clsp.section;
        let noiseScale = 0.02;
        let fps;
        let img = clsp.img;
        let bgImg;
        

        

        p.preload = () => {
            if (img != null) {
                bgImg = p.loadImage(img);    
            }
        }

        p.setup = () => {

            p.createCanvas(section.width(), section.outerHeight());
            if (img != null) {
                bgImg.loadPixels();
            }
            p.noLoop();   


            

        }

        p.draw = () => {
            p.background(13, 18, 24);

            if (img != null) {
                p.image(bgImg, 0, 0, section.width(), section.outerHeight());  
            }
            

            
            


            p.stroke(255);

            for (let x = 0; x < p.width; x++) {
                let noiseVal = p.noise(x * noiseScale, noiseScale * 500);
                p.line(x, (p.height - 50) + noiseVal * 80, x, p.height);
            }

        }

        p.windowResized = () => {
            p.resizeCanvas(section.width(), section.outerHeight());
            
        }
    }
}

var BubbleAndNum = function (section, val = 10, img = null) {

    this.section = section;
    this.val = val;
    this.img = img;

    // console.log(img);
    


    this.sketch = function (p) {
        let bgimg;
        

        let rightWall = {
            pos: {
                x: section.outerWidth() / 2,
                y: 0
            },
            size: {
                width: section.outerWidth() / 2
            }

        };

        let circles = [];
        let numbers = [];

        let objAmount = val;
        let objSize;

        let circleMouse;

        p.setup = () => {
            

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
            for (let i = 0; i < objAmount; i++) {

                let x = p.random(rightWall.pos.x, (rightWall.pos.x * 2) - 50);
                let y = p.random(0, section.outerHeight());

                let speedX = p.random(-1.5, 1.5);
                let speedY = p.random(-1.5, 1.5);

                if (speedX == 0) {
                    speedX = 1;
                }

                if (speedY == 0) {
                    speedY = 1;
                }

                circles[i] = new Circle(x, y, objSize, speedX, speedY);
            }

            // Numbers
            for (let i = 0; i < objAmount; i++) {
                let x = p.random(0, rightWall.pos.x - 50);
                let y = p.random(0, section.outerHeight());

                let speedX = p.random(-1.5, 1.5);
                let speedY = p.random(-1.5, 1.5);

                if (speedX == 0) {
                    speedX = 1;
                }

                if (speedY == 0) {
                    speedY = 1;
                }

                numbers[i] = new Text(i, x, y, objSize, speedX, speedY);
            }

            p.frameRate(60);
        }

        p.draw = () => {

            p.background(255);

            if (img != null) {
                bgimg.update();
                bgimg.draw();
            }
            
            



            p.strokeWeight(4);
            p.stroke(156, 205, 207);

            // Numbers
            for (let i = 0; i < numbers.length; i++) {
                const number = numbers[i];

                number.update();
                number.draw();

                // p.fill(0, 255,0);
                // p.ellipse(number.x, number.y, 5, 5);
            }

            // Circles
            for (let i = 0; i < circles.length; i++) {

                let overlapping = false;

                circles[i].noFill();

                circles[i].update();
                circles[i].draw();

                for (let other = 0; other < circles.length; other++) {
                    if (i != other && circles[i].intersectCircle(circles[other])) {
                        overlapping = true;
                    }

                }

                if (overlapping) {
                    circles[i].stroke([0, 98, 255]);

                } else {
                    circles[i].stroke([156, 205, 207]);
                }
            }

        }

        p.windowResized = () => {

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
        }

        class Text {
            constructor(text, x, y, size, speedX = 2, speedY = 2) {
                this.text = text;

                this.x = x + 50;
                this.y = y + 50;

                this.size = size;

                this.speedX = speedX;
                this.speedY = speedY;

                this.fillColor = [156, 205, 207];
            }

            draw() {
                p.noStroke();

                p.fill(this.fillColor);
                p.textSize(this.size);
                p.text(this.text, this.x, this.y);

            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                this.intersectWall();
            }

            intersectWall() {
                if (this.x >= rightWall.pos.x - (this.size / 2)) {
                    this.x = rightWall.pos.x - (this.size / 2);
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
        }

        class Circle {
            constructor(x, y, size, speedX = 2, speedY = 2) {
                this.x = x + 50;
                this.y = y + 50;

                this.size = size;

                this.speedX = speedX;
                this.speedY = speedY;

                this.fillColor = 0;
                this.strokeColor = 0;
            }

            draw() {
                p.stroke(this.strokeColor);
                if (this.noFill) {
                    p.noFill();
                } else {
                    p.fill(this.fillColor);
                }

                p.ellipse(this.x, this.y, this.size, this.size);

            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                this.intersectWall();
            }

            noFill(b) {
                return b;
            }

            fill(color) {
                this.fillColor = color;
            }

            stroke(color) {
                this.strokeColor = color;
            }

            intersectCircle(other) {
                let d = p.dist(this.x, this.y, other.x, other.y);
                let fd = (this.size / 2) + (other.size / 2);

                return d < fd;
            }

            intersectWall() {
                if (this.x >= p.width - (this.size / 2)) {
                    this.x = p.width - (this.size / 2);
                    this.speedX = this.speedX * -1;
                }

                if (this.x <= rightWall.pos.x + (this.size / 2)) {
                    this.x = rightWall.pos.x + this.size / 2;
                    this.speedX = this.speedX * -1;
                }

                if (this.y >= p.height - (this.size / 2)) {
                    this.y = p.height - (this.size / 2);
                    this.speedY = this.speedY * -1;
                }

                if (this.y <= this.size / 2) {
                    this.y = this.size / 2;
                    this.speedY = this.speedY * -1;
                }

            }
        }

        class BrainImg {
            constructor(img, x, y, width, height) {
                this.img = p.loadImage(img);

                this.x = x;
                this.y = y;

                this.width = width;
                this.height = height;
            }

            draw() {
                p.image(this.img, this.x, this.y, this.width, this.height);
                // console.log(this.img);
                
            }

            update() {
                this.x = (p.width / 2) - (this.width / 2);
                this.y = (p.height / 2) - (this.height / 2);
            }

            followY(targetY, speedY) {
                if (this.y < targetY) {
                    this.y += speedY;
                }

                if (this.y > targetY) {
                    this.y -= speedY;
                }
            }
        }
    }
}
