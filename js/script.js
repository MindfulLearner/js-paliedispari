// SCRIPTING JS SWAG

// L'idea e' quella di prendere una parola o numero invertirla!! quindi potrebbeo usare un for per controllare al contrario!!
    // andiamo ricomporre la parola partendo dalla fine 

// test palindromo
let inputUtente = prompt("inserisci una parola qualsiasi o numero");
function palidromo(parola) {
    let init = "";
    // Utilizziamo - 1 perche altrimenti stampa undefined
    // utilizziamo i >= 0 perhe altrimenti non ci stampa la prima lettera
    for (let i = parola.length - 1 ; i >= 0; i--) { 
        // debugghiamo lettera
        console.log ("lettera e'" + parola[i]);
        init += parola[i];
    }
    if (init == parola) { 
        console.log (`e' stato controllato la parola ${inputUtente} con ${init}`);
        console.log (`comunque e' true!`);
        return true;
    } else {
        console.log (`e' stato controllato la parola ${inputUtente} con ${init}`);
        console.log (`comunque e' fake`);
        return false; 
    }
}
console.log(palidromo(inputUtente));

// let x = prompt("scegli una parola da controllare");
// var isPalindrome = function(x) {
    //     let init = "";
    //     for (let i = x.length - 1; i >= 0; i--) {
        //         init += x[i];
        //         console.log("lettera " + x[i]);
        //     }
    //     if (init == x) {
        //         return true;
        //     } else {
            //         return false;
            //     }
    // };
// console.log(isPalindrome(x));


console.log(`----------------------------------------------------------------------------------------------`);
console.log(`-------------------SEPARATORESEPARATORESEPARATORESEPARATORESEPARATORESEP-----------------------`);
console.log(`----------------------------------------------------------------------------------------------`);


// GAME DUE LOGIC

// funzione richiesta utente  facciamo scegliere ai fanciulli e al computer un number swag
function richiestaUtenteInput () {
    let swagInterrutore = true;
    let chiediInput;
    while(swagInterrutore == true) {
        console.log("entrato inwhile"); 
        chiediInput = prompt("inserisci un numero:");
        if (chiediInput <= 5 && chiediInput > 0) {
            console.log(`Il numero inserito da User e': ${chiediInput}`);
            swagInterrutore = false;
        } else {
            console.log(`Il numero inserito da User e': ${chiediInput}`);
        }
    }
    return chiediInput;
}
// funzione numero casuale
function generaNumeroCasuale(){
    return Math.floor((Math.random() * 5) + 1);
}





console.log("pre-richiestainput");
let chiediInput;
console.log(chiediInput);
chiediInput = richiestaUtenteInput();
console.log(`secondo controllo - valore di inserito da user: ${chiediInput}`);

console.log("-----USCITO DA WHILE");

// valore per computer del number swag
let computerOttieniNumeroCasuale = generaNumeroCasuale();
console.log(`Computer numero is: ${computerOttieniNumeroCasuale}`);


// funzione somma pari e dispari
// troviamo la somma dei due dati User INput e COmputer randominput
let sommaPariDispari = parseInt(chiediInput) + parseInt(computerOttieniNumeroCasuale);
console.log(`la somma di User e Computer e': ${sommaPariDispari}`); 


function controlloOddEven() {
    sommaPariDispari = sommaPariDispari % 2;
    console.log(sommaPariDispari);
    if (sommaPariDispari == 0){
        console.log(`numero pari: ${sommaPariDispari}`);
    } else {
        console.log(`numero dispari: ${sommaPariDispari}`);
    }
return sommaPariDispari;
}

let ctrlPariDispari = controlloOddEven();
console.log(ctrlPariDispari);

// funzione controllo vincitore MANCA QUALOSA??








    // allenare collegam3ento con html~!












    // function easyCipher(a) {
        //     let b = -4;
        //     let c = '';
        //     for (let d = 0; d < a.length; d++) {
            //         let e = a[d];
            //         if (e.match(/[a-z]/i)) {
                //             let f = a.charCodeAt(d);
                //             if (f >= 65 && f <= 90)
                    //                 e = String.fromCharCode((f - 65 + b) % 26 + 65);
                //             else if (f >= 97 && f <= 122)
                    //                 e = String.fromCharCode((f - 97 + b) % 26 + 97);
                //         }
            //         c += e;
            //     }
        //     return c;
        // }
// 
    // 
    // console.log(easyCipher("wipsvmwspzmwimkecdwadaw"));
//
