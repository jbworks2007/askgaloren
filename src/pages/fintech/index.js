import React from "react";
import { FaProjectDiagram } from "react-icons/fa";

export default function index() {
  return (
    <>
      <div className="banner-area-two">
        <div className="container p-5">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <h1 className="heading-styles1">FINTECH</h1>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid mt-2 p-4"
        style={{ background: "#bdc9e0fc" }}
      >
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="">
              <div className="banner-item">
                <div className="banner-item-img">
                  <div className="banner-shape">
                    <div className="shape-in1">
                      <p className="lead">
                      We understand the angst associated with financial management – hence we strive to provide sound and secure financial solutions that integrate managing your finances with technology with the aim of stringent handling of business and its accounts.
                      </p>
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="">
              <div className="banner-item">
                <div className="banner-item-img">
                  <div className="banner-shape">
                    <div className="shape-in1">
                      <img width="100%" src="Fintech.webp" alt="Images" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid mt-2 p-4"
        style={{ background: "#bdc9e0fc" }}
      >
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="">
              <div className="banner-item">
                <div className="banner-item-img">
                  <div className="banner-shape">
                    <div className="shape-in1">
                      <img width="100%" src="Fintech1.webp" alt="Images" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="">
              <div className="banner-item">
                <div className="banner-item-img">
                  <div className="banner-shape">
                    <div className="shape-in1">
                      <p className="lead">
                      As entrepreneurs it’s vital to have efficient services that securely help manage the finances of a business account; easier so if it involves technology. AskGalore provides third party services for methodical, orderly and legal practices on managing the finance accounts.
                      </p>
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid mt-2"
        style={{ background: "#003961", textAlign: "center" }}
      >
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="">
              <div className="banner-item">
                <div className="banner-item-img">
                  <div className="banner-shape">
                    <div className="shape-in1">
                      <img width="100%" src="headway.webp" alt="Images" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="">
              <div className="banner-item">
                <div className="banner-item-img">
                  <div className="banner-shape">
                    <div className="shape-in1">
                      <h2 style={{ color: "#fff" }}>
                      A good impression for your company is a necessity for
                        ours!
                      </h2>
                      <br />
                      <button type="button" class="button3 button1">
                      Start Your Own Project <FaProjectDiagram />
                      </button>
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
