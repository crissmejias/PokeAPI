import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { StarOutlined } from "@ant-design/icons";
const PokemonCard = ({ title, image, type }) => {
  return (
    <Card
      title={title}
      style={{ width: "330px", margin: "2rem" }}
      cover={<img src={image} alt="Ditto" />}
      extra={<StarOutlined />}>
      <Meta description={type} />
    </Card>
  );
};
export { PokemonCard };
