function tempSemana(segunda, terca, quarta, quinta, sexta, sabado, domingo){

    mediaTemp = ((segunda + terca + quarta + quinta + sexta + sabado + domingo) / 7).toFixed(0)
    return mediaTemp;
}
console.log("A média das temperaturas da semana é de:", tempSemana(23, 24, 23, 21, 25, 14, 15), "°C");