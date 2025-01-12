"use client";

import SectionCard from "@/components/SectionCard";
import { Animator } from "@arwes/react";

export default function Home() {
  return (
    <>
      <div className="w-full md:h-screen">
        <Animator active manager="parallel">
          <div className="p-5 lg:p-10 h-full grid grid-cols-1 grid-rows-6 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 gap-10">
            <SectionCard text="Careers" image="/assets/icons/careers.png" />
            <SectionCard text="Educations" image="/assets/icons/educations.png" />
            <SectionCard text="Interests" image="/assets/icons/interests.png" />
            <SectionCard text="Events" image="/assets/icons/events.png" />
            <SectionCard text="Personal" image="/assets/icons/personal.png" />
            <SectionCard text="Skills" image="/assets/icons/skills.png" />
          </div>
        </Animator>
      </div>
    </>
  )
}
