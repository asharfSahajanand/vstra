import Navbar from "../Navbar.jsx";
import Footer from "../Footer.jsx";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { products } from "../productData";

export default function ProductDetails() {
  const { id } = useParams();
  const productId = Number(id);
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const product =
    products.find((item) => item.id === productId) || products[0];

  const productImages = [
    product.image,
    "/img/1764779761_g_1_Screenshot_2025-12-03_at_10.04.21___PM.png",
    "/img/1764779761_g_2_Screenshot_2025-12-03_at_10.04.11___PM.png",
    "/img/1764779761_thumb_Screenshot_2025-12-03_at_10.03.33___PM.png",
  ];

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
              alt={product.name}
              className="w-full h-auto object-cover"
            />

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
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">

            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              {product.name}
            </h1>

            <p className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
              {product.price}
            </p>

            <div className="text-gray-600 leading-relaxed text-sm md:text-base">

            <p class="text-gray-600 leading-relaxed mb-8">🔥 Stylish Winter Jacket &amp; Pant Combo – Premium Warmth, Modern Fit, 




Unmatched Style
When style meets comfort, winter fashion becomes effortless — and this Stylish Jacket with Pant Combo is exactly that. Designed for those who want a polished, modern, and high-impact look during the cold months, this combo delivers premium quality without compromising on everyday wearability. Whether you’re dressing for office, outings, travel, winter functions, or smart-casual occasions, this pair elevates your look instantly with its clean tailoring, trendy Korean-inspired finish, and ultra-comfortable winter-ready fabric.
The jacket features a streamlined silhouette, crafted from soft yet structured winter material that keeps you warm while maintaining a sharp fit. Its versatile design allows you to layer it with T-shirts, high-necks, inner warmers, or formal shirts. The fit is engineered to enhance shoulder structure, contour the torso, and create a confident appearance — making it suitable for all body types. Subtle design touches like premium buttons, zip detailing, and minimalistic stitching give it a luxury finish.
The matching pant completes the look with a sleek straight-fit or tapered design (depending on style variation), offering full flexibility and easy movement. The fabric is warm yet breathable, making it ideal for long wear during winter days and evenings. It drapes well, holds its shape, and maintains a neat, polished look without wrinkles or sagging. You don’t need to worry about styling — the combo is pre-matched to create a cohesive, well-coordinated outfit that works in multiple settings.
This is a perfect option for college students, office goers, travellers, party wear needs, or anyone who wants a budget-friendly yet premium-looking winter outfit. The combo ensures you look effortlessly dressed up with minimal effort. Pair it with sneakers for a casual urban vibe, or choose boots/loafers for a dressed-up winter look.
Durable, affordable, and stylish — this winter combo proves that practicality and fashion can go hand in hand.

✔️ KEY POINTS (Inside Description)
1. Premium Winter Fabric
Made from soft, warm, and breathable winter material that provides excellent insulation without feeling heavy.
2. Perfectly Coordinated Combo
The jacket and pant are designed to complement each other, creating a clean and balanced overall look.
3. Korean-Inspired Modern Fit
Sharp shoulders, structured design, and minimalistic styling give a luxury, high-fashion appearance.
4. Comfortable All-Day Wear
Flexible, stretch-friendly, and skin-friendly materials suitable for long daily use.
5. Multi-Occasion Ready
Ideal for winter outings, office wear, casual looks, travel, and special events.
6. Durable &amp; Easy to Maintain
Holds its shape, resists wrinkles, and offers long-lasting wear.</p>


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
              onClick={() => navigate("/cart")}
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
                  <span className="font-medium">Category:</span> Korean_Winter_Wear
                </li>
                <li>
                  <span className="font-medium">Price:</span> {product.price}
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
                    src={item.image}
                    alt={item.name}
                    className="w-full h-56 object-cover"
                  />

                  <div className="p-6 text-center">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                      {item.name}
                    </h3>

                    <span className="block text-xl font-bold text-gray-900 mb-4">
                      {item.price}
                    </span>

                    <button className="inline-block w-full bg-indigo-600 text-white py-2 px-4 rounded-full font-medium hover:bg-indigo-700 transition">
                      View
                    </button>
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
