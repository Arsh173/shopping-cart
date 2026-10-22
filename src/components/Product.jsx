import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";


const Product = ({post}) => {
    const {cart} = useSelector((state) => state);

    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(add(post));
        toast.success("Item added to Cart");
    }

    const removeFromCart = () => {
        dispatch(remove(post.id));
        toast.success("Item removed from Cart");
    }

    return (
  <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-5 flex flex-col">
    <div>
      <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">
        {post.title}
      </h2>

      <p className="text-sm text-gray-500 mt-2 line-clamp-3">
        {post.description}
      </p>
    </div>

   <div className="flex justify-center items-center h-48 my-4">
      <img
        src={post.image}
        alt={post.title}
        className="max-h-40 object-contain"
      />
    </div>

    <div className="flex items-center justify-between mt-auto">
      <p className="text-xl font-bold text-green-600">
        ${post.price}
      </p>

      {cart.some((p) => p.id === post.id) ? (
        <button
          onClick={removeFromCart}
          className="border border-red-500 text-red-500 px-4 py-2 rounded-full font-medium hover:bg-red-500 hover:text-white transition"
        >
          Remove
        </button>
      ) : (
        <button
          onClick={addToCart}
          className="border border-green-600 text-green-600 px-4 py-2 rounded-full font-medium hover:bg-green-600 hover:text-white transition"
        >
          Add to Cart
        </button>
      )}
    </div>
  </div>
);
};

export default Product;