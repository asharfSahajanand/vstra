import { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import AdUnit from "../components/Ads/gamAds.jsx";

export default function Checkout() {
  const navigate = useNavigate();
 const location = useLocation();;

  const cartItem = location.state?.cartItem;
  const initialQuantity = location.state?.quantity || 1;

  const [quantity, setQuantity] = useState(initialQuantity);
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    fullName: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
    phone: "",
    email: "",
  });

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
  const shipping = 50; // flat ₹50 shipping

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const nextStep = (e) => {
    e.preventDefault();

    if (step < 9) {
      setStep(step + 1);
    } else {
      navigate("/confirm/thankyou");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
       <AdUnit type="d4" />
      <Navbar />

      <main>
        <section className="container mx-auto px-4 sm:px-6 md:px-12 py-12 md:py-16 space-y-10">

          {/* ===== ORDER SUMMARY ===== */}
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Your Order
            </h2>

            <div className="flex items-center space-x-4 mb-6">
              <img
                src={cartItem.img1}
                alt={cartItem.title}
           
                className="w-24 h-24 rounded-md object-cover"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Premium Winter Jacket Model 1
                </h3>
                <p className="text-gray-600">Quantity: {quantity}</p>
                <p className="text-gray-600">Price: Rs. {price}</p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between text-lg font-semibold text-gray-800">
                <span>Subtotal</span>
                <span>Rs. {subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-lg font-semibold text-gray-800">
                <span>Shipping</span>
                <span>Rs. {shipping.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-xl font-bold text-gray-900 border-t border-gray-300 mt-4 pt-4">
                <span>Total</span>
                <span>Rs. {total.toFixed(2)}</span>
              </div>
            </div>
          </div>
<AdUnit type="d1" />
          {/* ===== CUSTOMER DETAILS ===== */}
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Customer Details
            </h2>

            <form onSubmit={nextStep} className="space-y-6">

              {/* STEP 1 - FULL NAME */}
              {step === 1 && (
                <InputField
                  label="Full Name"
                  name="fullName"
                  formData={formData}
                  handleChange={handleChange}
                />
              )}

              {/* STEP 2 - ADDRESS */}
              {step === 2 && (
                <>
                  <InputField
                    label="Address Line 1"
                    name="address1"
                    formData={formData}
                    handleChange={handleChange}
                  />
                  <InputField
                    label="Address Line 2"
                    name="address2"
                    formData={formData}
                    handleChange={handleChange}
                  />
                </>
              )}

              {/* STEP 3 */}
              {step === 3 && (
                <InputField
                  label="City"
                  name="city"
                  formData={formData}
                  handleChange={handleChange}
                />
              )}

              {/* STEP 4 */}
              {step === 4 && (
                <InputField
                  label="State"
                  name="state"
                  formData={formData}
                  handleChange={handleChange}
                />
              )}

              {/* STEP 5 */}
              {step === 5 && (
                <InputField
                  label="Pincode"
                  name="pincode"
                  formData={formData}
                  handleChange={handleChange}
                />
              )}

              {/* STEP 6 */}
              {step === 6 && (
                <InputField
                  label="Country"
                  name="country"
                  formData={formData}
                  handleChange={handleChange}
                />
              )}

              {/* STEP 7 */}
              {step === 7 && (
                <InputField
                  label="Phone Number"
                  name="phone"
                  formData={formData}
                  handleChange={handleChange}
                />
              )}

              {/* STEP 8 */}
              {step === 8 && (
                <InputField
                  label="Email"
                  name="email"
                  formData={formData}
                  handleChange={handleChange}
                />
              )}

              {/* STEP 9 - CONFIRMATION */}
              {step === 9 && (
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 space-y-2 text-sm">
                 <AdUnit type="d1" />
                </div>
              )}

              {/* NEXT BUTTON */}
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-md font-semibold hover:bg-indigo-700 transition shadow-md"
              >
                {step === 9 ? "Next" : "Next"}
              </button>
            </form>

            {/* NOTE BLOCK */}

            {step !== 9 && (
            <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md shadow-sm">
  <p className="text-sm text-gray-700 leading-relaxed">
    Please ensure that the information you provide is accurate and complete.
    Your name, contact details, and address will be used for order processing
    and timely delivery. Any mistakes in the details may cause delays or
    failed deliveries. Double-check your entries before proceeding to the
    next step. Providing a valid phone number and email address will also
    help us contact you for updates regarding your order. We value your
    trust and make every effort to ensure a smooth and hassle-free shopping
    experience. Thank you for choosing us!
  </p>
</div>
)}
</div>

        </section>
      </main>
<AdUnit type="d3" />
      <Footer />
    </div>
  );
}

function InputField({ label, name, formData, handleChange }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type="text"
        name={name}
        value={formData[name]}
        onChange={handleChange}
        className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm"
      />
    </div>
  );
}
