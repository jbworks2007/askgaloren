import React from "react";
import { AiOutlineCode } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { CiMobile3 } from "react-icons/ci";
import { BiSearchAlt } from "react-icons/bi";
import { ImStack } from "react-icons/im";
import { BsBagCheck } from "react-icons/bs";

export default function NftDevelopmentServices() {
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <h1 className=" text-center">NFT Development Services</h1>
              <div className="row mx-auto px-5 mt-3">
                <div className="col-lg-4 d-flex">
                  <AiOutlineCode className="text-success" size={40} />
                  <a className="lead px-2 mt-1" href="#">
                    NFT Marketplace Development
                  </a>
                </div>
                <div className="col-lg-4 d-flex">
                  <CiMobile3 className="text-success" size={40} />
                  <a className="lead px-2 mt-1" href="#">
                    NFT Website Development
                  </a>
                </div>
                <div className="col-lg-4 d-flex">
                  <FaReact className="text-success" size={40} />
                  <a className="lead px-2 mt-1" href="#">
                    NFT Marketing Services
                  </a>
                </div>

                <div className="col-lg-4 d-flex mt-4">
                  <BiSearchAlt className="text-success" size={40} />
                  <a className="lead px-2 mt-1" href="#">
                    NFT Marketplace Development Cost
                  </a>
                </div>
                <div className="col-lg-4 d-flex mt-4">
                  <ImStack className="text-success" size={40} />
                  <a className="lead px-2 mt-1" href="#">
                    NFT Smart Contract Development
                  </a>
                </div>
                <div className="col-lg-4 d-flex mt-4">
                  <BsBagCheck className="text-success" size={40} />
                  <a className="lead px-2 mt-1" href="#">
                    Top NFT Marketing Agency
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
