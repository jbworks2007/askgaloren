import React from 'react'
import ContactForm from '@/components/Misc/ContactForm'
import Link from 'next/link'
import Image from 'next/image'
import img1 from '../../../public/IT-Services-Outsourcing.jpg'
import mobileImg from '../../../public/mobileImg.jpeg'

import img3 from '../../../public/IT-Staff-Augmentation-Services-Work.jpg'
import { FaProjectDiagram, FaDiceD20, FaPeopleCarry, FaChalkboardTeacher } from 'react-icons/fa'
import Developers from '@/components/Misc/Developers'
import Countries from '@/components/Misc/Countries'
import Outsourcing from '@/components/Outsourcing/Outsourcing'
import FormOutsource from '@/components/Outsourcing/FormOutsource'


export default function ITOutsource() {
  return (
    <>
      <section className='bg-grlite'>
        <div className="container">
          <div className="pt-5">
            <h1 className='text-center'>BEST IT OUTSOURCING SERVICES</h1>
            <h5 className='text-center'>Accelerate Your Project Success with On-Demand IT Staff Augmentation Services for Expertise and Cost Savings</h5>
          </div>
          <div className="row justify-content-center ptb-25">
            <div className="col-lg-6 ptb-25">
              <h2 className='text-center'>Hire Top-Tier Developers On Demand</h2>
              <div className="lead px-5 text-justify">
                <p>Are you searching for software engineers with specific skills to fill talent gaps in your team?</p>
                <p>Look no further! Our IT outsourcing company is here to help you strike the perfect balance between project progress and cost-effectiveness.  We make it easy for you to build your team up and down based on your current development needs.</p>
                <p>Say goodbye to the costly and time-consuming recruitment process and the paperwork hassle of on-site hiring.With Askgalore Digital, you can avoid all of that and focus on what matters – your project. Our offshore software development services are designed to meet the specific needs of businesses in the USA, Canada, Denmark, Netherlands, Switzerland, Sweden, Singapore, Australia, Norway, the UK, and Belgium.</p>
              </div>
              <div className="text-center">
                <Link href="/contact-us"><button className='btn btn-royal' role='button'>GET IN TOUCH</button></Link>
              </div>
            </div>
            <div className="col-lg-6 ptb-25">
              <div className="bg-themered p-4">
                <h3 className='text-light text-center'>Enquire Now</h3>
                <ContactForm dark />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container ptb-50">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <Image src={img1} width={600} className='img-ma-1' />
            </div>
            <div className="col-lg-6 p-4 text-center ">
              <h2>Our Expertise in IT Services Outsourcing</h2>
              <p className='lead text-justify'>Our team of experts at Askgalore Digital has extensive experience in IT services outsourcing, making it easier for you to find the right talent for your project. Our developers are highly skilled and experienced in their respective fields, and we ensure that they are the right fit for your project before recommending them to you. We work closely with you to understand your requirements and provide you with the necessary support throughout the project.</p>
            </div>
          </div>
        </div>
      </section>

      <Outsourcing />

      <section className="ptb-50 bg-royal">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h1 className="text-center text-white">IT Staff Augmentation Services We Provide</h1>
              <div className="row mt-5 justify-content-center">
                <div className="col-lg-6 text-center">
                  <FaProjectDiagram className="poppy-blue" size={70} />
                  <h5 className="mt-4 text-white">ADD EXTRA FORCE TO YOUR EXISTING PROJECT</h5>
                  <p className="mt-3 ice-gray">
                    Augment your existing team with the extra talent to deliver a high-quality project within your timeline. Leverage our IT team augmentation services to build custom teams with a diverse set of skills to cover your business needs.
                  </p>
                </div>
                <div className="col-lg-6 text-center">
                  <FaDiceD20 className="poppy-blue" size={70} />
                  <h5 className="mt-4 text-white">VENDOR TRANSITION</h5>
                  <p className="mt-3 ice-gray">
                    Looking for a new technology provider to launch your solution? We assist you in a smooth and effective vendor transition and take over your project in the middle of your journey.
                  </p>
                </div>
              </div>
              <div className="row mt-5 justify-content-center">
                <div className="col-lg-6 text-center">
                  <FaPeopleCarry className="poppy-blue" size={70} />
                  <h5 className="mt-4 text-white">SHORT-TERM STAFF AUGMENTATION</h5>
                  <p className="mt-3 ice-gray">
                    Leverage this hiring model for urgent hiring of tech talent. Along with ready-to-go teams, we have a candidate base of top talent that can take on the job within a week.
                  </p>
                </div>
                <div className="col-lg-6 text-center">
                  <FaChalkboardTeacher className="poppy-blue" size={70} />
                  <h5 className="mt-4 text-white">LONG-TERM EXTENDED TEAM</h5>
                  <p className="mt-3 ice-gray">
                    We offer custom recruitment for stable cooperation - you get a developer hired with the required hard and soft skills. You or your project manager can supervise task completion, while we shoulder the rest.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='ptb-50'>
        <div className="container">
          <div className="row justify-content-center">
            <h1 className='text-center'>SOFTWARE DEVELOPERS ON DEMAND</h1>
            <Developers />
          </div>
        </div>
      </section>

      <section className='bg-grlite ptb-25'>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h2 className='text-center'>The Benefits of Our Offshore Software Development Services</h2>
              <p className='lead '>
                Our offshore software development services offer the following benefits:
                <br></br><br></br>
                <strong className='stg-700'>1. Reduced costs:</strong> Our offshore it services can help you reduce your costs without compromising on quality.
                <br></br><br></br>
                <strong className='stg-700'>2. Increased productivity:</strong> Our  team of experts is committed to  delivering high-quality software  solutions that meet your  business needs, helping you increase your productivity.
                <br></br><br></br>
                <strong className='stg-700'>3. Access to a wider talent pool:</strong> With our extensive network of developers, we can help you find the right talent for your project, regardless of its complexity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='ptb-50'>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="text-center justify-content-center">
                <h1 className='theme-red'>How Our IT Staff Augmentation Services Work</h1>
                <h5 className='px-3'>
                  At Askkgalore Digital, we make it easy to add extra talent to your team through our IT staff augmentation services.
                  Here’s how our process works:</h5>
                <div className="py-3 d-none d-md-block">
                  <Image src={img3} style={{width:"100%",height:"100%",objectFit:"contain"}} />
                </div>
                <div className="py-3  d-md-none d-sm-block d-lg-none">
                  <Image src={mobileImg} width={340}/>
                </div>
              </div>
              <div className="text-justify p-3">
                <p className='lead'>
                  <strong className='stg-700'>Step 1 : Discuss Your Requirements:</strong> We begin by discussing your needs, including the required tech stack, team size, and staffing period. Our team will work with you to identify the ideal candidates for your project.
                  <br></br><br></br>
                  <strong className='stg-700'>Step 2: Choose Your Developers:</strong> We offer both ready-to-go teams for urgent staff needs and custom-recruited developers for long-term collaboration. If you choose the latter, you can participate in selecting and interviewing candidates.
                  <br></br><br></br>
                  <strong className='stg-700'>Step 3: Onboard Your Remote Programmers:</strong> Once you’ve chosen your developers, we integrate them fully with your in-house team. We provide briefings on project details and assign responsibilities to each team member.
                  <br></br><br></br>
                  <strong className='stg-700'>Step 4: Manage Your Extended Team:</strong> Our extended team adjusts to your internal schedule and uses the same project management tools as your on-site team. If you prefer, we can offer a part-time or full-time Project Manager to help manage the team.
                  <br></br><br></br>
                  <strong className='stg-700'>Step 5: Get Your Project Delivered:</strong> Throughout the project, we monitor its success to ensure that your requirements are met. Our collaboration results in a robust digital solution delivered timely.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className='bg-softblack'>
        <div className="container ptb-50">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="px-4 text-white ">
                <h1 className='text-center py-2'>WHY ASKGALORE DIGITAL</h1>
                <div className="py-2">
                  <h4 className='text-danger'>Attract Driven Developers</h4>
                  <p className='lead'>Utilize our IT augmentation model to attract motivated developers. Though they aren’t your direct employees, they effortlessly integrate into your project.</p>
                </div>
                <div className="py-2">
                  <h4 className='text-danger'>Comprehensive Assistance</h4>
                  <p className='lead'>We provide an account manager to every client to address their needs and identify the appropriate solution. Our remote team members receive crucial administrative, HR, accounting, and legal assistance.</p>
                </div>
                <div className="py-2">
                  <h4 className='text-danger'>Adaptable Collaboration</h4>
                  <p className='lead'>Our flexible model allows you to augment your in-house IT department for either a temporary or permanent duration. We offer viable solutions for both short-term and long-term projects.</p>
                </div>
                <div className="py-2">
                  <h4 className='text-danger'>Direct Contact</h4>
                  <p className='lead'>You can communicate directly with your extended team without intermediaries. You can schedule calls, standups, and meetings whenever required to have one-on-one interactions with your team just as you would on-site.</p>
                </div>
                <div className="py-2">
                  <h4 className='text-danger'>Easy Expansion</h4>
                  <p className='lead'>Begin working with Devox Software by recruiting individual developers for a brief period and gradually expand your remote development team. You can scale down your outsourced team once the project is completed.</p>
                </div>
                <div className="py-2">
                  <h4 className='text-danger'>Flexible Project Supervision</h4>
                  <p className='lead'>Maintain full control of your project by managing your team directly. Alternatively, you can delegate management tasks to a part-time or full-time project manager.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </section>

      <section className='ptb-50'>
        <div className="container">
          <div className="row justify-content-center">
            <div className="text-center">
              <h1 className=''>IT OUTSOURCING SERVICES ACROSS THE GLOBE</h1>
            </div>
            <Countries />
            <div className="mt-5 col-lg-10">
              <h5 className='text-justify'>Partner with Askgalore Digital for reliable software outsourcing services. Contact us today to learn more about our staff augmentation services, developer on demand, and offshore software development services, and let us help you take your business to the next level.</h5>
            </div>
            <div className="mt-3 text-center">
              <Link href="seo-service-packages" className='btn btn-flag'>Contact Us Today!</Link>
            </div>
          </div>

        </div>
      </section>

      <FormOutsource />
    </>
  )
}
