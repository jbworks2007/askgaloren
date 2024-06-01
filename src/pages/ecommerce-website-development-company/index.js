import React from "react";
import Image from "next/image"
import EcomOne from "@/components/Ecommerce/EcomOne";
import EcomTwo from "@/components/Ecommerce/EcomTwo";
import EcomThree from "@/components/Ecommerce/EcomThree";
import EcomFour from "@/components/Ecommerce/EcomFour";


export default function Ecommerce() {

  return (
    <>
      <div className="container ptb-50">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="row px-4">
              <div className="col-lg-6">
                <h1>Ecommerce Website Development Company</h1>
                <p className="mt-3 text-justify lead">
                  Askgalore Digital is a leading E-Commerce website development company. We provide extremely fast E-Commerce website development services to clients with a high-class user interface along with all security parameters and the best technical consultation that results in world-class E-Commerce development that you exactly desire. We fulfill all your requirements.
                </p>
                <button className='btn btn-lg rounded-pill btn-one' role="button">&nbsp;&nbsp;Lets Talk&nbsp;&nbsp;</button>
              </div>
              <div className="col-lg-6 text-center">
                <Image className="img-fluid" src="/Ecommerce-development-company.png" alt="Ecommerce" width={452} height={339} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <EcomOne />
      <EcomTwo />
      <EcomThree />
      <EcomFour />
    </>
  );
}