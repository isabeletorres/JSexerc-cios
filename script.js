function maiorMenor() {
    const valores = [];

    for (let i = 0; i < 5; i++) {
        let valor = parseInt(prompt(`Digite o valor ${i + 1}:`), 10);
        if (isNaN(valor)) { //verificar o que é isNaN
            alert("Por favor, insira um número válido.");
            return;
        }
        valores.push(valor); //o que é push
    }
    let maior = Math.max(...valores);
    let menor = Math.min(...valores);

    alert(`O maior valor é: ${maior}`);
    alert(`O menor valor é: ${menor}`);
}

function parImpar() {
    var numero = parseInt(prompt(`Digite um valor: `));

    if (numero % 2 == 0) {
        alert(`True (1)`);
    } else {
        alert(`False (0)`);
    }
}

function negaPosi() {
    var num = parseInt(prompt(`Digite um número: `));
    if (num >= 0) {
        alert(`True (Positivo)`);
    } else {
        alert(`False (Negativo)`);
    }
}

function ordem() {
    var num1 = parseInt(prompt(`Digite um número: `));
    var num2 = parseInt(prompt(`Digite um número: `));
    var num3 = parseInt(prompt(`Digite um número: `));

    if (num1 > num2) {
        var aux = num1;
        num1 = num2;
        num2 = aux;
    }
    if (num1 > num3) {
        aux = num1;
        num1 = num3;
        num3 = aux;
    }

    if (num2 < num3) {
        alert(`${num1}, ${num2}, ${num3}`);
    } else {
        alert(`${num1}, ${num3}, ${num2}`);
    }
}

function limites() {
    var limInf = parseInt(prompt(`Digite o valor que vai iniciar a sequência: `));
    var limSup = parseInt(prompt(`Digite o valor que vai acabar a sequência: `));
    var somaPar = 0;
    for (var i = limInf; i <= limSup; i++) {
        if (i % 2 == 0) {
            somaPar = somaPar + i;
            alert(`Esse número (${i}) está na sequência e é par`);
        }
    }
    alert(`A soma dos números pares da sequência é: ${somaPar}`);
}

function vogal() {
    var letra = prompt("Digite uma letra:").toLowerCase();

    if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
        alert("True (1)");
    } else {
        alert("False (0)");
    }
}
