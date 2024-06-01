import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Offcanvas from './Offcanvas';
import { AiOutlineClose } from 'react-icons/ai';


export default function Navbar() {

  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);

  useEffect(() => {
    const stickyheader = document.querySelector('.navbar');
    setHeaderTop(stickyheader.offsetTop);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };


  return (
    <nav class={`navbar sticky-top navbar-expand-lg navbar-dark ${scroll > headerTop ? 'affix' : 'preffix'}`}>

      <div class="container ">
        <div className="col-12 col-lg-2 d-flex justify-content-between ">
          <Link class="navbar-brand" href="/">
            <Image width={100} height={30.5} src="/full-logo.png" alt="full-logo" />
            {/* <span className='px-2'>ASKGALORE</span> */}
          </Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>

        <div className="col-lg-8 ">
          <div class="collapse navbar-collapse justify-content-center"  >
            <ul class="navbar-nav mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" href="/">Home</Link>
              </li>


              {/* Web3 Menu */}
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="metaverse-development-company" role="button" >
                  Web3 Services
                </a>
                <ul class="dropdown-menu">
                  <li class="dropdown-submenu">
                    <a href="blockchain-development-services" class="dropdown-item">Blockchain Development Services</a>
                  </li>
                  <li class="dropdown-submenu">
                    <a href="hire-blockchain-developers" class="dropdown-item">Hire Blockchain Developers</a>
                  </li>
                  <li class="dropdown-submenu">
                    <a href="nft-marketplace-development-company-2" class="dropdown-item dropdown-toggle">NFT Development & Marketing</a>
                    <ul class="dropdown-menu">
                      <li>
                        <a href="nft-website-development-company-polygon-ethereum-solana-opensea" class="dropdown-item">NFT Development | <br></br>Smart Contract Development</a>
                      </li>
                      <li>
                        <a href="nft-marketplace-development-company-2" class="dropdown-item dropdown-toggle">NFT Marketplace Development</a>
                        <ul class="dropdown-menu">
                          <li class="dropdown-submenu">
                            <a href="nft-marketing-company" class="dropdown-item dropdown-toggle">NFT Development <br></br>& Marketing</a>
                            <ul class="dropdown-menu">
                              <li>
                                <a href="nft-marketplace-development-cost" class="dropdown-item">NFT Marketplace Development Cost</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="nft-marketing-company" class="dropdown-item">NFT Marketing Services</a>
                        <ul class="dropdown-menu">
                          <li>
                            <a href="discord-marketing-company" class="dropdown-item">Discord Marketing</a>
                          </li>
                          <li>
                            <a href="nft-marketing-company-askgalore" class="dropdown-item">NFT Marketing</a>
                          </li>
                          <li>
                            <a href="reddit-marketing-company" class="dropdown-item">Reddit Marketing</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li class="dropdown-submenu">
                    <a href="metaverse-development-company" class="dropdown-item dropdown-toggle">Metaverse Solutions</a>
                    <ul class="dropdown-menu">
                      <li>
                        <a href="real-estate" class="dropdown-item">Real Estate</a>
                      </li>
                      <li>
                        <a href="e-commerce" class="dropdown-item">E-Commerce</a>
                      </li>
                      <li>
                        <a href="travel-and-tourism" class="dropdown-item">Tours & Travels</a>
                      </li>

                      <li>
                        <a href="corporate-branding" class="dropdown-item">Corporate Branding</a>
                      </li>
                      <li>
                        <a href="banking" class="dropdown-item">Banking</a>
                      </li>
                    </ul>
                  </li>
                  <li class="dropdown-submenu">
                    <a href="nft-products" class="dropdown-item dropdown-toggle">NFT Products</a>
                    <ul class="dropdown-menu">
                      <li>
                        <a href="nft-profit-calculator" class="dropdown-item">NFT Profit Calculator</a>
                      </li>
                      <li>
                        <a href="nft-rarity-calculator" class="dropdown-item">NFT Rarity Calculator</a>
                      </li>
                      <li>
                        <a href="nft-price-alert" class="dropdown-item">NFT Price Alert</a>
                      </li>
                      <li>
                        <a href="nft-rarity-sniper" class="dropdown-item">NFT Rarity Sniper</a>
                      </li>
                      <li>
                        <a href="nft-collection-alert" class="dropdown-item">NFT Collection Alert</a>
                      </li>
                      <li>
                        <a href="nft-maker" class="dropdown-item">NFT Maker</a>
                      </li>
                    </ul>
                  </li>
                  <li class="dropdown-submenu">
                    <a href="de-fi-products" class="dropdown-item dropdown-toggle">Defi Products</a>
                    <ul class="dropdown-menu">
                      <li>
                        <a href="payment-splitter" class="dropdown-item">Payment Splitter</a>
                      </li>
                      <li>
                        <a href="payment-mandate" class="dropdown-item">Payment Mandate</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>



              {/* Services Menu */}
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="services" role="button" >
                  Web2.0 Services
                </a>
                <ul class="dropdown-menu">
                  <li class="dropdown-submenu">
                    <a href="it-outsourcing-services" class="dropdown-item">IT Outsourcing Services</a>
                  </li>

                  <li class="dropdown-submenu">
                    <a href="top-mobile-app-development-company" class="dropdown-item dropdown-toggle">Mobile App Development</a>
                    <ul class="dropdown-menu">
                      <li>
                        <a href="react-native-development-services" class="dropdown-item">React Native App Development</a>
                      </li>
                      <li>
                        <a href="flutter-app-development-services" class="dropdown-item">Flutter App Development</a>
                      </li>
                    </ul>
                  </li>
                  <li class="dropdown-submenu">
                    <a href="full-stack-web-development" class="dropdown-item dropdown-toggle">Full Stack Development</a>
                    <ul class="dropdown-menu">
                      <li>
                        <a href="mern-stack-development-company" class="dropdown-item">Mern Stack</a>
                      </li>
                      <li>
                        <a href="reactjs-development-company" class="dropdown-item">Reactjs/Nextjs Development</a>
                      </li>
                      <li>
                        <a href="custom-software-development" class="dropdown-item">Custom Software Development</a>
                      </li>
                      <li>
                        <a href="blockchain-applications" class="dropdown-item">Blockchain Dapps</a>
                      </li>
                    </ul>
                  </li>
                  <li class="dropdown-submenu">
                    <a href="ecommerce-website-development-company" class="dropdown-item dropdown-toggle">E-Commerce Development</a>
                    <ul class="dropdown-menu">
                      <li>
                        <a href="shopify-website-development-agency" class="dropdown-item">Shopify Website Development</a>
                      </li>
                      <li>
                        <a href="ecommerce-website-development-company" class="dropdown-item">Ecommerce Website Development</a>
                      </li>
                      <li>
                        <a href="custom-wordpress-development-company-2" class="dropdown-item">Wordpress Website Development</a>
                      </li>
                    </ul>
                  </li>
                  <li class="dropdown-submenu">
                    <a href="ui-ux-designing" class="dropdown-item">UX/UI Development</a>
                  </li>
                  <li class="dropdown-submenu">
                    <a href="seo-service-provider-company" class="dropdown-item dropdown-toggle">Search Engine Optimization</a>
                    <ul class="dropdown-menu">
                      <li>
                        <a href="seo-service-provider-company" class="dropdown-item">Search Engine Optimization</a>
                      </li>
                      <li>
                        <a href="seo-service-packages" class="dropdown-item">SEO Service Packages</a>
                      </li>
                    </ul>
                  </li>
                  <li class="dropdown-submenu">
                    <a href="digital-marketing" class="dropdown-item dropdown-toggle">Digital Marketing</a>
                    <ul class="dropdown-menu">
                      <li>
                        <a href="performance-marketing-company" class="dropdown-item">Performance Marketing</a>
                      </li>
                      <li>
                        <a href="search-engine-marketing" class="dropdown-item">SEO Marketing</a>
                      </li>
                      <li>
                        <a href="social-media-marketing" class="dropdown-item">Social Media Marketing</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>





              {/* Our Work Menu */}

              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="services" role="button" >
                  Our Work
                </a>
                <ul class="dropdown-menu">
                  <li class="dropdown-submenu">
                    <a class="dropdown-item" href="portfolio">Portfolio</a>
                  </li>
                  <li class="dropdown-submenu">
                    <a class="dropdown-item" href="industries">Industries</a>
                  </li>
                </ul>
              </li>

              {/* Resources Menu */}

              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="services" role="button" >
                  Resources
                </a>
                <ul class="dropdown-menu">
                  <li class="dropdown-submenu">
                    <a class="dropdown-item" href="about-us">About Us</a>
                  </li>
                  <li class="dropdown-submenu">
                    <a class="dropdown-item" href="blogs">Blogs</a>
                  </li>
                </ul>
              </li>

              {/* <li class="nav-item">
                <a class="nav-link" href="blog">Blog</a>
              </li> */}
              <li class="nav-item">
                <a class="nav-link" href="contact-us">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-2 col-md-2">
          {/* Empty div */}
        </div>


        {/* OFFCANVAS MENU */}
        <div className="offcanvas offcanvas-end d-lg-none bg-softblack" tabindex="-1" id="navbarSupportedContent">
          <div className="text-end px-4 py-3 text-danger">
            <button type="button" class="btn btn-outline-danger" data-bs-dismiss="offcanvas" aria-label="Close"><AiOutlineClose size={20} /></button>
          </div>
          <Offcanvas />
        </div>

      </div>
    </nav>
  );
}