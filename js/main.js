// Animate Smooth scroll 
// View Work

$('#view-work').on('click', function() {
    const images = $('#section-c').position().top;
    
    $('html, body').animate({
        scrollTop: images
        }, 800);
    });
    
    // View Footer
    
    $('#view-footer').on('click', function(){
        const footer = $('#section-d').position().top;
    
    $('html, body').animate({
        scrollTop: footer
        }, 800);
    });

    // Go back up
    $('#fixedbutton').on('click', function() {
        const top = $('#showcase').position().top;

    $('html, body').animate({
        scrollTop: top
        }, 800);
    });   