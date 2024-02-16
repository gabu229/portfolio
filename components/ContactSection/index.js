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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <>
      <section className="section-block bg-slate-950 py-10 md:px-36 gap-5 sticky top-0">
        <div className="w-100 p-4">
          <h2 className="text-3xl md:text-5xl font-bold"></h2>
        </div>
        <div className="w-full">
          <div className="min-h-[70vh] w-full md:flex flex-1">
            <div className="flex items-center min-w-[40vw]">
              <div className="flex flex-col my-3 gap-4">
                <Link
                  href="mailto:oriegabriel16@gmail.com"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faEnvelopeSquare}
                    className="sm:mx-5 hover:-translate-y-2 transition-all"
                    size="2x"
                  />
                  oriegabriel16@gmail.com
                </Link>
                <Link
                  href="https://www.linkedin.com/in/orie-gabriel/"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="sm:mx-5 hover:-translate-y-2 transition-all"
                    size="2x"
                  />
                </Link>
                <Link href="https://github.com/gabu229" target="_blank">
                  <FontAwesomeIcon
                    icon={faGithubSquare}
                    className="sm:mx-5 hover:-translate-y-2 transition-all"
                    size="2x"
                  />
                </Link>
                <Link href="https://twitter.com/orie_gabriel" target="_blank">
                  <FontAwesomeIcon
                    icon={faTwitterSquare}
                    className="sm:mx-5 hover:-translate-y-2 transition-all"
                    size="2x"
                  />
                </Link>
              </div>
            </div>
            <div className="my-16 w-full">
                <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
