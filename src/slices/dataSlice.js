import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemon, getPokemonDetailed } from "../api/getPokemon";
import { setLoading } from "./uiSlice";
export const fetchPokemonWithDetails = createAsyncThunk(
  "data/fetchPokemonWithDetails",
  async (_, { dispatch }) => {
    dispatch(setLoading(true));
    const pokemonRes = await getPokemon();
    const pokemonDetailed = await Promise.all(
      pokemonRes.results.map((pokemon) => getPokemonDetailed(pokemon))
    );
    dispatch(setPokemons(pokemonDetailed));
    dispatch(setLoading(false));
  }
);
const initialState = { pokemons: [], filteredPokemons: [] };
const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.filteredPokemons = action.payload;
      state.pokemons = action.payload;
    },
    setFavorite: (state, action) => {
      const currentPokemonIndex = state.pokemons.findIndex((pokemon) => {
        return pokemon.id === action.payload.pokemonId;
      });
      if (currentPokemonIndex >= 0) {
        const isFavorite = state.pokemons[currentPokemonIndex].favorite;
        state.pokemons[currentPokemonIndex].favorite = !isFavorite;
      }
    },
    setFilter: (state, action) => {
      if (action.payload.length > 1) {
        const filteredPokemon = state.pokemons.filter(
          (pokemon) => pokemon.name === action.payload
        );
        state.filteredPokemons = filteredPokemon;
      } else {
        state.filteredPokemons = state.pokemons;
      }
    },
  },
});

export const { setFavorite, setPokemons, setFilter } = dataSlice.actions;
export default dataSlice.reducer;
console.log(dataSlice);
