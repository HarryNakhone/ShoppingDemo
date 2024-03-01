import Producte from "./Producte";
import products from "../data";
import "../App.css";
import { useContext } from "react";
import { ContextCart } from "../context/Context";
const Home = () => {
  const { Queries } = useContext(ContextCart);
  const filteredItem = products.filter((item) =>
    item.name.toLowerCase().includes(Queries.toLowerCase())
  );

  return (
    <div className="parent">
      {filteredItem.length > 0
        ? filteredItem.map((product) => (
            <Producte key={product._id} product={product} />
          ))
        : products.map((product) => (
            <Producte key={product._id} product={product} />
          ))}
    </div>
  );
};

export default Home;
