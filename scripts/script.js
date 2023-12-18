$('#join').click(() => {
    console.log("Joined");
})

const len = Array.from($('.slide')).length;
let slide = 2, prev = 1;


setInterval(() => {

    if (slide < 1) {
        slide = len;
        prev = 1;
    } else if (slide > len) {
        slide = 1;
        prev = len;
    }

    $(`.slide:nth-child(${slide})`).toggleClass('toggle');
    $(`.slide:nth-child(${prev})`).toggleClass('toggle');

    prev = slide;
    slide++;

}, 2000)

$('#previous').click(() => {
    slide -= 2;
});

$('#next').click(() => {
    slide = slide;
});

