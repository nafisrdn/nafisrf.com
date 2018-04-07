
const heroDiv = {
    element: document.querySelector('section#hero'),
    size: {
        width: document.getElementById('hero').offsetWidth,
        height: document.getElementById('hero').offsetHeight
    }
}

let heroSketch = core => {

    let circle;
    let history = [];
    let yoff = 0.0; 

    core.setup = () => {
        core.createCanvas(heroDiv.size.width, heroDiv.size.height);

        circle = new Circle(core.mouseX, core.mouseY);

        circle.y = window.scrollY + (core.height / 2);
    }
    

    let ballSpeed = 1;

    core.draw = () => {

    
        core.background(255);

        core.fill(10, 15, 21);
        // We are going to draw a polygon out of the wave points
        core.beginShape();

        var xoff = 0;       // Option #1: 2D Noise
        // var xoff = yoff; // Option #2: 1D Noise

        // Iterate over horizontal pixels
        for (var x = 0; x <= core.width; x += 10) {
            // Calculate a y value according to noise, map to 

            // Option #1: 2D Noise
            var y = core.map(core.noise(xoff, yoff), 0, 1, 200, 300);

            // Option #2: 1D Noise
            // var y = map(noise(xoff), 0, 1, 200,300);

            // Set the vertex
            core.vertex(x, y);
            // Increment x dimension for noise
            xoff += 0.05;
        }
        // increment y dimension for noise
        yoff += 0.01;
        core.vertex(core.width+200, core.height+10);
        core.vertex(0, core.height + 10);
        core.endShape(core.CLOSE);
    }

    core.mouseWheel = () => {

        // alert('a');
    }

    core.windowResized = () => {
        heroDiv.size.width = document.getElementById('hero').offsetWidth;
        heroDiv.size.height = document.getElementById('hero').offsetHeight;

        core.resizeCanvas(heroDiv.size.width, heroDiv.size.height);
        console.log(heroDiv.size);
        
    }

    let touchEnd = false;


    if (/Android|webOS|iPhone|iPad|BlackBerry|Windows Phone|Opera Mini|IEMobile|Mobile/i.test(navigator.userAgent)){

    core.touchMoved = () => {
        touchEnd = false;
    }

    core.touchEnded = () => {
        
        // circle.history.splice(0, circle.history.length);
        // circle.x = 0;

        touchEnd = true;

        console.log(circle.history);

        // alert('yo');
        
    }

}

    class Circle{

        constructor(x, y){
            this.x = x;
            this.y = y;

            this.history = [];
            this.trail;
        }

        draw(){
            core.ellipse(this.x, this.y, 80, 80);

            // this.goTo(core.mouseX, core.mouseY, 5);

            

            if (touchEnd){
                this.history.splice(0, this.history.length);
            }

            if (this.history.length > 10) {
                this.history.splice(0, 1);
            }

            

            

            this.trail = core.createVector(this.x, this.y);
            this.history.push(this.trail);

            core.beginShape()
            for (let i = 0; i < this.history.length; i++) {
                let pos = this.history[i];
                // core.ellipse(pos.x, pos.y, 40, 40);
                core.vertex(pos.x, pos.y);
                // core.curveVertex(pos.x, pos.y);
            }
            core.endShape()


        }

        goTo(targetX, targetY, speed){
            if (this.x < targetX) {
                this.x += speed;
            }
            if (this.x > targetX) {
                this.x -= speed;
            }

            if (this.y < targetY) {
                this.y += speed;
            }

            if (this.y > targetY) {
                this.y -= speed;
            }

            
        }
    }
}

let test = new p5(heroSketch, 'hero');