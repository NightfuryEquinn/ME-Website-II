"use client";

import { useParams } from "next/navigation";
import { achievements, AchievementsProps, NameProps } from "../../../../../data/achievements";
import BackButton from "@/components/BackButton";
import { Animator, FrameCorners, FrameHeader, FrameLines, FrameOctagon, Text } from "@arwes/react";
import Image from "next/image";
import SkillBlock from "@/components/SkillBlock";

export default function AchievementsDetails() {
  const { id } = useParams()
  const theAchievement = achievements.find(( achievement: AchievementsProps ) => achievement.id.toString() === id )
    
  return (
    <>
      <Animator active combine manager="stagger" duration={{ stagger: 0.125 }}>
        <div className="p-5 lg:p-10">
          <BackButton />

          <div className="h-full">
            <div className="flex flex-col gap-5">
              <Animator>
                <div className="relative mb-5">
                  <FrameHeader className="logo-header" contentLength={ 200 } decoWidth={ 5 } />
                  <div className="relative -top-2">
                    <Text
                      as="p" 
                      className="uppercase tracking-widest text-xl font-bold"
                      manager="sequence"
                      fixed
                    >
                      Singularity { theAchievement?.id }
                    </Text>
                  </div>
                </div>
              </Animator>

              <Animator>
                <div className="relative">
                  <FrameLines className="detail-frame" />
                  <div className="p-5 flex flex-col lg:grid lg:grid-cols-3 gap-2 lg:gap-8">
                    <div className="lg:col-span-1">
                      <div className="m-5 h-60 w-60 mx-auto">
                        <Image className="h-full animate-fade object-cover" width={ 512 } height={ 512 } src={ `/assets/icons/${ theAchievement?.icon }` } alt={ `${ theAchievement?.icon } Icon` } />
                      </div>

                      <Animator>
                        <Text
                          as="p" 
                          className="mb-5 uppercase tracking-widest text-3xl text-center"
                          manager="decipher"
                          fixed
                        >
                          { theAchievement?.title }
                        </Text>
                      </Animator>

                      <Animator>
                        <div className="relative mb-2 px-4 py-2">
                          <FrameOctagon className="cert-frame" /> 
                          <Text
                            as="p" 
                            className="uppercase tracking-widest text-light-pink text-xl text-center"
                            manager="decipher"
                            fixed
                          >
                            { theAchievement?.award }
                          </Text>
                        </div>
                      </Animator>
                    </div>

                    <div className="lg:col-span-2">
                      <div className="mt-5 lg:mt-0 flex flex-col lg:flex-row gap-2 lg:gap-10">
                        <Animator>
                          <div className="lg:w-full relative p-4">
                            <FrameCorners className="detail-frame" strokeWidth={ 2 } />
                            <div className="flex flex-row gap-4 items-center h-full">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="animate-fade min-w-6 text-sky-blue">
                                <path fill="currentColor" d="M4 21q-.825 0-1.412-.587T2 19V5q0-.825.588-1.412T4 3h6q.825 0 1.413.588T12 5v2h8q.825 0 1.413.588T22 9v10q0 .825-.587 1.413T20 21zm0-2h6v-2H4zm0-4h6v-2H4zm0-4h6V9H4zm0-4h6V5H4zm8 12h8V9h-8zm3-6q-.425 0-.712-.288T14 12t.288-.712T15 11h2q.425 0 .713.288T18 12t-.288.713T17 13zm0 4q-.425 0-.712-.288T14 16t.288-.712T15 15h2q.425 0 .713.288T18 16t-.288.713T17 17z"/>
                              </svg>

                              <Text
                                as="p" 
                                className="tracking-widest"
                                manager="sequence"
                                fixed
                              >
                                <span className="text-sky-blue">Organization: </span>{ theAchievement?.under }
                              </Text>
                            </div>
                          </div>
                        </Animator>

                        <Animator>
                          <div className="lg:w-full relative p-4">
                            <FrameCorners className="detail-frame" strokeWidth={ 2 } />
                            <div className="flex flex-row gap-4 items-center h-full">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="animate-fade min-w-6 text-sky-blue">
                                <path fill="currentColor" d="M5 22q-.825 0-1.412-.587T3 20V6q0-.825.588-1.412T5 4h1V3q0-.425.288-.712T7 2t.713.288T8 3v1h8V3q0-.425.288-.712T17 2t.713.288T18 3v1h1q.825 0 1.413.588T21 6v14q0 .825-.587 1.413T19 22zm0-2h14V10H5zm3-6q-.425 0-.712-.288T7 13t.288-.712T8 12h8q.425 0 .713.288T17 13t-.288.713T16 14zm0 4q-.425 0-.712-.288T7 17t.288-.712T8 16h5q.425 0 .713.288T14 17t-.288.713T13 18z"/>
                              </svg>

                              <Text
                                as="p" 
                                className="tracking-widest"
                                manager="sequence"
                                fixed
                              >
                                <span className="text-sky-blue">Date: </span>{ theAchievement?.date }
                              </Text>
                            </div>
                          </div>
                        </Animator>
                      </div>

                      <div className="mt-8 flex flex-col lg:flex-row gap-10">
                        <div className="lg:w-full flex flex-col gap-2">
                          <Animator>
                            <div className="mb-2 relative">
                              <FrameHeader className="logo-header" contentLength={ 125 } decoWidth={ 5 } />
                              <div className="relative -top-2">
                                <Animator>
                                  <Text
                                    as="p" 
                                    className="uppercase tracking-widest text-xl font-bold"
                                    manager="sequence"
                                    fixed
                                  >
                                    Issuers
                                  </Text>
                                </Animator>
                              </div>
                            </div>
                          </Animator>

                          <Animator manager="stagger" duration={{ stagger: 0.0625 }}>
                            <div className="relative flex flex-row flex-wrap gap-3">
                              {
                                theAchievement?.issuedBy.length === 0 ?
                                  <SkillBlock name="Not Applicable" isNa={ true } />
                                :
                                  theAchievement?.issuedBy.map(( member: NameProps ) => (
                                    <SkillBlock key={ member.id } { ...member } />
                                  ))
                              }
                            </div>
                          </Animator>
                        </div>

                        <div className="lg:w-full flex flex-col gap-2">
                          <Animator>
                            <div className="mb-2 relative">
                              <FrameHeader className="logo-header" contentLength={ 125 } decoWidth={ 5 } />
                              <div className="relative -top-2">
                                <Animator>
                                  <Text
                                    as="p" 
                                    className="uppercase tracking-widest text-xl font-bold"
                                    manager="sequence"
                                    fixed
                                  >
                                    Members
                                  </Text>
                                </Animator>
                              </div>
                            </div>
                          </Animator>

                          <Animator manager="stagger" duration={{ stagger: 0.0625 }}>
                            <div className="relative flex flex-row flex-wrap gap-3">
                              {
                                theAchievement?.members.length === 0 ?
                                  <SkillBlock name="Not Applicable" isNa={ true } />
                                :
                                  theAchievement?.members.map(( member: NameProps ) => (
                                    <SkillBlock key={ member.id } { ...member } />
                                  ))
                              }
                            </div>
                          </Animator>
                        </div>
                      </div>

                      <hr className="my-3 border-0" />
                      
                      <Animator>
                        <div className="mt-8 mb-3 relative">
                          <FrameHeader className="logo-header" contentLength={ 125 } decoWidth={ 5 } />
                          <div className="relative -top-2">
                            <Animator>
                              <Text
                                as="p" 
                                className="uppercase tracking-widest text-xl font-bold"
                                manager="sequence"
                                fixed
                              >
                                Briefs
                              </Text>
                            </Animator>
                          </div>
                        </div>
                      </Animator>

                      <Animator>
                        <Text
                          as="p" 
                          className="text-sm leading-6 tracking-wider"
                          manager="sequence"
                          fixed
                        >
                          { theAchievement?.description }
                        </Text>
                      </Animator>
                    </div>
                  </div>
                </div>
              </Animator>
            </div>
          </div>
        </div>
      </Animator>
    </>
  )
}