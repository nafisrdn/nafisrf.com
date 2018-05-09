// work sketch

let aboutSection = $('section#about');
let skillSection = $('section#skill');
let contactSection = $('section#contact');

if (aboutSection.length) {
    let showAboutSketch = new NoiseSketch(aboutSection, '/img/particles.jpg').sketch;

    let showAboutSketch2 = new p5(showAboutSketch, 'about');
}


if (skillSection.length) {

    let objTotal = 7;

    if($(window).width() < 960){
        objTotal = 4;
        
    }

    let test = new BubbleAndNum(skillSection, 7, '/img/white-brain.jpg');

    let skillSectionSketch2 = new p5(test.sketch, 'skill');
}

if (contactSection.length) {
    let objTotal = 5;

    if ($(window).width() < 960) {
        objTotal = 3;
    }

    let test = new BubbleAndNum(contactSection, objTotal);

    let contactSectionSketch = new p5(test.sketch, 'contact');
}
