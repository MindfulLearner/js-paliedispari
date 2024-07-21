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
// -------------------------- 1. Richiesta Input
let chiediInput = richiestaUtenteInput();

// ---------------------------2. Utente sceglie se Pari o Dispari
let chiediInputPariDispari = richiestaUtenteInputPariDispari();
console.log(chiediInputPariDispari);

// ---------------------------3. rand computer
let computerOttieniNumeroCasuale = generaNumeroCasuale();
console.log(`Computer numero is: ${computerOttieniNumeroCasuale}`);
let computerPariDispari;
if (chiediInputPariDispari == "pari") {
    computerPariDispari = "dispari";
} else { 
    computerPariDispari = "pari";
}
console.log(computerPariDispari);

// ---------------------------4. troviamo la somma dei due dati User INput e COmputer randominput
let sommaPariDispari = parseInt(chiediInput) + parseInt(computerOttieniNumeroCasuale);
console.log(`la somma di User e Computer e': ${sommaPariDispari}`); 
let randr = varVincitore();
console.log(randr);
if (chiediInputPariDispari == randr) {
    console.log("USER WINNER");
} else {
    console.log("COMPUTER WINNER");
}

// ---------------------------5. controllo paridispari
let ctrlPariDispari = controlloOddEven();

// -----------------------funzioni---------------------------------------------------------------------
// funzione richiesta utente  facciamo scegliere ai fanciulli e al computer un number swag
function richiestaUtenteInput () {
    let swagInterrutore = true;
    let chiediInput;
    while(swagInterrutore == true) {
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

// Funzioe Pari o dispair
function richiestaUtenteInputPariDispari(){ 
    let sceltaInput;   
    while (true){
        sceltaInput = prompt(`scegli se pari o dispari`);
        console.log("entrato in while");
        if (sceltaInput == "pari") {
            console.log(`utente ha scelto ${sceltaInput}`);
            break;
        }else if (sceltaInput == "dispari"){
            console.log(`utente ha scelto ${sceltaInput}`);
            break;
        }
    }
    return sceltaInput;
}

// funzione random winner
function varVincitore() {
    let veroFalso =  Math.floor((Math.random() * 2) + 1);
    console.log(veroFalso);
    if (veroFalso == 1) {
        console.log("chi e' pari vince"); 
        veroFalso = "pari";
    }else {
        console.log("chi e' dispari vince");
        veroFalso = "dispari";
    }
    return veroFalso;
}
// funzione numero casuale
function generaNumeroCasuale(){
    return Math.floor((Math.random() * 5) + 1);
}
// Funzione ControlloEven
function controlloOddEven() {
    sommaPariDispari = sommaPariDispari % 2;
    if (sommaPariDispari == 0){
        console.log(`tot numero pari restp: ${sommaPariDispari}`);
    } else {
        console.log(`tot numero dispari resto: ${sommaPariDispari}`);
    }
}


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
