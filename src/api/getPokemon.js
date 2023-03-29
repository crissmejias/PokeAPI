import axios from "axios";
export const getPokemon = async () => {
  try {
    const { data } = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=151"
    );
    return data;
  } catch (error) {
    console.error(error.message);
  }
};
export const getPokemonDetailed = async (pokemon) => {
  try {
    const { data } = await axios.get(pokemon.url);
    return data;
  } catch (err) {
    console.log(err);
  }
};
