let a = Number(prompt('Digite a primeira variavel'))
let b = Number(prompt('Digite a segunda variavel'))

if(a>b){
    console.log('A é a maior variavel')
} else {
    console.log('B é a maior variável')
}

let numero = 0;

let botao = document.getElementById("botao");

botao.onclick = function () {
    numero++;
    document.getElementById("contador").innerHTML = numero;
}