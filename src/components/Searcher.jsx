import Input from "antd/es/input/Input";
import { useDispatch } from "react-redux";
import { setFilter } from "../slices/dataSlice";
import { setLoading } from "../slices/uiSlice";
const Searcher = () => {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    dispatch(setFilter(e));
  };

  return <Input.Search placeholder="Busca un Pokemón" onSearch={handleClick} />;
};
export { Searcher };
