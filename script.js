const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Estava sozinho(a) em casa no tédio, então resolvi sair para ver um filme. Primeiro entrei no site do cinema para ver os filmes em cartaz, vi que tinha o filme Deadpool 2 e É assim que acaba, qual filme eu escolho?",
          alternativas: [
            {
                texto: "Deadpool 2",
                afirmacao: "O filme Deadpool 2 está muito em alta, então foi minha primeira opção. "
            },
            {
                texto: "É assim que acaba",
                afirmacao: "Já tinha lido o livro É assim que acaba e estava muito curioso(a) para ver como ficou o filme."
            }
        ]
    },
    {
        enunciado: "Depois de decidir qual filme eu iria ver, pensei se iria comprar o ingresso através do site, ou se iria comprar na hora do filme. Qual foi minha atitude?",
        alternativas: [
            {
                texto: "Compro pelo site",
                afirmacao: "Comprei através do site, e felizmente ganhei descontos."
            },
            {
                texto: "Compro na hora do filme",
                afirmacao: "Comprei na hora do filme para não ter perigo de me atrasar por causa de imprevistos."
            }
        ]
    },
    {
        enunciado: "Filme escolhido e ingreeso comprado. Faltava 30 minutos para o filme ainda, e comecei a sentir fome, pensei em comprar um combo de pipoca e um refrigerante, mas como ainda tinha tempo de sobra pensei em comer algo na praça de alimentção. O que eu fiz?",
        alternativas: [
            {
                texto: "Resolvi comprar pipoca.",
                afirmacao: "Fui ao balcão do cinema e logo pedi um combo de pipoca média e um copo de refrigerante."
            },
            {
                texto: "Fui à praça de alimentação.",
                afirmacao: "Estava com vontade de comer hamburguer então fui à praça de alimentação e resolvi comer um combo de fast food."
            }
        ]
    },
    {
        enunciado: "Ainda faltava 10 minutos para o começo do filme, mas já tinha feito tudo que tinha que fazer. Fico indeciso(a) se vou para a sala de cinema para assistir trailers ou se ainda dou uma volta pelo cinema, o que eu faço?",
        alternativas: [
            {
                texto: "Entro na sala de cinema.",
                afirmacao: "Já entro na sala de cinema e sento no assento que escolhi e assisti todos os trailers, muitos filmes interessantes estão para sair."
            },
            {
                texto: "Dou uma volta pelo cinema.",
                afirmacao: "Dou uma volta pelo cinema, e acabo me distraindo e perdendo 5 minutos do filme, quando percebo vou correndo para a sala. Felizmente cheguei no ultimo trailer, ou seja, o filme não tinha começado ainda, suspirei de alivio e me senti no assento que comprei. "
            }
        ]
    },
    {
        enunciado: "Um pouco antes do filme iniciar, houve um aviso para desligar os celulares para que não houvesse incomodo. O que eu faço? ",
        alternativas: [
            {
                texto: "Desligo meu celular, pois não quero causar problemas.",
                afirmacao: "Desligo meu celular e coloco ele meu bolso, e então o filme começa."
            },
            {
                texto: "Ignoro o aviso e deixo meu celular ligado durante o filme.",
                afirmacao: "Deixei meu celular ligado, e como consequência meu celular toca no meio do filme o que irritou muitos que estavam na sala, então envergonhado(a) desligo meu celular e peço perdão por causa do incomodo. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "E meu dia foi assim...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();