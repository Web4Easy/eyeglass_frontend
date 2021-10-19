import React from "react";

function ShopPage() {
  return (
    <div>
      <div className="page-wrapper">
        <main className="main">
          <h3 style={{ textAlign: "center" }}>
            Enter Your Prescription Details
          </h3>
          <div className="container">
            <h3>Left</h3>
            <form className="form-inline" action="/action_page.php">
              <div className="form-group">
                <label htmlFor="Power">Power:</label>
                <input
                  type="Power"
                  className="form-control"
                  id="Power"
                  placeholder="Enter Power"
                  name="Power"
                />
              </div>
              <div className="form-group">
                <label htmlFor="cylinder">Cylinder:</label>
                <input
                  type="Cylinder"
                  className="form-control"
                  id="cylinder"
                  placeholder="Enter Cylinder"
                  name="cylinder"
                />
              </div>
              <div className="form-group">
                <label htmlFor="Axis">Axis:</label>
                <input
                  type="Axis"
                  className="form-control"
                  id="Axis"
                  placeholder="Enter Axis"
                  name="Axis"
                />
              </div>
              <div className="form-group">
                <label htmlFor="add">Add:</label>
                <input
                  type="Add"
                  className="form-control"
                  id="add"
                  placeholder="Enter Add"
                  name="add"
                />
              </div>
            </form>
            <h3>Right</h3>
            <form className="form-inline" action="/action_page.php">
              <div className="form-group">
                <label htmlFor="Power">Power:</label>
                <input
                  type="Power"
                  className="form-control"
                  id="Power"
                  placeholder="Enter Power"
                  name="Power"
                />
              </div>
              <div className="form-group">
                <label htmlFor="cylinder">Cylinder:</label>
                <input
                  type="Cylinder"
                  className="form-control"
                  id="cylinder"
                  placeholder="Enter Cylinder"
                  name="cylinder"
                />
              </div>
              <div className="form-group">
                <label htmlFor="Axis">Axis:</label>
                <input
                  type="Axis"
                  className="form-control"
                  id="Axis"
                  placeholder="Enter Axis"
                  name="Axis"
                />
              </div>
              <div className="form-group">
                <label htmlFor="add">Add:</label>
                <input
                  type="Add"
                  className="form-control"
                  id="add"
                  placeholder="Enter Add"
                  name="add"
                />
              </div>
            </form>
          </div>
          <hr />
          <br />
          <div className="container opt">
            <div className="row" style={{ padding: "30px" }}>
              <div className="col-md-4 col-sm-12 col-lg-4">
                {/* Image */}
                <div className="container">
                  <img src="images/test-image.PNG" className="img-fluid" />
                  <p>* Please select a lens</p>
                </div>
              </div>
              <br />
              <br />
              <div className="col-md-2 col-sm-12 col-lg-2">
                <input
                  type="checkbox"
                  id="transistions"
                  name="transistions"
                  defaultValue="Transitions"
                />
                <label htmlFor="transistions"> Transitions</label>
                <br />
                <br />
                <label>
                  <b>Multi Focal Lenses</b>
                </label>
              </div>
              <div className="col-md-2 col-sm-12 col-lg-2">
                <input
                  type="checkbox"
                  id="Thinner lens"
                  name="Thinner lens"
                  defaultValue="Bike"
                />
                <label htmlFor="Thinner lens"> Thinner lens</label>
                <br />
                <br />
                <form>
                  <div className="row">
                    <div className="col-sm-7 col-md-6 col-lg-5">
                      <div className="form-group">
                        <label htmlFor="file" className="sr-only">
                          File
                        </label>
                        <select>
                          <option value="Distance Only">Select</option>
                          <option value>Distance Only</option>
                          <option value>Reading Only</option>
                          <option value>Computer Only</option>
                          <option value>Progressive</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-md-2 col-sm-12 col-lg-2">
                <br />
              </div>
              <div className="col-md-2 col-sm-12 col-lg-2"></div>
            </div>
            <hr />
            <div className="row" style={{ padding: "30px" }}>
              <div className="col-md-4 col-sm-12 col-lg-4">
                {/* Image */}
                <div className="container">
                  <img src="images/test-image.PNG" className="img-fluid" />
                  <p>* Please select a lens</p>
                </div>
              </div>
              <br />
              <br />
              <div className="col-md-2 col-sm-12 col-lg-2">
                <input
                  type="checkbox"
                  id="transistions"
                  name="transistions"
                  defaultValue="Transitions"
                />
                <label htmlFor="transistions"> Transitions</label>
                <br />
                <br />
                <label>
                  <b>Multi Focal Lenses</b>
                </label>
              </div>
              <div className="col-md-2 col-sm-12 col-lg-2">
                <input
                  type="checkbox"
                  id="Thinner lens"
                  name="Thinner lens"
                  defaultValue="Bike"
                />
                <label htmlFor="Thinner lens"> Thinner lens</label>
                <br />
                <br />
                <form>
                  <div className="row">
                    <div className="col-sm-7 col-md-6 col-lg-5">
                      <div className="form-group">
                        <label htmlFor="file" className="sr-only">
                          File
                        </label>
                        <select>
                          <option value="Distance Only">Select</option>
                          <option value>Distance Only</option>
                          <option value>Reading Only</option>
                          <option value>Computer Only</option>
                          <option value>Progressive</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-md-2 col-sm-12 col-lg-2">
                <br />
              </div>
              <div className="col-md-2 col-sm-12 col-lg-2"></div>
            </div>
            <hr />
            <div className="row" style={{ padding: "30px" }}>
              <div className="col-md-4 col-sm-12 col-lg-4">
                {/* Image */}
                <div className="container">
                  <img src="images/test-image.PNG" className="img-fluid" />
                  <p>* Please select a lens</p>
                </div>
              </div>
              <br />
              <br />
              <div className="col-md-2 col-sm-12 col-lg-2">
                <input
                  type="checkbox"
                  id="transistions"
                  name="transistions"
                  defaultValue="Transitions"
                />
                <label htmlFor="transistions"> Transitions</label>
                <br />
                <br />
                <label>
                  <b>Multi Focal Lenses</b>
                </label>
              </div>
              <div className="col-md-2 col-sm-12 col-lg-2">
                <input
                  type="checkbox"
                  id="Thinner lens"
                  name="Thinner lens"
                  defaultValue="Bike"
                />
                <label htmlFor="Thinner lens"> Thinner lens</label>
                <br />
                <br />
                <form>
                  <div className="row">
                    <div className="col-sm-7 col-md-6 col-lg-5">
                      <div className="form-group">
                        <label htmlFor="file" className="sr-only">
                          File
                        </label>
                        <select>
                          <option value="Distance Only">Select</option>
                          <option value>Distance Only</option>
                          <option value>Reading Only</option>
                          <option value>Computer Only</option>
                          <option value>Progressive</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-md-2 col-sm-12 col-lg-2">
                <br />
              </div>
              <div className="col-md-2 col-sm-12 col-lg-2"></div>
            </div>
            <hr />
            <div className="container">
              <a href="cart.html">
                <button
                  className="btn btn-primary"
                  style={{
                    width: "100%",
                    textAlign: "center",
                    padding: "10px",
                  }}
                >
                  Continue to check out
                </button>
              </a>
            </div>
          </div>
        </main>
      </div>
      {/* End main */}
      <br />
      <br />

      {/* End .page-wrapper */}
      <button id="scroll-top" title="Back to Top">
        <i className="icon-arrow-up" />
      </button>
    </div>
  );
}

export default ShopPage;
