import React from "react";

function ContactPage() {
  return (
    <div>
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
                    <a href="login.html">
                      <i className="icon-user" />
                      Login
                    </a>
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
                  <a href="index.html" className="logo">
                    <img
                      src="assets/images/logo-black.png"
                      alt="plug Logo"
                      width={105}
                      height={25}
                    />
                  </a>
                  <nav className="main-nav">
                    <ul className="menu sf-arrows">
                      <li className="megamenu-container  ">
                        <a href="index.html">Home</a>
                      </li>
                      {/* End .demo-list */}
                      <li>
                        <a href="frames-offer.html">Frames We Offer</a>
                      </li>
                      <li>
                        <a href="#">shellee's Spectacles Shop</a>
                      </li>
                      <li className>
                        <a href="about.html">About us</a>
                      </li>
                      <li className="active">
                        <a href="contact.html">contact us</a>{" "}
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
                              <a href="#">raban branded glasses</a>
                            </h4>
                            <span className="cart-product-info">
                              <span className="cart-product-qty">1</span>x
                              $84.00
                            </span>
                          </div>
                          {/* End .product-cart-details */}
                          <figure className="product-image-container">
                            <a href="#" className="product-image">
                              <img
                                src="assets/images/products/table/product-1.jpg"
                                alt="product"
                              />
                            </a>
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
                              <a href="#">raban branded sunglasses</a>
                            </h4>
                            <span className="cart-product-info">
                              <span className="cart-product-qty">1</span>x
                              $76.00
                            </span>
                          </div>
                          {/* End .product-cart-details */}
                          <figure className="product-image-container">
                            <a href="#" className="product-image">
                              <img
                                src="assets/images/products/table/product-2.jpg"
                                alt="product"
                              />
                            </a>
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
                        <a
                          href="RX Page.html"
                          className="btn btn-primary"
                          style={{ backgroundColor: "#204066 !important" }}
                        >
                          Enter Prescription Details
                        </a>
                        {/* <a href="cart.html" class="btn btn-outline-primary-2" style="background-color: #12b48b !important; color: white;"><span>Checkout</span><i class="icon-long-arrow-right"></i></a>*/}
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
          <iframe
            src="contact-body.html"
            width="100%"
            height="1300px;"
            className="contact-frame"
          />
          <footer
            className="footer"
            style={{ backgroundColor: "#204066", color: "white" }}
          >
            <div className="footer-middle border-0">
              <div className="container">
                <div className="row">
                  <div className="col-sm-6 col-lg-3">
                    <div className="widget widget-about">
                      <img
                        src="assets/images/logo-new.png"
                        className="footer-logo"
                        alt="Footer Logo"
                        width={105}
                        height={25}
                      />
                      <p style={{ color: "white" }}>
                        {" "}
                        Shellee's Spectacles Shop has emerged as a household
                        name when it comes to buying eyeglasses and sunglasses
                        online for men, women and kids. For years.{" "}
                      </p>
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
                        <a
                          href="#"
                          className="social-icon"
                          target="_blank"
                          title="Pinterest"
                        >
                          <i className="icon-pinterest" />
                        </a>
                      </div>
                      {/* End .soial-icons */}
                    </div>
                    {/* End .widget about-widget */}
                  </div>
                  {/* End .col-sm-6 col-lg-3 */}
                  <div className="col-sm-6 col-lg-3">
                    <div className="widget">
                      <h4
                        className="widget-title"
                        style={{ color: "white !important" }}
                      >
                        Useful Links
                      </h4>
                      {/* End .widget-title */}
                      <ul className="widget-list">
                        <li>
                          <a href="about.html">About Shellee's Spectacles</a>
                        </li>
                        <li>
                          <a href="#">How to shop on Shellee's Spectacles</a>
                        </li>
                        <li>
                          <a href="contact.html">Contact us</a>
                        </li>
                        <li>
                          <a href="login.html">Log in</a>
                        </li>
                      </ul>
                      {/* End .widget-list */}
                    </div>
                    {/* End .widget */}
                  </div>
                  {/* End .col-sm-6 col-lg-3 */}
                  <div className="col-sm-6 col-lg-3">
                    <div className="widget">
                      <h4
                        className="widget-title"
                        style={{ color: "white !important" }}
                      >
                        Customer Service
                      </h4>
                      {/* End .widget-title */}
                      <ul className="widget-list">
                        <li>
                          <a href="#">Payment Methods</a>
                        </li>
                        <li>
                          <a href="#">Money-back guarantee!</a>
                        </li>
                        <li>
                          <a href="#">Returns</a>
                        </li>
                        <li>
                          <a href="#">Shipping</a>
                        </li>
                        <li>
                          <a href="#">Terms and conditions</a>
                        </li>
                        <li>
                          <a href="#">Privacy Policy</a>
                        </li>
                      </ul>
                      {/* End .widget-list */}
                    </div>
                    {/* End .widget */}
                  </div>
                  {/* End .col-sm-6 col-lg-3 */}
                  <div className="col-sm-6 col-lg-3">
                    <div className="widget">
                      <h4
                        className="widget-title"
                        style={{ color: "white !important" }}
                      >
                        My Account
                      </h4>
                      {/* End .widget-title */}
                      <ul className="widget-list">
                        <li>
                          <a href="login.html">Sign In</a>
                        </li>
                        <li>
                          <a href="cart.html">View Cart</a>
                        </li>
                        <li>
                          <a href="#">Track My Order</a>
                        </li>
                        <li>
                          <a href="#">Help</a>
                        </li>
                      </ul>
                      {/* End .widget-list */}
                    </div>
                    {/* End .widget */}
                  </div>
                  {/* End .col-sm-6 col-lg-3 */}
                </div>
                {/* End .row */}
              </div>
              {/* End .container */}
            </div>
            {/* End .footer-middle */}
            <div className="footer-bottom">
              <div className="container">
                <p
                  className="footer-copyright"
                  style={{ color: "white !important" }}
                >
                  Copyright © 2019 Shellee's Spectacles. All Rights Reserved.
                </p>
                {/* End .footer-copyright */}
                <figure className="footer-payments">
                  <img
                    src="assets/images/payments.png"
                    alt="Payment methods"
                    width={272}
                    height={20}
                  />
                </figure>
                {/* End .footer-payments */}
              </div>
              {/* End .container */}
            </div>
            {/* End .footer-bottom */}
          </footer>
          {/* End .footer */}
        </div>
        {/* End .page-wrapper */}
        <button id="scroll-top" title="Back to Top">
          <i className="icon-arrow-up" />
        </button>
        {/* Mobile Menu */}
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
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="frames-offer.html">Frames We Offer</a>
                </li>
                <li>
                  <a href="shop-page.html" className="sf-with-ul">
                    Shellee 's Spectacles Shop
                  </a>
                </li>
                <li>
                  <a href="about.html" className="sf-with-ul">
                    About Us
                  </a>
                </li>
                <li className="active">
                  <a href="contact.html" className="sf-with-ul">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="login.html">
                    <i className="icon-user" />
                    Login
                  </a>
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

export default ContactPage;
