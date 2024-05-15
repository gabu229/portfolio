"use client";

import Image from "next/image";
import { useEffect } from "react";

import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProjectHighlightSection from "@/components/ProjectHighlightSection";
import SkillSection from "@/components/SkillSection";
import ContactSection from "@/components/ContactSection";
import WorkExperienceSection from "@/components/WorkExperienceSection";
import CertificationsSection from "@/components/CertificationsSection";
import MainNavbar from "@/components/Navbar";

export default function Home() {
  useEffect(() => {
    const smoothScrollToElement = (id) => {
      const element = document.getElementById(id);

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 2500);
      }
    };

    const hash = window.location.hash.substring(1);
    if (hash) {
      smoothScrollToElement(hash);
    }
  }, []);

  return (
    <>
      <Image
        className="fixed w-full object-cover object-left-top min-h-screen grayscale inset-0 lg:-top-1/2 z-[-999]"
        width={1000}
        height={1000}
        src="https://avatars.githubusercontent.com/u/54124377?v=4"
        alt="bg"
        loading="lazy"
      />

      <main className="max-w-[100vw] snap-mandatory overflow-x-hidden">
        <MainNavbar />
        
        <Hero />

        <AboutSection />

        <ProjectHighlightSection />

        <SkillSection />

        <WorkExperienceSection />

        {/* <CertificationsSection /> */}

        <ContactSection />
      </main>
    </>
  );
}
