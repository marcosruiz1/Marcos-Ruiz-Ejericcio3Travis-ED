// Ejemplo de test utilizando el módulo assert disponible en NodeJS

// Cargar el módulo assert
var assert = require('assert');

// Cargar el módulo con las funciones para testear
var func = require('../funciones.js');

// Test
it('comprobar función comprobarNombre', function() {
	assert.equal(func.comprobarNombre("Marcos\nLuis\nPedro"),"Marcos");
	assert.equal(func.comprobarNombre("Juan\nLuis\Marcos"),"Marcos");
	assert.equal(func.comprobarNombre("Marcos\Marcos\Sara"),"Marcos");
});

