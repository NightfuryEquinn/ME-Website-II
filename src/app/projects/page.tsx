"use client";

import BackButton from "@/components/BackButton";
import DetailCard from "@/components/DetailCard";
import MainDivider from "@/components/MainDivider";
import { Animator } from "@arwes/react";
import { projects, ProjectsProps } from "../../../data/projects";

export default function ProjectsMain() {
  return (
    <>
      <Animator active combine manager="stagger" duration={{ stagger: 0.125 }}>
        <div className="p-5 lg:p-10">
          <BackButton />

          <div className="flex flex-col gap-4">
            <MainDivider text="Project Journals" />
            <div className="grid gap-x-8 gap-y-4 lg:grid-cols-2 2xl:grid-cols-3">
              {
                projects.map(( project: ProjectsProps ) => (
                  <DetailCard key={ project.id } { ...project } />
                ))
              }
            </div>
          </div>
        </div>
      </Animator>
    </>
  )
}
