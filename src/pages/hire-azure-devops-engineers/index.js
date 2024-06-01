import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import img1 from '../../../public/IT-Services-Outsourcing.jpg'
import img10 from '../../../public/brands/azure.png'
import img0 from '../../../public/Custom1.webp'
import ContactForm from '@/components/Misc/ContactForm'
import { MdDomainVerification } from 'react-icons/md'
import { RiAdminFill } from 'react-icons/ri'
import { SiAzuredevops } from 'react-icons/si'
import { BsRocket, BsWrenchAdjustable } from 'react-icons/bs'
import { BiSupport } from 'react-icons/bi'
import { FaProjectDiagram, FaLaptopCode, FaUserCheck, FaUserEdit, FaHandshake } from 'react-icons/fa'
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
                    <Image src={img10} width={100} />
                    <h1 className='mt-4'>Hire AZURE DevOps Engineers</h1>
                    <h4 className='mt-4'>
                      Our Azure DevOps engineers specialize in efficient synchronization between Dev and Ops teams, with extensive expertise and a commitment to client privacy and transparency. We can help optimize your development process for higher performance and productivity.
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
                <h1>IT Outsourcing Services for AZURE DevOps Development</h1>
                <p className='lead'>Unlock the full potential of AZURE DevOps with top-notch IT outsourcing services, providing expert development, support, and maintenance for your projects.</p>
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
                <h2 className='theme-red'>Hire Azure DevOps Engineers Today With Askgalore</h2>
                <p className='lead'>At Askgalore, we understand the importance of having a reliable team of Azure DevOps engineers to tackle your business challenges. That’s why we offer a range of Azure DevOps services designed to meet your specific needs. Our certified engineers are equipped with the technical expertise to implement Azure DevOps for your projects, ensuring seamless integration and optimal performance. Hire Azure DevOps engineers from us today and experience the benefits of a streamlined development process.</p>
                <div className="col-lg-4">
                  <div className="card-three">
                    <SiAzuredevops size={50} className='mt-2 text-primary' />
                    <div className="h-8">
                      Azure DevOps Kubernetes Services
                    </div>
                    <p className='text-justify'>
                      Hire a DevOps Engineer to Effectively Manage Your Containerized Environment and Streamline Application Deployment and Management
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-three">
                    <FaLaptopCode size={50} className='mt-2 text-danger' />
                    <div className="h-8">
                      Azure DevOps Implementation
                    </div>
                    <p className='text-justify'>
                      Transform your development process with our Azure DevOps implementation services. Our experts will integrate best practices, deliver a well-tested plan with fast turnaround times, and prioritize security to ensure a seamless transition.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-three">
                    <BsRocket size={50} className='mt-2 text-warning' />
                    <div className="h-8">
                      Azure Continuous Integration
                    </div>
                    <p className='text-justify'>
                      Streamline Your Code Integration with Azure DevOps Continuous Integration. Our team of expert engineers will develop a customized strategy for seamlessly integrating your code across shared repositories and provide powerful tools for building servers or cloud-based applications.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-three">
                    <BiSupport size={50} className='mt-2 text-dark' />
                    <div className="h-8">
                      Azure Continuous Delivery
                    </div>
                    <p className='text-justify'>
                      Speed up product delivery with Azure DevOps Continuous Delivery. Our expert engineers automate the delivery process and ensure quality assurance at every stage. We test and package the build to deliver a seamless, error-free product that meets your business needs.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-three">
                    <BsWrenchAdjustable size={50} className='mt-2 text-success' />
                    <div className="h-8">
                      Azure DevOps Migration Services
                    </div>
                    <p className='text-justify'>
                      Migrate to Azure DevOps smoothly with our expert team. We handle all aspects of migration, from on-premises servers to online Azure DevOps or legacy Visual Studio Team Services. We guarantee a seamless transition with minimal disruption to your business.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-three">
                    <FaUserEdit size={50} className='mt-2 text-primary' />
                    <div className="h-8">
                      Azure DevOps Training
                    </div>
                    <p className='text-justify'>
                      Empower your team with Azure DevOps training from EXB Soft. Our programs equip your workforce with the skills to implement DevOps practices seamlessly, optimizing performance and ensuring smooth operations
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
            <div className="col-lg-6 text-center">
              <Image src={img1} width={600} className='img-ma-1' />
            </div>
            <div className="col-lg-6 py-5 text-center ">
              <h2>Hire AZURE DevOps Engineers with Ease</h2>
              <p className='lead text-justify'>
                Looking to recruit skilled AZURE DevOps Engineers effortlessly? Askgalore can assist you in finding and hiring talented professionals in this field without any hassle. With Askgalore, you can easily locate top-notch AZURE DevOps Engineers who can help your organization achieve its objectives efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container ptb-50">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="row justify-content-center text-center">
                <h2 className='theme-red'>Building a Strong Partnership: Collaborate with Our Trustworthy Developers</h2>
                <p className='lead'>Looking for reasons to choose Askgalore for your Python development needs? Here are a few:</p>
                <div className="col-lg-4">
                  <div className="card-three">
                    <MdDomainVerification size={50} className='mt-2 text-primary' />
                    <div className="h-8">
                      Domain Expertise
                    </div>
                    <p className='text-justify'>
                      At Askgalore, our team of IT experts, designers, consultants, and developers has years of experience and expertise in their respective domains. We have a talented group that leads the industry.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-three">
                    <RiAdminFill size={50} className='mt-2 text-warning' />
                    <div className="h-8">
                      Simple Administration
                    </div>
                    <p className='text-justify'>
                      Askgalore simplifies the entire administration process, from contract management to team building, staff retention, payroll processing, travel arrangements, logistics, and NDAs. Moreover, Askgalore also provides advanced infrastructure solutions to ensure your organization’s technology needs are met efficiently.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-three">
                    <FaHandshake size={50} className='mt-2 text-danger' />
                    <div className="h-8">
                      Flexible Engagements
                    </div>
                    <p className='text-justify'>
                      We offer flexible engagement models that are designed to meet your specific needs. You can choose from hourly, part-time, or full-time options with the freedom to change anytime.
                    </p>
                  </div>
                </div>
                <p className='mt-3 lead'>Our cutting-edge infrastructure is equipped with the latest IT tools and systems, giving our expert teams a head start. At Askgalore, we believe that advanced infrastructure is key to delivering exceptional results.</p>
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

      {/* <section>
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
      </section> */}

      <section className=''>
        <div className="container ptb-50">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="text-center text-light">
                <h1 className='theme-red'>Are you ready for an upgrade?</h1>
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