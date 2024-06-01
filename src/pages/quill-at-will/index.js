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
          <h1 className='text-danger'>QUILL @ WILL</h1>
          <h5>Book Authoring & Blogging App</h5>
        </div>

        <div className="container">

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className=" row justify-content-center text-center">
                <div className="mt-4 col-lg-5">
                  <Image src="/Quillatwill.webp" alt="quill-at-will" height={400} width={400} className="img-adjust" />
                </div>
                <div className="col-lg-7">
                  <div className="mt-4 text-justify px-3">
                    <p className='lead'>
                      <b>OBJECTIVE :</b> To create a secure platform to publish blogs, essays, and poems, create To Do list and follow habits, as well as create your own personal online diary.
                    </p>
                    <p className='lead'>
                      <b>HOW WE DID IT :</b> We created a secure platform for publishing and sharing content such as blogs, essays, poems, and personal diary entries. Using ReactJS and Redux for the frontend, we integrated Firebase as the database and backend service.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-5 row text-justify lead px-4">
                <ol>
                  <li>We set out to create a platform where individuals can share their thoughts and creative work in a secure environment. To achieve this, we developed a centralized platform where users can publish and share content such as blogs, essays, poems, and personal diary entries.</li>
                  <li>For the frontend, we used ReactJS and Redux, which provided us with a fast and efficient way to create an intuitive user interface. ReactJS is a widely used library for building user interfaces, and Redux is a state management tool that helped us keep track of the application's state and data flow.</li>
                  <li>To handle the backend and database, we decided to use Firebase, which is a cloud-based platform that offers various services, including real-time databases and storage. Firebase was a perfect fit for our application as it allowed us to quickly set up the backend and database without worrying about server maintenance and scalability.</li>
                  <li>Overall, by utilizing these technologies and services, we were able to create a secure, user-friendly platform for individuals to share their creative work and thoughts while also providing features such as To-Do lists and habit tracking.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}
