import { PokemonCard } from "./PokemonCard";
const PokemonList = ({ pokemons }) => {
  return (
    <>
      {pokemons &&
        pokemons.map((pokemon) => (
          <PokemonCard
            id={pokemon.id}
            title={pokemon.name}
            image={pokemon.sprites?.front_shiny ?? pokemon.image}
            key={pokemon.name}
            type={pokemon.types}
          />
        ))}
    </>
  );
};

export { PokemonList };
