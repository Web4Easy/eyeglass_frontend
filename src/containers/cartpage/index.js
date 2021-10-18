import React from "react";

function CartPage() {
  return (
    <>
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
                    <li className="megamenu-container active ">
                      <a href="index.html">Home</a>
                    </li>
                    {/* End .demo-list */}
                    <li>
                      <a href="frames-offer.html">Frames We Offer</a>
                    </li>
                    <li>
                      <a href="#">shellee's Spectacles Shop</a>
                    </li>
                    <li>
                      <a href="about.html">About us</a>
                    </li>
                    <li>
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
                            <span className="cart-product-qty">1</span>x $84.00
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
                            <span className="cart-product-qty">1</span>x $76.00
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
        <main className="main">
          <div
            className="page-header text-center"
            style={{
              backgroundImage: 'url("assets/images/page-header-bg.jpg")',
            }}
          >
            <div className="container">
              <h1 className="page-title">
                Shopping Cart<span style={{ color: "#12b48b" }}>Shop</span>
              </h1>
            </div>
            {/* End .container */}
          </div>
          {/* End .page-header */}
          <nav aria-label="breadcrumb" className="breadcrumb-nav">
            <div className="container">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Shop</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Shopping Cart
                </li>
              </ol>
            </div>
            {/* End .container */}
          </nav>
          {/* End .breadcrumb-nav */}
          <div className="page-content">
            <div className="cart">
              <div className="container">
                <div className="row">
                  <div className="col-lg-9">
                    <table className="table table-cart table-mobile">
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th>Total</th>
                          <th />
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="product-col">
                            <div className="product">
                              <figure className="product-media">
                                <a href="#">
                                  <img
                                    src="images/products/glasses1.jpg"
                                    alt="Product image"
                                  />
                                </a>
                              </figure>
                              <h3 className="product-title">
                                <a href="#">
                                  Black Rectangle Rimmed Eyeglasses from Titan
                                </a>
                              </h3>
                              {/* End .product-title */}
                            </div>
                            {/* End .product */}
                          </td>
                          <td className="price-col">$180.00</td>
                          <td className="quantity-col">
                            <div className="cart-product-quantity">
                              <input
                                type="number"
                                className="form-control"
                                defaultValue={1}
                                min={1}
                                max={10}
                                step={1}
                                data-decimals={0}
                                required
                              />
                            </div>
                            {/* End .cart-product-quantity */}
                          </td>
                          <td
                            className="total-col"
                            style={{ color: "#204066" }}
                          >
                            $180.00
                          </td>
                          <td className="remove-col">
                            <button className="btn-remove">
                              <i className="icon-close" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td className="product-col">
                            <div className="product">
                              <figure className="product-media">
                                <a href="#">
                                  <img
                                    src="images/products/lens1.jpg"
                                    alt="Product image"
                                  />
                                </a>
                              </figure>
                              <h3 className="product-title">
                                <a href="#">
                                  Monthly Disposable Baush &amp; Lomb i Connect
                                  Contact Lens
                                </a>
                              </h3>
                              {/* End .product-title */}
                            </div>
                            {/* End .product */}
                          </td>
                          <td className="price-col">$480.00</td>
                          <td className="quantity-col">
                            <div className="cart-product-quantity">
                              <input
                                type="number"
                                className="form-control"
                                defaultValue={1}
                                min={1}
                                max={10}
                                step={1}
                                data-decimals={0}
                                required
                              />
                            </div>
                            {/* End .cart-product-quantity */}
                          </td>
                          <td
                            className="total-col"
                            style={{ color: "#204066" }}
                          >
                            $480.00
                          </td>
                          <td className="remove-col">
                            <button className="btn-remove">
                              <i className="icon-close" />
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    {/* End .table table-wishlist */}
                    <div className="cart-bottom">
                      <div className="cart-discount">
                        <form action="#">
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control"
                              required
                              placeholder="coupon code"
                            />
                            <div className="input-group-append">
                              <button
                                className="btn btn-outline-primary-2"
                                type="submit"
                              >
                                <i className="icon-long-arrow-right" />
                              </button>
                            </div>
                            {/* .End .input-group-append */}
                          </div>
                          {/* End .input-group */}
                        </form>
                      </div>
                      {/* End .cart-discount */}
                      <a href="#" className="btn btn-outline-dark-2">
                        <span>UPDATE CART</span>
                        <i className="icon-refresh" />
                      </a>
                    </div>
                    {/* End .cart-bottom */}
                  </div>
                  {/* End .col-lg-9 */}
                  <aside className="col-lg-3">
                    <div className="summary summary-cart">
                      <h3 className="summary-title">Cart Total</h3>
                      {/* End .summary-title */}
                      <table className="table table-summary">
                        <tbody>
                          <tr className="summary-subtotal">
                            <td>Subtotal:</td>
                            <td>$660.00</td>
                          </tr>
                          {/* End .summary-subtotal */}
                          <tr className="summary-shipping">
                            <td>Shipping:</td>
                            <td>&nbsp;</td>
                          </tr>
                          <tr className="summary-shipping-row">
                            {/*<td>
													<div class="custom-control custom-radio">
														<input type="radio" id="free-shipping" name="shipping" class="custom-control-input">
														<label class="custom-control-label" for="free-shipping">Free Shipping</label>
													</div><!-- End .custom-control --
	                							</td>
	                							<td>$0.00</td>
	                						</tr><!-- End .summary-shipping-row */}
                          </tr>
                          <tr className="summary-shipping-row">
                            <td>
                              <div className="custom-control custom-radio">
                                <input
                                  type="radio"
                                  id="standart-shipping"
                                  name="shipping"
                                  className="custom-control-input"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="standart-shipping"
                                >
                                  Standard:
                                </label>
                              </div>
                              {/* End .custom-control */}
                            </td>
                            <td>$10.00</td>
                          </tr>
                          {/* End .summary-shipping-row */}
                          <tr className="summary-shipping-row">
                            {/*<td>
	                								<div class="custom-control custom-radio">
														<input type="radio" id="express-shipping" name="shipping" class="custom-control-input">
														<label class="custom-control-label" for="express-shipping">Express:</label>
													</div><!-- End .custom-control --
	                							</td>
	                							<td>$20.00</td>
	                						</tr><!-- End .summary-shipping-row */}
                          </tr>
                          <tr className="summary-total">
                            <td style={{ color: "#202020" }}>Total:</td>
                            <td style={{ color: "#202020" }}>$700.00</td>
                          </tr>
                          {/* End .summary-total */}
                        </tbody>
                      </table>
                      {/* End .table table-summary */}
                      <a
                        href="checkout.html"
                        className="btn btn-outline-primary-2 btn-order btn-block"
                        style={{ color: "#204066" }}
                      >
                        PROCEED TO CHECKOUT
                      </a>
                    </div>
                    {/* End .summary */}
                    <a
                      href="frames-offer.html"
                      className="btn btn-outline-dark-2 btn-block mb-3"
                    >
                      <span>CONTINUE SHOPPING</span>
                      <i className="icon-refresh" />
                    </a>
                  </aside>
                  {/* End .col-lg-3 */}
                </div>
                {/* End .row */}
              </div>
              {/* End .container */}
            </div>
            {/* End .cart */}
          </div>
          {/* End .page-content */}
        </main>
        {/* End .main */}

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
                      Shellee's Spectacles Shop has emerged as a household name
                      when it comes to buying eyeglasses and sunglasses online
                      for men, women and kids. For years.{" "}
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
                      <li style={{ listStyleType: "none", fontSize: "14px" }}>
                        <a href="login.html">Login</a>
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
                      <li style={{ listStyleType: "none", fontSize: "14px" }}>
                        <a href="login.html">Sign in</a>
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

      <div>
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
                <li className="active">
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
                <li>
                  <a href="contact.html" className="sf-with-ul">
                    Contact Us
                  </a>
                </li>
                <li></li>
                <li style={{ listStyleType: "none", fontSize: "14px" }}>
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
        {/* Sign in / Register Modal */}
        <div
          className="modal fade"
          id="signin-modal"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">
                    <i className="icon-close" />
                  </span>
                </button>
                <div className="form-box">
                  <div className="form-tab">
                    <ul className="nav nav-pills nav-fill" role="tablist">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          id="signin-tab"
                          data-toggle="tab"
                          href="#signin"
                          role="tab"
                          aria-controls="signin"
                          aria-selected="true"
                        >
                          Sign In
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="register-tab"
                          data-toggle="tab"
                          href="#register"
                          role="tab"
                          aria-controls="register"
                          aria-selected="false"
                        >
                          Register
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content" id="tab-content-5">
                      <div
                        className="tab-pane fade show active"
                        id="signin"
                        role="tabpanel"
                        aria-labelledby="signin-tab"
                      >
                        <form action="#">
                          <div className="form-group">
                            <label htmlFor="singin-email">
                              Username or email address *
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="singin-email"
                              name="singin-email"
                              required
                            />
                          </div>
                          {/* End .form-group */}
                          <div className="form-group">
                            <label htmlFor="singin-password">Password *</label>
                            <input
                              type="password"
                              className="form-control"
                              id="singin-password"
                              name="singin-password"
                              required
                            />
                          </div>
                          {/* End .form-group */}
                          <div className="form-footer">
                            <button
                              type="submit"
                              className="btn btn-outline-primary-2"
                            >
                              <span>LOG IN</span>
                              <i className="icon-long-arrow-right" />
                            </button>
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="signin-remember"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="signin-remember"
                              >
                                Remember Me
                              </label>
                            </div>
                            {/* End .custom-checkbox */}
                            <a href="#" className="forgot-link">
                              Forgot Your Password?
                            </a>
                          </div>
                          {/* End .form-footer */}
                        </form>
                      </div>
                      {/* .End .tab-pane */}
                      <div
                        className="tab-pane fade"
                        id="register"
                        role="tabpanel"
                        aria-labelledby="register-tab"
                      >
                        <form action="#">
                          <div className="form-group">
                            <label htmlFor="register-email">
                              Your email address *
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              id="register-email"
                              name="register-email"
                              required
                            />
                          </div>
                          {/* End .form-group */}
                          <div className="form-group">
                            <label htmlFor="register-password">
                              Password *
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              id="register-password"
                              name="register-password"
                              required
                            />
                          </div>
                          {/* End .form-group */}
                          <div className="form-group">
                            <label htmlFor="register-address">Address *</label>
                            <input
                              type="address"
                              className="form-control"
                              id="register-address"
                              name="register-address"
                              required
                            />
                          </div>
                          {/* End .form-group */}
                          <div className="form-group">
                            <label htmlFor="register-number">Number *</label>
                            <input
                              type="number"
                              className="form-control"
                              id="register-number"
                              name="register-number"
                              required
                            />
                          </div>
                          {/* End .form-group */}
                          <div className="form-footer">
                            <button
                              type="submit"
                              className="btn btn-outline-primary-2"
                            >
                              <span>SIGN UP</span>
                              <i className="icon-long-arrow-right" />
                            </button>
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="register-policy"
                                required
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="register-policy"
                              >
                                I agree to the <a href="#">privacy policy</a> *
                              </label>
                            </div>
                            {/* End .custom-checkbox */}
                          </div>
                          {/* End .form-footer */}
                        </form>
                      </div>
                      {/* .End .tab-pane */}
                    </div>
                    {/* End .tab-content */}
                  </div>
                  {/* End .form-tab */}
                </div>
                {/* End .form-box */}
              </div>
              {/* End .modal-body */}
            </div>
            {/* End .modal-content */}
          </div>
          {/* End .modal-dialog */}
        </div>
        {/* End .modal */}
      </div>
    </>
  );
}

export default CartPage;
