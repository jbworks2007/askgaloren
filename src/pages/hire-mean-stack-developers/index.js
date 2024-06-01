import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import img18 from '../../../public/brands/code.png'
import img0 from '../../../public/Custom1.webp'
import ContactForm from '@/components/Misc/ContactForm'
import { IoEnter } from 'react-icons/io5'
import { AiOutlineFileDone } from 'react-icons/ai'
import { RiInputMethodLine } from 'react-icons/ri'
import { SiAzuredevops } from 'react-icons/si'
import { BsGooglePlay, BsWrenchAdjustable, BsCodeSquare } from 'react-icons/bs'
import { ImCross } from 'react-icons/im'
import { FaShoppingBag, FaLayerGroup, FaUsers, FaBusinessTime, FaFileCode, FaDollarSign } from 'react-icons/fa'
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
                    <Image src={img18} width={100} />
                    <h1 className='mt-4'>HIRE MEAN STACK DEVELOPER</h1>
                    <h5 className='mt-4'>
                      Are you looking to hire a skilled Mean Stack developer? Look no further! Our team of experienced developers specializes in building robust and scalable web applications using the powerful combination of MongoDB, Express.js, Angular, and Node.js. With our expertise, we can help you create dynamic, custom web solutions that will give your business a competitive edge.  So why wait? Hire Mean Stack developers today from Askgalore and start building the web application of your dreams.
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
                <h1>IT Outsourcing Services for Mean Stack Development</h1>
                <p className='lead'>
                  Unlock the full potential of Mean Stack with top-notch IT outsourcing services, providing expert development, support, and maintenance for your projects.
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
                <h2 className='theme-red'>Hire MEAN Stack Developers for Innovative and Scalable Solutions</h2>
                {/* <p className='lead'>
                  Solidity developers at Askgalore Digital quickly deploy blockchain development and provide reliable support for your ongoing projects.
                </p> */}
                <div className="col-lg-6">
                  <div className="card-three">
                    <BsCodeSquare size={50} className='mt-2 text-success' />
                    <div className="h-8">
                      MEAN Stack Consulting Services
                    </div>
                    <p className='text-justify'>
                      Our experienced MEAN stack developers offer result-driven MEAN stack solutions using their expertise in JavaScript.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card-three">
                    <FaShoppingBag size={50} className='mt-2 text-danger' />
                    <div className="h-8">
                      MEAN Stack eCommerce Development
                    </div>
                    <p className='text-justify'>
                      We develop intuitive and responsive eCommerce applications using the NoSQL database and JS to enhance business productivity. Hire our MEAN stack developers today.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card-three">
                    <FaLayerGroup size={50} className='mt-2 text-success' />
                    <div className="h-8">
                      MEAN Stack Web Development
                    </div>
                    <p className='text-justify'>
                      Our MEAN stack experts use their extensive knowledge in ExpressJS, Angular or AngularJS, and NodeJS to create innovative, scalable, and secure web applications.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card-three">
                    <MdOutlineManageHistory size={50} className='mt-2 text-warning' />
                    <div className="h-8">
                      MEAN Stack CMS Development
                    </div>
                    <p className='text-justify'>
                      We offer outstanding CMS development for SMEs to large enterprises by our skilled MEAN stack developers. Hiring developers means you get flexible, robust, fast, and feature-rich web, component, or enterprise content management systems.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card-three">
                    <TbBrandReactNative size={50} className='mt-2 text-primary' />
                    <div className="h-8">
                      MEAN Stack ERP Development
                    </div>
                    <p className='text-justify'>
                      Our vast experience in ERP development enables us to build cost-effective, scalable, and seamless MEAN solutions that streamline day-to-day business activities.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card-three">
                    <GrMultiple size={50} className='mt-2 text-success' />
                    <div className="h-8">
                      MEAN Stack Application Development
                    </div>
                    <p className='text-justify'>
                      We use MongoDB and NodeJS backend technologies to create high-performance mobile apps, including hybrid apps made with Java, .NET, and PHP. Our MEAN stack developers are passionate about building scalable applications for all industry verticals.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card-three">
                    <IoEnter size={50} className='mt-2 text-danger' />
                    <div className="h-8">
                      MEAN Stack Migration & Porting
                    </div>
                    <p className='text-justify'>
                      We migrate legacy business applications to MEAN Stack-based platforms seamlessly with thorough planning, practical strategies, and multiple tests before the actual migration. Talk to our expert MEAN stack consultants to plan your migration now.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card-three">
                    <TbApi size={50} className='mt-2 text-primary' />
                    <div className="h-8">
                      MEAN Stack API Development
                    </div>
                    <p className='text-justify'>
                      We create secure and scalable backends using APIs to bridge digital gaps. Our API development and documentation skills allow you to connect and access data easily and in an organized way.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card-three">
                    <AiOutlineFileDone size={50} className='mt-2 text-success' />
                    <div className="h-8">
                      MEAN Stack Testing and QA
                    </div>
                    <p className='text-justify'>
                      Our experienced MEAN stack developers run QA (Quality Assurance) tests meticulously on your solution to ensure a successful implementation. We proactively fix bugs in production instead of reactive bug-fixing by considering all possible scenarios in the tests.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card-three">
                    <BsWrenchAdjustable size={50} className='mt-2 text-warning' />
                    <div className="h-8">
                      MEAN Stack Support and Maintenance Services
                    </div>
                    <p className='text-justify'>
                      We offer extensive maintenance and support services to help you stay stress-free and focus on other essential aspects of your business. After the MEAN stack development process is complete, we provide aftersales support.
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
      </section>

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