import { experiences } from "@/utils/work-experiences";
import WorkExperienceTimeline from "../Timeline";

const WorkExperienceSection = () => {
  return (
    <>
      <section className="section-block bg-slate-950 py-10 md:px-36 gap-5 sticky top-0">
        <div className="w-100 p-4 md:text-center">
          <h2 className="header mx-auto">Work Experience</h2>
        </div>
        <div className="w-100 gap-8">
          <div className="min-h-[70vh] py-10">
            <WorkExperienceTimeline experiences={experiences} />
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkExperienceSection;
