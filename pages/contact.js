// when the page shows, call the functions
window.onpageshow = function() {
    scrollFade()
};

// changes the element class to slideUp/slideUpOther to make the animation run
function scrollFade() {
    document.getElementById("profile-pic").className = "slideUp";
}
