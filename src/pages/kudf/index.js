import React from 'react'
import { FaProjectDiagram } from "react-icons/fa";

export default function index() {
  return (
    <>
      <div className="banner-area-two">
        <div className="container p-5">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <h1 className="heading-styles1 "><a style={{ textDecoration: "none", color: "#000" }}  href="https://kudf.in/" target='_blank'>KUDF</a></h1>
            </div>
          </div>
        </div>  
      </div>
   
     <div className="container">
     <div className="row">
        <div className="col-lg-6 ">
        <img width="100%" src="KUDF.webp" alt="Images" />
        </div>
        <div className="col-lg-6  ">
        <p className="lead3">A private organic dairy farm – the largest in Uttarakhand – Kudf is dedicated to delivering dairy products processed from 100% organic, unadulterated cow milk.</p>
        <p className="lead3">The central idea of the establishment is to deliver premium quality products. Similar to Mmilk, Kudf also promotes a healthy life by providing natural and organic products all over Uttarakhand and reducing reliance on synthetic produce.</p>            
                        <button type="button" class="button btn1 mt-4">
                        <a style={{ textDecoration: "none", color: "#fff" }}  href="https://kudf.in/" target="_blank">
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
