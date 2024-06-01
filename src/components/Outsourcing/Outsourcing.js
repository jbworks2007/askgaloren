import React from 'react'
import Image from 'next/image'
import img2 from '../../../public/itos-design.png'

export default function Outsourcing() {
  return (
    <>
      <section className='bg-grlite'>
        <div className="container ptb-25">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="row justify-content-center">
                <div className="col-lg-8 mt-5">
                  <h2 className='text-center'>IT Outsourcing Services in India</h2>
                  <p className='text-justify px-3 lead'>Discover top-notch IT Outsourcing Services in India through Askgalore’s efficient and reliable IT offshoring vertical. Our commitment to delivering exceptional results is complemented by our ability to provide developers on demand rapidly. Benefit from our IT Staff Augmentation Services, ensuring a seamless and efficient collaboration with our talented professionals based in India. Experience the assurance of timely project completion and exceptional service quality by partnering with us.</p>
                </div>
                <div className="col-lg-4">
                  <Image src={img2} width={400} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
