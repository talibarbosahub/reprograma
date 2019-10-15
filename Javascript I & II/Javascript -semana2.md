DOM
objeto que é a representação do HTML e com ele podemos manipular a marcação da pagina no Javascript
document objeto que representa o DOM

metódos são funções do objeto DOM
creatElement metódopara criar elementos, precisa sempre colocar aonde o elemento será criado
exemplo
const paragrafo = document.creatElement("p"); // cria o elemento
const minhaDiv = document.getElementById ("conteudo"); // seleciona o elemento pelo ID

minhaDiv.appendChild(paragrafo); // Indica qual a mãe a quem o elemento pertence

paragrafo.textContent = "Estamos viajando";

*document.getElementsByClassName retorna um array.

Call Back chama um metodo e o paramentro será uma função 
Ações do usuário são chamadas de evento: clique, colocar o mouse em cima (mouse over)
existem tres maneiras de adicionar eventos:
*HTML adicionar como atributo <h1> onclick="logar"(event) </h1>
*querySelector pega o primeiro dos nos do DOM 
Listener


classList retorna todas as classes do elemento

verificam o conteudo do array e retorna se tem dentro, true ou falso
includes  array simples
contain  para o que esta pegando do DOM 


document.getElementbyId ('inputEmail')
document.getElementbyClassName('')
document.querySelector('')
document.querySelectorAll('')

Objeto
const obj ={
    nome: 'Mellina',
    idade: 27,
    series: ['Crazy Ex-gilfriend', 'Lucifer', 'Fiends'],
    login: {
        user:'youmel'
        pass'***'
    }
}


para chamar o objeto:

obj.login ['user'] // 'youmel'
obj.login.user // 'youmel'
obj.nome = 'jessica'




innerHTML seleciona o objeto e mostra em string o  que tem dentro da tag de abertura e fechamento. Se quiser inserir um texto na tag usa-lo.

const form = document.getElementById('form');
form.innerHTML = "Mellina"

OU

document.getElementById('form').innerHTML = 'Mellina';


ClassName e ClassList mostram que classe o elemento tem
ClassList identifica cada espaço da atribuição à como uma lista 

Primeiro tem que capturar o elemento const submit Dois = document.getElementById('submitDois')
document.getElementById('submitDois').classList.add('aloka')

submitDois.classList.add('aloka') // adicionar a classe
submitDois.classLista.remove('classe-dois') // remover uma classe
submitDois.className = "aloka" // substituir a classe
submitDois.id = 'novoId'


forEach metodo que recebe uma função callback e passa por todos os elementos
objeto.forEach (function(valorAtual, indice, arrayInteiro){

})
