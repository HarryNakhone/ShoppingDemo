import { FaDollarSign } from "react-icons/fa";
import { useContext } from "react";
import { ContextCart } from "../context/Context";
const Producte = ({ product }) => {
  const { addToCart } = useContext(ContextCart);
  return (
    <div className="product_container">
      <div>
        <img className="product_image" src={product.image} alt={product.name} />
        <div className="product_name">{product.name}</div>
        <div className="product_price">
          <FaDollarSign />
          <h5>{product.price}`</h5>
        </div>
        <div className="button_container">
          <button className="button_add" onClick={() => addToCart(product)}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Producte;
