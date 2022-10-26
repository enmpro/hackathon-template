// when the page shows, call the functions
window.onpageshow = function() {
    scrollFade()
    scrollFadeOther()
};

// changes the element class to slideUp/slideUpOther to make the animation run
function scrollFade() {
    document.getElementById("profile-pic").className = "slideUp";
}
function scrollFadeOther() {
    document.getElementById("c++").className = "slideUpOther";
    document.getElementById("java").className = "slideUpOther";
    document.getElementById("python").className = "slideUpOther";
}