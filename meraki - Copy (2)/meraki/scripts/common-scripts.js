;
(function ($) {
    $(function () {

        // Begin input common focus and blur for value.
        $('input:text, input:password,input[type="email"],input[type="tel"],input[type="number"],input[type="search"], textarea').focus(function () {
            if (this.value == this.defaultValue) {
                this.value = ''
            }
        }).blur(function () {
            if (!this.value) {
                this.value = this.defaultValue;
            }
        })
        // Ends input common focus and blur for value.

        //this is mobile nav 
        $('.phone-nav').on('click', function(){
            $('.main-nav').slideToggle();
        })


        // addClass to home body
        if($('.home-content').length){
            $('body').addClass('home-page')
        }

        // this is for footer input-animation
        $('.footer-col input[type="email"]').focus(function () {
            $(this).parents('.footer-col').addClass('active')
        }).blur(function () {
            $(this).parents('.footer-col').removeClass('active')
        });


        //this is for modal
        $('.online-book').on('click', function(e){
            e.preventDefault();
            e.stopPropagation();
            $('.modal-wrap').fadeIn();

        })

        $('.newsletter-container').on('click', function(e){
            e.stopPropagation();
        })

        $('.cross-icon, body').on('click', function(){
            $('.modal-wrap').fadeOut();
        })


        //this is selectric
        if ($("select.styled-select").length) {
            $('select.styled-select').selectric();
        }

    }) // End ready function.

})(jQuery)