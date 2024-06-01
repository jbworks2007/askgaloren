import React from 'react'
import Image from 'next/image'
import { FaReact, FaJsSquare, FaHtml5, FaNodeJs, FaCss3Alt } from 'react-icons/fa'
import { SiFirebase, SiNextdotjs, SiMongodb, SiBootstrap, SiMicrosoftazure, SiMui, SiPython } from 'react-icons/si'
import { GrMysql } from 'react-icons/gr'

export default function index() {
  return (
    <>
      <div className="container-fluid ptb-50  bg-grlite">
        <div className="row px-4 text-center">
          <h1 className='text-danger'>EAZY VC</h1>
          <h5>Secure Voting on Hyperledger Fabric</h5>
        </div>

        <div className="container">

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className=" row justify-content-center text-center">
                <div className="mt-4 col-lg-5">
                  <Image src="/EazyVC.webp" alt="eazy-vc" height={400} width={400} className="img-adjust" />
                </div>
                <div className="col-lg-7">
                  <div className="mt-4 text-justify px-3">
                    <p className='lead'>
                      <b>OBJECTIVE :</b> To develop a secure, tech-backed voting platform that can bring revolutionary changes to the way elections are conducted and provide organizations & establishments with a seamless and accurate election process that is trustworthy.
                    </p>
                    <p className='lead'>
                      <b>HOW WE DID IT :</b> We developed a secure and trustworthy voting platform using HyperLedger Fabric for decentralized voting, ReactJS for frontend, and Nodejs with MongoDB for backend.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-5 row text-justify lead px-4">
                <ol>
                  <li>Our goal was to create a revolutionary voting platform that could transform the way elections are conducted while providing a seamless and accurate voting process for organizations and establishments. To achieve this, we used a combination of cutting-edge technologies and services.</li>
                  <li>Firstly, we developed a decentralized platform for voting using HyperLedger Fabric, which is an enterprise-grade distributed ledger technology. HyperLedger Fabric provides a secure and transparent way to conduct voting while also ensuring privacy and confidentiality.</li>
                  <li>For the frontend, we used ReactJS, which is a popular and efficient library for building user interfaces. ReactJS allowed us to create an intuitive and user-friendly interface that provided a seamless voting experience.</li>
                  <li>We built the backend on Nodejs, a popular runtime environment for JavaScript, and used MongoDB as the database. Nodejs allowed us to build a scalable and efficient backend, while MongoDB provided a flexible and reliable database.</li>
                  <li>Overall, by utilizing these technologies and services, we were able to develop a secure, trustworthy, and efficient voting platform that can revolutionize the way elections are conducted. Our platform provides a seamless and accurate voting process for organizations and establishments, ensuring a fair and transparent election process.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

