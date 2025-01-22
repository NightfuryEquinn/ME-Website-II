"use client";

import BackButton from "@/components/BackButton";
import MainDivider from "@/components/MainDivider";
import { Animator } from "@arwes/react";
import { events, EventsProps } from "../../../data/events";
import DetailCard from "@/components/DetailCard";
import { achievements, AchievementsProps } from "../../../data/achievements";

export default function EventsMain() {
  return <>
    <Animator active combine manager="stagger" duration={{ stagger: 0.125 }}>
      <div className="p-5 lg:p-10">
        <BackButton />
        
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <MainDivider text="Event Anomalies" />
            <div className="grid gap-x-8 gap-y-4 lg:grid-cols-2 2xl:grid-cols-3">
              {
                events.map(( event: EventsProps ) => (
                  <DetailCard key={ event.id } { ...event } />
                ))
              }
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            <MainDivider text="Achievement Singularities" />
            <div className="grid gap-x-8 gap-y-4 lg:grid-cols-2 2xl:grid-cols-3">
              {
                achievements.map(( achievement: AchievementsProps ) => (
                  <DetailCard key={ achievement.id } { ...achievement } />
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </Animator>
  </>
}
