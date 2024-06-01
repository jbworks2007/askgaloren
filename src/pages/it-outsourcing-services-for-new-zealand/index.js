import React from "react";
import ContactForm from "@/components/Misc/ContactForm";
import Link from "next/link";
import Image from "next/image";
import img1 from "../../../public/IT-Services-Outsourcing.jpg";
import img3 from "../../../public/IT-Staff-Augmentation-Services-Work.jpg";
import {
  FaProjectDiagram,
  FaDiceD20,
  FaPeopleCarry,
  FaChalkboardTeacher,
  FaWallet,
  FaBitcoin,
} from "react-icons/fa";
import {FaAmericanSignLanguageInterpreting} from 'react-icons/fa';
import {SiHyperledger} from 'react-icons/si';
import {AiFillFilter} from 'react-icons/ai';
import { RiTeamFill } from 'react-icons/ri';
import {FaDonate} from 'react-icons/fa';
import {FaCoins} from 'react-icons/fa';
import {FaPeopleArrows} from 'react-icons/fa';
import {BsCurrencyDollar} from 'react-icons/bs';
import { FaCode } from 'react-icons/fa';
import {BiSupport} from 'react-icons/bi';
import {MdOutlineManageHistory} from 'react-icons/md'
import { MdOutlineLocalOffer } from 'react-icons/md';
import Developers from "@/components/Misc/Developers";
import Countries from "@/components/Misc/Countries";
import Outsourcing from "@/components/Outsourcing/Outsourcing";
import FormOutsource from "@/components/Outsourcing/FormOutsource";
import {
  SiBlockchaindotcom,
  SiChainlink,
  SiHiveBlockchain,
} from "react-icons/si";
import { BsBoxes, BsCoin } from "react-icons/bs";
import { ImPriceTag } from "react-icons/im";

export default function index() {
  return (
    <>
      <section className="bg-grlite">
        <div className="container">
          <div className="pt-5">
            <h1 className="text-center">
            Best IT Outsourcing Services for New Zealand
            </h1>
            <h5 className="text-center">
            Hire Dedicated Developers to Drive Your Business Forward with Agility and Innovation
            </h5>
          </div>
          <div className="row justify-content-center ptb-25">
            <div className="col-lg-6 ptb-25">
              <h2 className="text-center">
              Revolutionize Your IT Resource Augmentation with Askgalore Digital's IT Outsourcing Services for New Zealand
              </h2>
              <div className="lead px-5 text-justify mb-20">
                <p>
                At Askgalore Digital, we simplify the intricacies of on-demand IT recruitment. Our IT Outsourcing Services offer unparalleled flexibility and leverage to businesses in the IT, digital, and mobile industries worldwide. We help you find skilled, dedicated, and driven employees whenever you need them.
                </p>
              </div>
              <div className="text-center">
                <Link href="/contact-us">
                  <button className="btn btn-royal" role="button">
                    GET IN TOUCH
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 ptb-25">
              <div className="bg-themered p-4">
                <h3 className="text-light text-center">Enquire Now</h3>
                <ContactForm dark />
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
                Our IT Outsourcing Services for New Zealand
                </h2>
                <div className="col-lg-3">
                  <div className="card-three">
                    <MdOutlineLocalOffer
                      size={50}
                      className="mt-2 text-primary"
                    />
                    <div className="h-8">Our Offering</div>
                    <p className="text-justify">
                      Our company provides Staff Augmentation services that are
                      tailored to fit the unique needs of your business. We
                      offer a range of flexible options that can be customized
                      to meet your specific requirements.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="card-three">
                    <FaCode size={50} className="mt-2 text-danger" />
                    <div className="h-8">Developers On Demand</div>
                    <p className="text-justify">
                      We provide a Dedicated On-Demand Team of skilled,
                      certified, and experienced professionals who are available
                      to work on your project whenever you need them. Our team
                      is dedicated to completing your project on time and on
                      budget.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="card-three">
                    <RiTeamFill size={50} className="mt-2 text-success" />
                    <div className="h-8">Flexible Team</div>
                    <p className="text-justify">
                      Our Agile, Flexible Team can quickly deploy a temporary
                      team to meet your urgent project requirements. We can
                      quickly source the right talent and assemble a team that
                      can deliver results quickly and efficiently.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="card-three">
                    <BsCurrencyDollar size={50} className="mt-2 text-warning" />
                    <div className="h-8">Pay As You Go Model</div>
                    <p className="text-justify">
                      Our Pay as you go model allows you to hire on-demand
                      workers for specific projects or on an hourly basis. This
                      provides you with greater flexibility and control over
                      your staffing requirements.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-three">
                    <SiChainlink size={50} className="mt-2 text-primary" />
                    <div className="h-8">OKRs and Contracts</div>
                    <p className="text-justify">
                    We enable our clients to define and implement Contracts & OKRs (Objectives and Key Results) for their selected employees. This ensures that everyone is clear on what is expected of them and helps to align everyone towards common goals.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-three">
                    <BiSupport size={50} className="mt-2" />
                    <div className="h-8">On - Boarding Support</div>
                    <p className="text-justify">
                    Our On-Boarding Support ensures that your new hires are properly integrated into your organization. Our HR team will handle all aspects of the onboarding process and help your new employees transition into their new roles.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-three">
                    <MdOutlineManageHistory size={50} className="mt-2 text-success" />
                    <div className="h-8">Managed Recruitment Services</div>
                    <p className="text-justify">
                    Our Managed Recruitment Services offer a complete HR management solution for your business. We will handle every aspect of the recruitment process, including sourcing, profiling, selection, on-boarding, and more. This allows you to focus on your core business activities while we handle your staffing needs
                    </p>
                  </div>
                </div>
          
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ptb-50 bg-black">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h1 className="text-center text-white">
                Our Methodology for Effective IT Outsourcing Services
              </h1>
              <p className="mt-3 ice-gray text-center">
                Our methodology for Staff Augmentation services at Askgalore
                Digital is designed to provide our clients with the right
                candidates for their projects, at the right time. Here's how we
                work:
              </p>
              <div className="row mt-5 justify-content-center">
                <div className="col-lg-4 text-center">
                <SiHyperledger className="poppy-blue" size={70} />

                  <h5 className="mt-4 text-white">Evaluation of Needs</h5>
                  <p className="mt-3 ice-gray">
                    We begin by evaluating your manpower needs and creating a
                    blueprint for IT Outsourcing Services that align with your
                    business objectives.
                  </p>
                </div>
                <div className="col-lg-4 text-center">
                <FaAmericanSignLanguageInterpreting className="poppy-blue" size={70} />

                  <h5 className="mt-4 text-white">Screening Candidates</h5>
                  <p className="mt-3 ice-gray">
                    Based on the job description, we suggest a pool of talented,
                    certified (if required), and passionate on-demand employees
                    for your projects.
                  </p>
                </div>
                <div className="col-lg-4 text-center">
                <AiFillFilter className="poppy-blue" size={70} />

                  <h5 className="mt-4 text-white">Filtering Candidates</h5>
                  <p className="mt-3 ice-gray">
                    We filter the candidates based on your specific needs and
                    objectives (OKRs) and present you with the final selection
                    for approval.
                  </p>
                </div>
              </div>
              <div className="row mt-5 justify-content-center">
                <div className="col-lg-4 text-center">
                <FaPeopleArrows className="poppy-blue" size={70} />

                  <h5 className="mt-4 text-white">Deploying On-Demand Staff</h5>
                  <p className="mt-3 ice-gray">
                    Once the candidates are approved, we deploy them to your
                    location or set up work from home arrangements.
                  </p>
                </div>
                <div className="col-lg-4 text-center">
                <FaDonate className="poppy-blue" size={70} />

                  <h5 className="mt-4 text-white">Documentation Process</h5>
                  <p className="mt-3 ice-gray">
                    Our HR team handles the onboarding documentation process,
                    following your business protocols.
                  </p>
                </div>
                <div className="col-lg-4 text-center">
                <FaCoins className="poppy-blue" size={70} />

                  <h5 className="mt-4 text-white">Post-Recruitment Support</h5>
                  <p className="mt-3 ice-gray">
                    We provide post-recruitment support and services to ensure
                    higher productivity and ROI.
                  </p>
                </div>
              </div>

              <div className="row mt-5 justify-content-center">
                <p className="mt-3 ice-gray text-center">
                  Our methodology for Staff Augmentation services at Askgalore
                  Digital is designed to provide our clients with the right
                  candidates for their projects, at the right time. Here's how
                  we work:
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ptb-50">
        <div className="container col-lg-10">
          <h2 className="text-center">Askgalore Digital Offers IT Outsourcing Services In USA for Critical IT Roles</h2>
          <Developers />
        </div>
      </section>

      <section className="bg-grlite ptb-25">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h2 className="text-center">
              Selecting the Right IT Outsourcing Services Model: Askgalore's Expertise and Guidance
              </h2>
              <p className="lead p-2">
              At Askgalore, we understand that selecting the right IT Outsourcing Services model is crucial for businesses to get the right talent for their projects. There are various types of IT Outsourcing Services companies, such as traditional staffing, master vendor staffing, consulting companies, gig platforms, and on-demand talent platforms. Depending on their business requirements, most organizations choose multiple IT Outsourcing Services companies.
                <br></br>
                <br></br>
                To select the best service for your business, it’s essential to identify your budget, objectives, and crucial needs. At Askgalore, we assist you in choosing the right resource with the required skill set based on your needs before augmenting the staff. We ensure that you have access to the most suitable staff augmentation model that meets your business requirements and delivers the desired results.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ptb-50">
        <div className="container">
          <div className="row justify-content-center">
          
            <div className="mt-1 col-lg-10">
              <h4 className="text-justify text-center">
              Get the Right On-Demand Developers for Your Business with Askgalore Digital's Expert IT Outsourcing Services for New Zealand
              </h4>
            </div>
            <div className="mt-3 text-center">
              <Link href="seo-service-packages" className="btn btn-flag">
                Contact Us Today!
              </Link>
            </div>
          </div>
        </div>
      </section>
    <Outsourcing />
      <FormOutsource />
    </>
  );
}
