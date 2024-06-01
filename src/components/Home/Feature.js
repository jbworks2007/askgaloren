import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Feature() {
  return (
    <>
      <div className="container ptb-50">
        <div className="row justify-content-center">
          <h1 className='text-center'>FEATURED</h1>

          <div className="col-lg-12">
            <p className='lead text-center'>
              A collection of our handwork – we have delivered blockchain and enterprise software projects across industries with a special focus on innovations in the NFT smart contracts. Some of our featured projects are mentioned below!
            </p>
            <div className="mt-4 row justify-content-center">
              <div className='col-lg-4 pb-4' >
                <div className="image-wrapper">
                  <Image className="image-holder" src="/Quillatwill.webp" width={300} height={300} alt="quillatwill" />
                  <div className='overlay'>
                    <h3 className='txt-main'>Quill @ Will</h3>
                    <h5 className='txt-sub'>Book Authoring & Blogging App</h5>
                    <Link className="btn btn-outline-danger btn-pos" type="button" href="https://quillatwill.com/" target='_blank' >Know More</Link>
                  
                  </div>
                </div>
              </div>
              <div className='col-lg-4 pb-4'>
                <div className="image-wrapper">
                  <Image className="image-holder" src="/jbbc.webp" width={300} height={300} alt="quillatwill" />
                  <div className='overlay'>
                    <h3 className='txt-main'>Jocky Boa</h3>
                    <h5 className='txt-sub'>Transformer NFT</h5>
                    <Link className="btn btn-outline-danger btn-pos" type="button" href="https://jockyboaboxerclub.com/" target='_blank' >Know More</Link>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 pb-4'>
                <div className="image-wrapper">
                  <Image className="image-holder" src="/Travictionary.webp" width={300} height={300} alt="quillatwill" />
                  <div className='overlay'>
                    <h3 className='txt-main'>Travictionary</h3>
                    <h5 className='txt-sub'>ERC 1155 NFT Tokens</h5>
                    <Link className="btn btn-outline-danger btn-pos" type="button" href="https://travictionary.com/" target="_blank">Know More</Link>
                  </div>
                </div>
              </div>
              {/* </div> */}
              {/* <div className="mt-4 row justify-content-center"> */}
              <div className='col-lg-4 pb-4'>
                <div className="image-wrapper">
                  <Image className="image-holder" src="/Kalachain.webp" width={300} height={300} alt="quillatwill" />
                  <div className='overlay'>
                    <h3 className='txt-main'>Kalachain</h3>
                    <h5 className='txt-sub'>ERC 721 NFT Tokens</h5>
                    <Link className="btn btn-outline-danger btn-pos" type="button" href="https://kalachain.com/" target='_blank' >Know More</Link>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 pb-4'>
                <div className="image-wrapper">
                  <Image className="image-holder" src="/EazyVC.webp" width={300} height={300} alt="quillatwill" />
                  <div className='overlay'>
                    <h3 className='txt-main'>EazyVC</h3>
                    <h5 className='txt-sub'>Dapp on Hyperledger Fabric</h5>
                    <Link className="btn btn-outline-danger btn-pos" type="button" href="https://eazyvc.com/" >Know More</Link>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 pb-4'>
                <div className="image-wrapper">
                  <Image className="image-holder" src="/DocSutra.webp" width={300} height={300} alt="quillatwill" />
                  <div className='overlay'>
                    <h3 className='txt-main'>DOC SUTRA</h3>
                    <h5 className='txt-sub'>Docs Scan & Share App</h5>
                    <Link className="btn btn-outline-danger btn-pos" type="button" href="#" >Know More</Link>
                  </div>
                </div>
              </div>
              {/* </div> */}
              {/* <div className="mt-4 row justify-content-center"> */}
              <div className='col-lg-4 pb-4'>
                <div className="image-wrapper">
                  <Image className="image-holder" src="/integraate.webp" width={300} height={300} alt="quillatwill" />
                  <div className='overlay'>
                    <h3 className='txt-main'>Integraate</h3>
                    <h5 className='txt-sub'>Corporate Website</h5>
                    <Link className="btn btn-outline-danger btn-pos" type="button" href="#" >Know More</Link>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 pb-4'>
                <div className="image-wrapper">
                  <Image className="image-holder" src="/Konverge.webp" width={300} height={300} alt="quillatwill" />
                  <div className='overlay'>
                    <h3 className='txt-main'>Konverge</h3>
                    <h5 className='txt-sub'>Corporate Website</h5>
                    <Link className="btn btn-outline-danger btn-pos" type="button" href="#" >Know More</Link>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 pb-4'>
                <div className="image-wrapper">
                  <Image className="image-holder" src="/globesons.webp" width={300} height={300} alt="quillatwill" />
                  <div className='overlay'>
                    <h3 className='txt-main'>GLOBESONS <br></br> PHOTOGRAPHY</h3>
                    <h5 className='txt-sub'>Corporate Website</h5>
                    <Link className="btn btn-outline-danger btn-pos" type="button" href="#" >Know More</Link>
                  </div>
                </div>
              </div>
              {/* </div> */}
              {/* <div className="mt-4 row justify-content-center"> */}
              <div className='col-lg-4 pb-4'>
                <div className="image-wrapper">
                  <Image className="image-holder" src="/tiitan.webp" width={300} height={300} alt="quillatwill" />
                  <div className='overlay'>
                    <h3 className='txt-main'>TIITAN</h3>
                    <h5 className='txt-sub'>E-Commerce Website</h5>
                    <Link className="btn btn-outline-danger btn-pos" type="button" href="#" >Know More</Link>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 pb-4'>
                <div className="image-wrapper">
                  <Image className="image-holder" src="/secon-medic.webp" width={300} height={300} alt="quillatwill" />
                  <div className='overlay'>
                    <h3 className='txt-main'>SECONDMEDIC</h3>
                    <h5 className='txt-sub'>Healthcare and Telemedicine</h5>
                    <Link className="btn btn-outline-danger btn-pos" type="button" href="#" >Know More</Link>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 pb-4'>
                <div className="image-wrapper">
                  <Image className="image-holder" src="/ucs.webp" width={300} height={300} alt="quillatwill" />
                  <div className='overlay'>
                    <h3 className='txt-main'>UNIFIED <br></br> CREDIT SOLUTIONS</h3>
                    <h5 className='txt-sub'>S.E.O. Services</h5>
                    <Link className="btn btn-outline-danger btn-pos" type="button" href="#" >Know More</Link>
                  </div>
                </div>
              </div>
              {/* </div> */}
              {/* <div className="mt-4 row justify-content-center"> */}
              <div className='col-lg-4 pb-4'>
                <div className="image-wrapper">
                  <Image className="image-holder" src="/kudf-milk.webp" width={300} height={300} alt="quillatwill" />
                  <div className='overlay'>
                    <h3 className='txt-main'>KUDF MILK</h3>
                    <h5 className='txt-sub'>Corporate Website</h5>
                    <Link className="btn btn-outline-danger btn-pos" type="button" href="#" >Know More</Link>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 pb-4'>
                <div className="image-wrapper">
                  <Image className="image-holder" src="/martial-ask.webp" width={300} height={300} alt="quillatwill" />
                  <div className='overlay'>
                    <h3 className='txt-main'>Martial Ask</h3>
                    <h5 className='txt-sub'>Blogging Website</h5>
                    <Link className="btn btn-outline-danger btn-pos" type="button" href="#" >Know More</Link>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 pb-4'>
                <div className="image-wrapper">
                  <Image className="image-holder" src="/metaverse.webp" width={300} height={300} alt="quillatwill" />
                  <div className='overlay'>
                    <h3 className='txt-main'>ANYVERSE</h3>
                    <h5 className='txt-sub'>Metaverse Solutions</h5>
                    <Link className="btn btn-outline-danger btn-pos" type="button" href="#" >Know More</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
