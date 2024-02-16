import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDot } from "@fortawesome/free-solid-svg-icons";

const ContentLine = ({ content }) => {
  const contentRef = useRef();

  const { scrollYProgress } = useScroll({
    target: contentRef,
    crossfade: true,
    offset: ["start 75%", "center start"],
  });

  const scrollValue = useTransform(scrollYProgress, [0, 0.05], ["100%", "0%"]);
  const clipPathVal = useMotionTemplate`inset(0% ${scrollValue} 0% 0%)`;

  return (
    <span className="text-container" ref={contentRef}>
      <motion.span
        style={{ clipPath: clipPathVal }}
        className="highlighted-text"
        data-text={content}
      />
      <span className="static-text">{content}</span>
    </span>
  );
};

export const ScrollText = ({ content }) => {
  return (
    <>
      {content.map((item) => (
        <span key={item} className="">
          <h2 className="text-xl md:text-3xl my-8 text-gray-700/30 font-bold leading-10">
            <ContentLine key={item} content={item} />
          </h2>
          <FontAwesomeIcon
            icon={faCircleDot}
            className="text-gray-600"
            size="xs"
          />
        </span>
      ))}
    </>
  );
};
