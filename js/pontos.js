function PointLeft(pontosEsquerda) {

    let inputPontoEsquerda = document.getElementById('inputPontoEsquerda')

    inputPontoEsquerda.value = Number(inputPontoEsquerda.value) + Number(pontosEsquerda)
    
}

function PointRight(pontosDireita) {

    let inputPontoDireita = document.getElementById('inputPontoDireita')

    inputPontoDireita.value = Number(inputPontoDireita.value) + Number(pontosDireita)
}