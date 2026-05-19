let vetorOriginal = [];
let vetorSemDuplicados = [];
let existe;

for (let i = 0; i < 10; i++) {

    vetorOriginal[i] = parseInt(prompt(`Digite o ${i + 1}º número:`));

}

for (let i = 0; i < vetorOriginal.length; i++) {

    existe = false;

    for (let j = 0; j < vetorSemDuplicados.length; j++) {

        if (vetorOriginal[i] === vetorSemDuplicados[j]) {

            existe = true;

        }

    }

    if (existe === false) {

        vetorSemDuplicados[vetorSemDuplicados.length] = vetorOriginal[i];

    }

}

document.write("<h2>Vetor original</h2>");

for (let i = 0; i < vetorOriginal.length; i++) {

    document.write(vetorOriginal[i] + "<br>");

}

document.write("<h2>Vetor sem duplicados</h2>");

for (let i = 0; i < vetorSemDuplicados.length; i++) {

    document.write(vetorSemDuplicados[i] + "<br>");

}