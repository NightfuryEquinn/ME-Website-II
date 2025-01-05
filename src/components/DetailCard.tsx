import { Animator, FrameUnderline, Text } from "@arwes/react";
import { Howl } from 'howler';
import { useRouter } from "next/navigation";
import { CareersProps } from "../../data/careers";

export default function DetailCard(detail: CareersProps) {
  const router = useRouter()

  const hoverSFX = new Howl({ src: [ "../assets/audio/hover.mp3" ], volume: 0.25, rate: 2.0 })
  const clickSFX = new Howl({ src: [ "../assets/audio/click.mp3" ], volume: 0.75, rate: 4.5 })

  const bleepOnHover = () => {
    hoverSFX.play()
  }

  const bleepOnClick = () => {
    clickSFX.play()
    router.push(`/careers/${ detail.id }`)
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
              Archive { detail.id } - { detail.company }
            </Text>
          </div>
        </button>
      </Animator>
    </>
  )
}
