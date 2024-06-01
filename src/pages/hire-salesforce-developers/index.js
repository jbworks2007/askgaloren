import Image from "next/image";
import React from "react";
import Link from "next/link";
import img13 from '../../../public/brands/salesforce.png'
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
import { MdAppSettingsAlt, MdAppShortcut, MdMiscellaneousServices, MdOutlineIntegrationInstructions, MdSecurity } from "react-icons/md";
import Outsourcing from "@/components/Outsourcing/Outsourcing";
import FormOutsource from "@/components/Outsourcing/FormOutsource";
import { RiTeamFill } from "react-icons/ri";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaCode } from "react-icons/fa";
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
                    <Image src={img13} width={100} />
                    <h1 className="mt-3">
                    Hire Salesforce Developers
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
                Hire Dedicated Salesforce Developers for Specialized Services
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
                Hire Dedicated Salesforce Developers for Specialized Services
                </h2>
                <div className="col-lg-4">
                  <div className="card-three">
                    <SiConsul
                      size={50}
                      className="mt-2 text-primary"
                    />
                    <div className="h-8">Salesforce Consulting</div>
                    <p className="text-justify">
                    Our team of certified Salesforce professionals has years of experience across various industries and domains. We’ll work closely with you to understand your business requirements and deliver the best-in-class solutions.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-three">
                    <MdOutlineIntegrationInstructions size={50} className="mt-2 text-danger" />
                    <div className="h-8">Salesforce Integration</div>
                    <p className="text-justify">
                    Our Salesforce programmers can help you align and integrate your existing system with the powerful Salesforce platform, ensuring seamless, reliable, and secure integration solutions that meet your custom business requirements.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-three">
                    <BiCustomize size={50} className="mt-2 text-success" />
                    <div className="h-8">Salesforce Migration</div>
                    <p className="text-justify">
                    Trust our dedicated Salesforce professionals to migrate your current system to Salesforce CRM software without compromising your data security. We have hands-on experience in Salesforce migration and can migrate it to a third-party system or your current business applications.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-three">
                    <TbDeviceDesktopAnalytics size={50} className="mt-2 text-warning" />
                    <div className="h-8">Salesforce Customization</div>
                    <p className="text-justify">
                    Enhance your customer experience and grow your business with our wide range of Salesforce customization services. Our Salesforce developers can add custom objects, records, and other elements to your Salesforce solutions to make them more powerful and functional.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-three">
                    <MdMiscellaneousServices size={50} className="mt-2 text-primary" />
                    <div className="h-8">Salesforce UI/UX Solutions</div>
                    <p className="text-justify">
                    Our team of Salesforce developers is skilled at Lightning Platform and Heroku, applying modern design principles to offer a delightful user experience. We offer everything from complex wireframes to illustrations, appealing web designs to compelling prototypes.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-three">
                    <MdAppShortcut size={50} className="mt-2 text-primary" />
                    <div className="h-8">Salesforce Cloud Services</div>
                    <p className="text-justify">
                    We offer a comprehensive range of Salesforce cloud services, including Marketing Cloud, Sales Cloud, Service cloud, Vaccine cloud, Commerce cloud, and other essential services. Our dedicated team of Salesforce developers can help you with the best cloud solutions.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-three">
                    <GrBusinessService size={50} className="mt-2 text-primary" />
                    <div className="h-8">Salesforce Implementation</div>
                    <p className="text-justify">
                    With our exceptional implementation services, we can help you get the best outcomes by implementing Salesforce in your current business environment.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-three">
                    <MdAppSettingsAlt size={50} className="mt-2 text-primary" />
                    <div className="h-8">Salesforce App Development</div>
                    <p className="text-justify">
                    We can create highly customizable and feature-rich custom applications for your Salesforce system that incorporate the latest technologies and augment your business processes.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-three">
                    <GiRosaShield size={50} className="mt-2 text-primary" />
                    <div className="h-8">SaaS Development
</div>
                    <p className="text-justify">
                    With a proven track record of developing and delivering highly scalable SaaS platforms using modern technologies, we’ve successfully delivered hundreds of projects across 30+ nations globally.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-three">
                    <GrHostMaintenance size={50} className="mt-2 text-primary" />
                    <div className="h-8">Salesforce Support and Maintenance</div>
                    <p className="text-justify">
                    Our team of Salesforce CRM developers provides excellent support and maintenance services, available to assist you 24/7/365 with any issues or queries.
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
          Next-Generation Salesforce Solutions with Expert Support and Transparency
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
                    <div className="card-one1 mx-auto text-center ">
                      <HiCubeTransparent size={50} />
                      <h4 className="mt-3">Integrity & Transparency</h4>
                      <p className="mt-3">
                      At our company, we understand the value of your business and investment, which is why we prioritize transparency and integrity in everything we do. We keep you informed through periodic reports, shared via email or other communication modes, to ensure that you’re always up-to-date on your project’s progress.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 ">
                    <div className="card-one1 mx-auto text-center ">
                      <FaPeopleCarry size={50} />
                      <h4 className="mt-3">24/7 Technical Support</h4>
                      <p className="mt-3">
                      We know that technical issues can arise at any time, which is why our technical experts are available 24/7 to assist you and resolve your queries regarding Salesforce solutions. With our comprehensive technical support, you can take complete control of your project, knowing that our experts are always available to help.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 ">
                    <div className="card-one1 mx-auto text-center ">
                      <FaHandsHelping size={50} />
                      <h4 className="mt-3">Expert Advice & Support</h4>
                      <p className="mt-3">
                      Our Salesforce consultants and developers are here to transform your business with their expert advice and support. We’ll work closely with you to understand your business needs and provide guidance on what’s best for your business. With our support, you can make informed decisions that help your business thrive.
                      </p>
                    </div>
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
                <h1 className='text-center py-2'>Trustworthy and Experienced Salesforce Developers at Askgalore</h1>
               <p  className='lead'>
               When it comes to Salesforce development, deployment, integration, and customization services, we understand the importance of hiring the right team to help you achieve your goals. That’s why at Askgalore, we prioritize trust and transparency, ensuring that your projects are managed effectively and delivered on-time and to your satisfaction. With our certified Salesforce developers, you can expect error-free implementation, industry-specific applications, and a comprehensive range of services to help your business thrive.
               </p>
                <div className="py-2">
                  <h4 className='text-danger'>Verified Work History</h4>
                  <p className='lead'>Our Salesforce developers come with a verified work history, showcasing their experience and expertise in the field of CRM solutions. With a proven track record, you can trust that our developers have the skills and knowledge necessary to deliver exceptional Salesforce solutions for your business.</p>
                </div>
                <div className="py-2">
                  <h4 className='text-danger'>On-Time Delivery</h4>
                  <p className='lead'>At Askgalore, we understand the importance of meeting deadlines and delivering on-time. Our Salesforce developers are committed to delivering projects within the agreed-upon timeframe, ensuring that your business stays on track and meets its objectives.</p>
                </div>
                <div className="py-2">
                  <h4 className='text-danger'>Flexibility</h4>
                  <p className='lead'>We understand that each business has unique needs and requirements, which is why we offer flexible solutions that can be tailored to meet your specific needs. Our Salesforce developers are open to discussing your project and making adjustments as needed to ensure that you get the best possible results.</p>
                </div>
                <div className="py-2">
                  <h4 className='text-danger'>Open for Discussion</h4>
                  <p className='lead'>Communication is key to any successful project, which is why our Salesforce developers are open for discussion throughout the development process. We keep you informed and involved, ensuring that your project meets your expectations and delivers the results you need.</p>
                </div>
                <div className="py-2">
                  <h4 className='text-danger'>Complete Transparency</h4>
                  <p className='lead'>Transparency is one of our core values at Askgalore, and we strive to maintain it throughout every step of the development process. From periodic progress reports to open communication, we keep you informed and involved, ensuring that you’re always up-to-date on your project’s progress.</p>
                </div>
                <div className="py-2">
                  <h4 className='text-danger'>24/7 Technical Support</h4>
                  <p className='lead'>Technical issues can arise at any time, which is why we offer 24/7 technical support for all of our Salesforce solutions. With our dedicated support team, you can rest assured that any issues will be addressed promptly and effectively.</p>
                </div>
                <div className="py-2">
                  <h4 className='text-danger'>Bug-Free Solutions</h4>
                  <p className='lead'>Our Salesforce developers are committed to delivering bug-free solutions, ensuring that your business operations run smoothly and efficiently. We prioritize quality and excellence in everything we do, and our Salesforce solutions are no exception.</p>
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
