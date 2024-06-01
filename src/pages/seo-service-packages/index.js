import React from "react";

export default function index() {
  return (
    <>
      <div className="banner-area-two">
        <div className="container p-5">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <h1 className="heading-styles1">SEO SERVICES</h1>
              <br></br>
              <p className="lead">
                Are you facing the online tussle to rank your business on the
                first page? Divest your worries now to the best SEO company for
                an expedited growth, leveraging on the latest and most effective
                Search Engine Optimization techniques.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid seo-clr ">
        <div className="row">
          <h1 className="text-center mt-4 ">
            <b>Get Your FREE Website SEO Audit Now</b>
          </h1>

          <p className="text-center">
            Is your website struggling to get more traffic from Google? Then use
            our free SEO audit tool and discover what’s holding you back with
            the website analysis report. Inside you will discover the essential
            SEO errors that are holding your website back from ranking on page 1
            of Google. Get your free audit report within 24 hrs direct to your
            mailbox.
          </p>
          <button type="button" class="bx5 container mt-4 mb-3 ">
            Let's Start
          </button>
        </div>

        {/* <div className="center">
        <button className="btn btn-primary  pt-2 pb-2" role="button"> Let's Start </button>
        </div> */}
      </div>

      <h1 className="heading-styles1 text-center">SEO SERVICE PACKAGES</h1>
      <div className="text-center ">
        <img src="./Table-Ag-2.webp"></img>
        <img src="./Table-Ag1.webp" style={{ width: '1130px' }}></img>
      </div>
    </>
  );
}
