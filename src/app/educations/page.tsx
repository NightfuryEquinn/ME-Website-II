"use client"

import BackButton from "@/components/BackButton";
import DetailCard from "@/components/DetailCard";
import { Animator } from "@arwes/react";
import { educations, EducationsProps } from "../../../data/educations";

export default function EducationMain() {
  return (
    <>
      <Animator active combine manager="stagger" duration={{ stagger: 0.125 }}>
        <div className="p-5 lg:p-10">
          <BackButton />
          <div className="h-full grid gap-7 lg:grid-cols-2">
            {
              educations.map(( education: EducationsProps ) => (
                <DetailCard key={ education.id } { ...education } />
              ))
            }
          </div>
        </div>
      </Animator>
    </>
  )
}
