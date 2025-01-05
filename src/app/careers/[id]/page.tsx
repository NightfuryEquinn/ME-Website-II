"use client";

import { useParams } from "next/navigation";
import { careers, CareersProps } from "../../../../data/careers";
import BackButton from "@/components/BackButton";
import { Animator, FrameHeader, FrameNero } from "@arwes/react";
import Image from "next/image";

export default function CareerDetails() {
  const { id } = useParams()
  const theCareer = careers.find(( career: CareersProps ) => career.id.toString() === id )

  return (
    <>
      <Animator active combine manager="stagger" duration={{ stagger: 0.125 }}>
        <div className="p-5 lg:p-10">
          <BackButton />
          <div className="h-full flex flex-col gap-5">
            <div className="relative">
              <FrameHeader className="logo-header" contentLength={ 125 } decoWidth={ 5 } />
              <div className="relative -top-2">
                <p className="uppercase tracking-widest font-bold">Archive { theCareer?.id }</p>
              </div>
            </div>
            <div className="relative">
              <FrameNero className="logo-frame" />
              <Image className="p-5 mx-auto" width={ 300 } height={ 300 } src={ `/assets/images/${ theCareer?.logo }` } alt={ `${ theCareer?.company } Logo` } />
            </div>
          </div>
        </div>
      </Animator>
    </>
  )
}
