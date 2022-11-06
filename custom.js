var logo = ("F a r m e r &nbsp; D e l i g h t ").split(" ");
var trans_time = .4;
function ShowContent() {
    document.getElementById("root").classList.remove('hidden');
}
$(window).on("load", function () {
    setTimeout(function () {
        $(".pre-load-content").fadeOut("slow");
        setTimeout(ShowContent, 1_000);
    }, 1_000);
    
});
$(window).on("scroll", function () {
    var height = $(window).scrollTop();
    
    if (height > 20) {
        $("body").addClass("scrolled");
    }
    else {
        $("body").removeClass("scrolled");
    }
});
$(document).ready(function () {
    setTimeout(function () {
        $("body").addClass("animation");
    }, 1_500);
    $(".toggle-menu").on("click", function () {
        $("body").toggleClass("isMenu");
        $(".fa-times").toggleClass("fa-bars");
    });
    var $textLogo = $(".side-text-logo");
    logo.forEach((e) => {
        var text = `<span style='transition-delay: ${trans_time.toFixed(2)}s;'>${e}</span><br />`;
        var $p = $(text);
        $textLogo.append($p);
        trans_time += 0.1;
    });
});