/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
}

/* Enable tooltips everywhere */
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

/* Enable popovers everywhere */
$(function () {
    $('[data-toggle="popover"]').popover()
})

/* Enable tooltip & popovers everywhere */
/* Cái này Hiếu tự nghĩ ra 💜 */
$(function () {
    $('[data-toggle="tooltip-popover"]').tooltip()
    $('[data-toggle="tooltip-popover"]').popover()
})