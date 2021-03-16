function calcularPeso() {
    var inNome = document.getElementById("inNome");
    var inPeso = document.getElementById("inPeso");
    var inAltura = document.getElementById("inAltura");
    var rbHomem = document.getElementById("rbHomem");
    var rbMulher = document.getElementById("rbMulher");
    var outPeso = document.getElementById("outPeso")
    var outClassificacao = document.getElementById("outClassificacao");

    var nome = inNome.value;
    var peso = parseFloat(inPeso.value);
    var altura = parseFloat(inAltura.value);
    var quadrado = altura * altura;
    var resultado = peso / quadrado;
    var homem = rbHomem.checked;
    var mulher = rbMulher.checked;

    if (nome == "" || (homem == false && mulher == false)) {
        alert("Por favor, informe seu nome e/ou sexo!");
        inNome.focus();
        return;
    } else if (peso == 0 || isNaN(peso)) {
        alert("Por favor, informe seu peso");
        inPeso.focus();
        return;
    } else if (altura == 0 || isNaN(altura)) {
        alert("Por favor, informe sua altura");
        inAltura.focus();
        return;
    }

    outPeso.textContent = (nome + "! O seu IMC é: ") + resultado.toFixed(1);

    if (resultado <= 18.5) {
        outClassificacao.textContent = "Magreza - " + "Obesidade Grau (0)"
    } else if (resultado <= 24.9) {
        outClassificacao.textContent = "Normal - " + "Obesidade Grau (0)"
    } else if (resultado <= 29.9) {
        outClassificacao.textContent = "Sobrepeso - " + "Obesidade Grau (1)"
    } else if (resultado <= 39.9) {
        outClassificacao.textContent = "Obesidade - " + "Obesidade Grau (2)"
    } else {
        outClassificacao.textContent = "Obesidade - " + "Obesidade Grau (3)"
    }
} 

var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularPeso);

function limparCampos() {
    document.getElementById("inNome").value = "";
    document.getElementById("inPeso").value = "";
    document.getElementById("inAltura").value = "";
    document.getElementById("outPeso").textContent = "";
    document.getElementById("outClassificacao").textContent = "";
    document.getElementById("rbHomem").checked = false;
    document.getElementById("rbMulher").checked = false;
    document.getElementById("inNome").focus();
}

var btLimpar = document.getElementById("btLimpar");
btLimpar.addEventListener("click", limparCampos);