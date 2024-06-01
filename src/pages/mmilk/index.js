import React from 'react'
import { FaProjectDiagram } from "react-icons/fa";

export default function index() {
  return (
    <>
      <div className="banner-area-two">
        <div className="container p-5">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <h1 className="heading-styles1 "><a style={{ textDecoration: "none", color: "#000" }}  href="https://mmilk.in/" target='_blank'>MMILK</a></h1>
            </div>
          </div>
        </div>  
      </div>
   
     <div className="container">
     <div className="row">
        <div className="col-lg-6 ">
        <img width="100%" src="MMilk.webp" alt="Images" />
        </div>
        <div className="col-lg-6  ">
        <p className="lead3">An establishment specializing in producing and processing several litres of milk in a day – Mmilk uses 100% organic milk for all their products. A dairy farm that believes in the concept of “100% fresh cow milk”. Mmilk is dedicated to propagating healthy living by means of refusing synthetic products and promoting completely natural and organic dairy products. One of Uttarakhand’s largest dairy farms, Milk aims at reaching every household in order to provide organic milk and milk products at their doorstep.</p>
                        <button type="button" class="button btn1 mt-4">
                        <a style={{ textDecoration: "none", color: "#fff" }}  href="https://mmilk.in/" target="_blank">
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
