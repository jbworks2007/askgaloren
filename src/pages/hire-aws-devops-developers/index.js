import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import img9 from '../../../public/brands/aws.png'
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
                    <Image src={img9} width={150} />
                    <h1 className='mt-4'>Hire AWS DevOps Developer</h1>
                    <h4 className='mt-4'>
                      Hire top-tier AWS DevOps Developers from AskGalore’s. Scale up your business and stay ahead with state-of-the-art technology. Improve your business agility and leverage end-to-end AWS development.
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
                <h1>IT Outsourcing Services for AWS DevOps Development</h1>
                <p className='lead'>Unlock the full potential of AWS DevOps with top-notch IT outsourcing services, providing expert development, support, and maintenance for your projects.</p>
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
                <h2 className='theme-red'>Transform Your AWS DevOps with Certified Developers - Hire Today!</h2>
                <p className='lead'>Looking for top-notch AWS DevOps development services? Askgalore has got you covered! Our certified AWS DevOps developers possess extensive experience in developing feature-rich and effective applications, completing large-scale, multi-disciplinary DevOps projects, and have a thorough grasp of mobile, game, animation, web design, and AR/VR/MR technology. Hire AWS DevOps developers from us today and experience the benefits of our global delivery methodologies and procedures, ensuring your project’s success.</p>
                <div className="col-lg-4">
                  <div className="card-three">
                    <SiAzuredevops size={50} className='mt-2 text-primary' />
                    <div className="h-8">
                      DevOps Managed Services
                    </div>
                    <p className='text-justify'>
                      Optimize your company’s processes with our DevOps Managed Services .Our experienced engineers focus on release management, change management, CI/CD, performance optimization, and more to provide you with easy management of your business processes.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-three">
                    <FaLaptopCode size={50} className='mt-2 text-danger' />
                    <div className="h-8">
                      DevOps Configuration Management
                    </div>
                    <p className='text-justify'>
                      At AskGalore, our DevOps engineers have a wealth of expertise in various domains and operation management, including DevOps configuration management. Trust us to provide you with the best configuration management practices to streamline your workflow and ensure seamless operations.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-three">
                    <BsRocket size={50} className='mt-2 text-warning' />
                    <div className="h-8">
                      CI/CD
                    </div>
                    <p className='text-justify'>
                      At AskGalore, our experts have extensive knowledge and experience using the latest tools to ensure successful continuous integration and continuous deployment (CI/CD).
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-three">
                    <BiSupport size={50} className='mt-2 text-dark' />
                    <div className="h-8">
                      DevOps Consultation
                    </div>
                    <p className='text-justify'>
                      Get expert advice on DevOps from our team of experienced engineers at AskGalore. We provide consultation services to ensure continuous integration and deployment using Github & Jenkins. We can also help you identify the best approaches for server orchestration, server security, containerization, virtualization, and more.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-three">
                    <BsWrenchAdjustable size={50} className='mt-2 text-success' />
                    <div className="h-8">
                      Maintenance and Support
                    </div>
                    <p className='text-justify'>
                      We provide comprehensive maintenance and support services to ensure your operations run smoothly around the clock. Our expert engineers are available 24/7 to provide technical support and assist you with any queries you may have.
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
      </section>

      <section>
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
      </section>

      <section>
        <div className="bg-buzz ptb-50">
          <h1 className="text-white text-center">Advantages of Hiring AWS DevOps Developers from Askgalore</h1>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <p className='lead text-white'>At Askgalore, we offer a team of highly skilled AWS DevOps Engineers, complemented by testing professionals for quality audits and project managers for smooth project execution. Our quick, easy, and transparent hiring process ensures a seamless onboarding experience for our clients.</p>
                <div className="mt-3 row g-2">
                  <div className="col-lg-4 ">
                    <div className="card-one mx-auto text-center">
                      <FaUserCheck size={50} />
                      <h3 className="mt-1">Chosen Experts</h3>
                      <p className="mt-1">
                        Select your own team of expert AWS DevOps Developers through a rigorous screening and interview process. Askgalore will provide you with the resumes of the most qualified candidates for your desired positions based on your specific needs and requirements.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 ">
                    <div className="card-one mx-auto text-center">
                      <CiMobile3 size={50} />
                      <h3 className="mt-1">DirectCommunication</h3>
                      <p className="mt-1">
                        With Askgalore, you can communicate directly with your selected experts through various channels, including zoom, Skype, email, phone, and more. We ensure that you have easy and convenient access to your team members to overcome any communication barriers
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 ">
                    <div className="card-one mx-auto text-center">
                      <FaProjectDiagram size={50} />
                      <h3 className="mt-1">Project Control</h3>
                      <p className="mt-1">
                        Take full control of your project by working directly with our hired expert team. We will collaborate with you to plan, develop, and deliver a product that meets your business needs.
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
      </section>

      <section className=''>
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
      </section>

      <Outsourcing />

      <FormOutsource />
    </>
  )
}