import { StarFilled, StarOutlined } from "@ant-design/icons";
import { Button } from "antd";
const StarButton = ({ onClick, isFavorite }) => {
  const Icon = isFavorite ? StarFilled : StarOutlined;
  return (
    <Button icon={<Icon style={{ color: "#ebf205" }} />} onClick={onClick} />
  );
};
export { StarButton };
