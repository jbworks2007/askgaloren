import Image from "next/image";
import React from "react";
import Link from "next/link";
import img25 from '../../../public/brands/OpenAI.png'
import ContactForm from "@/components/Misc/ContactForm";
import {
  FaAws,
  FaHandsHelping,
  FaHireAHelper,
  FaJava,
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
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";
import {
  GrHadoop,
  GrMysql,
  GrMoreVertical,
  GrHostMaintenance,
  GrBusinessService,
  GrUserExpert,
  GrVirtualMachine,
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
  SiInfracost,
  SiKnowledgebase,
  SiAvast,
  SiMicropython,
  SiCraftcms,
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
import {
  MdAppSettingsAlt,
  MdAppShortcut,
  MdMiscellaneousServices,
  MdOutlineAppSettingsAlt,
  MdOutlineArchitecture,
  MdOutlineEventAvailable,
  MdOutlineIntegrationInstructions,
  MdSecurity,
  MdSettingsApplications,
  MdSupportAgent,
} from "react-icons/md";
import Outsourcing from "@/components/Outsourcing/Outsourcing";
import FormOutsource from "@/components/Outsourcing/FormOutsource";
import { RiH4, RiTeamFill } from "react-icons/ri";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaCode } from "react-icons/fa";
import { BiCustomize, BiMobile, BiSupport, BiTime, BiTransfer } from "react-icons/bi";
import { MdOutlineManageHistory } from "react-icons/md";
import { MdOutlineLocalOffer } from "react-icons/md";
import { SiChainlink } from "react-icons/si";
import { IoMdPeople } from "react-icons/io";
import {
  TbApiApp,
  TbBoxModel2Off,
  TbBrandDjango,
  TbBrandPython,
  TbDeviceDesktopAnalytics,
  TbH5,
  TbReplace,
  TbTruckDelivery,
} from "react-icons/tb";
import { GiAutomaticSas, GiRosaShield } from "react-icons/gi";
import { HiCubeTransparent, HiLightBulb } from "react-icons/hi";
import { FcProcess } from "react-icons/fc";
import { TfiMicrosoft } from "react-icons/tfi";
import { CgProductHunt } from "react-icons/cg";

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
                    {/* <Image src={img25} width={60} /> */}
                    <FaJava size={50} className="mt-2 text-primary"/>
                    <h1 className="mt-3">HIRE JAVA DEVELOPERS</h1>
                    <h5 className="mt-2">
                    Looking for a dedicated Java developer? Look no further! At Askgalore, our Java developers are highly skilled and experienced in a wide range of projects. With affordable rates, you can hire a Java developer who will utilize the latest frameworks, technologies, trends, and tools to deliver cutting-edge solutions for your project.
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
            <div className="col-lg-12">
              <div className="text-center text-light">
                <h1>
                IT Outsourcing Services for Java Development
                </h1>
                <p className="lead">
                Unlock the full potential of Java with top-notch IT outsourcing services, providing expert development, support, and maintenance for your projects.
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
                Expertise Of Our Java Developers 
                </h2>
                <p className="text-justify text-center">
                Take a look at the areas of expertise our Java developers possess. They have domain-specific experience to provide optimal programming solutions.
                </p>
                <div className="col-lg-4">
                  <div className="card-three">
                    <FaJava size={50} className="mt-2 text-primary" />
                    <div className="h-8">Java Web App Development</div>
                    <p className="text-justify">
                    Our offshore Java developers specialize in creating highly scalable solutions using the latest technologies and tools.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-three">
                    <BiMobile
                      size={50}
                      className="mt-2 text-danger"
                    />
                    <div className="h-8">
                    Java Mobile App Development
                    </div>
                    <p className="text-justify">
                    Experienced in building high-performance mobile apps for various platforms, including Android, our Java developers provide engaging user experiences.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-three">
                    <MdOutlineAppSettingsAlt size={50} className="mt-2 text-success" />
                    <div className="h-8">Enterprise Apps with Java</div>
                    <p className="text-justify">
                    Hire our Java developers to develop complex business applications, web portals, eCommerce websites, and systems such as ERP, CRM, ECM, EHR, POS, PIM, and EAM.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-three">
                    <TfiMicrosoft size={50} className="mt-2 text-warning" />
                    <div className="h-8">Java Microservices Development</div>
                    <p className="text-justify">
                    Our Java developers excel at building independent, scalable, and lightweight Java-based microservices applications.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-three">
                    <SiCraftcms size={50} className="mt-2 text-warning" />
                    <div className="h-8">CMS & eCommerce Development</div>
                    <p className="text-justify">
                    Our skilled Java coders can develop custom Java-based content management systems and eCommerce websites tailored to your specific needs.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-three">
                    <CgProductHunt size={50} className="mt-2 text-warning" />
                    <div className="h-8">Java-based Products</div>
                    <p className="text-justify">
                    Leverage the experience of our Java developers to build feature-packed and customized software products that meet your specific requirements.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-three">
                    <TbApiApp size={50} className="mt-2 text-warning" />
                    <div className="h-8">Java API Development</div>
                    <p className="text-justify">
                    Trust our Java developers to create secure and robust Java-based APIs that seamlessly integrate with other platforms and systems.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-three">
                    <BiTransfer size={50} className="mt-2 text-warning" />
                    <div className="h-8">Java Migration</div>
                    <p className="text-justify">
                    Hire our offshore Java web developers for hassle-free and cost-effective migration of your web applications from other technologies to Java.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-three">
                    <MdSupportAgent size={50} className="mt-2 text-warning" />
                    <div className="h-8">Support & Maintenance Services</div>
                    <p className="text-justify">
                    When you hire Java web programmers from Askgalore, you receive complete support and maintenance for your current website, ensuring it remains up-to-date.
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
          Why Choose Askgalore to Hire Java Developers?
          </h1>
          <p className="text-justify text-center text-white">
            The development process for OpenAI model-powered solutions, such as
            ChatGPT, can be divided into six key stages. These stages include
            problem definition, data collection and preprocessing, model design,
            model training and fine-tuning, model testing, and solution
            deployment.
          </p>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="mt-3 row g-2">
                  <div className="col-lg-4 ">
                    <div className="card-one mx-auto text-center ">
                      <HiCubeTransparent size={50} />
                      <h4 className="mt-3">
                      Agile/DevOps Enabled
                      </h4>
                      <p className="mt-3 ">
                      Our Agile solutions provide delivery insights, error detection, bottleneck removal, and increased productivity.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 ">
                    <div className="card-one mx-auto text-center ">
                      <SiInfracost size={50} />
                      <h4 className="mt-3">
                      IP Protection & Security
                      </h4>
                      <p className="mt-3 ">
                      We prioritize project confidentiality and ensure IP protection, guaranteeing the utmost security.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 ">
                    <div className="card-one mx-auto text-center ">
                      <TbTruckDelivery size={50} />
                      <h4 className="mt-3">
                      Certified Developers
                      </h4>
                      <p className="mt-3 ">
                      Our Java developers undergo a stringent screening process and continuously update their knowledge.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 ">
                    <div className="card-one mx-auto text-center ">
                      <SiAvast size={50} />
                      <h4 className="mt-3">
                      Quick Reporting
                      </h4>
                      <p className="mt-3 ">
                      We keep our clients informed through a transparent working process and real-time project reporting.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 ">
                    <div className="card-one mx-auto text-center ">
                      <HiLightBulb size={50} />
                      <h4 className="mt-3">
                      Stringent QA Testing
                      </h4>
                      <p className="mt-3 ">
                      Our QA testing team identifies any bugs or errors that may have gone unnoticed during the development process.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 ">
                    <div className="card-one mx-auto text-center ">
                      <AiOutlineFundProjectionScreen size={50} />
                      <h4 className="mt-3">
                      Advanced Project Management
                      </h4>
                      <p className="mt-3 ">
                      We follow a DevOps project management process using agile and lean principles, fostering the entire development process.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 ">
                    <div className="card-one mx-auto text-center ">
                      <TbReplace size={50} />
                      <h4 className="mt-3">
                      Replacement Guarantee
                      </h4>
                      <p className="mt-3 ">
                      If we fail to meet your requirements or if you’re not satisfied with the results, we offer a complete payment refund.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 ">
                    <div className="card-one mx-auto text-center ">
                      <MdOutlineArchitecture size={50} />
                      <h4 className="mt-3">
                      Architecture Development
                      </h4>
                      <p className="mt-3 ">
                      In addition to development services, we provide architecture development support to help create mission-effective systems.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 ">
                    <div className="card-one mx-auto text-center ">
                      <TbBoxModel2Off size={50} />
                      <h4 className="mt-3">
                      Hybrid Model
                      </h4>
                      <p className="mt-3 ">
                      We adopt the onsite-offshore hybrid model, combining onsite and offshore resources to deliver products or services.
                      </p>
                    </div>
                  </div>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-grlite ptb-25">
        <div className="container ptb-35">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h2 className="text-center theme-red">
              IT Outsourcing Services in India
              </h2>
              <p className="lead text-center">
              Discover top-notch IT Outsourcing Services in India through Askgalore’s efficient and reliable IT offshoring vertical. Our commitment to delivering exceptional results is complemented by our ability to provide developers on demand rapidly. Benefit from our IT Staff Augmentation Services, ensuring a seamless and efficient collaboration with our talented professionals based in India. Experience the assurance of timely project completion and exceptional service quality by partnering with us.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white ptb-25">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h2 className="text-center theme-red">
              Ready to Get Started? 
              </h2>
              <p className="lead text-center">
              Save yourself from the hassles of recruitment, training, and infrastructure management by hiring Java developers from Askgalore. We provide Java development talent customized to your specific requirements, enabling you to save up to 60% of your project cost.
              </p>
              <br></br>
              <div className="mt-3 pb-4 text-center">
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
