const valor = function( largura,altura){
    const valor  = largura * altura
    if(valor>20){
        console.log(`valor acima do pedido ${valor}`)
    }
    else{
        console.log("nop")
    }

}
valor(20, 40)