const valorTotal = document.getElementById("total");
const notas = document.querySelectorAll(".notas_input");
const moedas = document.querySelectorAll(".coin_input");
const totalFundo = document.getElementById("totalFundo");
const valorfundoCaixa = document.getElementById("fundo");

let total = 0;

const calcular = () => {
  moedas.forEach((moeda) => {
    let valorUnitario = parseFloat(moeda.getAttribute("data-valor")) || 0;
    let quantidade = parseFloat(moeda.value) || 0;
    total += quantidade * valorUnitario;
  });

  notas.forEach((nota) => {
    let valorUnitario = parseFloat(nota.getAttribute("data-valor")) || 0;
    let quantidade = parseFloat(nota.value) || 0;
    total += quantidade * valorUnitario;
  });

  valorTotal.innerHTML = total.toFixed(2);
  let soma = total.toFixed(2) - parseFloat(valorfundoCaixa.value) || 0;
  totalFundo.innerHTML = soma.toFixed(2);
};

const limpar = () => {
  moedas.forEach((moeda) => {
    moeda.value = "";
  });
  notas.forEach((nota) => {
    nota.value = "";
  });

  valorTotal.innerHTML = "0.00";
  totalFundo.innerHTML = "0.00";
  total = 0;
};

const limparInput = () => {
  notas.forEach((nota) => {
    nota.value = "";
  });
  moedas.forEach((moeda) => {
    moeda.value = "";
  });
  valorfundoCaixa.value = "";
};

const limparTotal = () => {
  valorTotal.innerHTML = "0.00";
  totalFundo.innerHTML = "0.00";
  total = 0;
};
