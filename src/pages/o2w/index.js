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
          <h1 className='text-danger'>Organize 2 Win</h1>
          <h5>Organize yourself to attain future Goals</h5>
        </div>

        <div className="container">

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className=" row justify-content-center text-center">
                <div className="mt-4 col-lg-5">
                  <Image src="/o2w.png" alt="o2w" height={400} width={400} className="img-adjust" />
                </div>
                <div className="col-lg-7">
                  <div className="mt-4 text-justify px-3">
                    <p className='lead'>
                      <b>OBJECTIVE :</b> A tech-enabled holistic model that answers, “Is the organization ready to deliver goals consistently over the next 3 to 5 years?” & enables surgical identification of Value builders to strengthen & value drainers to fix.
                    </p>
                    <p className='lead'>
                      <b>HOW WE DID IT :</b>We created whole heirarchy of an organization from CEO to employee level, input their performance index and calculate their present to future achievable goals.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-5 row text-justify lead px-4">
                <ol>
                  <li><strong>Built for CEOs : </strong>Facilitates an assessment of whether the organization is prepared to consistently achieve its goals in the years ahead.</li>
                  <li><strong>Data Security & Verification : </strong>The O2W architecture prioritizes robust data security for organizations, diligently confirming the accuracy of member information to ensure precise analytical outcomes, fostering confidence in data integrity and analysis.</li>
                  <li><strong>Role Fit : </strong>The platform empowers CEOs by enabling them to analyze members' current roles and provides output highlighting areas requiring improvement across the organization, enhancing decision-making and performance management.</li>
                  <li><strong>Data Visualization : </strong> Comprehensive visualizations of organizational data, factoring in member roles and company objectives, provide valuable insights into role alignment with corporate goals.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}