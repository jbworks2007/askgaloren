import React from "react";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLayerGroup } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";
import { FaPager } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
// import ServicesFooter from "../services-footer/ServicesFooter";
import { AiOutlineCode } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { CiMobile3 } from "react-icons/ci";
import { BiSearchAlt } from "react-icons/bi";
import { ImStack } from "react-icons/im";
import { BsBagCheck } from "react-icons/bs";
import ContactForm from "@/components/Misc/ContactForm";

export default function index() {
  return (
    <>
      <div className="banner-area-two">
        <div className="container p-5 mt-5">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="">
                <div className="banner-item">
                  <div className="banner-item-img">
                    <div className="banner-shape">
                      <div className="shape-in1">
                        <h1>
                          <strong>SEARCH ENGINE OPTIMIZATION SERVICE</strong>
                        </h1>
                        <br />
                        <p>
                          Unlock the power of SEO and witness your website soar
                          to the top of the rankings. Our expert SEO services
                          will help you attract more traffic, generate more
                          leads, and grow your business faster than you ever
                          thought possible. We are one of the top SEO companies
                          that provide affordable SEO services that grow your
                          business.
                        </p>
                        <br />
                        <span className="row">
                          <span className="col-lg-6 ">
                            <a href="contact-us" class= "no-underline">
                              <button type="button" class="bx7 container ">
                                GET FREE QUOTE
                              </button>
                            </a>
                          </span>
                          <span className="col-lg-6  ">
                            <a href="seo-service-packages" class= "no-underline">
                            <button type="button" class="bx8 ">
                              Our Packages
                            </button>
                            </a>
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="">
                <div className="banner-item">
                  <div className="banner-item-img">
                    <div className="banner-shape">
                      <div className="shape-in1">
                        <img
                          width="100%"
                          src="./seo-min-1-min.png"
                          alt="Images"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <h1 className="text-center mb-4">
          <strong>SEO SERVICES WE PROVIDE</strong>
        </h1>
        <div className="container-fluid ptb-50 bg-royal">
          <div className="container">
            <div className="row mt-5">
              <div className="col-lg-3 text-center">
                <FaRocket className="poppy-blue" size={50} />
                <h5 className="mt-4 text-white">TECHNICAL SEO</h5>
                <p className="mt-3 ice-gray">
                  Our technical SEO service ensures that your website meets the
                  technical requirements of modern search engines for organic
                  rankings. That includes crawling, indexing, rendering, and
                  website architecture.
                </p>
              </div>
              <div className="col-lg-3 text-center">
                <FaPager className="poppy-blue" size={50} />
                <h5 className="mt-4 text-white">ON-PAGE OPTIMIZATION</h5>
                <p className="mt-3 ice-gray">
                  Our on-page optimization service refers to optimizing directly
                  within the website to improve its position in the search
                  rankings.
                </p>
              </div>
              <div className="col-lg-3 text-center">
                <FaLink className="poppy-blue" size={50} />
                <h5 className="mt-4 text-white">OFF-PAGE OPTIMIZATION</h5>
                <p className="mt-3 ice-gray">
                  Our Off-page SEO service covers all SEO tactics that take
                  place outside of your own website. It helps in brand building
                  & part to getting a ranking on the search engine results.
                </p>
              </div>
              <div className="col-lg-3 text-center">
                <FaLayerGroup className="poppy-blue" size={50} />
                <h5 className="mt-4 text-white">CONTENT MARKETING</h5>
                <p className="mt-3 ice-gray">
                  We provide a content marketing service that is a strategic
                  approach focused on creating and distributing high-quality,
                  valuable, relevant, and consistent content. That gives
                  profitable customer action.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container p-5">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="">
                <div className="banner-item">
                  <div className="banner-item-img">
                    <div className="banner-shape">
                      <div className="shape-in1">
                        <p className="text-center">
                          <b>
                            AskGalore Digital - The best search engine
                            optimization company
                          </b>
                        </p>
                        <h2>Why are Organic Search Results so Important?</h2>
                        <br />
                        <p>
                          Organic search increases the traffic on your website
                          through optimum usage of search engines, improved
                          performance, and peak reach.
                        </p>
                        <p>
                          Organic Search results are important because they-
                        </p>
                        <ul>
                          <li>
                            <p>
                              <b>
                                Brings in more customers through organic search
                              </b>
                            </p>
                          </li>
                          <li>
                            <p>
                              <b>
                                Creates a trustworthy web experience for
                                customers
                              </b>
                            </p>
                          </li>
                          <li>
                            <p>
                              <b>Let you stay ahead of the competition</b>
                            </p>
                          </li>
                          <li>
                            <p>
                              <b>Improves brand awareness</b>
                            </p>
                          </li>
                          <li>
                            <p>
                              <b>Are trackable</b>
                            </p>
                          </li>
                          <li>
                            <p>
                              <b>Allows for quality traffic</b>
                            </p>
                          </li>
                          <li>
                            <p>
                              <b>Benefits other marketing initiatives</b>
                            </p>
                          </li>
                          <li>
                            <p>
                              <b>Promotes brand awareness</b>
                            </p>
                          </li>
                          <li>
                            <p>
                              <b>
                                Help you build relationships with other websites
                              </b>
                            </p>
                          </li>
                        </ul>
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="">
                <div className="banner-item">
                  <div className="banner-item-img">
                    <div className="banner-shape">
                      <div className="shape-in1">
                        <div class=" p-4 text-center">
                          <img width="100%" src="./PngItem.png" />
                          <br />
                          <br />

                          <h5>Fully Optimized SEO Friendly Website</h5>
                          <br />

                          <p class="line2">
                            We provide optimization services for websites. SEO
                            Friendly Website That Ranks Well In Google
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid ptb-50 col">
        <div className="col">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h1 className="text-center">
                <b>Why choose AskGalore as your SEO Partner?</b>
              </h1>
              <p>
                As a business, you want to drive as much traffic to your site as
                possible from the search engines like Google, Bing, yahoo. Etc.
                Those who help you achieve your targets are the best Indian SEO
                companies. These digital marketing agencies are search engine
                marketers who specialize in SEO or search engine marketing
                services. Askgalore Digital is one of the top SEO companies. We
                can make a huge difference in driving traffic to your website
                and sale which is why you should choose Askgalore from those top
                digital marketing firms.
              </p>
              <p>
                Now, confusion ought to arise as to what is an SEO service, what
                does it entail, and how can you measure if it is working? Well,
                let’s have an in-depth tour of what SEO is and what an SEO
                Agency does.
              </p>
              <p>
                An SEO agency helps businesses improve their visibility and
                rankings in search engine results pages (SERPs) through various
                strategies and techniques. Here are some of the key
                responsibilities and services that an SEO agency typically
                provides:
              </p>
              <ol>
                <li>
                  <p>
                    <b>Keyword Research:</b>SEO agencies research to identify
                    the most relevant and valuable keywords and phrases for your
                    business, which will be used to optimize your website and
                    content.{" "}
                  </p>
                </li>
                <li>
                  <p>
                    <b>On-page Optimization:</b>This involves optimizing various
                    on-page elements such as title tags, meta descriptions,
                    headings, and image alt text to ensure that your website is
                    structured and organized in a way that search engines can
                    easily understand and index.
                  </p>
                </li>
                <li>
                  <p>
                    <b>Technical SEO:</b>This includes ensuring that your
                    website is technically sound and optimized for search engine
                    crawlers, including improving website speed and
                    mobile-friendliness and fixing technical issues preventing
                    your site from ranking.
                  </p>
                </li>
                <li>
                  <p>
                    <b>Link building: </b>This involves earning high-quality,
                    relevant links from other websites to your site to improve
                    its authority and trustworthiness in the eyes of search
                    engines.
                  </p>
                </li>
                <li>
                  <p>
                    <b>Content Creation and Optimization:</b>SEO agencies may
                    create or optimize website content, including blog posts,
                    articles, product descriptions, and other types of content,
                    to align with your target keywords and attract more traffic
                    to your website.
                  </p>
                </li>
                <li>
                  <p>
                    <b>Reporting and Analysis: </b>SEO agencies provide regular
                    reports on your website’s performance and progress,
                    including rankings, traffic, and conversion data. This
                    information is used to make data-driven decisions and
                    optimize your SEO strategy for better results.
                  </p>
                </li>
              </ol>
              <p>
                Overall, the role of an SEO agency is to help businesses achieve
                their marketing goals by improving their online visibility,
                driving more traffic to their website, and generating more leads
                and sales through search engine optimization.
              </p>

              <h1 className="text-center">
                <b>
                  Why should you Hire only the best Digital Marketing Company?
                </b>
              </h1>
              <p>
                If your business requirements or your plans fall under any of
                the below-mentioned areas, you must immediately take help from
                an SEO digital marketing agency like AskGalore for affordable
                SEO services. If you want to:
              </p>
              <ol>
                <li>Grow your business</li>
                <li>
                  You currently don’t know about your website is contributing to
                  your business
                </li>
                <li>
                  If you want more people to call you rather than your
                  competitors
                </li>
                <li>Want more leads</li>
                <li>Want more sales</li>
                <li>Differentiate yourself from your competitors</li>
                <li>Ensure the company’s bright future </li>
                <li>Outrank your competitors in the search results</li>
              </ol>
              <p>
                SEO services agency helps you in growing your business as they
                know the right methods of doing digital marketing for your
                business. Relying on the best SEO agency is always a good idea
                and an SEO agency like Askgalore offers you affordable SEO
                services which ensure that your website will have traffic and
                lead conversions.{" "}
              </p>
              <div className="text-center">
                <h1>
                  {" "}
                  <b>
                    FINALLY: How Do you Find the Best SEO Agency for your
                    Business?
                  </b>
                </h1>
              </div>
              <ul>
                <li>
                  <p>
                    Well, while that is a very good question it is by far the
                    most important as well. An SEO partnership is a long-term
                    association, and you need to be sure of who you are trusting
                    for your brand and business.
                  </p>
                  <p>
                    Though all top SEO companies or content marketing firms
                    promise better ranking, more traffic, and more leads. But do
                    they really bring the expected result?
                  </p>
                  <p>
                    Well, it is wise to avoid any SEO agency that promises you
                    anything like the following :
                  </p>
                </li>
                <li>
                  Overnight rankings because this never happens overnight and is
                  a constant-continuous process.
                </li>
                <li>Doubled traffic</li>
                <li>Search engine submissions</li>
                <li>X amount of backlinks</li>
                <li>ROI projections of any sort</li>
              </ul>
              <p>
                You will find a lot of SEO services agency making such promises
                but you will regret your choice later when they will fail to
                fetch your results. We at AskGalore Digital, don’t make any such
                promises and only focus on bringing real ale to your business.
              </p>
              <p>
                <b>
                  You should avoid any SIGNS OF BLACK_HAT Search Engine
                  Optimization{" "}
                </b>
              </p>
              <p>
                Always consider it a red flag when an SEO expert makes certain
                claims or promises about particular results in a particular
                committed time. These kinds of SEOs give our industry a bad name
                and are get defames for what we call “churn and burn” practices.{" "}
              </p>
              <p>
                <b>What to Ask Any SEO Service Agency Before Hiring Them?</b>
              </p>
              <p>
                Before you hire anyone for an SEO services agency, make sure you
                look at their previous works with other brands. It is again a
                red flag if numerous people have had issues with a vendor. Ask
                them up-front about reviews and case studies that prove their
                success with other brands. You can also additionally ask the
                following questions to the SEO agency you are going to work
                with-{" "}
              </p>
              <ul>
                <li>
                  <p>
                    <b>First of all, what is the current contract?</b>
                  </p>
                  <p>
                    Re-read the contract. What does it include? When does it
                    end? Etc. If you have any doubts ask and clear them out.
                  </p>
                </li>
                <li>
                  <p>
                    <b>What’s the process of cancellation?</b>
                  </p>
                  <p>
                    Sometimes you won’t gain access to your website or you’re
                    tied into a contract you didn’t know had an end date. To
                    avoid any such instances, clarify the cancellation clause as
                    well from that SEO agency.{" "}
                  </p>
                </li>
                <li>
                  <p>
                    <b>How and how often will we communicate?</b>
                  </p>
                  <p>
                    Set these expectations early. Otherwise, you will be setting
                    yourself up for disappointment.
                  </p>
                </li>
                <li>
                  <p>
                    <b>
                      Would you have full access to your site and
                      Analytics/Adwords accounts?
                    </b>
                  </p>
                  <p>
                    It’s helpful to know who will have the FTP access, CMS
                    access, Analytics access, and Adwords access.
                  </p>
                </li>
                <li>
                  <p>
                    <b>Will you own your website?</b>
                  </p>
                  <p>
                    Many SEO companies in India have SEO services with website
                    ownership clauses built into contracts. For Example, maybe
                    some SEO Agency will build the website for “free” but if you
                    leave your contract early you will lose all rights to it. We
                    don’t do any such things of course. When you buy a website
                    from us, it’s yours from day one.
                  </p>
                </li>
                <li>
                  <p>
                    <b>Most noteworthy, do they provide guarantees?</b>
                  </p>
                  <p>
                    So, no good SEO agency provides guarantees. Because each
                    website is different, it’s impossible to guarantee results.
                    If a company does, you need to back away ASAP!
                  </p>
                </li>
                <li>
                  <p>
                    <b>Have they done work for companies similar to yours?</b>
                  </p>
                  <p>
                    This is crucial. Different industries have different nuances
                    and SEO requirements, which means you need to find an SEO
                    agency that knows your industry. Since AskGalore Digital is
                    one of the top SEO agencies you will not have any such
                    difficulties.
                  </p>
                </li>
                <li>
                  <p>
                    <b>
                      What contracts and options are available? How to determine
                      the right budget?
                    </b>
                  </p>
                  <p>
                    Well, it depends on your goals, competitive landscape, and
                    internal capabilities, one size doesn’t fit all.
                  </p>
                </li>
                <li>
                  <p>
                    <b>Finally, what are the fees and payment options?</b>
                  </p>
                  <p>
                    Be sure you know every single aspect of how you are going to
                    pay for and what SEO services cost you will be paying.
                    Otherwise, you might have your work withheld because you
                    “didn’t pay”. The perfect solution to avoid any such
                    situation is to hire the best Indian SEO agency- AskGalore
                    Digital. We are an SEO agency that provides you the
                    affordable SEO services.{" "}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h1 className="text-center mt-5 mb-4">
          Major Features of our Search Engine Optimization
          <br />
          Service
        </h1>
        <div className="row">
          <div className="col-lg-4">
            <div class=" p-2 text-center">
              <CiMobile3 className="text-success" size={20} />
              Fully Customize Title Tags
            </div>
          </div>
          <div className="col-lg-4">
            <div class=" p-2 text-center">
              <CiMobile3 className="text-success" size={20} />
              Mobile SEO customization
            </div>
          </div>

          <div className="col-lg-4">
            <div class=" p-2 text-center">
              <CiMobile3 className="text-success" size={20} />
              Schema Implementation
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div class=" p-2 text-center">
              <CiMobile3 className="text-success" size={20} />
              Proper Meta Descriptions
            </div>
          </div>
          <div className="col-lg-4">
            <div class=" p-2 text-center">
              <CiMobile3 className="text-success" size={20} />
              On Page Optimization
            </div>
          </div>
          <div className="col-lg-4">
            <div class=" p-2 text-center">
              <CiMobile3 className="text-success" size={20} />
              Content Optimization
            </div>
          </div>
          <div className="col-lg-4">
            <div class=" p-2 text-center">
              <CiMobile3 className="text-success" size={20} />
              Optimize Header Tags
            </div>
          </div>
          <div className="col-lg-4">
            <div class=" p-2 text-center">
              <CiMobile3 className="text-success" size={20} />
              Technical Optimization
            </div>
          </div>
          <div className="col-lg-4">
            <div class=" p-2 text-center">
              <CiMobile3 className="text-success" size={20} />
              Off-Page Optimization
            </div>
          </div>
          <div className="col-lg-4">
            <div class=" p-2 text-center">
              <CiMobile3 className="text-success" size={20} />
              Well-optimized URL Structure
            </div>
          </div>
          <div className="col-lg-4">
            <div class=" p-2 text-center">
              <CiMobile3 className="text-success" size={20} />
              User Intent Based Content
            </div>
          </div>
          <div className="col-lg-4">
            <div class=" p-2 text-center">
              <CiMobile3 className="text-success" size={20} />
              Analysis Tools Implementation
            </div>
          </div>
          <div className="col-lg-4">
            <div class=" p-2 text-center">
              <CiMobile3 className="text-success" size={20} />
              Simple 301 Redirects
            </div>
          </div>
          <div className="col-lg-4">
            <div class=" p-2 text-center">
              <CiMobile3 className="text-success" size={20} />
              Analytics & Reporting
            </div>
          </div>
          <div className="col-lg-4">
            <div class=" p-2 text-center">
              <CiMobile3 className="text-success" size={20} />
              All Pages Proper Indexing
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5 con-box-clr">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="">
              <div className="banner-item">
                <div className="banner-item-img">
                  <div className="banner-shape">
                    <div className="shape-in1">
                      <h1>
                        <strong>Connect with us</strong>
                      </h1>
                      <br />
                      <p className="g">Don't wait! Let's get started!</p>
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 ">
            <div className="">
              <div className="banner-item">
                <div className="banner-item-img">
                  <div className="banner-shape">
                    <div className="shape-in1">
                      <ContactForm />
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
