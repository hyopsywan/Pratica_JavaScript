// const elementos = document.querySelectorAll(".texto");

 //Percorrendo a lista e imprimindo cda um deles
// elementos.forEach(elemento => console.log(elemento));

 //Percorrendo a lista e pegando o texto do elemento
// elementos.forEach(elemento => console.log(elemento.innerText));

// Alterando o textos
// elementos.forEach(elemento => {
//     elemento.innerText = "Alterado";
    //elemento.innerText = "Alterado"; //vem com a formatação
// });

// Trocando as tags -innerHTML
// elementos.forEach(elemntos => {
//     elemntos.innerHTML = "<h2>item</h2>";
// });

//Trocar a cor do elemento
// elementos.forEach(elemento => {
//     elemento.style.color = "#0000FF";
// });

// //* Eventos com JS - ações do usuário

// //? Evento click
// const botao = document.getElementById("btn");

// botao.addEventListener("click", () => {
//     alert("Você clicou!")
// })

// //? Evento de digitação (input / keyup)

// const campo = document.getElementById("campo");
// const resultado = document.getElementById("resultado");

//  INPUT
// evento input -> Dispara sempre que digita em tempo real
// campo.addEventListener("input", () => {
//     resultado.innerText = campo.value; // É o que está sendo digitado dentro do campo
// })

//KEYUP
// Só dispara quando solta a tecla
// campo.addEventListener("keyup", () => {
//      resultado.innerText = campo.value; // É o que está sendo digitado dentro do campo
// })

//* Evento de Mouse 
// const elemento = document.getElementById("troca-cor")

//  mouseover -> quando o mouse passar pelo elemento
// elemento.addEventListener("mouseover", () => {
//     elemento.style.backgroundColor = "#cf704aff";
// });

//  mouseout => quando o mouse sai do elemento
// elemento.addEventListener("mouseout", () => {
//     elemento.style.backgroundColor = "#26928dff"; // Ou nonw
// });

//MOUSEMOVE  -> pega a posição do mouse 
// document.addEventListener("mousemove", (evento) => {
//     console.log(`Posição X: ${evento.clientX}, Posição Y: ${evento.clientY}`)
// })

//* EVENTO DE FORMULÁRIO (submit)

const form = document.querySelector("form");

//O COMPORTAMENTO DO FORMS É RECARREGAR A PÁG AO ENVIARÁ-LO. O preventDefault barra esse comportamento padrão
form.addEventListener("submit", (e) => {
  
    e.preventDefault();

    const nome = document.getElementById("nome").value;

    console.log(`Nome: ${nome}`);
})