import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import img5 from '../../../public/brands/blockexplore.png'
import ContactForm from '@/components/Misc/ContactForm'
import { SiBlockchaindotcom, SiHiveBlockchain, SiChainlink } from 'react-icons/si'
import { BsBoxes, BsCoin } from 'react-icons/bs'
import { FaWallet, FaBitcoin } from 'react-icons/fa'
import Outsourcing from '@/components/Outsourcing/Outsourcing'
import FormOutsource from '@/components/Outsourcing/FormOutsource'

export default function index() {
  return (
    <>
      <section className='bg-gradient2'>
        <div className="container ptb-50">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="row">
                <div className="col-lg-6">
                  <div className="text-center text-white">
                    <Image src={img5} width={100} />
                    <h1 className=''>Hire Blockchain Developers</h1>
                    <p className='mt-3 text-justify lead'>
                      Do you have a requirement to hire blockchain developers to build decentralized applications on protocols such as Ethereum, Polygon Hyperledger, Polkadot, Stellar, Tezos, Neo, and more? Askgalore has you covered.
                      <br /><br />
                      At AskGalore, we have extensive experience of working with Solidity and ERC Standards (ERC721, ERC1155, ERC721A, ERC20). From NFT smart contracts to DeFi applications, we have delivered blockchain DApps to our clients.
                      <br /><br />
                      We understand the need for full-stack Web3 development to deliver a fully functional Dapp or Web3 platform. For this we seamless stitch the blockchain network with the user interface using full-stack frameworks like the MERN stack.
                    </p>
                    <div className="mt-4 text-center">
                      <Link href="/contact-us"><button className='btn btn-royal' role='button'>GET IN TOUCH</button></Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center">
                  <div className="bg-grlite p-4">
                    <ContactForm />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className='bg-softblack'>
        <div className="container ptb-50">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="text-center text-light">
                <h1>IT Outsourcing Services for Blockchain Development</h1>
                <p className='lead'>Unlock the full potential of Blockchain with top-notch IT outsourcing services, providing expert development, support, and maintenance for your projects.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container ptb-50">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="row justify-content-center text-center">
                <h2 className='theme-red'>Hire Blockchain Developers via Askgalore for the listed solutions</h2>
                <p className='lead'>Our skilled blockchain developers possess a strong expertise in crafting various blockchain applications, such as industry-specific decentralized applications, smart contracts, blockchain wallets and stablecoins.</p>
                <div className="col-lg-4">
                  <div className="card-three">
                    <SiBlockchaindotcom size={50} className='mt-2 text-primary' />
                    <div className="h-8">
                      Blockchain Consulting and POC Services
                    </div>
                    <p className='text-justify'>
                      Our developers can help you integrate blockchain technology into your business processes, enhance productivity and efficiency, and execute POC for your business use case to ensure a successful outcome. Our services range from MVP development to smart contract audit.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-three">
                    <BsBoxes size={50} className='mt-2 text-danger' />
                    <div className="h-8">
                      Enterprise Blockchain Development
                    </div>
                    <p className='text-justify'>
                      Empower your enterprise with our blockchain developers who excel in dApps, smart contracts, EOS, and Golang development. Stay ahead in the market and capitalize on blockchain opportunities with our expertise.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-three">
                    <SiHiveBlockchain size={50} className='mt-2 text-success' />
                    <div className="h-8">
                      Decentralized Exchange App Development
                    </div>
                    <p className='text-justify'>
                      Hire our blockchain developers to create a hack-proof decentralized exchange (DEX) app for your web or mobile platform. Our developers specialize in building robust and secure DEX apps for Android/iOS that allow real-time exchange of digital currencies and assets. We focus on providing a seamless and secure trading experience for your users.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-three">
                    <FaWallet size={50} className='mt-2 text-warning' />
                    <div className="h-8">
                      Blockchain Wallets Development
                    </div>
                    <p className='text-justify'>
                      Our developers can help you manage your cryptocurrency portfolio by building flexible, secure, and safe blockchain wallets. We follow security best practices to enable non-custodial or hardware wallets, giving you more control over your digital assets.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-three">
                    <SiChainlink size={50} className='mt-2 text-primary' />
                    <div className="h-8">
                      Multi Chain Development
                    </div>
                    <p className='text-justify'>
                      Empower your enterprise with our blockchain developers who excel in dApps, smart contracts, EOS, and Golang development. Stay ahead in the market and capitalize on blockchain opportunities with our expertise.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-three">
                    <BsCoin size={50} className='mt-2' />
                    <div className="h-8">
                      Stablecoin Development
                    </div>
                    <p className='text-justify'>
                      Hire our blockchain developers to create a hack-proof decentralized exchange (DEX) app for your web or mobile platform. Our developers specialize in building robust and secure DEX apps for Android/iOS that allow real-time exchange of digital currencies and assets. We focus on providing a seamless and secure trading experience for your users.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-three">
                    <FaBitcoin size={50} className='mt-2 text-success' />
                    <div className="h-8">
                      Cryptocurrency Development
                    </div>
                    <p className='text-justify'>
                      Our developers have in-depth knowledge of various cryptocurrencies, including their terminologies and operational procedures.
                    </p>
                  </div>
                </div>
                <div className="mt-3 p-4 text-center">
                  <h3 className='theme-red'>Looking to build a cutting-edge team for your project? <br></br>Schedule a meeting with us today.</h3>
                  <div className="text-center">
                    <Link href="/contact-us"><button className='btn btn-royal' role='button'>GET IN TOUCH</button></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Outsourcing />

      <FormOutsource />
    </>
  )
}

