const axios = require('axios')

async function obtenerPokemon(id){
    try{
        const response= await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        console.log(`Nombre: ${response.data.name.toUpperCase()}`);
        console.log(`Altura: ${response.data.height}`);
        console.log(`Peso: ${response.data.weight}`);
        console.log('Tipos: ',response.data.types.map(t => t.type.name).join(', '));

    }
    catch(error){
        console.error('Error al obtener el pokemon: ', error.message);

    }
}

obtenerPokemon(64);