const refe = [];

const adulto = document.querySelector('.adulto').checked = false;
const junior = document.querySelector('.junior').checked = false;

document.addEventListener('keypress', function(e){
       if(e.which == 13){
          mostrarValor();
       }
    }, false);



const shown = () => {
	let userInput = document.getElementById("test").value;

	if(userInput === ""){
		alert("insira uma referencia!!!");
	}
	else{
		refe.push(userInput)
		clearInput();
		localStorage.setItem('Referencias', JSON.stringify(refe));
		mostrarRefe();
	}
		
};


const clearInput = () => {
	let userInput = (document.getElementById("test").value = "");
}



const mostrarRefe = () => {
	const storedRefe = JSON.parse(localStorage.getItem('Referencias'));	
	
	let text = "";
		storedRefe.sort((a,b) => ("" + a).localeCompare(b, undefined, {numeric:true}));
		let upper = storedRefe.map(e => e.toUpperCase())

		upper.forEach(colocarOrdemAlfa);

		document.getElementById("aparecer").innerHTML = text;

		function colocarOrdemAlfa(item, index) {
  		text += item + "<br>"; }
	

};

