let numeros = [];
let contador = 0;

for (let i = 0; i < 10; i++) {

    numeros[i] = parseInt(prompt(`Digite o ${i + 1}º número:`));

}

let numeroBusca = parseInt(prompt("Digite um número para buscar:"));

for (let i = 0; i < numeros.length; i++) {

    if (numeros[i] === numeroBusca) {

        contador++;

    }

}

document.write("<h2>Resultado</h2>");

document.write("O número " + numeroBusca +
    " aparece " + contador + " vez(es) no vetor.");