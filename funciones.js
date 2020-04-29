/* Función comprobarNombre */
function comprobarNombre () {
	let cadena = "Pepe\nJuan\Marcos\n";
	cadena.split("\n")
	return cadena[2];
}; 



/* Exportación de funciones */
module.exports = {
	comprobarNombre
}
