import {Card} from 'antd';
import Meta from 'antd/es/card/Meta';
import image from "/132.png"
import { StarOutlined } from '@ant-design/icons';
const PokemonCard = (props) => {
   return <Card title={props.title} style={{width:"200px"}} cover={<img src={image} alt="Ditto"/>} extra={<StarOutlined/>}>
    <Meta description="fire, magic"/>
    
   </Card>
}
export {PokemonCard}