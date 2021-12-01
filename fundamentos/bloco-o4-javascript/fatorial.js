let numero = 10;
let resultado = 1;
let lista = [];

for (let i = numero; i > 0 ; i--) {
    //resultado = numero * i;
    resultado *= i ;
    lista.push(resultado)
}
console.log(lista)
