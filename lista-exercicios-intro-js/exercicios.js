// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}
// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = prompt("Digite a altura")
  const largura = prompt("Digite a largura")
  const area = altura * largura
  console.log(area)

}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = prompt("Digite o ano atual")
  const anoDeNascimento = prompt("Digite seu ano de nascimento")
  const idade = anoAtual - anoDeNascimento
  console.log(idade)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const imc = peso / (altura * altura)
  return imc

}
calculaIMC(85, 1.8)

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt("Informe seu nome")
  const idade = prompt("Informe sua idade")
  const email = prompt("Informe seu email")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt("Insira sua primeira cor favorita")
  const cor2 = prompt("Insira sua segunda cor favorita")
  const cor3 = prompt("Insira sua terceira cor favorita")
  console.log([cor1, cor2, cor3])

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return custo / valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return string1.length === string2.length

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length - 1]


}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // [1,2,3,4]
  const array1 = array[0]
  const arrayUltimo = array[array.length - 1]
  array.pop()
  array.shift()
  array.unshift(arrayUltimo)
  array.push(array1)
  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return string1.toUpperCase() === string2.toUpperCase()

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual = prompt("Digita o ano atual")
  const anoDeNascimento = prompt("Digite o ano de nascimento")
  const anoIdentidade = prompt("Digite o ano que sua carteira de identidade foi emitida")
  const tempoRg = anoAtual - anoIdentidade
  const condicao1 = (anoAtual - anoDeNascimento <= 20) && tempoRg >= 5
  const condicao2 = (anoAtual - anoDeNascimento > 20 && anoAtual - anoDeNascimento <= 50) && tempoRg >= 10
  const condicao3 = (anoAtual - anoDeNascimento > 50) && tempoRg >= 15
  console.log(condicao1 || condicao2 || condicao3)

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  const condicao1 = ano % 400 == 0
  const condicao2 = ano % 4 == 0 && ano % 100 !== 0
  return condicao1 || condicao2


}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const ano = prompt("Você tem mais de 18 anos?")
  const ensinoMedio = prompt("Você possui ensino médio completo?")
  const disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")
  const resultado = ano.includes("sim") && ensinoMedio.includes("sim") && disponibilidade.includes("sim")
  console.log(resultado)
}