let aboutSection = {
    e: document.getElementById('about'),
    id: 'about',
    size: {
        width: document.getElementById('about').offsetWidth,
        height: document.getElementById('about').offsetHeight
    }
}

let aboutSketch = p => {
    let noiseScale = 0.02;
    let fps;
    let bgImg;

    p.preload = () => {
        bgImg = p.loadImage('/img/particles.jpg');
    }

    p.setup = () => {
        p.createCanvas(aboutSection.size.width, aboutSection.size.height);
        bgImg.loadPixels();
        p.noLoop();
        
    }

    p.draw = () => {
        p.background(13, 18, 24);

        p.image(bgImg, 0, 0, aboutSection.size.width, aboutSection.size.height);


        p.stroke(255);

        for (let x = 0; x < p.width; x++) {
            let noiseVal = p.noise(x * noiseScale, noiseScale * 500);
            p.line(x,  (p.height - 50) + noiseVal * 80, x, p.height);
        }

    }

    p.windowResized = () => {
        aboutSection.size.width = aboutSection.e.offsetWidth;
        aboutSection.size.height = aboutSection.e.offsetHeight;

        p.resizeCanvas(aboutSection.size.width, aboutSection.size.height);
        
    }
}

let showAboutSketch = new p5(aboutSketch, aboutSection.id);