import logo from "./logo.svg";
import "./App.css";
import HomePage from "./containers/homepage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./containers/loginpage";
import ShopPage from "./containers/shoppage";
import AboutPage from "./containers/aboutpage";
import CartPage from "./containers/cartpage";
import ContactPage from "./containers/contactpage";
import FramePage from "./containers/framespage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route component={HomePage} path="/" exact />
        <Route component={LoginPage} path="/login" exact />
        <Route component={ShopPage} path="/shop" exact />
        <Route component={AboutPage} path="/about" exact />
        <Route component={CartPage} path="/cart" exact />
        <Route component={ContactPage} path="/contact" exact />
        <Route component={FramePage} path="/frames" exact />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
