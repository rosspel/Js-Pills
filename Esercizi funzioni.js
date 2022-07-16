//Funzione che accetta stringa e restituisce la parola più lunga all'interno della stringa

function getMaxWord(str) {
    let parole = str.split(" ");
    let max = parole[0];
    for(var i =1; i < parole.length; i ++) {
        max = parole[i].length > max.length ? parole[i]: max;
     }
     return max;
}

let rsl =getMaxWord("ciao sono io weeee lol");
rsl

//Funzione ricorsiva che, dato un valore x e un valore n, esegue la potenza di x alla n
function recursivePow(x,n) {
    if(x==1) {return 1}
    return n==1 ? x : x*recursivePow(x, n-1);
}

result = recursivePow(2,3);
result
//come funziona
//n=3 -> 2 * recursivePow(2,2)
//n=2 -> 2 * recursivePow(2,1)
//n=1 -> ritorna x quindi 2

//sostituisco (leggi da sotto)
//n=3 -> 2 * 4
//n=2 -> 2 * 2
//n=1 -> 2

//Funziona che ritorna stringa casuale di caratteri
function creaStringaCasuale(n) {
    const caratteri = "zxcvbnmlkjhgfdsapoiu"
    const lunghezza = caratteri.length;
    let strCasuale = "";
    for(var i = 0; i<n; i++) {
        strCasuale += caratteri[Math.floor(Math.random()* lunghezza)]
        
    }
    return strCasuale;
}

const pwd = creaStringaCasuale(16);
pwd

//Funzione che inverte contenuto stringa
function invertiStringa(str) {
    return str.split("").reverse().join("");
}

const invertita = invertiStringa("ciao")
invertita