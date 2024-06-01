import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import img24 from '../../../public/brands/shell.png'
import img0 from '../../../public/Custom1.webp'
import ContactForm from '@/components/Misc/ContactForm'
import { FcAndroidOs } from 'react-icons/fc'
import { AiOutlineFileDone } from 'react-icons/ai'
import { RiInputMethodLine } from 'react-icons/ri'
import { SiW3C } from 'react-icons/si'
import { BsMicrosoft, BsCart4, BsGear, BsWrenchAdjustable } from 'react-icons/bs'
import { IoWatch, IoGameControllerOutline } from 'react-icons/io5'
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
                    <Image src={img24} width={100} />
                    <h1 className='mt-4'>HIRE MERN STACK DEVELOPER</h1>
                    <h5 className='mt-4'>
                      Hire MERN Stack developers from Askgalore. With our MERN Stack developers, you can explore various growth opportunities for your business by creating secure and scalable interactive web solutions for startups, enterprises, and entrepreneurs. Our developers adhere to the best code practices and follow CMMI level 3 certified processes, ensuring complete control over the team, on-time delivery, and smooth communication. Hire MERN Stack developers to build your next web solution and achieve success in the digital world.
                    </h5>
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
                <h1>IT Outsourcing Services for Mern Stack Development</h1>
                <p className='lead'>
                  Unlock the full potential of Mern Stack with top-notch IT outsourcing services, providing expert development, support, and maintenance for your projects.
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
                <h2 className='theme-red'>Hire MERN Stack Developers for Innovative Web Solutions</h2>
                <p className='lead'>
                  Askgalore offers you the opportunity to hire MERN Stack developers online, who have expertise in various areas of MERN Stack-based web solutions. Our developers possess vast experience in the following areas:
                </p>
                <div className="col-lg-4">
                  <div className="card-three">
                    <FaLayerGroup size={50} className='mt-2' />
                    <div className="h-8">
                      Custom CMS Development
                    </div>
                    <p className='text-justify'>
                      Our offshore MERN Stack programmers create user-friendly and interactive CMS for small to large-scale businesses.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-three">
                    <BsCart4 size={50} className='mt-2 text-dark' />
                    <div className="h-8">
                      Enterprise Application Development
                    </div>
                    <p className='text-justify'>
                      Our MERN Stack developers in India have experience in developing cost-effective, scalable, and seamless applications that run across devices.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-three">
                    <BsGear size={50} className='mt-2 text-warning' />
                    <div className="h-8">
                      Migration & Integration
                    </div>
                    <p className='text-justify'>
                      Our team of web experts has hands-on experience in migrating and integrating business applications to MERN Stack-based platforms.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-three">
                    <IoWatch size={50} className='mt-2 text-danger' />
                    <div className="h-8">
                      Quality Assurance
                    </div>
                    <p className='text-justify'>
                      Hire dedicated MERN Stack developers who ensure that your business applications meet the highest quality standards.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-three">
                    <IoGameControllerOutline size={50} className='mt-2 text-primary' />
                    <div className="h-8">
                      MERN Stack API Development
                    </div>
                    <p className='text-justify'>
                      Our developers create Application Programming Interfaces (APIs) using a specific set of technologies and deliver full-fledged web applications.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-three">
                    <TbApi size={50} className='mt-2 text-success' />
                    <div className="h-8">
                      SPA & Real-time App Development
                    </div>
                    <p className='text-justify'>
                      Our MERN Stack developers create web applications that provide a seamless user experience and real-time data updates.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
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
                <h1 className='text-center py-2 theme-red'>Why Choose Askgalore to Hire MERN Stack Developers</h1>
                <p className='lead'>Hiring our best MERN Stack developers can provide you with unique approaches and clean, pragmatic designs for building your vision. Here are some reasons why we are the top choice:</p>
                <ul className='lead'>
                  <li>Scalability – Our Angular developers have a fundamental understanding of applied JavaScript concepts, such as IIFE, Objective, and JSON, ensuring the scalability of your project.</li>
                  <li>Technical Expertise – We understand modular Angular architecture patterns and guide the right choice of libraries, demonstrating our technical expertise.</li>
                  <li>Skilled Programmer – Our team is full-stack, meaning our developers also have working knowledge of the backend, making them skilled programmers.</li>
                  <li>Experience with 3rd party modules – With 50+ applications built in Angular, we have solid experience and understanding of complex parts of Angular, especially with 3rd party modules.</li>
                  <li>Assigned Dedicated Tech Lead – A dedicated tech lead is assigned to your project, which means we are finding solutions to your bottleneck.</li>
                  <li>Follow DevOps Practices – Our development process utilizes CI/CD pipelines and DevOps practices, ensuring continuous release and following best practices.</li>
                </ul>
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
                <h3 className='text-center theme-red'>Unleash Your Vision with Our Top-Tier MERN Stack Developers - Contact Us Today!</h3>
                <p className='lead'>
                  Our team of MERN Stack developers is dedicated to providing you with the best possible development experience. We are committed to clean, pragmatic designs, technical expertise, and following DevOps practices for continuous release. If you want to learn more about how our team can help you achieve your vision, please don’t hesitate to contact us today. Let’s work together to make your project a reality!
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