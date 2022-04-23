console.clear();
const prompt = require('prompt-sync')();
let resposta = '';

do {

let escolha_usuario;
let escolha_computador;
let rodadas;
let lista = ['pedra', 'papel', 'tesoura'];
let i = 1;
let vitoria_usuario = 0;
let vitoria_computador = 0;
let empate = 0;


console.log('Vamos começar o melhor jogo que você já viu em sua vida! JO - KEN - PÔ! Quantas rodadas iremos jogar?');
rodadas = +prompt();
while (isNaN(rodadas)) {
    console.log('Você digitou uma opção inválida. Digite um número de rodadas válido para continuar: ');
    rodadas = +prompt();
}


for (; i <= rodadas; i++) {

    let opcao = Math.floor(Math.random()* 3);

console.log(`Vamos para a rodada ${i}! Digite pedra, papel ou tesoura:`);
escolha_usuario = prompt().toLowerCase();

while (escolha_usuario != 'pedra' && escolha_usuario != 'papel' && escolha_usuario != 'tesoura') {
    console.log('Você informou uma opção inválida. Digite pedra, papel ou tesoura:');
    escolha_usuario = prompt().toLowerCase();

}

escolha_computador = lista[opcao];


if (escolha_computador == 'pedra' && escolha_usuario == 'papel' || escolha_computador == 'papel' && escolha_usuario == 'tesoura' || escolha_computador == 'tesoura' && escolha_usuario == 'pedra' ) {
    console.log(`Você ganhou! Eu escolhi ${escolha_computador} e você escolheu ${escolha_usuario}.`);
    vitoria_usuario++;
} else if (escolha_computador == 'pedra' && escolha_usuario == 'tesoura' || escolha_computador == 'papel' && escolha_usuario == 'pedra' || escolha_computador == 'tesoura' && escolha_usuario == 'papel') {
    console.log(`Você perdeu! Eu escolhi ${escolha_computador} e você escolheu ${escolha_usuario}.`);
    vitoria_computador++;
} else {
    console.log(`Empatamos! Eu escolhi ${escolha_computador} e você escolheu ${escolha_usuario}.`);
    empate++; 
}

}

if (vitoria_computador > vitoria_usuario) {
    console.log(`O nosso placar final é de ${vitoria_computador} vitórias para mim, ${vitoria_usuario} vitórias para você! Portanto, eu sou o MAIOR JOGADOR DE JOKENPÔ DA HISTÓRIA`);
} else if (vitoria_computador < vitoria_usuario){
 console.log(`O nosso placar final é de ${vitoria_computador} vitórias para mim e ${vitoria_usuario} vitórias para você! Você deu sorte, mas mesmo assim é o campeão!`);
} else {
    console.log(`O nosso placar final é de ${vitoria_computador} vitórias para mim e ${vitoria_usuario} vitórias para você! Empatamos!`);
}
console.log('Você deseja jogar novamente? Digite Sim ou Nao:');
resposta = prompt().toLowerCase();
    while (resposta != 'sim' && resposta != 'nao') {
        console.log('Você digitou um número inválido. Digite novamente:');
        resposta = prompt().toLowerCase();
    }
    console.clear();
} while (resposta == 'sim');
