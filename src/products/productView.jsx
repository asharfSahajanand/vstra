import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import productsData from "../products/products.json";

export default function ProductDetails() {
  const { id } = useParams();
  const productId = Number(id);
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const products = productsData; // agar JSON root array hai
  // agar { products: [...] } format hai toh: const products = productsData.products;

  const product = products.find((item) => item.id === productId) || products[0];

  // ✅ Dynamic images - sirf jo exist karti hain unhe lo
  const productImages = [
    product.img1,
    product.img2,
    product.img3,
    product.img4,
  ].filter(Boolean); // undefined/null images remove ho jaengi

  const goPrev = () =>
    setCurrentImageIndex((i) =>
      i === 0 ? productImages.length - 1 : i - 1
    );

  const goNext = () =>
    setCurrentImageIndex((i) =>
      i === productImages.length - 1 ? 0 : i + 1
    );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="container mx-auto px-4 sm:px-6 md:px-12 py-12 md:py-16">

        {/* PRODUCT SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">

          {/* LEFT IMAGE */}
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <img
              src={productImages[currentImageIndex]}
              alt={product.title}  // ✅ title
              className="w-full h-auto object-cover"
            />

            {/* Arrows sirf tab dikhao jab 1 se zyada images hon */}
            {productImages.length > 1 && (
              <>
                <button
                  onClick={goPrev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-200 text-gray-800 px-3 py-2 rounded-full hover:bg-gray-300 transition"
                >
                  ‹
                </button>
                <button
                  onClick={goNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-200 text-gray-800 px-3 py-2 rounded-full hover:bg-gray-300 transition"
                >
                  ›
                </button>
              </>
            )}

            {/* Image dots indicator */}
            {productImages.length > 1 && (
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                {productImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`w-2 h-2 rounded-full transition ${
                      idx === currentImageIndex ? "bg-white" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">

            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              {product.title}  {/* ✅ title */}
            </h1>

            <p className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
              Rs. {product.price}  {/* ✅ price */}
            </p>

            {/* ✅ Dynamic description */}
            <div className="text-gray-600 leading-relaxed text-sm md:text-base">
              <p className="text-gray-600 leading-relaxed mb-8">
                {product.description}
              </p>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-3 mt-6">
              <button
                onClick={() => setQuantity((q) => (q > 1 ? q - 1 : 1))}
                className="w-10 h-10 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center hover:bg-gray-300 transition"
              >
                −
              </button>

              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => {
                  const val = parseInt(e.target.value, 10);
                  if (!isNaN(val) && val >= 1) setQuantity(val);
                }}
                className="w-14 h-10 text-center border border-gray-300 rounded-lg"
              />

              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="w-10 h-10 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center hover:bg-gray-300 transition"
              >
                +
              </button>
            </div>

            <button
             onClick={() =>
  navigate("/cart", {
    state: {
      product,
      quantity,
    },
  })
}

              className="mt-6 w-full sm:w-auto bg-indigo-600 text-white py-3 px-8 rounded-full font-semibold hover:bg-indigo-700 transition shadow-md"
            >
              Add to Cart
            </button>

            <div className="mt-10 text-gray-700">
              <h3 className="font-bold mb-3 text-lg">
                Product Information:
              </h3>

              <ul className="list-disc list-inside space-y-1 text-sm md:text-base">
                <li>
                  <span className="font-medium">Category:</span> {product.category}  {/* ✅ dynamic */}
                </li>
                <li>
                  <span className="font-medium">Price:</span> Rs. {product.price}  {/* ✅ dynamic */}
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* ALL PRODUCTS SECTION */}
        <section className="mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            All Products
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((item) => (
              <Link to={`/product/${item.id}`} key={item.id}>
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
                  <img
                    src={item.img1}  // ✅ img1
                    alt={item.title}  // ✅ title
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6 text-center">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                      {item.title}  {/* ✅ title */}
                    </h3>
                    <span className="block text-xl font-bold text-gray-900 mb-4">
                      Rs. {item.price}  {/* ✅ price */}
                    </span>
                   <Link to={`/product/${item.id}`}>
                  <button className="mt-4 w-full bg-indigo-600 text-white py-3 rounded-full font-semibold hover:bg-indigo-700 transition">
                    View
                  </button>
                </Link>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}