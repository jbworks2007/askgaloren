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
          <h1 className='text-danger'>JOCKY BOA BOXER CLUB</h1>
          <h5>Transform yourself into an NFT</h5>
        </div>

        <div className="container">

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className=" row justify-content-center text-center">
                <div className="mt-4 col-lg-5">
                  <Image src="/jbbc.webp" alt="jbbc" height={400} width={400} className="img-adjust" />
                </div>
                <div className="col-lg-7">
                  <div className="mt-4 text-justify align-content-center px-3">
                    <p className='lead'>
                      <b>OBJECTIVE :</b> To provide JBBC NFT collectors with an innovative and engaging experience by enabling them to create their own personalized Jocky Boa Transformer NFT Avatar (JBBC-T).
                    </p>
                    <p className='lead'>
                      <b>HOW WE DID IT :</b> To create the Jocky Boa Boxer Club NFT collection, we minted 10,000 NFTs on Polygon and Ethereum chains. Owners of JBBC NFTs can create their own personalized JBBC-T NFT Avatars using AI tools on our website, which was built using React Js and Node Js with a MySQL database.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-5 row text-justify lead px-4">
                To create the Jocky Boa Boxer Club (JBBC) NFT collection and enable the creation of personalized Jocky Boa Transformer NFT Avatars (JBBC-T), we took the following steps:
                <ol>
                  <li>We minted 10,000 JBBC NFTs on both the Polygon and Ethereum blockchains to ensure wider accessibility and flexibility for the collectors.</li>
                  <li>We developed a feature that allows owners of JBBC NFTs to create their own JBBC-T NFTs using their NFTs as a basis. This was done to provide a more engaging and personalized experience for collectors, making the JBBC NFTs more valuable and unique.</li>
                  <li>To enable the creation of customized JBBC-T NFTs, we utilized AI tools to convert users' face images into cool Transformer NFT Avatars. We developed a website using React Js and Node Js, with a MySQL database to store user data and NFTs. This technology was created to enhance the collectability of the JBBC NFTs and create a new and innovative experience for the collectors.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}
