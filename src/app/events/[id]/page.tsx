"use client";

import BackButton from "@/components/BackButton";
import ImageSlider from "@/components/ImageSlider";
import { Animator, FrameHeader, FrameLines, FrameNero, Text } from "@arwes/react";
import { useParams } from "next/navigation";
import { events, EventsProps } from "../../../../data/events";
import { NameProps } from "../../../../data/achievements";
import SkillBlock from "@/components/SkillBlock";

export default function EventsDetails() {
  const { id } = useParams()
  const theEvent = events.find(( event: EventsProps ) => event.id.toString() === id )
  
  return (
    <>
      <Animator active combine manager="stagger" duration={{ stagger: 0.125 }}>
        <div className="p-5 lg:p-10">
          <BackButton />

          <div className="h-full">
            <div className="flex flex-col lg:grid lg:grid-cols-3 gap-5 lg:gap-8">
              <div className="col-span-1">
                <Animator>
                  <div className="relative mb-5">
                    <FrameHeader className="logo-frame" contentLength={ 150 } decoWidth={ 5 } />
                    <div className="relative -top-2">
                      <Text
                        as="p" 
                        className="uppercase tracking-widest text-xl font-bold"
                        manager="sequence"
                        fixed
                      >
                        Anomaly { theEvent?.id }
                      </Text>
                    </div>
                  </div>
                </Animator>

                <div className="relative p-5">
                  <FrameNero className="logo-frame" />
                  <div className="overflow-hidden">
                    <div className="relative z-10">
                      <ImageSlider { ...theEvent!.images } />
                    </div>
                  </div>
                </div>
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
                      { theEvent?.title }
                    </Text>
                  </Animator>

                  <div className="my-3 flex flex-col gap-4">
                    <Animator>
                      <div className="flex flex-row gap-4 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="animate-fade min-w-6 text-pale-pink">
                          <path fill="currentColor" d="M5 22q-.825 0-1.412-.587T3 20V6q0-.825.588-1.412T5 4h1V3q0-.425.288-.712T7 2t.713.288T8 3v1h8V3q0-.425.288-.712T17 2t.713.288T18 3v1h1q.825 0 1.413.588T21 6v14q0 .825-.587 1.413T19 22zm0-2h14V10H5zm3-6q-.425 0-.712-.288T7 13t.288-.712T8 12h8q.425 0 .713.288T17 13t-.288.713T16 14zm0 4q-.425 0-.712-.288T7 17t.288-.712T8 16h5q.425 0 .713.288T14 17t-.288.713T13 18z"/>
                        </svg>

                        <Text
                          as="p" 
                          className="tracking-widest"
                          manager="sequence"
                          fixed
                        >
                          <span className="text-pale-pink">Date: </span>{ theEvent?.date }
                        </Text>
                      </div>
                    </Animator>

                    <Animator>
                      <div className="flex flex-row gap-4 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="animate-fade min-w-6 text-pale-pink">
                          <path fill="currentColor" d="M11.25 22v-2.05q-1.8-.275-3.025-1.675T7 15h1.5q0 1.45 1.025 2.475T12 18.5t2.475-1.025T15.5 15H17q0 1.875-1.225 3.275T12.75 19.95V22zm.75-5q-.825 0-1.412-.587T10 15v-3q0-.825.588-1.412T12 10t1.413.588T14 12v3q0 .825-.587 1.413T12 17M1 14v-1.575q0-.875.363-1.562t1.012-1.038q1-.525 2.15-.8T7 8.75q.65 0 1.263.075t1.187.2Q7.9 9.675 6.862 11t-1.287 3zm17.425 0q-.25-1.675-1.287-2.988T14.55 9.026q.575-.125 1.188-.2T17 8.75q1.325 0 2.475.275t2.15.8q.65.35 1.013 1.038T23 12.425V14zM7 8q-1.25 0-2.125-.875T4 5t.875-2.125T7 2t2.125.875T10 5t-.875 2.125T7 8m10 0q-1.25 0-2.125-.875T14 5t.875-2.125T17 2t2.125.875T20 5t-.875 2.125T17 8"/>
                        </svg>

                        <Text
                          as="p" 
                          className="tracking-widest"
                          manager="sequence"
                          fixed
                        >
                          <span className="text-pale-pink">Speaker: </span>{ theEvent?.speaker }
                        </Text>
                      </div>
                    </Animator>
                  </div>

                  <hr className="my-3 border-0" />

                  <Animator>
                    <div className="mb-2 relative">
                      <FrameHeader className="logo-frame" contentLength={ 125 } decoWidth={ 5 } />
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
                        theEvent?.members.length === 0 ?
                          <SkillBlock name="Not Applicable" isNa={ true } />
                        :
                          theEvent?.members.map(( member: NameProps ) => (
                            <SkillBlock key={ member.id } { ...member } />
                          ))
                      }
                    </div>
                  </Animator>

                  <hr className="my-5 border-0" />

                  <Animator>
                    <div className="mb-2 relative">
                      <FrameHeader className="logo-frame" contentLength={ 125 } decoWidth={ 5 } />
                      <div className="relative -top-2">
                        <Animator>
                          <Text
                            as="p" 
                            className="uppercase tracking-widest text-xl font-bold"
                            manager="sequence"
                            fixed
                          >
                            Summary
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
                      { theEvent?.description }
                    </Text>
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
