const encabezado = document.querySelector(".title-text");
const parrafo = document.querySelector(".paragraph-text");
document.querySelector(".button-container").addEventListener("click", function (event) {
	// alert(`you clicked button number ${event.target.innerText}`);
	encabezado.innerText = "A button has been pressed";
	parrafo.innerText = `El contenido del botón es: ${event.target.innerText}`;
	console.log(event.target);
});
