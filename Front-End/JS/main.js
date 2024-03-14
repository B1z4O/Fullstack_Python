const form = document.getElementById('form-task');

form.addEventListener('submit',function(e) {
    e.preventDefault();   
    
    const primeiroNumero = document.getElementById('primeiro-numero');
    const segundoNumero = document.getElementById('segundo-numero');
    
    const n1 = parseInt(primeiroNumero.value);
    const n2 = parseInt(segundoNumero.value);

    const mensagemOk = `Sucesso! O ${primeiroNumero.value} é menor que ${segundoNumero.value}!`
    const mensagemErro = document.querySelector('.error-message');

    if (n1 < n2) {
        const containerMensagemOk = document.querySelector('.success-message');
        containerMensagemOk.innerHTML = mensagemOk;
        containerMensagemOk.style.display = 'block';
        mensagemErro.style.display = 'none';

        primeiroNumero.value = '';
        segundoNumero.value = '';
    }
    
    else {
        segundoNumero.style.border = '1px solid red';
        mensagemErro.style.display = 'block';
    }
});