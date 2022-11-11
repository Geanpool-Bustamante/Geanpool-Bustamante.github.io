$(document).ready(function() {
    $('#btnSend').click(function() {
        let errores = '';

        if ($('#names').val() == '') {
            errores += '<p><span class="icon-warning"></span> Escriba un nombre</p>';
            $('#names').css("border-bottom-color", "#e7d958")
        } else {
            $('#names').css("border-bottom-color", "#d1d1d1")
        }

        if ($('#email').val() == '') {
            errores += '<p><span class="icon-warning"></span> Ingrese un correo</p>';
            $('#email').css("border-bottom-color", "#e7d958")
        } else {
            $('#email').css("border-bottom-color", "#d1d1d1")
        }

        if ($('#mensaje').val() == '') {
            errores += '<p><span class="icon-warning"></span> Escriba un mensaje</p>';
            $('#mensaje').css("border-bottom-color", "#e7d958")
        } else {
            $('#mensaje').css("border-bottom-color", "#d1d1d1")
        }

        if (errores == '' == false) {
            let mensajeModal = '<div class="modal_wrap">' +
                '<div class="mensaje_modal">' +
                '<h3>Errores encontrados</h3>' +
                errores +
                '<span id="btnClose">Cerrar</span>' +
                '</div>' +
                '</div>'

            $('body').append(mensajeModal);
        }

        // CERRANDO MODAL ==============================
        $('#btnClose').click(function() {
            $('.modal_wrap').remove();
        });
    });

});