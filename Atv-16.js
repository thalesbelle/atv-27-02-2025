function pipocaCinema(pessoas){

    pipocaPessoa = (pessoas / 4).toFixed(0)
    return pipocaPessoa;
}
console.log("A quantidade de pacotes de pipoca necessária é de: ", pipocaCinema(58));