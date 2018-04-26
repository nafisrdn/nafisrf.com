var noiseSketch = function(section, img) {

    this.img = img;
    this.section = section;

    var clsp = this;
    

    this.sketch = function(p) {
        const section = clsp.section;
        let noiseScale = 0.02;
        let fps;
        let bgImg;


        console.log(section.width());
        

        

        p.preload = () => {
            bgImg = p.loadImage(clsp.img);
        }

        p.setup = () => {
            p.createCanvas(section.width(), section.height());
            bgImg.loadPixels();
            p.noLoop();

        }

        p.draw = () => {
            p.background(13, 18, 24);

            p.image(bgImg, 0, 0, section.width(), section.height());


            p.stroke(255);

            for (let x = 0; x < p.width; x++) {
                let noiseVal = p.noise(x * noiseScale, noiseScale * 500);
                p.line(x, (p.height - 50) + noiseVal * 80, x, p.height);
            }

        }

        p.windowResized = () => {
            p.resizeCanvas(section.width(), section.height());
        }
    }
}
