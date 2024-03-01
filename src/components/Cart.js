import { useContext } from "react";
import { ContextCart } from "../context/Context";
import { FaDollarSign } from "react-icons/fa";

const Cart = ({ product }) => {
  const { deleteCart, cartItem } = useContext(ContextCart);
  return (
    <li className="cart_list">
      <img className="cart_image" src={product.image} />

      <h6 className="name-in-cart">{product.name}</h6>
      <div className="price-in-cart">
        <FaDollarSign />
        {product.price}
      </div>
      <div className="button-quanity">
        <button className="button-cart" onClick={() => deleteCart(product._id)}>
          Remove
        </button>

        <h6 className="quanity-display"> Amount: {product.quanity} </h6>
      </div>
    </li>
  );
};

export default Cart;
