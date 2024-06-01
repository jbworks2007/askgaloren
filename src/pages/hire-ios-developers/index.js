import Image from "next/image";
import React from "react";
import Link from "next/link";
import img21 from '../../../public/brands/ios-store.png'
import ContactForm from "@/components/Misc/ContactForm";

import {
  GrHadoop,
  GrMysql,
  GrMoreVertical,
  GrHostMaintenance,
  GrBusinessService,
  GrUserExpert,
  GrAppleAppStore,
  GrVmMaintenance,
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
  SiExpertsexchange,
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
  MdOutlineApps,
  MdOutlineDeveloperMode,
  MdOutlineIntegrationInstructions,
  MdSecurity,
  MdSettingsApplications,
} from "react-icons/md";
import Outsourcing from "@/components/Outsourcing/Outsourcing";
import FormOutsource from "@/components/Outsourcing/FormOutsource";
import { RiTeamFill } from "react-icons/ri";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaBroadcastTower, FaCode, FaNode, FaNodeJs, FaReact, FaSimplybuilt, FaUsers } from "react-icons/fa";
import { BiCustomize, BiSupport } from "react-icons/bi";
import { MdOutlineManageHistory } from "react-icons/md";
import { MdOutlineLocalOffer } from "react-icons/md";
import { SiChainlink } from "react-icons/si";
import { IoMdPeople } from "react-icons/io";
import { TbApi, TbApiApp, TbBrandApplePodcast, TbDeviceDesktopAnalytics } from "react-icons/tb";
import { GiRosaShield, GiUpgrade } from "react-icons/gi";
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
                    <Image src={img21} width={60} />
                    <h1 className="mt-3">Hire iOS Developer</h1>
                    <h5 className="mt-2">
                    Hire iOS developer to bring your app idea to life. At Askgalore, we have a team of experts who can create a stunning and feature-rich iOS app tailored to your specific needs. With proficiency in Swift, Objective-C, Flutter, and React-Native, our developers have the technical know-how to deliver a high-quality app that exceeds your expectations. Whether you’re a startup, a small business, or an enterprise, we can provide you with the right talent to build an iOS app that sets you apart from the competition. So why wait? Hire iOS developer from Askgalore today and take your app to the next level!
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
                <h1>IT Outsourcing Services for iOS Development</h1>
                <p className="lead">
                Unlock the full potential of iOS with top-notch IT outsourcing services, providing expert development, support, and maintenance for your projects.
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
                Hire iOS Developers For Your Evolving Project Needs
                </h2>
               
                <div className="col-lg-3">
                  <div className="card-three">
                    <GrAppleAppStore size={50} className="mt-2 text-primary" />
                    <div className="h-8">Custom iOS App Developers</div>
                    <p className="text-justify">
                    Our team of genius iOS developers can build highly customized, feature-rich, and high-performing native iOS apps exclusively tailored to meet your business objectives.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="card-three">
                    <TbBrandApplePodcast
                      size={50}
                      className="mt-2 text-danger"
                    />
                    <div className="h-8">iOS Game Developers</div>
                    <p className="text-justify">
                    Our skilled iOS game developers can harness the power of Metal program and Swift programming language to build visually rich native iOS games that are supported across all Apple platforms.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="card-three">
                    <FaBroadcastTower size={50} className="mt-2 text-success" />
                    <div className="h-8">iOS Developers For IoT Apps</div>
                    <p className="text-justify">
                    We have iOS developers who can make the most of Swift programming language and Apple IoT frameworks such as HomeKit and HealthKit to customize smart premises apps and health tracking apps, among others, to build resilient iOS-supported IoT apps.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="card-three">
                    <MdOutlineApps
                      size={50}
                      className="mt-2 text-warning"
                    />
                    <div className="h-8">iOS App UI/UX Strategists</div>
                    <p className="text-justify">
                    Our creative UI/UX strategists can help make your iOS app UI/UX design an asset to your mission-critical iOS application. We can derive the best-in-class UI/UX strategy that leads to better ROI.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="card-three">
                    <FaUsers
                      size={50}
                      className="mt-2 text-primary"
                    />
                    <div className="h-8">iOS App Migration Experts</div>
                    <p className="text-justify">
                    We can help you migrate your conventional business-oriented apps to the native iOS ecosystem, allowing you to harness the capabilities of the Native platform and offer users the best-in-class app experience.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="card-three">
                    <GiUpgrade size={50} className="mt-2 text-primary" />
                    <div className="h-8">iOS Developers For App Upgrade</div>
                    <p className="text-justify">
                    Our team can fortify your existing iOS app with the latest technological enablements and new features & functionalities to retain the interests of app users.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="card-three">
                    <TbApi size={50} className="mt-2 text-primary" />
                    <div className="h-8">iOS Developers for API Integrations</div>
                    <p className="text-justify">
                    We can offer a one-stop solution to enhance the performance of your iOS applications by integrating them with powerful, third-party APIs, broadening application usability.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="card-three">
                    <GrVmMaintenance size={50} className="mt-2 text-primary" />
                    <div className="h-8">iOS Developers for App Support & Maintenance</div>
                    <p className="text-justify">
                    Our iOS experts can provide dedicated support and maintenance services to ensure top-notch performance for your mission-critical app.
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
                <h1 className='text-center py-2'>Get in Touch with Our Expert Android App Developers Today!</h1>
               <p  className='lead'>
               Looking for skilled and dedicated Android app developers to bring your app idea to life? Look no further! Our team of experts is ready to discuss your Android app development requirements and turn your vision into a reality.
               </p>
              
                <div className="py-2">
               
                  <p className='lead'>With years of experience in developing highly customized Android applications, our developers are proficient in programming languages like Java and Kotlin for native app development, as well as Flutter, React Native, and Ionic for cross-platform app development. We can develop apps for all Android OS-supported devices, including smartphones, tablets, wearables, and smart TVs.</p>
                </div>
                <div className="py-2">
                  <p className='lead'>We value open communication and collaboration with our clients to ensure that the end product meets their needs and expectations. So, if you’re ready to create a successful Android app that fulfills your business requirements, get in touch with us today. Contact us to schedule a discussion about your project.</p>
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
