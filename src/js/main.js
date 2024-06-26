// 1. ¿Es 35 mayor que 25?
console.log(35 > 25);
// 2. ¿Es 45 menor que 30?
console.log(45 < 30);
// 3. ¿Son 50 y "50" iguales?
console.log(50 === '50');
// 4. ¿Es 40 estrictamente igual a 40 convertido a número?
let num = Number('40')
console.log(40 === num);
// 5. ¿Son "apple" y "orange" diferentes?
console.log('apple' != 'orange');
// 6. ¿Es "apple" estrictamente diferente de "Apple"?
console.log('apple' !== 'Apple');
// 7. ¿Cuál es el valor de una variable sin definir?
let variable = undefined;
console.log(variable);
// 8. ¿Cuál es el tipo de dato de una variable sin definir?
console.log(typeof variable);
// 9. ¿Es null igual a undefined?
console.log(null == undefined);
// 10.¿Son null y undefined estrictamente iguales?
console.log(null === undefined);
// 11.¿Es "2.75" mayor que 2.5?
console.log('2.75' > 2.5);
// 12.¿Es "2.75" mayor que 2.75?
console.log('2.75' > 2.75);
// 13.¿Es "2.75" mayor o igual a 2.75?
console.log('2.75' >= 2.5);
// 14.¿Es "2.75" menor o igual a 2.75?
console.log('2.75' <= 2.5);
// 15.¿Es "2.75" un número mayor a 2.8?
console.log('2.75' > 2.8);
// 16.¿Es "2.75" un número menor a 2.7?
console.log('2.75' > 2.7);
// 17.¿Es el nombre "John" diferente de "john"?
console.log('John' != 'john');
// 18.¿Es el nombre "John" diferente de "Jon"?
console.log('John' != 'jon');
// 19.¿Es la edad 30 estrictamente diferente de "30"?
console.log(30 === '30');
// 20.¿Cuál es el resultado de desplazar a la derecha 25 dos veces en bits?
let numeroBi = 25;
let numeroBi1 = 6;
console.log(numeroBi.toString(2));
console.log(numeroBi1.toString(2));
console.log(`esto que es ${25 >> 2}`);
// 21.¿Cuál es el resultado de desplazar a la izquierda 8 tres veces en bits?
for (let i = 1; i < 3; i++) {
    console.log(8<< i)
}
console.log(`esto que es ${8 << 3}`);
// 22.¿Son 15 y 15 iguales?
console.log(15 == 15);
// 23.¿Son 20 y 30 diferentes?
console.log(20 != 30);
// 24.¿Es "15" mayor que 30?
console.log('15' > 30);
// 25.¿Es 20 menor que 40?
console.log(20 < 40);
// 26.¿Es 100 mayor o igual a "99"?
console.log(100 == 99);
// 27.¿Es 500 estrictamente igual a "500"?
console.log(500 === '500');
// 28.¿Es 750 estrictamente igual a 750?
console.log(750 === 750);
// 29.¿Es 5 estrictamente diferente de "5"?
console.log(5 !== '5');
// 30.¿Es 3 mayor que 5 y 4 menor que 6? (Operadores lógicos)
console.log(3 > 5 && 4 < 6);