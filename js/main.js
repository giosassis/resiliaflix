$(window).scroll(function(){//mudar a navbar ao scrollar
    $('nav').toggleClass('scrolled',$(this).scrollTop()>100);
});
