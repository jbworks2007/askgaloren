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
          <h1 className='text-danger'>KALACHAIN</h1>
          <h5>ERC 721 NFT Tokens</h5>
        </div>

        <div className="container">

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className=" row justify-content-center text-center">
                <div className="mt-4 col-lg-5">
                  <Image src="/Kalachain.webp" alt="kalachain" height={400} width={400} className="img-adjust" />
                </div>
                <div className="col-lg-7">
                  <div className="mt-4 text-justify px-3">
                    <p className='lead'>
                      <b>OBJECTIVE :</b> To provide a secure NFT marketplace to create & publish nft on Polygon.
                    </p>
                    <p className='lead'>
                      <b>HOW WE DID IT :</b> We developed a secure NFT marketplace on Polygon by creating a Solidity smart contract for the transfer, minting, and getting NFTs. Nextjs was used for the front end, and Hardhat for deployment. Users can connect and log in with MetaMask to create and sell NFTs.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-5 row text-justify lead px-4">
                Here's a detailed breakdown of how our team developed a secure and user-friendly NFT marketplace on Polygon:
                <ol>
                  <li><b>Solidity Smart Contract:</b> We created a Solidity smart contract with robust functionality for transferring, minting, and getting NFTs. This ensured that our marketplace was secure and efficient for users to create and sell their own NFTs.</li>
                  <li><b>Nextjs Frontend Framework:</b> We chose Nextjs as our frontend framework because of its ease of use and ability to handle complex data structures. This allowed us to create a seamless user experience that was both efficient and user-friendly.</li>
                  <li><b>Hardhat Deployment Tool:</b> We utilized the Hardhat tool for deployment to ensure a smooth and efficient process. Hardhat is a popular development environment for building and testing smart contracts on Ethereum, and it helped us ensure that our marketplace was deployed in a secure and efficient manner.</li>
                  <li><b>MetaMask Integration:</b> We integrated MetaMask for secure user authentication and authorization. MetaMask is a popular browser extension that allows users to interact with Ethereum applications securely and easily.</li>
                  <li><b>User Experience:</b> Our marketplace provides an easy-to-use interface for users to create and publish their own NFTs at their desired price. Once a user creates an NFT, they can publish it on our marketplace with their desired price to sell. When an NFT gets sold, the user's account is automatically credited with the specified amount of Matic.</li>

                </ol>

                <p className='lead'>
                  Overall, our team's focus on security and user-friendliness helped us create a marketplace that provides a seamless experience for users to create, publish, and sell their own NFTs on Polygon.

                </p>
              </div>
            </div>

          </div>
        </div>
      </div >
    </>
  )
}
