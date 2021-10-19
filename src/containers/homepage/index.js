import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <div className="page-wrapper">
        <div
          className="sec1"
          style={{ height: "680px", width: "100% !important" }}
        >
          {/* Index Section */}
          <div
            className="navbar navbar-expand-sm bg-dark navbar-dark"
            style={{
              backgroundColor: "rgba(18,180,139,255) !important",
              textAlign: "center !important",
              width: "100%",
            }}
          >
            <ul
              className="navbar-nav mb"
              style={{
                fontSize: "16px",
                width: "100% !important",
                marginLeft: "33%",
              }}
            >
              <li className="nav-item dropdown"></li>
            </ul>
          </div>
          <div className="secOne" style={{ width: "95%" }}>
            <div className="row " style={{ padding: "30px", height: "10px" }}>
              <div className="col-lg-6 col-md-12 col-sm-12" />
              <div className="col-lg-6 col-md-12 col-sm-12 abc">
                <div
                  className="camera"
                  style={{
                    padding: "15px",
                    height: "450px",
                    backgroundColor: "rgb(245, 244, 244)",
                    boxShadow: "0px 0px 5px 1px rgb(165, 165, 165)",
                  }}
                ></div>
                <p
                  className="remv"
                  style={{
                    backgroundColor: "#204066",
                    color: "white",
                    padding: "10px",
                  }}
                >
                  Once you have selected the frames you would like. Please click
                  below to Enter your Prescription details.
                </p>
                <a href="RX Page.html">
                  <br />
                  <button
                    type="button"
                    className="btn btn-primary epBtn"
                    style={{ backgroundColor: "#12b48b !important" }}
                  >
                    Enter Prescription Details
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
      {/* End .page-wrapper */}
      <button id="scroll-top" title="Back to Top">
        <i className="icon-arrow-up" />
      </button>
    </div>
  );
}

export default HomePage;
