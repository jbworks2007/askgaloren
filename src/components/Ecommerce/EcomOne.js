import React from "react";
import { FaStore } from 'react-icons/fa'
import { BsShop } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { BsFillCartCheckFill } from 'react-icons/bs'
import { IoMdAppstore } from 'react-icons/io'
import { FaTicketAlt } from 'react-icons/fa'
import { FaBarcode } from 'react-icons/fa'
import { RiAuctionFill } from 'react-icons/ri'
import { RiCheckboxMultipleFill } from 'react-icons/ri'
import { GoChecklist } from 'react-icons/go'


export default function EcomOne() {

    return (
        <div className="container-fluid ptb-50 bg-royal">
            <h1 className="text-center text-white">What We Do For Your Business Growth</h1>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-lg-4 text-center">
                        <FaStore className="poppy-blue" size={70} />
                        <h5 className="mt-4 text-white">B2C MARKETPLACE DEVELOPMENT</h5>
                        <p className="mt-3 ice-gray">
                            Create a perfect online marketplace for web or mobile platforms (Apps) that are particular to achieve your business goals. We assure the potential for successful B2C eCommerce marketplaces that is fully customizable based on your business & brand's need. We are the top leading eCommerce developers.
                        </p>
                    </div>
                    <div className="col-lg-4 text-center">
                        <FaFacebookF className="poppy-blue" size={70} />
                        <h5 className="mt-4 text-white">SOCIAL E-COMMERCE DEVELOPMENT</h5>
                        <p className="mt-3 ice-gray">
                            We have world-class teams of eCommerce development experts. That's why we ideally develop eCommerce solutions for social shopping platforms that are extremely fast and fully secured. We improve customers' buying experience by implementing attractive UI-UX on our provided platforms.
                        </p>
                    </div>
                    <div className="col-lg-4 text-center">
                        <BsFillCartCheckFill className="poppy-blue" size={70} />
                        <h5 className="mt-4 text-white">B2B MARKETPLACE DEVELOPMENT</h5>
                        <p className="mt-3 ice-gray">
                            Our eCommerce solution is easy to navigate between multiple categories and multi-products. All listing is too easy to help the seller and buyers navigate desired products quickly. We provide bulk price solutions that help to manage the B2B business segment and fulfill your all desire regarding your B2B eCommerce marketplaces that are 100% customizable as per the needs
                        </p>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-4 text-center">
                        <IoMdAppstore className="poppy-blue" size={70} />
                        <h5 className="mt-4 text-white">ONLINE STORE DEVELOPMENT</h5>
                        <p className="mt-3 ice-gray">
                            Being a top e-commerce development company, we manage multiple online store projects of varied complexities. Our expert team of developers resolves all kinds of challenges extremely professionally regarding online business services & the security of your eCommerce store.
                        </p>
                    </div>
                    <div className="col-lg-4 text-center">
                        <FaTicketAlt className="poppy-blue" size={70} />
                        <h5 className="mt-4 text-white">TICKETING AND BOOKING SOLUTIONS</h5>
                        <p className="mt-3 ice-gray">
                            Askgalore digital is the best e-commerce development service provider. Our e-ticketing solution is perfect for making ticketing and booking activities easy and comfortable for customers globally.
                        </p>
                    </div>
                    <div className="col-lg-4 text-center">
                        <FaBarcode className="poppy-blue" size={70} />
                        <h5 className="mt-4 text-white">ECOMMERCE AGGREGATORS</h5>
                        <p className="mt-3 ice-gray">
                            We offer a perfect solution to attract vendors and unite their offerings in various categories. Our proficient teams implement e-commerce aggregators solutions. That is too easy to allow our clients to easily present and handle distinct brands.
                        </p>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-4 text-center">
                        <RiAuctionFill className="poppy-blue" size={70} />
                        <h5 className="mt-4 text-white">AUCTION & BIDDING PLATFORM</h5>
                        <p className="mt-3 ice-gray">
                            We aid various e-commerce businesses in expanding their trading experience all through online bidding and auctions portals. Our skilled solutions allow the owners of the portals to arrange various sorts of auctions, organize bid items, and more.
                        </p>
                    </div>
                    <div className="col-lg-4 text-center">
                        <RiCheckboxMultipleFill className="poppy-blue" size={70} />
                        <h5 className="mt-4 text-white">MULTI VENDOR E-COM SITE DEVELOPMENT</h5>
                        <p className="mt-3 ice-gray">
                            We develop a multi vendor eCommerce website and mobile application platform for you that enables you as a leading eCommerce company with multiple sellers and multiple product categories.
                        </p>
                    </div>
                    <div className="col-lg-4 text-center">
                        <GoChecklist className="poppy-blue" size={70} />
                        <h5 className="mt-4 text-white">LISTING ECOMMERCE DEVELOPMENT</h5>
                        <p className="mt-3 ice-gray">
                            We can create an eCommerce portal listing for multiple domains, enabling users to upload their listing on your portals, like many popular portals, e.g. Justdial, Indiamart, car24 and many more.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}