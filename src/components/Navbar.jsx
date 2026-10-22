import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { cart } = useSelector((state) => state);

  return (
    <header className="bg-slate-900 shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">
        <NavLink to="/">
          <img
            src="/logo.png"
            alt="Shopping Cart Logo"
            className="h-12 w-auto"
          />
        </NavLink>

        <div className="flex items-center gap-8 text-white font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition-colors duration-300 hover:text-green-400 ${
                isActive ? "text-green-400" : ""
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `relative transition-colors duration-300 hover:text-green-400 ${
                isActive ? "text-green-400" : ""
              }`
            }
          >
            <FaShoppingCart className="text-2xl" />

            {cart.length > 0 && (
              <span className="absolute -top-2 -right-3 flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-xs font-semibold text-white">
                {cart.length}
              </span>
            )}
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;