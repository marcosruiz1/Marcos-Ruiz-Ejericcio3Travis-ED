/* Función comprobarNombre */
function comprobarNombre () {
	let cadena = "Pepe\nJuan\nMarcos";
	let trozos = cadena.split("\n")
	return trozos[2];
}; 



/* Exportación de funciones */
module.exports = {
	comprobarNombre
}
