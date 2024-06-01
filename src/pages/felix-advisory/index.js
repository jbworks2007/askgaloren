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
     <h1 className='text-danger'>FELIX ADVISORY</h1>
     <h5>AI/ML Document Data Extraction</h5>
    </div>

    <div className="container">

     <div className="row justify-content-center">
      <div className="col-lg-10">
       <div className=" row justify-content-center text-center">
        <div className="mt-4 col-lg-5">
         <Image src="/felixadvisory.png" alt="felix-advisory" height={400} width={400} className="img-adjust" />
        </div>
        <div className="col-lg-7">
         <div className="mt-4 text-justify px-3">
          <p className='lead'>
           <b>OBJECTIVE :</b> To develop a cutting-edge AI and OCR technology-based solution for extracting information from unstructured documents, such as PDFs and images.
          </p>
          <p className='lead'>
           <b>HOW WE DID IT :</b> To build a state-of-the-art pipeline for contour detection and OCR technology, we used a DL model for classifying documents based on 10 categories, passed documents through an OCR library for text extraction, filtered the extracted text for desired keywords, and stored the results in a database for further processing.
          </p>
         </div>
        </div>
       </div>
       <div className="mt-5 row text-justify lead px-4">
        Our objective was to develop a state-of-the-art pipeline for contour detection and OCR technology to streamline the document processing and information extraction process. Here's how we did it:
        <ol>
         <li>We built a pipeline for contour detection to find the edges of documents and crop them separately.</li>
         <li>We passed all the documents through a DL model for classifying documents based on 10 categories, such as invoices, receipts, and forms.</li>
         <li>After classification, we passed all the individual documents through the latest open-source OCR libraries to convert images to text, such as Tesseract, OCRopus, and GOCR.</li>
         <li>We filtered out the text extracted to find the desired keywords from the corpus, such as names, addresses, and amounts.</li>
         <li>We stored the results in the database for further processing, such as data analysis, extraction, and integration.</li>
        </ol>

        <p className='lead'>
         Our pipeline for contour detection and OCR technology is cutting-edge and can efficiently extract information from unstructured documents for enhanced decision-making and streamlined business processes.
        </p>
       </div>
      </div>
     </div>
    </div>
   </div >
  </>
 )
}
