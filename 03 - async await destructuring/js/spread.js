const numbers = [32, 432, 23, 5, 4, 2, 3];
console.log(numbers);

// raderna nedan får exakt samma resultat
console.log(...numbers)
console.log(32, 432, 23, 5, 4, 2, 3)


console.log( Math.max(numbers))
console.log( Math.max(...numbers))

const obj1 = {
    p1: 1,
    p2: 2
}

const obj2 = {
    p3:3
}

const obj3 = {...obj1, ...obj2};
console.log(obj3);

console.log('-----NON PRIMITIVES------');
//  Två ställen i minnet skapas för varje variabel
let a = 1;
let b = a;
a = 100;
console.log(a, b);

// Ett ställe i minnet skapas och varje variabel innehåller en pekare till det stället
let objA = {p1: 1};
let objB = objA;
objA.p1 = 100;
console.log(objA, objB);

// för att göra en kopia frånkopplat från orginalet behver vi klona objektet
let objC = {p2:2};
let objD = {...objC};
objC.p2 = 200;
console.log(objC, objD)