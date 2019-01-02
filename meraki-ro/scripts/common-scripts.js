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


    }) // End ready function.

})(jQuery)