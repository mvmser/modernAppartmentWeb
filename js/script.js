$(document).ready(function() 
{
    $('.js-scroll').on('click', function() 
    {
        var page = $(this).attr('href');
        var speed = 1050; 
        $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); 
        return false;
    });
});





            var $imageupload = $('.imageupload');
            $imageupload.imageupload();
