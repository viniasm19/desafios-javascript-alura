// Desafio 03: Condicionais e Template Strings

// 1. Verificar dia da semana
let diaSemana = prompt("Qual é o dia da semana?");

if (diaSemana == "Sábado" || diaSemana == "Domingo") {
    alert("Bom fim de semana!");
} else {
    alert("Boa semana!");
}

// 2. Verificar se número é positivo ou negativo
let numero = prompt("Digite um número:");

if (numero > 0) {
    alert("O número é positivo!");
} else if (numero < 0) {
    alert("O número é negativo!");
} else {
    alert("O número é zero!");
}

// 3. Sistema de pontuação
let pontuacao = prompt("Digite sua pontuação:");

if (pontuacao >= 100) {
    alert("Parabéns, você venceu!");
} else {
    alert("Tente novamente para ganhar.");
}

// 4. Mensagem com saldo usando template string
let saldo = 1500.50;
alert(`Seu saldo atual é de R$ ${saldo}`);

// 5. Boas-vindas com nome do usuário
let nomeUsuario = prompt("Qual é o seu nome?");
alert(`Boas-vindas, ${nomeUsuario}!`);
