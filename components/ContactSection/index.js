import Link from "next/link";
import {
  faGithubSquare,
  faLinkedin,
  faSquareGithub,
  faTwitter,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRight,
  faArrowTurnDown,
  faEnvelope,
  faEnvelopeSquare,
} from "@fortawesome/free-solid-svg-icons";
import {
  SiFacebook,
  SiInstagram,
  SiLinkedin,
  SiOrcid,
  SiResearchgate,
  SiScopus,
  SiWhatsapp,
  SiGmail,
  SiGooglescholar,
  SiGithub,
  SiX,
} from "react-icons/si";
import { MdAlternateEmail } from "react-icons/md";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <>
      <section
        className="section-block bg-slate-950 py-10 md:px-36 gap-5 sticky top-0"
        id="contactSection"
      >
        <div className="w-100 p-4">
          <h2 className="text-3xl md:text-5xl font-bold"></h2>
        </div>
        <div className="w-full">
          <div className="min-h-[70vh] w-full md:flex flex-1 justify-between">
            <div className="flex items-center min-w-[30vw]">
              <div className="w-full grid grid-cols-3 md:grid-cols-3 gap-3">
                <Link
                  rel="noreferrer"
                  href="https://github.com/gabu229"
                  target="_blank"
                  className="hover:opacity-100"
                >
                  <div className="aspect-square bg-slate-900/60 hover:bg-slate-900 flex items-center justify-center">
                    <SiGithub size={30} />
                  </div>
                </Link>
                <Link
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/orie-gabriel"
                  target="_blank"
                  className="hover:opacity-100"
                >
                  <div className="aspect-square bg-slate-900/60 hover:bg-slate-900 flex items-center justify-center">
                    <SiLinkedin size={30} />
                  </div>
                </Link>
                <Link
                  rel="noreferrer"
                  href="https://x.com/orie_gabriel"
                  target="_blank"
                  className="hover:opacity-100"
                >
                  <div className="aspect-square bg-slate-900/60 hover:bg-slate-900 flex items-center justify-center">
                    <SiX size={30} />
                  </div>
                </Link>
                <Link
                  rel="noreferrer"
                  href="mailto: oriegabriel16@gmail.com"
                  target="_blank"
                  className="hover:opacity-100"
                >
                  <div className="aspect-square bg-slate-900/60 hover:bg-slate-900 flex items-center justify-center">
                    <SiGmail size={30} />
                  </div>
                </Link>
              </div>
            </div>
            <div className="my-16 min-w-[40vw]">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
