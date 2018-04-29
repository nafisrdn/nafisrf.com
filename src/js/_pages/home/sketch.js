// work sketch

let aboutSection = $('section#about');
let skillSection = $('section#skill');

if (aboutSection.length) {
    let showAboutSketch = new NoiseSketch(aboutSection, '/img/particles.jpg').sketch;

    let showAboutSketch2 = new p5(showAboutSketch, 'about');
}


if (skillSection.length) {
    let test = new BubbleAndNum(skillSection, 7, '/img/white-brain.jpg');

    let skillSectionSketch2 = new p5(test.sketch, 'skill');
}

