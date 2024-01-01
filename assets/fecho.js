// console.log("foi");

const notas = document.getElementById("notas").value;
const valorTotal = document.getElementById("total");

let total = 0;

const calcular = () => {
  const moedas = document.querySelectorAll(".coin_input");
  moedas.forEach((moeda) => {
    let valorUnitario = parseFloat(moeda.getAttribute("data-valor")) || 0;
    let quantidade = parseFloat(moeda.value) || 0;
    total += quantidade * valorUnitario;
  });
  valorTotal.innerHTML = total.toFixed(2);

  moedas.value = 0;
};

const limpar = () => {
  console.log("clear");
};
