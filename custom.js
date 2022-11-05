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
    
    if (height > 50) {
        $("body").addClass("scrolled");
    }
    else {
        $("body").removeClass("scrolled");
    }
});
$(document).ready(function () {
    setTimeout(function () {
        $("body").addClass("animation");
    }, 3_000);
    $(".toggle-menu").on("click", function () {
        $("body").toggleClass("isMenu");
        $(".fa-times").toggleClass("fa-bars");
    });
});