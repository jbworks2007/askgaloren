import Image from "next/image";
import React from "react";
import Link from "next/link";
import img14 from '../../../public/brands/sap.png'
import ContactForm from "@/components/Misc/ContactForm";
import {
  FaAws,
  FaHandsHelping,
  FaHireAHelper,
  FaPeopleCarry,
  FaRocket,
  FaShare,
  FaWarehouse,
} from "react-icons/fa";
import {
  AiOutlineDatabase,
  AiOutlineCloudServer,
  AiFillDatabase,
  AiOutlineSolution,
} from "react-icons/ai";
import { GrHadoop, GrMysql, GrMoreVertical, GrHostMaintenance, GrBusinessService, GrUserExpert } from "react-icons/gr";
import {
  SiInformatica,
  SiApachekafka,
  SiMongodb,
  SiPostgresql,
  SiMicrosoftazure,
  SiMicrosoftsqlserver,
  SiTeradata,
  SiConsul,
} from "react-icons/si";
import { SlScreenDesktop } from "react-icons/sl";
import { TiRefreshOutline, TiSupport } from "react-icons/ti";
import { DiSpark } from "react-icons/di";
import {
  BsFiletypeSql,
  BsDatabaseFill,
  BsFillClipboardDataFill,
  BsJournalCheck,
  BsPencilFill,
} from "react-icons/bs";
import { MdAppSettingsAlt, MdAppShortcut, MdDeveloperMode, MdMiscellaneousServices, MdOutlineIntegrationInstructions, MdOutlineRequestPage, MdSecurity } from "react-icons/md";
import Outsourcing from "@/components/Outsourcing/Outsourcing";
import FormOutsource from "@/components/Outsourcing/FormOutsource";
import { RiCustomerService2Fill, RiCustomerServiceFill, RiTeamFill } from "react-icons/ri";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaCode } from "react-icons/fa";
import { BiCustomize, BiSupport } from "react-icons/bi";
import { MdOutlineManageHistory } from "react-icons/md";
import { MdOutlineLocalOffer } from "react-icons/md";
import { SiChainlink } from "react-icons/si";
import { IoMdPeople } from "react-icons/io";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { GiCrossedChains, GiDigitalTrace, GiHumanTarget, GiRosaShield } from "react-icons/gi";
import { HiCubeTransparent } from "react-icons/hi";

export default function index() {
  return (
    <>
      <section className="bg-gradient2">
        <div className="container ptb-50">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="row">
                <div className="col-lg-6">
                  <div className="text-center text-white">
                    <Image src={img14} width={100} />
                    <h1 className="mt-3">
                    HIRE SAP DEVELOPERS
                    </h1>
                    <h5 className="mt-2">
                    Looking to elevate your CRM sales and deliver exceptional customer experience to your partners, employees, and end-users? Look no further than our team of certified Salesforce developers. We offer top-notch Salesforce solutions that can take your business to new heights. Hire a Salesforce developer from us today and witness your customer satisfaction levels soar!
                    </h5>
                    <div className="mt-4 pb-4 text-center">
                      <Link href="/contact-us">
                        <button className="btn btn-royal" role="button">
                          GET IN TOUCH
                        </button>
                      </Link>
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

      <section className="bg-softblack">
        <div className="container ptb-50">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="text-center text-light">
                <h1>
                IT Outsourcing Services for SAP Development
                </h1>
                <p className="lead">
                Unlock the full potential of SAP DevOps with top-notch IT outsourcing services, providing expert development, support, and maintenance for your projects.
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
                <h2 className="theme-red mb-4">
                Askgalore Digital is a leading provider of innovative technical solutions that can help your business grow. We specialize in four SAP solutions
                </h2>
                <div className="col-lg-6">
                  <div className="card-three">
                    <GiDigitalTrace
                      size={50}
                      className="mt-2 text-primary"
                    />
                    <div className="h-8">Digital Transformation SAP</div>
                    <p className="text-justify">
                    Our robust SAP solutions empower enterprises and provide value to the business by enabling digital transformation.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card-three">
                    <RiCustomerService2Fill size={50} className="mt-2 text-danger" />
                    <div className="h-8">Customer Sales and Service SAP</div>
                    <p className="text-justify">
                    We offer SAP solutions to manage customer data and invoices, creating a seamless customer experience that can enhance loyalty and retention.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card-three">
                    <GiCrossedChains size={50} className="mt-2 text-success" />
                    <div className="h-8">Supply Chain Management SAP</div>
                    <p className="text-justify">
                    Our efficient supply chain solutions help businesses identify and analyze process shortcomings, resulting in an overall better process.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card-three">
                    <GiHumanTarget size={50} className="mt-2 text-warning" />
                    <div className="h-8">Human Capital Management SAP</div>
                    <p className="text-justify">
                    With our SAP solutions, businesses can manage their flexible workforce, from hiring to performance management and payroll, ensuring a productive and engaged workforce.
                    </p>
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
                <h1 className='text-center py-2'>Accelerate Your Business Growth with Top SAP Developers on the Askgalore</h1>
               <p  className='lead'>
               Askgalore is a platform used by thousands of companies from various industries, such as FinTech and food, to hire, scale, and grow faster by connecting them with top SAP developers. Here are the four types of work that SAP developers can do
               </p>
                <div className="py-2">
                  <h4 className='text-danger'>Full-Cycle Development</h4>
                  <p className='lead'>Good SAP developers can deliver end-to-end development services to help businesses build a wide range of solutions based on the SAP platform. With expertise in SAP BASIS, SAP developers can provide impeccable solution support and build and deliver customized, tailored solutions to meet specific business needs.</p>
                </div>
                <div className="py-2">
                  <h4 className='text-danger'>Cloud/On-Premise App Enhancements</h4>
                  <p className='lead'>SAP developers can make custom improvements to existing cloud applications and on-premises solutions running on the SAP Cloud Platform, helping businesses manage SAP workloads efficiently and align solutions with the business development strategy.</p>
                </div>
                <div className="py-2">
                  <h4 className='text-danger'>SAP ABAP Code Development</h4>
                  <p className='lead'>SAP developers have expertise in SAP ABAP and can be used for all types of work, including interfaces, module pools, transactions, forms, workflows, and more. SAP developers can create whole applications or individual parts of an application, such as object-oriented programming, ABAP/4 programming, optimizing code for performance, and BAPIs development.</p>
                </div>
                <div className="py-2">
                  <h4 className='text-danger'>App Lifecycle Management</h4>
                  <p className='lead'>A SAP developer can help businesses implement the SAP ALM platform to automate and enable efficient management of SAP and non-SAP applications, systems, and processes throughout the application lifecycle. SAP ALM provides businesses with an easier way to manage their SAP solutions, which helps to improve quality and reliability, ultimately resulting in better performance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-4 mb-5 mx-auto">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <h1 className="text-success text-center p-3 mb-2">
            Why Choose Askgalore for SAP Services
            </h1>
            <div className="row px-4 g-4 p-4">
              <div className="col-12 col-md-4 d-flex justify-content-center gap-4 m-auto">
                <Link className='td-none' href='/it-outsourcing-services-for-usa' target="_blank">
                  <div className="card-two">
                   <BsPencilFill size={50} className="mt-2 text-warning"/>
                    <div className='mt-3 sub-text2'>Flexible Solutions</div>
                  </div>
                </Link>
                <Link className='td-none' href='/it-outsourcing-services-for-canada' target="_blank">
                  <div className="card-two">
                   <MdDeveloperMode size={50} className="mt-2 text-warning"/>
                    <div className='mt-3 sub-text2'>Budget Adaptability</div>
                  </div>
                </Link>
                <Link className='td-none' href='/it-outsourcing-services-for-singapore' target="_blank">
                  <div className="card-two">
                  <MdDeveloperMode size={50} className="mt-2 text-warning"/>

                    <div className='mt-3 sub-text2'>Dedicated Developers</div>
                  </div>
                </Link>
                <Link className='td-none' href='/it-outsourcing-services-for-australia' target="_blank">
                  <div className="card-two">
                  <TiSupport size={50} className="mt-2 text-warning"/>

                    <div className='mt-3 sub-text2'>24/7 Customer Support</div>
                  </div>
                </Link>
                <Link className='td-none' href='/it-outsourcing-services-for-united-kingdom' target="_blank">
                  <div className="card-two">
                  <RiCustomerServiceFill size={50} className="mt-2 text-warning"/>

                    <div className='mt-3 sub-text2'>Customer-oriented</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="bg-buzz ptb-50">
          <h1 className="text-white text-center">
          Simplify Your SAP Developer Hiring Process with Askgalore- Just 3 Steps Away
          </h1>
         
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="mt-3 row g-2">
                  <div className="col-lg-4 ">
                    <div className="card-one mx-auto text-center ">
                      <MdOutlineRequestPage size={50} />
                      <h4 className="mt-3">Describe Your Request</h4>
                      <p className="mt-3">
                      Tell Askgaloreabout the specific SAP developer you require for your business by outlining the skills and experience required for the job.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 ">
                    <div className="card-one mx-auto text-center ">
                      <FaPeopleCarry size={50} />
                      <h4 className="mt-3">Interview Candidates</h4>
                      <p className="mt-3">
                      Askgalorewill provide you with vetted candidate profiles that match your engineering needs, and you can interview them to assess their fit for the job.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 ">
                    <div className="card-one mx-auto text-center ">
                      <FaHandsHelping size={40} />
                      <h5 className="mt-2">Hire Developer Candidates</h5>
                      <p className="mt-3">
                      After interviewing the candidates, you can select the most suitable SAP developer for your business. Askgalore ensures a seamless hiring process, from initial contact to onboarding, making sure you find the right candidate to help grow your business.
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
              <h1 className="theme-red">Hire Salesforce Developers with Our Simple Process</h1>
              <p className="text-center mt-2">
              To hire a Salesforce developer from Askgalore, let us know your business requirements. After reviewing them, we’ll connect with you to discuss our services and pricing. Then, you can choose a hiring model, complete payment, and start your project.
              </p>
              <div className="mt-4 text-center">
                <Link href="/contact-us">
                  <button className="btn btn-royal" role="button">
                    GET IN TOUCH
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
 

      <Outsourcing />

      <FormOutsource />
    </>
  );
}
