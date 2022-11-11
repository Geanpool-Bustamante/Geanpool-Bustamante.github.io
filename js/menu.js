$(document).ready(function() {

    $('#btn-menu').click(function() {
        if ($('.btn-menu span').attr('class') == 'icon-menu') {

            $('.btn-menu span').removeClass('icon-menu').addClass('icon-cross').css({ 'color': '#fff' });
            $('.full-menu').css({ 'left': '0' });

        } else {
            $('.btn-menu span').removeClass('icon-cross').addClass('icon-menu').css({ 'color': '#fff' });
            $('.full-menu').css({ 'left': '-100%' });
        }

    });

});

$(document).ready(function() {
    $('.navegacion').click(function() {
        if ($('.btn-menu span').attr('class') == 'icon-menu') {

            $('.btn-menu span').removeClass('icon-menu').addClass('icon-cross').css({ 'color': '#fff' });
            $('.full-menu').css({ 'left': '0' });
        } else {
            $('.btn-menu span').removeClass('icon-cross').addClass('icon-menu').css({ 'color': '#fff' });
            $('.full-menu').css({ 'left': '-100%' });
        }
    });
});