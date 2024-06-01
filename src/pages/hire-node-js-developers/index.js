import Image from "next/image";
import React from "react";
import Link from "next/link";
import img16 from '../../../public/brands/node.png'
import ContactForm from "@/components/Misc/ContactForm";

import {
  GrHadoop,
  GrMysql,
  GrMoreVertical,
  GrHostMaintenance,
  GrBusinessService,
  GrUserExpert,
} from "react-icons/gr";
import {
  SiInformatica,
  SiApachekafka,
  SiMongodb,
  SiPostgresql,
  SiMicrosoftazure,
  SiMicrosoftsqlserver,
  SiTeradata,
  SiConsul,
  SiMaterialdesign,
  SiTimescale,
  SiSimpleanalytics,
  SiTestinglibrary,
  SiMaterialdesignicons,
  SiAntdesign,
} from "react-icons/si";
import { SlScreenDesktop } from "react-icons/sl";
import { TiRefreshOutline, TiSupport } from "react-icons/ti";
import { DiSpark } from "react-icons/di";
import {
  BsFiletypeSql,
  BsDatabaseFill,
  BsFillClipboardDataFill,
  BsJournalCheck,
} from "react-icons/bs";
import {
  MdAppSettingsAlt,
  MdAppShortcut,
  MdMiscellaneousServices,
  MdOutlineIntegrationInstructions,
  MdSecurity,
  MdSettingsApplications,
} from "react-icons/md";
import Outsourcing from "@/components/Outsourcing/Outsourcing";
import FormOutsource from "@/components/Outsourcing/FormOutsource";
import { RiTeamFill } from "react-icons/ri";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaCode, FaNode, FaNodeJs, FaReact, FaSimplybuilt } from "react-icons/fa";
import { BiCustomize, BiSupport } from "react-icons/bi";
import { MdOutlineManageHistory } from "react-icons/md";
import { MdOutlineLocalOffer } from "react-icons/md";
import { SiChainlink } from "react-icons/si";
import { IoMdPeople } from "react-icons/io";
import { TbApiApp, TbDeviceDesktopAnalytics } from "react-icons/tb";
import { GiRosaShield } from "react-icons/gi";
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
                    <Image src={img16} width={60} />
                    <h1 className="mt-3">HIRE NODE JS DEVELOPER</h1>
                    <h5 className="mt-2">
                    Looking to build real-time, data-intensive, and scalable web and mobile applications? Hire Node.js developers from Askgalore! Our top-tier developers specialize in creating event-driven and non-blocking I/O model-based solutions that operate seamlessly on the server side and can manage multiple connections with ease. Our expertise in Node.js development can be leveraged to create advanced applications using a range of databases, including MYSQL, SQL, Oracle, or NoSQL databases like MongoDB and CouchDB. So why wait? Hire our Node.js developers today and take your application to the next level!
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
                <h1>IT Outsourcing Services for NODE JS Development</h1>
                <p className="lead">
                Unlock the full potential of NODE JS with top-notch IT outsourcing services, providing expert development, support, and maintenance for your projects.
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
                Revolutionize Your Technology Solutions with Our Node.js Developer Services
                </h2>
               
                <div className="col-lg-4">
                  <div className="card-three">
                    <FaNodeJs size={50} className="mt-2 text-primary" />
                    <div className="h-8">Node.js Consulting</div>
                    <p className="text-justify">
                    Enterprise-grade Node.js consulting and development solutions to build secure and scalable applications. Our Node.js developers provide an architecture analysis leveraging an open-source, cross-platform JavaScript runtime environment to build fast and scalable web apps.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-three">
                    <FaNode
                      size={50}
                      className="mt-2 text-danger"
                    />
                    <div className="h-8">Node.js Development</div>
                    <p className="text-justify">
                    Hire a Node.js expert with deep expertise to provide tailored services to solve your biggest challenges. Our expert developers provide a range of plugins, portals, interactive apps, marketplaces, or custom dashboards exactly based on your needs.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-three">
                    <TbApiApp size={50} className="mt-2 text-success" />
                    <div className="h-8">API Development & Integration</div>
                    <p className="text-justify">
                    Node. js-based API Development and integration using databases to create high-performing APIs and services. Our Node.js developers provide expertise in building RESTful APIs and enable integration with third-party components to strengthen functionalities and maintain scalability.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-three">
                    <SiAntdesign
                      size={50}
                      className="mt-2 text-warning"
                    />
                    <div className="h-8">UI/UX Development</div>
                    <p className="text-justify">
                    Expert Node.js specialists and programmers for creative UX/UI design, and development of efficient system monitoring dashboards. We specialize in UI/UX to create delightful user experiences that create a lasting impression on the minds of users.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-three">
                    <TiSupport
                      size={50}
                      className="mt-2 text-primary"
                    />
                    <div className="h-8">Node.js Plug-ins Development</div>
                    <p className="text-justify">
                    Hire Node.js engineers to enable extensive adoption and accelerate the development of Node.JS and other related plugins.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-three">
                    <SiSimpleanalytics size={50} className="mt-2 text-primary" />
                    <div className="h-8">Node.js Support and Maintenance</div>
                    <p className="text-justify">
                    Hire top Node.js developers providing support and maintenance for active and scalable development. With our professional and dedicated Node.js developers, you can rest assured of the seamless performance of your applications.
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
                <h1 className='text-center py-2'>Hire Dedicated Node.js Developers from Askgalore</h1>
               <p  className='lead'>
               If you’re looking for a team of highly qualified and expert Node.js developers, look no further than Askgalore.
                Our team of designers and developers has the skills and expertise you need to plan and execute your project with precision and excellence.
               </p>
                <div className="py-2">
                  <h4 className='text-danger'>Here are some of the reasons why you should choose Askgalore for your Node.js development needs : </h4>
                  <p className='lead'>1. Experienced team of Node.js developers with a proven track record of delivering successful projects</p>
                  <p className='lead'>2. Flexible hiring models to fit your project needs and budget</p>
                  <p className='lead'>3. Expertise in building scalable, high-performance applications using Node.js</p>
                  <p className='lead'>4. Strong focus on UI/UX design to create engaging and delightful user experiences</p>
                  <p className='lead'>5. Collaborative and transparent approach to project management</p>
                  <p className='lead'>6. Dedicated support and maintenance services to ensure the ongoing success of your project</p>
                
                </div>
                <div className="py-2">
                  <h4 className='text-danger'>Cloud/On-Premise App Enhancements</h4>
                  <p className='lead'>SAP developers can make custom improvements to existing cloud applications and on-premises solutions running on the SAP Cloud Platform, helping businesses manage SAP workloads efficiently and align solutions with the business development strategy.</p>
                </div>
                <div className="py-2">
                  <p className='lead'>At Askgalore, we understand that every project is unique, which is why we work closely with our clients to develop customized solutions that meet their specific needs. Whether you’re looking to build a new application from scratch or enhance an existing one, our team of Node.js developers is here to help you achieve your goals. Contact us today to get started!</p>
                </div>
               
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
