import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import img20 from '../../../public/brands/android.png'
import img0 from '../../../public/Custom1.webp'
import ContactForm from '@/components/Misc/ContactForm'
import { FcAndroidOs } from 'react-icons/fc'
import { AiOutlineFileDone } from 'react-icons/ai'
import { RiInputMethodLine } from 'react-icons/ri'
import { SiW3C } from 'react-icons/si'
import { BsGooglePlay, BsWrenchAdjustable, BsCodeSquare } from 'react-icons/bs'
import { IoWatch, IoGameControllerOutline } from 'react-icons/io5'
import { FaShoppingBag, FaLayerGroup, FaUsers, FaBusinessTime, FaFileCode, FaDollarSign, FaGooglePlay } from 'react-icons/fa'
import { TbBrandReactNative, TbApi, TbReportSearch } from 'react-icons/tb'
import { GrAppleAppStore, GrMultiple } from 'react-icons/gr'
import { CiMobile3 } from 'react-icons/ci'
import { MdOutlineManageHistory } from 'react-icons/md'
import { GiSteampunkGoggles } from 'react-icons/gi'
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
                    <Image src={img20} width={100} />
                    <h1 className='mt-4'>HIRE ANDROID DEVELOPER</h1>
                    <h3 className='mt-4'>
                      Hire Android Developers from Askgalore and see your innovative app ideas come to life. Our team of Android app developers is highly skilled, with an average of 5+ years of practical experience in developing tailor-made Android applications.
                    </h3>
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
                <h1>IT Outsourcing Services for Android Development</h1>
                <p className='lead'>
                  Unlock the full potential of Android with top-notch IT outsourcing services, providing expert development, support, and maintenance for your projects.
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
                <h2 className='theme-red'>Hire Android Developer for Android App Development from Askgalore</h2>
                <p className='lead'>
                  Looking to take your business to the next level? Askgalore can help you achieve your goals with our comprehensive Android app development services. We specialize in creating custom, intuitive applications that work seamlessly across a range of devices, including smartphones, tablets, watches, and Android TVs.
                </p>
                <div className="col-lg-6">
                  <div className="card-three">
                    <FcAndroidOs size={50} className='mt-2' />
                    <div className="h-8">
                      Custom Android Apps
                    </div>
                    <p className='text-justify'>
                      Hire an Android developer from Askgalore to get a best-in-class custom Android app designed and developed based on your specific requirements using the latest Android SDKs.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card-three">
                    <FaGooglePlay size={50} className='mt-2 text-dark' />
                    <div className="h-8">
                      Enterprise Android Apps
                    </div>
                    <p className='text-justify'>
                      We develop secure and flexible mobility platforms for enterprises with a combination of devices, apps, and management services.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card-three">
                    <SiW3C size={50} className='mt-2 text-warning' />
                    <div className="h-8">
                      Web-Based Apps
                    </div>
                    <p className='text-justify'>
                      Our skilled Android developers use the latest tools and Kotlin as their preferred coding language to develop web-based apps that meet your requirements.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card-three">
                    <IoWatch size={50} className='mt-2 text-danger' />
                    <div className="h-8">
                      Wearable App Development
                    </div>
                    <p className='text-justify'>
                      With the increasing demand for wearable devices like Apple Watch, Google Glass, Android Wear, and HoloLens, our team of developers can develop wearable apps to meet your needs.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card-three">
                    <IoGameControllerOutline size={50} className='mt-2 text-primary' />
                    <div className="h-8">
                      Android Game Development
                    </div>
                    <p className='text-justify'>
                      Askgalore offers top Android game developers the to develop high-quality games that have a 38% share of all downloads and 86% of Google Play’s revenues. Android App Porting We offer extensive app porting services for iPhone, Android, iPad, and Windows phones. Our dedicated team can provide you with the necessary web and app porting support you need.
                    </p>
                  </div>
                </div>
                {/* <div className="col-lg-6">
                  <div className="card-three">
                    <GrMultiple size={50} className='mt-2 text-success' />
                    <div className="h-8">
                      MEAN Stack Application Development
                    </div>
                    <p className='text-justify'>
                      We use MongoDB and NodeJS backend technologies to create high-performance mobile apps, including hybrid apps made with Java, .NET, and PHP. Our MEAN stack developers are passionate about building scalable applications for all industry verticals.
                    </p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-grlite'>
        <div className="container ptb-50">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="">
                <h1 className='text-center py-2 theme-red'>Why Hire Our Skilled Android App Developers for Your Next Project</h1>
                {/* <p className='lead'>At AskGalore, we use modern technology and state-of-the-art infrastructure to provide efficient and reliable AWS DevOps solutions. Our team of AWS DevOps Engineers is dedicated to optimizing your operations and boosting productivity with cutting-edge technologies.</p> */}
                <ul className='lead'>
                  <li>Adept at programming languages like Java and Kotlin for native Android app development, and Flutter, React Native, and Ionic for cross-platform app development</li>
                  <li>Experienced in developing a variety of bespoke Android app projects, including game app development, embedded app development, on-demand applications, and more.</li>
                  <li>Skilled in experimenting with Android UI widgets to create visually appealing apps</li>
                  <li>Stay up-to-date with ever-changing technology-specific methodologies to build evolving Android apps</li>
                  <li>Develop apps for all Android OS-supported devices, including smartphones, tablets, wearables, and smart TVs</li>
                  <li>Experienced in developing a variety of bespoke Android app projects, including game app development, embedded app development, on-demand applications, and more.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-softblack'>
        <div className="container ptb-50">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="text-light">
                <h2 className='text-center theme-red'>Get in Touch with Our Expert Android App Developers Today!</h2>
                <p className='lead'>
                  Looking for skilled and dedicated Android app developers to bring your app idea to life? Look no further! Our team of experts is ready to discuss your Android app development requirements and turn your vision into a reality.
                  <br></br><br></br>
                  With years of experience in developing highly customized Android applications, our developers are proficient in programming languages like Java and Kotlin for native app development, as well as Flutter, React Native, and Ionic for cross-platform app development. We can develop apps for all Android OS-supported devices, including smartphones, tablets, wearables, and smart TVs.
                  <br></br><br></br>
                  We value open communication and collaboration with our clients to ensure that the end product meets their needs and expectations. So, if you’re ready to create a successful Android app that fulfills your business requirements, get in touch with us today. Contact us to schedule a discussion about your project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* <section>
        <div className="container ptb-50">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="row justify-content-center">
                <div className="col-lg-6">
                  <Image src={img0} width={500} />
                </div>
                <div className="col-lg-6">
                  <h2 className='text-center theme-red'>Recruitment process</h2>
                  <p className='lead'>Hire Dedicated AWS DevOps Developers from Askgalore and enjoy our streamlined recruitment process. We gather your requirements and carefully select the best candidates to match your needs. Our team conducts technical interviews to ensure we provide you with highly skilled professionals who are dedicated to meeting your business goals. We take every step seriously to ensure the best resource augmentation services, so you can focus on achieving your objectives without any worries.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className='bg-grlite ptb-50'>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h2 className='text-center theme-red'>Revolutionize Your App Development with Flutter Developers</h2>
              <ul className='lead '>
                Collaborate with Flutter Developers to maximize your development resources and achieve project success. Our services offer the following benefits:
                <li>The best use of Flutter features and functions</li>
                <li>Exceptional user experiences</li>
                <li>Confidentiality of your data and adherence to NDAs</li>
                <li>Innovative project deliverables</li>
                <li>A satisfaction guarantee</li>
                <li>Customizations tailored to your business needs</li>
                <li>An iterative approach to meet your requirements and feedback</li>
              </ul>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section>
        <div className="bg-buzz ptb-50">
          <h1 className="text-white text-center">Why Hire MEAN Stack Developers from Askgalore</h1>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <p className='lead text-white'>
                  Hire MEAN Stack Developer from our team of highly experienced professionals who know how to utilize cutting-edge technology to deliver innovative solutions. Here are some other reasons why we are the best choice for your MEAN stack development needs:</p>
                <div className="mt-3 row g-2">
                  <div className="col-lg-4 ">
                    <div className="card-one mx-auto text-center">
                      <TbReportSearch size={70} />
                      <h3 className="mt-3">Day-to-Day Reporting</h3>
                      <p className="mt-3">
                        Our developers provide daily reports to ensure flawless communication with our clients.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 ">
                    <div className="card-one mx-auto text-center">
                      <RiInputMethodLine size={70} />
                      <h3 className="mt-3">Agile Methodology</h3>
                      <p className="mt-3">
                        We follow the Agile methodology to ensure seamless delivery, deployment, testing, and iterative development.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 ">
                    <div className="card-one mx-auto text-center">
                      <FaDollarSign size={70} />
                      <h3 className="mt-3">Cost-Effective Solutions</h3>
                      <p className="mt-3">
                        We provide cost-effective solutions without compromising the quality of our work.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 ">
                    <div className="card-one mx-auto text-center">
                      <FaFileCode size={70} />
                      <h3 className="mt-3">Source Code Ownership</h3>
                      <p className="mt-3">
                        Our policy ensures that our clients own the source code of the project from the beginning of our engagement.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 ">
                    <div className="card-one mx-auto text-center">
                      <FaBusinessTime size={70} />
                      <h3 className="mt-3">On-Time Delivery</h3>
                      <p className="mt-3">
                        Our proficiency in the Agile methodology helps us maintain an impressive track record of on-time delivery.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 ">
                    <div className="card-one mx-auto text-center">
                      <FaUsers size={70} />
                      <h3 className="mt-3">Vast Experience</h3>
                      <p className="mt-3">
                        We have vast experience in delivering MEAN stack development solutions of the highest quality to our clients.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className='bg-softblack'>
        <div className="container ptb-50">
          <div className="row justify-content-center">
            <div className="col-lg-10 p-4">
              <div className="text-center text-light">
                <h1 className='theme-red'>Hire Skilled Flutter Developers from Askgalore and Elevate Your Mobile App Development Project</h1>
                <p className="mt-3 lead text-justify">
                  Extend your team with top-class talent by hiring Flutter Developers from Askgalore! Whether you’re a start-up, scale-up, or established organization, our experienced and skilled Flutter Developers can help you create highly interactive, scalable, and well-structured cross-platform mobile and web apps.                                                                                                  With our agile expertise in writing Dart code and extensive experience in utilizing Flutter widgets to enhance the compatibility of iOS and Android apps, hiring our Flutter Developers will elevate your Flutter app development project. Additionally, our team includes QA specialists, UI/UX designers, and professionals with in-depth knowledge of Dart language to provide comprehensive support for your project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <Outsourcing />

      <FormOutsource />
    </>
  )
}