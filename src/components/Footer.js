import React from "react";

function Footer() {
  return (
    <div>
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
                    when it comes to buying eyeglasses and sunglasses online for
                    men, women and kids. For years.{" "}
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
    </div>
  );
}

export default Footer;
