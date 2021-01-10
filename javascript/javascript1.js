$(document).ready(function()
{
    $('.contact,.boxes').on('inview', function(event, isInView) {
        if (isInView)
        {
            $(this).animate({'opacity': '1',"margin-top":"20px"},1000);
        }
    });
});
