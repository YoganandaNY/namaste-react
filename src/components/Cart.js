import { useDispatch, useSelector } from "react-redux";
import ItemLists from "./ItemLists";
import { clearCart } from "../utils/cartSlice";
import { LOGO_URL } from "../utils/constant";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log("cartItems", cartItems);
  //console.log(cartItems[0].card.info.name && cartItems[0].card.info.price, imageId);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-3 p-3 ">
      <h1 className="text-2xl font-bold">Cart Items</h1>
      <button
        className=" p-1 my-2 border border-b-2 bg-green-200 rounded-lg"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      {cartItems?.length === 0 && (
        <h1> Cart is empty. Add Items to the Cart!</h1>
      )}
      <div className="w-1/4 m-auto border border-b-2 ">
        {cartItems?.map((item) => (
          <div>
            <div className="w-1/4 p-2">
              <img alt="name" src={LOGO_URL + item.card.info.imageId} />
            </div>
            <div className="flex justify-between m-3 text-sm">
              <span className="">{item.card.info.name}</span>
              <span className="border border-b-3 px-2 mx-2 py-1">
                <button className="px-1 ">-</button>
                <span className="px-1">0</span>
                <button className="px-1">+</button>
              </span>
              <span>₹{item.card.info.price / 100}</span>
            </div>
            <div className=" border-b-2"></div>
          </div>
        ))}

        {/* <ItemLists items={cartItems} /> */}
      </div>
    </div>
  );
};

export default Cart;
