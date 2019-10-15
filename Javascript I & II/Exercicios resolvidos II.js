//# Exercício 01 - Lista dinâmica de alunas

//Dado um array com o nome de todas as alunas, vamos mostrar o nome de cada aluna em um item de uma lista no navegador
//

const alunas = ["Raquel Pereira", "Talita Barbosa", "Lia Lobo"]  
const lista = document.getElementById ("lista-alunas"); // seleciona o elemento pelo ID, pode ficar fora do for para não consumir memoria pois precisa chamar so uma vez não executar todas vezes no for.

for(let i=0; i< alunas.length; i++){ // Percorrer todo o array
    let item = document.creatElement('li') // criar um li
    item.textContent =alunas [i] // colocar o conteudo
    lista.appendChild(item) // inserir a li na ul
}


// outra forma de fazer: 
const alunas = ["Raquel Pereira", "Talita Barbosa", "Lia Lobo"] 

const lista = document.getElementById ("lista-alunas");

alunas.forEach(function(aluna){ // metodo especifico de um for somente para array, espera receber como parametro uma função, uma função é o paramentro de outra
    let item =document.createElement('li')
    item.contextContent = aluna // ele já entende que precisa passar por todos. 
    lista.appendChild(item)
})
//-----*---- CONTANDO QUANDO O USUARIO CLICA
let soma =0;
function logar() {
    console.log(soma++)
}


const meuTitulo = document.queryselector('.titulo')

meuTitulo.addEventListener('click', function (){
    logar()
});


// OU 


let soma = 0;

const subtitulo =document.querySelector(".subtitulo")

subtitulo.addEventListener('click', function logar(){ // recebe como parametro tipo do evento e a função que precisa ser executada.
    console.log(soma++)
})
//-----*----- MUDAR A COR DO TITULO


const meuTitulo = document.querySelector('.titulo')

meuTitulo.addEventListener('click', function(){
   // meuTitulo.style.color ='red' jeito feio
    meuTitulo.classList.add("vermelha")
})


//----- Exercicio 2


let arr = document.getElementsByClassName("item__imagem")

for(let i=0; i< arr.length; i++){
    arr[i].addEventListener('click', function (){ 

        if (arr[i].style.opacity == "0"){
            arr[i].style.opacity='1'       
        } else { 
            arr[i].style.opacity = "0"
        }
    })
}

   

   // -------------------***-------------
const muitosGatos = document.querySelectorAll('.item__image')
   muitosGatos.forEach(function(gato){
    gato.addEventListener('click', function(evento){
      if (evento.classList.contains('invisivel')){
          gato.classList.remove('invisivel')
      } else {
            gato.classList.add('invisivel')
      }
    
       })

    })
   