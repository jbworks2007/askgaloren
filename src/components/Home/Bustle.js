import React from "react";
import { useEffect } from "react";

export default function Bustle() {

  useEffect(() => {
    let items = document.querySelectorAll('.carousel .carousel-item')

    items.forEach((el) => {
      const minPerSlide = 4
      let next = el.nextElementSibling
      for (var i = 1; i < minPerSlide; i++) {
        if (!next) {
          // wrap carousel by using first child
          next = items[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
      }
    })

  }, []);


  return (
    <>
      <div className="container text-center ptb-50">
        <div class="container text-center my-3">
          <h1 class="font-weight-light">OUR BUSTLE INCLUDES</h1>
          <div class="row mx-auto my-auto justify-content-center">
            <p class="lead text-justify">
              We provide the perfect blend of blockchain development services to build outstanding DApp products for you!
              Owing to the highly specialized team of Creative Designers, experienced Developers, proactive Project Managers & efficient Digital Marketers – we work to deliver the best in the space of DApp and NFT Development.
            </p>
            <div id="recipeCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-pause="false" data-bs-touch="true">
              <div class="carousel-inner" role="listbox">
                <div class="carousel-item active" data-bs-interval="4000">
                  <div class="col-md-3">
                    <div class="crousel-card">
                      <div class="card-img">
                        <img src="/01.jpg" class="img-fluid" />
                      </div>
                      {/* <div class="card-img-overlay">Slide 1</div> */}
                    </div>
                  </div>
                </div>
                <div class="carousel-item" data-bs-interval="4000">
                  <div class="col-md-3">
                    <div class="crousel-card">
                      <div class="card-img">
                        <img src="/02.jpg" class="img-fluid" />
                      </div>
                      {/* <div class="card-img-overlay">Slide 2</div> */}
                    </div>
                  </div>
                </div>
                <div class="carousel-item" data-bs-interval="4000">
                  <div class="col-md-3">
                    <div class="crousel-card">
                      <div class="card-img">
                        <img src="/03.jpg" class="img-fluid" />
                      </div>
                      {/* <div class="card-img-overlay">Slide 3</div> */}
                    </div>
                  </div>
                </div>
                <div class="carousel-item" data-bs-interval="4000">
                  <div class="col-md-3">
                    <div class="crousel-card">
                      <div class="card-img">
                        <img src="/04.png" class="img-fluid" />
                      </div>
                      {/* <div class="card-img-overlay">Slide 4</div> */}
                    </div>
                  </div>
                </div>
                <div class="carousel-item" data-bs-interval="4000">
                  <div class="col-md-3">
                    <div class="crousel-card">
                      <div class="card-img">
                        <img src="/05.png" class="img-fluid" />
                      </div>
                      {/* <div class="card-img-overlay">Slide 5</div> */}
                    </div>
                  </div>
                </div>
                <div class="carousel-item" data-bs-interval="4000">
                  <div class="col-md-3">
                    <div class="crousel-card">
                      <div class="card-img">
                        <img src="/06.png" class="img-fluid" />
                      </div>
                      {/* <div class="card-img-overlay">Slide 6</div> */}
                    </div>
                  </div>
                </div>
                <div class="carousel-item" data-bs-interval="4000">
                  <div class="col-md-3">
                    <div class="crousel-card">
                      <div class="card-img">
                        <img src="/07.png" class="img-fluid" />
                      </div>
                      {/* <div class="card-img-overlay">Slide 6</div> */}
                    </div>
                  </div>
                </div>
                <div class="carousel-item" data-bs-interval="4000">
                  <div class="col-md-3">
                    <div class="crousel-card">
                      <div class="card-img">
                        <img src="/08.jpg" class="img-fluid" />
                      </div>
                      {/* <div class="card-img-overlay">Slide 6</div> */}
                    </div>
                  </div>
                </div>
                <div class="carousel-item" data-bs-interval="4000">
                  <div class="col-md-3">
                    <div class="crousel-card">
                      <div class="card-img">
                        <img src="/09.jpg" class="img-fluid" />
                      </div>
                      {/* <div class="card-img-overlay">Slide 6</div> */}
                    </div>
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev bg-transparent w-aut" href="#recipeCarousel" role="button" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              </a>
              <a class="carousel-control-next bg-transparent w-aut" href="#recipeCarousel" role="button" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
              </a>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}