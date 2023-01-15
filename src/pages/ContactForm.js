import React, { useRef } from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/ContactForm.css";
const ContactForm = () => {

  const [open, setOPen] = useState(false);

  const msgMe=()=>{
    setOPen(!open);
  }
  const closeMsg=()=>{
    setOPen(false);
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

  emailjs
    .sendForm(
      "service_wr7nk45",
      "template_btxa5ml",
      form.current,
      "uZ-RU64qFbmLFy-WG"
    )
    .then(
      (result) => {
        console.log(result.text);
        console.log("message sent");
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  return (
    <div className="contact-wrap">
      <div className="wrap-button">
      <button className="clicker" onClick={msgMe}>Let's get in touch!</button>
      </div>
      
    {open && (
    <div className="card">
      
      <div className="header">
        <button className="btn btn-danger" onClick={closeMsg}> X </button>
      </div>
      <div>
        <form ref={form} onSubmit={sendEmail}>
          <h4>Let's get in touch!</h4>
          <br/>
            <input className="form-control" type="text" name="user_name" placeholder="Name" required/>
            <br/>
            <input className="form-control" type="email" name="user_email" placeholder="Email" required />
            <br/>
            <textarea className="form-control" name="message" placeholder="Your Message" required />
            <br/>
            <input className="btn btn-danger" type="submit" value="Send" />
        </form>
      </div>
      
    </div>
    )}
    </div>
  )
}
export default ContactForm