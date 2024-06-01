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
          <h1 className='text-danger'>DOCSUTRA</h1>
          <h5>Docs Scan & Share App</h5>
        </div>

        <div className="container">

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className=" row justify-content-center text-center">
                <div className="mt-4 col-lg-5">
                  <Image src="/docsutra.png" alt="docsutra" height={400} width={400} className="img-adjust" />
                </div>
                <div className="col-lg-7">
                  <div className="mt-4 text-justify px-3">
                    <p className='lead'>
                      <b>OBJECTIVE :</b> To develop a secure, platform that can bring changes to store important documents (any type), organize and share privately.
                    </p>
                    <p className='lead'>
                      <b>HOW WE DID IT :</b> We developed a secure platform for storing, organizing, and sharing important documents using ReactJS for frontend, Nodejs with MongoDB for backend, and SocketIO for data exchange.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-5 row text-justify lead px-4">
                <ol>
                  <li>Our objective was to create a secure platform where individuals and organizations can store and organize their important documents and share them privately. To achieve this, we used a combination of modern technologies and services.</li>
                  <li>We started by creating a centralized platform for storing files and documents. For the frontend, we used ReactJS, a widely used and efficient library for building user interfaces. ReactJS provided us with a fast and responsive way to create an intuitive user interface.</li>
                  <li>For the backend, we used Nodejs, a popular runtime environment for JavaScript, and MongoDB, a flexible and scalable database. Nodejs allowed us to build a robust backend, while MongoDB provided us with a reliable and efficient way to store and manage data.</li>
                  <li>To ensure real-time data exchange between the server and client, we used SocketIO, a real-time engine that provides a bidirectional communication channel between the server and client.</li>
                  <li>Overall, by using these technologies and services, we were able to create a secure and user-friendly platform that allows individuals and organizations to store, organize, and share their important documents privately. Our platform provides a seamless and efficient way to manage and access important documents, ensuring that they are always available when needed.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}
