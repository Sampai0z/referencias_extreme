let refe = JSON.parse(localStorage.getItem("Referencias"));

document.addEventListener(
  "keypress",
  function (e) {
    if (e.which === 13) {
      shown();
    }
  },
  false
);

const shown = () => {
  let userInput = document.getElementById("test").value.trim();

  if (!userInput) {
    alert("Please enter a reference!");
  } else {
    refe.push(userInput);
    clearInput();
    localStorage.setItem("Referencias", JSON.stringify(refe));
    displayReferences();
  }
};

const clearInput = () => {
  document.getElementById("test").value = "";
};

const displayReferences = () => {
  const storedRefe = JSON.parse(localStorage.getItem("Referencias")) || [];

  let text = "";
  console.log("referencias", storedRefe);
  storedRefe.sort((a, b) => a.localeCompare(b));
  let upper = storedRefe.map((e) => e.toUpperCase());

  upper.forEach((item) => {
    text += item + "<br>";
  });

  document.getElementById("aparecer").innerHTML = text;
};

const del = () => {
  refe = [];
  localStorage.removeItem("Referencias");
  document.getElementById("aparecer").innerHTML = "";
};
