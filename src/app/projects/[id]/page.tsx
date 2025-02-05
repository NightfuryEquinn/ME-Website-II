"use client"

import { useParams } from "next/navigation"
import { projects, ProjectsProps } from "../../../../data/projects"
import BackButton from "@/components/BackButton"
import { Animator, FrameHeader, FrameLines, FrameNero, Text } from "@arwes/react"
import Image from "next/image"
import SkillBlock from "@/components/SkillBlock"

export default function ProjectDetails() {
  const { id } = useParams()
  const theProject = projects.find(( project: ProjectsProps ) => project.id.toString() === id )
    
  return (
    <>
      <Animator active combine manager="stagger" duration={{ stagger: 0.125 }}>
        <div className="p-5 lg:p-10">
          <BackButton />

          <div className="h-full">
            <div className="flex flex-col lg:grid lg:grid-cols-3 gap-5 lg:gap-8">
              <div className="col-span-1 flex flex-col gap-5">
                <Animator>
                  <div className="relative">
                    <FrameHeader className="logo-frame" contentLength={ 200 } decoWidth={ 5 } />
                    <div className="relative -top-2">
                      <Text
                        as="p" 
                        className="uppercase tracking-widest text-xl font-bold"
                        manager="sequence"
                        fixed
                      >
                        Journal { theProject?.id }
                      </Text>
                    </div>
                  </div>
                </Animator>

                <Animator>
                  <div className="relative z-10">
                    <FrameNero className="logo-frame" />
                    <Image className="p-5 mx-auto animate-fade animate-delay-200" width={ 300 } height={ 300 } src={ `/assets/images/${ theProject?.logo }` } alt={ `${ theProject?.title } Logo` } />
                  </div>
                </Animator>
              </div>

              <div className="relative lg:col-span-2">
                <FrameLines className="detail-frame" />
                <div className="p-5 flex flex-col gap-2">
                  <Animator>
                    <Text
                      as="p" 
                      className="my-2 uppercase tracking-widest text-4xl text-center"
                      manager="decipher"
                      fixed
                    >
                      { theProject?.title }
                    </Text>
                  </Animator>

                  <Animator>
                    <Text
                      as="p" 
                      className="text-sm leading-6 tracking-wider"
                      manager="sequence"
                      fixed
                    >
                      { theProject?.description }
                    </Text>
                  </Animator>

                  <Animator>
                    <div className="mt-2 overflow-hidden flex flex-row gap-4 items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="animate-fade min-w-6 text-pale-pink">
                        <path fill="currentColor" d="M11 17H7q-2.075 0-3.537-1.463T2 12t1.463-3.537T7 7h4v2H7q-1.25 0-2.125.875T4 12t.875 2.125T7 15h4zm-3-4v-2h8v2zm5 4v-2h4q1.25 0 2.125-.875T20 12t-.875-2.125T17 9h-4V7h4q2.075 0 3.538 1.463T22 12t-1.463 3.538T17 17z"/>
                      </svg>

                      <Text
                        as="a"
                        href={ `${ theProject?.redirect }` }
                        target="blank"
                        className="text-xs truncate tracking-widest text-white text-opacity-50 hover:text-opacity-100"
                        manager="sequence"
                        fixed
                      >
                        { theProject?.redirect }
                      </Text>
                    </div>
                  </Animator>

                  <hr className="my-5 border-0" />

                  <Animator>
                    <div className="mb-2 relative">
                      <FrameHeader className="logo-frame" contentLength={ 150 } decoWidth={ 5 } />
                      <div className="relative -top-2">
                        <Animator>
                          <Text
                            as="p" 
                            className="uppercase tracking-widest text-xl font-bold"
                            manager="sequence"
                            fixed
                          >
                            Languages
                          </Text>
                        </Animator>
                      </div>
                    </div>
                  </Animator>

                   <Animator manager="stagger" duration={{ stagger: 0.0625 }}>
                      <div className="relative flex flex-row flex-wrap gap-3">
                        {
                          theProject?.languages.map(( lang: string, index: number ) => (
                            <SkillBlock key={ index } name={ lang } />
                          ))
                        }
                      </div>
                    </Animator>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Animator>
    </>
  )
}
