"use client";
import { AnimatePresence, motion } from "framer-motion";

const transitionSpringPhysics = {
  duration: 2,
  type: "spring",
  mass: 0.2,
  stiffness: 80,
  damping: 10,
};

export default function Template({ children }) {
  return (
    <>
      {/* <AnimatePresence mode="wait" initial="false"> */}
        <motion.div key={1}>
          <motion.div
            style={{
              backgroundColor: "#000",
              position: "fixed",
              width: "100vw",
              zIndex: 1000,
              bottom: 0,
            }}
            transition={transitionSpringPhysics}
            animate={{ height: "0vh" }}
            exit={{ height: "100vh", transition: { duration: 0.3 } }}
          />

          <motion.div
            style={{
              backgroundColor: "#000",
              position: "fixed",
              width: "100vw",
              zIndex: 1000,
              top: 0,
            }}
            transition={transitionSpringPhysics}
            initial={{ height: "100vh" }}
            animate={{ height: "0vh", transition: { delay: 1.5, duration: 0.4 } }}
          >
            <motion.div
              initial={{ duration: 0 }}
              animate={{ display: "none", transition: { delay: 1.5 } }}
              className="relative flex justify-center items-center text-white font-light w-full min-h-screen"
            >
              <div className="w-full max-w-[500px] min-h-[20px] mx-3 px-3 sm:px-8 py-10 border text-lg animate-pulse">
                <p className="w-full my-2 text-start">
                  <span className="w-full">
                    Simplicity is the ultimate sophistication.
                  </span>
                </p>
                <p className="w-full my-2 text-end">
                  <span className="w-full">- Leonardo da Vinci</span>
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            style={{
              backgroundColor: "#41635e",
              position: "fixed",
              width: "100vw",
              zIndex: 999,
              top: 0,
            }}
            transition={transitionSpringPhysics}
            initial={{ height: "100vh" }}
            animate={{ height: "0vh", transition: { delay: 1.5, duration: 0.6 } }}
          />

          <motion.div
            style={{
              backgroundColor: "#2e3447",
              position: "fixed",
              width: "100vw",
              zIndex: 998,
              top: 0,
            }}
            transition={transitionSpringPhysics}
            initial={{ height: "100vh" }}
            animate={{ height: "0vh", transition: { delay: 1.5, duration: 0.8 } }}
          />
          {children}
        </motion.div>
      {/* </AnimatePresence> */}
    </>
  );
}
