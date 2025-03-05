function netflixAssinatura(anual){

    assinaturaMensal = (anual / 12).toFixed(0);
    return assinaturaMensal;
}
console.log("A assinatura por mês é de: R$", netflixAssinatura(259.90));