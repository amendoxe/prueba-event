const encabezado = document.querySelector(".title-text");
const parrafo = document.querySelector(".paragraph-text");
document.querySelector(".button-container").addEventListener("click", function (event) {
	// alert(`you clicked button number ${event.target.innerText}`);
	console.log(event.target);
	if (event.target.type == "submit") {
		encabezado.innerText = "A button has been pressed";
		parrafo.innerText = `El contenido del botón es: ${event.target.innerText}`;
	} else if (event.target.tagName == "P") {
		encabezado.innerText = "That is no button";
		parrafo.innerText = `El contenido del botón (or is it?) es: ${event.target.innerText}`;
	}
});
//Modifying multiple elements at once
const elementsToChange = document.querySelectorAll(".js-target");
for (let i = 0; i < elementsToChange.length; i++) {
	// const currentElement= elementsToChange[i]
	elementsToChange[i].innerText = "Cambiado por JavaScript";
}
