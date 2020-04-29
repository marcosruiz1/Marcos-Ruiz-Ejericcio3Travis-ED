/* Función comprobarNombre */
function comprobarNombre () {
	let cadena = "Pepe\nJuan\nMarcos";
	cadena.split("\n")
	return cadena[2];
}; 



/* Exportación de funciones */
module.exports = {
	comprobarNombre
}
