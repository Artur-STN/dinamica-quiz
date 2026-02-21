// PERGUNTAS

var perguntas = [

"<p>Quem construiu a arca?</p>",
"<p>Quem foi lançado na cova dos leões?</p>",
"<p>Quem foi vendido como escravo por seus irmãos?</p>",
"<p>Quem foi o homem mais sábio da Bíblia?</p>",
"<p>Quem derrotou Golias?</p>",
"<p>Qual foi o primeiro livro da Bíblia?</p>",
"<p>Qual é o último livro da Bíblia?</p>",
"<p>Quem foi engolido por um grande peixe?</p>",
"<p>Quem abriu o Mar Vermelho?</p>",
"<p>Onde Jesus nasceu?</p>",
"<p>Quem traiu Jesus?</p>",
"<p>Qual discípulo negou Jesus três vezes?</p>",
"<p>Qual foi o primeiro milagre de Jesus?</p>",
"<p>Quantos livros tem o Novo Testamento?</p>",
"<p>Quantos livros tem o Antigo Testamento?</p>",
"<p>Qual é o menor versículo da Bíblia?</p>",
"<p>Quem era a mãe de Jesus?</p>",
"<p>Qual é o maior capítulo da Bíblia?</p>",
"<p>Quem recebeu os Dez Mandamentos?</p>",
"<p>Quem foi o primeiro homem criado por Deus?</p>",
"<p>Quem foi a esposa de Abraão?</p>",
"<p>Qual era a profissão de Pedro?</p>",
"<p>Quem escreveu a maioria das cartas do Novo Testamento?</p>",
"<p>Qual profeta enfrentou os profetas de Baal?</p>",
"<p>Quem foi o sucessor de Moisés?</p>",
"<p>Qual cidade foi destruída por fogo do céu junto com Gomorra?</p>",
"<p>Quem interpretou os sonhos do Faraó?</p>",
"<p>Quem foi o homem mais forte da Bíblia?</p>",
"<p>Qual rainha visitou Salomão?</p>",
"<p>Quem foi o pai de Isaque?</p>",
"<p>Qual livro vem depois de Salmos?</p>",
"<p>Quem escreveu o livro de Apocalipse?</p>",
"<p>Quantos dias durou o dilúvio?</p>",
"<p>Quem subiu ao céu em um redemoinho?</p>",
"<p>Qual era o nome do jardim onde Adão e Eva viviam?</p>",
"<p>Quem construiu o templo em Jerusalém?</p>",
"<p>Qual era o nome do gigante derrotado por Davi?</p>",
"<p>Quem foi jogado na fornalha ardente?</p>",
"<p>Qual era o nome do irmão de Moisés?</p>",
"<p>Quem batizou Jesus?</p>",
"<p>Qual era o nome do publicano que subiu na árvore para ver Jesus?</p>",
"<p>Quem escreveu os Salmos em sua maioria?</p>",
"<p>Qual discípulo andou sobre as águas?</p>",
"<p>Qual o nome da mãe de Samuel?</p>",
"<p>Qual foi a praga que transformou água em sangue?</p>",
"<p>Quem libertou o povo de Israel do Egito?</p>",
"<p>Quantos discípulos Jesus escolheu?</p>",
"<p>Qual era a cidade onde Jesus cresceu?</p>"

]

// RESPOSTAS

var respostas = [

"<p>Noé</p>",
"<p>Daniel</p>",
"<p>José</p>",
"<p>Salomão</p>",
"<p>Davi</p>",
"<p>Gênesis</p>",
"<p>Apocalipse</p>",
"<p>Jonas</p>",
"<p>Moisés</p>",
"<p>Belém</p>",
"<p>Judas Iscariotes</p>",
"<p>Pedro</p>",
"<p>Transformar água em vinho</p>",
"<p>27 livros</p>",
"<p>39 livros</p>",
"<p>\"Jesus chorou.\" (João 11:35)</p>",
"<p>Maria</p>",
"<p>Salmo 119</p>",
"<p>Moisés</p>",
"<p>Adão</p>",
"<p>Sara</p>",
"<p>Pescador</p>",
"<p>Paulo</p>",
"<p>Elias</p>",
"<p>Josué</p>",
"<p>Sodoma</p>",
"<p>José</p>",
"<p>Sansão</p>",
"<p>Rainha de Sabá</p>",
"<p>Abraão</p>",
"<p>Provérbios</p>",
"<p>João</p>",
"<p>40 dias e 40 noites</p>",
"<p>Elias</p>",
"<p>Éden</p>",
"<p>Salomão</p>",
"<p>Golias</p>",
"<p>Sadraque, Mesaque e Abede-Nego</p>",
"<p>Arão</p>",
"<p>João Batista</p>",
"<p>Zaqueu</p>",
"<p>Davi</p>",
"<p>Pedro</p>",
"<p>Ana</p>",
"<p>A primeira praga do Egito</p>",
"<p>Moisés</p>",
"<p>12 discípulos</p>",
"<p>Nazaré</p>"

]

function getDynamics(numberDynamics) {

    let boxDinamica = document.getElementById('boxDinamica')

    let pPergunta = document.getElementById('pergunta')
    let pResposta = document.getElementById('resposta')

    let box = document.getElementById(`box_${numberDynamics}`)

    boxDinamica.classList.add('active')
    box.classList.add('active')

    box.disabled = true;

    pPergunta.innerHTML = perguntas[numberDynamics]
    pResposta.innerHTML = respostas[numberDynamics]

}

function closeBoxDinamica() {

    let boxDinamica = document.getElementById('boxDinamica')
    let divResposta = document.getElementById('divResposta')

    boxDinamica.classList.remove('active')
    divResposta.classList.remove('active')

}

function revelarResposta() {

    let divResposta = document.getElementById('divResposta')

    divResposta.classList.add('active')

}

