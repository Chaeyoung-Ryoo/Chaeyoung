$(function(){

    var _body = $( "body" );

    $( ".contact-btn" ).on( "click",function(){

        if ( _body.hasClass( "contact-on" ) ) {
            _body.removeClass( "contact-on" );
        } else {
            _body.addClass( "contact-on" );
        }
    });

    $( ".info-btn, .close-btn" ).on( "click",function(){

        if ( _body.hasClass( "info-on" ) ) {
            _body.removeClass( "info-on" );
        } else {
            _body.addClass( "info-on" );
        }
    });

    _body.click(function( e ){

        var t = e.target;
        var my = document.querySelector( ".info-wrap" );
        var $_my = $( ".info-wrap" );
        var $_t_parents = $(e.target).parents( ".info-wrap" );
 
        console.log( e.target )
 
        if (t === my || $_t_parents.length) {
             console.log( "yes" );
        } else {
            console.log("no");
            _body.removeClass( "info-on" );
        }
     });
     

});