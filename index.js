function somaMultiplos3ou5() {
  const numero = document.getElementById("numero").value;

  let soma = 0;
  for (let i = 0; i < numero; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      soma += i;
    }
  }

  const resultado = (document.getElementById(
    "resultado"
  ).innerHTML = `A soma dos valores divisíveis por 3 ou 5 inferiores a ${numero} é: ${soma}`);

  return resultado;
}
