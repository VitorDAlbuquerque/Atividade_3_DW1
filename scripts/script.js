function scrollInicio() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}


function scrollInfo() {
    window.scrollTo({
        top: 700,
        behavior: 'smooth',
    });
}

function scrollIng() {
    window.scrollTo({
        top: 1700,
        behavior: 'smooth',
    });
}

function scrollContatos() {
    window.scrollTo({
        top: 5500,
        behavior: 'smooth',
    });
}

function sendMessage(){
    const email = document.getElementById('email').value
    const message = document.getElementById('message').value

    if(email == ''){
        alert('Por favor digite um email!')
        return;
    } else if(!email.includes('@')){
        alert('Digite um email válido')
        return;
    }

    if(message == ''){
        alert('Por favor digite uma mensagem!')
        return;
    }

    alert('Email: '+email+'\nMensagem: '+message)


}