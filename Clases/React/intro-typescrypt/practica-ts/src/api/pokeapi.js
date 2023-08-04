





const urlPokeapi = "https://pokeapi.co/api/v2/";

//asyncrono = puede correr en paralelo
export async function getBayas() {
    // await me permite esperar funciones de fetch

    const llamado = await fetch(urlPokeapi + "berry/1/")
    const data = await llamado.json();

    return data;
}










