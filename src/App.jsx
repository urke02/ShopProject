import { Routes, Route } from "react-router-dom";
import ContactUs from "./pages/contact-us/ContactUs";
import Shop from "./pages/shop/Shop";
import AboutUs from "./pages/about-us/AboutUs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Shop />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/about-us" element={<AboutUs />} />
    </Routes>
  );
}

export default App;
