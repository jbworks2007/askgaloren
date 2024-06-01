import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import img23 from '../../../public/brands/aspnet.png'
import img0 from '../../../public/Custom1.webp'
import ContactForm from '@/components/Misc/ContactForm'
import { FcAndroidOs } from 'react-icons/fc'
import { AiOutlineFileDone } from 'react-icons/ai'
import { RiInputMethodLine } from 'react-icons/ri'
import { SiW3C } from 'react-icons/si'
import { BsMicrosoft, BsCart4, BsGear } from 'react-icons/bs'
import { IoWatch, IoGameControllerOutline } from 'react-icons/io5'
import { FaShoppingBag, FaLayerGroup, FaUsers, FaBusinessTime, FaFileCode, FaDollarSign, FaGooglePlay } from 'react-icons/fa'
import { TbBrandReactNative, TbApi, TbReportSearch } from 'react-icons/tb'
import { GrAppleAppStore, GrMultiple } from 'react-icons/gr'
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
                    <Image src={img23} width={100} />
                    <h1 className='mt-4'>HIRE ASP.NET DEVELOPER</h1>
                    <h4 className='mt-4'>
                      Hire ASP.NET Developers from Askgalore and accelerate your business in a new direction. Our powerful framework is designed to leverage world-class expertise and boost your business productivity. With our agile development approach, you can expect superior code quality, complete control over the team, and a fast and easy onboarding process. Let us help you take your business to the next level with our expert .Net developers.
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
                <h1>IT Outsourcing Services for .Net Development</h1>
                <p className='lead'>
                  Unlock the full potential of .Net with top-notch IT outsourcing services, providing expert development, support, and maintenance for your projects.
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
                <h2 className='theme-red'>Hire Android Developer for Android App Development from Askgalore</h2>
                <p className='lead'>
                  Looking to take your business to the next level? Askgalore can help you achieve your goals with our comprehensive Android app development services. We specialize in creating custom, intuitive applications that work seamlessly across a range of devices, including smartphones, tablets, watches, and Android TVs.
                </p>
                <div className="col-lg-4">
                  <div className="card-three">
                    <BsMicrosoft size={50} className='mt-2' />
                    <div className="h-8">
                      .NET Application Development
                    </div>
                    <p className='text-justify'>
                      With our custom .NET application development, you can gain greater control over code and implementation. You can set up your team by hiring .Net developers at Askgalore.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-three">
                    <BsCart4 size={50} className='mt-2 text-dark' />
                    <div className="h-8">
                      .NET ECommerce Development
                    </div>
                    <p className='text-justify'>
                      Our experienced .NET programmers can be trusted for ASP.NET-based e-commerce development. We can build and deploy high-performance online storefronts for any business.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-three">
                    <BsGear size={50} className='mt-2 text-warning' />
                    <div className="h-8">
                      Re-Engineering In .NET
                    </div>
                    <p className='text-justify'>
                      Hire our vertically trained .NET developers to re-engineer your existing application in the .NET framework. We use existing libraries to complete the work in less time than expected.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-three">
                    <IoWatch size={50} className='mt-2 text-danger' />
                    <div className="h-8">
                      .NET Application Enhancement
                    </div>
                    <p className='text-justify'>
                      Our .NET application enhancement services include adding features to legacy applications and upgrading .NET versions from 4. X to .NET 4.7 and .NET 4.8.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-three">
                    <IoGameControllerOutline size={50} className='mt-2 text-primary' />
                    <div className="h-8">
                      Product Development In .NET
                    </div>
                    <p className='text-justify'>
                      From ideation to delivery, outsource your product development to us. Hire .NET developers offshore and get your product done under a work-for-hire agreement.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-three">
                    <TbApi size={50} className='mt-2 text-success' />
                    <div className="h-8">
                      API Integration In .NET
                    </div>
                    <p className='text-justify'>
                      Our team of proficient .NET developers, coders, and consultants can help integrate SOAP, JSON, or REST API in a web application or app. We write the best algorithms for optimal performance.
                    </p>
                  </div>
                </div>
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
                <h1 className='text-center py-2 theme-red'>Why Choose Askgalore for Hiring .Net Developers</h1>
                <p className='lead'>Askgalore offers reliable .Net development services to ensure a better ROI. Our passionate .Net developers have a deep understanding of the industry and can provide innovative and tailor-made solutions for your business needs. Here are some reasons why you should choose Askgalore  for hiring .Net developers:</p>
                <ul className='lead'>
                  <li>Vast Experience: Our .Net developers have extensive experience in various .Net frameworks and technologies, allowing them to develop robust and scalable solutions.</li>
                  <li>Quality Assurance: We have a strict quality assurance process in place to ensure that the code and applications developed by our developers are of the highest quality.</li>
                  <li>Customized Solutions: We understand that each business has unique needs, which is why we provide customized solutions that align with your business objectives.</li>
                  <li>Flexibility: We offer flexible engagement models that allow you to hire .Net developers on a full-time, part-time, or project basis.</li>
                  <li>On-Time Delivery: We are committed to delivering projects on time without compromising on quality.</li>
                  <li>Transparent Communication: We believe in transparent communication with our clients to ensure that they are always aware of the project status.</li>
                  <li>Continual Learning: Our developers are encouraged to learn and explore new technologies to stay up-to-date with the latest trends in the industry.</li>
                </ul>
                <p className='lead'>Choose Askgalore for hiring .Net developers and take your business to the next level with innovative and scalable solutions.</p>
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
                <h2 className='text-center theme-red'>HIRE .NET DEVELOPERS WITH EASE WITH ASKGALORE DIGITAL</h2>
                <p className='lead'>
                  Our hiring process for .Net developers includes initial screening, technical interview, coding test, behavioral interview, reference check, offer letter, and onboarding to ensure we hire the best candidates with the required skills and attitude.
                </p>
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

      {/* <section>
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
                      <h3 className="mt-3">Day-to-Day Reporting</h3>
                      <p className="mt-3">
                        Our developers provide daily reports to ensure flawless communication with our clients.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 ">
                    <div className="card-one mx-auto text-center">
                      <RiInputMethodLine size={70} />
                      <h3 className="mt-3">Agile Methodology</h3>
                      <p className="mt-3">
                        We follow the Agile methodology to ensure seamless delivery, deployment, testing, and iterative development.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 ">
                    <div className="card-one mx-auto text-center">
                      <FaDollarSign size={70} />
                      <h3 className="mt-3">Cost-Effective Solutions</h3>
                      <p className="mt-3">
                        We provide cost-effective solutions without compromising the quality of our work.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 ">
                    <div className="card-one mx-auto text-center">
                      <FaFileCode size={70} />
                      <h3 className="mt-3">Source Code Ownership</h3>
                      <p className="mt-3">
                        Our policy ensures that our clients own the source code of the project from the beginning of our engagement.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 ">
                    <div className="card-one mx-auto text-center">
                      <FaBusinessTime size={70} />
                      <h3 className="mt-3">On-Time Delivery</h3>
                      <p className="mt-3">
                        Our proficiency in the Agile methodology helps us maintain an impressive track record of on-time delivery.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 ">
                    <div className="card-one mx-auto text-center">
                      <FaUsers size={70} />
                      <h3 className="mt-3">Vast Experience</h3>
                      <p className="mt-3">
                        We have vast experience in delivering MEAN stack development solutions of the highest quality to our clients.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
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