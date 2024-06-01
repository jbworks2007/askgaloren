import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import usa from '../../../public/flags/us.svg'
import can from '../../../public/flags/ca.svg'
import sig from '../../../public/flags/sg.svg'
import aus from '../../../public/flags/au.svg'
import grb from '../../../public/flags/gb.svg'
import nzl from '../../../public/flags/nz.svg'
import den from '../../../public/flags/dk.svg'
import swe from '../../../public/flags/se.svg'
import swi from '../../../public/flags/ch.svg'
import nor from '../../../public/flags/no.svg'
import bel from '../../../public/flags/be.svg'
import nel from '../../../public/flags/nl.svg'

export default function Countries() {
  return (
    <>
      <div className="mt-5 mx-auto">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="row px-4 g-4">
              <div className="col-12 col-md-4 d-flex justify-content-center gap-4">
                <Link className='td-none' href='/it-outsourcing-services-for-usa' target="_blank">
                  <div className="card-two">
                    <Image className='mt-3 scale-eff' src={usa} width={70} />
                    <div className='mt-3 sub-text2'>United States</div>
                  </div>
                </Link>
                <Link className='td-none' href='/it-outsourcing-services-for-canada' target="_blank">
                  <div className="card-two">
                    <Image className='mt-3 scale-eff' src={can} width={70} />
                    <div className='mt-3 sub-text2'>Canada</div>
                  </div>
                </Link>
              </div>
              <div className="col-12 col-md-4 d-flex justify-content-center gap-4">
                <Link className='td-none' href='/it-outsourcing-services-for-singapore' target="_blank">
                  <div className="card-two">
                    <Image className='mt-3 scale-eff' src={sig} width={70} />
                    <div className='mt-3 sub-text2'>Singapore</div>
                  </div>
                </Link>
                <Link className='td-none' href='/it-outsourcing-services-for-australia' target="_blank">
                  <div className="card-two">
                    <Image className='mt-3 scale-eff' src={aus} width={70} />
                    <div className='mt-3 sub-text2'>Australia</div>
                  </div>
                </Link>
              </div>
              <div className="col-12 col-md-4 d-flex justify-content-center gap-4">
                <Link className='td-none' href='/it-outsourcing-services-for-united-kingdom' target="_blank">
                  <div className="card-two">
                    <Image className='mt-3 scale-eff' src={grb} width={70} />
                    <div className='mt-3 sub-text2'>United Kingdom</div>
                  </div>
                </Link>
                <Link className='td-none' href='/it-outsourcing-services-for-new-zealand' target="_blank">
                  <div className="card-two">
                    <Image className='mt-3 scale-eff' src={nzl} width={70} />
                    <div className='mt-3 sub-text2'>New Zealand</div>
                  </div>
                </Link>
              </div>
              <div className="col-12 col-md-4 d-flex justify-content-center gap-4">
                <Link className='td-none' href='/it-outsourcing-services-for-denmark' target="_blank">
                  <div className="card-two">
                    <Image className='mt-3 scale-eff' src={den} width={70} />
                    <div className='mt-3 sub-text2'>Denmark</div>
                  </div>
                </Link>
                <Link className='td-none' href='/it-outsourcing-services-for-sweden' target="_blank">
                  <div className="card-two">
                    <Image className='mt-3 scale-eff' src={swe} width={70} />
                    <div className='mt-3 sub-text2'>Sweden</div>
                  </div>
                </Link>
              </div>
              <div className="col-12 col-md-4 d-flex justify-content-center gap-4">
                <Link className='td-none' href='/it-outsourcing-services-for-switzerland' target="_blank">
                  <div className="card-two">
                    <Image className='mt-3 scale-eff' src={swi} width={70} />
                    <div className='mt-3 sub-text2'>Switzerland</div>
                  </div>
                </Link>
                <Link className='td-none' href='/it-outsourcing-services-for-norway' target="_blank">
                  <div className="card-two">
                    <Image className='mt-3 scale-eff' src={nor} width={70} />
                    <div className='mt-3 sub-text2'>Norway</div>
                  </div>
                </Link>
              </div>
              <div className="col-12 col-md-4 d-flex justify-content-center gap-4">
                <Link className='td-none' href='/it-outsourcing-services-for-belgium' target="_blank">
                  <div className="card-two">
                    <Image className='mt-3 scale-eff' src={bel} width={70} />
                    <div className='mt-3 sub-text2'>Belgium</div>
                  </div>
                </Link>
                <Link className='td-none' href='/it-outsourcing-services-for-netherlands' target="_blank">
                  <div className="card-two">
                    <Image className='mt-3 scale-eff' src={nel} width={70} />
                    <div className='mt-3 sub-text2'>Netherlands</div>
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
