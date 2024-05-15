"use client";

import React, { useEffect, useState } from "react";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { VscChromeClose } from "react-icons/vsc";
import { motion, px } from "framer-motion";

const smoothScrollToElement = (id) => {
  const element = document.getElementById(id);

  if (element) {
    setTimeout(() => {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 0);
  }
};

const MainNavbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarClass = navbarOpen ? "open" : "closed";

  const toggleNavbar = (state) => {
    setNavbarOpen(!navbarOpen);
    document.body.style.overflow = navbarOpen ? "auto" : "hidden";
  };

  return (
    <>
      <style jsx global>{`
        body.navbar-open {
          overflow: hidden;
        }
      `}</style>

      <header className="fixed top-0 right-0 z-[9999] overflow-hidden">
        <div className="p-2">
          <motion.button
            className="p-2 sm:p-5 hover:bg-accent-50 z-[99] bg-slate-900"
            type="button"
            onClick={toggleNavbar}
            initial={{ opacity: 1, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 1, x: 100 }}
            transition={{ duration: 1, delay: 3 }}
          >
            {navbarOpen ? (
              <VscChromeClose size={40} />
            ) : (
              <HiMiniBars3BottomRight size={40} />
            )}
          </motion.button>
        </div>
      </header>

      {navbarOpen && (
        <motion.div
          className={`navbar-block ${navbarClass}`}
          onClick={toggleNavbar}
          initial={{ backdropFilter: "none" }}
          animate={{ backdropFilter: "blur(12px)" }}
          exit={{ backdropFilter: "none" }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="w-full max-w-[450px]"
            initial={{ opacity: 1, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 1, x: 100 }}
            transition={{ duration: 0 }}
          >
            <ul className="tracking-wide flex-col flex gap-6 text-end *:pe-12">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ delay: 0.2 }}
                onClick={() => toggleNavbar(false)}
              >
                <p
                  onClick={() => smoothScrollToElement("heroSection")}
                  className="block hover:-translate-x-10 text-end py-2 md:px-4 transition-all duration-500 cursor-pointer"
                >
                  <span className="header">Home</span>
                </p>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ delay: 0.3 }}
                onClick={() => toggleNavbar(false)}
              >
                <p
                  onClick={() => smoothScrollToElement("aboutSection")}
                  className="block hover:-translate-x-10 text-end py-2 md:px-4 transition-all duration-500 cursor-pointer"
                >
                  <span className="header">About</span>
                </p>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ delay: 0.4 }}
                onClick={() => toggleNavbar(false)}
              >
                <p
                  onClick={() => smoothScrollToElement("projectSection")}
                  className="block hover:-translate-x-10 text-end py-2 md:px-4 transition-all duration-500 cursor-pointer"
                >
                  <span className="header">Projects</span>
                </p>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ delay: 0.5 }}
                onClick={() => toggleNavbar(false)}
              >
                <p
                  onClick={() => smoothScrollToElement("techSection")}
                  className="block hover:-translate-x-10 text-end py-2 md:px-4 transition-all duration-500 cursor-pointer"
                >
                  <span className="header">Tech Stack</span>
                </p>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ delay: 0.6 }}
                onClick={() => toggleNavbar(false)}
              >
                <p
                  onClick={() => smoothScrollToElement("experienceSection")}
                  className="block hover:-translate-x-10 text-end py-2 md:px-4 transition-all duration-500 cursor-pointer"
                >
                  <span className="header">Experience</span>
                </p>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ delay: 0.7 }}
                onClick={() => toggleNavbar(false)}
              >
                <p
                  onClick={() => smoothScrollToElement("contactSection")}
                  className="block hover:-translate-x-10 text-end py-2 md:px-4 transition-all duration-500 cursor-pointer"
                >
                  <span className="header">Contact</span>
                </p>
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default MainNavbar;
