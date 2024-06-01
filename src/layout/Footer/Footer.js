import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { CiLinkedin } from 'react-icons/ci'
import { CiFacebook } from 'react-icons/ci'
import { CiInstagram } from 'react-icons/ci'
import { CiTwitter } from 'react-icons/ci'
import { CiYoutube } from 'react-icons/ci'
import { RxDividerVertical } from 'react-icons/rx'

export default function Footer() {
    return (
        <>
            <div className="">
                <div className="text-center text-white bg-kite py-3 px-2">
                    <h3>Need help? Call our award-winning support team at +31 (0)636079961</h3>
                </div>
            </div>
            <div className="container-fluid">
                <div className="pt-5 row bg-black justify-content-center text-white">
                    <div className="col-lg-10">
                        <div className="row px-4">
                            <div className="col-lg-4 col-md-6">
                                <Image width={200} height={61} src="/full-logo.png" alt="ag-logo" />
                                {/* <h3>ASKGALORE DIGITAL</h3> */}
                                <p className='lead'>
                                    Askgalore Digital is a Solution Centric, Creative and Client-friendly Information Technology & Digital Marketing company. We work towards the satisfaction of our clients while delivering the highest quality standards.
                                </p>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <h3>USEFUL LINKS</h3>
                                <ul className='lead'>
                                    <li><a href='contact-us' className='link-one'>Contact Us</a></li>
                                    <li><a href='privacy-policy' className='link-one'>Privacy Policy</a></li>
                                    <li><a href='terms-and-condition' className='link-one'>Terms & Conditions</a></li>
                                    <li><a href='refund-cancellation-policy' className='link-one'>Refund & cancellation policy</a></li>
                                    <li><a href='it-security-policy' className='link-one'>IT Security Policy</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-4">
                                <h3>GET IN TOUCH</h3>
                                <p className='lead text-white'>
                                    Landfort 64. Lelystad 8219AL, Netherlands.
                                </p>
                                <br></br>
                                <p className='lead text-white'>
                                    Agomic Labs, 9901 Valley Ranch Pkw E Ste 1030 Irving TX 75063 , USA.
                                </p>
                                <br></br>
                                <p className='lead text-white'>
                                    Maple High Street, 3rd Floor, Office No. 4A, Opp. Aashima Mall, Hoshangabad Road, Bhopal, Madhya Pradesh 462026 INDIA.
                                </p>
                            </div>
                        </div>
                    </div>
                    <hr></hr>

                    <div className="row">
                        <div className="mt-2 col-lg-6 col-md-6 text-secondary d-flex justify-content-center gap-3">
                            <Link className="link-one" href="https://www.linkedin.com/company/askgalore-digital/" target="_blank"><CiLinkedin size={40} /></Link>
                            <Link className="link-one" href="https://www.facebook.com/askgalore" target="_blank"><CiFacebook size={36} /></Link>
                            <Link className="link-one" href="https://www.instagram.com/askgaloredigital/" target="_blank"><CiInstagram size={40} /></Link>
                            {/* <Link className="link-one" href="/"><CiTwitter size={40} /></Link> */}
                            <Link className="link-one" href="https://www.youtube.com/channel/UCB_mCl-DZP1f_SowIS0ZtNA" target="_blank"><CiYoutube size={40} /></Link>
                            {/* <RxDividerVertical size={40} /> */}
                        </div>
                        <div className="pt-1 pb-4 col-lg-6 col-md-6 text-center">
                            <span className="lead">COPYRIGHT©<span className='theme-red'>ASKGALORE</span>2023</span>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

