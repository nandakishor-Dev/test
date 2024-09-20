import Navbar from "../components/Navbar";
import { useAppDispatch, useAppSelector } from "../Redux/store";
import { CartItem } from "../Redux/types";
import { removeFromCart, resetCart } from "../Redux/cartSlice";
import toast from "react-hot-toast";

export interface CartState {
  items: CartItem[];
}

function Cart() {
  const dispatch = useAppDispatch();

  const cartItems = useAppSelector((state) => state.cart.items);

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const handleRemoveFromCart = (id: number) => {
    dispatch(removeFromCart(id)); // Remove product from cart
  };

  const handleResetCart = () => {
    toast.success("Order placed successfully");
    dispatch(resetCart());
  };
  return (
    <div>
      <Navbar />

      <div>
        {/* banner */}

        <div className="bg-[url('/images/cartbanner.png')] flex justify-center items-center  bg-cover bg-center h-64 ">
          <div className="flex flex-col gap-4  justify-center items-center ">
            <img
              src="/images/logo.png"
              className="cursor-pointer h-8 w-10"
              alt="logo"
            />
            <span className="text-3xl font-bold">Cart</span>
            <span className="font-semibold">Home &gt; Cart</span>
          </div>
        </div>

        {/* cart */}

        <div className="mt-16 flex px-16 gap-12 h-[80vh]">
          <div className=" w-3/5 h-[400px] ">
            <div className="font-semibold flex justify-between bg-[#FAF3EA] p-4">
              <span className="flex-1 text-center "></span>
              <span className="flex-1 text-center">Product</span>
              <span className="flex-1 text-center">Price</span>
              <span className="flex-1 text-center">Quantity</span>
              <span className="flex-1 text-center">Subtotal</span>
              <span className="flex-1 text-center "></span>
            </div>

            {/* Product list */}
            <div className="mt-10 max-h-[300px] overflow-auto">
              {cartItems.length === 0 && (
                <div className="flex justify-center mt-10">
                  No items in the cart.
                </div>
              )}
              {cartItems &&
                cartItems.length > 0 &&
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between  p-2"
                  >
                    <div className="flex-1 text-center p-1 rounded-lg bg-[#FAF3EA]">
                      <img
                        src={item.image}
                        className="h-20 mx-auto bg-cover"
                        alt=""
                      />
                    </div>
                    <div className="flex-1 text-center">{item.title}</div>
                    <div className="flex-1 text-center">Rs. {item.price}</div>
                    <div className="flex-1 text-center">{item.quantity}</div>
                    <div className="flex-1 text-center">
                      Rs. {item.price * item.quantity}
                    </div>
                    <div className="flex-1 text-center flex justify-center  ">
                      <img
                        onClick={() => handleRemoveFromCart(item.id)}
                        src="/images/bin.png "
                        alt=""
                        className="cursor-pointer"
                      />
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* right */}
          <div className=" h-[400px] bg-[#F9F1E7] w-[30%] pt-6    flex justify-center">
            <div className="w-4/6 h-full flex flex-col justify-start gap-14 items-center ">
              <div className="text-3xl font-bold">Cart Totals</div>
              <div className="flex flex-col gap-12">
                <div className="flex gap-10">
                  <div className="font-semibold">Subtotal</div>
                  <span className="opacity-50 ">Rs. {totalPrice}</span>
                </div>
                <div className="flex gap-10">
                  <div className="font-semibold">Total</div>
                  <div className="text-[#B88E2F] text-xl">Rs. {totalPrice}</div>
                </div>
              </div>
              <div>
                <button
                  disabled={cartItems?.length === 0}
                  onClick={handleResetCart}
                  className="border rounded-lg border-black text-md px-12 text-black py-2"
                >
                  Check Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
