import React, { useState } from 'react'
import cc from "../../assets/country.json";
import { axiosPost } from "../../helpers/Axios";

export default function ContactForm({ dark }) {

  const [firstName, setfirstName] = useState(null);
  // const [lastName, setlastName] = useState(null);
  const [phone, setphone] = useState(null);
  const [email, setemail] = useState(null);
  const [subject, setSubject] = useState(null);
  const [countryname, setCountryName] = useState(null);
  const [message, setmessage] = useState(null);


  async function handleSubmit() {

    console.log(firstName, phone, email, subject, countryname, message);

    const formdata = new FormData();

    formdata.append("firstname", firstName);
    formdata.append("phone", phone);
    formdata.append("email", email);
    formdata.append("subject", subject);
    formdata.append("countryname", countryname);
    formdata.append("message", message);

    // let subject = "Contact Us"
    let html =
      `<html>
      <head>
        <title>Contact Us</title>
      </head>
      <body>
        <div>
          <h1>Service Request - Askgalore.nl</h1>
          <h4>Fullname : ${firstName}</h4>
          <h4>Phone : ${phone}</h4>
          <h4>Email : ${email}</h4>
          <h4>Country : ${countryname}</h4>
          <h4>Message : ${message}</h4>
        </div>
      </body>
      </html>`
    let toRecipients = {
      to: [
        { address: "jitendrabakoria@askgalore.com", displayName: "Jitendra" },
        { address: "o.juszt@askgalore.nl", displayName: "Juszt Otto" },
        { address: "kunaltomar@agomic.com", displayName: "Kunal Tomar" },
        { address: "himanigurnani@agomic.com", displayName: "Himani Gurnani" },
        { address: "bhanupriya@agomic.com", displayName: "Bhanupriya Prasad" },
        { address: "pradeep@agomic.com", displayName: "Pradeep Bande" },
      ],
    };

    axiosPost('api/send-email', { html, subject, toRecipients, firstName, phone, email, message })
      .then((res) => {
        console.log("Test ---", res)
        alert("Thanks for contacting us. We will connect with you soon!");
      })
      .catch((error) => {
        console.log("Error --- ", error)
      })
  }

  return (
    <>
      <div className="banner-item">
        <div className="banner-item-img">
          <div className="banner-shape">
            <div className="shape-in1">
              <h4 className={`text-center p-3 ${dark ? 'text-light' : ''}`}>
                You can send us a message. <br></br>We will get in touch with you ASAP.
              </h4>

              <form>
                <div className="fg mt-3">
                  {" "}
                  <input
                    type="text"
                    name="username"
                    placeholder="Name"
                    onChange={e => setfirstName(e.target.value)}
                  />
                </div>
                <div className="fg ">
                  <input
                    type="phone-number"
                    name="phone"
                    placeholder="Phone Number"
                    onChange={e => setphone(e.target.value)}
                  />
                </div>
                <div className="fg">
                  <input
                    type="email"
                    name="username"
                    placeholder="Email Address"
                    onChange={e => setemail(e.target.value)}
                  />
                </div>
                <div className="fg">
                  <input
                    type="text"
                    name="username"
                    placeholder="Subject"
                    onChange={e => setSubject(e.target.value)}
                  />
                </div>

                <div className="fg">
                  {/* <label for="countries">Country</label> */}
                  <select id="countries" name="countries" placeholder="Select Country" onChange={e => setCountryName(e.target.value)}>
                    <option selected>Select Country</option>
                    {
                      cc.country.map((ele) => {
                        return (<option key={ele} value={ele}>{ele}</option>);
                      })
                    }
                  </select>
                </div>
                <div className="fg">
                  <textarea
                    className="textarea-1"
                    type="text"
                    placeholder="Your Message"
                    onChange={e => setmessage(e.target.value)}
                  />
                </div>

                <div className="mt-5">
                  <button onClick={handleSubmit} type="button" class="bx9 container mt-4 mb-3 ">
                    SEND MESSAGE
                  </button>
                </div>

              </form>

            </div>

          </div>
        </div>
      </div>
    </>
  )
}
