// SCRIPTING JS SWAG

// consideriamo che se prendiamo un numero qualsiasi e invertiamo ogni volta esempiop
// 56 e facciamo 56 + 65 = otterremo 121 che anch'essa numero palindromo!


// 
//     function easyCipher(a) {
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
