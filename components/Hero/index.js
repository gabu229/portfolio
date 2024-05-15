import Link from "next/link";
import {
  faGithubSquare,
  faLinkedin,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowTurnDown,
  faCloudDownload,
  faFileDownload,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const Hero = () => {
  const lineTransition = {
    initial: {
      height: 0,
    },
    animate: {
      height: "auto",
      transition: {
        delay: 2.55,
        duration: 0.45,
      },
    },
  };

  const rightTransition = {
    initial: {
      opacity: 0,
      x: 50,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 3.2,
        duration: 0.7,
        staggerChildren: 0.25,
      },
    },
  };

  const leftTransition = {
    initial: {
      opacity: 0,
      x: -100,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 3,
        duration: 0.7,
        staggerChildren: 0.25,
      },
    },
  };

  return (
    <section
      className="section-block bg-slate-900/95 backdrop-blur-[6px]"
      id="heroSection"
    >
      <div className="flex flex-col sm:flex-row justify-center sm:items-center w-100">
        <div className="text-right flex flex-col justify-center align-middle px-3 overflow-hidden">
          <motion.div
            variants={rightTransition}
            initial="initial"
            animate="animate"
          >
            <h3 className="text-2xl sm:text-3xl">
              full
              <br />
              stack
              <br />
              developer
            </h3>
          </motion.div>
        </div>
        <motion.div
          variants={lineTransition}
          initial="initial"
          animate="animate"
          className="border-l px-3 overflow-hidden"
        >
          <motion.div
            variants={leftTransition}
            initial="initial"
            animate="animate"
          >
            <h1 className="text-7xl md:text-9xl font-bold">
              Gabriel
              <br />
              Orie
            </h1>
          </motion.div>
          <div className="text-end mt-8">
            <Link href="/" download>
              <button className="bg-slate-900 px-4 py-3 hover:bg-slate-600 transition">
                <FontAwesomeIcon
                  icon={faCloudDownload}
                  className="mr-3 sm:mr-4"
                  size="1x"
                />
                Download Resume
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
      <div className="w-100 min-w-[100vw] fixed bottom-0 text-center">
        <div className="flex">
          <div></div>
          <div className="flex my-3 mx-auto">
            <Link
              href="https://www.linkedin.com/in/orie-gabriel/"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="mx-3 sm:mx-5"
                size="2x"
              />
            </Link>
            <Link href="https://github.com/gabu229" target="_blank">
              <FontAwesomeIcon
                icon={faGithubSquare}
                className="mx-3 sm:mx-5"
                size="2x"
              />
            </Link>
            <Link href="https://twitter.com/orie_gabriel" target="_blank">
              <FontAwesomeIcon
                icon={faTwitterSquare}
                className="mx-3 sm:mx-5"
                size="2x"
              />
            </Link>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
