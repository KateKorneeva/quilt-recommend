// Sticky Header
$(window).scroll(function() {

    if ($(window).scrollTop() > 100) {
        $('.head').addClass('sticky');
    } else {
        $('.head').removeClass('sticky');
    }
});

// Navigation Scroll
$('nav a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});