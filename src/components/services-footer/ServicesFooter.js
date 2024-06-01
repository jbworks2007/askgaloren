import React from "react";
import { AiOutlineCode } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { CiMobile3 } from "react-icons/ci";
import { BiSearchAlt } from "react-icons/bi";
import { ImStack } from "react-icons/im";
import { BsBagCheck } from "react-icons/bs";

export default function ServicesFooter() {
  return (
    <>
      <div className="container-fluid ptb-50">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <h1 className=" text-center">Our Other Services</h1>
              <div className="row mx-auto px-2 mt-3">
                <div className="col-lg-4 d-flex mt-2">
                  <AiOutlineCode className="text-success" size={40} />
                  <a className="lead px-2 mt-1 td-none" href="custom-wordpress-development-company-2">
                    Website Development
                  </a>
                </div>
                <div className="col-lg-4 d-flex mt-2">
                  <CiMobile3 className="text-success" size={40} />
                  <a className="lead px-2 mt-1 td-none" href="top-mobile-app-development-company">
                    Mobile App Development
                  </a>
                </div>
                <div className="col-lg-4 d-flex mt-2">
                  <FaReact className="text-success" size={40} />
                  <a className="lead px-2 mt-1 td-none" href="reactjs-development-company">
                    React JS Development
                  </a>
                </div>
                <div className="col-lg-4 d-flex mt-2">
                  <BiSearchAlt className="text-success" size={40} />
                  <a className="lead px-2 mt-1 td-none" href="seo-service-provider-company">
                    Search Engine Optimization (SEO)
                  </a>
                </div>
                <div className="col-lg-4 d-flex mt-2">
                  <ImStack className="text-success" size={40} />
                  <a className="lead px-2 mt-1 td-none" href="mern-stack-development-company">
                    MERN Stack Development
                  </a>
                </div>
                <div className="col-lg-4 d-flex mt-2">
                  <BsBagCheck className="text-success" size={40} />
                  <a className="lead px-2 mt-1 td-none" href="ecommerce-website-development-company">
                    Ecommerce Web/App Development
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
