import React from 'react'
import Image from 'next/image'
import { FaReact, FaJsSquare, FaHtml5, FaNodeJs, FaCss3Alt } from 'react-icons/fa'
import { SiFirebase, SiNextdotjs, SiMongodb, SiBootstrap, SiMicrosoftazure, SiMui, SiPython } from 'react-icons/si'
import { GrMysql } from 'react-icons/gr'

export default function index() {
  return (
    <>
      <div className="container-fluid ptb-50  bg-grlite">
        <div className="row px-4 text-center">
          <h1 className='text-danger'>ESG CARBON RWA</h1>
          <h5>Carbon Token on Blockchain</h5>
        </div>

        <div className="container">

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className=" row justify-content-center text-center">
                <div className="mt-4 col-lg-5">
                  <Image src="/green.jpg" alt="esg" height={400} width={400} className="img-adjust" />
                </div>
                <div className="col-lg-7">
                  <div className="mt-4 text-justify px-3">
                    <p className='lead'>
                      <b>OBJECTIVE :</b> A comprehensive web3 platform that enables everyone to seamlessly contribute to the environment by offsetting their carbon emissions and rewards their efforts with utility tokens in the form of unique NFTs.
                    </p>
                    <p className='lead'>
                      <b>HOW WE DID IT :</b> We througly research the off-chain process of carbon credits and how carbon credits trading take place and bring the same platform on Blockchain. We created carbon credits tokens on Blockchain and then used them to trade the carbon projects.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-5 row text-justify lead px-4">
                <ol>
                  <li><strong>Blockchain Technology : </strong>First of it's kind carbon tokenization on Polygon blockchain from vicarious platforms such as Verra, UniversalCarbonRegistry ( UCR) , Gold Standards Etc. </li>
                  <li><strong>Emission Calculator : </strong>Customised Carbon Emission Calculator that follows standard norms. </li>
                  <li><strong>Reward Program : </strong>Rewards for offsetting carbon emission , in form of NFTs which users can utilize to avail discounts from various partners.</li>
                  <li><strong>ESG Token : </strong>Dedicated Web3 Digital Token for purchasing and seamless transition for purchasing & offsetting Carbon Credit.</li>
                  <li><strong>Proof of Offset : </strong>Certificate of Appreciation for contributing towards greener earth.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}