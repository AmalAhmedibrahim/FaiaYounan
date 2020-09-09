$(document).on('load', function() {
    // $('.tunehill-preloader').fadeOut(500);
})
$(document).scroll(function() {
    // debugger
    var scroll = $(document).scrollTop();

    if (scroll >= 400) {
        // $(".my-nav").addClass("scrolling");
        
         $('.mynav').css('background', '#222');
        $('.header').css('background', '#222');
        $('.nav-container').css('background', '#222');
    } else {
        $('.mynav').css('background', 'transparent');
        $('.header').css('background', 'transparent');
         $('.nav-container').css('background', 'transparent');
    }
});




