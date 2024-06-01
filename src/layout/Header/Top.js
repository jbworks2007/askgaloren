import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CiLinkedin } from 'react-icons/ci'
import { CiFacebook } from 'react-icons/ci'
import { CiInstagram } from 'react-icons/ci'
import { CiTwitter } from 'react-icons/ci'
import { CiYoutube } from 'react-icons/ci'
import { RxDividerVertical } from 'react-icons/rx'



export default function Top() {
  return (
    <div className="container-fluid top-header pt-2 top-bar md-hide">
      <div className="container">
        <div className="row ">
          <div className="col-lg-6 col-md-4">
            <Link className="d-flex justify-content-start align-items-baseline link-one" href="/">
              <Image width={200} height={61} src="/full-logo.png" alt="ag-logo" />
              {/* <h1 className="text-secondary">ASKGALORE</h1> */}
            </Link>

          </div>
          <div className="mt-2 col-lg-6 col-md-8 md-adjust justify-content-end align-items-center text-secondary d-flex gap-3">
            <Link className="link-one" href="https://www.linkedin.com/company/askgalore-digital/" target="_blank"><CiLinkedin size={40} /></Link>
            <Link className="link-one" href="https://www.facebook.com/askgalore" target="_blank"><CiFacebook size={36} /></Link>
            <Link className="link-one" href="https://www.instagram.com/askgaloredigital/" target="_blank"><CiInstagram size={40} /></Link>
            {/* <Link className="link-one" href="/"><CiTwitter size={40} /></Link> */}
            <Link className="link-one" href="https://www.youtube.com/channel/UCB_mCl-DZP1f_SowIS0ZtNA" target="_blank"><CiYoutube size={40} /></Link>
            <RxDividerVertical size={40} />
            <span className="lead num-one">+31 (0)636079961</span>
          </div>
        </div>
      </div>
    </div>
  );
}

