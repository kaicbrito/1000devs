
// Entenda o funcionamento do código abaixo com relação ao uso das funções.
// Faça o ajuste na mensagem destacada pelo comentário //desafio 1 substituindo os valores x y e z pelos valores das variáveis corretamente.
// Faça o ajuste na mensagem destacada pelo comentário //desafio 2 substituindo o valor k pelo valor da variável correta.



main()

function main() {
    let metragemFrente, metragemLateral, areaTerreno;
    let valorMetroQuadrado;
    let valorTotalTerreno;
    
    metragemFrente = obterValorFracionario("Digite a metragem da lateral: ");
    metragemLateral = obterValorFracionario("Digite a metragem da lateral: ");
    valorMetroQuadrado = obterValorFracionario("Digite o valor do metro quadrado R$: ");
    
    areaTerreno = calcularAreaTerreno(metragemFrente, metragemLateral); 
    valorTotalTerreno = calcularValorTotal(areaTerreno, valorMetroQuadrado);
    
    console.log("A área do terreno com frente "+ metragemFrente +" e lateral "+ metragemLateral + " é "+ areaTerreno); 
    console.log("O valor total do terreno será R$ " + valorTotalTerreno.toFixed(2));             
function calcularValorTotal(area,valor){
    return area * valor
}

function calcularAreaTerreno(frente,lateral) {
    return frente * lateral
}

function obterValorFracionario(mensagem) {

    return parseFloat(prompt(mensagem))
}
}
