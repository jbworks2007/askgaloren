import React from 'react'
import Image from 'next/image'
import img4 from '../../../public/contact-plane.webp'
import { FaMailBulk, FaPhoneVolume } from 'react-icons/fa'
import ContactForm from '@/components/Misc/ContactForm'

export default function FormOutsource() {
  return (
    <>
      <section>
        <div className="container ptb-50">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="row justify-content-center">
                <div className="col-lg-6">
                  <div className="bg-darkblue ptb-50 text-white px-4">
                    <h2 className='text-center'>Why wait? <br></br>Let's get started!</h2>
                    <div className="d-flex py-5">
                      <div className='text-danger'><FaMailBulk size={70} /></div>
                      <div className='px-3'>MAIL TO OUR SALES DEPARTMENT<br></br> INFO@AGOMIC.COM</div>
                    </div>
                    <div className="d-flex py-3">
                      <div className='text-danger'><FaPhoneVolume size={70} /></div>
                      <div className='px-3'>PLEASE CONTACT US AT<br></br>+ 31 636079961 / +91 7974442814</div>
                    </div>
                    <div className="d-flex py-3 justify-content-end">
                      <Image src={img4} />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 border-1">
                  <h1 className='mt-3 text-center'>Let's do great work together!</h1>
                  <div className="p-2">
                    <ContactForm />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
