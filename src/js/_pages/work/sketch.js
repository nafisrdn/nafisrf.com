// work sketch

let firstSectionWork = $('section#first');
let postContentSection = $('section#post-content');




if (firstSectionWork.length) {
    let showFirstSketch = new NoiseSketch(firstSectionWork, '/img/particles.jpg').sketch;

    let showFirstSketch2 = new p5(showFirstSketch, 'first');
}

if (postContentSection.length && $(window).width() > 960) {

    let objTotal = 10;

    let test = new BubbleAndNum(postContentSection, objTotal);
    
    let showPostSketch2 = new p5(test.sketch, 'post-content');
}

