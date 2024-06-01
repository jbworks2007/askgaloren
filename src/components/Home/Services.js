import React from 'react'
import Link from 'next/link'
import { BsBoxes } from 'react-icons/bs'
import { FaFingerprint } from 'react-icons/fa'
import { CiMobile3 } from 'react-icons/ci'
import { AiOutlineCode } from 'react-icons/ai'
import { BsStack } from 'react-icons/bs'
import { SiAltiumdesigner } from 'react-icons/si'
import { AiOutlineCloudServer } from 'react-icons/ai'
import { AiOutlineSecurityScan } from 'react-icons/ai'
import { GiProcessor } from 'react-icons/gi'
import { BsRobot } from 'react-icons/bs'
import { BiSearchAlt } from 'react-icons/bi'
import { TbDeviceMobileMessage } from 'react-icons/tb'
import { IoIosPeople } from 'react-icons/io'


export default function Services() {
  return (
    <>
      <div className="container mt-5">
        <h1 className="text-center">STRATEGY ● DESIGN ● DEVELOPMENT ● MARKETING</h1>
        <div className="mt-5 row justify-content-center px-3">
          <div className="col-6 col-lg-3">
            <div className="service-card">
              <div class="text-center">
                <div class="ser-icon">
                  <i ><IoIosPeople size={70} /></i>
                </div>
                <h4 className='mt-3 sm-one'>SOFTWARE <br></br>
                  DEVELOPMENT <br></br> OUTSOURCING</h4>
                <p className='mt-3 d-none d-md-block'>Developer on Demand/IT Staff Augmentation</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <Link
              style={{ textDecoration: "none" }}
              href="blockchain-applications"
            >
              <div className="service-card">
                <div class="text-center">
                  <div class="ser-icon">
                    <i>
                      <BsBoxes size={70} />
                    </i>
                  </div>
                  <h4 className="mt-3 sm-one">
                    BLOCKCHAIN <br></br>
                    APPLICATIONS <br></br> DAPPS
                  </h4>
                  <p className="mt-3 d-none d-md-block">Smart Contract Development & Integeration</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-6 col-lg-3">
            <Link
              style={{ textDecoration: "none" }}
              href="nft-marketplace-development-company-2"
            >
              <div className="service-card">
                <div class="text-center">
                  <div class="ser-icon">
                    <i>
                      <FaFingerprint size={70} />
                    </i>
                  </div>
                  <h4 className="mt-3 sm-one">
                    NFT <br></br>MARKETPLACE<br></br>
                    DEVELOPMENT{" "}
                  </h4>
                  <p className="mt-3 d-none d-md-block">Buy, List & Sell NFTs on Marketplace</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-6 col-lg-3">
            <Link
              style={{ textDecoration: "none" }}
              href="top-mobile-app-development-company"
            >
              <div className="service-card">
                <div class="text-center">
                  <div class="ser-icon">
                    <i>
                      <CiMobile3 size={70} />
                    </i>
                  </div>
                  <h4 className='mt-3 sm-one'>MOBILE <br></br>APP <br></br>
                    DEVELOPMENT</h4>
                  <p className='mt-3 d-none d-md-block'>React Native & Flutter App Development</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-6 col-lg-3">
            <Link
              style={{ textDecoration: "none" }}
              href="contact-us"
            >
              <div className="service-card">
                <div class="text-center">
                  <div class="ser-icon">
                    <i>
                      <AiOutlineCloudServer size={70} />
                    </i>
                  </div>
                  <h4 className="mt-3 sm-one">
                    CLOUD <br></br>
                    TRANS-<br></br>FORMATION
                  </h4>

                  <p className="mt-3 d-none d-md-block">Migrate Seamlessly And Efficiently With Cloud Migration</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-6 col-lg-3">
            <Link
              style={{ textDecoration: "none" }}
              href="contact-us"
            >
              <div className="service-card">
                <div class="text-center">
                  <div class="ser-icon">
                    <i>
                      <GiProcessor size={70} />
                    </i>
                  </div>
                  <h4 className='mt-3 sm-one'>AI/ML <br></br> DEVELOPMENT
                  </h4><br></br>
                  <p className='mt-3 d-none d-md-block'>Build Futuristic Solution With AI/ML Development</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-6 col-lg-3">
            <Link
              style={{ textDecoration: "none" }}
              href="seo-service-provider-company"
            >
              <div className="service-card">
                <div class="text-center">
                  <div class="ser-icon">
                    <i>
                      <BiSearchAlt size={70} />
                    </i>
                  </div>
                  <h4 className="mt-3 sm-one">
                    SEARCH<br></br> ENGINE
                    <br></br>OPTIMIZATION
                  </h4>
                  <p className='mt-3 d-none d-md-block'>Stay top & Rank Higher with latest updates and changes</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-6 col-lg-3">
            <Link
              style={{ textDecoration: "none" }}
              href="digital-marketing"
            >
              <div className="service-card">
                <div class="text-center">
                  <div class="ser-icon">
                    <i>
                      <TbDeviceMobileMessage size={70} />
                    </i>
                  </div>
                  <h4 className='mt-3 sm-one'>PERFORMANCE<br></br> MARKETING
                  </h4><br></br>
                  <p className='mt-3 d-none d-md-block'>Maximize efficiency and optimize performance in real</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
