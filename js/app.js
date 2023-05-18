$(document).ready(function(){
    $('#btnSend').click(function(){
        var errores = '';
        
        if ( $('#names').val() == ''){
            errores += '<p>Escriba un nombre</p>';
            $('#names').css('border-botton-color','#F14B4B')
        } else{
            $('#names').css('border-botton-color','#rgb(126, 144, 165)')
        }
        if ( $('#email').val() == ''){
            errores += '<p>Ingrese un correo electrónico</p>';
            $('#email').css('border-botton-color','#F14B4B')
        } else{
            $('#email').css('border-botton-color','#rgb(126, 144, 165)')
        }
        if ( $('#mensaje').val() == ''){
            errores += '<p>Escriba un mensaje</p>';
            $('#mensaje').css('border-botton-color','#F14B4B')
        } else{
            $('#mensaje').css('border-botton-color','#rgb(126, 144, 165)')
        }

        if (errores == '' == false){
            var mensajeModal = '<div class="modal_wrap">'+
                                    '<div class="mensaje_modal">'+
                                        '<h3>Errores encontrados</h3>'+
                                        errores+
                                        '<span id="btnClose">Cerrar</span>'+
                                    '</div>'+
                                '</div>'

            $('body').append(mensajeModal);
        }
        
        $('#btnClose').click(function(){
            $('.modal_wrap').remove()
        })
    });
});