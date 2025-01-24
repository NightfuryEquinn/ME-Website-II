import { Animator, FrameCorners, Text } from "@arwes/react"
import { useState } from "react"
import { EducationCocoProps } from "../../data/educations"
import ImageSlider from "./ImageSlider"

type SkillAccordianProps = {
  cocurriculum: EducationCocoProps[]
}

type AccordianItemProps = {
  cocurriculum: EducationCocoProps,
  isOpen: boolean,
  onToggle: () => void
}

const hoverSFX = new Howl({ src: [ "../assets/audio/hover.mp3" ], volume: 0.25, rate: 2.0 })
const clickSFX = new Howl({ src: [ "../assets/audio/exit.mp3" ], volume: 0.75, rate: 1.0 })

const bleepOnHover = () => {
  hoverSFX.play()
}

const bleepOnClick = () => {
  clickSFX.play()
}

export default function SkillAccordian({ cocurriculum }: SkillAccordianProps ) {
  const [ openIndex, setOpenIndex ] = useState<number | null>( null )

  const handleToggle = ( index: number ) => {
    setOpenIndex( openIndex === index ? null : index )
    bleepOnClick()
  }

  return (
    <>
      <div className="relative z-10 flex flex-col gap-4">
        {
          cocurriculum.map(( activity: EducationCocoProps, index: number ) => (
            <AccordianItem
              key={ index }
              cocurriculum={ activity } 
              isOpen={ openIndex === index }
              onToggle={ () => handleToggle( index ) }
            />
          ))
        }
      </div>
    </>
  )
}

const AccordianItem = ({ cocurriculum, isOpen, onToggle }: AccordianItemProps ) => {
  return (
    <>
      <Animator>
        <button onMouseEnter={ bleepOnHover } onClick={ onToggle } className="w-full relative">
          <FrameCorners className="accordian-frame" strokeWidth={ 2 } />
          <div className="relative -z-10 px-4 py-3 flex flex-row justify-between items-center animate-fade animate-delay-[2000ms]">
            <Text
              as="p"
              manager="sequence"
              className="uppercase font-bold text-base text-left text-white tracking-widest"
              fixed
            >
              { cocurriculum.name }
            </Text>

            {
              isOpen ?
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h5.175q.4 0 .763.15t.637.425L12 6h9q.425 0 .713.288T22 7t-.288.713T21 8H7.85q-1.55 0-2.7.975T4 11.45V18l1.975-6.575q.2-.65.738-1.037T7.9 10h12.9q1.025 0 1.613.813t.312 1.762l-1.8 6q-.2.65-.737 1.038T19 20z" />
                </svg>
              :
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h5.175q.4 0 .763.15t.637.425L12 6h8q.825 0 1.413.588T22 8v10q0 .825-.587 1.413T20 20z"/>
                </svg>
            }
          </div>
        </button>

        {
          isOpen && 
            <div className="p-4">
              <Animator>
                <Text
                  as="p" 
                  className="text-sm text-left tracking-widest"
                  manager="sequence"
                  fixed
                >
                  <span className="text-pale-pink">As: </span>{ cocurriculum?.position }
                </Text>
              </Animator>

              <hr className="border-dark-purple mx-10 mt-4 mb-5 border-1 animate-fade animate-delay-700" />

              <div className="relative z-10">
                <Animator>
                  <div className="animate-fade animate-delay-700">
                    {
                      cocurriculum.image.length > 0 ?
                        <ImageSlider { ...cocurriculum.image } />
                      :
                        <Text
                          as="p"
                          manager="sequence"
                          className="text-sm text-left tracking-widest"
                          fixed
                        >
                          Not Available
                        </Text>
                    }
                  </div>
                </Animator>
              </div>
            </div>
        }
      </Animator>
    </>
  )
}