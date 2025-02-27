function estoqueProduto (estoque, pedido){
    var estoqueRestante = estoque - pedido;
    if(estoque > pedido){
        console.log("O restante no estoque é de:", estoqueRestante, "produtos. A venda será realizada.");
    }
    else if(pedido > estoque){
        console.log("O restante no estoque é de:", estoqueRestante, "produtos. A venda não será realizada.");
    }
    return estoqueRestante
}
estoqueProduto(50,30);