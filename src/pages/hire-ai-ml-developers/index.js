import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import img6 from '../../../public/brands/aiml.png'
import ContactForm from '@/components/Misc/ContactForm'
import { SiBlockchaindotcom, SiHiveBlockchain, SiChainlink } from 'react-icons/si'
import { BsBoxes, BsImages } from 'react-icons/bs'
import { FaWallet, FaLaptopCode, FaChartPie } from 'react-icons/fa'
import { HiLightBulb } from 'react-icons/hi'
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
                    <Image src={img6} width={150} />
                    <h1 className='mt-4'>Hire AI/ML Developers</h1>
                    <h5 className='mt-4'>
                      Askgalore has got your back when it comes to hiring AI and ML developers for your enterprise! Our team of proficient developers are carefully selected to meet your unique needs, while ensuring the utmost protection of your data privacy through the use of necessary NDA documentation. Count on Askgalore to furnish you with top-notch developers to propel your business forward.
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
                <h1>IT Outsourcing Services for AI/ML Development</h1>
                <p className='lead'>Unlock the full potential of AI/ML with top-notch IT outsourcing services, providing expert development, support, and maintenance for your projects.</p>
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
                <h2 className='theme-red'>Hire proficient AI and ML developers to obtain exceptional solutions</h2>
                <p className='lead'>At Askgalore, we offer top-notch AI/ML programmers who can develop cutting-edge solutions for your business. Our developers are skilled in various technologies and app solutions that can enhance your business operations. Here are some of the key technologies and solutions you can expect when you hire AI/ML development from us</p>
                <div className="col-lg-3">
                  <div className="card-three">
                    <BsImages size={50} className='mt-2 text-primary' />
                    <div className="h-8">
                      Image & Audio Processing
                    </div>
                    <p className='text-justify'>
                      Our AI/ML experts can help you overcome challenges with text translation and audio processing. They have extensive experience in face/object/action recognition functionalities, visual search, and more, using neural networks.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="card-three">
                    <FaLaptopCode size={50} className='mt-2 text-danger' />
                    <div className="h-8">
                      NLP development
                    </div>
                    <p className='text-justify'>
                      As for NLP development, our AI/ML contractors have several years of experience in creating machine solutions. They have been involved in numerous projects that revolve around tasks such as text recognition, identifying context, and generating content.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="card-three">
                    <HiLightBulb size={50} className='mt-2 text-warning' />
                    <div className="h-8">
                      Predictive Algorithms
                    </div>
                    <p className='text-justify'>
                      Our team of dedicated developers at Askgalore possesses advanced expertise in launching AI and ML-based applications that utilize predictive algorithms, comprehensive forecasting, and data analysis to fulfill diverse business needs.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="card-three">
                    <FaChartPie size={50} className='mt-2 text-success' />
                    <div className="h-8">
                      Data Visualization Solution
                    </div>
                    <p className='text-justify'>
                      In addition, our AI and machine learning consultants at Askgalore are hired by clients to create powerful data visualization solutions that can optimize business performance and enhance development within a specific industry.
                    </p>
                  </div>
                </div>
                <div className="mt-3 p-4 text-center">
                  <h3 className='theme-red'>Partner with Askgalore and let our team of AI/ML programmers build amazing solutions that can take your business to the next level.</h3>
                  <div className="text-center">
                    <Link href="/contact-us"><button className='btn btn-royal' role='button'>GET IN TOUCH</button></Link>
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
              <div className=" text-white ">
                <h1 className='text-center py-2'>How to Hire AI/ML Developers from Askgalore</h1>
                <p className='lead'>At Askgalore, we understand the complexities that businesses face when outsourcing their AI/ML projects. That’s why we’ve developed a straightforward hiring process for you to hire the most suitable AI/ML developer for your specific needs</p>
                <div className="py-2">
                  <h4 className='text-danger'>Post Your Requirement</h4>
                  <p className='lead'>To begin, post your AI/ML development requirement on our platform or contact us directly. Our team will review your needs and suggest the best-suited solutions to achieve your goals.</p>
                </div>
                <div className="py-2">
                  <h4 className='text-danger'>Discuss Project Feasibility</h4>
                  <p className='lead'>Once we receive your requirement, we will discuss the project feasibility and provide a rough estimate of the timeline and cost involved. This will give you a better understanding of how we can help you and what to expect from our team.</p>
                </div>
                <div className="py-2">
                  <h4 className='text-danger'>Deploy Resource</h4>
                  <p className='lead'>After discussing the feasibility, we will assign a dedicated resource that meets your specific requirements. We’ll also provide you with access to the resource’s profile and relevant credentials for your peace of mind.</p>
                </div>
                <div className="py-2">
                  <h4 className='text-danger'>Choose Hiring Model</h4>
                  <p className='lead'>We offer flexible hiring models based on your project scope, budget, and timeline. You can choose to hire our developers on an hourly, part-time, or full-time basis.</p>
                </div>
                <div className="py-2">
                  <h4 className='text-danger'>Sign-Off and Start</h4>
                  <p className='lead'>Once you choose the most suitable hiring model and our developers are ready to start, we’ll send you the contract for sign-off. Upon receiving the signed agreement, we’ll commence with the AI/ML development process and keep you updated every step of the way.</p>
                </div>
                <div className="py-2">
                  <p className='lead'>Partner with Askgalore today and hire the best AI/ML developers to bring your project to fruition!</p>
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