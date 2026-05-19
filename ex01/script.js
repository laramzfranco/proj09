let numeros = [];
let somaPares = 0;

for (let i = 0; i < 10; i++) {

    let numero = parseInt(prompt(`Digite o ${i + 1}º número:`));

    numeros[i] = numero;

    if (numero % 2 === 0) {
        somaPares = somaPares + numero;
    }
}

document.write("<h2>Vetor:</h2>");

for (let i = 0; i < numeros.length; i++) {
    document.write(numeros[i] + "<br>");
}

document.write("<br><strong>Soma dos números pares: " + somaPares + "</strong>");