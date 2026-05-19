let numeros = [];

for (let i = 0; i < 7; i++) {

    numeros[i] = Math.floor(Math.random() * 100);

}

document.write("<h2>Valores gerados:</h2>");

for (let i = 0; i < numeros.length; i++) {

    document.write(numeros[i] + "<br>");

}