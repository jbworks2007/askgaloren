import React from 'react'
import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaReact, FaJsSquare, FaHtml5, FaNodeJs, FaCss3Alt } from 'react-icons/fa'
import { SiFirebase, SiNextdotjs, SiMongodb, SiBootstrap, SiMicrosoftazure, SiMui, SiPython, SiSolidity, SiHyperledger } from 'react-icons/si'
import { GrMysql } from 'react-icons/gr'

export default function FeatureTwo() {

  // useEffect(() => {
  //   let summary = document.querySelector('.p3-wrap')

  //   if (summary.textContent.length > 100) {
  //     let truncated = summary.textContent.substring(0, 100)

  //     summary.innerHTML = `<p>${truncated}<span class='text-danger'> Read more...</span></p>`
  //   }
  // });

  return (
    <>
      <div className="container-fluid ptb-50 bg-themeblue text-light">
        <div className="row justify-content-center">
          <h1 className='text-center'>FEATURED</h1>

          <div className="col-lg-10">
            <p className='lead text-justify px-4'>
              A collection of our handwork – we have delivered blockchain and enterprise software projects across industries with a special focus on innovations in the NFT smart contracts. Some of our featured projects are mentioned below!
            </p>
            <div className="row justify-content-center g-4">
              <div className="col-lg-6 ">
                <Link className='ln-one' href="o2w">
                  <div className="feature-card px-4 py-4 text-center">
                    <h3 className='h-7 '>O2W - SaaS Platform</h3>
                    <div className='mt-ng'>Organize yourself to attain future goals</div>
                    <div className="mt-2 row ">
                      <div className="col-lg-6 col-md-6">
                        <Image src="/o2w.png" alt="o2w" height={240} width={240} className="img-adjust" />
                      </div>
                      <div className="col-lg-6 col-md-6 d-flex justify-content-center">
                        <div className="ts-card text-center ">
                          <h6 className='mt-4 p-7'><b>TECH STACK</b></h6>
                          <div className="mt-2 justify-content-center d-flex align-items-center mx-auto">
                            <div className='px-2 py-2'><SiNextdotjs size={40} className='nxtjs' /><br></br>Nextjs</div>
                            <div className='px-2 py-2'><FaJsSquare size={40} className='javas' /><br></br>Javascript</div>
                            <div className='px-2 py-2'><SiBootstrap size={40} className='boots' /><br></br>BS5</div>
                          </div>
                          <div className="mt-2 justify-content-center d-flex align-items-center mx-auto">
                            <div className='px-2 py-2'><FaNodeJs size={40} className='nodjs' /><br></br>Nodejs</div>
                            <div className='px-2 py-2'><SiMongodb size={40} className='mongo' /><br></br>MongoDB</div>
                            <div className='px-2 py-2'><SiMicrosoftazure size={40} className='azure' /><br></br>Azure</div>
                          </div>
                        </div>
                      </div>
                      <div className='mt-2 text-start'>
                        <p className='text-justify p2-wrap'><b>OBJECTIVE: </b>A tech-enabled holistic model that answers, “Is the organization ready to deliver goals consistently over the next 3 to 5 years?” & enables surgical identification of Value builders to strengthen & value drainers to fix.</p>
                        <p className='mt-ng text-justify p3-wrap d-none d-sm-none d-md-block'><b>HOW WE DID IT: </b>We created whole heirarchy of an organization from CEO to employee level, input their performance index and calculate their present to future achievable goals  <span className='text-danger'> Read More...</span></p>
                        <p className='mt-ng text-justify p3-wrap d-sm-block d-md-none'><b>HOW WE DID IT: </b>We created whole heirarchy of an organization from CEO to employee level, input their performance index and calculate <span className='text-danger'> Read More...</span></p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-6 ">
                <Link className='ln-one' href="esg">
                  <div className="feature-card px-4 py-4 text-center">
                    <h3 className='h-7 '>ESG CARBON RWA</h3>
                    <div className='mt-ng'>Carbon Token on Blockchain</div>
                    <div className="mt-2 row ">
                      <div className="col-lg-6 col-md-6">
                        <Image src="/green.jpg" alt="esg" height={240} width={240} className="img-adjust" />
                      </div>
                      <div className="col-lg-6 col-md-6 d-flex justify-content-center">
                        <div className="ts-card text-center ">
                          <h6 className='mt-4 p-7'><b>TECH STACK</b></h6>
                          <div className="mt-2 justify-content-center d-flex align-items-center mx-auto">
                            <div className='px-2 py-2'><SiNextdotjs size={40} className='nxtjs' /><br></br>Nextjs</div>
                            <div className='px-2 py-2'><FaJsSquare size={40} className='javas' /><br></br>Javascript</div>
                            <div className='px-2 py-2'><SiSolidity size={40} className='solid' /><br></br>Solidity</div>
                          </div>
                          <div className="mt-2 justify-content-center d-flex align-items-center mx-auto">
                            <div className='px-2 py-2'><FaNodeJs size={40} className='nodjs' /><br></br>Nodejs</div>
                            <div className='px-2 py-2'><SiMongodb size={40} className='mongo' /><br></br>MongoDB</div>
                            <div className='px-2 py-2'><SiMicrosoftazure size={40} className='azure' /><br></br>Azure</div>
                          </div>
                        </div>
                      </div>
                      <div className='mt-2 text-start'>
                        <p className='text-justify p2-wrap'><b>OBJECTIVE: </b>An ESG & sustainability platform to assess carbon emission and offset through carbon tokens.</p>
                        <p className='mt-ng text-justify p3-wrap d-none d-sm-none d-md-block'><b>HOW WE DID IT: </b>We througly research the off-chain process of carbon credits and how carbon credits trading take place and bring the same platform on Blockchain. We created carbon <span className='text-danger'> Read More...</span></p>
                        <p className='mt-ng text-justify p3-wrap d-sm-block d-md-none'><b>HOW WE DID IT: </b>We througly research the off-chain process of carbon credits and how carbon credits trading take place and bring the same platform <span className='text-danger'> Read More...</span></p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-6 ">
                <Link className='ln-one' href="agomic-labs">
                  <div className="feature-card px-4 py-4 text-center">
                    <h3 className='h-7 '>AGOMIC LABS</h3>
                    <div className='mt-ng'>One-stop-shop for Blockchain APIs, Tools & Services</div>
                    <div className="mt-2 row ">
                      <div className="col-lg-6 col-md-6">
                        <Image src="/agomic-labs.png" alt="agomic-labs" height={240} width={240} className="img-adjust" />
                      </div>
                      <div className="col-lg-6 col-md-6 d-flex justify-content-center">
                        <div className="ts-card text-center ">
                          <h6 className='mt-4 p-7'><b>TECH STACK</b></h6>
                          <div className="mt-2 justify-content-center d-flex align-items-center mx-auto">
                            <div className='px-2 py-2'><SiNextdotjs size={40} className='nxtjs' /><br></br>Nextjs</div>
                            <div className='px-2 py-2'><FaJsSquare size={40} className='javas' /><br></br>Javascript</div>
                            <div className='px-2 py-2'><SiSolidity size={40} className='solid' /><br></br>Solidity</div>
                          </div>
                          <div className="mt-2 justify-content-center d-flex align-items-center mx-auto">
                            <div className='px-2 py-2'><FaNodeJs size={40} className='nodjs' /><br></br>Nodejs</div>
                            <div className='px-2 py-2'><SiMongodb size={40} className='mongo' /><br></br>MongoDB</div>
                            <div className='px-2 py-2'><SiMicrosoftazure size={40} className='azure' /><br></br>Azure</div>
                          </div>
                        </div>
                      </div>
                      <div className='mt-2 text-start'>
                        <p className='text-justify p2-wrap'><b>OBJECTIVE: </b>To create a comprehensive platform that offers a wide range of blockchain-related solutions and services, including but not limited to NFT marketplaces, DeFi protocols, Dapps, and DAOs, to cater to the needs of individuals and organizations in the blockchain industry.</p>
                        <p className='mt-ng text-justify p3-wrap d-none d-sm-none d-md-block'><b>HOW WE DID IT: </b>We identified the need for NFT-related solutions and services, assembled a team of experts, and conducted extensive research and development to create <span className='text-danger'> Read More...</span></p>
                        <p className='mt-ng text-justify p3-wrap d-sm-block d-md-none'><b>HOW WE DID IT: </b>We identified the need for NFT-related solutions and services, assembled a team of experts, and conducted extensive research <span className='text-danger'> Read More...</span></p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-6 ">
                <Link className='ln-one' href="jocky-boa-boxer-club">
                  <div className="feature-card px-4 py-4 text-center">
                    <h3 className='h-7'>JOCKY BOA BOXER CLUB</h3>
                    <div className='mt-ng'>Transform yourself into an NFT</div>
                    <div className="mt-2 row ">
                      <div className="col-lg-6 col-md-6">
                        <Image src="/jbbc.webp" alt="jbbc" height={240} width={240} className="img-adjust" />
                      </div>
                      <div className="col-lg-6 col-md-6 d-flex justify-content-center">
                        <div className="ts-card text-center ">
                          <h6 className='mt-4 p-7'><b>TECH STACK</b></h6>
                          <div className="mt-2 justify-content-center d-flex align-items-center mx-auto">
                            <div className='px-2 py-2'><FaReact size={40} className='react' /><br></br>Reactjs</div>
                            <div className='px-2 py-2'><SiSolidity size={40} className='solid' /><br></br>Solidity</div>
                            <div className='px-2 py-2'><SiMui size={40} className='matui' /><br></br>@MUI</div>
                          </div>
                          <div className="mt-2 justify-content-center d-flex align-items-center mx-auto">
                            <div className='px-2 py-2'><FaNodeJs size={40} className='nodjs' /><br></br>Nodejs</div>
                            <div className='px-2 py-2'><GrMysql size={40} className='mysql' /><br></br>MySQL</div>
                            <div className='px-2 py-2'><SiMicrosoftazure size={40} className='azure' /><br></br>Azure</div>
                          </div>
                        </div>
                      </div>
                      <div className='mt-2 text-start'>
                        <p className='text-justify p2-wrap'><b>OBJECTIVE: </b>To provide JBBC NFT collectors with an innovative and engaging experience by enabling them to create their own personalized Jocky Boa Transformer NFT Avatar (JBBC-T). <span className='text-danger'>Read More...</span></p>
                        <p className='mt-ng text-justify p3-wrap d-none d-sm-none d-md-block'><b>HOW WE DID IT: </b>To create the Jocky Boa Boxer Club NFT collection, we minted 10,000 NFTs on Polygon and Ethereum chains. Owners of JBBC NFTs can create their own personalized <span className='text-danger'>Read More...</span></p>
                        <p className='mt-ng text-justify p3-wrap d-sm-block d-md-none'><b>HOW WE DID IT: </b>To create the Jocky Boa Boxer Club NFT collection, we minted 10,000 NFTs on Polygon and Ethereum chains. Owners of JBBC NFTs <span className='text-danger'>Read More...</span></p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-6">
                <Link className='ln-one' href="eazy-vc">
                  <div className="feature-card px-4 py-4 text-center">
                    <h3 className='h-7 '>EAZY VC</h3>
                    <div className='mt-ng'>Secure Voting on Hyperledger Fabric</div>
                    <div className="mt-2 row ">
                      <div className="col-lg-6 col-md-6">
                        <Image src="/EazyVC.webp" alt="eazy-vc" height={240} width={240} className="img-adjust" />
                      </div>
                      <div className="col-lg-6 col-md-6 d-flex justify-content-center">
                        <div className="ts-card text-center ">
                          <h6 className='mt-4 p-7'><b>TECH STACK</b></h6>
                          <div className="mt-2 justify-content-center d-flex align-items-center mx-auto">
                            <div className='px-2 py-2'><FaReact size={40} className='react' /><br></br>Reactjs</div>
                            <div className='px-2 py-2'><SiHyperledger size={40} className='hyper' /><br></br>Hyperledger</div>
                            <div className='px-2 py-2'><SiMui size={40} className='matui' /><br></br>@MUI</div>
                          </div>
                          <div className="mt-2 justify-content-center d-flex align-items-center mx-auto">
                            <div className='px-2 py-2'><FaNodeJs size={40} className='nodjs' /><br></br>Nodejs</div>
                            <div className='px-2 py-2'><SiMongodb size={40} className='mongo' /><br></br>MongoDB</div>
                            <div className='px-2 py-2'><SiMicrosoftazure size={40} className='azure' /><br></br>Azure</div>
                          </div>
                        </div>
                      </div>
                      <div className='mt-2 text-start'>
                        <p className='text-justify p2-wrap'><b>OBJECTIVE: </b>To develop a secure, tech-backed voting platform that can bring revolutionary changes to the way elections are conducted and provide organizations & establishments with a seamless and accurate election process that is trustworthy</p>
                        <p className='mt-ng text-justify p3-wrap d-none d-sm-none d-md-block'><b>HOW WE DID IT: </b>We developed a secure and trustworthy voting platform using HyperLedger Fabric for decentralized voting, ReactJS for frontend, and Nodejs with MongoDB <span className='text-danger'>Read More...</span></p>
                        <p className='mt-ng text-justify p3-wrap d-sm-block d-md-none'><b>HOW WE DID IT: </b>We developed a secure and trustworthy voting platform using HyperLedger Fabric for decentralized voting, ReactJS for frontend <span className='text-danger'>Read More...</span></p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-6">
                <Link className='ln-one' href="quill-at-will">
                  <div className="feature-card px-4 py-4 text-center">
                    <h3 className='h-7 '>QUILL @ WILL</h3>
                    <div className='mt-ng'>Book Authoring & Blogging App</div>
                    <div className="mt-2 row ">
                      <div className="col-lg-6 col-md-6">
                        <Image src="/Quillatwill.webp" alt="quill@will" height={240} width={240} className="img-adjust" />
                      </div>
                      <div className="col-lg-6 col-md-6 d-flex justify-content-center">
                        <div className="ts-card text-center ">
                          <h6 className='mt-4 p-7'><b>TECH STACK</b></h6>
                          <div className="mt-2 justify-content-center d-flex align-items-center mx-auto">
                            <div className='px-2 py-2'><FaReact size={40} className='react' /><br></br>Reactjs</div>
                            <div className='px-2 py-2'><FaJsSquare size={40} className='javas' /><br></br>Javascript</div>
                            <div className='px-2 py-2'><SiMui size={40} className='matui' /><br></br>@MUI</div>
                          </div>
                          <div className="mt-2 justify-content-center d-flex align-items-center mx-auto">
                            <div className='px-2 py-2'><FaNodeJs size={40} className='nodjs' /><br></br>Nodejs</div>
                            <div className='px-2 py-2'><SiFirebase size={40} className='fireb' /><br></br>Firebase</div>
                            <div className='px-2 py-2'><SiMicrosoftazure size={40} className='azure' /><br></br>CSS</div>
                          </div>
                        </div>
                      </div>
                      <div className='mt-2 text-start'>
                        <p className='text-justify p2-wrap'><b>OBJECTIVE: </b>To create a secure platform to publish blogs, essays, and poems, create To Do list and follow habits, as well as create your own personal online diary.</p>
                        <p className='mt-ng text-justify p3-wrap d-none d-sm-none d-md-block'><b>HOW WE DID IT: </b>We created a secure platform for publishing and sharing content such as blogs, essays, poems, and personal diary entries. Using ReactJS and Redux for the <span className='text-danger'>Read More...</span></p>
                        <p className='mt-ng text-justify p3-wrap d-sm-block d-md-none'><b>HOW WE DID IT: </b>We created a secure platform for publishing and sharing content such as blogs, essays, poems, and personal diary entries. Using <span className='text-danger'>Read More...</span></p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-6">
                <Link className='ln-one' href="travictionary">
                  <div className="feature-card px-4 py-4 text-center">
                    <h3 className='h-7 '>TRAVICTIONARY</h3>
                    <div className='mt-ng'>ERC 1155 NFT Tokens</div>
                    <div className="mt-2 row ">
                      <div className="col-lg-6 col-md-6">
                        <Image src="/Travictionary.webp" alt="Travictionary" height={240} width={240} className="img-adjust" />
                      </div>
                      <div className="col-lg-6 col-md-6 d-flex justify-content-center">
                        <div className="ts-card text-center ">
                          <h6 className='mt-4 p-7'><b>TECH STACK</b></h6>
                          <div className="mt-2 justify-content-center d-flex align-items-center mx-auto">
                            <div className='px-2 py-2'><SiNextdotjs size={40} className='nxtjs' /><br></br>Nextjs</div>
                            <div className='px-2 py-2'><FaJsSquare size={40} className='javas' /><br></br>Javascript</div>
                            <div className='px-2 py-2'><SiSolidity size={40} className='solid' /><br></br>Solidity</div>
                          </div>
                          <div className="mt-2 justify-content-center d-flex align-items-center mx-auto">
                            <div className='px-2 py-2'><FaNodeJs size={40} className='nodjs' /><br></br>Nodejs</div>
                            <div className='px-2 py-2'><SiFirebase size={40} className='fireb' /><br></br>Firebase</div>
                            <div className='px-2 py-2'><SiMicrosoftazure size={40} className='azure' /><br></br>Azure</div>
                          </div>
                        </div>
                      </div>
                      <div className='mt-2 text-start'>
                        <p className='text-justify p2-wrap'><b>OBJECTIVE: </b>To offers an exclusive community for the seeker who loves to explore our mother nature - EARTH. Both artists and collectors are assured the best</p>
                        <p className='mt-ng text-justify p3-wrap d-none d-sm-none d-md-block'><b>HOW WE DID IT: </b>Travictionary is the key to unlocking Web 3.0's vast new universe of limitless possibilities and new experiences “Traveling and Exploring”. Travictionary allows for the <span className='text-danger'>Read More...</span></p>
                        <p className='mt-ng text-justify p3-wrap d-sm-block d-md-none'><b>HOW WE DID IT: </b>Travictionary is the key to unlocking Web 3.0's vast new universe of limitless possibilities and new experiences “Traveling and Exploring” <span className='text-danger'>Read More...</span></p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-6">
                <Link className='ln-one' href="kalachain">
                  <div className="feature-card px-4 py-4 text-center">
                    <h3 className='h-7 '>KALACHAIN</h3>
                    <div className='mt-ng'>ERC 721 NFT Tokens</div>
                    <div className="mt-2 row ">
                      <div className="col-lg-6 col-md-6">
                        <Image src="/Kalachain.webp" alt="Kalachain" height={240} width={240} className="img-adjust" />
                      </div>
                      <div className="col-lg-6 col-md-6 d-flex justify-content-center">
                        <div className="ts-card text-center ">
                          <h6 className='mt-4 p-7'><b>TECH STACK</b></h6>
                          <div className="mt-2 justify-content-center d-flex align-items-center mx-auto">
                            <div className='px-2 py-2'><SiNextdotjs size={40} className='nxtjs' /><br></br>Nextjs</div>
                            <div className='px-2 py-2'><FaJsSquare size={40} className='javas' /><br></br>Javascript</div>
                            <div className='px-2 py-2'><SiSolidity size={40} className='solid' /><br></br>Solidity</div>
                          </div>
                          <div className="mt-2 justify-content-center d-flex align-items-center mx-auto">
                            <div className='px-2 py-2'><FaNodeJs size={40} className='nodjs' /><br></br>Nodejs</div>
                            <div className='px-2 py-2'><GrMysql size={40} className='mysql' /><br></br>MySQL</div>
                            <div className='px-2 py-2'><SiMicrosoftazure size={40} className='azure' /><br></br>Azure</div>
                          </div>
                        </div>
                      </div>
                      <div className='mt-2 text-start'>
                        <p className='text-justify p2-wrap'><b>OBJECTIVE: </b>To provide a secure NFT marketplace to create & publish nft on Polygon. Kalachain is a NFT collection of Nature Clicks. Many artists upload their clicks as NFT with us to get wider audience.</p>
                        <p className='mt-ng text-justify p3-wrap d-none d-sm-none d-md-block'><b>HOW WE DID IT: </b>We developed a secure NFT marketplace on Polygon by creating a Solidity smart contract for the transfer, minting, and getting NFTs. Nextjs was used for the front end, <span className='text-danger'>Read More...</span></p>
                        <p className='mt-ng text-justify p3-wrap d-sm-block d-md-none'><b>HOW WE DID IT: </b>We developed a secure NFT marketplace on Polygon by creating a Solidity smart contract for the transfer, minting, and getting NFTs. Nextjs was <span className='text-danger'>Read More...</span></p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-6">
                <Link className='ln-one' href="docsutra">
                  <div className="feature-card px-4 py-4 text-center">
                    <h3 className='h-7 '>DOCSUTRA</h3>
                    <div className='mt-ng'>Docs Scan & Share App</div>
                    <div className="mt-2 row ">
                      <div className="col-lg-6 col-md-6">
                        <Image src="/docsutra.png" alt="DocSutra" height={240} width={240} className="img-adjust" />
                      </div>
                      <div className="col-lg-6 col-md-6 d-flex justify-content-center">
                        <div className="ts-card text-center ">
                          <h6 className='mt-4 p-7'><b>TECH STACK</b></h6>
                          <div className="mt-2 justify-content-center d-flex align-items-center mx-auto">
                            <div className='px-2 py-2'><FaReact size={40} className='react' /><br></br>Reactjs</div>
                            <div className='px-2 py-2'><FaJsSquare size={40} className='javas' /><br></br>Javascript</div>
                            <div className='px-2 py-2'><SiMui size={40} className='matui' /><br></br>@MUI</div>
                          </div>
                          <div className="mt-2 justify-content-center d-flex align-items-center mx-auto">
                            <div className='px-2 py-2'><FaNodeJs size={40} className='nodjs' /><br></br>Nodejs</div>
                            <div className='px-2 py-2'><SiMongodb size={40} className='mongo' /><br></br>MongoDB</div>
                            <div className='px-2 py-2'><SiMicrosoftazure size={40} className='azure' /><br></br>Azure</div>
                          </div>
                        </div>
                      </div>
                      <div className='mt-2 text-start'>
                        <p className='text-justify p2-wrap'><b>OBJECTIVE: </b>To create a document management platform where user can scan the documents, share the documents with other users with end-to-end data protection. </p>
                        <p className='mt-ng text-justify p3-wrap d-none d-sm-none d-md-block'><b>HOW WE DID IT: </b>We developed a secure platform for storing, organizing, and sharing important documents using ReactJS for frontend, Nodejs with MongoDB for <span className='text-danger'>Read More...</span></p>
                        <p className='mt-ng text-justify p3-wrap d-sm-block d-md-none'><b>HOW WE DID IT: </b>We developed a secure platform for storing, organizing, and sharing important documents using ReactJS for frontend, Nodejs with <span className='text-danger'>Read More...</span></p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-6">
                <Link className='ln-one' href="felix-advisory">
                  <div className="feature-card px-4 py-4 text-center">
                    <h3 className='h-7 '>FELIX ADVISORY</h3>
                    <div className='mt-ng'>AI/ML Document Data Extraction</div>
                    <div className="mt-2 row ">
                      <div className="col-lg-6 col-md-6">
                        <Image src="/aichip.jpg" alt="felixadvisory" height={240} width={240} className="img-adjust" />
                      </div>
                      <div className="col-lg-6 col-md-6 d-flex justify-content-center">
                        <div className="ts-card text-center ">
                          <h6 className='mt-4 p-7'><b>TECH STACK</b></h6>
                          <div className="mt-2 justify-content-center d-flex align-items-center mx-auto">
                            <div className='px-2 py-2'><FaReact size={40} className='react' /><br></br>Reactjs</div>
                            <div className='px-2 py-2'><FaJsSquare size={40} className='javas' /><br></br>Javascript</div>
                            <div className='px-2 py-2'><SiBootstrap size={40} className='boots' /><br></br>BS5</div>
                          </div>
                          <div className="mt-2 justify-content-center d-flex align-items-center mx-auto">
                            <div className='px-2 py-2'><SiPython size={40} className='pythn' /><br></br>Python</div>
                            <div className='px-2 py-2'><SiMongodb size={40} className='mongo' /><br></br>MongoDB</div>
                            <div className='px-2 py-2'><SiMicrosoftazure size={40} className='azure' /><br></br>Azure</div>
                          </div>
                        </div>
                      </div>
                      <div className='mt-2 text-start'>
                        <p className='text-justify p2-wrap'><b>OBJECTIVE: </b>To develop a cutting-edge AI and OCR technology-based solution for extracting information from unstructured documents, such as PDFs and images.</p>
                        <p className='mt-ng text-justify p3-wrap d-none d-sm-none d-md-block'><b>HOW WE DID IT: </b>To build a state-of-the-art pipeline for contour detection and OCR technology, we used a DL model for classifying documents based on 10 categories <span className='text-danger'>Read More...</span></p>
                        <p className='mt-ng text-justify p3-wrap d-sm-block d-md-none'><b>HOW WE DID IT: </b>To build a state-of-the-art pipeline for contour detection and OCR technology, we used a DL model for classifying documents <span className='text-danger'>Read More...</span></p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
