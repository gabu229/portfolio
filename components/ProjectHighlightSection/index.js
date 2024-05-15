import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { projects } from "@/utils/project-highlights";

const text = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.7,
      staggerChildren: 0.5,
    },
  },
};

const StaggerAnimate = ({ projects }) => {
  return (
    <>
      <motion.div
        variants={text}
        initial="initial"
        animate="animate"
        whileInView="animate"
        viewport={{ once: false, amount: 0.8 }}
        className="bg-black/0 grid md:grid-cols w-full gap-32 p-2 md:py-10 md:p-5"
      >
        {projects.map((item, index) => (
          <motion.div
            className="w-full flex even:justify-end"
            key={index}
            initial={{ opacity: 0, x: index % 2 == 0 ? 100 : -100, y: 0 }}
            transition={{ duration: 0.7 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ top: 0, bottom: 0.4, once: false }}
          >
            <ProjectCard i={index} project={item} />
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

const ProjectCard = ({ project, i }) => {
  return (
    <div className="max-w-[650px] even:float-end">
      <div
        className={`text-[10rem] md:text-[12rem] font-extrabold absolute -ms-16 -mt-24 md:-ms-20 md:-mt-28 text-white/15 md:text-white/5`}
      >
        0{i + 1}
      </div>
      <div className="bg-black/10 w-full md:border-b p-4 min-h-[200px]">
        <h4 className="text-2xl md:text-3xl font-semibold text-gray-300">
          {project.title}
        </h4>
        <div className="py-2">
          <p className="text-gray-400">{project.description}</p>
        </div>
        <div className="w-full flex flex-wrap gap-2 *:rounded-sm py-3 *:px-2 *:py-1 *:cursor-pointer text-gray-300">
          {project.skills.map((skill, index) => (
            <div key={index} className="text-sm bg-black/25 hover:bg-black">
              {skill}
            </div>
          ))}
        </div>
        <div className="my-2 w-full flex gap-3">
          <Link href={project.github} target="_blank">
            <button className="bg-slate-900 px-4 py-3 hover:bg-slate-700 transition">
              <FontAwesomeIcon icon={faGithub} size="xl" />
            </button>
          </Link>
          <Link href={project.preview} target="_blank">
            <button className="bg-slate-900 px-4 py-3 hover:bg-slate-700 transition">
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="me-3 sm:me-5"
                size="xl"
              />
              View Project
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const ProjectHighlightSection = () => {
  return (
    <>
      <section
        className="section-block bg-slate-950 py-10 md:px-36 gap-10"
        id="projectSection"
      >
        <div className="w-100 p-4">
          <h2 className="header">Project Highlights</h2>
        </div>
        <div className="w-100 gap-8">
          <div className="min-h-[70vh]">
            <StaggerAnimate projects={projects} />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectHighlightSection;
