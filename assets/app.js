const storedRefe = JSON.parse(localStorage.getItem("Referencias")) || [];
let refe = [...storedRefe];

const checkJunior = document.getElementById("junior");
const checkBaby = document.getElementById("baby");
const remove = document.getElementById("del_last");

document.addEventListener(
	"keypress",
	function (e) {
		if (e.which === 13) {
			shown();
			displayReferences();
		}
	},
	false
);

const shown = () => {
	let userInput = document.getElementById("test").value.trim();
	if (!userInput) {
		alert("Please enter a reference!");
	} else if (refe.includes(userInput)) {
		alert("Essa referencia ja existe");
	} else if (checkJunior.checked) {
		user = userInput + " (junior)";
		refe.push(user);
		action();
		displayReferences();
	} else if (checkBaby.checked) {
		user = userInput + " (baby)";
		refe.push(user);
		action();
	} else {
		refe.push(userInput);
		action();
	}
};

const action = () => {
	clearInput();
	localStorage.setItem("Referencias", JSON.stringify(refe));
	displayReferences();
};

const clearInput = () => {
	document.getElementById("test").value = "";
};

const displayReferences = () => {
	const storedRefe = JSON.parse(localStorage.getItem("Referencias")) || [];

	let text = "";
	storedRefe.sort((a, b) => a.localeCompare(b));
	let upper = storedRefe.map((e) => e.toUpperCase());

	upper.forEach((item) => {
		text += item + "<br>";
	});

	document.getElementById("aparecer").innerHTML = text;
};
const displayStorage = () => {
	const storedRefe = JSON.parse(localStorage.getItem("Referencias")) || [];

	let text = "";
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

const removeLast = () => {
	let text = "";
	refe.sort((a, b) => a.localeCompare(b));
	let upper = refe.map((e) => e.toUpperCase());
	upper.forEach((item) => {
		text += item + "<br>";
	});
	refe.pop();

	document.getElementById("aparecer").innerHTML = text;
};

window.addEventListener("DOMContentLoaded", (event) => {
	displayReferences();
});
