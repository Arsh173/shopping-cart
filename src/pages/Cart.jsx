import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(
      cart.reduce((acc, curr) => acc + curr.price, 0)
    );
  }, [cart]);

  return (
    <div className="max-w-7xl mx-auto min-h-[80vh] p-6">
      {cart.length > 0 ? (
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Cart Items */}
          <div className="flex-1">
            {cart.map((item, index) => (
              <CartItem
                key={item.id}
                item={item}
                itemIndex={index}
              />
            ))}
          </div>

          {/* Summary */}
          <div className="lg:w-80 bg-white rounded-xl shadow-md p-6 h-fit sticky top-24">
            <p className="text-green-600 font-semibold uppercase">
              Your Cart
            </p>

            <h2 className="text-3xl font-bold text-slate-800 mt-1">
              Summary
            </h2>

            <p className="mt-6 text-lg">
              Total Items:
              <span className="font-bold ml-2">
                {cart.length}
              </span>
            </p>

            <p className="mt-3 text-xl font-bold text-green-600">
              Total: ${totalAmount.toFixed(2)}
            </p>

            <button className="w-full mt-8 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition">
              Checkout Now
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center min-h-[80vh]">
          <h1 className="text-4xl font-bold text-slate-700">
            Your Cart is Empty
          </h1>

          <Link to="/">
            <button className="mt-8 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition">
              Continue Shopping
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;