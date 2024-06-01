import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import img5 from '../../../public/brands/blockexplore.png'
import ContactForm from '@/components/Misc/ContactForm'
import { SiBlockchaindotcom, SiHiveBlockchain, SiChainlink } from 'react-icons/si'
import { BsBoxes, BsRobot, BsAppIndicator } from 'react-icons/bs'
import { FaWallet, FaTruckMoving, FaUserShield } from 'react-icons/fa'
import { ImFilePicture } from 'react-icons/im'
import { TbBrandTorchain } from 'react-icons/tb'
import { BiHealth } from 'react-icons/bi'
import { MdRealEstateAgent } from 'react-icons/md'
import { IoCarSportSharp } from 'react-icons/io5'
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
                    <h1 className='mt-1'>Blockchain Development Services</h1>
                    <p className='mt-1 text-justify lead'>
                      AskGalore offers custom blockchain development services to help transform your business and disrupt your industry. With our extensive experience in creating and implementing blockchain solutions for enterprises across various sectors, we can develop a decentralized ledger technology tool that addresses persistent business problems while also uncovering new opportunities.
                    </p>
                    <div className="mt-4 text-center">
                      <Link href="/contact-us"><button className='btn btn-royal' role='button'>GET IN TOUCH</button></Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="bg-grlite p-4">
                    <ContactForm />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* <section className='bg-softblack'>
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
      </section> */}

      <section>
        <div className="container ptb-50">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="row justify-content-center text-center">
                <h2 className='theme-red'>Our Blockchain Development Company's Area of Expertise</h2>
                {/* <p className='lead'>Our skilled blockchain developers possess a strong expertise in crafting various blockchain applications, such as industry-specific decentralized applications, smart contracts, blockchain wallets and stablecoins.</p> */}
                <div className="col-lg-4">
                  <div className="card-three">
                    <SiBlockchaindotcom size={50} className='mt-2 text-primary' />
                    <div className="h-8">
                      NFT Development
                    </div>
                    <p className='text-justify'>
                      Transform traditional collectibles, such as artwork, sports cards, stamps, and event tickets, into unique digital assets that can be traded and exchanged on a tamper-proof blockchain.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-three">
                    <BsBoxes size={50} className='mt-2 text-danger' />
                    <div className="h-8">
                      Smart Contracts
                    </div>
                    <p className='text-justify'>
                      Smart contracts are self-executing and immutable codes that activate actions when predetermined conditions are met. With smart contracts, you can automate payments, transfers of ownership, and exchange of information across various systems.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-three">
                    <BsAppIndicator size={50} className='mt-2 text-danger' />
                    <div className="h-8">
                      DApps
                    </div>
                    <p className='text-justify'>
                      Decentralized Applications (DApps) are blockchain-based software programs that operate on decentralized networks, such as Ethereum or Binance Smart Chain, rather than traditional centralized servers.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-three">
                    <SiHiveBlockchain size={50} className='mt-2 text-success' />
                    <div className="h-8">
                      DeFi Solutions
                    </div>
                    <p className='text-justify'>
                      Transform your financial applications into transparent and decentralized systems that operate without intermediaries. With self-executing capabilities in a peer-to-peer environment, DeFi solutions provide unparalleled transparency and efficiency.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-three">
                    <SiChainlink size={50} className='mt-2 text-primary' />
                    <div className="h-8">
                      Integration of Crypto and Fiat Currencies
                    </div>
                    <p className='text-justify'>
                      Integrate automated payments, such as payables, collections, receivables, and more, into your workflows using a dedicated API payments infrastructure. This integration of crypto and fiat currencies unlocks new revenue drivers for your business.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-three">
                    <FaWallet size={50} className='mt-2 text-warning' />
                    <div className="h-8">
                      Integration of Crypto Wallet
                    </div>
                    <p className='text-justify'>
                      Get equipped with a digital wallet for your tokens that offers secure blockchain storage for users’ digital assets, FDIC-compliant asset insurance, and instant purchases and money swaps. This integration of crypto wallet ensures the safety and convenience of your digital assets
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h1 className='mt-4 text-center'>Disrupting Modern Industries with Blockchain</h1>
            <div className="col-lg-3 d-flex justify-content-center gap-3 g-3">
              <Link className='td-none' href='hire-blockchain-developers'>
                <div className="card-two">
                  <ImFilePicture className='mt-3 scale-eff text-primary' size={70} />
                  <div className='mt-2 sub-text2'>NFT</div>
                </div>
              </Link>
              <Link className='td-none' href='hire-ai-ml-developers'>
                <div className="card-two">
                  <BsRobot className='mt-3 scale-eff text-danger' size={70} />
                  <div className='mt-2 sub-text2'>IoT</div>
                </div>
              </Link>
            </div>
            <div className="col-lg-3 d-flex justify-content-center gap-3 g-3">
              <Link className='td-none' href='hire-blockchain-developers'>
                <div className="card-two">
                  <TbBrandTorchain className='mt-3 scale-eff text-warning' size={70} />
                  <div className='mt-2 sub-text2'>Supply Chain</div>
                </div>
              </Link>
              <Link className='td-none' href='hire-ai-ml-developers'>
                <div className="card-two">
                  <BiHealth className='mt-3 scale-eff text-success' size={70} />
                  <div className='mt-2 sub-text2'>Healthcare</div>
                </div>
              </Link>
            </div>
            <div className="col-lg-3 d-flex justify-content-center gap-3 g-3">
              <Link className='td-none' href='hire-blockchain-developers'>
                <div className="card-two">
                  <MdRealEstateAgent className='mt-3 scale-eff text-dark' size={70} />
                  <div className='mt-2 sub-text2'>Real Estate</div>
                </div>
              </Link>
              <Link className='td-none' href='hire-ai-ml-developers'>
                <div className="card-two">
                  <FaTruckMoving className='mt-3 scale-eff text-warning' size={70} />
                  <div className='mt-2 sub-text2'>Logistics</div>
                </div>
              </Link>
            </div>
            <div className="col-lg-3 d-flex justify-content-center gap-3 g-3">
              <Link className='td-none' href='hire-blockchain-developers'>
                <div className="card-two">
                  <IoCarSportSharp className='mt-3 scale-eff text-primary' size={70} />
                  <div className='mt-2 sub-text2'>Automotive</div>
                </div>
              </Link>
              <Link className='td-none' href='hire-ai-ml-developers'>
                <div className="card-two">
                  <FaUserShield className='mt-3 scale-eff text-success' size={70} />
                  <div className='mt-2 sub-text2'>Insurance</div>
                </div>
              </Link>
            </div>

          </div>
        </div>
      </section>

      <section>
        <div className="ptb-50 bg-grlite">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h2 className='theme-red text-center'>Why Choose AskGalore for Blockchain Development?</h2>
              <ul className='mt-2 lead'>
                <li className='mt-2'><span className='stg-700'>Experts in Blockchain and Business</span><br></br>
                  At AskGalore, we understand that you need more than just blockchain developers. You need experts who understand your business needs, not just the code. With years of experience in developing custom blockchain solutions for a global client base, we have the expertise to help your business succeed.
                </li>
                <li className='mt-2'><span className='stg-700'>Client-Focused Approach</span><br></br>
                  We put your needs first. Our approach starts with understanding your requirements and then identifying the right tools to develop the perfect solution for your business. We value your feedback and ensure that you are involved in the process every step of the way.
                </li>
                <li className='mt-2'><span className='stg-700'>Deep Development Skill Base</span><br></br>
                  Our team of expert developers brings a range of skills and experience in specific blockchain-relevant techniques, enabling us to deliver best-in-class solutions across codebases, blockchains, and libraries.
                </li>
                <li className='mt-2'><span className='stg-700'>Continual Learning and Improvement</span><br></br>
                  AskGalore evolves with your business. We are committed to keeping up with the latest developments and advancements in blockchain technology, so we can provide cutting-edge advice and services to help your business stay ahead.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      <FormOutsource />
    </>
  )
}