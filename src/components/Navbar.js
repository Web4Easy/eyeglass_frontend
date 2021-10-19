import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="page-wrapper">
        <header className="header">
          <div
            className="header-top"
            style={{
              backgroundColor: "rgba(32,64,102,255)",
              color: "white",
              padding: "16px",
            }}
          >
            <div className="row">
              <div className="col-md-1" />
              <div className="col-md-5" style={{ fontSize: "14px" }}>
                <ul className="top-menu">
                  <li>
                    <ul>
                      <li>
                        <a href="tel:#">
                          <i className="icon-phone" />
                          Call: +92-000-1112233
                        </a>
                      </li>
                      <li>
                        <a href="tel:#">
                          <i className="icon-phone" />
                          Email: shellee@spectacles.com
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="col-md-3" />
              <div className="col-md-3" style={{ display: "flex" }}>
                <a href="#" style={{ marginRight: "5%", height: "16px" }}>
                  {" "}
                  <img src="images/icons/facebook.png" />{" "}
                </a>
                <a href="#" style={{ marginRight: "5%", height: "16px" }}>
                  {" "}
                  <img src="images/icons/twitter.png" />{" "}
                </a>
                <a href="#" style={{ marginRight: "5%", height: "16px" }}>
                  {" "}
                  <img src="images/icons/linkedin.png" />{" "}
                </a>
                <a href="#" style={{ marginRight: "5%", height: "16px" }}>
                  {" "}
                  <img src="images/icons/instagram.png" />{" "}
                </a>
                <li style={{ listStyleType: "none", fontSize: "14px" }}>
                  <NavLink to="/login">
                    <i className="icon-user" />
                    Login
                  </NavLink>
                </li>
              </div>
            </div>
          </div>
          {/* End .header-top */}
          <div className="header-middle sticky-header">
            <div className="container">
              <div className="header-left">
                <button className="mobile-menu-toggler">
                  <span className="sr-only">Toggle mobile menu</span>
                  <i className="icon-bars" />
                </button>
                <NavLink to="/" className="logo">
                  <img
                    src="assets/images/logo-black.png"
                    alt="plug Logo"
                    width={105}
                    height={25}
                  />
                </NavLink>
                <nav className="main-nav">
                  <ul className="menu sf-arrows">
                    <li className="megamenu-container  ">
                      <NavLink to="/">Home </NavLink>
                    </li>
                    {/* End .demo-list */}
                    <li>
                      <NavLink to="/frames">Frames We Offer</NavLink>
                    </li>
                    <li>
                      <NavLink to="/shop">shellee's Spectacles Shop</NavLink>
                    </li>
                    <li>
                      <NavLink to="/about">About us</NavLink>
                    </li>
                    <li>
                      <NavLink to="/contact">contact us</NavLink>{" "}
                    </li>
                  </ul>
                  {/* End .menu */}
                </nav>
                {/* End .main-nav */}
              </div>
              {/* End .header-left */}
              <div className="header-right">
                <div className="header-search">
                  <a
                    href="#"
                    className="search-toggle"
                    role="button"
                    title="Search"
                  >
                    <i className="icon-search" />
                  </a>
                  <form action="#" method="get">
                    <div className="header-search-wrapper">
                      <label htmlFor="q" className="sr-only">
                        Search
                      </label>
                      <input
                        type="search"
                        className="form-control"
                        name="q"
                        id="q"
                        placeholder="Search in..."
                        required
                      />
                    </div>
                    {/* End .header-search-wrapper */}
                  </form>
                </div>
                {/* End .header-search */}
                <div className="dropdown cart-dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-display="static"
                  >
                    <i className="icon-shopping-cart" />
                    <span className="cart-count">2</span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <div className="dropdown-cart-products">
                      <div className="product">
                        <div className="product-cart-details">
                          <h4 className="product-title">
                            <Link to="#">raban branded glasses</Link>
                          </h4>
                          <span className="cart-product-info">
                            <span className="cart-product-qty">1</span>x $84.00
                          </span>
                        </div>
                        {/* End .product-cart-details */}
                        <figure className="product-image-container">
                          <Link href="#" className="product-image">
                            <img
                              src="assets/images/products/table/product-1.jpg"
                              alt="product"
                            />
                          </Link>
                        </figure>
                        <a
                          href="#"
                          className="btn-remove"
                          title="Remove Product"
                        >
                          <i className="icon-close" />
                        </a>
                      </div>
                      {/* End .product */}
                      <div className="product">
                        <div className="product-cart-details">
                          <h4 className="product-title">
                            <Link href="#">raban branded sunglasses</Link>
                          </h4>
                          <span className="cart-product-info">
                            <span className="cart-product-qty">1</span>x $76.00
                          </span>
                        </div>
                        {/* End .product-cart-details */}
                        <figure className="product-image-container">
                          <Link href="#" className="product-image">
                            <img
                              src="assets/images/products/table/product-2.jpg"
                              alt="product"
                            />
                          </Link>
                        </figure>
                        <a
                          href="#"
                          className="btn-remove"
                          title="Remove Product"
                        >
                          <i className="icon-close" />
                        </a>
                      </div>
                      {/* End .product */}
                    </div>
                    {/* End .cart-product */}
                    <div className="dropdown-cart-total">
                      <span>Total</span>
                      <span className="cart-total-price">$160.00</span>
                    </div>
                    {/* End .dropdown-cart-total */}
                    <div className="dropdown-cart-action">
                      <Link
                        to="/cart"
                        className="btn btn-primary"
                        style={{ backgroundColor: "#204066 !important" }}
                      >
                        View Cart
                      </Link>
                      <Link
                        to="/cart"
                        className="btn btn-outline-primary-2"
                        style={{
                          backgroundColor: "#12b48b !important",
                          color: "white",
                        }}
                      >
                        <span>Checkout</span>
                        <i className="icon-long-arrow-right" />
                      </Link>
                    </div>
                    {/* End .dropdown-cart-total */}
                  </div>
                  {/* End .dropdown-menu */}
                </div>
                {/* End .cart-dropdown */}
              </div>
              {/* End .header-right */}
            </div>
            {/* End .container */}
          </div>
          {/* End .header-middle */}
        </header>
        {/* End .header */}

        <div className="mobile-menu-overlay" />
        {/* End .mobil-menu-overlay */}
        <div
          className="mobile-menu-container"
          style={{ backgroundColor: "rgba(32,64,102,255)" }}
        >
          <div className="mobile-menu-wrapper">
            <span className="mobile-menu-close">
              <i className="icon-close" />
            </span>
            <form action="#" method="get" className="mobile-search">
              <label htmlFor="mobile-search" className="sr-only">
                Search
              </label>
              <input
                type="search"
                className="form-control"
                name="mobile-search"
                id="mobile-search"
                placeholder="Search in..."
                required
              />
              <button
                className="btn btn-primary"
                style={{ backgroundColor: "#12b48b" }}
                type="submit"
              >
                <i className="icon-search" />
              </button>
            </form>
            <nav className="mobile-nav">
              <ul className="mobile-menu">
                <li className="active">
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/frames">Frames We Offer</Link>
                </li>
                <li>
                  <Link to="/shop" className="sf-with-ul">
                    Shellee 's Spectacles Shop
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="sf-with-ul">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="sf-with-ul">
                    Contact Us
                  </Link>
                </li>
                <li></li>
                <li style={{ listStyleType: "none", fontSize: "14px" }}>
                  <NavLink to="/login">
                    <i className="icon-user" />
                    Login
                  </NavLink>
                </li>
              </ul>
            </nav>
            {/* End .mobile-nav */}
            <div className="social-icons">
              <a
                href="#"
                className="social-icon"
                target="_blank"
                title="Facebook"
              >
                <i className="icon-facebook-f" />
              </a>
              <a
                href="#"
                className="social-icon"
                target="_blank"
                title="Twitter"
              >
                <i className="icon-twitter" />
              </a>
              <a
                href="#"
                className="social-icon"
                target="_blank"
                title="Instagram"
              >
                <i className="icon-instagram" />
              </a>
              <a
                href="#"
                className="social-icon"
                target="_blank"
                title="Youtube"
              >
                <i className="icon-youtube" />
              </a>
            </div>
            {/* End .social-icons */}
          </div>
          {/* End .mobile-menu-wrapper */}
        </div>
        {/* End .mobile-menu-container */}
      </div>
    </div>
  );
}

export default Navbar;
