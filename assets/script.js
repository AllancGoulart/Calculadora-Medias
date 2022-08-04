function soma() {
  let n1 = Number(document.getElementById("nota1").value); //Number converte o input, já que o mesmo vem em String
  let n2 = Number(document.getElementById("nota2").value);
  let n3 = Number(document.getElementById("nota3").value);
  let n4 = Number(document.getElementById("nota4").value);

  let divResultado = document.getElementById("resultado"); //Div criado onde aparecera o resultado
  let resultado = (n1 + n2 + n3 + n4) / 2;

  if (resultado >= 20) {
    divResultado.innerHTML = `Parabéns, APROVADO! Seu resultado é ${resultado}.`;
  } else {
    divResultado.innerHTML = `REPROVADO, Estude mais um pouco! Seu resultado é ${resultado}.`;
  }
}
function reset() {
  resultado.innerHTML = ``;
  document.getElementById("nota1").value = "";
  document.getElementById("nota2").value = "";
  document.getElementById("nota3").value = "";
  document.getElementById("nota4").value = "";
}
