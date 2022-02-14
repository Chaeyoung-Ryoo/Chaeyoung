$(function(){

    var _body = $( "body" );
    $( ".mobile-gnb-btn" ).on( "click",function(){

        if ( _body.hasClass( "mobile-gnb-on" ) ) {
            _body.removeClass( "mobile-gnb-on" );
        } else {
            _body.addClass( "mobile-gnb-on" );
        }
    });

    $( ".page-heading-button" ).on( "click",function(){

        if ( _body.hasClass( "dstory-on" ) ) {
            _body.removeClass( "dstory-on" );
        } else {
            _body.addClass( "dstory-on" );
        }
    });


        /* 
            $("").parents("");

            body를 클릭했을 때
            this가 aside컨테이너가 아니거나,
            $(this). = !(aside컨테이너)
            
            this의 조상요소에 aside컨테이너가 존재하지 않았을 때
            $(this).parents("aside컨테이너")   => 존재할때임 이건..
        */

    /* Swiper */
    var swiper = new Swiper('.swiper', {
        slidesPerView: 'auto',
        loop: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
    });
});