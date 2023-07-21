
const urlApiComidas = "https://www.themealdb.com/api/json/v1/1/search.php?f="

export async function getComidas(letra) {
    // intento obtener las comidas del api y..
    try {
        const promesaApiComidas = await fetch(urlApiComidas + letra)
        const datos = await promesaApiComidas.json();
        return datos;
    }
    // si algo sale mal ejecuta el catch
    catch (error) {
        console.error("Error al optener comidas:", error);
    }
}