import React from 'react'
import { FaProjectDiagram } from "react-icons/fa";

export default function index() {
  return (
    <>
      <div className="banner-area-two">
        <div className="container p-5">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <h1 className="heading-styles1 "><a style={{ textDecoration: "none", color: "#000" }}  href="https://danceask.net/" target='_blank'>DANCE ASK</a></h1>
            </div>
          </div>
        </div>  
      </div>
   
     <div className="container">
     <div className="row">
        <div className="col-lg-6 ">
        <img width="100%" src="DAN.webp" alt="Images" />
        </div>
        <div className="col-lg-6  ">
        <p className="lead3">Reviving dance from its roots – get detailed descriptions on various dance forms, their origin and importance to a particular community through structured blogs. Dance enthusiasts can find well researched information on any dance form that intrigues them the most. Every dance form has a story – through which it travels across regions. DanceAsk brings these stories to your screens after thorough research and provides your information on the most distant dance forms.</p>
                        <button type="button" class="button btn1">
                        <a style={{ textDecoration: "none", color: "#fff" }}  href="https://danceask.net/" target="_blank">
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
