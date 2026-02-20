import { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";



export default function Cart() {

  const location = useLocation();
  const navigate = useNavigate();

  const cartItem = location.state?.product;
  const initialQuantity = location.state?.quantity || 1;

  const [quantity, setQuantity] = useState(initialQuantity);

 
  if (!cartItem) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-semibold">Your cart is empty.</h2>
      </div>
    );
  }

  const price = Number(cartItem.price);
  const subtotal = price * quantity;
  const discount = 0;
  const total = subtotal - discount;

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <main>
        <section className="container mx-auto px-4 sm:px-6 md:px-12 py-12 md:py-16">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
            Your Cart
          </h1>

          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8">

            {/* CART ITEM */}
            <div className="flex flex-col md:flex-row items-center justify-between pb-6 border-b border-gray-200">

              <div className="flex items-center space-x-4">
                <img
                  src={cartItem.img1}
                  alt={cartItem.title}
                  className="w-20 h-20 rounded-md object-cover"
                />
                <div>
                  <h2 className="text-lg md:text-xl font-semibold text-gray-800">
                    Premium Winter Jacket Model 1
                  </h2>
                  <p className="text-gray-600 text-sm">
                    Product ID: #095
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-6 mt-4 md:mt-0">

                {/* PRICE */}
                <div className="text-lg font-bold text-gray-900">
                  Rs. {price.toFixed(2)}
                </div>

                {/* QUANTITY CONTROLS */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                    className="bg-gray-200 text-gray-700 py-1 px-3 rounded-full hover:bg-gray-300 transition"
                  >
                    -
                  </button>

                  <span className="text-lg font-semibold">
                    {quantity}
                  </span>

                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="bg-gray-200 text-gray-700 py-1 px-3 rounded-full hover:bg-gray-300 transition"
                  >
                    +
                  </button>
                </div>

              </div>
            </div>

            {/* CART TOTALS */}
            <div className="mt-6">

              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600 font-medium">Subtotal</span>
                <span className="font-semibold text-gray-800">
                  Rs. {subtotal.toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600 font-medium">Discount</span>
                <span className="font-semibold text-red-500">
                  Rs. -{discount.toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between items-center border-t border-gray-200 pt-4 mt-4">
                <span className="text-xl font-bold text-gray-800">Total</span>
                <span className="text-xl font-bold text-gray-900">
                  Rs. {total.toFixed(2)}
                </span>
              </div>

            </div>
          </div>

          {/* CHECKOUT BUTTON */}
          <div className="flex justify-center">
          <button
 onClick={() =>
  navigate("/checkout", {
    state: {
    cartItem,
      quantity,
      price
    },
  })
}
  className="bg-indigo-600 text-white py-3 px-8 rounded-full font-semibold hover:bg-indigo-700 transition shadow-md"
>
  Proceed to Checkout
</button>
          </div>

        </section>
      </main>

      <Footer />
    </div>
  );
}
