import { SET_POKEMONS, SET_LOADING, SET_FAVORITE } from "./types";
import { getPokemonDetailed } from "../api/getPokemon";
export const setPokemons = (payload) => ({
  type: SET_POKEMONS,
  payload,
});
export const getPokemonsWithDetails =
  (pokemons = []) =>
  async (dispatch) => {
    const pokemonDetailed = await Promise.all(
      pokemons.results.map((pokemon) => getPokemonDetailed(pokemon))
    );
    dispatch(setPokemons(pokemonDetailed));
  };
export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload,
});
export const setFavorites = (payload) => ({
  type: SET_FAVORITE,
  payload,
});
