"use client";

import SectionCard from "@/components/SectionCard";
import { Animator } from "@arwes/react";

export default function Home() {
  return (
    <>
      <div className="w-full h-screen">
        <Animator active combine manager="stagger" duration={{ stagger: 0.25 }}>
          <div className="p-10 h-full grid grid-cols-3 grid-rows-2 gap-10">
            <SectionCard text="Careers" image="/assets/icons/career.png" />
            <SectionCard text="Educations" image="/assets/icons/education.png" />
            <SectionCard text="Interests" image="/assets/icons/interest.png" />
            <SectionCard text="Participations" image="/assets/icons/competition.png" />
            <SectionCard text="Personal" image="/assets/icons/personal.png" />
            <SectionCard text="Skills" image="/assets/icons/skill.png" />
          </div>
        </Animator>
      </div>
    </>
  )
}
