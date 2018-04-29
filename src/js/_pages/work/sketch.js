// work sketch

let firstSectionWork = $('section#first');
let postContentSection = $('section#post-content');




if (firstSectionWork.length) {
    let showFirstSketch = new NoiseSketch(firstSectionWork, '/img/particles.jpg').sketch;

    let showFirstSketch2 = new p5(showFirstSketch, 'first');
}

if (postContentSection.length) {
    let test = new BubbleAndNum(postContentSection, 20);
    
    let showPostSketch2 = new p5(test.sketch, 'post-content');
}

