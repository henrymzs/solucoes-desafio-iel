const notas = [7, 8, 6];
const pesos = [2, 3, 1];

function calcularMediaPonderada(notas, pesos) {
    mediaPonderada = (((notas[0] * pesos[0]) + (notas[1] * pesos[1]) + (notas[2] * pesos[2]))/6).toFixed(2);
    console.log(`A média ponderada é ${mediaPonderada}`);
}

calcularMediaPonderada(notas, pesos);