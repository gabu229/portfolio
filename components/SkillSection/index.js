import { motion } from "framer-motion";

import { skills } from "@/utils/skills";

const SkillSection = () => {
  return (
    <>
      <section className="section-block bg-slate-900 py-10 md:px-36 md:gap-5 sticky top-0" id="techSection">
        <div className="w-100 p-4">
          <h2 className="header">My Tech Stack</h2>
        </div>
        <div className="w-100 gap-8 mb-14">
          <div className="min-h-[70vh] md:px-2">
            {skills.map((skill, index) => (
              <motion.div
                className="my-10 px-6 py-12 w-full border-b md:flex bg-black/10"
                key={index}
                initial={{ opacity: 0, x: index % 2 == 0 ? 100 : -100, y: 0 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ top: 0, bottom: 0.4, once: false }}
              >
                <div className="min-w-[40vw] text-xl md:text-2xl font-bold">
                  <h3 className="">{skill.title}:</h3>
                </div>
                <div className="mt-3 md:mt-0">
                  <h3 className="text-xl md:text-2xl font-normal leading-[4rem] tracking-wide">
                    {skill.skills.map((item, i) => (
                      <span key={i}>
                        {item.technology}
                        {i + 1 >= skill.skills.length ? "." : ", "}
                      </span>
                    ))}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SkillSection;
