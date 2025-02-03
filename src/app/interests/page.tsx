"use client";

import BackButton from "@/components/BackButton";
import InterestCard from "@/components/InterestCard";
import MainDivider from "@/components/MainDivider";
import VolunteerCard from "@/components/VolunteerCard";
import { Animator } from "@arwes/react";
import { interests, InterestsProps } from "../../../data/interests";
import { volunteers, VolunteersProps } from "../../../data/volunteer";

export default function InterestsMain() {
  return (
    <>
      <Animator active combine manager="stagger" duration={{ stagger: 0.125 }}>
        <div className="p-5 lg:p-10">
          <BackButton />

          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <MainDivider text="Interest Allures" />
              <div className="grid gap-x-8 gap-y-4 lg:grid-cols-2 2xl:grid-cols-3">
                {
                  interests.map(( interest: InterestsProps ) => (
                    <InterestCard key={ interest.id } { ...interest } />
                  ))
                }
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <MainDivider text="Volunteer Cases" />
              <div className="grid gap-x-8 gap-y-4 lg:grid-cols-2 2xl:grid-cols-3">
                {
                  volunteers.map(( volunteer: VolunteersProps ) => (
                    <VolunteerCard key={ volunteer.id } { ...volunteer } />
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </Animator>
    </>
  )
}
