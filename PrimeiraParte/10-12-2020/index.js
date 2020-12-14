// questão 01

const list = [1, 23, 54, 6, 8, 17, 98, 20, 8, 14];
let dentroIntervalo = 0, foraIntervalo = 0;

list.forEach(num => {
    if(num >= 10 && num <= 20) {
        dentroIntervalo++;
    } else {
        foraIntervalo++;
    }
})

console.log(`Há ${dentroIntervalo} valores dentro do intervalor e ${foraIntervalo} valores fora do intervalo`);

//questão 02

const A = [2, 7, 9, 5, 3, 4, 1, 0, 4, 3];
const B = [3, 2, 3, 3, 3, 2, 5, 8, 3, 6];

let C = [];

for (let i = 0; i < A.length; i++) {
    C.push(A[i] * B[i]);
}

console.log(C);

//questão 03 

let D = [];
let a = 0;
let b = 0;

for (let i = 0; i < 20; i++) {
    if (i % 2 == 0) {
        D[i] = A[a];
        a++;
    } else {
        D[i] = B[b];
        b++;
    }
}

console.log(D);