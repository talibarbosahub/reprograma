
/* Você foi contratada para criar a lógica de um aplicativo que controla pedidos em um bar. Para funcionar sua aplicação precisa ter uma lógica capaz de executar as seguintes operações: 
1) Guardar o nome e o número da mesa do cliente
2) Ter uma função para somar os valores do pedido ao total
3) Ter uma função que permita subtrair do total um valor pago (aquela miga que sempre vai embora antes e deixa uma parte paga)
4) Ter uma função para dividir o valor da conta entre as pessoas da mesa
5) Mostrar na tela o nome, número da mesa, total de pessoas, total da conta e valor que cada um deve pagar
document.write("Nome do responsável da mesa:"nomeDoCliente, "Número da mesa:" numeroDaMesa, "Total da Conta:" total, "Total para cada pessoa:" divisao)
*/

let nomeDoCliente = prompt("Digite o nome do cliente")
let numeroDaMesa = prompt("Digite a mesa")
let refrigerante = 10.00
let pratoPrincipal = 20.00
let sobremesa = 5.00
let total = 0

function somaTotal(pedido){
total = total + pedido
return total
}


function abaterTotal(desejaPagar){
    desejaPagar = prompt('Qual valor deseja pagar?')
  total = total - desejaPagar
  return total
}

function divideTotal(numeroDePessoas){
numeroDePessoas= prompt ('Qual o total de pessoas para dividir a conta')
let valorIndividual = total/numeroDePessoas
return `
Fechamento da conta 
Cliente: ${nomeDoCliente}  
Mesa: ${numeroDaMesa} 
Total de pessoas ${numeroDePessoas}
Valor Individual ${valorIndividual}
`
}


//Escreva a função que retorne o resultado apresentado
// ola() -> "Hello, world!"
// ola(0) -> "Hello, world!"
// ola('Javascript") -> "Hello, world!"




function ola(){
    console.log("Hello,world!")
}


// calcule(5) -> 25
// calcule(2) -> 4


function elevado2(num){
     return num ** 2
}


//Calcule o resultado da função a seguir: 
function confusion(a, b) {
    a = 2 * a + b
    
	return a
}
let x = 2
let y = 5

y = confusion(y, x) 

x = confusion(y, x) 


// Escreva uma função
// em Javascript que recebe
// um número e devolve se ele é maior que um número gerado aleatoriamente

// Gerar números aleatoriamente. 
Math.ceil(Math.random()*10) // varia a faixa
 de 0 a 10 e arredonda para cima
Math.ceil(Math.random()*10)+5 // varia a faixa de 0 a 10, arredonda para cima e acrescentar 5


function comparaAleatorio(numero){
    let numAleatorio = Math.ceil(Math.random()*10)
    console.log(`${numero}> ${numAleatorio}?`)
       
 

}


// Escreva uma função em
// Javascript que recebe um
// número qualquer e retorna
// a representação binaria dele.



function converte2binario(num){
    return num.toString(2)
}
// binario para decimal tranforma string em inteiro.
parseInt ('00100101',2)


// converter um numero em string
function numero2string(num){
    return num.toString()
}
// resto d divisão
function restoDivisão(a,b){
    return a%b}


    function compararTamanhoString(texto1,texto2){
        return texto1.length ==texto2.lengt
    }

// é par?
    function ehPar(num){
        return !(num%2)}
  // retorna verdadeiro ou falso


  //O nome ASCII vem do inglês American Standard Code for Information Interchange ou
  // ”Código Padrão Americano para o Intercâmbio de Informação”. Ele é baseado no alfabeto 
  //romano e sua função é padronizar a forma como os computadores 
  //representam letras, números, acentos, sinais diversos e alguns códigos de controle.
let nome = "Talita"
nome.charCodeAt(0)
//retorna 84
// exercicio aula 3

let nota1 = 5
let nota2 = 8

let nota1 = 5
let nota2 = 8 
let media = (nota1 + nota2)/2
function comparaNota (media) {
if (media>=6){
       console.log('Aluno foi aprovado!')
}
else {
    console.log(' Aluno reprovado!')
    }
}

// let nota1 = 5
// let nota2 = 8 
// let media = (nota1 + nota2)/2

// if (media>6){
//        console.log('Aluno foi aprovado!')
// } else if (media>=5) {
// console.log('Aluno de recuperação!')
// } else (media <6) {
// console.log(' Aluno reprovado!')
//     }
// ou  let aprovado = media>=6
//if (aprovado){...}


// Escreva a expressão em que atribui o
// valor `1` a `x` se `x` maior do que `y`.

let x = 3
let y= 2
if (x > y) {
    console.log(x = 1 )
}

//Agora reescreva a expressão anterior
//atribuindo 0 a `x` caso ele seja menor ou igual a y


let x = 3
let y = 2
if (x > y) {
    console.log(x = 1 )
} else { console.log(x = 0)
}


// Você foi contratada para desenvolver um jogo,
// a cada vez que o usuário acerta, ele ganha 5 pontos.
// Quando se atinge a pontuação 100 ele entra na faixa
// bônus e sua pontuação é duplicada até ele atingir 
// 250 pontos,quando retorna a pontuação normal. Crie
// o código para implementar a lógica que calcula esse 
// score


let pontos = 250

function calculaScore(acertos){
   if(acertos == true <100){
   pontos = pontos + 5
   console.log(pontos)
} else if(pontos>=100 && pontos<250){
 pontos = pontos + 10
 console.log(pontos)
} else if(pontos>=250){
   pontos= pontos + 5
   console.log(pontos)
}
}
//Operador ternário
//certou? console.log("Você acertou"): console.log('Você errou'):(')


// Reescreva a seguinte condicional
// sem usar o operador `!`:
// item = ! ( i < 10 || v >= 50 )

// refs: 
// - http://www.math.toronto.edu/preparing-for-calculus/3_logic/we_3_negation.html
// - https://centraldefavoritos.com.br/2017/01/02/negacao-de-proposicoes/ (ver: "Negação de uma Proposição Disjuntiva")


// Escreva um código que receba um valor 
// digitado pelo usuário e mostre `par`
// se o número for par e `impar`
// se for impar.


function parImpar(num){
  if (num % 2 == 0) {
  console.log("par")
  } else { 
      console.log("impar")
  }
}

// Escreva a expressão que retorna `positivo` 
// se dois números forem positivos
// e `negativo` se dois números 
// forem negativos.


function positivoNegativo (a,b) {
    if (a >=0 && b >= 0) {
        console.log("positivo")
    } else if (a >= 0 && b <= 0  || a <= 0 && b >= 0){ console.log( 'São diferentes!')
    }
    else {
        console.log("negativo")
    }
}



// Escreva a expressão em que retorna `true` se
// dois números tiverem os mesmos
// sinais (+ / -) e `false` 
// se tiverem sinais
// diferentes.

function mesmoSinal (a,b) {
    let resultado = a*b
    if (resultado >=0) { console.log("true")
  } else { console.log("false")}
}


// Duas condicionais são equivalentes
// quando, dado um mesmo input, devolvem
// o mesmo output. Qual das próximas
// condicionais são equivalentes? Porque?

// Gera um numero randomico entre -10 e 10.
const rand = Math.floor(Math.random() * 21) - 10

// A
if (rand > 0) {
	console.log(`O valor é positivo: ${rand}!`)
} else {
	if (rand < 0) {
		console.log(`O valor é negativo: ${rand}!`)
	} else {
		console.log(`O valor é zero!`)
	}
}

// B
if (rand > 0) {
	console.log(`O valor é positivo: ${rand}!`)
}
if (rand < 0) {
	console.log(`O valor é negativo: ${rand}!`)
} else {
	console.log(`O valor é zero!`)
}

// C
if (rand > 0) {
	console.log(`O valor é positivo: ${rand}!`)
}
if (rand < 0) {
	console.log(`O valor é negativo: ${rand}!`)
}
if (rand === 0) {
	console.log(`O valor é zero!`)
}


// Reescreva a próxima expressão usando
// um if / else.

function DiadaSemana(day){
   
switch(day){
     // if (day ==0 {
	case 0: 
		console.log("Segunda")
    // else if ( day ==1)    
        break
	case 1:
		console.log("Terça")
		break
	case 2:
		console.log("Quarta")
		break
	case 3:
		console.log("Quinta")
		break
	case 4:
		console.log("Sexta")
		break
	case 5:
		console.log("Sábado")
		break
	case 6:
		console.log("Domingo")
		break
	default:
        //else{
		throw "Dia inválido!"
}
}


// Reescreva a próxima expressão usando
// o operador ternário

let rand = (Math.random() > 0.5) 
rand? console.log("True"): console.log('False')

// opção dois
if (Math.random() > 0.5) {
    rand = true
} else {
	rand = false
}

// opção três
(Math.random() > 0.5)? console.log("True"): console.log('False')


// Reescreva a próxima expressão usando
// o operador ternário


function corProxima(r,g,b){
(r > g && r > b)? console.log('Vermelho'):(g > b && g > r)? console.log('Verde'): (b > r && b > g)? console.log('Azul'): false
}



// Lembra do exercício de par ou ímpar, vamos incrementar?
// Crie um jogo de par ou ímpar contra o compudador. 
// A ideia é você gerar um número aleatório para o 
// computador e comparar com o número informado pelo usuário e 
// mostrar quem venceu a partida. Divirta-se
// Dicas: 
//  - Use a função Math.random() para gerar um número inteiro aleatório
//  - Use o prompt() para coletar o número informado pelo usuário

// function parImpar(num){
//     if (num % 2 == 0) {
//     console.log("par")
//     } else { 
//         console.log("impar")
//     }
//   }


let escolha = prompt("Escola: Par ou Impar")
console.log("Você escolheu" +" " + escolha)
let numero = prompt("Digite o número")
console.log("Número"+ " " + numero)
let computer = Math.ceil(Math.random()*11)
console.log ("Computador escolhe número"+" "+ computer)
let resultado = numero + computer

function parImpar(resultado) {
    if (resultado % 2 == 0) {
        return "par"
    } else {
        return "impar"
    }
}
// chama a função 
parImpar(resultado)

function jogoParImpar(resultado) {
    if (  resultado==escolha )  {
        console.log("Parabéns você ganhou")
    } else {
        console.log ("Tente novamente :)")
    }
}


// Construa a logica do menu de clientes de um site
// caso o cliente seja perfil clássico, apresente uma ul
// contendo nos li os itens terno, blazer, camisa,calça. Caso
// o cliente seja do perfil esportivo mostre os itens: camisetas,
// short, bermudas, moleton. Caso o cliente não informe o perfil, 
//mostre todas as opções


let classico = [ 'terno', 'blazer', 'camisa','calça']
let esportivo = ['camisetas','short', 'bermudas', 'moleton']



for (let i =0; i <=10; i++){
   console.log(i)
}

for(let i = 10; i >=0; i=i-2){
    console.log (i)
    
}

// Escreva uma estrutura de repetição que vai 
// calcular a soma de todos
// os números entre 0 e 100.

let resultado = 0
for(let i=0; i <= 100; i++){
    console.log (i)
    console.log (resultado = resultado + i) 
}

// Escreva um loop para calcular a seguinte soma:
// 1 * 1 + 2 * 2 + 3 * 3 + ... + 50 * 50

let resultado = 0
for(let i=0; i <= 50; i++){
    console.log (i)
    console.log (resultado = resultado * i) 
}

// Escreva um loop para
// calcular a seguinte soma:
// 1 * 2 + 2 * 3 + 3 * 4 + ... + 249 * 250

let resultado = 0
for(let i=1; i <=250; i++){
    console.log (i)
    console.log (resultado = resultado + i*(i+1) ) 
}

// Escreva um loop que
// vai calcular 10! (10 fatorial), o
// que significa 10 * 9 * 8 * 7 ... * 1.

let resultado = 1
for(let i=10; i >=1; i=i-1){
    console.log(i)
    console.log(resultado = resultado * i) 
}


// Escreva um loop que "lance uma moeda" a cada 
// nova iteração. Considere 1 = cara,
// 0 = coroa. Rode esse loop 1000 vezes e
// mostre o numero de vezes caras e o numero
// de coroas no console.


let cara = 0
let coroa = 0

for (let i=1; i<=1000; i++){
    let moeda = Math.floor(Math.random()*2)
if (moeda == 0){
   cara = cara+1 // cara++
} else {
    coroa = coroa+1 // coroa++
}
}
console.log("Cara", cara, "Coroa", coroa) // se colocar dentro da condição vai mostrar mil vezes o cara e coroa


//Crie um contado de passos que acumule até chegar em 1000


let meta = 0
while (meta <= 1000){
    let passos = parseInt(prompt("Digite quantos passos você deu:"))
    meta = meta + passos 
    console.log("Você já andou", meta, "passos!")


}


let lista =[1,2,3,4,5,6,7,8,9,] //lista.length tamanho da lista

let frutas = ['banana', 'maça']

let zorra = [1, 'banana' [9,89]]

lista[1] // para chamar elementos
zorra[2][1] // para chamar o array dentro do array e o segundo elemento dele...


let cardapio = [['refri',2], ['coxinha',4], ['breja',6]] // * tabela*
cardapio [2] // retorna breja por que começa no 0
cardapio [2] [1] // retorna 6

//forit faz um for para cada item da lista

let listaNumeros =[1,2,3,4,5,6,7,8,9,]
for(let i =0; i<listaNumeros.length;i++){
    console.log('indice:', i,'valor', listaNumeros[i])
    listaNumeros[i] ==3?console.log('Uhull'):console.log('Deu ruim!')
}



//Dada a lista de convidados abaixo escreva um
//loop que percorra a lista e mostre se o nome da
//pessoa convidada foi encontrado. Caso tenha sido encontrado,
// mostre a mensagem 'Seja bemvindo, <convidado>!'
//listaConvidados = ['Alice','João','Maria Rita', 'Sueli','Carlos']  



let listaConvidados = ['Alice','João','Maria Rita', 'Sueli','Carlos'] 
let convidado = prompt("Informe seu nome por favor:")
let encontrado =false
for(let i=0; i < listaConvidados.length; i++) {

    if(listaConvidados [i] == convidado){
    encontrado =true
    break
}
}
    encontrado?console.log(`Seja bemvindo (a), ${convidado}!`):console.log(`Infelizmente você não foi convidado`)



    