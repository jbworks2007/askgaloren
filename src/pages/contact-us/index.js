import React from "react";
import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";
import { FaHeadphonesAlt } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import ContactForm from "@/components/Misc/ContactForm";

export default function Contact() {
  return (
    <>
      <div className="container ptb-50">
        <div className="row align-items-center px-3">
          <div className="col-lg-6">
            <div className="">
              <div className="banner-item">
                <div className="banner-item-img">
                  <div className="banner-shape">
                    <div className="shape-in1">
                      <h1 className="e">
                        <strong>CONTACT US</strong>
                      </h1>
                      <br />
                      <p className="g">Why wait? Let's get started!</p>
                      <p>
                        Contact a specialist & let’s make something awesome
                        together. Drop us a line regarding your project and
                        share it with us.
                      </p>
                      <br />
                      <div className="text-center">
                        <Link type="button" class="bx2 mb-5 tdn"
                          href="https://api.whatsapp.com/send?phone=+310636079961&text=Hi_lead_from_askgalore.nl"
                        >
                          <BsWhatsapp className="n" size={20} /> Connect with WhatsApp
                        </Link>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 fr">
            <div className="">
              <ContactForm />
            </div>
          </div>
        </div>

        <div className="container ptb-50">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-4">
              <div className="circle-box-style container">
                <a
                  href="https://api.whatsapp.com/send/?phone=310636079961&text&type=phone_number&app_absent=0"
                  target="_blank"
                >
                  <BsWhatsapp className="n" size={40} />
                </a>
              </div>
              <div className=" text-center mt-3 mb-3 ">
                <h3>
                  <a
                    style={{ textDecoration: "none", color: "#000" }}
                    href="https://api.whatsapp.com/send/?phone=310636079961&text&type=phone_number&app_absent=0"
                    target="_blank"
                  >
                    WHATSAPP{" "}
                  </a>
                </h3>
              </div>
              <h3 className=" text-center">Whatsapp Business</h3>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="circle-box-style container">
                <a
                  href="https://api.whatsapp.com/send/?phone=310636079961&text&type=phone_number&app_absent=0"
                  target="_blank"
                >
                  <FaHeadphonesAlt className="n" size={40} />
                </a>
              </div>
              <div className=" text-center mt-3 mb-3 ">
                <h3>
                  <a
                    style={{ textDecoration: "none", color: "#000" }}
                    href="https://api.whatsapp.com/send/?phone=310636079961&text&type=phone_number&app_absent=0"
                    target="_blank"
                  >
                    CALL{" "}
                  </a>
                </h3>
              </div>
              <h3 className=" text-center">+31 (0)636079961</h3>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="circle-box-style container">
                <a
                  href="https://api.whatsapp.com/send/?phone=310636079961&text&type=phone_number&app_absent=0"
                  target="_blank"
                >
                  <FaMailBulk className="n" size={40} />
                </a>
              </div>
              <div className=" text-center mt-3 mb-3 ">
                <h3>
                  <a
                    style={{ textDecoration: "none", color: "#000" }}
                    href="https://api.whatsapp.com/send/?phone=310636079961&text&type=phone_number&app_absent=0"
                    target="_blank"
                  >
                    EMAIL{" "}
                  </a>
                </h3>
              </div>
              <h3 className=" text-center">info@agomic.com</h3>
            </div>
            <div className="row mt-5 ">
              <div className="col-lg-6">
                <h2 className="text-center mb-3 ">NETHERLANDS</h2>
                <img width="100%" src="./lelystad.jpg" />
                <p className="text-center mt-3">Landfort 64. Lelystad 8219AL</p>
              </div>
              <div className="col-lg-6  ">
                <h2 className="text-center mb-3 ">INDIA</h2>
                <img width="100%" src="./bhopal.jpg"  height={421}/>
                <p className="text-center mt-3">
                  Maple High Street, 4A, 3rd Floor, Hoshangabad Road, Bhopal, M.P.
                  462026
                </p>
              </div>
            </div>
            <div className="row mt-5 ">
              <div className="col-lg-6">
                <h2 className="text-center mb-3 ">USA</h2>
                <img width="100%" src="./Askglore-Contact.jpg" />
                <p className="text-center mt-3">
                  Agomic Labs, 9901 Valley Ranch Pkw E Ste 1030 Irving TX 75063
                </p>
              </div>
              <div className="col-lg-6 "></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
