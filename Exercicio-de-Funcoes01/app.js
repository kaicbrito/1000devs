main();

function main() {
    let baseMaior;
    let baseMenor;
    let altura;
    let lateral;
    let base;
    let raio;

    // Cálculo da Área do Trapézio
    console.log("== Cálculo da Área do Trapézio ==");

    baseMaior = getFloatNumber("Digite o valor da base maior: ");
    baseMenor = getFloatNumber("Digite o valor da base menor: ");
    altura = getFloatNumber("Digite o valor da altura: ");
    
    calcularAreaTrapezio(baseMaior, baseMenor, altura, true);

    // Cálculo da Área do Quadrado
    console.log("== Cálculo da Área do Quadrado ==");

    lateral = getFloatNumber("Digite o valor de um dos lados: ");
    let areaQuadrado = calcularAreaQuadrado(lateral);
    console.log("Área do Quadrado: " + areaQuadrado);

    // Cálculo da Área do Retângulo
    console.log("== Cálculo da Área do Retângulo ==");
    base = getFloatNumber("Digite o valor da base: ");
    altura = getFloatNumber("Digite o valor da altura: ");
    let areaRetangulo = calcularAreaRetangulo(base, altura);
    console.log("Área do Retângulo: " + areaRetangulo);

    // Cálculo da Área do Círculo
    console.log("== Cálculo da Área do Círculo ==");
    raio = getFloatNumber("Digite o valor do raio: ");
    let areaCirculo = calcularAreaCirculo(raio);
    console.log("Área do Círculo: " + areaCirculo);

    // Cálculo da Área do Triângulo
    console.log("== Cálculo da Área do Triângulo ==");
    base = getFloatNumber("Digite o valor da base: ");
    altura = getFloatNumber("Digite o valor da altura: ");
    let areaTriangulo = calcularAreaTriangulo(base, altura);
    console.log("Área do Triângulo: " + areaTriangulo);
}

function getFloatNumber(message) {
    return Number(prompt(message));
}

function calcularAreaTrapezio(baseMaior, baseMenor, altura, print) {
    let area = ((baseMaior + baseMenor) * altura) / 2;
    if (print) {
        console.log("Área do Trapézio: " + area);
    }
}

function calcularAreaQuadrado(lateral) {
    let area = lateral * lateral;
    return area.toFixed(2);
}

function calcularAreaRetangulo(base, altura) {
    let area = base * altura;
    return area.toFixed(2);
}

function calcularAreaCirculo(raio) {
    let area = 3.14 * raio * raio;
    return area.toFixed(2);
}

function calcularAreaTriangulo(base, altura) {
    let area = (base * altura) / 2;
    return area.toFixed(2);
}
