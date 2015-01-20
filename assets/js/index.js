/**
 * Return to top script
 */

(function($) {

    function returnToTop($){
        var upperLimit = 500;
        var scrollElem = $('#return-top');
        var scrollSpeed = 800;
        scrollElem.hide();
        $(window).scroll(function () {
            var scrollTop = $(document).scrollTop();
            if ( scrollTop > upperLimit ) {
                $(scrollElem).stop().fadeTo(300, 1); // fade back in
            }else{
                $(scrollElem).stop().fadeTo(300, 0); // fade out
            }
        });
        $(scrollElem).click(function(){
            $('html, body').animate({scrollTop:0}, scrollSpeed); return false;
        });
    }

    function navBtn($){
        var bodyEl = $('body'),
            content = $('.main-wrap'),
            navBtn = $('.nav-btn'),
            isOpen = false;

        function init() {
            initEvents();
        }

        function initEvents() {
            navBtn.click( toggleMenu );

            content.click( function(ev) {
                var target = ev.target;
                if( isOpen && target !== navBtn ) {
                    toggleMenu();
                }
            } );
        }

        function toggleMenu() {
            if( isOpen ) {
                bodyEl.removeClass('show-nav');
            }
            else {
                bodyEl.addClass('show-nav');
            }
            isOpen = !isOpen;
        }

        init();
    }

    navBtn($);
    returnToTop($);
})(jQuery);