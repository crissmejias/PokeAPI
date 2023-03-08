
import logo from '/logo.svg'
import { Button, Col, Row, Space } from 'antd'
import { Searcher } from './components/Searcher'
import { PokemonList } from './components/PokemonList'
import { getPokemon } from './api/getPokemon'
import { useEffect} from 'react'
import { connect } from 'react-redux'
import { setPokemons as setPokemonsActions } from './actions'
function App({pokemons, setPokemons}) {

  useEffect(()=>{
   getPokemon().then(pokemonRes =>
    setPokemons(pokemonRes)
    )
  },[])
  return (
  <>
  <Space direction='vertical' size="large" style={{ display: 'flex'}}>
  <Row>
    <Col span={8} offset={8}>
      <img src={logo} />
    </Col>
  </Row>
  <Row>
  <Col span={8} offset={8}>
    <Searcher/>  
  </Col>
  </Row>
  <Row>
    <Col span={8} offset={5}>
    <PokemonList pokemons={pokemons}/>
    </Col>
  </Row>
  </Space>
  </>
    )
}
const mapStateToProps = (state) => ({
  pokemons: state.pokemons,
});

const mapDispatchToProps = (dispatch) => ({
  setPokemons: (value) => dispatch(setPokemonsActions(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);