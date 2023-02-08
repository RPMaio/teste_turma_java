
// var idadeUsuario = parseInt(prompt("digite sua idade: "));

// if(idadeUsuario == Number && idadeUsuario >= 21){
//     document.write("pode beber");
// } else{
//    document.write("ainda não possui idade suficiente para beber");
// }

// var cidadeNasc = prompt('O usuário nasceu em que cidade? 1-rj ou 2-sp');

// if(cidadeNasc == 'rj'){
//     document.write('é carioca');
// } else if(cidadeNasc == 'sp'){
//     document.write('é paulista');
// } else {
//     document.write('informe a cidade correta');
// }

// Construir uma pagina para uma empresa de serviços
// O operador irá digitar o salário de um cliente 
// Se o salario for a partir de 3k
// o programa irá escrever "Oferecer plano anual Alfa"
// caso seja menor escrever "Oferecer plano Beta"

// var salarioCliente = prompt("Digite o salário do cliente");

// if(salarioCliente >= 3000){
//     document.write("Oferecer plano anual Alfa");
// }else {
//     document.write("Oferecer plano Beta");
// }

// Usuario escreve o valor do colesterol. 
// Caso seja menor que 180, irá escrever na tela "Saude OK", 
// caso contrario, irá escrever "Vamos procurar ajuda medica?"

// var valorColesterol = prompt("digite seu colesterol");

// if(valorColesterol <= 180){
//     document.write('saúde ok');
// }else if(valorColesterol > 180) {
//     document.write('vamos procurar ajuda?');
// } else{
//     document.write('escreva um valor válido');
// }

// Irá digitar quanto vendeu em 1 mês na loja.
// Caso seja >= 10k, irá calcular comissao de 4% sobre as vendas, caso contrário
// calcula 2%

var totalVendasMes = parseInt(prompt("digite seu total de vendas no mês"));
var comissao = totalVendasMes * 0.02;

if(totalVendasMes >= 10000){
    comissao = totalVendasMes * 0.04;
} else{
    document.write('digite apenas numerais');
}

document.write(`sua comissao total é de R$${comissao}`);