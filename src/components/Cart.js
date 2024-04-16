import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="mx-[calc(10%+30px)] w-9/12 items-center text-center font-Grote font-bold">
      {cartItems.length === 0 ? (
        <h1 className="p-4 mr-5 font-bold text-4xl">
          cart is empty. Add items
        </h1>
      ) : (
        <>
          <h1 className="p-4 mr-5 font-bold text-4xl">cart</h1>
          <button
            onClick={handleClearCart}
            className="hover:bg-orange-700 hover:text-white text-black border-orange-700 border-2 w-56 h-10  rounded-lg"
          >
            clear cart
          </button>
          <ItemList items={cartItems} />
        </>
      )}
    </div>
  );
};

export default Cart;
