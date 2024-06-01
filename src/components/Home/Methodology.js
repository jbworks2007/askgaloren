import Image from 'next/image'
import React from 'react'
import img1 from '../../../public/marketing.jpg'
import img2 from '../../../public/design.jpg'
import img3 from '../../../public/technology.jpg'

export default function Methodology() {
  return (
    <>
      <div className="container-fluid ptb-50 bg-themeblue text-light">
        <div className="row justify-content-center px-3">
          <h1 className="text-center">ASKGALORE METHODOLOGY</h1>
          <div className="col-lg-10 col-md-12">
            <p className='lead text-justify'>
              Our success lies in your success! Right from ideation, research, its solutions to building and marketing the product for you – we stand by our clients!
              <br></br><br></br>
              With high focus on delivering the right results, our team is obliged to help you reach your target
              audience. We undertake the responsibility to assist you with achieving your marketing goals –
              however far and high – such as brand exposure, lead generation or website traffic, by
              developing world class digital experiences. Through the diverse perspectives and experiences
              of our squad, we unite to grow your company from basic brand strategies to web development
              and digital marketing vividly.
            </p>
            <div className="row justify-content-center g-2">
              <div className="col-lg-4 col-md-4">
                <div class="card-back-image md-adj-2">
                  <Image className='zoomer' src={img1} alt="Marketing" style={{ width: "100%", height: "100%" }} />
                  <h1 className='high-text'>MARKETING</h1>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div class="card-back-image md-adj-2">
                  <Image className='zoomer' src={img2} alt="design" style={{ width: "100%", height: "100%" }} />
                  <h1 className='high-text'>DESIGN</h1>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div class="card-back-image md-adj-2">
                  <Image className='zoomer' src={img3} alt="technology" style={{ width: "100%", height: "100%" }} />
                  <h1 className='high-text'>TECHNOLOGY</h1>
                </div>
              </div>
            </div>
            <p className='mt-3 lead text-justify'>
              Our talented website designers, graphic artists, content writers, programmers, and digital marketing experts are all dedicated to making your brand successful. We build products that thrive at the intersection of business goals and user needs combining both to curate a product that best fits the requisites.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
