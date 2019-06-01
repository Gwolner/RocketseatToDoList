var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("body input");
var buttonElemnt = document.querySelector("body button");




var nomes = ["Escovar os dentes", "Fazer exercícios", "Ler um bom livro!"]; //Atividades predefinidas

function listarAtividades() {
	
	listElement.innerHTML = "";
	
	for(nome of nomes){ //Inserção automática das atividades predefinidas
		var item  = document.createElement("li");
		var texto = document.createTextNode(nome);
		
		item.appendChild(texto);
		listElement.appendChild(item);
	}
}

listarAtividades();




// function addAtividade(){ //Função que adiciona novas atividades
	// var item = document.createElement("li");
	// var escrito = document.getElementsByTagName("input")[0];
	// var texto = document.createTextNode(escrito.value);
	// item.appendChild(texto);
	// var container = document.querySelector("ul");
	// container.appendChild(item);
	// escrito.value = "";
// }

function addAtividade(){
	var atividade = inputElement.value;
	nomes.push(atividade);
	inputElement.value="";
	listarAtividades();

}

buttonElemnt.onclick = addAtividade;


