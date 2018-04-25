// const workOuter = document.querySelector('#work .work-outer');
// const workArticle = document.querySelector('#work article');
// const workArticleHeight =
//     parseInt(window.getComputedStyle(workArticle, null).getPropertyValue("height")) 
//     + parseInt(window.getComputedStyle(workArticle, null).getPropertyValue("margin"));

// function setWork() {
//     workOuter.setAttribute('style', `
//         height: ${(workArticleHeight * 2)}px;
//     `);
// }

// setWork();

// window.addEventListener('resize', () => {
//     setWork();
// })

// console.log(window.getComputedStyle(workArticle, null).getPropertyValue("height"));


const workWrapper = document.querySelector('.work-wrapper');
const workWrapperWidth =
    parseInt(window.getComputedStyle(workWrapper, null).getPropertyValue("height"))
    + parseInt(window.getComputedStyle(workWrapper, null).getPropertyValue("margin"));


const workGroup = document.querySelectorAll('.work-group');
const workGroupWidth =
    parseInt(window.getComputedStyle(workGroup[0], null).getPropertyValue("height")) 
    + parseInt(window.getComputedStyle(workGroup[0], null).getPropertyValue("margin"));


const workPaginatorNum = document.querySelectorAll('.work-paginator ul li a');

const worksPos = {};



for (let i = 0; i < workPaginatorNum.length; i++) {
    const paginator = workPaginatorNum[i];
    console.log(i);
    paginator.addEventListener('click', () => {
        console.log(i);
        
        workWrapper.setAttribute('style', 
            `transform: translateX(-${workWrapperWidth}px)`);

    })
}

workGroup.forEach(function (work) {
    console.log(work);

});