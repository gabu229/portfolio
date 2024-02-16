import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowRight, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [disabledSubmit, setDisabledSubmit] = useState(false);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleNameChange = (e) => setName(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);

  const clearInputs = () => {
    setEmail("");
    setMessage("");
    setName("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
  };

  return (
    <div className="max-w-[600px] px-3">
      <div className="mb-8">
        <h3 className="header">
          Leave a message
        </h3>
      </div>
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        autoCorrect="off"
        className="space-y-4 md:space-y-12"
      >
        <div className="mb-4">
          {/* <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-500"
          >
            Email
          </label> */}
          <input
            value={email}
            onChange={handleEmailChange}
            type="email"
            name="email"
            id="email"
            className=""
            placeholder="Your email"
            required=""
          />
        </div>
        <div className="mb-4">
          {/* <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-500"
          >
            Your name
          </label> */}
          <input
            value={name}
            onChange={handleNameChange}
            type="text"
            name="full_name"
            id="name"
            className=""
            placeholder="Your name"
            required=""
          />
        </div>
        <div className="mb-4">
          {/* <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-500"
          >
            Your message
          </label> */}
          <textarea
            value={message}
            onChange={handleMessageChange}
            type="text"
            name="message"
            id="message"
            placeholder="Your message..."
            rows={5}
            className=""
            required=""
          />
        </div>

        <div className="w-full text-end ">
          <button
            type="submit"
            className="bg-slate-900 px-4 py-3 hover:bg-slate-700 transition"
          >
            Send message
            <FontAwesomeIcon
              icon={faPaperPlane}
              className="ml-3 sm:ml-5"
              size="1x"
            />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
