// src/components/Navbar.tsx
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../Redux/store";

function Navbar() {
  const navigate = useNavigate();
  const cartItems = useAppSelector((state) => state.cart.items);

  return (
    <nav className="bg-primary  m-0 lg:px-12 px-4 ">
      <div className="container  lg:py-6 py-4 mx-auto  flex items-center justify-between">
        <div className="text-2xl font-bold flex items-center gap-2">
          <img
            onClick={() => navigate("/")}
            src="/images/logo.png"
            className="cursor-pointer"
            alt="logo"
          />
          <span
            className="font-bold text-3xl cursor-pointer"
            onClick={() => navigate("/")}
          >
            Furniro
          </span>
        </div>
        <div className="flex items-center gap-24 ">
          <div className="lg:flex flex-grow items-center gap-8 justify-end mr-6 font-poppins">
            <a
              onClick={() => navigate("/")}
              href="#"
              className="text-black px-4 py-2 text-navLg font-poppins"
            >
              Home
            </a>
            <a
              href="#"
              className="text-black px-4 py-2 text-navLg font-poppins"
            >
              Shop
            </a>

            <a
              href="#"
              className="text-black px-4 py-2 text-navLg font-poppins"
            >
              About
            </a>
            <a
              href="#"
              className="text-black px-4 py-2 text-navLg font-poppins"
            >
              Contact
            </a>
          </div>

          {/*icons section */}

          <div className="flex gap-6">
            <img alt="" className="cursor-pointer" src="/images/user.png" />
            <img
              alt=""
              className="cursor-pointer"
              src="/images/searchicon.png"
            />
            <img
              alt=""
              className="cursor-pointer"
              src="/images/hearticon.png"
            />
            <div
              className="relative cursor-pointer"
              onClick={() => navigate("/cart")}
            >
              <img src="/images/carticon.png" alt="Cart" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                  {cartItems.length}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
