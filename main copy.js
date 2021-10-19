$('.menu-toggle').on('click', function() {

	$('.menu').toggleClass('open')
    $('body').toggleClass('open')

  return false

 })

 $(document).ready(function() {

    $('a[href=#top]').click(function(){
        $('html, body').animate({scrollTop:0}, 'slow');
        return false;
    });

});

$(document).ready(function(){
    $(".menu-toggle").click(function(){
        $(".open").fadeToggle(200);
       $(this).toggleClass('btn-open').toggleClass('btn-close');
    });
});
$('.overlay').on('click', function(){
    $(".open").fadeToggle(200);   
    $(".menu-toggle").toggleClass('btn-open').toggleClass('btn-close');
    open = false;
});
