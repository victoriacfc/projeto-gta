/*
Objetivo - quando o usuário clicar no botão de seleção de plataformas deve abrir uma caixa com os botões de seleção de plataforma e caso a lista de botões de plataformas já esteja aparecendo e o usuário clicar novamente em cima do botão, o conteúdo deve ser escondido  
*/

//Passo 1 - pegar o botão de seleção de plataformas no JS pra poder verificar quando o usuário clicar em cima dele
const botao = document.querySelector(".btn-plataforma");

//Passo 2 - pegar o elemento do conteudo que precisa ser mostrado
const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

//Passo 3 - pegar o clique do usuario no js - criando uma função
botao.addEventListener("click", () => {
    
    //Passo 4 - verificar se o botão já esta aberto, se sim, devemos remover a classe ativo pra que ele esconda o conteúdo novamente, se não deve adicionar a classe ativo
    elementoPlataformas.classList.toggle("ativo");

})
