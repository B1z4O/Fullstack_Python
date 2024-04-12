$(document).ready(function() {
    $('#tel').mask('(00) 00000-0000')

    $('#cpf').mask('000.000.000-00')

    $('#cep').mask('00000-000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            tel: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }
        },

        messages: {
            nome: "Por favor, digite seu nome completo.",
            email: "Por favor, digite um endereço de email válido.",
            tel: "Por favor, digite um número de telefone válido.",
            cpf: "Por favor, digite um CPF válido.",
            endereco: "Por favor, digite um endereço completo.",
            cep: "Por favor, digite um CEP válido."
        },
        submitHandler: function(form) {
            console.log(form)
            $('#nome').val('');
            $('#email').val('');
            $('#tel').val('');
            $('#cpf').val('');
            $('#endereco').val('');
            $('#cep').val('');
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos!`)
            }
        }
    })
})