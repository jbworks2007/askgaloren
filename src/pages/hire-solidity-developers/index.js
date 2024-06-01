import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import img11 from '../../../public/brands/solidity.png'
import img0 from '../../../public/Custom1.webp'
import ContactForm from '@/components/Misc/ContactForm'
import { SiAzuredevops } from 'react-icons/si'
import { BsRocket, BsWrenchAdjustable } from 'react-icons/bs'
import { BiSupport } from 'react-icons/bi'
import { FaProjectDiagram, FaLaptopCode, FaUserCheck } from 'react-icons/fa'
import { HiLightBulb } from 'react-icons/hi'
import { GrUserExpert } from 'react-icons/gr'
import { CiMobile3 } from 'react-icons/ci'
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
                    <Image src={img11} width={100} />
                    <h1 className='mt-4'>HIRE SOLIDITY DEVELOPER</h1>
                    <h4 className='mt-4'>
                      Hire Solidity Developers who possess practical experience in Solidity programming and can provide your company with a technical advantage. By leveraging the potential of Blockchain technology, our Solidity Developers have assisted major companies in developing successful smart contracts and dApps that are tailored to their specific needs.
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
                <h1>IT Outsourcing Services for SOLIDITY Development</h1>
                <p className='lead'>
                  Unlock the full potential of SOLIDITY with top-notch IT outsourcing services, providing expert development, support, and maintenance for your projects.
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
                <h2 className='theme-red'>HIRE SOLIDITY DEVELOPERS ON DEMAND WITH THESE CORE EXPERTISE</h2>
                <p className='lead'>
                  Solidity developers at Askgalore Digital quickly deploy blockchain development and provide reliable support for your ongoing projects.
                </p>
                <div className="col-lg-4">
                  <div className="card-three">
                    <SiAzuredevops size={50} className='mt-2 text-primary' />
                    <div className="h-8">
                      Smart Contract Development
                    </div>
                    <p className='text-justify'>
                      Our team of Solidity developers specializes in the entire smart contract development process, which includes writing, testing, deploying, and monitoring contracts on various platforms such as Ethereum blockchain, Neo blockchain, and Hedera Hashgraph.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-three">
                    <FaLaptopCode size={50} className='mt-2 text-danger' />
                    <div className="h-8">
                      dApp Development
                    </div>
                    <p className='text-justify'>
                      Using the Solidity programming language, our skilled Solidity development team creates secure, user-friendly dApps.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-three">
                    <BsRocket size={50} className='mt-2 text-warning' />
                    <div className="h-8">
                      Digital Token Creation
                    </div>
                    <p className='text-justify'>
                      We assist in creating digital tokens that can be minted, burned, upgraded, and transferred in your ERC20 token creation, allowing for seamless smart contract integration.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-three">
                    <BiSupport size={50} className='mt-2 text-dark' />
                    <div className="h-8">
                      Testing and Audit
                    </div>
                    <p className='text-justify'>
                      Our Solidity developers ensure the security of your smart contracts through thorough testing and auditing.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-three">
                    <BsWrenchAdjustable size={50} className='mt-2 text-success' />
                    <div className="h-8">
                      Crowdsale
                    </div>
                    <p className='text-justify'>
                      Our team of experts designs and builds Crowdsale contracts to enhance the efficiency and management of your cryptocurrency sales process.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-three">
                    <BsWrenchAdjustable size={50} className='mt-2 text-success' />
                    <div className="h-8">
                      Exchange Platform Development
                    </div>
                    <p className='text-justify'>
                      Our Solidity developers can efficiently code, test, deploy, and secure exchange platforms to provide you with a seamless user experience.
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

      <section>
        <div className="bg-buzz ptb-50">
          <h1 className="text-white text-center">Why Hire Solidity Developers from Askgalore</h1>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                {/* <p className='lead text-white'>At Askgalore, we offer a team of highly skilled AWS DevOps Engineers, complemented by testing professionals for quality audits and project managers for smooth project execution. Our quick, easy, and transparent hiring process ensures a seamless onboarding experience for our clients.</p> */}
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
                {/* <h3 className='mt-3 text-center text-white'>100% Transparency</h3> */}
                {/* <p className='mt-2 text-white lead'>At Askgalore, we believe in providing complete transparency throughout the development process. With our dedicated expert model, you will receive timely project updates to accurately forecast and prioritize releases, ensuring that the final product meets your business needs.</p> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-grlite ptb-25'>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h2 className='text-center theme-red'>HIRE SOLIDITY DEVELOPERS WITH SIMPLE PROCESS</h2>
              <p className='lead '>
                <br></br>
                <strong className='stg-700'>1. Define Your Requirements:</strong> Tell us the skills you require, and we’ll arrange a call to learn more about your specific needs.
                <br></br><br></br>
                <strong className='stg-700'>2. Talent Acquisition:</strong> Our team finds the best Solidity Developers for you by carefully screening and selecting pre-screened candidates in a matter of days.
                <br></br><br></br>
                <strong className='stg-700'>3. Schedule Interviews:</strong> After we’ve learned about your needs and provided you with a pre-screened candidate list, we’ll schedule interviews for you to meet with potential Solidity Developers.
                <br></br><br></br>
                <strong className='stg-700'>4. Systematic Development Process:</strong> We utilize a goal-oriented development process that includes requirement analysis, deployment, and updates, resulting in requirement-matching results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className=''>
        <div className="container ptb-50">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="text-center text-light">
                <h1 className='theme-red'>Need help? Ready to start your project with Askgalore?</h1>
                <div className="mt-4 text-center">
                  <Link href="/contact-us"><button className='btn btn-royal' role='button'>GET IN TOUCH</button></Link>
                </div>
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