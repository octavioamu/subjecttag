;(function($) {

    $('#lista').on('keyup', function() {
        localStorage.setItem('dados', $('#lista').html());
    });

    if (localStorage.getItem('dados')) {
        $('#lista').html(localStorage.getItem('dados'));
    }

    $('#limpar').click(function() {
        localStorage.clear();
        window.location = window.location;
    });

})(jQuery);