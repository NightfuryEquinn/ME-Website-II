"use client";

import BackButton from "@/components/BackButton";
import MainDivider from "@/components/MainDivider";
import { Animator, FrameOctagon, Text } from "@arwes/react";
import { SkillCategory, skills, SkillsProps } from "../../../data/skills";
import { certification, CertificationProps } from "../../../data/certifications";
import CertCard from "@/components/CertCard";

export default function SkillsMain() {
  const clonedSkills = skills
  const groupedSkills = clonedSkills.reduce(( prev, curr: SkillsProps ) => {
    if ( !prev[ curr.category ]) {
      prev[ curr.category ] = []
    }

    prev[ curr.category ].push( curr )
    return prev;
  }, {} as Record<SkillCategory, SkillsProps[]>)

  return (
    <>
      <Animator active combine manager="stagger" duration={{ stagger: 0.125 }}>
        <div className="p-5 lg:p-10">
          <BackButton />

          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <MainDivider text="Certification Hexes" />
              <div className="grid gap-x-8 gap-y-4 md:grid-cols-2">
                {
                  certification.map(( cert: CertificationProps, index: number ) => (
                    <CertCard key={ index } { ...cert } />
                  ))
                }
              </div>
            </div>

            <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
              {
                Object.entries( groupedSkills ).map(([ category, skills ]) => (
                  <div key={ category } className="flex flex-col gap-4">
                    <MainDivider text={ `${ category } Hexes` } />
                    <div className="grid gap-x-8 gap-y-4 lg:grid-cols-2">
                      {
                        skills.map(( skill: SkillsProps, index: number ) => (
                          <div key={ index } className="relative flex justify-center items-center">
                            <Animator>
                              <FrameOctagon className="skill-frame" />
                              <div className="p-4">
                                <Animator>
                                  <Text
                                    as="p"
                                    manager="sequence"
                                    className="text-lg text-center tracking-wider text-white"
                                    fixed
                                  >
                                    { skill.title }
                                  </Text>
                                </Animator>  
                              </div>
                            </Animator>
                          </div>
                        ))
                      }
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </Animator>
    </>
  )
}
