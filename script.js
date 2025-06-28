const botao = document.querySelector("#botao");
let mensagem = document.querySelector("#mensagem")

botao.addEventListener("click", e=>{
    mensagem.classList.add("mensagem2");
    mensagem.innerHTML="Seja bem-vindo ao curso de Engenharia de Software!"
    setTimeout(()=>{
        mensagem.classList.remove("mensagem2");
        mensagem.innerHTML="";
    },5000);
})