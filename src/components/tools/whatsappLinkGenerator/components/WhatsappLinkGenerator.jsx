import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MuiTelInput } from 'mui-tel-input'
import Codes from "../data/Codes"
import {  styled } from "@mui/material";


const WhatsappLinkGenerator = ({ /* OpenLink */ }) => {
  const [link, setLink] = useState("")
  const [number, setNumber] = useState("")
  const [message, setMessage] = useState("")
  //console.log("Codes",Codes)
  const onSubmit = (e) => {
    e.preventDefault();

    if (number.length < 1) {
      toast.error('Please enter a phone number', {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      let customMessage = message;
      let customPhone = number;
      let customPhoneSpace = customPhone.replaceAll(" ", "")
      Codes && Codes.map((code, index) => {
        if (customMessage.includes(code.content)) {
          let messageReplace = customMessage.replaceAll(code.content, code.replace)
          customMessage = messageReplace
        }
      })
      setLink(`https://api.whatsapp.com/send?phone=${customPhoneSpace.replaceAll("+", "")}${customMessage ? "&text=" + customMessage + "%20" : ""}`)
    }
  };
  const copyLink = (e) => {
    e.preventDefault()
    if (link) {
      navigator.clipboard.writeText(link);
      toast.success('Link Message Copied!', {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      toast.error('Please fill the form', {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }

console.log("numdae",number)
  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <label
          htmlFor="phone"
          className="input-label"
        >What's your phone number?</label>
        {/* <PhoneInput
          id="phone"
          specialLabel={''}
          country={'us'}
          value={number}
          inputClass="phone-input"
          placeholder={"What's your phone number?"}
          onChange={(phone) => setNumber(phone)}
        /> */}
        <MuiTelInput value={number} defaultCountry="US"   onChange={(phone) => setNumber(phone)} />
        <label
          htmlFor="phone"
          className="input-label-remind"
        >
          Don't forget to add area code as well as choosing your country.
        </label>

        <label
          htmlFor="message"
          className="input-label label-message"
        >
          What message do you want your customers to see when they contact you? (optional)
        </label>
        <textarea
          name="message"
          id="message"
          className="input"
          placeholder="Here can go your message"
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button className="send-btn" type="submit">
          Create Link
        </button>
      </form>
      {
        link ?
          <div className='clipboard-cont-cont'>
            <label
              htmlFor="whatsappLink"
              className="input-label"
            >
              Copy your Whatsapp link
            </label>
            <div name="whatsappLink" className='clipboard-cont' onClick={copyLink}>
              <p className="text-clipboard">{link ? link : ""}</p>
              <button className='copy-btn'>
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#1a202a" className="bi bi-clipboard-check" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                  <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                  <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                </svg>
              </button>
            </div>
          </div>
          :
          null
      }
    </div >
  );
};

export default WhatsappLinkGenerator;