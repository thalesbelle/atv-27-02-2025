let nomePiloto = "Thales"
function calcularDistancia (distanciaPercorrida, tempoGasto)
{
    calcularVelocidade = distanciaPercorrida / tempoGasto;
    return calcularVelocidade;
}
console.log("A velocidade média do piloto ", nomePiloto, " é de:", calcularDistancia(60, 20), "Km/h.");