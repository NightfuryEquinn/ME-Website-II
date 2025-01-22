"use client"

import BackButton from "@/components/BackButton";
import DetailCard from "@/components/DetailCard";
import { Animator } from "@arwes/react";
import { educations, EducationsProps } from "../../../data/educations";
import MainDivider from "@/components/MainDivider";

export default function EducationMain() {
  return (
    <>
      <Animator active combine manager="stagger" duration={{ stagger: 0.125 }}>
        <div className="p-5 lg:p-10">
          <BackButton />

          <div className="flex flex-col gap-4">
            <MainDivider text="Education Chronicles" />
            <div className="grid gap-x-8 gap-y-4 lg:grid-cols-2 2xl:grid-cols-3">
              {
                educations.map(( education: EducationsProps ) => (
                  <DetailCard key={ education.id } { ...education } />
                ))
              }
            </div>
          </div>
        </div>
      </Animator>
    </>
  )
}
