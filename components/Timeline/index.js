"use client";

import { motion } from "framer-motion";

const WorkExperienceTimeline = ({ experiences }) => {
  return (
    <>
      <div className="space-y-14 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-600 before:to-transparent">
        {experiences.map(({ company, title, work_mode, duration, tags }, i) => (
          <motion.div
            className="relative flex items-center justify-between md:justify-normal md:even:flex-row-reverse group is-active"
            key={i}
            initial={{ opacity: 0, x: i % 2 == 0 ? 100 : -100, y: 0 }}
            transition={{ duration: 0.7 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ top: -20, bottom: -20, once: false }}
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-700 bg-gray-600 group-[.is-active]:bg-gray-700 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-even:-translate-x-1/2 md:group-odd:translate-x-1/2"></div>
            <div className="w-[calc(100%-4rem)] me-10 md:me-0 md:w-[calc(50%-2.5rem)] bg-black/10 md:border-b border-gray-600 p-4 min-h-[150px]">
              <div className="flex flex-col sm:lg:flex-row md:flex-col sm:lg:items-center justify-between mb-4 space-x-2 sm:lg:mb-2">
                <div className="font-bold text-gray-300">
                  <h3 className="text-xl md:text-2xl">{company}</h3>
                </div>
                <time className="font-caveat font-medium text-gray-500 italic">
                  {duration}
                </time>
              </div>
              <div className="text-slate-300">
                {title} <span className="italic">({work_mode})</span>
              </div>
              <div className="w-full flex flex-wrap gap-2 *:rounded-sm py-3 *:px-2 *:py-1 *:cursor-pointer text-gray-300">
                {tags.map((item, i) => (
                  <div key={i} className="text-sm bg-black/25 hover:bg-black">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default WorkExperienceTimeline;
