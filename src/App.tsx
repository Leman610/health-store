import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topbar from "./components/Topbar";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Week from "./components/Week";
import Sale from "./components/Sale";
import Health from "./components/Health";
import Products from "./components/Products";
import Discount from "./components/Discount";
import Weekend from "./components/Weekend";
import Weekdiscount from "./components/Weekdiscount";
import Advice from "./components/Advice";
import Footer from "./components/Footer";

import TrackOrder from "./pages/TrackOrder";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Blog from "./pages/Blog";

const App = () => {
  return (
    <BrowserRouter>
      <Topbar />
      <Header />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div className="app">
              <Hero />
              <Categories />
              <Week />
              <Sale />
              <Health />
              <Products />
              <Discount />
              <Weekend />
              <Weekdiscount />
              <Advice />
            </div>
          }
        />
        <Route path="/track-order" element={<TrackOrder />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
