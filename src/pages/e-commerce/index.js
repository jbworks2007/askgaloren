import React from "react";
import Link from "next/link";
import useTranslation from 'next-translate/useTranslation'
import { BsWhatsapp } from "react-icons/bs";
import ContactForm from "@/components/Misc/ContactForm";

export default function Ecomm() {

  const { t, lang } = useTranslation('ecomm')

  return (
    <>
      <div className="container md-8 mt-5 mb-5">
        <div className="row text-end">
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Language
            </button>
            <ul class="dropdown-menu">
              <li><Link class="dropdown-item" href="/e-commerce" locale="en">English</Link></li>
              <li><Link class="dropdown-item" href="/e-commerce" locale="nl">Dutch</Link></li>
            </ul>
          </div>
        </div>

        <div className="col-lg-12">
          <h5 className="title-1 mb-4">E - Commerce</h5>
          <h1 className="font">
            {t('h0')}
          </h1>
          <p>
            {t('p0')}
          </p>
          <h4 className="pay">{t('q1')}</h4>
          <p>
            {t('p1-1')}
          </p>
          <p>
            {t('p1-2')}
          </p>
          <h4 className="pay">{t('q2')}</h4>
          <p>
            {t('p2-1')}
          </p>
          <p>
            {t('p2-2')}
          </p>
          <h4 className="pay">{t('q3')}</h4>
          <p>
            {t('p3-1')}
          </p>
          <p>
            {t('p3-2')}
          </p>
          <h4 className="pay">{t('q4')}</h4>
          <p>
            {t('p4-1')}
          </p>
          <p>
            {t('p4-2')}
          </p>
          <p>
            {t('p4-3')}
          </p>
        </div>
        <div className="row align-items-center px-3 border p-5">
          <div className="col-lg-6">
            <div className="">
              <div className="banner-item">
                <div className="banner-item-img">
                  <div className="banner-shape">
                    <div className="shape-in1 ">
                      <h1 className="e ">
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
      </div>
    </>
  );
}
