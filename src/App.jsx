import logo from "/logo.svg";
import { Button, Col, Row, Space } from "antd";
import { Searcher } from "./components/Searcher";
import { PokemonList } from "./components/PokemonList";
import { getPokemon, getPokemonDetailed } from "./api/getPokemon";
import { useEffect } from "react";
import { setPokemons } from "./actions";
import { useDispatch, useSelector } from "react-redux";
function App() {
  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchPokemon = async () => {
      const pokemonRes = await getPokemon();
      const pokemonDetailed = await Promise.all(
        pokemonRes.results.map((pokemon) => getPokemonDetailed(pokemon))
      );
      dispatch(setPokemons(pokemonDetailed));
    };
    fetchPokemon();
  }, []);
  return (
    <>
      <Space direction="vertical" size="large" style={{ display: "flex" }}>
        <Row>
          <Col span={8} offset={8}>
            <img src={logo} />
          </Col>
        </Row>
        <Row>
          <Col span={8} offset={8}>
            <Searcher />
          </Col>
        </Row>
        <Row wrap={true} gutter={[48, 48]} justify={"center"}>
          <PokemonList pokemons={pokemons} />
        </Row>
      </Space>
    </>
  );
}
export default App;
