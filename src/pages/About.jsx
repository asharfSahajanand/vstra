import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { Link } from "react-router-dom";
import {
  ClockIcon,
  MapPinIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-100">
      <Navbar />

      <main className="flex-1">
        <section className="container mx-auto px-4 sm:px-6 md:px-12 py-16 md:py-24">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-12">

            <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
              About Us
            </h1>

            {/* OUR Story */}
            <section className="max-w-4xl mx-auto px-6 py-20 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>

              <p className="text-gray-600 leading-relaxed text-lg">
                The Artisan's Shop was founded with a simple mission: to connect people with the stories behind the products they buy. We believe in the power of handmade goods, crafted with passion and purpose. Our journey began in a small workshop, where we saw the beauty and unique character of handcrafted items and felt a desire to share them with the world.
              </p>
            </section>
            {/* OUR MISSION */}
            <section className="max-w-4xl mx-auto px-6 py-20 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>

              <p className="text-gray-600 leading-relaxed text-lg">
                We are dedicated to supporting independent artisans and preserving traditional crafts.
                Our mission is to curate a collection of unique, high-quality products that are as
                meaningful as they are beautiful. By purchasing from us, you're not just buying an item;
                you're supporting a community of talented creators and helping to keep their craft alive.
              </p>
            </section>
            {/* OUR VALUES */}
            <section className="max-w-6xl mx-auto px-6 py-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-14">
                Our Values
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                {/* VALUE 1 */}
                <div className="flex flex-col items-center">
                  {/* <div className="w-16 h-16 flex items-center justify-center rounded-full border-4 border-indigo-500 text-indigo-600 mb-6">
              ⏰
            </div> */}
                  <ClockIcon className="w-16 h-16 text-indigo-600 mb-6" strokeWidth={1.5} />
                  <h3 className="text-xl font-semibold mb-3">Quality</h3>

                  <p className="text-gray-600 max-w-xs">
                    We source only the best materials and work with artisans who share
                    our commitment to craftsmanship.
                  </p>
                </div>

                {/* VALUE 2 */}
                <div className="flex flex-col items-center">
                  {/* <div className="w-16 h-16 flex items-center justify-center rounded-full border-4 border-indigo-500 text-indigo-600 mb-6">
              📍
            </div> */}
                  <MapPinIcon className="w-16 h-16 text-indigo-600 mb-6" strokeWidth={1.5} />
                  <h3 className="text-xl font-semibold mb-3">Community</h3>

                  <p className="text-gray-600 max-w-xs">
                    We are proud to support local artisans and foster a community
                    of creators and conscious consumers.
                  </p>
                </div>

                {/* VALUE 3 */}
                <div className="flex flex-col items-center">
                  {/* <div className="w-16 h-16 flex items-center justify-center rounded-full border-4 border-indigo-500 text-indigo-600 mb-6">
              🌍
            </div> */}
                  <GlobeAltIcon className="w-16 h-16 text-indigo-600 mb-6" strokeWidth={1.5} />
                  <h3 className="text-xl font-semibold mb-3">Authenticity</h3>

                  <p className="text-gray-600 max-w-xs">
                    Every item is a unique work of art, with a story and a human touch
                    that mass-produced goods lack.
                  </p>
                </div>

              </div>
            </section>


            {/* SHOP SECTION */}
            <section className="bg-white py-20 text-center ">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Shop Our Collection
              </h2>

              <p className="text-gray-600 text-lg mb-10">
                Explore our curated selection of beautiful, handmade goods.
              </p>
              <Link
                to="/"
                className="bg-indigo-600 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-indigo-700 transition">
                Shop Now
              </Link>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
