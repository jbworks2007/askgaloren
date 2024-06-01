import Image from "next/image";
import React from "react";
import Link from "next/link";
import img15 from "../../../public/brands/react.png";
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
  MdOutlineIntegrationInstructions,
  MdSecurity,
  MdSettingsApplications,
} from "react-icons/md";
import Outsourcing from "@/components/Outsourcing/Outsourcing";
import FormOutsource from "@/components/Outsourcing/FormOutsource";
import { RiTeamFill } from "react-icons/ri";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaCode, FaReact, FaSimplybuilt } from "react-icons/fa";
import { BiCustomize, BiSupport } from "react-icons/bi";
import { MdOutlineManageHistory } from "react-icons/md";
import { MdOutlineLocalOffer } from "react-icons/md";
import { SiChainlink } from "react-icons/si";
import { IoMdPeople } from "react-icons/io";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
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
                    <Image src={img15} width={60} />
                    <h1 className="mt-3">Hire React Js Developer</h1>
                    <h5 className="mt-2">
                      Hire ReactJS Developers with Askgalore and get access to a
                      pool of dream developers, engineers, and architects. Our
                      platform ensures that our developers are proficient in
                      ReactJS and have extensive experience in building scalable
                      web applications. With our seamless hiring process, you
                      can quickly build your team of ReactJS developers and take
                      your project to the next level.
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
                <h1>IT Outsourcing Services for React Js Development</h1>
                <p className="lead">
                  Unlock the full potential of React Js with top-notch IT
                  outsourcing services, providing expert development, support,
                  and maintenance for your projects.
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
                  Hire ReactJS Developers and Consultants for Your Web
                  Development Needs
                </h2>
                <p className="text-justify text-center">
                  Our dedicated team of ReactJS developers can help you achieve
                  your goals by developing web apps that cater to your business
                  IT needs and drive better ROI.
                </p>
                <div className="col-lg-3">
                  <div className="card-three">
                    <FaReact size={50} className="mt-2 text-primary" />
                    <div className="h-8">ReactJS Consulting Services</div>
                    <p className="text-justify">
                      If you need expert opinions on your app development ideas,
                      our ReactJS consulting services can help you define the
                      right-fit solution that caters to your business IT needs
                      and drives better ROI.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="card-three">
                    <SiMaterialdesign
                      size={50}
                      className="mt-2 text-danger"
                    />
                    <div className="h-8">Material Design Integrations</div>
                    <p className="text-justify">
                      Our creative UI/UX designers and ReactJS developers work
                      collaboratively to craft visually appealing front-end
                      designs that give users a reason to explore your platform
                      and opt for the customer journey.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="card-three">
                    <MdSettingsApplications size={50} className="mt-2 text-success" />
                    <div className="h-8">Single Page Applications</div>
                    <p className="text-justify">
                      Our ReactJS developers can elevate your website visitors’
                      experience by building Single Page Applications with
                      faster response time, enabled server-side rendering
                      benefiting in Google SERPs, and dynamic content changes to
                      suit different user preferences.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="card-three">
                    <SiTimescale
                      size={50}
                      className="mt-2 text-warning"
                    />
                    <div className="h-8">Custom Real-time Apps</div>
                    <p className="text-justify">
                      Our ReactJS developers are competent enough to deliver
                      modern, real-time web app solutions tailored to your
                      specific needs that will drive better results, no matter
                      to which industry your business belongs.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="card-three">
                    <FaSimplybuilt
                      size={50}
                      className="mt-2 text-primary"
                    />
                    <div className="h-8">Plugin Implementation</div>
                    <p className="text-justify">
                      Our ReactJS developers utilize the full potential of the
                      ReactJS front-end JavaScript library to create compostable
                      plugins and widgets that enhance the usability of your
                      business-critical solution, defining its success.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="card-three">
                    <SiSimpleanalytics size={50} className="mt-2 text-primary" />
                    <div className="h-8">App Migration</div>
                    <p className="text-justify">
                      Our ReactJS developers follow the ReactJS library best
                      practices to smoothly migrate your traditional
                      applications to ReactJS, achieving improved performance
                      and more potential to win users’ interest, leading to
                      improved ROI.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="card-three">
                    <SiTestinglibrary
                      size={50}
                      className="mt-2 text-primary"
                    />
                    <div className="h-8">ReactJS App Testing</div>
                    <p className="text-justify">
                      Our ISTQB-certified QA engineers have hands-on experience
                      in testing your mission-critical ReactJS application using
                      all possible test cases that ensure its top-notch code
                      quality, offering an uplifted user experience.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="card-three">
                    <MdAppSettingsAlt size={50} className="mt-2 text-primary" />
                    <div className="h-8">
                      App Support & Maintenance Services
                    </div>
                    <p className="text-justify">
                      Ensure the top-notch performance of your ReactJS
                      application at all times by hiring dedicated ReactJS
                      developers for app maintenance and support services. They
                      frequently and proactively release app version updates
                      with bug fixes and security patches to keep your app
                      up-to-date in all technical terms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container ptb-40">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h1 className="text-success mb-3" style={{fontWeight:'bold'}}>
                OUR SKILLED REACT JS DEVELOPERS FOR HIRE HAVE
              </h1>

              <p className="text-align-left mt-2">
                Proficiency in developing visually rich and performant front-end
                solutions
              </p>
              <p className="text-left">
                Knowledge of React.js technology stack, including HTML + CSS,
                JavaScript Fundamentals + ESX, JSX, Redux, Node + NPM, DOM
                manipulation, etc.
              </p>
              <p className="text-left">
                Hands-on experience with React.js libraries, including Redux,
                Redux-Saga, Flow, and React DnD
              </p>
              <p className="text-left">
                Experience in testing applications with popular app Units and
                Integration test cases using React Testing Library – Enzyme
              </p>
              <p className="text-left">
                Experience in making ReactJS apps cloud-powered
              </p>
              <p className="text-left">
                Adept at ever-changing technology-specific methodologies to
                build evolving ReactJS apps
              </p>
              <p className="text-left">
                Ability to work with various cross-technology combinations
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container ptb-50">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h1 className="theme-red">
                Askgalore Digital - Your One-Stop Destination for Dedicated
                ReactJS Developers
              </h1>
              <p className="text-center mt-2">
                To hire a Salesforce developer from Askgalore, let us know your
                business requirements. After reviewing them, we’ll connect with
                you to discuss our services and pricing. Then, you can choose a
                hiring model, complete payment, and start your project.
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
