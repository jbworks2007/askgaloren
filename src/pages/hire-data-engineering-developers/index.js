import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import img7 from '../../../public/brands/database.png'
import ContactForm from '@/components/Misc/ContactForm'
import { FaAws, FaRocket, FaWarehouse } from 'react-icons/fa'
import { AiOutlineDatabase, AiOutlineCloudServer, AiFillDatabase } from 'react-icons/ai'
import { GrHadoop, GrMysql, GrMoreVertical } from 'react-icons/gr'
import { SiInformatica, SiApachekafka, SiMongodb, SiPostgresql, SiMicrosoftazure, SiMicrosoftsqlserver, SiTeradata } from 'react-icons/si'
import { SlScreenDesktop } from 'react-icons/sl'
import { TiRefreshOutline } from 'react-icons/ti'
import { DiSpark } from 'react-icons/di'
import { BsFiletypeSql, BsDatabaseFill, BsFillClipboardDataFill, BsJournalCheck } from 'react-icons/bs'
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
                    <Image src={img7} width={100} />
                    <h1 className='mt-3'>Hire Data Engineering Developer</h1>
                    <h4 className='mt-2'>
                      Askgalore helps you find and hire top Data engineering developers for both freelance and full-time jobs. With Data engineering programmers available for hire on a freelance or full-time basis, we have one of the largest networks of vetted talent. Hire a developer today!
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
                <h1>IT Outsourcing Services for Data Engineering Development</h1>
                <p className='lead'>Unlock the full potential of Data Engineering with top-notch IT outsourcing services, providing expert development, support, and maintenance for your projects.</p>
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
                <h2 className='theme-red'>Hire Data Engineering Developers with the Perfect Blend of Skills and Expertise.</h2>
                <p className='lead'>Data engineering is a thriving industry with a constantly expanding list of specialized tools and knowledge. At Askgalore, we understand that finding the right data engineer is crucial. That’s why we provide skilled professionals who are experienced in specific industries, technologies, and skill sets, ensuring they can hit the ground running.</p>
                <h4 className='text-success'>Our team at Askgalore evaluates a candidate's expertise in a variety of data engineering tools and specialties, such as:</h4>

                <div className="mt-5 flag-container mx-auto">
                  <div className="row g-4">
                    <div className="col-12 col-md-4 d-flex justify-content-center gap-4">
                      <div className="card-two">
                        <FaAws className='mt-3 scale-eff' size={70} />
                        <div className='mt-3 sub-text2'>AWS</div>
                      </div>
                      <div className="card-two">
                        <AiOutlineDatabase className='mt-3 scale-eff' size={70} />
                        <div className='mt-3 sub-text2'>Erwin, ETL</div>
                      </div>
                    </div>
                    <div className="col-12 col-md-4 d-flex justify-content-center gap-4">
                      <div className="card-two">
                        <GrHadoop className='mt-3 scale-eff' size={70} />
                        <div className='mt-3 sub-text2'>Hadoop</div>
                      </div>
                      <div className="card-two">
                        <SiInformatica className='mt-3 scale-eff' size={70} />
                        <div className='mt-3 sub-text2'>Informatico</div>
                      </div>
                    </div>
                    <div className="col-12 col-md-4 d-flex justify-content-center gap-4">
                      <div className="card-two">
                        <SiApachekafka className='mt-3 scale-eff' size={70} />
                        <div className='mt-3 sub-text2'>Kafka</div>
                      </div>
                      <div className="card-two">
                        <SiMongodb className='mt-3 scale-eff' size={70} />
                        <div className='mt-3 sub-text2'>MongoDB</div>
                      </div>
                    </div>
                    <div className="col-12 col-md-4 d-flex justify-content-center gap-4">
                      <div className="card-two">
                        <GrMysql className='mt-3 scale-eff' size={70} />
                        <div className='mt-3 sub-text2'>My SQL</div>
                      </div>
                      <div className="card-two">
                        <SiPostgresql className='mt-3 scale-eff' size={70} />
                        <div className='mt-3 sub-text2'>Postgres</div>
                      </div>
                    </div>
                    <div className="col-12 col-md-4 d-flex justify-content-center gap-4">
                      <div className="card-two">
                        <TiRefreshOutline className='mt-3 scale-eff' size={70} />
                        <div className='mt-3 sub-text2'>Redshift</div>
                      </div>
                      <div className="card-two">
                        <FaRocket className='mt-3 scale-eff' size={70} />
                        <div className='mt-3 sub-text2'>S3</div>
                      </div>
                    </div>
                    <div className="col-12 col-md-4 d-flex justify-content-center gap-4">
                      <div className="card-two">
                        <SiMicrosoftazure className='mt-3 scale-eff' size={70} />
                        <div className='mt-3 sub-text2'>Data Factory</div>
                      </div>
                      <div className="card-two">
                        <SiMicrosoftsqlserver className='mt-3 scale-eff' size={70} />
                        <div className='mt-3 sub-text2'>MS SQL</div>
                      </div>
                    </div>
                    <div className="col-12 col-md-4 d-flex justify-content-center gap-4">
                      <div className="card-two">
                        <DiSpark className='mt-3 scale-eff' size={70} />
                        <div className='mt-3 sub-text2'>Spark</div>
                      </div>
                      <div className="card-two">
                        <BsFiletypeSql className='mt-3 scale-eff' size={70} />
                        <div className='mt-3 sub-text2'>SSIS</div>
                      </div>
                    </div>
                    <div className="col-12 col-md-4 d-flex justify-content-center gap-4">
                      <div className="card-two">
                        <SiTeradata className='mt-3 scale-eff' size={70} />
                        <div className='mt-3 sub-text2'>Teradata</div>
                      </div>
                      <div className="card-two">
                        <GrMoreVertical className='mt-3 scale-eff' size={70} />
                        <div className='mt-3 sub-text2'>Coming More</div>
                      </div>
                    </div>
                  </div>
                </div>




                <div className="mt-4 text-center">
                  <h4 className='text-success'>Additionally, we assess their proficiency in various specializations, including:</h4>
                </div>

                <div className="mt-3 flag-container mx-auto">
                  <div className="row g-4">
                    <div className="col-12 col-md-4 d-flex justify-content-center gap-4">
                      <div className="card-two">
                        <BsDatabaseFill className='mt-3 scale-eff' size={50} />
                        <div className='mt-3 sub-text2'>Data modeling</div>
                      </div>
                      <div className="card-two">
                        <BsFillClipboardDataFill className='mt-3 scale-eff' size={50} />
                        <div className='mt-3 sub-text2'>Data science pipelines</div>
                      </div>
                    </div>
                    <div className="col-12 col-md-4 d-flex justify-content-center gap-4">
                      <div className="card-two">
                        <FaWarehouse className='mt-3 scale-eff' size={50} />
                        <div className='mt-3 sub-text2'>Data warehousing</div>
                      </div>
                      <div className="card-two">
                        <AiOutlineCloudServer className='mt-3 scale-eff' size={50} />
                        <div className='mt-3 sub-text2'>Cloud computing</div>
                      </div>
                    </div>
                    <div className="col-12 col-md-4 d-flex justify-content-center gap-4">
                      <div className="card-two">
                        <AiFillDatabase className='mt-3 scale-eff' size={50} />
                        <div className='mt-3 sub-text2'>Big data</div>
                      </div>
                      <div className="card-two">
                        <GrMoreVertical className='mt-3 scale-eff' size={50} />
                        <div className='mt-3 sub-text2'>Coming More</div>
                      </div>
                    </div>
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
              <h2 className='text-center theme-blue'>Opt for data engineering developers from Askgalore and unlock their advantages</h2>
              <p className='text-justify px-3 lead'>When you hire data engineering developers from Askgalore, you can experience a range of benefits. Our developers are experts in designing, developing, and managing the entire data pipeline for your organization. With their comprehensive knowledge and skills in data processing, transformation, and storage, they can help you to harness the full potential of your data. By leveraging their expertise, you can ensure that your data is accurate, consistent, and reliable, making it easier for you to derive insights and make informed decisions. </p>
              <p className='text-justify px-3 lead'>Additionally, our data engineering developers can help you to integrate your data infrastructure with the latest technologies, such as cloud platforms, Big Data solutions, and more, to streamline your operations and enhance your efficiency. So, why wait? Hire data engineering developers from Askgalore today and take your data-driven business to new heights! </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-buzz ptb-50">
          <h1 className="text-white text-center">Simplify Your Data Engineering Hiring Process with Askgalore</h1>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="mt-3 row g-2">
                  <div className="col-lg-4 ">
                    <div className="card-one mx-auto text-center">
                      <BsJournalCheck size={70} />
                      <h3 className="mt-3">Specify Your Needs</h3>
                      <p className="mt-3">
                        Let us know about your desired data engineering developer’s skills and qualifications.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 ">
                    <div className="card-one mx-auto text-center">
                      <SlScreenDesktop size={70} />
                      <h3 className="mt-3">Screen Applicants</h3>
                      <p className="mt-3">
                        Review curated candidate profiles that match your unique data engineering demands.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 ">
                    <div className="card-one mx-auto text-center">
                      <MdSecurity size={70} />
                      <h3 className="mt-3">Secure Your Hire</h3>
                      <p className="mt-3">
                        Select the data engineering developer that aligns with your project requirements and budgetary limitations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container ptb-50">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h1 className='theme-red'>Get in touch with Askgalore to kickstart the process of finding and recruiting expert data engineers for your business needs.</h1>
              <div className="mt-4 text-center">
                <Link href="/contact-us"><button className='btn btn-royal' role='button'>GET IN TOUCH</button></Link>
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

