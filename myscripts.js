var page = 0;

window.onload = function() {}

function toggleBody() {
    switch (page) {
        case 0:
            document.getElementsByClassName('intro')[0].hidden = true;
            document.getElementsByClassName('experience')[0].hidden = false;
            page += 1;
            break;
        case 1:
            document.getElementsByClassName('intro')[0].hidden = false;
            document.getElementsByClassName('experience')[0].hidden = true;
            page -= 1;
            break;
        default:
            break;
    }
    console.log("Page:", page);
}