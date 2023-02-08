// para ser aprovado, atender uma competencia
// e ter a partir de 70%

// var competencia = prompt
// ("insira A para atende, AP para atende parcialmente ou NA para não atende");
// var frequencia = prompt("digite a % de frequencia");

// if(competencia == "A" && frequencia >= 70){
//     document.write("aprovado");
// } else if (competencia == "AP" && frequencia >= 70) {
//     document.write("aluno precisa participar da recuperação");
// } else if(competencia == "NA" || frequencia < 70){
//     document.write("aluno reprovado");
// } else {
//     document.write
//     ("insira valores válidos, atente para utilizar CAPS para competencia e apenas numerais para a frequencia");
// }

// var competencia = prompt
// ("insira 'sim' atende ou 'nao' para não atende");
// var frequencia = prompt("digite a % de frequencia");

// if(competencia == "sim" && frequencia >= 70){
//     document.write("aprovado");
// } else if (competencia == "nao" && frequencia >= 70) {
//     document.write("aluno precisa participar da recuperação");
// } else if(competencia == "nao" || frequencia < 70){
//     document.write("aluno reprovado");
// } else {
//     document.write
//     ("insira valores válidos, atente para utilizar CAPS para competencia e apenas numerais para a frequencia");
// }

// se < 0 ou > 10 = "nota invalida"
// se >= 0 e < 4 = "aluno reprovado"
// se >= 4 e < 7 = "aluno em recuperação"
// se >= 7 e <= 10 = "aluno aprovado"

// var notaAluno = prompt("digite a nota do aluno: ");

// if (notaAluno < 0 || notaAluno > 10) {
//   document.write("digite uma nota valida (1-10)");
// } else if (notaAluno >= 0 && notaAluno < 4) {
//   document.write("aluno reprovado");
// } else if (notaAluno >= 4 && notaAluno < 7) {
//   document.write("aluno em recuperação");
// } else if (notaAluno >= 7 && notaAluno <= 10) {
//   document.write("aluno aprovado");
// } else {
//   document.write("digite uma nota valida (1-10)");
// }

// faça um programa que dependendo da cor favorita do usuário seja info uma msg
// se amarelo = voce gosta do Sol
// se azul = voce gosta do mar
// se verde = voce gosta de floresta

// TAREFA 1

// var cor = prompt("digite sua cor favorita");

// switch (cor) {
//   case "azul":
//     document.write("voce gosta do mar");
//     break;
//   case "verde":
//     document.write("voce gosta da floresta");
//     break;
//   case "amarelo":
//     document.write("você gosta do sol");
//     break;
//   default:
//     document.write("escolha uma cor válida");
// }

// TAREFA 2

// var mesDoAno = prompt("digite um mês (numeral de 1-12)");

// switch (mesDoAno) {
//   case "1":
//     document.write("janeiro");
//     break;
//   case "2":
//     document.write("fevereiro");
//     break;
//   case "3":
//     document.write("março");
//     break;
//   case "4":
//     document.write("abril");
//     break;
//   case "5":
//     document.write("maio");
//     break;
//   case "6":
//     document.write("junho");
//     break;
//   case "7":
//     document.write("julho");
//     break;
//   case "8":
//     document.write("agosto");
//     break;
//   case "9":
//     document.write("setembro");
//     break;
//   case "10":
//     document.write("outubro");
//     break;
//   case "11":
//     document.write("novembro");
//     break;
//   case "12":
//     document.write("dezembro");
//     break;
//   default:
//     document.write("escolha uma numeral válido");
// }

// TAREFA 3

var conceitoAluno = prompt(
  "digite o conceito do aluno( A- atendido, PA - parcialmente atendido, NA - nao atendido): )"
);

switch (conceitoAluno) {
  case "A":
    document.write("atendido");
    break;
  case "PA":
    document.write("parcialmente atendido");
    break;
  case "NA":
    document.write("não atendido");
    break;
  default:
    document.write("Opção inválida -> Escolha entre A, PA e NA - caps deve estar ativado");
}