Javascritp

Alguns comandos para testar no console: 

alert() interrompe a execução do programa, enquanto o usuário não clica na janela. O alert              interrompe a renderização da página se estiver no começo do código a página não carrega e estiver   no final da pagina carrega e a janela aparece por cima. Para receber mais de um valor precisa       concatena.
console.log() comunicação entre desenvolvedores imprime no console. 
document.write() sobrescreve a documentação da página, para aparecer na tela o comando. 
    para colocar espaço no alert e document.write precisa concatenar + " " + um espaço vazio. 
prompt sempre retorna uma string

variável = espaço na memória do computador para guardar valores, informações. A declaração da variável não quer dizer que tem valores nela, pode se ter somente o espaço reservado na memória
atribuição de valores defini o valor para a varialvel 

undefined é um objeto padrão da linguagem que retorna quando a variável está  vazia. Ainda não foi definida.
null significa que a variavel tem um valor e é nulo. ausencia intencional de valor. 

typeof função que diz o tipo da variável.

variáveis podem iniciar com _, $ ou letra
não é necessário declarar o que vai colocar na variável o js reconhece se é string, number etc...


EMCA6 uma das versões padrão do javascript


garvage colector (linguagems de alta)  faz a limpeza automatica de áreas da memória que não são usadas. 

let pode ser alterada posteriormente - funciona dentro do escopo dela, também avisa que a variável já existe.
const é usada para coisas que não vão sofrer alteração. 

Case sensite diferencia maiúculas e minúsculas. 

template string juntar texto e variavel 

tipos de variaveis
string "abc" 'abc' '123'.
     
number 10, 3.14
boolean - true, false, undefined, null, objeto (prop: valor)
    valores vazios e 0 são falsos.
    !variavel se tem valor é true e colocando o ! é o contrario no caso false
    

variavel = parseInt(prompt("digite um numero)) // prompt dentro da função parseInt para converter a string em numero inteiro
variavel = variavel.toString()


Operadores
+ soma
- subtração
/ divisão
* multiplicação
** potencia
% resto da divisão (uso mais comum, par ou impar)
importante lembrar da precedencia.
concatenação se na operação de soma um dos valores for string o Js faz a concatenação


operadores relacionais
><
>=
<=
== igual 
=== iguais e do mesmo tipo, igualdade restrita. Boa pratica usar sempre esse. 
!= diferente
!=== diferente em valor e tipo.  

Operadores Lógicos
&& equivale ao E
|| equivale ao OU (pipe)
! (inverte o valor logico da sequência)
!! nega a negação 

tabela verdade

ou se pelo menos uma das condições for satisfeita 

Aula 02

Funções 

A função é um standby executa somente quando é chamada. para repetir uma coisa que vai fazer várias vezes. 
f(x) =X2
function (x)= x**2
function nomeDaFuncao(argumento) {conjunto de instruções
return resultado/valor
}
nomeDaFuncao normalmente ações
argumento seguem as mesmas regras de nome de variáveis (o argumento é uma variavel!!!)

function multiplica(numero) {
return numero*3
}

O return serve para guardar o resultado em uma variavel... 

A função você aplica a propriedade do objeto

objeto é conjunto de variaveis ou uma variavel
propriedade é o valor da variavel ou do conjunto
metodo é o procedimento que é executado sobre aspropriedades

for precisa de um ponto de partida E chegada

for (inicio; condição para o fim; passo){ 
    instruções
}

for (var i =0; i <0; i++){
    instruções
}
---------------
while so precisa de um ponto de partida OU chegada 
enquanto uma condição não for atendida ele continua executando. 

while(condição) {
    rotina
}

tem que ter uma variável de controle para não entrar em loop infinito





