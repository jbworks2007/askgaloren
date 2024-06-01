import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import img8 from '../../../public/brands/venn-diagram.png'
import ContactForm from '@/components/Misc/ContactForm'
import { ImEnlarge } from 'react-icons/im'
import { FaHandHoldingUsd, FaUsers, } from 'react-icons/fa'
import { AiOutlineDatabase, AiOutlineCloudServer, AiFillDatabase } from 'react-icons/ai'
import { GrHadoop, GrMysql, GrMoreVertical } from 'react-icons/gr'
import { SiInformatica, SiApachekafka, SiMongodb, SiPostgresql, SiMicrosoftazure, SiMicrosoftsqlserver, SiTeradata } from 'react-icons/si'
import { SlScreenDesktop } from 'react-icons/sl'
import { TiRefreshOutline } from 'react-icons/ti'
import { DiSpark } from 'react-icons/di'
import { BsShieldLockFill } from 'react-icons/bs'
import { BiSupport } from 'react-icons/bi'

import { MdSecurity } from 'react-icons/md'
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
                    <Image src={img8} width={100} />
                    <h1 className='mt-3'>HIRE DATA VISUALIZATION DEVELOPER</h1>
                    <h6 className='mt-2'>
                      Hire Data visualization developers who can turn complex data into clear, actionable insights. At Askgalore, we understand the importance of effective data visualization in making informed business decisions. That’s why we’ve assembled a network of highly-vetted Data visualization developers who are skilled in creating visually appealing and interactive data displays. Our developers are well-versed in a variety of tools and technologies such as Tableau, Power BI, D3.js, and more. They can help you design custom dashboards, build data-driven visualizations, and even integrate machine learning algorithms to automate the process of data visualization. Whether you’re a startup, a small business, or a large enterprise, we have the talent you need to help you better understand your data and make informed decisions. So why wait? Hire a Data visualization developer through Askgalore and take your data analysis to the next level.
                    </h6>
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
                <h1>IT Outsourcing Services for Data Visualization Development</h1>
                <p className='lead'>Unlock the full potential of Data Visualization with top-notch IT outsourcing services, providing expert development, support, and maintenance for your projects.</p>
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
                <h2 className='theme-red'>WHY CHOOSE ASKGALORE TO HIRE DATA VISUALIZATION DEVELOPER</h2>
                <p className='lead'>AskGalore is the perfect platform to find and hire skilled Data visualization developers who can help you bring your data to life. Here are a few reasons why you should choose AskGalore for your next Data visualization project:</p>
                <div className="col-lg-4">
                  <div className="card-three">
                    <ImEnlarge size={50} className='mt-2 text-primary' />
                    <div className="h-8">
                      Large Network of Developers
                    </div>
                    <p className='text-justify'>
                      We have a vast network of highly-skilled Data visualization developers available for hire. Our developers are pre-vetted to ensure they have the necessary skills and expertise to deliver quality work.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-three">
                    <FaHandHoldingUsd size={50} className='mt-2 text-success' />
                    <div className="h-8">
                      Cost-Effective
                    </div>
                    <p className='text-justify'>
                      We understand the importance of keeping costs under control when it comes to hiring developers. With AskGalore, you can find talented Data visualization developers at a reasonable price without sacrificing quality.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-three">
                    <FaUsers size={50} className='mt-2 text-danger' />
                    <div className="h-8">
                      Efficient Hiring Process
                    </div>
                    <p className='text-justify'>
                      Our platform streamlines the hiring process, making it quick and easy to find the right developer for your project. You can review candidates’ profiles, portfolios, and reviews from past clients to help you make an informed decision.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-three">
                    <BsShieldLockFill size={50} className='mt-2 text-warning' />
                    <div className="h-8">
                      Secure Payment Process
                    </div>
                    <p className='text-justify'>
                      We ensure that all payments are processed securely through our platform, providing you with peace of mind and protecting your financial information.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-three">
                    <BiSupport size={50} className='mt-2 text-dark' />
                    <div className="h-8">
                      Dedicated Support
                    </div>
                    <p className='text-justify'>
                      Our team is always available to provide support throughout the hiring process, from identifying the right developer to ensuring that the project runs smoothly.
                    </p>
                  </div>
                </div>
                <div className="mt-3 p-4 text-center">
                  <h4 className='theme-red'>Choose AskGalore for your next Data visualization project and experience the benefits of working with top-notch developers.</h4>
                  <div className="text-center">
                    <Link href="/contact-us"><button className='btn btn-royal' role='button'>GET IN TOUCH</button></Link>
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
              <div className="text-center">
                <h1 className='theme-red'>HIRE DATA VISUALIZATION DEVELOPER WITH EASE</h1>
                <h4>If you’re looking to hire top-notch Data visualization developers quickly and easily, Turing can help. Here’s how it works in just 4 simple steps:</h4>
              </div>
              <br></br>
              <ol className='lead text-justify'>
                <li>
                  <b>Share your requirements:</b> First, let us know what skills and expertise you need for your project. We’ll schedule a call with you to discuss your requirements in detail and make sure we understand exactly what you’re looking for.
                </li>
                <li>
                  <b>Get a list of pre-vetted candidates:</b> Based on your requirements, we’ll quickly identify and present a list of pre-vetted Data visualization developers who are the best fit for your project. You’ll have access to their resumes, work samples, and reviews from past clients to help you make an informed decision.
                </li>
                <li>
                  <b>Schedule interviews:</b> Once you’ve selected the candidates you’re interested in, we’ll help you schedule interviews with them. You’ll have the opportunity to meet and interview each developer and select the ones you like best.
                </li>
                <li>
                  <b>Begin:</b> Finally, you can start working with your selected developers
                </li>
              </ol>
              <p className='lead text-justify'>With Askgalore, hiring skilled Data visualization developers has never been easier. Let us help you find the talent you need to bring your data to life.</p>
            </div>
          </div>
        </div>
      </section>

      <Outsourcing />
      <FormOutsource />
    </>
  )
}
