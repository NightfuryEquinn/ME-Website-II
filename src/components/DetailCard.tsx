import { Animator, FrameNefrex, Text } from "@arwes/react";
import { Howl } from 'howler';
import { useRouter } from "next/navigation";
import { AchievementsProps } from "../../data/achievements";
import { CareersProps } from "../../data/careers";
import { EducationsProps } from "../../data/educations";
import { EventsProps } from "../../data/events";
import { ProjectsProps } from "../../data/projects";

export default function DetailCard( 
  detail: Partial<CareersProps> & Partial<EducationsProps> & Partial<EventsProps> & Partial<AchievementsProps> & Partial<ProjectsProps>
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

    if ( detail.speaker ) {
      router.push( `/events/${ detail.id }` )
    }

    if ( detail.award ) {
      router.push( `/events/achievements/${ detail.id }` )
    }

    if ( detail.redirect ) {
      router.push( `/projects/${ detail.id }` )
    }
  }

  return (
    <>
      <Animator active duration={{ enter: 1.0, exit: 1.0 }}>
        <button onMouseEnter={ bleepOnHover } onClick={ bleepOnClick } className="relative p-2 animate-fade">
          <FrameNefrex className="section-frame" />
          <div className="px-4 py-2">
            <Text
              as="p"
              manager="sequence"
              className="-z-10 text-left text-xl tracking-wider"
              fixed
            >
              { detail.company && 
                <>
                  <span className="text-sky-blue">{ `Archive ${ detail.id } ` }</span>
                  - { detail.company }
                </>
              }
              { detail.qualification && 
                <>
                  <span className="text-sky-blue">{ `Chronicle ${ detail.id } ` }</span>
                  - { detail.title }
                </>
              }
              { detail.speaker && 
                <>
                  <span className="text-sky-blue">{ `Anomaly ${ detail.id } ` }</span>
                  - { detail.title }
                </>
              }
              { detail.award &&
                <>
                  <span className="text-sky-blue">{ `Singularity ${ detail.id } ` }</span>
                  - { detail.title }
                </>
              }
              { detail.redirect &&
                <>
                  <span className="text-sky-blue">{ `Journal ${ detail.id } ` }</span>
                  - { detail.title }
                </>
              }
            </Text>
          </div>
        </button>
      </Animator>
    </>
  )
}
