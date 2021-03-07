
//burger
$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__navigation-list').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

$('a[href*="#"]').on('click', function (e) {
    e.preventDefault();
    
   
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top - 50
    }, 500, 'linear');

});



