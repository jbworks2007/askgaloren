import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import img15 from '../../../public/brands/react.png'
import img0 from '../../../public/Custom1.webp'
import ContactForm from '@/components/Misc/ContactForm'
import { FcAndroidOs } from 'react-icons/fc'
import { AiOutlineFileDone } from 'react-icons/ai'
import { BiSupport } from 'react-icons/bi'
import { RiInputMethodLine } from 'react-icons/ri'
import { SiW3C, SiAltiumdesigner } from 'react-icons/si'
import { BsMicrosoft, BsCart4, BsGear, BsWrenchAdjustable } from 'react-icons/bs'
import { IoWatch, IoGameControllerOutline, IoEnter } from 'react-icons/io5'
import { FaShoppingBag, FaLayerGroup, FaUsers, FaBusinessTime, FaFileCode, FaDollarSign, FaGooglePlay } from 'react-icons/fa'
import { TbBrandReactNative, TbApi, TbReportSearch } from 'react-icons/tb'
import { GrAppleAppStore, GrMultiple, GrAppsRounded } from 'react-icons/gr'
import { CiMobile3 } from 'react-icons/ci'
import { MdOutlineManageHistory } from 'react-icons/md'
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
                    <Image src={img15} width={100} />
                    <h1 className='mt-4'>Hire React Native Developer</h1>
                    <h3 className='mt-4'>
                      Hire React Native Developer to take your mobile application to the next level and deliver a seamless user experience across all devices. With the preferred framework for building cross-platform applications, your app will run smoothly on both Android and iOS platforms.
                    </h3>
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
                <h1>IT Outsourcing Services for React Native Development</h1>
                <p className='lead'>
                  Unlock the full potential of React Native with top-notch IT outsourcing services, providing expert development, support, and maintenance for your projects.
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
                <h2 className='theme-red'>Our React Native App Development Services</h2>
                <p className='lead'>
                  We offer a range of React Native app development services that utilize innovative web and mobile application environments. Our services include:
                </p>
                <div className="col-lg-4">
                  <div className="card-three">
                    <SiAltiumdesigner size={50} className='mt-2' />
                    <div className="h-8">
                      App UI/UX Designing
                    </div>
                    <p className='text-justify'>
                      Our of React Native application experts provides exceptional UI/UX development servicteam es for web and mobile apps, staying up-to-date with the latest design trends.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-three">
                    <TbApi size={50} className='mt-2 text-dark' />
                    <div className="h-8">
                      API & Web Service Integration
                    </div>
                    <p className='text-justify'>
                      With years of experience, our offshore React resources excel in developing APIs and integrating them into customized software apps.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-three">
                    <TbBrandReactNative size={50} className='mt-2 text-warning' />
                    <div className="h-8">
                      React Consultants
                    </div>
                    <p className='text-justify'>
                      Our React front-end developers offer end-to-end support and maintenance for your existing website, ensuring it stays up-to-date.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-three">
                    <BiSupport size={50} className='mt-2 text-danger' />
                    <div className="h-8">
                      Support & Maintenance Services
                    </div>
                    <p className='text-justify'>
                      For hassle-free migration and up-gradation of your web app from different technologies to React, outsource React development and avail of our affordable support and maintenance services.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-three">
                    <TbBrandReactNative size={50} className='mt-2 text-primary' />
                    <div className="h-8">
                      Custom React Development
                    </div>
                    <p className='text-justify'>
                      Our team of expert React developers strives to build scalable, secure, and feature-rich customized React-based websites.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-three">
                    <IoEnter size={50} className='mt-2 text-success' />
                    <div className="h-8">
                      Migration from Other Technologies
                    </div>
                    <p className='text-justify'>
                      Save costs and improve performance by migrating your application from Swift, Objective C, Cordova, or Phonegap to React Native. Hire our React developers for hassle-free migration.
                    </p>
                  </div>
                </div>
                {/* <div className="col-lg-4">
                  <div className="card-three">
                    <GrAppsRounded size={50} className='mt-2 text-danger' />
                    <div className="h-8">
                      Porting Web Apps
                    </div>
                    <p className='text-justify'>
                      Our team of MERN Stack developers possesses expertise in porting and migrating applications over the MERN framework.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-three">
                    <FaShoppingBag size={50} className='mt-2 text-primary' />
                    <div className="h-8">
                      eCommerce Development
                    </div>
                    <p className='text-justify'>
                      Our offshore MERN Stack programmers develop eCommerce websites, including backend and frontend development. They also perform testing, debugging, and maintenance support.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-three">
                    <BsWrenchAdjustable size={50} className='mt-2 text-success' />
                    <div className="h-8">
                      Technical Maintenance & Support
                    </div>
                    <p className='text-justify'>
                      Our developers provide ongoing support and maintenance services to ensure your application operates smoothly and efficiently. We identify, resolve and implement updates and upgrades to keep your system up-to-date and secure.
                    </p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-grlite'>
        <div className="container ptb-50">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="">
                <h1 className='text-center py-2 theme-red'>Why Hire React Native App Developers from Askgalore</h1>
                <p className='lead'>We take pride in providing the best remote React Native app developers to help you achieve your project goals. Here are the reasons why you should hire our developers:</p>
                <ul className='lead'>
                  <li>Scalability: Our React Native developers possess a fundamental understanding of applied Javascript concepts, allowing them to develop scalable apps.</li>
                  <li>Technical Expertise: Our developers have a solid grasp of React architecture patterns, enabling them to make the right choice of libraries for your project.</li>
                  <li>Continuous Integration: Our team of full-stack developers has a working knowledge of the backend, ensuring seamless integration for your app.</li>
                  <li>Industry Expertise: With over 50 React Native applications built, we have gained solid experience and a deep understanding of this technology’s complex aspects.</li>
                  <li>Familiarity with Different Databases: Our dedicated tech leads assigned to the project can find solutions to bottlenecks, allowing them to work with various databases.</li>
                  <li>DevOps Practices: We follow DevOps practices and use CI/CD pipelines to ensure continuous releases throughout our development process.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-buzz ptb-50">
          <h1 className="text-white text-center">Why Hire MEAN Stack Developers from Askgalore</h1>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <p className='lead text-white'>
                  Hire MEAN Stack Developer from our team of highly experienced professionals who know how to utilize cutting-edge technology to deliver innovative solutions. Here are some other reasons why we are the best choice for your MEAN stack development needs:</p>
                <div className="mt-3 row g-2">
                  <div className="col-lg-4 ">
                    <div className="card-one mx-auto text-center">
                      <TbReportSearch size={70} />
                      <h3 className="mt-3">Select Developers</h3>
                      <p className="mt-3">
                        Askgalore helps you choose from their top React Native developers worldwide, taking care of vetting and handling payroll, compliance, hosting, and benefits for all remote hires.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 ">
                    <div className="card-one mx-auto text-center">
                      <RiInputMethodLine size={70} />
                      <h3 className="mt-3">Manage Your Team</h3>
                      <p className="mt-3">
                        Once you finalize potential candidates, they integrate them seamlessly into your team, and dedicated React Native engineers join your internal communication channels and project management tools.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 ">
                    <div className="card-one mx-auto text-center">
                      <FaDollarSign size={70} />
                      <h3 className="mt-3">Prototype Often</h3>
                      <p className="mt-3">
                        Askgalore’s React Native app developers follow an agile approach, building prototypes through iterative stages of requirement, design, implementation, and testing to improve decisions and ensure the right iterations move into development.
                      </p>
                    </div>
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
              <div className="text-light">
                <h3 className='text-center theme-red'>Contact Us Today To Hire React Native App Developers</h3>
              </div>
              <div className="mt-4 text-center">
                <Link href="/contact-us"><button className='btn btn-royal' role='button'>GET IN TOUCH</button></Link>
              </div>
            </div>
          </div>
        </div>
      </section>


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

      {/* <section className='bg-grlite ptb-50'>
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
      </section> */}

      {/* <section className='bg-softblack'>
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
      </section> */}

      <Outsourcing />

      <FormOutsource />
    </>
  )
}