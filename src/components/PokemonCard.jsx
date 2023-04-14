import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { StarFilled, StarOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { StarButton } from "./StarButton";
import { setFavorite } from "../slices/dataSlice";
const PokemonCard = ({ id, title, image, type }) => {
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(false);
  const typesString = type.map((element) => element.type.name).join(", ");
  const clickHandler = () => {
    dispatch(setFavorite({ pokemonId: id }));
    setIsFavorite(true);
    alert(`Se ha agregado a ${title} a favoritos`);
  };
  return (
    <Card
      title={title}
      style={{ width: "330px", margin: "2rem" }}
      cover={<img src={image} alt="Ditto" />}
      extra={<StarButton isFavorite={isFavorite} onClick={clickHandler} />}>
      <Meta description={typesString} />
    </Card>
  );
};
export { PokemonCard };
