// Effect Menu

/* function clickMenu() {
    if (menu.style.display == 'flex') {
        menu.style.display = 'none'
    }else {
        menu.style.display = 'flex'
    }
} */

// Effect Writer

function typeWriter(elemento) {
    const textArray = elemento.innerHTML.split('');
    elemento.innerHTML = ''
    textArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 75 * i);
    });
}

const efeitoNome = document.querySelector('.efeito-nome');
typeWriter(efeitoNome);