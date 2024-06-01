import React from "react";
import { GiMoebiusTriangle } from "react-icons/gi";
import ServicesFooter from "@/components/services-footer/ServicesFooter";
import { MdTexture } from "react-icons/md";
import { FaMailBulk } from "react-icons/fa";
import { FaFlagCheckered, FaPeopleArrows, FaCheckCircle } from "react-icons/fa";
import { FaFlag, FaSearchLocation, FaChartPie, FaEdit, FaChartBar } from "react-icons/fa";
import { FaReddit, FaYoutube, FaDiscord } from "react-icons/fa";
import {
  FaLongArrowAltRight,
  FaSearchengin,
  FaFacebookF,
  FaGoogle,
  FaPen,
  FaEnvelope,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { RiAdvertisementFill } from "react-icons/ri";

export default function index() {
  return (
    <>
      <div className="banner-area-two">
        <div className="container ptb-50">
          <div className="row px-3 align-items-center">
            <div className="col-lg-6">
              <div className="banner-item-slider owl-theme">
                <div className="banner-item">
                  <div className="banner-item-img">
                    <div className="banner-shape">
                      <div className="shape-in1">
                        <h1>
                          <strong> NFT MARKETING COMPANY</strong>
                        </h1>
                        <br />
                        <p>
                          Looking for the best NFT marketing service company
                          (NFT Marketing Agency) is a challenging task given the
                          recency of the industry and ever changing NFT
                          landscape. AskGalore is one of the top NFT marketing
                          agency focusing on custom built NFT marketing
                          strategies to suit the market trends and the target
                          audience. We are a team of NFT Marketers with a rich
                          experience of working across all NFT marketing
                          channels like Discord, Twitter, Instagram, Facebook,
                          YouTube, Reddit and others.
                        </p>
                        <p>
                          Looking for the best NFT marketing service company
                          (NFT Marketing Agency) is a challenging task given the
                          recency of the industry and ever changing NFT
                          landscape. AskGalore is one of the top NFT marketing
                          agency focusing on custom built NFT marketing
                          strategies to suit the market trends and the target
                          audience. We are a team of NFT Marketers with a rich
                          experience of working across all NFT marketing
                          channels like Discord, Twitter, Instagram, Facebook,
                          YouTube, Reddit and others.
                        </p>

                         <a href="contact-us">
                        <button type="button" class="button button1">
                          Let&apos;s Talk <FaLongArrowAltRight />
                        </button>
                         </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="banner-item-slider owl-theme">
                <div className="banner-item">
                  <div className="banner-item-img">
                    <div className="banner-shape">
                      <div className="shape-in1">
                        <img
                          width="100%"
                          src="./images/NFT-Ho.webp"
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
      </div>

      <div className="container-fluid ptb-50 bg-royal ">
        <div className="container">
          <div className="row ">
            <h1 className="text-center text-white mb-5">
              {" "}
              <strong> SERVICES WE PROVIDE FOR NFT MARKETING</strong>
              &nbsp;&nbsp;&nbsp;&nbsp;
            </h1>

            <div className="col-lg-4 text-center">
              <FaSearchengin className="poppy-blue" size={50} />
              <h5 className="mt-4 text-white">SEARCH ENGINE OPTIMIZATION</h5>
              <p className="mt-3 ice-gray">
                We first do the keyword research and make your website rank on
                the most competitive keywords. Our SEO experts work to rank your
                website within a week as search is the primary step that users
                navigate the web.
              </p>
            </div>
            <div className="col-lg-4 text-center">
              <FaFacebookF className="poppy-blue" size={50} />
              <h5 className="mt-4 text-white">SOCIAL MEDIA MARKETING</h5>
              <p className="mt-3 ice-gray">
                We use social media platforms like Facebook, Instagram, Twitter,
                Linkedin, Pinterest, Reddit, Discord and Youtube for your NFT
                marketing. We run social media campaigns to market your
                business.
              </p>
            </div>
            <div className="col-lg-4 text-center">
              <FaGoogle className="poppy-blue" size={50} />
              <h5 className="mt-4 text-white">SEARCH ENGINE MARKETING</h5>
              <p className="mt-3 ice-gray">
                We run Google Ad Campaigns based on your demographics to bring
                the leads and conversions. We use a strategic NFT marketing
                strategy to increase the visibility of your website in SERPs.
              </p>
            </div>
            <div className="col-lg-4 text-center mt-5">
              <FaPen className="poppy-blue" size={50} />
              <h5 className="mt-4 text-white">CONTENT MARKETING</h5>
              <p className="mt-3 ice-gray">
                When we ask &apos;How to Market NFTs?&apos;, one of the core
                activities is Content Marketing which involves content design
                and posting on websites, blogs, social media etc. It focuses on
                creating and distributing relevant content to the target
                audience.
              </p>
            </div>
            <div className="col-lg-4 text-center mt-5">
              <FaMailBulk className="poppy-blue" size={50} />
              <h5 className="mt-4 text-white">EMAIL MARKETING</h5>
              <p className="mt-3 ice-gray">
                Email Marketing is not dead! For existing customers, it is an
                invaluable marketing channel for re-targetting and re-marketing.
                Email can be highly customized and when used smartly, delivers
                the best campaign ROI.
              </p>
            </div>
            <div className="col-lg-4 text-center mt-5">
              <RiAdvertisementFill className="poppy-blue" size={50} />
              <h5 className="mt-4 text-white">PAY PER CLICK MARKETING</h5>
              <p className="mt-3 ice-gray">
                Pay Per Click Marketing earns you quality leads. Most commonly,
                it is used in Search Engine Result Pages (SERPs) like Google,
                Bing, Yahoo, and other PPC supported platforms which drive great
                results.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container ptb-50">
        <h1 className="text-danger text-center">Strategies that help to Get You Growing...</h1>
        <div className="row px-3 g-3">
          <div className="col-lg-4">
            <div className="text-center gr-passion py-5 px-5 h-adjust">
              <FaFlagCheckered className="text-white mb-3" size={50} />
              <h1 className="text-white">Effective</h1>
              <h4 className="text-white">Brand Communication</h4>
              <p className="text-white">
                Brand value establishment is the goal where we popular your brand in market that results hike in sales conversions.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="text-center gr-passion py-5 px-5 h-adjust">
              <FaPeopleArrows className="text-white mb-3" size={50} />
              <h1 className="text-white">Targeting</h1>
              <h4 className="text-white">Right Audience</h4>
              <p className="text-white">
                We target exact audience who required your product & services that results high ratio of conversion.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="text-center gr-passion py-5 px-5 h-adjust">
              <FaCheckCircle className="text-white mb-3" size={50} />
              <h1 className="text-white">Reliable</h1>
              <h4 className="text-white">Conversion Strategies</h4>
              <p className="text-white">
                All CTA actions properly defined and conversion tracking is always on to analysis of past results as well as gives correct direction for future.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-buzz ptb-50">
        <h1 className="text-white text-center heading-styles1">OUR STRATEGIES FOR <br></br>THE CAMPAIGNS</h1>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="mt-5 row g-3">
                <div className="col-lg-4 ">
                  <div className="card-one mx-auto text-center">
                    <FaFlag size={50} />
                    <h4 className="mt-3"><b>SWOT</b></h4>
                    <h4 className="mt-3"><b>ANALYSIS</b></h4>
                    <p className="mt-3">
                      Swot Analysis involves the analysis of the Strength, Weaknesses, Opportunities and Threats for your company, product, or service.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 ">
                  <div className="card-one mx-auto text-center">
                    <FaPeopleArrows size={50} />
                    <h4 className="mt-3"><b>AUDIENCE</b></h4>
                    <h4 className="mt-3"><b>RESEARCH</b></h4>
                    <p className="mt-3">
                      We carefully target audience, we further find your target audience and create strategies to hit them directly.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 ">
                  <div className="card-one mx-auto text-center">
                    <FaSearchLocation size={50} />
                    <h4 className="mt-3"><b>LOCATION</b></h4>
                    <h4 className="mt-3"><b>ANALYSIS</b></h4>
                    <p className="mt-3">
                      Target Location Analysis involves the locations to target all over the globe. It depends according to the clients’ requirements, and the market analysis.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 ">
                  <div className="card-one mx-auto text-center">
                    <FaChartPie size={50} />
                    <h4 className="mt-3"><b>MARKETING</b></h4>
                    <h4 className="mt-3"><b>PLATFORMS</b></h4>
                    <p className="mt-3">
                      After doing all the analysis, we step forward to choosing the right platform for your NFT Marketing according to your target audience.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 ">
                  <div className="card-one mx-auto text-center">
                    <FaEdit size={50} />
                    <h4 className="mt-3"><b>BUDGET</b></h4>
                    <h4 className="mt-3"><b>ALLOCATION</b></h4>
                    <p className="mt-3">
                      The final step is to allocate the budget for your NFT marketing campaign based on platform analysis & market research.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 ">
                  <div className="card-one mx-auto text-center">
                    <FaChartBar size={50} />
                    <h4 className="mt-3"><b>Measuring</b></h4>
                    <h4 className="mt-3"><b>Results</b></h4>
                    <p className="mt-3">
                      Measuring your NFTs marketing success. We always optimizing it to get better results & quality leads in the form of sales.
                    </p>
                  </div>
                </div>



              </div>

            </div>
          </div>
        </div>



      </div>


      <div className="container">
        <div className="row">
          <h1 className="text-center mt-4 mb-4 h-colr">HOW TO MARKET NFTS?</h1>
          <p className="p-size">
            NFT marketing service by NFT Marketing Company Askgalore Digital,
            helps you hit the target and get the desired results in a
            predictable fashion. With the growing popularity of NFTs and NFT
            Marketplaces, we deliver customized NFT marketing strategies for
            getting the results.{" "}
          </p>
          <p className="p-size">
            If you are also thinking about how to market NFTs, you are at the
            right place. Askgalore NFT Marketing Company works with a structured
            approach to get you get the best results of your advertising
            campaigns. We create and design the strategies based on the market
            analysis, product analysis, NFT pricing strategy, target locations
            and audience analysis and finally find the relevant channels
            fulfilling the demands of the clients and according to the target
            market.
          </p>
          <p className="p-size">
            There are two segments in marketing when we talk about NFTs. One is
            NFT marketing that and the other is the NFT Marketplace marketing.{" "}
          </p>
          <p className="p-size">
            We provide NFT promotion services for both NFT Marketing and NFT
            Marketplaces. We also are an NFT marketplace marketing agency that
            helps you promote your NFTs as well as NFT marketplaces.
          </p>
        </div>
      </div>

      <div className="row bx-clr">
        <div className="col-lg-9">
          <h1 className="text-center heading-styles1 text-white mt-3 mb-4">
            Most Popular Channels-
            <br />
            NFTs Marketing
          </h1>
        </div>
        <div className="col-lg-3 mt-2 mb-2 mr-4">
          <img className=""
            src="/imgpaid.jpg"
            alt=""
            width="100%"
          // height="80%"

          />
        </div>
      </div>

      <div className="container-fluid ptb-50  ">
        <div className="container">
          <div className="row ">
            <div className="col-lg-4 text-center">
              <a href="https://www.askgalore.com/discord-marketing-company/" target="_blank"> <FaDiscord className="dic" size={50} /></a>
              <h5 className="mt-4 "><a style={{ textDecoration: "none", color: "#000" }} href="https://www.askgalore.com/discord-marketing-company/" target="_blank">Discord Marketing for NFTs</a></h5>
              <p className="mt-3 ">
                The growing popularity of NFT requires new and strong Services in marketing. Through effective Discord Marketing Services, We provide Discord marketing, Server Creation, Community growth & popular groups connectivity with quality leads traffic.
              </p>
            </div>
            <div className="col-lg-4 text-center">
              <a href="https://www.askgalore.com/reddit-marketing-company/" target="_blank"> <FaReddit className="dic" size={50} /></a>
              <h5 className="mt-4 ">
                <a style={{ textDecoration: "none", color: "#000" }} href="https://www.askgalore.com/reddit-marketing-company/" target="_blank">Publish News of NFTs on Reddit</a></h5>
              <p className="mt-3 ">
                Reddit is popular channel to provide a customized aggregator of all the latest news and entertainment about the topics that interest you the most. NFTs & Crypto Projects Reddit provides great options to announce your valuable NFTs & get buyers traffic.
              </p>
            </div>
            <div className="col-lg-4 text-center">
              <FaYoutube className="dic" size={50} />
              <h5 className="mt-4 ">YouTube Video Marketing</h5>
              <p className="mt-3 ">
                96% of consumers increased their online video consumption.
                At present NFT market trend YouTube is too popular to get information and latest update on popular NFTs and users engaged and redirect to buy NFTs from popular NFT related Channels
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <h1 className="text-center mt-4 mb-4 h-colr">Difference between NFT marketing and NFT<br /> Marketplace marketing</h1>
          <h4>NFT MARKETING</h4>
          <p className="p-size mt-3">
            NFT Marketing involves marketing the NFTs (Non-fungible tokens) like some digital artwork, video games, animation, music, real estate sports, memes, etc. In simple terms, it is more like marketing a product. In today’s world of NFTs, companies are creating and launching their collections and trading them on different platforms. Trading NFTs is one thing and taking it to the right audience is other where NFT marketing plays an important role. Digital Marketing of the NFTs is used by the firms to market the NFTs.
            NFT Marketing company Askgalore Digital designs strategic marketing campaigns based on deep market research. It helps to create the right strategies to target the right audience through the right channels to get the desired results. Being the sellers of NFTs, it becomes important to know how to market NFTs. We as an NFT marketing agency helps you out to run your campaign in an organized way to grow your business.
          </p>
          <h4 className="mt-5">NFT MARKETPLACE MARKETING</h4>
          <p className="p-size mt-3">
            NFT marketplaces are used by traders to trade their Non Fungible Tokens. It is more like an eCommerce platform where companies sell their products and the buyers buy them. The accessibility of the marketplaces is the reason why people admire them. NFT Marketplace marketing helps businesses to build connectivity between sellers and buyers. If you are a company that provides marketplace services to trade the NFTs and want to aware your target audience to use your platform for trading, you need to promote your NFT marketplace. Since many marketplaces emerging, it becomes important to stand out from the crowd and become the market leader. NFT marketplace marketing agency Askgalore provides the best NFT marketplace Marketing services that enable the firms to gain credibility through transparent practices.
          </p>
          <p className="p-size">
            Being a digital marketing company, we provide both NFT marketing and NFT marketplace marketing services. If you are a company that trades nfts, we are here to do the nft marketing for you and help you reach the right audience in a period and generate leads. And if you are an nft marketplace, opting for our nft marketplace marketing services would drive more engagements on your platform.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <h1 className="text-center mt-4 mb-4 h-colr">WHY CHOOSE ASKGALORE FOR YOUR<br /> NFT MARKETING?</h1>

          <p className="p-size">
            Marketing is very important for any business as it allows the brands to market their product and reach the specific audience strategically. Digital Marketing has emerged and became the best options to do the marketing and get real time results. It becomes easier to expand and increase the sales through digital marketing by applying various strategies. Digital marketing also plays an important role in NFT Marketing and NFT Marketplace marketing.
            Askgalore Digital being the best Digital Marketing agency provides the best NFT marketing and NFT Marketplace marketing services to achieve maximum results. We also provide customised solutions for all your marketing needs. Right from analysing the market to find the right channels for your marketing, we go step by step to create, design the marketing strategy to give your business a boom. We are a result driven company and measure the results to further proceed. We make strategies, implement them and mesure the results. Services at Askgalore NFT marketing company helps you increase your brand awareness, sales, site visitation and bring conversions. Get connected with us take advantage of our NFT marketing and NFT marketplace marketing services.</p>
        </div>
      </div>

      <ServicesFooter />
    </>
  );
}
