// querendo rodar o exemplo, renomear o arquivo para main.js


import {soma, sub, mult} from './funcoes';
import * as funcoes2 from './funcoes2';
import somaFunc from './soma';
alert("testando22")
const arr = [1,2,3,4];
const [a,b,c, ...d] = arr; 
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(soma(a,b));
console.log(sub(a,b));
console.log(mult(a,b));
console.log(funcoes2.soma(a,b));
console.log(funcoes2.sub(a,b));
console.log(funcoes2.mult(a,b));
console.log(somaFunc(a,b));
class Teste {
    metodo(){

    }

    outro(){

    }
}