var http = require("http");

var hola = function(solicitud,respuesta){
	console.log("Hola Mundo");
    console.log("       *");
	console.log("      **");
    console.log("     ****");
}

var servidor = http.createServer(hola);

servidor.listen(8080)