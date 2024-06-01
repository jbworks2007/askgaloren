import React from 'react'
import Image from 'next/image'
import image1 from '../../../public/mobile-view.webp'
import gif1 from '../../../public/herogif.gif'
import hero from '../../../public/hero.gif'

export default function HeroVideo() {
    return (
        <>
            <div className='d-none d-sm-none d-md-block'>
                {/* <video src="video.mp4" type=""
                    width="100%"
                    height="100%"
                    objectFit="cover"
                    autoPlay
                    muted
                /> */}
                <Image
                    src={hero}
                    alt="Hero Image"
                    style={{ objectFit: "cover", width: "-webkit-fill-available" }}
                />
            </div>

            <Image
                className='d-sm-block d-md-none'
                src={gif1}
                alt="logo-image"
                style={{ objectFit: "cover", width: "-webkit-fill-available" }}
            />
        </>
    )
}
