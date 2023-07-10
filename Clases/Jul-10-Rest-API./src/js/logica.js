





//  REST APIS
// API = Application Protocol Interface


/// URL direccion servidor    path - rutas (recurso)
//  https://miservidor.com/   
//  


//Ejemplo si la URL fuera de un servidor
//  https://miservidor.com/camisetas
//  https://miservidor.com/pantalones            // obtiene los recursos de todos los pantalones 
//  https://miservidor.com/camisetas/hombre     // obtiene los recursos de pantalones de hombre


//Ejemplo si la URL fuera de una pagina web 
//  https://miweb.com/menu
//  https://miweb.com/login
//  https://miweb.com/juego1-mortal
//  https://miweb.com/juego2-crash


//LLAMADOS AL SERVIDOR

//REST Metodos
//
// GET       // Optener recursos
// POST      // Enviar datos a la aplicacion "guarda"
// DELETE    // Elimina datos del servidor
// PUT       // poner - Update Actualiza un recurso   // El put cambia todo el objeto
// PATCH     // alterar - Update Actualiza un recurso  // El cambia solo partes del objeto
//


//  https://miservidor.com/camisetas
//GET   https://miservidor.com/camisetas      //el servidor devuelve lista camisas
//GET   https://miservidor.com/pantalones    //el servidor devuelve lista pantalones

//GET   https://miservidor.com/camisetas ?{15} // Me trae solo la camisa numero 15 (query params)
//GET   https://miservidor.com/camisetas/15    // Me trae solo la camisa numero 15 (con la ruta)

//POST  body:{ talla: xl, color: rosa }   https://miservidor.com/camisetas    //Servidor prosesa los datos y los "guarda"

//DELETE   https://miservidor.com/camisetas   //Elimina todas las camisas

//DELETE   https://miservidor.com/camisetas?{507} //Eliminar la camisa numero 507

//PUT/PATCH  body:{color: blue, talla: s} https://miservidor.com/camisetas/26   //Actualiza en el servidor la camisa 26


//GET https://pokeapi.co/api/v2/ pokemon/gengar
//GET https://pokeapi.co/api/v2/ pokedex/3/


