/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/
console.log("Esercizio 1");
//--------------------------------------------------------------------------
let crazySum = function(x,y){
    if (x!==y) {
        return x + y
    }
    else{
        return (x+y)*3
    }
}
let risultato = crazySum(7,6) 
console.log(risultato);
//--------------------------------------------------------------------------
console.log("\n");
/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/
console.log("Esercizio 2");
//--------------------------------------------------------------------------
let boundary = function(x){
    return ( 20 < x <= 100 || x ===400 )
}
risultato = boundary(21)
console.log(risultato);
//--------------------------------------------------------------------------
console.log("\n");
/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/
console.log("Esercizio 3");
//--------------------------------------------------------------------------

let reverseString = function(parola){
    let p = ""
    for (let i = parola.length; i >= 0 ; i--) {    
        p +=  parola.substr(i,1)
    }
    parola = p
    return parola 
}
console.log( reverseString("EPICODE") );

console.log("\n");
//--------------------------------------------------------------------------
/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/
console.log("Esercizio 4");
//--------------------------------------------------------------------------
let fraseTest = ""

let upperFirst = function(frase){
    let p = "", l 
    for (let i = 0; i < frase.length; i++) {
        if (i === 0 || (frase.substr(i-1,1) === " ")) {
                l = (frase.substr(i,1));
                 p += l.toUpperCase();
        }
        else{
            l = frase.substr(i,1);
            p += l;
            }
        }
             frase = p;
             return frase
    }

console.log(upperFirst("ciao mamma"));
console.log("\n");
//--------------------------------------------------------------------------
/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/
console.log("Esercizio 5");
//------------------------------------------------------------------------- 
let array = []

let giveMeRandom = function(n){
for (let i = 0; i < n; i++) {
    array.push(Math.round(Math.random() * 10 ))
}
    return array
}
giveMeRandom(6)
console.log(array);

console.log("\n");
//--------------------------------------------------------------------------
//--------------------------------------------------------------------------
//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
console.log("Esercizio  EXTRA 1");
//--------------------------------------------------------------------------
let area = function(l1,l2){
    return l1*l2;
}
risultato = area(3,4);
console.log(risultato);

console.log("\n");
//--------------------------------------------------------------------------
/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/
console.log("Esercizio EXTRA 2");
//--------------------------------------------------------------------------

let crazyDiff = function(x){
    x = Math.abs(x-19);
    if (x > 19) {
        return x*3
    }
    else{
       return x
    }
}
risultato = crazyDiff(39)
console.log(risultato);
//--------------------------------------------------------------------------
console.log("\n");
/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/
console.log("Esercizio EXTRA 3");
//--------------------------------------------------------------------------
let codify = function(stringa){

        if (stringa.substr(0,4) === "code" ){
            return stringa
        }
        else
        {
            return "code"+stringa
        }
}
risultato = codify("codciao")
console.log(risultato);
//--------------------------------------------------------------------------
console.log("\n");
/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/
console.log("Esercizio EXTRA 4");
//--------------------------------------------------------------------------
let check3and7 = function(numero){    
        numero = (numero % 3 ===0 || numero % 7 === 0)
        return numero    
}
risultato = check3and7(21)
console.log(risultato);
//--------------------------------------------------------------------------
console.log("\n");
/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/
console.log("Esercizio EXTRA 5");
//--------------------------------------------------------------------------
let cutString = function(stringa){
    let p = ""
    for (let i = 1; i < stringa.length-1; i++) {        
        p += stringa.substr(i,1)        
    }
    stringa = p
    return stringa
}
risultato = cutString("parola")
console.log(risultato);
//--------------------------------------------------------------------------
console.log("\n");



