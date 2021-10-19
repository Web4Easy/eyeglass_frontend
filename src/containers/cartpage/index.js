import React from "react";

function CartPage() {
  return (
    <>
      <div className="page-wrapper">
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
      </div>

      <div>
        <button id="scroll-top" title="Back to Top">
          <i className="icon-arrow-up" />
        </button>
      </div>
    </>
  );
}

export default CartPage;
