import { Animator, FrameUnderline, Text } from "@arwes/react";
import { Howl } from 'howler';
import { useRouter } from "next/navigation";
import { CareersProps } from "../../data/careers";
import { EducationsProps } from "../../data/educations";

export default function DetailCard( 
  detail: Partial<CareersProps> & Partial<EducationsProps> 
) {
  const router = useRouter()

  const hoverSFX = new Howl({ src: [ "../assets/audio/hover.mp3" ], volume: 0.25, rate: 2.0 })
  const clickSFX = new Howl({ src: [ "../assets/audio/click.mp3" ], volume: 0.75, rate: 4.5 })

  const bleepOnHover = () => {
    hoverSFX.play()
  }

  const bleepOnClick = () => {
    clickSFX.play()

    if ( detail.company ) {
      router.push( `/careers/${ detail.id }` )
    }

    if ( detail.qualification ) {
      router.push( `/educations/${ detail.id }` )
    }
  }

  return (
    <>
      <Animator active duration={{ enter: 1.0, exit: 1.0 }}>
        <button onMouseEnter={ bleepOnHover } onClick={ bleepOnClick } className="relative p-2 animate-fade">
          <FrameUnderline className="section-frame" />
          <div className="px-7 py-5">
            <Text
              as="p"
              manager="sequence"
              className="-z-10 text-left uppercase text-xl tracking-widest"
              fixed
            >
              { detail.company && `Archive ${ detail.id } - ${ detail.company }` }
              { detail.qualification && `Chronicle ${ detail.id } - ${ detail.title }` }
            </Text>
          </div>
        </button>
      </Animator>
    </>
  )
}
