

$(document).ready(() => {

    const workWrapper = $('.work-wrapper');
    const group = $('.work-group');

    let groupLength = workWrapper.children().length;
    let visible = 1;
    let index = 0;
    let endIndex = (group.length / visible) - 1;

    // console.log(workWrapper.children());
    

    for (let i = 0; i < groupLength; i++) {
        $('.work-paginator ul').append(`
        <li><a href='#'>${i + 1}</a></li>`);

        console.log(i);
    }

    $('.work-paginator .icon-arrow-left').click(() => {
        if (index > 0) {
            index--;
            group.animate({ 'left': `+=${group.width()}` });
        }else{
            index = endIndex;
            group.animate({'left': `-${group.width() * (groupLength - 1)}`});
        }

        console.log(index);

    });

    $('.work-paginator .icon-arrow-right').click(() => {
        if (index < endIndex) {
            index++;
            group.animate({ 'left': `-=${group.width()}` });
        }else {
            index = 0;
            group.animate({ 'left': '0px' });
        }
    });
});