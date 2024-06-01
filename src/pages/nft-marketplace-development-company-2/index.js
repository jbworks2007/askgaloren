import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GiMoebiusTriangle } from "react-icons/gi";
import { MdTexture } from "react-icons/md";
import { BsStack } from "react-icons/bs";
import {
  FaRegEdit,
  FaExpandArrowsAlt,
  FaWallet,
  FaUserLock,
  FaHandsHelping,
  FaShoppingCart,
  FaChartBar,
  FaUserTimes,
  FaMoneyBillWave,
} from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { HiOutlineUser, HiChartSquareBar } from "react-icons/hi";
import { SlDiamond } from "react-icons/sl";
import { GoAlert } from "react-icons/go";
import { GrCurrency } from "react-icons/gr";
import { CgNotes } from "react-icons/cg";
import { BsPersonVideo3 } from "react-icons/bs";
import ServicesFooter from "@/components/services-footer/ServicesFooter";
import { GiChaingun } from "react-icons/gi";

export default function index() {
  return (
    <>
      <div className="container mt-5">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="">
              <div className="banner-item">
                <div className="banner-item-img">
                  <div className="banner-shape">
                    <div className="px-3 shape-in1">
                      <h1>
                        <strong>NFT Marketplace Development Company</strong>
                      </h1>
                      <br />
                      <p className="text-justify">
                        Looking for one of the best<b> NFT Marketplace Development Company</b> providing White Label NFT Marketplace Development Services? Look no further! AskGalore Digital provides cost effective<b> White-lable NFT marketplace</b> with a fully customizable and highly secure NFT marketplace that supports multiple blockchains like <b> Ethereum, Polygon, Solana, Binance</b> and others. You can customize NFT standards like <b> ERC721</b> and<b> ERC1155</b> for NFT minting on your NFT marketplace. We provide fully customized NFT Marketplace Development Services to provide white label NFT platform for the exact features that you want on your NFT marketplace.
                      </p>
                      <br />
                      <div className="row text-center">
                        <div className="mt-2 col-lg-6 ">
                          <a href="/contact-us">
                          <button type="button" class="box-nft1">
                            SCHEDULE A FREE DEMO
                          </button>
                          </a>
                        </div>
                        <div className="mt-2  col-lg-6  ">
                          <a href="/nft-marketplace-development-cost">  
                          <button type="button" class="box-nft2">
                            NFT MARKETPLACE COST
                          </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="">
              <div className="banner-item">
                <div className="banner-item-img">
                  <div className="banner-shape">
                    <div className="shape-in1">
                      <img
                        width="100%"
                        src="./nft2.webp"
                        alt="Images"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <br></br>

      <div className="container-fluid ptb-50 bg-royal ">
        <div className="container">
          <div className="row mt-5">
            <div className="col-lg-3 text-center">
              <GiMoebiusTriangle className="poppy-blue" size={70} />
              <h5 className="mt-4 text-white">INNOVATIVE TECHNOLOGY</h5>
              <p className="mt-3 ice-gray">
                As one of the best NFT Marketplace Development agency, AskGalore
                focuses on white label NFT platform trending features like -
                Dashboard, various filters, auction facilities, wallet
                integration & many more that engage the user to the extreme
                level. We provide blockchain-based security that supports
                multiple cross-chain connectivity.
              </p>
            </div>
            <div className="col-lg-3 text-center">
              <GiChaingun className="poppy-blue" size={70} />
              <h5 className="mt-4 text-white">CROSS-CHAIN CONNECTIVITY</h5>
              <p className="mt-3 ice-gray">
                As a top NFT marketplace development company, we provide
                ultimate cross-chain connectivity support for our white label
                NFT marketplace platform. It supports various other blockchain
                protocols like Ethereum, Polygon (Matic), Solana, Binance Smart
                Chain (BSC), Cardano, Tron, PolkaDot etc.
              </p>
            </div>
            <div className="col-lg-3 text-center">
              <BsStack className="poppy-blue" size={70} />
              <h5 className="mt-4 text-white">
                PERSONALIZATION & CUSTOMIZATION
              </h5>
              <p className="mt-3 ice-gray">
                In our White-label NFT marketplace development, you get a full
                personalization and customization facility for example selecting
                between Polygon and Solana NFTs or ERC721 and ERC1155 NFT
                tokens. You can customize modules & functionality on our
                White-label NFT marketplace solution.
              </p>
            </div>
            <div className="col-lg-3 text-center">
              <FaHandsHelping className="poppy-blue" size={70} />
              <h5 className="mt-4 text-white">DEDICATED SUPPORT TEAM</h5>
              <p className="mt-3 ice-gray">
                We have a dedicated support team for our Whitelabel NFT
                marketplace development. Our platform can sustain any
                catastrophic failure and technical breach. Our development
                expertise is always available to resolve & help you regarding
                any support you need on our white label NFT marketplace
                platform.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 text-center">
              <Link
                type="button"
                className="box-nft3"
                style={{ textDecoration: "none" }}
                href="https://kalachain.com/"
                target="_blank"
              >
                VIEW POLYGON ERC721<br></br>DEMO:KALACHAIN.COM
              </Link>
            </div>
            <div className="col-lg-4 text-center">
              <Link
                type="button"
                className="box-nft3"
                style={{ textDecoration: "none" }}
                href="https://travictionary.com/"
                target="_blank"
              >
                VIEW POLYGON ERC1155<br></br>DEMO: TRAVICTIONARY.COM
              </Link>
            </div>
            <div className="col-lg-4 text-center">
              <Link
                type="button"
                className="box-nft3"
                style={{ textDecoration: "none" }}
                href="https://jockyboaboxerclub.com/"
                target="_blank"
              >
                VIEW TRANSFORMER NFT<br></br>DEMO: JOCKYBOABOXERCLUB.COM
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container ptb-50">
        <div className="px-3 row align-items-center">
          <div className="col-lg-8">
            <div className="">
              <div className="banner-item">
                <div className="banner-item-img">
                  <div className="banner-shape">
                    <div className="shape-in1">
                      <p className="text-center">White Label NFT Marketplace Development Company</p>
                      <h2><b>
                        Why a Whitelabel NFT marketplace makes sense?</b>
                      </h2>
                      <br />
                      <p>
                        <b> White label NFT marketplace development</b> is an ultra fast NFT marketplace deployment  service. You just need to provide your brand collaterals & customization wishlist and leave the rest to us.
                      </p>
                      <p>Building an NFT marketplace platform from scratch, with advanced features and security measures takes time in months and significant investment.</p>
                      <ul>
                        <li><b>
                          Cost-effective</b>
                        </li>
                        <li><b>
                          Highly Secure</b>
                        </li>
                        <li><b>
                          Better performance</b>
                        </li>
                        <li>
                          <b>Ready to Use </b>
                        </li>
                        <li>
                          <b>Blockchain-based Security</b>
                        </li>
                        <li><b>
                          Faster delivery</b>
                        </li>
                        <li><b>Faster Modifications</b></li>
                      </ul>
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="">
              <div className="banner-item">
                <div className="banner-item-img">
                  <div className="banner-shape">
                    <div className="shape-in1">
                      <div class=" p-4 text-center">
                        <img
                          width="100%"
                          src="nftdev.webp"
                        />
                        <br />
                        <br />

                        <h5>Fully Customized NFT Plateform</h5>
                        <br />

                        <p class="line2">
                          We provide fully customized & rich user interface
                          MERN app development service.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-gc">
        <div className="container">
          <div className="px-2 row justify-content-center">
            <div className="col-lg-10">
              <h1 className="text-center">
                <strong>
                  Why AskGalore for your NFT marketplace development services?
                </strong>
              </h1>
              <p>
                AskGalore is a Top-rated, Leading White Label NFT Marketplace
                Development Company. We provide Whitelabel NFT Marketplace
                Development Services worldwide with an extreme level of security
                on blockchain technology that supports cross-chain connectivity
                with various other blockchains like – Solana, Polygon (MATIC),
                Binance Smart Chain (BSC), Ethereum, Tron, PolkaDot etc.
              </p>
              <p>
                Our Whitelabel NFTs solution is easy to navigate & provides for
                a rich User Interface, where your users feel comfortable with a
                seamless NFT Buying & Selling Experience.
              </p>
              <h1 className="text-center">
                <strong>
                  How to build an NFT Marketplace Platform?
                </strong>
              </h1>
              <p>
                To build an NFT Marketplace Platform, Askgalore Digital provides
                step by step solution with a depth NFT Marketplace Development
                Cost analysis. Get detailed information regarding Fully
                Customized NFT Platform Development Service click the below
                button and visit our NFT Marketplace Development Cost page.
              </p>
              <Link
                className="btn-redchanged mx-auto"
                style={{ textDecoration: "none" }}
                href="/nft-marketplace-development-cost"
                // target="_blank"
              >
                NFT Marketplace Development Cost
              </Link>
              &nbsp;&nbsp;&nbsp;&nbsp;
            </div>
          </div>
        </div>
      </div>

      <div className="container ptb-50">
        <h1 className="text-center">
          <strong>Best Features Of Our NFT Website Development</strong>
        </h1>
        <div className="row mt-5 justify-content-center">
          <div className="col-lg-4 text-center">
            <div className="container d-flex">
              <FaRegEdit className="dark-gray" size={40} />

              <p className="p-18">Fully customizable & configurable</p>
            </div>

            <div className="container d-flex mt-3">
              <FaExpandArrowsAlt className="dark-gray" size={40} />

              <p className="p-18">Wide Range NFT standard Support</p>
            </div>
            <div className="container d-flex mt-3">
              <FiClock className="dark-gray" size={40} />

              <p className="p-18">Go-to-market in a short time</p>
            </div>
            <div className="container d-flex mt-3">
              <HiOutlineUser className="dark-gray" size={40} />

              <p className="p-18">User Friendly & Seamless Signup Process</p>
            </div>
            <div className="container d-flex mt-3">
              <SlDiamond className="dark-gray" size={40} />

              <p className="p-18">Participate in NFT Auctions</p>
            </div>
          </div>

          <div className="col-lg-4 text-center">
            <div className="container d-flex">
              <GrCurrency className="dark-gray" size={40} />

              <p className="p-18">Multiple Payment Options</p>
            </div>
            <div className="container d-flex mt-3">
              <FaWallet className="dark-gray" size={40} />

              <p className="p-18">Integrated NFT Wallet</p>
            </div>
            <div className="container d-flex mt-3">
              <FaUserLock className="dark-gray" size={40} />

              <p className="p-18">2FA Authentication</p>
            </div>
            <div className="container d-flex mt-3">
              <FaHandsHelping className="dark-gray" size={40} />

              <p className="p-18">Integrated Support Desk</p>
            </div>
            <div className="container d-flex mt-3">
              <HiChartSquareBar className="dark-gray" size={40} />

              <p className="p-18">Trending bids and collections</p>
            </div>
            <div className="container d-flex mt-3">
              <GoAlert className="dark-gray" size={40} />

              <p className="p-18">Alerts & Notifications</p>
            </div>
          </div>

          <div className="col-lg-4 text-center">
            <div className="container d-flex ">
              <FaShoppingCart className="dark-gray" size={40} />

              <p className="p-18">Cart Management</p>
            </div>
            <div className="container d-flex mt-3">
              <FaChartBar className="dark-gray" size={40} />

              <p className="p-18">Marketplace Analytics</p>
            </div>
            <div className="container d-flex mt-3">
              <FaUserTimes className="dark-gray" size={40} />

              <p className="p-18">Whitelist / Blacklist Management</p>
            </div>
            <div className="container d-flex mt-3">
              <CgNotes className="dark-gray" size={40} />

              <p className="p-18">Assets Management</p>
            </div>
            <div className="container d-flex mt-3">
              <FaMoneyBillWave className="dark-gray" size={40} />

              <p className="p-18">Payments & Fees Management</p>
            </div>
            <div className="container d-flex mt-3">
              <BsPersonVideo3 className="dark-gray" size={40} />

              <p className="p-18">Trade management</p>
            </div>
          </div>
        </div>
      </div>
      <ServicesFooter />
    </>
  );
}
