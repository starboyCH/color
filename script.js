let box= document.querySelector(".box");
let changeColor= ()=>{
	let choice= parseInt(prompt("Ingrese el color que desea para el bloque:     1. Rojo     2. Azul     3. Amarillo     4. Verde"));
	switch(choice){
		case 1:
			box.style.backgroundColor= "red";
			break;
		case 2:
			box.style.backgroundColor= "blue";
			break;
		case 3:
			box.style.backgroundColor= "yellow";
			break;
		case 4:
			box.style.backgroundColor= "green";
			break;
		default:
			alert("Ingrese una opción válida");
	}
}
changeColor();
