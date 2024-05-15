"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowRight, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const form = useRef();

  const [btnDisabled, setBtnDisabled] = useState(false);
  const [btnContent, setBtnContent] = useState("Send message");

  const [nameField, setNameField] = useState("");
  const [emailField, setEmailField] = useState("");
  const [messageField, setMessageField] = useState("");

  const sendEmail = (e) => {
    const validateEmail = (email) => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(String(email).toLowerCase());
    };

    const toastPopUp = toast.loading("Please wait...", {
      position: "bottom-right",
      theme: "dark",
      autoClose: 3000,
    });

    setBtnDisabled(true);
    setBtnContent("Sending...");
    e.preventDefault();

    console.warn(form.current[0].value);

    // return;
    if (!validateEmail(form.current[0].value)) {
      toast.update(toastPopUp, {
        render: "Email is invalid!",
        type: "error",
        isLoading: false,
        autoClose: 3000,
        hideProgressBar: true,
      });

      setBtnContent("Try again");
      setBtnDisabled(false);
      return false;
    }

    emailjs
      .sendForm("service_5sqh1ra", "template_kzf2nnb", form.current, {
        publicKey: "73Z5oWXAxDTJD5ThU",
      })
      .then(
        () => {
          toast.update(toastPopUp, {
            render: "Message sent successfully",
            type: "success",
            isLoading: false,
            autoClose: 3000,
            hideProgressBar: true,
          });

          setNameField("");
          setEmailField("");
          setMessageField("");
          console.log("SUCCESS!");

          setBtnDisabled(false);
          setBtnContent("Send message");
        },
        (error) => {
          toast.update(toastPopUp, {
            render: "Sending failed.",
            type: "error",
            isLoading: false,
            autoClose: 3000,
            hideProgressBar: true,
          });

          setBtnDisabled(false);
          setBtnContent("Try again");

          console.log("FAILED...", error.text);
        }
      );
  };

  const handleNameChange = (e) => {
    setNameField(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmailField(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessageField(e.target.value);
  };

  return (
    <div className="max-w-[600px] px-3">
      <div className="mb-8">
        <h3 className="header">Leave a message</h3>
      </div>
      <form
        onSubmit={sendEmail}
        ref={form}
        autoComplete="off"
        autoCorrect="off"
        className="space-y-4 md:space-y-12"
      >
        <div className="mb-4">
          <input
            value={emailField}
            onChange={handleEmailChange}
            type="email"
            name="email"
            id="email"
            className=""
            placeholder="Your email"
            required
          />
        </div>
        <div className="mb-4">
          <input
            value={nameField}
            onChange={handleNameChange}
            type="text"
            name="full_name"
            id="name"
            className=""
            placeholder="Your name"
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            value={messageField}
            onChange={handleMessageChange}
            type="text"
            name="message"
            id="message"
            placeholder="Your message..."
            rows={5}
            className=""
            required
          />
        </div>

        <div className="w-full text-end ">
          <button
            type="submit"
            className="bg-slate-900 px-4 py-3 hover:bg-slate-700 transition"
            disabled={btnDisabled}
          >
            {btnContent}
            <FontAwesomeIcon
              icon={faPaperPlane}
              className="ml-3 sm:ml-5"
              size="1x"
            />
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ContactForm;
