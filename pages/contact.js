window.onpageshow = function() {scrollFade()};
window.onpageshow = function() {scrollFadeOther()};

function scrollFade() {
    
    document.getElementById("profile-pic").className = "slideUp";
}
function scrollFadeOther() {
    document.getElementById("c++").className = "slideUpOther";
}