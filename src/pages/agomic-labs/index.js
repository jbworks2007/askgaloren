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
          <h1 className='text-danger'>AGOMIC LABS</h1>
          <h5>One-stop-shop for Blockchain APIs, Tools & Services</h5>
        </div>

        <div className="container">

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className=" row justify-content-center text-center">
                <div className="mt-4 col-lg-5">
                  <Image src="/agomic-labs.png" alt="agomic-labs" height={400} width={400} className="img-adjust" />
                </div>
                <div className="col-lg-7">
                  <div className="mt-4 text-justify px-3">
                    <p className='lead'>
                      <b>OBJECTIVE :</b> To create a comprehensive platform that offers a wide range of blockchain-related solutions and services, including but not limited to NFT marketplaces, DeFi protocols, Dapps, and DAOs, to cater to the needs of individuals and organizations in the blockchain industry.
                    </p>
                    <p className='lead'>
                      <b>HOW WE DID IT :</b> We identified the need for NFT-related solutions and services, assembled a team of experts, and conducted extensive research and development to create a user-friendly platform. Using Blockchain technology, we created NFT products such as NFT Rarity Calculator, NFT Profit Calculator, NFT Maker/Generator, Payment Mandate, and Price Alerts. We continuously improve the platform and products to keep up with the latest trends.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-5 row text-justify lead px-4">
                Agomic Labs is a blockchain technology company that offers a comprehensive platform that provides various blockchain-related solutions and services, including NFT products. Here is how we did it:
                <ol>
                  <li><b>Identifying the need:</b> We recognized the growing demand for NFT products in the blockchain industry and saw a gap in the market for a platform that offers various NFT-related solutions, products and services.</li>
                  <li><b>Assembling a team:</b>Assembling a team: We brought together a team of experts with extensive experience in NFTs and the blockchain industry. Our team includes developers, designers, and business professionals who have worked on NFT projects in the past.</li>
                  <li><b>Research and Development:</b> We spent a significant amount of time researching and developing our NFT products. We analyzed the latest trends and technologies in the NFT industry and tested various solutions and services to ensure they met our standards.</li>
                  <li><b>Building the Platform:</b> After extensive research and development, we started building the platform. Our team used the latest tools and technologies to develop a user-friendly and robust platform that caters to the needs of individuals and organizations in the NFT industry.</li>
                  <li><b>Testing and Launch:</b> We conducted thorough testing of the platform and NFT products to ensure their stability and reliability. Once we were satisfied with the results, we launched the platform and NFT products to the public.</li>
                  <li><b>Continuous Improvement:</b> We are continuously improving our platform and NFT products by adding new features and services to keep up with the trends in the NFT industry. Our team is also committed to providing excellent customer support to ensure users have a seamless experience when using the platform.</li>
                </ol>

                <h4>Our NFT Products</h4>
                <ul>
                  <li><b>NFT Rarity Calculator:</b> This tool helps users determine the rarity of their NFTs based on various factors such as edition size, traits, and popularity.</li>
                  <li><b>NFT Profit Calculator:</b> This tool helps users calculate their potential profits from buying and selling NFTs based on current market trends.</li>
                  <li><b>NFT Maker/Generator:</b> This tool allows users to create their own NFTs easily and quickly.</li>
                  <li><b>Payment Mandate:</b> This feature allows NFT sellers to split the payment received for their NFTs among multiple recipients automatically.</li>
                  <li><b>Price Alerts:</b> This feature allows users to set up price alerts for their favorite NFTs and get notified when their price changes.</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div >
    </>
  )
}
