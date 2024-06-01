import Image from "next/image"
import React from "react"
import { GiArchiveResearch } from 'react-icons/gi'
import { IoMdAnalytics } from 'react-icons/io'
import { SiAffinitydesigner } from 'react-icons/si'
// import {GiArchiveResearch} from 'react-icons/gi'
// import {GiArchiveResearch} from 'react-icons/gi'

export default function LowerSection() {
  return (
    <>
      <div className="container-fluid">
        <div className="row ">
          <h1 className='color-softbalck text-center'>YOUR CRUISE WITH US</h1>
          <div className="bg-dark py-5 ">
            <div className="col-lg-10 mx-auto">
              <div className="row mx-auto">
                <div className="col-sm-4 d-flex">
                  <div className='text-white text-center px-5'>
                    <Image className="img-fluid" src="/research-300x300.png" width={100} height={100} alt="research" />
                    <h3 className='mt-2'>Research</h3>
                  </div>
                  <div className='text-white text-center px-5'>
                    <Image className="img-fluid" src="/analysis-image-300x300.png" width={100} height={100} alt="analysis" />
                    <h3 className='mt-2'>Analysis</h3>
                  </div>
                </div>
                <div className="col-sm-4 d-flex">
                  <div className='text-white text-center px-5'>
                    <Image className="img-fluid" src="/design-image-300x300.png" width={100} height={100} alt="design" />
                    <h3 className='mt-2'>Design</h3>
                  </div>
                  <div className='text-white text-center px-5'>
                    <Image className="img-fluid" src="/user-testing-image-300x300.png" width={100} height={100} alt="user-testing" />
                    <h3 className='mt-2'>User Testing</h3>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className='text-white text-center px-5'>
                    <Image className="img-fluid" src="/happy-image-300x300.png" width={100} height={100} alt="happy" />
                    <h3 className='mt-2'>Happy Clients</h3>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="conatiner mt-5">
        <div className="row justify-content-center">
          <h1 className='color-softbalck text-center'>MEET OUR REGULARS</h1>
          <div className="col-lg-5">
            <Image className="img-fluid" src="/left.jpg" width={560} height={730} alt="left" />
          </div>
          <div className="col-lg-5">
            <Image className="img-fluid" src="/right.png" width={560} height={729} alt="left" />
          </div>
        </div>
      </div>
    </>
  )
}