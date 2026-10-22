import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item removed from cart");
  };

  return (
    <div className="flex flex-col sm:flex-row gap-6 border-b border-gray-200 py-6">
      {/* Product Image */}
      <div className="flex justify-center items-center sm:w-40">
        <img
          src={item.image}
          alt={item.title}
          className="h-36 w-36 object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-col flex-1 justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-800 line-clamp-2">
            {item.title}
          </h2>

          <p className="text-gray-500 mt-3 line-clamp-3">
            {item.description}
          </p>
        </div>

        <div className="flex items-center justify-between mt-6">
          <p className="text-2xl font-bold text-green-600">
            ${item.price}
          </p>

          <button
            onClick={removeFromCart}
            className="flex items-center justify-center h-11 w-11 rounded-full bg-red-100 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300"
            aria-label="Remove Item"
          >
            <MdDelete size={22} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;