function tocaSom (IdElementoAudio) {
    const elemento = document.querySelector(IdElementoAudio).play();
    
    if(elemento && elemento.localName === 'audio'){
            elemento.play();
        
    }
    else {
        alert('Elemento não encontrado ou seletor invalido');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

// para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const  instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string
 
    
    tecla.onclick = function() {
        tocaSom(idAudio)
    };

    tecla.onkeydown = function() {
        if(evento.code == 'Space' || evento.code =='Enter' ){
            tecla.classList.add('ativa');
        }

        
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}

 