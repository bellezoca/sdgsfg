const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você ganha um piano de cauda (uau, você é muito sortudo). Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "Que incrível! Vou procurar um professor de piano.",
                afirmacao: "parabéns, ótima escolha!"
            },
            {
                texto: "Legal, mas não tenho interesse pela música.",
                afirmacao: "Poxa! Que pena!"
            }
        ]
    },
    {
        enunciado: "Sabendo que você ganhou o piano, uma professora oferece um desconto nas aulas dela.",
        alternativas: [
            {
                texto: "Aceita as aulas de piano e começa já",
                afirmacao: "A música é algo incrível e uma ótima terapia"
            },
            {
                texto: "Resolve ter uma aula experimental, só para ver se gosta",
                afirmacao: "Também é bom ter a música apenas como hobby."
            }
        ]
    },
    {
        enunciado: "O dia da aula acontece, o que você achou da ideia de aprender um novo insrumento?",
        alternativas: [
            {
                texto: "Gostei bastante. Cogitei até seguir uma carreira como pianista",
                afirmacao: "Muitos dizem que música não dá dinheiro, mas com o pensamento certo, vai-se longe!"
            },
            {
                texto: "Não gostei muito, porém é um novo hobby.",
                afirmacao: "Todos deveriam saber tocar algum instrumento, é uma coisa mágica!"
            }
        ]
    },
    {
        enunciado: "Já deu 1 ano de aulas de piano, você decide fazer o vestibular para música ou continua apenas como um hobby?",
        alternativas: [
            {
                texto: "Continuo apenas como um hobby.",
                afirmacao: "Que bom pelo menos que você gostou da música como um hobby!"
            },
            {
                texto: "Me inscrevo para o vestibular.",
                afirmacao: "Persistir e seguir seu sonho é melhor do que trabalhar com algo que você não gosta."
            }
        ]
    },
    {
        enunciado: "Você recebe uma proposta para ser o pianista solista de uma orquestra. Você aceita?",
        alternativas: [
            {
                texto: "Aceito. Vai contribuir para minha carreira",
                afirmacao: "E tocar em orquestras, é algo que todo músico sonha em fazer."
            },
            {
                texto: "Acho que vai ser muita coisa para minha cabeça. Não aceito.",
                afirmacao: "Concertos são lindos, mas um músico de orquestra nunca tem tempo para nada, só de estudar para os concertos."
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

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
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
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
