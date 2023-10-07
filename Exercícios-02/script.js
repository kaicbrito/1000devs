// Entenda este código e tente realizar o desafio 1 (identificado como comentário).
// Neste desafio você deve criar uma função chamada arredondar2Casas e realizar o arredondamento do valor 
// recebido como parametro e retornar o valor arredondado com duas casas. 
// O valor retornado deve ser impresso no comando console.log da função main.

main()

function main() {
    let salarioMinimo
    let salarioFuncionario
    
    salarioMinimo = obterValorFracionario("Digite qual é o salário mínimo: ")
    salarioFuncionario = obterValorFracionario("Digite o salário do funcionário: ")
    
    alert("O funcionário recebe "+ arredondar2Casas(salarioFuncionario,salarioMinimo) + " salários mínimos" ); // desafio 1
    
}

function obterValorFracionario(mensagem) {
    return parseFloat(prompt(mensagem))
}

function arredondar2Casas(salarioMinimo, salarioFuncionario) {
    return (salarioFuncionario/salarioMinimo).toFixed(2)
}