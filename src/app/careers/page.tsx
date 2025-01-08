"use client";

import BackButton from "@/components/BackButton";
import DetailCard from "@/components/DetailCard";
import { Animator } from "@arwes/react";
import { careers, CareersProps } from "../../../data/careers";

export default function CareerMain() {
  return (
    <>
      <Animator active combine manager="stagger" duration={{ stagger: 0.125 }}>
        <div className="p-5 lg:p-10">
          <BackButton />
          <div className="h-full grid gap-7 lg:grid-cols-2 2xl:grid-cols-3">
            {
              careers.map(( career: CareersProps ) => (
                <DetailCard key={ career.id } {...career} />
              ))
            }
          </div>
        </div>
      </Animator>
    </>
  )
}
