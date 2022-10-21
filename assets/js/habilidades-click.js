const efeito = document.querySelector('#effect');
const conteudo =  document.querySelector('#conteudo') 

efeito.addEventListener('click', function(){
    if(conteudo.style.display == 'block') {
        conteudo.style.display = 'none';
    } else {
        conteudo.style.display = 'block'
    }
});

/* Efeito reveal */ 
