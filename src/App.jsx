import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import "./App.css";
import AboutUs from "./Pages/About-Us/AboutUs";
import Services from "./Pages/Services/Services";
import ContactUs from "./Pages/Contact-Us/ContactUs";
import HomeRedirect from './Pages/HomeRedirect'
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services/>}/>
        <Route path="/contact-us" element={<ContactUs/>}/>
        <Route path="*" element={<HomeRedirect/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
