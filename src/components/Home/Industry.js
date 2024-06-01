import Link from 'next/link'
import React from 'react'

export default function Industry() {
  return (
    <>
      <div className="container ptb-50">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="heading-styles1 mb-4">INDUSTRIES</h1>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <Link href="healthcare" className='btn' type='button'>
                  <div class="low-card">
                    <img src="/healthcare.jpg" class="card-img-top" alt="..." />
                    <div class="low-card-body">
                      <h5 class="low-card-title">HEALTHCARE</h5>
                      <p class="low-card-text">
                        Software and digital solutions for healthcare and telemedicine service providers to meet the needs of the new normal.
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 col-md-6">
                <Link href="real-estate1" className='btn' type='button'>
                  <div class="low-card">
                    <img src="/realestate.jpg" class="card-img-top" alt="..." />
                    <div class="low-card-body">
                      <h5 class="low-card-title">REAL ESTATE</h5>
                      <p class="low-card-text">
                        Real estate is real wealth! Assisting with software solutions & digital marketing for commercial and residential real estate.
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 col-md-6">
                <Link href="#" className='btn' type='button'>
                  <div class="low-card">
                    <img src="/logistics.jpg" class="card-img-top" alt="..." />
                    <div class="low-card-body">
                      <h5 class="low-card-title">LOGISTICS</h5>
                      <p class="low-card-text">
                        We 'deliver the goods' on custom software development and digital marketing for our logistics industry clients.
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 col-md-6">
                <Link href="agriculture" className='btn' type='button'>
                  <div class="low-card">
                    <img src="/agriculture.jpg" class="card-img-top" alt="..." />
                    <div class="low-card-body">
                      <h5 class="low-card-title">AGRICULTURE</h5>
                      <p class="low-card-text">
                        Branding, e-commerce, or inventory management whatever the need be, we love getting creative with farm and dairy!
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 col-md-6">
                <Link href="education" className='btn' type='button'>
                  <div class="low-card">
                    <img src="/education.jpg" class="card-img-top" alt="..." />
                    <div class="low-card-body">
                      <h5 class="low-card-title">EDUCATION</h5>
                      <p class="low-card-text">
                        Online classes, live interactive sessions, video calls, student on-boarding: you name it and we have you covered!
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 col-md-6">
                <Link href="fintech" className='btn' type='button'>
                  <div class="low-card">
                    <img src="/fintech.jpg" class="card-img-top" alt="..." />
                    <div class="low-card-body">
                      <h5 class="low-card-title">FINTECH</h5>
                      <p class="low-card-text">
                        From mobile apps to brand campaigns, CRM to blockchain solutions - you can count on us while you focus on the core.
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
