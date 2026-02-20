import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
export default function IndexPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}
