// Função para mudar de tamanho:

function mudouTamanho() {
    const itens = document.querySelector('header nav');
    if (window.innerWidth >= 500) {
        itens.style.display = 'flex'; 
    } else {
        itens.style.display = 'none';
    }
}

// Menu Hambúrguer:

function clickMenu() {
    const itens = document.querySelector('header nav');
    if (itens.style.display === 'none' || itens.style.display === '') {
        itens.style.display = 'flex'; 
        itens.style.flexDirection = 'column'; 
    } else {
        itens.style.display = 'none';
    }
}

window.addEventListener('resize', mudouTamanho);

mudouTamanho();

// Validação do Formulário:

const formContato = document.getElementById('formContato');

formContato.addEventListener('submit', function (event) {
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    let isValid = true;

    if (nome === '') {
        alert('Campo de nome está vazio.');
        isValid = false;
    } else if (email === '') {
        alert('Campo de e-mail está vazio.');
        isValid = false;
    } else if (mensagem === '') {
        alert('Campo de mensagem está vazia.');
        isValid = false;
    }

    if (isValid) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, digite um e-mail válido.');
            isValid = false;
        }
    }

    if (isValid) { 
        if (mensagem.length < 10) {
            alert('Mínimo de 10 caracteres.');
            isValid = false;
        }
    }

    if (isValid) {
        alert('Mensagem enviada com sucesso! (Isso é apenas um teste)');
        formContato.reset();
    } else {
        event.preventDefault();
        }
});
