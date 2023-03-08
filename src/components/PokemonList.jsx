import {PokemonCard} from './PokemonCard';
const PokemonList = ({pokemons}) => {
    return(<div style={{display:"grid", gridTemplateColumns: "repeat(4, 1fr)", gap:"2rem", placeItems: "center"}}>
        {pokemons.results?.map(
            pokemon => 
            <PokemonCard title={pokemon.name} key={pokemon.name}/>
        )}
    </div>)
}

export {PokemonList}