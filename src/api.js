export const searchPokemon = async (pokemon) => {
    try {
        let url = `https://pokeapi.com/api/v2/pokemon/${pokemon}`
        const response = await fetch(url)
        return await response.json()

    } catch (error) {
        console.log("erros:", error)
    }
}
export const getPokemons = async (limit = 50, offset = 0) => {
    try {
        let url = `https://pokeapi.com/api/v2/pokemon?limit=${limit}&offset=${offset}`
        const response = await fetch(url)
        return await response.json()

    } catch (error) {
        console.log("erros:", error)
    }
}
