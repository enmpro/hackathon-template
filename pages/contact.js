window.onpageshow = function() {
    scrollFade()
    scrollFadeOther()
};


function scrollFade() {
    
    document.getElementById("profile-pic").className = "slideUp";
}
function scrollFadeOther() {
    document.getElementById("c++").className = "slideUpOther";
}