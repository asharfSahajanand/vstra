import { Routes, Route } from 'react-router-dom'
// import './App.css'
import IndexPage from './index.jsx'
import FAQ from './pages/FAQ.jsx'
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'
import Policy from './pages/PrivacyPolicy.jsx'
import Products from './products/productView.jsx'
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/Confirm.jsx";


function App() {
  
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/policy" element={<Policy />} />
      <Route path="/product/:id" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/confirm/thankyou" element={<OrderSuccess />} />
    </Routes>
  )
}

export default App
