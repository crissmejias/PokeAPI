import { PokemonCard } from "./PokemonCard";
const PokemonList = ({ pokemons }) => {
  return (
    <>
      {pokemons &&
        pokemons.map((pokemon) => (
          <PokemonCard
            title={pokemon.name}
            image={pokemon.sprites.front_shiny}
            key={pokemon.name}
            type={`${pokemon.types[0].type.name} ${
              pokemon.types[1]?.type.name ?? ""
            }`}
          />
        ))}
    </>
  );
};

export { PokemonList };
