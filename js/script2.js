function calcular() {
    let base = parseFloat(document.getElementById("base").value);
    let altura = parseFloat(document.getElementById("altura").value);

    // Verifica se os valores inseridos são válidos
    if (isNaN(base) || isNaN(altura) || base <= 0 || altura <= 0) {
        alert("Por favor, insira valores válidos para a base e a altura.");
        return;
    }

    let area = (base * altura) / 2;

    document.getElementById("area").innerText = `A área é ${area}`;    
    document.getElementById("resultado-container").style.display = "block";
}