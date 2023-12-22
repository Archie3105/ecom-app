import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import Footer from "./components/Footer";
import Products from "./components/Products";
import Home from "./components/Home";
import Confirmation from "./components/Confirmation";
import { Routes, Route, BrowserRouter, } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import Procategory from "./components/Procategory";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import About from "./components/About";
import Contact from "./components/Contact";
import Search from "./components/Search";
import Error from "./components/Error";
import Fashionitem from "./components/Fashionitem";
import Groceryitem from "./components/Groceryitem";
import Beautyitem from "./components/Beautyitem";
import Electricitem from "./components/Electricitem";
import Petitem from "./components/Petitem";
import Groitemdetails from "./components/Groitemdetails";
import Eleitemdetails from "./components/Eleitemdetials";
import Beaitemdetails from "./components/Beaitemdetails";
import Petitemdetails from "./components/Petitemdetails";
import Thnkcontact from "./components/Thnkcontact";

function App(props) {
  const [mode, setMode] = useState("light");
  const [toggleText, setToggleText] = useState("Dark");

  const [alert, setAlert] = useState(null);

  const showAlert = (massage, type) => {
    setAlert({
      msg: massage,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#282c34";
      document.body.style.color = " white";
      setToggleText("Light");
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = " black";
      setToggleText("Dark");
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      <BrowserRouter basename="/ecom-app">
        <Navbar
          title="Eternal.code"
          aboutText="About Us"
          mode={mode}
          toggleMode={toggleMode}
          toText={toggleText}
        />

        {/* ************************************ */}
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/ecom-app" element={<Home />} />
            <Route path="/productdetails" element={<ProductDetails />} />
            <Route path="/groitemdetails" element={<Groitemdetails />} />
            <Route path="/eleitemdetails" element={<Eleitemdetails />} />
            <Route path="/beaitemdetails" element={<Beaitemdetails />} />
            <Route path="/petitemdetails" element={<Petitemdetails />} />
          {/* </Route> */}
          <Route path="/products/" element={<Products />} />
          <Route exact path="procategory" element={<Procategory />} />
          <Route exact path="about" element={<About />} />
          <Route exact path="contact" element={<Contact />} />
          <Route exact path="thnkcontact" element={<Thnkcontact />} />
          <Route exact path="search" element={<Search />} />
          <Route exact path="groceryitem" element={<Groceryitem />} />
              <Route exact path="fashionitem" element={<Fashionitem />} />
              <Route exact path="beautyitem" element={<Beautyitem />} />
              <Route exact path="electricitem" element={<Electricitem />} />
              <Route exact path="petitem" element={<Petitem />} />
          <Route path="cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route exact path="/confirmation" element={<Confirmation />} >
            {/* </Route> */}
          </Route>
          <Route path="/*" element={<Error />} />
        </Routes>
        {/*<ProductDetails/> */}
        <Footer mode={mode} />
      </BrowserRouter>
    </>
  );
}

export default App;
