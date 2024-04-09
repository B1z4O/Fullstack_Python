$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    });

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    });

    $('form').on('submit', function(e) {
        e.preventDefault();

        const novaAtividade = $('#nome-atividade').val();

        if ($('ul').find(`li:contains(${novaAtividade})`).length === 0) {
            $('ul').append(`<li>${novaAtividade}</li>`);
            $('#nome-atividade').val('');
        } else {
            alert('Essa tarefa já existe na lista.');
        }
    });

    $('ul').on('click', 'li', function() {
        $(this).toggleClass('linha-meio');
    });
});