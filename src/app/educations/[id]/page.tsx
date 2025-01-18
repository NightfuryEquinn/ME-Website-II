"use client"

import BackButton from "@/components/BackButton"
import SkillAccordian from "@/components/SkillAccordian"
import SkillBlock from "@/components/SkillBlock"
import { Animator, FrameHeader, FrameLines, FrameNero, FrameOctagon, Text } from "@arwes/react"
import Image from "next/image"
import { useParams } from "next/navigation"
import { EducationCourseProps, educations, EducationsProps } from "../../../../data/educations"

export default function EducationDetails() {
  const { id } = useParams()
  const theEducation = educations.find(( education: EducationsProps ) => education.id.toString() === id )
  
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
                    <FrameHeader className="logo-header" contentLength={ 200 } decoWidth={ 5 } />
                    <div className="relative -top-2">
                      <Text
                        as="p" 
                        className="uppercase tracking-widest text-xl font-bold"
                        manager="sequence"
                        fixed
                      >
                        Chronicles { theEducation?.id }
                      </Text>
                    </div>
                  </div>
                </Animator>

                <Animator>
                  <div className="relative z-10">
                    <FrameNero className="logo-frame" />
                    <Image className="p-5 mx-auto animate-fade animate-delay-200" width={ 300 } height={ 300 } src={ `/assets/images/${ theEducation?.logo }` } alt={ `${ theEducation?.title } Logo` } />
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
                      { theEducation?.title }
                    </Text>
                  </Animator>

                  <div className="my-3 flex flex-row gap-4 items-center">
                    <Animator>
                      <div className="p-4 w-full relative flex flex-col gap-2 justify-center items-center">
                        <FrameOctagon className="detail-frame" strokeWidth={ 2 } />
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="text-sky-blue animate-fade animate-delay-500">
                          <path fill="currentColor" d="M4 21v-2h16v2zM18 8h2V5h-2zM8 17q-1.65 0-2.825-1.175T4 13V3h5v2.4L7.2 6.85q-.05.05-.2.4v4.25q0 .2.15.35t.35.15h4q.2 0 .35-.15t.15-.35V7.25q0-.05-.2-.4L10 5.4V3h10q.825 0 1.413.587T22 5v3q0 .825-.587 1.413T20 10h-2v3q0 1.65-1.175 2.825T14 17z"/>
                        </svg>

                        <Animator>
                          <Text
                            as="p" 
                            className="tracking-widest text-sm text-center text-sky-blue"
                            manager="decipher"
                            fixed
                          >
                            Started at<br />{ theEducation?.start }
                          </Text>
                        </Animator>
                      </div>
                    </Animator>
                    
                    <Animator>
                      <div className="p-4 w-full relative flex flex-col gap-2 justify-center items-center">
                        <FrameOctagon className="detail-frame" strokeWidth={ 2 } />
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="text-red animate-fade animate-delay-500">
                          <path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19v-4h2v4h14V5H5v4H3V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm5.5-4l-1.4-1.45L11.65 13H3v-2h8.65L9.1 8.45L10.5 7l5 5z"/>
                        </svg>

                        <Animator>
                          <Text
                            as="p" 
                            className="tracking-widest text-sm text-center text-red"
                            manager="decipher"
                            fixed
                          >
                            Ended at<br />{ theEducation?.end }
                          </Text>
                        </Animator>
                      </div>
                    </Animator>
                  </div>

                  <Animator>
                    <Text
                      as="p" 
                      className="tracking-widest"
                      manager="sequence"
                      fixed
                    >
                      <span className="text-pale-pink">Location: </span>{ theEducation?.location }
                    </Text>
                  </Animator>

                  <hr className="border-deep-blue mx-10 my-2 border-1 animate-fade animate-delay-700" />

                  <Animator>
                    <Text
                      as="p" 
                      className="tracking-widest"
                      manager="sequence"
                      fixed
                    >
                      <span className="text-pale-pink">Qualifications: </span>{ theEducation?.qualification }
                    </Text>
                  </Animator>

                  <Animator>
                    <Text
                      as="p" 
                      className="tracking-widest"
                      manager="sequence"
                      fixed
                    >
                      <span className="text-pale-pink">Grade: </span>{ theEducation?.grade }
                    </Text>
                  </Animator>

                  <hr className="my-5 border-0" />

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
                            Courses
                          </Text>
                        </Animator>
                      </div>
                    </div>
                  </Animator>

                  <Animator manager="stagger" duration={{ stagger: 0.0625 }}>
                    <div className="relative flex flex-row flex-wrap gap-3">
                      {
                        theEducation?.courses.length === 0 ?
                          <SkillBlock id={ 0 } name="Not Applicable"  />
                        :
                          theEducation?.courses.map(( course: EducationCourseProps ) => (
                            <SkillBlock key={ course.id } { ...course } />
                          ))
                      }
                    </div>
                  </Animator>

                  <hr className="my-5 border-0" />

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
                            Clubs
                          </Text>
                        </Animator>
                      </div>
                    </div>
                  </Animator>

                  <Animator manager="stagger" duration={{ stagger: 0.0625 }}>
                    {
                      theEducation?.cocurriculum.length === 0 ?
                        <div className="relative flex">
                          <SkillBlock id={ 0 } name="Not Applicable"  />
                        </div>
                      :
                        <SkillAccordian cocurriculum={ theEducation!.cocurriculum } />
                    }
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
