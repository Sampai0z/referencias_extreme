// console.log("foi");

const valorTotal = document.getElementById("total");

let total = 0;

const calcular = () => {
  const moedas = document.querySelectorAll(".coin_input");
  const notas = document.querySelectorAll(".notas_input");

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
};

const limpar = () => {
  const moedas = document.querySelectorAll(".coin_input");

  moedas.forEach((moeda) => {
    moeda.value = "";
  });

  valorTotal.innerHTML = "0.00";
};

const limparInput = () => {
  const moedas = document.querySelectorAll(".coin_input");

  moedas.forEach((moeda) => {
    moeda.value = "";
  });
};
