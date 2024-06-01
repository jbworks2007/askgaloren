import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import img19 from '../../../public/brands/flutter.png'
import img0 from '../../../public/Custom1.webp'
import ContactForm from '@/components/Misc/ContactForm'
import { SiAzuredevops } from 'react-icons/si'
import { BsGooglePlay, BsWrenchAdjustable, BsAndroid2 } from 'react-icons/bs'
import { ImCross } from 'react-icons/im'
import { FaProjectDiagram, FaUserCheck, FaBroadcastTower } from 'react-icons/fa'
import { TbBrandReactNative } from 'react-icons/tb'
import { GrAppleAppStore, GrMultiple } from 'react-icons/gr'
import { CiMobile3 } from 'react-icons/ci'
import { GiSteampunkGoggles } from 'react-icons/gi'
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
                    <Image src={img19} width={100} />
                    <h1 className='mt-4'>HIRE FLUTTER DEVELOPER</h1>
                    <h4 className='mt-4'>
                      Hire Flutter Developer to benefit from our expertise in creating cost-effective and efficient applications. Our team specializes in developing perfectly crafted, creative, and leading-edge solutions using Flutter, serving clients globally.
                    </h4>
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

      <section className='bg-softblack'>
        <div className="container ptb-50">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="text-center text-light">
                <h1>IT Outsourcing Services for Flutter Development</h1>
                <p className='lead'>
                  Unlock the full potential of Flutter with top-notch IT outsourcing services, providing expert development, support, and maintenance for your projects.
                </p>
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
                <h2 className='theme-red'>Hire Flutter Developers for Comprehensive Mobile Application Development Services</h2>
                {/* <p className='lead'>
                  Solidity developers at Askgalore Digital quickly deploy blockchain development and provide reliable support for your ongoing projects.
                </p> */}
                <div className="col-lg-3">
                  <div className="card-three">
                    <BsAndroid2 size={50} className='mt-2 text-success' />
                    <div className="h-8">
                      Flutter Android App Development
                    </div>
                    <p className='text-justify'>
                      A full-stack, high-quality application for the Android platform.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="card-three">
                    <GrAppleAppStore size={50} className='mt-2 text-primary' />
                    <div className="h-8">
                      Flutter iOS App Development
                    </div>
                    <p className='text-justify'>
                      Optimization of your application to take full advantage of the iOS platform.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="card-three">
                    <FaBroadcastTower size={50} className='mt-2 text-danger' />
                    <div className="h-8">
                      IoT - Internet of Things
                    </div>
                    <p className='text-justify'>
                      High-functionality IoT applications to meet modern needs.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="card-three">
                    <BsGooglePlay size={50} className='mt-2 text-success' />
                    <div className="h-8">
                      Wearable App Development
                    </div>
                    <p className='text-justify'>
                      Expert creation of applications for wearable devices such as watches and glasses.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="card-three">
                    <ImCross size={50} className='mt-2 text-warning' />
                    <div className="h-8">
                      Cross Platforms App Development
                    </div>
                    <p className='text-justify'>
                      Creation of multi-platform applications for iOS and Android.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="card-three">
                    <TbBrandReactNative size={50} className='mt-2 text-primary' />
                    <div className="h-8">
                      Native App Development
                    </div>
                    <p className='text-justify'>
                      Implementation of the best tools and features for your native application.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="card-three">
                    <GrMultiple size={50} className='mt-2 text-success' />
                    <div className="h-8">
                      Hybrid App Development
                    </div>
                    <p className='text-justify'>
                      Extensive knowledge and experience with hybrid app frameworks.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="card-three">
                    <GiSteampunkGoggles size={50} className='mt-2 text-danger' />
                    <div className="h-8">
                      AR/VR App Development
                    </div>
                    <p className='text-justify'>
                      Custom, futuristic applications to make your company stand out.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className='bg-grlite'>
        <div className="container ptb-50">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="">
                <h1 className='text-center py-2 theme-red'>Why Choose AskGalore to Hire AWS DevOps Engineers?</h1>
                <p className='lead'>At AskGalore, we use modern technology and state-of-the-art infrastructure to provide efficient and reliable AWS DevOps solutions. Our team of AWS DevOps Engineers is dedicated to optimizing your operations and boosting productivity with cutting-edge technologies.</p>
                <ul className='lead'>
                  <li>Flexible engagement models tailored to your unique business requirements</li>
                  <li>Global support always within reach</li>
                  <li>On-time delivery at affordable prices</li>
                  <li>Strong technology competency for high-quality solutions</li>
                  <li>State-of-the-art infrastructure supporting our services</li>
                  <li>Seamless communication and collaboration with clients</li>
                  <li>Simple and fast on-board hiring process to get your project started quickly</li>
                  <li>Quality assurance a top priority during testing</li>
                  <li>Complete transparency in development</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section>
        <div className="container ptb-50">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="row justify-content-center">
                <div className="col-lg-6">
                  <Image src={img0} width={500} />
                </div>
                <div className="col-lg-6">
                  <h2 className='text-center theme-red'>Recruitment process</h2>
                  <p className='lead'>Hire Dedicated AWS DevOps Developers from Askgalore and enjoy our streamlined recruitment process. We gather your requirements and carefully select the best candidates to match your needs. Our team conducts technical interviews to ensure we provide you with highly skilled professionals who are dedicated to meeting your business goals. We take every step seriously to ensure the best resource augmentation services, so you can focus on achieving your objectives without any worries.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className='bg-grlite ptb-50'>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h2 className='text-center theme-red'>Revolutionize Your App Development with Flutter Developers</h2>
              <ul className='lead '>
                Collaborate with Flutter Developers to maximize your development resources and achieve project success. Our services offer the following benefits:
                <li>The best use of Flutter features and functions</li>
                <li>Exceptional user experiences</li>
                <li>Confidentiality of your data and adherence to NDAs</li>
                <li>Innovative project deliverables</li>
                <li>A satisfaction guarantee</li>
                <li>Customizations tailored to your business needs</li>
                <li>An iterative approach to meet your requirements and feedback</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* <section>
        <div className="bg-buzz ptb-50">
          <h1 className="text-white text-center">Why Hire Solidity Developers from Askgalore</h1>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                 <p className='lead text-white'>At Askgalore, we offer a team of highly skilled AWS DevOps Engineers, complemented by testing professionals for quality audits and project managers for smooth project execution. Our quick, easy, and transparent hiring process ensures a seamless onboarding experience for our clients.</p>
                <div className="mt-3 row g-2">
                  <div className="col-lg-4 ">
                    <div className="card-one mx-auto text-center">
                      <FaUserCheck size={50} />
                      <h3 className="mt-1">Top Quality Experts</h3>
                      <p className="mt-1">
                        Our Solidity Developers are selected from a talent pool of over 1 million Solidity Engineers, with only the top 1% being chosen. They collaborate and share their knowledge, resulting in faster and more advanced development.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 ">
                    <div className="card-one mx-auto text-center">
                      <CiMobile3 size={50} />
                      <h3 className="mt-1">Easy Team Scaling</h3>
                      <p className="mt-1">
                        You can onboard a Solidity Developer from our Solidity Development Company within some days and easily scale your team to meet your project’s needs.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 ">
                    <div className="card-one mx-auto text-center">
                      <FaProjectDiagram size={50} />
                      <h3 className="mt-1">Requirement Matched Fit</h3>
                      <p className="mt-1">
                        Send us your requirements, and we’ll select the best Solidity Engineers to match your specifications. You can then interview them and work closely with our skilled professionals at our Solidity Development company.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 ">
                    <div className="card-one mx-auto text-center">
                      <FaProjectDiagram size={50} />
                      <h3 className="mt-1">Transparency and Integrity</h3>
                      <p className="mt-1">
                        Our project managers have extensive experience in project management and use the most up-to-date communication technologies to provide you with complete transparency and integrity.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 ">
                    <div className="card-one mx-auto text-center">
                      <FaProjectDiagram size={50} />
                      <h3 className="mt-1">Easy Hiring and Onboarding</h3>
                      <p className="mt-1">
                        Our Solidity Development Experts take care of everything, including NDAs and payment, making the hiring and onboarding process hassle-free.
                      </p>
                    </div>
                  </div>
                </div>
                 <h3 className='mt-3 text-center text-white'>100% Transparency</h3> 
                 <p className='mt-2 text-white lead'>At Askgalore, we believe in providing complete transparency throughout the development process. With our dedicated expert model, you will receive timely project updates to accurately forecast and prioritize releases, ensuring that the final product meets your business needs.</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className='bg-softblack'>
        <div className="container ptb-50">
          <div className="row justify-content-center">
            <div className="col-lg-10 p-4">
              <div className="text-center text-light">
                <h1 className='theme-red'>Hire Skilled Flutter Developers from Askgalore and Elevate Your Mobile App Development Project</h1>
                <p className="mt-3 lead text-justify">
                  Extend your team with top-class talent by hiring Flutter Developers from Askgalore! Whether you’re a start-up, scale-up, or established organization, our experienced and skilled Flutter Developers can help you create highly interactive, scalable, and well-structured cross-platform mobile and web apps.                                                                                                  With our agile expertise in writing Dart code and extensive experience in utilizing Flutter widgets to enhance the compatibility of iOS and Android apps, hiring our Flutter Developers will elevate your Flutter app development project. Additionally, our team includes QA specialists, UI/UX designers, and professionals with in-depth knowledge of Dart language to provide comprehensive support for your project.
                </p>
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