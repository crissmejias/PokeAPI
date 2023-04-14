import logo from "/logo.svg";
import { Col, Row, Space, Spin } from "antd";
import { Searcher } from "./components/Searcher";
import { PokemonList } from "./components/PokemonList";
import { getPokemon } from "./api/getPokemon";
import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchPokemonWithDetails } from "./slices/dataSlice";

function App() {
  const pokemons = useSelector(
    (state) => state.data.filteredPokemons,
    shallowEqual
  );
  const loading = useSelector((state) => state.ui.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPokemonWithDetails());
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
          {loading ? (
            <Spin
              size="large"
              tip="Loading..."
              style={{ marginTop: "4rem", color: "purple" }}
            />
          ) : (
            <PokemonList pokemons={pokemons} />
          )}
        </Row>
      </Space>
    </>
  );
}
export default App;
