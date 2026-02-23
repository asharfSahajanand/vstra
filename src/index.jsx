import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import AdUnit from "./components/Ads/gamAds.jsx";
export default function IndexPage() {
  return (
    <div className="min-h-screen bg-gray-100">
    <AdUnit type="d1" />
      <Navbar />
      <Home />
      <Footer />
     <AdUnit type="d3" />
    </div>
  );
}
