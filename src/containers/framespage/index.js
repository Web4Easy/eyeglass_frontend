import React from "react";

function FramePage() {
  return (
    <div>
      <div>
        <div className="page-wrapper">
          <main className="main">
            <h3 style={{ textAlign: "center" }}>
              <button className="btn btn-default"> Glasses</button>{" "}
              <a href="lenses.html">
                <button
                  className="btn btn-success"
                  style={{ backgroundColor: "#12b48b" }}
                >
                  {" "}
                  Lens
                </button>{" "}
              </a>
            </h3>
            <div className="row" style={{ padding: "0px" }}>
              <div className="col-12 col-md-2 col-sm-12 col-lg-2 col-sm-12 col-lg-2">
                <div className="content">
                  <div
                    id="jquery-accordion-menu"
                    className="jquery-accordion-menu "
                  >
                    <ul className="side-bar">
                      <li style={{ borderTop: "1px solid black" }}>
                        <a href="#" style={{ display: "flex" }}>
                          <img
                            src="images/icons/menu.png"
                            style={{ height: "15px", marginTop: "5px" }}
                          />
                          &nbsp;&nbsp; Category{" "}
                        </a>
                        <ul className="submenu">
                          <li>
                            <a href="#">Men's </a>
                            <span className="jquery-accordion-menu-label">
                              210{" "}
                            </span>
                          </li>
                          <li>
                            <a href="#">Women </a>
                            <span className="jquery-accordion-menu-label">
                              331{" "}
                            </span>
                          </li>
                          <li>
                            <a href="#">kids </a>
                            <span className="jquery-accordion-menu-label">
                              111{" "}
                            </span>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#" style={{ display: "flex" }}>
                          <img
                            src="images/icons/mozy.png"
                            style={{ height: "15px", marginTop: "5px" }}
                          />
                          &nbsp;&nbsp; Shape{" "}
                        </a>
                        <ul className="submenu">
                          <li>
                            <a href="#">Rectangle 13 </a>
                            <span className="jquery-accordion-menu-label">
                              10{" "}
                            </span>
                          </li>
                          <li>
                            <a href="#">Wayfarer</a>
                            <span className="jquery-accordion-menu-label">
                              13{" "}
                            </span>
                          </li>
                          <li>
                            <a href="#">Round </a>
                            <span className="jquery-accordion-menu-label">
                              10{" "}
                            </span>
                          </li>
                          <li>
                            <a href="#">Oval</a>
                            <span className="jquery-accordion-menu-label">
                              11{" "}
                            </span>
                          </li>
                          <li>
                            <a href="#">Square</a>
                            <span className="jquery-accordion-menu-label">
                              30{" "}
                            </span>
                          </li>
                        </ul>
                      </li>
                      <li style={{ borderBottom: "1px solid black" }}>
                        <a href="#" style={{ display: "flex" }}>
                          <img
                            src="images/icons/brand-positioning.png"
                            style={{ height: "15px", marginTop: "5px" }}
                          />
                          &nbsp;&nbsp; Brands{" "}
                        </a>
                        <ul className="submenu">
                          <li>
                            <a href="#">Tura </a>
                            <span className="jquery-accordion-menu-label">
                              30{" "}
                            </span>
                          </li>
                          <li>
                            <a href="#">Kate young </a>
                            <span className="jquery-accordion-menu-label">
                              10{" "}
                            </span>
                          </li>
                          <li>
                            <a href="#">Brendel </a>
                            <span className="jquery-accordion-menu-label">
                              22{" "}
                            </span>
                          </li>
                          <li>
                            <a href="#">Buffalo David Bitton </a>
                            <span className="jquery-accordion-menu-label">
                              4{" "}
                            </span>
                          </li>
                          <li>
                            <a href="#">Free Country </a>
                            <span className="jquery-accordion-menu-label">
                              19
                            </span>
                          </li>
                          <li>
                            <a href="#">Geofrey beane </a>
                            <span className="jquery-accordion-menu-label">
                              9{" "}
                            </span>
                          </li>
                          <li>
                            <a href="#">GX </a>
                            <span className="jquery-accordion-menu-label">
                              30{" "}
                            </span>
                          </li>
                          <li>
                            <a href="#">Humphhrys </a>
                            <span className="jquery-accordion-menu-label">
                              18{" "}
                            </span>
                          </li>
                          <li>
                            <a href="#">L.A.M.B </a>
                            <span className="jquery-accordion-menu-label">
                              27{" "}
                            </span>
                          </li>
                          <li>
                            <a href="#">Luli Guiness </a>
                            <span className="jquery-accordion-menu-label">
                              12{" "}
                            </span>
                          </li>
                          <li>
                            <a href="#">Mini </a>
                            <span className="jquery-accordion-menu-label">
                              43{" "}
                            </span>
                          </li>
                          <li>
                            <a href="#">Ted Baker </a>
                            <span className="jquery-accordion-menu-label">
                              29{" "}
                            </span>
                          </li>
                          <li>
                            <a href="#">Titan flex </a>
                            <span className="jquery-accordion-menu-label">
                              14{" "}
                            </span>
                          </li>
                          <li>
                            <a href="#">Zuma Rock</a>
                            <span className="jquery-accordion-menu-label">
                              21{" "}
                            </span>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* main */}
              <div className="col-12 col-md-1 col-sm-12 col-lg-1"> </div>
              <div className="col-12 col-md-9 col-sm-12 col-lg-9">
                <div className="row rc">
                  <h4 className="heading-rcmd">Recommended Glasses</h4>
                  <div
                    className="col-12 col-md-2 col-sm-12 col-lg-2 colmn"
                    style={{
                      boxShadow: "0px 2px 2px 2px silver",
                      marginBottom: "40px",
                      marginRight: "20px",
                    }}
                  >
                    <a href="product.html">
                      <div className="card1">
                        <img
                          src="pub/media/catalog/product/cache/5ab4f864193b307df280efcc385516ca/e/1/e1391b1a1_1_lar.jpg"
                          alt="Card Back"
                        />
                        <img
                          src="pub/media/catalog/product/cache/5ab4f864193b307df280efcc385516ca/t/w/tw1080mfp1_3_lar.jpg"
                          className="img-top1"
                          alt="Card Front"
                        />
                      </div>
                    </a>
                    <h4 style={{ textAlign: "center", color: "grey" }}>
                      Monthly Disposable Baush &amp; Lomb i Connect Contact Lens
                    </h4>
                    <br />
                    <h4 style={{ textAlign: "center", color: "grey" }}>
                      <s>₹599.00</s> ₹480.00
                    </h4>
                  </div>
                  <div
                    className="col-12 col-md-2 col-sm-12 col-lg-2 colmn"
                    style={{
                      boxShadow: "0px 2px 2px 2px silver",
                      marginBottom: "40px",
                      marginRight: "20px",
                    }}
                  >
                    <a href="product.html">
                      <div className="card1">
                        <img
                          src="pub/media/catalog/product/cache/5ab4f864193b307df280efcc385516ca/e/1/e1391b1a1_1_lar.jpg"
                          alt="Card Back"
                        />
                        <img
                          src="pub/media/catalog/product/cache/5ab4f864193b307df280efcc385516ca/t/w/tw1080mfp1_3_lar.jpg"
                          className="img-top1"
                          alt="Card Front"
                        />
                      </div>
                    </a>
                    <h4 style={{ textAlign: "center", color: "grey" }}>
                      Monthly Disposable Baush &amp; Lomb i Connect Contact Lens
                    </h4>
                    <br />
                    <h4 style={{ textAlign: "center", color: "grey" }}>
                      <s>₹599.00</s> ₹480.00
                    </h4>
                  </div>
                  <div
                    className="col-12 col-md-2 col-sm-12 col-lg-2 colmn"
                    style={{
                      boxShadow: "0px 2px 2px 2px silver",
                      marginBottom: "40px",
                      marginRight: "20px",
                    }}
                  >
                    <a href="product.html">
                      <div className="card1">
                        <img
                          src="pub/media/catalog/product/cache/5ab4f864193b307df280efcc385516ca/t/w/tw1080mfp1_3_lar.jpg"
                          alt="Card Back"
                        />
                        <img
                          src="pub/media/catalog/product/cache/5ab4f864193b307df280efcc385516ca/t/w/tw1080mfp1_3_lar.jpg"
                          className="img-top1"
                          alt="Card Front"
                        />
                      </div>
                    </a>
                    <h4 style={{ textAlign: "center", color: "grey" }}>
                      Monthly Disposable Baush &amp; Lomb i Connect Contact Lens
                    </h4>
                    <br />
                    <h4 style={{ textAlign: "center", color: "grey" }}>
                      <s>₹599.00</s> ₹480.00
                    </h4>
                  </div>
                  <div
                    className="col-12 col-md-2 col-sm-12 col-lg-2 colmn"
                    style={{
                      boxShadow: "0px 2px 2px 2px silver",
                      marginBottom: "40px",
                      marginRight: "20px",
                    }}
                  >
                    <a href="product.html">
                      <div className="card1">
                        <img
                          src="pub/media/catalog/product/cache/5ab4f864193b307df280efcc385516ca/t/w/tw1080mfp1_3_lar.jpg"
                          alt="Card Back"
                        />
                        <img
                          src="pub/media/catalog/product/cache/5ab4f864193b307df280efcc385516ca/e/1/e1391b1a1_1_lar.jpg"
                          className="img-top1"
                          alt="Card Front"
                        />
                      </div>
                    </a>
                    <h4 style={{ textAlign: "center", color: "grey" }}>
                      Monthly Disposable Baush &amp; Lomb i Connect Contact Lens
                    </h4>
                    <br />
                    <h4 style={{ textAlign: "center", color: "grey" }}>
                      <s>₹599.00</s> ₹480.00
                    </h4>
                  </div>
                </div>
                <div className="row rc">
                  <div
                    className="col-12 col-md-2 col-sm-12 col-lg-2 colmn"
                    style={{
                      boxShadow: "0px 2px 2px 2px silver",
                      marginBottom: "40px",
                      marginRight: "20px",
                    }}
                  >
                    <a href="product.html">
                      <div className="card1">
                        <img
                          src="pub/media/catalog/product/cache/5ab4f864193b307df280efcc385516ca/t/w/tw1080mfp1_3_lar.jpg"
                          alt="Card Back"
                        />
                        <img
                          src="pub/media/catalog/product/cache/5ab4f864193b307df280efcc385516ca/e/1/e1391b1a1_1_lar.jpg"
                          className="img-top1"
                          alt="Card Front"
                        />
                      </div>
                    </a>
                    <h4 style={{ textAlign: "center", color: "grey" }}>
                      Monthly Disposable Baush &amp; Lomb i Connect Contact Lens
                    </h4>
                    <br />
                    <h4 style={{ textAlign: "center", color: "grey" }}>
                      <s>₹599.00</s> ₹480.00
                    </h4>
                  </div>
                  <div
                    className="col-12 col-md-2 col-sm-12 col-lg-2 colmn"
                    style={{
                      boxShadow: "0px 2px 2px 2px silver",
                      marginBottom: "40px",
                      marginRight: "20px",
                    }}
                  >
                    <a href="product.html">
                      <div className="card1">
                        <img
                          src="pub/media/catalog/product/cache/5ab4f864193b307df280efcc385516ca/t/w/tw1080mfp1_3_lar.jpg"
                          alt="Card Back"
                        />
                        <img
                          src="pub/media/catalog/product/cache/5ab4f864193b307df280efcc385516ca/e/1/e1391b1a1_1_lar.jpg"
                          className="img-top1"
                          alt="Card Front"
                        />
                      </div>
                    </a>
                    <h4 style={{ textAlign: "center", color: "grey" }}>
                      Monthly Disposable Baush &amp; Lomb i Connect Contact Lens
                    </h4>
                    <br />
                    <h4 style={{ textAlign: "center", color: "grey" }}>
                      <s>₹599.00</s> ₹480.00
                    </h4>
                  </div>
                  <div
                    className="col-12 col-md-2 col-sm-12 col-lg-2 colmn"
                    style={{
                      boxShadow: "0px 2px 2px 2px silver",
                      marginBottom: "40px",
                      marginRight: "20px",
                    }}
                  >
                    <a href="product.html">
                      <div className="card1">
                        <img
                          src="pub/media/catalog/product/cache/5ab4f864193b307df280efcc385516ca/e/1/e1391b1a1_1_lar.jpg"
                          alt="Card Back"
                        />
                        <img
                          src="pub/media/catalog/product/cache/5ab4f864193b307df280efcc385516ca/t/w/tw1080mfp1_3_lar.jpg"
                          className="img-top1"
                          alt="Card Front"
                        />
                      </div>
                    </a>
                    <h4 style={{ textAlign: "center", color: "grey" }}>
                      Monthly Disposable Baush &amp; Lomb i Connect Contact Lens
                    </h4>
                    <br />
                    <h4 style={{ textAlign: "center", color: "grey" }}>
                      <s>₹599.00</s> ₹480.00
                    </h4>
                  </div>
                  <div
                    className="col-12 col-md-2 col-sm-12 col-lg-2 colmn"
                    style={{
                      boxShadow: "0px 2px 2px 2px silver",
                      marginBottom: "40px",
                      marginRight: "20px",
                    }}
                  >
                    <a href="product.html">
                      <div className="card1">
                        <img
                          src="pub/media/catalog/product/cache/5ab4f864193b307df280efcc385516ca/e/1/e1391b1a1_1_lar.jpg"
                          alt="Card Back"
                        />
                        <img
                          src="pub/media/catalog/product/cache/5ab4f864193b307df280efcc385516ca/t/w/tw1080mfp1_3_lar.jpg"
                          className="img-top1"
                          alt="Card Front"
                        />
                      </div>
                    </a>
                    <h4 style={{ textAlign: "center", color: "grey" }}>
                      Monthly Disposable Baush &amp; Lomb i Connect Contact Lens
                    </h4>
                    <br />
                    <h4 style={{ textAlign: "center", color: "grey" }}>
                      <s>₹599.00</s> ₹480.00
                    </h4>
                  </div>
                </div>
                <div className="row rc">
                  <div
                    className="col-12 col-md-2 col-sm-12 col-lg-2 colmn"
                    style={{
                      boxShadow: "0px 2px 2px 2px silver",
                      marginBottom: "40px",
                      marginRight: "20px",
                    }}
                  >
                    <a href="product.html">
                      <div className="card1">
                        <img
                          src="pub/media/catalog/product/cache/5ab4f864193b307df280efcc385516ca/e/1/e1391b1a1_1_lar.jpg"
                          alt="Card Back"
                        />
                        <img
                          src="pub/media/catalog/product/cache/5ab4f864193b307df280efcc385516ca/t/w/tw1080mfp1_3_lar.jpg"
                          className="img-top1"
                          alt="Card Front"
                        />
                      </div>
                    </a>
                    <h4 style={{ textAlign: "center", color: "grey" }}>
                      Monthly Disposable Baush &amp; Lomb i Connect Contact Lens
                    </h4>
                    <br />
                    <h4 style={{ textAlign: "center", color: "grey" }}>
                      <s>₹599.00</s> ₹480.00
                    </h4>
                  </div>
                  <div
                    className="col-12 col-md-2 col-sm-12 col-lg-2 colmn"
                    style={{
                      boxShadow: "0px 2px 2px 2px silver",
                      marginBottom: "40px",
                      marginRight: "20px",
                    }}
                  >
                    <a href="product.html">
                      <div className="card1">
                        <img
                          src="pub/media/catalog/product/cache/5ab4f864193b307df280efcc385516ca/e/1/e1391b1a1_1_lar.jpg"
                          alt="Card Back"
                        />
                        <img
                          src="pub/media/catalog/product/cache/5ab4f864193b307df280efcc385516ca/t/w/tw1080mfp1_3_lar.jpg"
                          className="img-top1"
                          alt="Card Front"
                        />
                      </div>
                    </a>
                    <h4 style={{ textAlign: "center", color: "grey" }}>
                      Monthly Disposable Baush &amp; Lomb i Connect Contact Lens
                    </h4>
                    <br />
                    <h4 style={{ textAlign: "center", color: "grey" }}>
                      <s>₹599.00</s> ₹480.00
                    </h4>
                  </div>
                  <div
                    className="col-12 col-md-2 col-sm-12 col-lg-2 colmn"
                    style={{
                      boxShadow: "0px 2px 2px 2px silver",
                      marginBottom: "40px",
                      marginRight: "20px",
                    }}
                  >
                    <a href="product.html">
                      <div className="card1">
                        <img
                          src="pub/media/catalog/product/cache/5ab4f864193b307df280efcc385516ca/e/1/e1391b1a1_1_lar.jpg"
                          alt="Card Back"
                        />
                        <img
                          src="pub/media/catalog/product/cache/5ab4f864193b307df280efcc385516ca/t/w/tw1080mfp1_3_lar.jpg"
                          className="img-top1"
                          alt="Card Front"
                        />
                      </div>
                    </a>
                    <h4 style={{ textAlign: "center", color: "grey" }}>
                      Monthly Disposable Baush &amp; Lomb i Connect Contact Lens
                    </h4>
                    <br />
                    <h4 style={{ textAlign: "center", color: "grey" }}>
                      <s>₹599.00</s> ₹480.00
                    </h4>
                  </div>
                  <div
                    className="col-12 col-md-2 col-sm-12 col-lg-2 colmn"
                    style={{
                      boxShadow: "0px 2px 2px 2px silver",
                      marginBottom: "40px",
                      marginRight: "20px",
                    }}
                  >
                    <a href="product.html">
                      <div className="card1">
                        <img
                          src="pub/media/catalog/product/cache/5ab4f864193b307df280efcc385516ca/e/1/e1391b1a1_1_lar.jpg"
                          alt="Card Back"
                        />
                        <img
                          src="pub/media/catalog/product/cache/5ab4f864193b307df280efcc385516ca/t/w/tw1080mfp1_3_lar.jpg"
                          className="img-top1"
                          alt="Card Front"
                        />
                      </div>
                    </a>
                    <h4 style={{ textAlign: "center", color: "grey" }}>
                      Monthly Disposable Baush &amp; Lomb i Connect Contact Lens
                    </h4>
                    <br />
                    <h4 style={{ textAlign: "center", color: "grey" }}>
                      <s>₹599.00</s> ₹480.00
                    </h4>
                  </div>
                </div>
                <ul
                  className="pagination"
                  style={{
                    textAlign: "center!important",
                    marginTop: "50px",
                    left: "50%",
                  }}
                >
                  <li>
                    <a href="#" className="prev">
                      &lt; Prev
                    </a>
                  </li>
                  <li className="pageNumber active">
                    <a href="#">1</a>
                  </li>
                  <li className="pageNumber">
                    <a href="#">2</a>
                  </li>
                  <li className="pageNumber">
                    <a href="#">3</a>
                  </li>
                  <li className="pageNumber">
                    <a href="#">4</a>
                  </li>
                  <li className="pageNumber">
                    <a href="#">5</a>
                  </li>
                  <li className="pageNumber">
                    <a href="#">6</a>
                  </li>
                  <li>
                    <a href="#" className="next">
                      Next &gt;
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </main>
          {/* End .main */}
          <br />
          <br />
        </div>
        {/* End .page-wrapper */}
        <button id="scroll-top" title="Back to Top">
          <i className="icon-arrow-up" />
        </button>
        {/* Mobile Menu */}
      </div>
    </div>
  );
}

export default FramePage;
