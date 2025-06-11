// Criação de "CONSTANTES" para acesssar-los antes de criar as funções, os eventos e os metodos.
const container = document.querySelector(".container");
const listaAtividades = document.querySelector(".lista_atividades");
const input = document.querySelector(".input");
const erro = document.querySelector(".erro");
const botaoLimpar = document.querySelector(".botao_del_todos");
// Botão de Cadastro
const botaoCadastro = document.querySelector(".botao_adc");
const paleta1 = document.querySelector("#paleta1");
const paleta2 = document.querySelector("#paleta2");
const paleta3 = document.querySelector("#paleta3");

// Criação do "METODO e EVENTOS" das cores das paletas via JS
paleta1.addEventListener('click', () => definePaleta('seagreen'));
paleta2.addEventListener('mousemove', () => definePaleta('slateblue'));
paleta3.addEventListener('dblclick', () => definePaleta('tomato'));
//Criação do evento do 'BOTÃO +' para cadastra atividade.
botaoCadastro.addEventListener('click', () => cadastraAtividade());
//Evento para"Limpar Lista" de atividades.
botaoLimpar.addEventListener('click', () => removerAtividade());

// Criando a função de Mudar a Cor das Paletas
function definePaleta(cor){
    container.style.background = cor;
}

// Remover as Atividades pelo botão "limpar" de dentro da atividade adicioanada.
function removeAtividade(atividade){
    listaAtividades.removeChild(atividade);
}

//Função Remover "TODAS" Atividades
function removerAtividade(){
    while (listaAtividades.firstElementChild){
        listaAtividades.removeChild(listaAtividades.firstElementChild);
    }// O primeiro, o firstElementChild é a primeira "Atividade" adicionado, entao, verifica sua existencia e a proxima o remove. 
}

// CRIANDO A FUNÇÃO DE ADICIONAR "ATIVIDADES CADSTRADA".
function criaAtividade(){
    const atividade = document.createElement("div");
    atividade.classList.add("atividade");
    const nomeAtividade = document.createElement("p");
    atividade.textContent = input.value;
    const botaoLimpar = document.createElement("button");
    botaoLimpar.textContent = "Limpar";
    botaoLimpar.classList.add("botao_del");
    botaoLimpar.addEventListener("click", () => removeAtividade(atividade));
    listaAtividades.appendChild(atividade);
    atividade.appendChild(nomeAtividade);
    atividade.appendChild(botaoLimpar);
}
// Função que Cadastra a Atividade escrita no input.
function cadastraAtividade(){
    if(input.value.length > 3){
        erro.style.display = "none";
        criaAtividade();
    }else{// Mensagem de erro aparecerá caos a palavra escrita no input for MENOR que 3 caracter.
        erro.style.display = "grid";
        erro.innerHTML = `${input.value} não é uma atividade válida!`
    }
    limpaInput();
}
// Função de limpar a lista de atividade.
function limpaInput(){
    input.value = "";
}
// Evento adicionado na lista do "cadastroAtividade" ao apertar o botao "ENTER".
window.addEventListener("keypress", (e) => {
    if(e.key === "Enter"){
        cadastraAtividade();
    }
});

/*************** REMOVER ALGUM ELEMENTO CHILD *************************************
const listaPaleta = document.querySelector(".paletas_div");
const paleta1 = document.querySelector("#paleta1");

listaPaleta.removeChild(paleta1);

// Remover todos os Elementos Child
const paletas_div = document.querySelector(".paletas_div");
while(paletas_div.firstElementChild){
    paletas_div.removeChild(paletas_div.firstElementChild);
}

***********************************************************************************/

