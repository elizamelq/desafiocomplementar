function numerosMultiplosVerificacao (numero1, numero2) {
    return numero1 % numero2 === 0;
}

let numero1 = parseInt (prompt ("Digite o primeiro número"));
let numero2 = parseInt (prompt ("Digite o segundo número"));


if (numerosMultiplosVerificacao (7, 3)) {
    console.log("São multiplos");
} else {
    console.log ("Não são multiplos")
}