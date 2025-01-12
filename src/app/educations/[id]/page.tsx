"use client"

import { useParams } from "next/navigation"
import { educations, EducationsProps } from "../../../../data/educations"
import { Animator } from "@arwes/react"
import BackButton from "@/components/BackButton"

export default function EducationDetails() {
  const { id } = useParams()
  const theEducation = educations.find(( education: EducationsProps ) => education.id.toString() === id )
  
  return (
    <>
      <Animator active combine manager="stagger" duration={{ stagger: 0.125 }}>
        <div className="p-5 lg:p-10">
          <BackButton />

          <div className="h-full">
            { theEducation?.grade }
          </div>
        </div>
      </Animator>
    </>
  )
}
