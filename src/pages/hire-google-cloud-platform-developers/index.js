import Image from "next/image";
import React from "react";
import Link from "next/link";
import img12 from "../../../public/brands/cloud.png";
import ContactForm from "@/components/Misc/ContactForm";
import {
  FaAws,
  FaHireAHelper,
  FaRocket,
  FaShare,
  FaWarehouse,
} from "react-icons/fa";
import {
  AiOutlineDatabase,
  AiOutlineCloudServer,
  AiFillDatabase,
} from "react-icons/ai";
import { GrHadoop, GrMysql, GrMoreVertical } from "react-icons/gr";
import {
  SiInformatica,
  SiApachekafka,
  SiMongodb,
  SiPostgresql,
  SiMicrosoftazure,
  SiMicrosoftsqlserver,
  SiTeradata,
} from "react-icons/si";
import { SlScreenDesktop } from "react-icons/sl";
import { TiRefreshOutline } from "react-icons/ti";
import { DiSpark } from "react-icons/di";
import {
  BsFiletypeSql,
  BsDatabaseFill,
  BsFillClipboardDataFill,
  BsJournalCheck,
} from "react-icons/bs";
import { MdSecurity } from "react-icons/md";
import Outsourcing from "@/components/Outsourcing/Outsourcing";
import FormOutsource from "@/components/Outsourcing/FormOutsource";
import { RiTeamFill } from "react-icons/ri";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaCode } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { MdOutlineManageHistory } from "react-icons/md";
import { MdOutlineLocalOffer } from "react-icons/md";
import { SiChainlink } from "react-icons/si";
import { IoMdPeople } from "react-icons/io";

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
                    <Image src={img12} width={100} />
                    <h1 className="mt-3">
                      Hire Google Cloud Platform Developers
                    </h1>
                    <h5 className="mt-2">
                      Hire a Google Cloud Platform Developer today with
                      AskGalore! Our team of experienced engineering
                      professionals is dedicated to helping you find the perfect
                      talent for your project. Whether you need assistance with
                      cloud computing, data storage, or application development,
                      we have the expertise to ensure success. With our flexible
                      engagement models and commitment to customer satisfaction,
                      you can trust us to provide the right solutions for your
                      business needs.
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
                  IT Outsourcing Services for Data Engineering Development
                </h1>
                <p className="lead">
                  Unlock the full potential of Data Engineering with top-notch
                  IT outsourcing services, providing expert development,
                  support, and maintenance for your projects.
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
                  Why choose askgalore to hire Google Cloud Platform Developers?
                </h2>
                <p className="text-justify text-center">
                  There are several reasons why you should choose AskGalore to
                  hire skilled Google Cloud Platform Developers
                </p>

                <div className="col-lg-4">
                  <div className="card-three">
                    <MdOutlineLocalOffer
                      size={50}
                      className="mt-2 text-primary"
                    />
                    <div className="h-8">Vast pool of talent</div>
                    <p className="text-justify">
                      We have a dedicated team of experienced engineering
                      professionals who have expertise in Google Cloud Platform
                      development.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-three">
                    <FaCode size={50} className="mt-2 text-danger" />
                    <div className="h-8">Personalized service</div>
                    <p className="text-justify">
                      We take the time to understand your business requirements
                      and match you with the right candidate who meets your
                      specific needs.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-three">
                    <RiTeamFill size={50} className="mt-2 text-success" />
                    <div className="h-8">Thorough screening process</div>
                    <p className="text-justify">
                      We conduct a rigorous screening process that includes
                      technical assessments, background checks, and interviews
                      to ensure that we only present you with the best
                      candidates.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-three">
                    <BsCurrencyDollar size={50} className="mt-2 text-warning" />
                    <div className="h-8">Customer satisfaction</div>
                    <p className="text-justify">
                      We are committed to providing excellent service and
                      ensuring customer satisfaction.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-three">
                    <SiChainlink size={50} className="mt-2 text-primary" />
                    <div className="h-8">Flexibility</div>
                    <p className="text-justify">
                      We offer flexible engagement models to serve your business
                      requirements.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center text-center mt-4">
                <h5 className="text-justify text-center">
                  Overall, with our experience, expertise, and commitment to
                  customer satisfaction, AskGalore is the ideal partner for
                  hiring Google Cloud Platform Developers.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-buzz ptb-50">
          <h1 className="text-white text-center">
            Effortlessly Hire Google Cloud Platform Developers with AskGalore
          </h1>
          <p className="text-justify text-center text-white">
            It’s simple to hire skilled Google Cloud Platform Developers with
            AskGalore. Here’s how our process works:
          </p>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="mt-3 row g-2">
                  <div className="col-lg-4 ">
                    <div className="card-one mx-auto text-center">
                      <FaShare size={60} />
                      <h4 className="mt-3">Share your requirements</h4>
                      <p className="mt-3">
                        Let us know about the Google Cloud Platform Developer
                        you’re looking for by describing your needs and
                        expectations.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 ">
                    <div className="card-one mx-auto text-center">
                      <IoMdPeople size={60} />
                      <h4 className="mt-3">Interview vetted candidates</h4>
                      <p className="mt-3">
                        We will provide you with profiles of thoroughly screened
                        and vetted candidates who match your engineering
                        requirements. You can interview them to make sure they
                        are a good fit for your team.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 ">
                    <div className="card-one mx-auto text-center">
                      <FaHireAHelper size={60} />
                      <h4 className="mt-3">Hire your selected candidate</h4>
                      <p className="mt-3">
                        Once you’ve made your decision, you can hire your
                        selected candidate with confidence, knowing that you’ve
                        found the right fit for your team with the help of
                        AskGalore.
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
              <h1 className="theme-red">CONTACT US TODAY!</h1>
              <p className="text-center mt-2">
                If you are in need of a Google Cloud Platform Developer, we
                would love to speak with you! At AskGalore, we value personal
                connections and believe that the best way to understand your
                business needs is through direct communication. Our team of
                experienced engineering professionals is available to meet with
                you to discuss your project requirements and provide tailored
                solutions.
              </p>
              <br />
              <h4 className="text-success">
                Our team at Askgalore evaluates a candidate's expertise in a
                variety of data engineering tools and specialties, such as:
              </h4>
            
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
