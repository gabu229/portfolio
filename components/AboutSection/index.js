import Image from "next/image";

import { ScrollText } from "@/components/Transitions/ScrollReadText";
import { aboutText } from "@/utils/about-note";

const AboutSection = () => {
  return (
    <section className="section-block bg-slate-900 py-16 md:px-36 gap-5" id="aboutSection">
      <div className="w-full p-4">
        <h2 className="header">About me</h2>
      </div>
      <div className="flex flex-col md:flex-row w-full gap-8">
        <div className="relative hidden md:block md:sticky md:top-0 md:py-6 max-h-[calc(70vh - 16rem)] overflow-y-auto">
          <Image
            className="w-full grayscale"
            width={1000}
            height={1000}
            src="https://avatars.githubusercontent.com/u/54124377?v=4"
            alt="bg"
            loading="lazy"
          />
        </div>
        <div className="bg-black/0 min-h-[70vh] md:flex-2 p-5">
          <ScrollText content={aboutText} />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
