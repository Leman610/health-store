import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topbar from "./components/Topbar";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import Hero from "./components/Hero";
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
import Shop from "./pages/Shop";
import Blog from "./pages/Blog";
import Alimentation from "./pages/Alimentation";
import Misceleneaous from "./pages/Misceleneaous";
import FilterByPrice from "./pages/FilterByPrice";
import Society from "./pages/Society";
import Categoriesbox from "./components/Categoriesbox";
import Categories from "./pages/Categoriess";

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

              <Categoriesbox />
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
        <Route path="/shop" element={<Shop />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/blog" element={<Blog />} />

        <Route path="/alimentation" element={<Alimentation />} />
        <Route path="/misceleneaous" element={<Misceleneaous />} />
        <Route path="/shop/categories" element={<Categories />} />
        <Route path="/shop/filter-by-price" element={<FilterByPrice />} />
        <Route path="/society" element={<Society />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
