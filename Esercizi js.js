// ESERCIZIO 1
let x = [];
for (let i=1;i<=100;i++) {
  x.push(i);
}
x

for (let i =0; i <x.length;i++) {

    if(x[i] % 3 == 0 && x[i] % 5 == 0) {
        console.log("fiz buzz")
        }
    else if(x[i] % 3 ==0) {
        console.log("fiz")
         } else if (x[i] % 5 == 0) {
          console.log("buz")
           } else {
          console.log(x[i])
          }
}


//ESERCIZIO 2
function fattoriale(n) {
    let f = 1;
    for(i=n; i>1; i--) {f*=i}
    return f;
}

let y = fattoriale(5)
y

//ESERCIZIO 5
function calcola(op1,op2) {
    var j = {};
    op1 = ~~op1;
    op2 = ~~op2;
    j.somma = op1 + op2;
    j.differenza = op1 - op2;
    j.prodotto = op1 * op2;
    if(op2 !=0) {
        j.quoziente = op1 / op2;
    } else {
        j.quoziente = 0;
    }
    return j;
}

let risultato1 = calcola(6,3);
risultato1;

let risultato2 = calcola(8,0)
risultato2

let risultato3 = calcola("4","2");
risultato3



/////////////////////////////

const calculateTax = (value) =>{

    let tax = 0;

    if(value <= 10000){
        tax = value * 10 / 100;
    }
    else if(value > 10000 && value <= 20000) {
        tax = (10000 * 10 / 100) + ((value - 10000) * 7 / 100);
    }
    else if(value > 20000 && value <= 30000) {
        tax = (10000 * 10 / 100) + (10000 * 7 / 100) + ((value - 20000) * 5 / 100);
    }

    else if(value > 30000){
        tax = (10000 * 10 / 100) + (10000 * 7 / 100) + (10000 * 5 / 100) + ((value - 30000) * 3 / 100);
    }

}



// ESERCIZIO 7

const lista = ["ciao","KO","test"];

const anagrammi = ["oaic","OK","test"];


for(let i=0; i < lista.length;i++){

    for(let j=0; j < anagrammi.length;j++){

        if(lista[i] !== anagrammi[j]){

            const matchLength = lista[i].length === anagrammi[j].length;

            const matchLetters = lista[i].split('').sort().join('') === anagrammi[j].split('').sort().join('');

            if(matchLength && matchLetters){

                console.log("YES");

            }

        }

    }

}


// ESERCIZIO 8

const data = [19, 30 ,45, 1 ,3,6,90,4];
const getValue =(data)=>{
    for(let i=0; i<data.length; i++){
        for(let j=0; j<data.length; j++){
            if(data[i] < data[j]){
                let temp = data[i];
                data[i] = data[j];
                data[j] = temp;
            }
        }
    }
    return {
        offsetMin: data[0],
        offsetMax: data[data.length-1]
    };
}
console.log(getValue(data))


//////////////////////////////
let stringa = "Trova la parola più lunga della frase";

let parole = stringa.split(" ");

let  max = parole[0];

for(let i = 0; i<parole.length; i++) {
   if( parole[i].length > max.length) {
       max = parole[i];
   }
}

/////////////////////// ordino array numeri

const transactions = [16.37, 2.33, 4.55, 13.44, 1.25]
const sorted = transactions.slice().sort((a,b)=>a-b) // Make a copy with .slice()
console.log(sorted)

