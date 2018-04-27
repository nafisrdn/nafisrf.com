
const workSection = $('section#work');
const workWrapper = $('.work-wrapper');
const group = $('.work-group');
const workPaginator = $('.work-paginator');

let groupLength = workWrapper.children().length;
let visible = 1;
let index = 0;
let endIndex = (group.length / visible) - 1;
let active = true;





for (let i = 0; i < groupLength; i++) {
    $('.work-paginator ul')
    .append(`
    <li><a href='#work'>${i + 1}</a></li>
    `);
}

    workPaginator.css('top', `-${(workSection.height() / 2) - 70}px`);

    updatePaginatorNumbers(1);  

    $('.work-paginator ul li').click(function () {
        updatePaginatorNumbers($(this).index() + 1);
        
        index = $(this).index();
        leftWork(`-${group.width() * (index)}px`);

    });
    

    $('.work-paginator .icon-arrow-left').click(() => {

        if (active) {
            active = false;

            if (index > 0) {
                previousWork();
            } else {
                endWork();
            }

            window.setTimeout(function () {
                active = true;
            }, 300);
        }

        

        updatePaginatorNumbers(index + 1);
    });

    $('.work-paginator .icon-arrow-right').click(() => {


        if (active) {
            active = false;
            if (index < endIndex) {
                nextWork();
            } else {
                startWork();
            }

            window.setTimeout(function () {
                active = true;
            }, 300);
        }
        

        updatePaginatorNumbers(index + 1);
    });

    function leftWork(pos) {
        group.css({ 'left': pos });
        
    }

    function previousWork() {
        index--;
        group.css({ 'left': `+=${group.width()}` });
    }

    function nextWork() {
       
        index++;
        group.css({ 'left': `-=${group.width()}` });  
 
    }

    function startWork() {
        index = 0;
        group.css({ 'left': '0px' });
    }

    function endWork() {
        index = endIndex;
        group.css({ 'left': `-${group.width() * (groupLength - 1)}px` });
        
    }

    function updatePaginatorNumbers(i) {
        const num = $(`.work-paginator ul li:nth-child(${i})`);

        $('.work-paginator ul li').removeClass('selected');

        num.addClass('selected');
    }


