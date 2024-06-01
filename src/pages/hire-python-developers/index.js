import Image from "next/image";
import React from "react";
import Link from "next/link";
import img22 from '../../../public/brands/python.png'
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
  SiInfracost,
  SiKnowledgebase,
  SiAvast,
  SiMicropython,
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
import { MdAppSettingsAlt, MdAppShortcut, MdMiscellaneousServices, MdOutlineEventAvailable, MdOutlineIntegrationInstructions, MdSecurity, MdSettingsApplications } from "react-icons/md";
import Outsourcing from "@/components/Outsourcing/Outsourcing";
import FormOutsource from "@/components/Outsourcing/FormOutsource";
import { RiTeamFill } from "react-icons/ri";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaCode } from "react-icons/fa";
import { BiCustomize, BiSupport, BiTime } from "react-icons/bi";
import { MdOutlineManageHistory } from "react-icons/md";
import { MdOutlineLocalOffer } from "react-icons/md";
import { SiChainlink } from "react-icons/si";
import { IoMdPeople } from "react-icons/io";
import { TbBrandDjango, TbBrandPython, TbDeviceDesktopAnalytics, TbTruckDelivery } from "react-icons/tb";
import { GiAutomaticSas, GiRosaShield } from "react-icons/gi";
import { HiCubeTransparent, HiLightBulb } from "react-icons/hi";

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
                    <Image src={img22} width={60} />
                    <h1 className="mt-3">
                    HIRE PYTHON DEVELOPERS
                    </h1>
                    <h6 className="mt-2">
                    Hire Python Developers from us who can create secure, scalable, and dynamic enterprise-level web applications while also offering OOP capabilities. We have a pool of full-stack Python developers with expertise in Django, Flask, web2py, Machine Learning, and Tornado. With our services, you can save up to 40% on Development/Maintenance/Support Costs.
                    </h6>
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
                IT Outsourcing Services for Python Development
                </h1>
                <p className="lead">
                Unlock the full potential of Python with top-notch IT outsourcing services, providing expert development, support, and maintenance for your projects.
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
                Boost Your Business with Custom Python Development - Hire Python Developers from Askgalore Today!
                </h2>
                <p className="text-justify text-center">
                Askgalore offers a range of Python development services that can benefit your business. Here are some of our offerings
                </p>
                <div className="col-lg-4">
                  <div className="card-three">
                    <TbBrandPython
                      size={50}
                      className="mt-2 text-primary"
                    />
                    <div className="h-8">Python Web Development</div>
                    <p className="text-justify">
                    Our skilled Python developers use cutting-edge tools and technologies to build reliable custom web solutions that can improve your business’s bottom line.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-three">
                    <MdSettingsApplications size={50} className="mt-2 text-danger" />
                    <div className="h-8">Python Applications</div>
                    <p className="text-justify">
                    Our reputation as a leading Python development company is built on our ability to deliver a variety of web applications, from small solutions to large and complex systems. We ensure that all applications are cost-effective for our clients.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-three">
                    <TbBrandDjango size={50} className="mt-2 text-success" />
                    <div className="h-8">Django Development</div>
                    <p className="text-justify">
                    Our pool of highly proficient Django developers can use this high-level Python web framework for rapid development, clean design, and pragmatic solutions for your startup or enterprise.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-three">
                    <GiAutomaticSas size={50} className="mt-2 text-warning" />
                    <div className="h-8">Automated Testing</div>
                    <p className="text-justify">
                    In addition to developing top-notch web applications and solutions, we also offer automated web testing services using Selenium WebDriver, Robot Framework, and other testing tools.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-three">
                    <MdMiscellaneousServices size={50} className="mt-2 text-primary" />
                    <div className="h-8">Flask Development</div>
                    <p className="text-justify">
                    Our Python developers possess vast skills, expertise, and experience in leveraging Flask framework to craft smart and unique custom web applications in the least turn-around time possible.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-three">
                    <MdAppShortcut size={50} className="mt-2 text-primary" />
                    <div className="h-8">Python Hybrid Programming</div>
                    <p className="text-justify">
                    Our Python development company has earned a reputation for excellence in Python Hybrid Programming. Our developers are well-adept in writing Python scripts integrated into Java, C#, C, and C++, for speedy customizations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-buzz ptb-50">
          <h1 className="text-white text-center">
          Why Hire Python Developers from Askgalore

          </h1>
          <p className="text-justify text-center text-white">
          Looking for reasons to choose Askgalore for your Python development needs? Here are a few


          </p>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="mt-3 row g-2">
                  <div className="col-lg-4 ">
                    <div className="card-one mx-auto text-center ">
                      <HiCubeTransparent size={50} />
                      <h4 className="mt-3">Transparency & Integrity</h4>
                      <p className="mt-3">
                      We value transparency and integrity at the highest level, which is why we protect our clients’ intellectual ideas through strict NDA rules.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 ">
                    <div className="card-one mx-auto text-center ">
                      <SiInfracost size={50} />
                      <h4 className="mt-3">Cost-Efficient</h4>
                      <p className="mt-3">
                      We believe in delivering high-quality solutions at the most cost-effective prices to all our clients.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 ">
                    <div className="card-one mx-auto text-center ">
                      <TbTruckDelivery size={50} />
                      <h4 className="mt-3">On-time Delivery</h4>
                      <p className="mt-3">
                      Our Python programmers follow a strict schedule to deliver milestones on time, giving you peace of mind that your project will be delivered on time.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 ">
                    <div className="card-one mx-auto text-center ">
                      <SiAvast size={50} />
                      <h4 className="mt-3">Vast Technical Knowledge</h4>
                      <p className="mt-3">
                      Our developers possess years of experience in Python development, allowing us to offer state-of-the-art Python solutions.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 ">
                    <div className="card-one mx-auto text-center ">
                      <HiLightBulb size={50} />
                      <h4 className="mt-3">QA And Testing</h4>
                      <p className="mt-3">
                      We offer A-grade QA and testing services to ensure that the final product is bug-free and ready for the final launch.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 ">
                    <div className="card-one mx-auto text-center ">
                      <MdOutlineEventAvailable size={50} />
                      <h4 className="mt-3">24X7 Availability</h4>
                      <p className="mt-3">
                      Our Python experts are available round the clock to answer your queries. Reach out to them via text, email, Skype, call, or any other mode of communication.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-grlite ptb-25'>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h2 className='text-center theme-red'>HIRE SKILLED PYTHON DEVELOPERS WITH EASE</h2>
              <p className='lead text-center'>
              In just 3 simple steps, you can Hire Python Developers who are perfect for your needs!
                </p>
                <br></br>
                <strong className='stg-700'>Step 1: Share your hiring challenge : </strong> Let us know your vision and the type of talent you’re looking to hire. We’ll guide you through the process of specifying the required tech stack, seniority, past experience, cultural fit, and more.
                <br></br><br></br>
                <strong className='stg-700'>Step 2: Choose from our recommendations: </strong> We’ll assemble a list of top-tier talent who are the perfect fit for your needs. You can assess them and evaluate their fit before deciding which developer to work with.
                <br></br><br></br>
                <strong className='stg-700'>Step 3: Build and grow your product: </strong> Once you’ve chosen your ideal Python developer, you can begin your product journey together and achieve your goals. Our team provides a customized dashboard for you to track progress and manage your development team.
             
            </div>
          </div>
        </div>
      </section>

      <Outsourcing />

      <FormOutsource />
    </>
  );
}
