import React from 'react'
import Image from 'next/image'
import { FaReact, FaJsSquare, FaHtml5, FaNodeJs, FaCss3Alt } from 'react-icons/fa'
import { SiFirebase, SiNextdotjs, SiMongodb, SiBootstrap, SiMicrosoftazure, SiMui, SiPython } from 'react-icons/si'
import { GrMysql } from 'react-icons/gr'
import ComingSoon from '@/components/Misc/ComingSoon'

export default function index() {
  return (
    <>
      <div className="container-fluid ptb-50  bg-grlite">
        <div className="row px-4 text-center">
          <h1 className='text-danger'>TRAVICTIONARY</h1>
          <h5>ERC 1155 NFT Tokens</h5>
        </div>

        <div className="container">

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className=" row justify-content-center text-center">
                <div className="mt-4 col-lg-5">
                  <Image src="/Travictionary.webp" alt="Travictionary" height={400} width={400} className="img-adjust" />
                </div>
                <div className="col-lg-7">
                  <div className="mt-4 text-justify px-3">
                    <p className='lead'>
                      <b>OBJECTIVE :</b> To offers an exclusive community for the seeker who loves to explore our mother nature - EARTH. Both artists and collectors are assured the best user experience possible.
                    </p>
                    <p className='lead'>
                      <b>HOW WE DID IT :</b> Travictionary is the key to unlocking Web 3.0's vast new universe of limitless possibilities and new experiences “Traveling and Exploring”. Travictionary allows for the creation of one-of-a-kind NFTs (buying and selling).
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-5 row text-justify lead px-4">
                <ComingSoon />
              </div>
            </div>

          </div>
        </div>
      </div >
    </>
  )
}
