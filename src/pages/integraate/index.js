import React from 'react'
import { FaProjectDiagram } from "react-icons/fa";

export default function index() {
  return (
    <>
      <div className="banner-area-two">
        <div className="container p-5">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <h1 className="heading-styles1 "><a style={{ textDecoration: "none", color: "#000" }}  href="https://www.integraate.com/" target='_blank'>INTEGRAATE</a></h1>
            </div>
          </div>
        </div>  
      </div>
   
     <div className="container">
     <div className="row">
        <div className="col-lg-6 ">
        <img width="100%" src="int.webp" alt="Images" />
        </div>
        <div className="col-lg-6  ">
        <p className="lead3"><strong>Integraate</strong>  Innovations is a company providing high tech services and specializes in innovative digital transformations that reduce costs, improve productivity and accelerate time to market. Integraate offers IT solutions that take a unique human-centric approach to data analytics, mobility, cloud and social media to ensure client success and customer satisfaction.</p>
                        <button type="button" class="button btn1">
                        <a style={{ textDecoration: "none", color: "#fff" }}  href="https://www.integraate.com/" target="_blank">
                        VISIT WEBSITE</a>
                          
                        </button>
        </div>
     </div>
     </div>


     <div
        className="container-fluid mt-5"
        style={{ background: "#003961", textAlign: "center" }}
      >
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="">
              <div className="banner-item">
                <div className="banner-item-img">
                  <div className="banner-shape">
                    <div className="shape-in1">
                      <img
                        width="100%"
                        src="headway.webp"
                        alt="Images"
                      />
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
                      <h1 style={{ color: "#fff" }}>
                        A good impression for your company is a necessity for
                        ours!
                      </h1>
                      <br />
                      <button type="button" class="button3 button1 button-wrapper">
                       

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
  )
}
