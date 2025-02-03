import { Animator, FrameCorners, Text } from "@arwes/react"
import { Howl } from "howler"
import { useRouter } from "next/navigation"

export default function BackButton() {
  const router = useRouter()
  
  const hoverSFX = new Howl({ src: [ "../assets/audio/hover.mp3" ], volume: 0.25, rate: 2.0 })
  const exitSFX = new Howl({ src: [ "../assets/audio/exit.mp3" ], volume: 0.75, rate: 1.0 })

  const bleepOnHover = () => {
    hoverSFX.play()
  }

  const bleepOnExit = () => {
    exitSFX.play()
    router.back()
  }

  return (
    <>
      <div className="flex justify-end">
        <Animator active duration={{ enter: 1.0, exit: 1.0, delay: 0.5 }}>
          <button onMouseEnter={ bleepOnHover } onClick={ bleepOnExit } className="relative px-6 py-2 mb-10 max-w-40 w-full">
            <FrameCorners className="exit-frame" />
            <div className="relative -z-10 flex flex-row gap-2 justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="text-light-pink animate-fade animate-delay-500">
                <path fill="currentColor" d="m7.825 12l3.875 3.9q.275.275.288.688t-.288.712q-.275.275-.7.275t-.7-.275l-4.6-4.6q-.15-.15-.213-.325T5.426 12t.063-.375t.212-.325l4.6-4.6q.275-.275.688-.287t.712.287q.275.275.275.7t-.275.7zm6.6 0l3.875 3.9q.275.275.288.688t-.288.712q-.275.275-.7.275t-.7-.275l-4.6-4.6q-.15-.15-.213-.325T12.026 12t.063-.375t.212-.325l4.6-4.6q.275-.275.688-.287t.712.287q.275.275.275.7t-.275.7z"/>
              </svg>
              <Text
                as="p"
                manager="decipher"
                className="uppercase font-bold text-sm text-light-pink tracking-widest"
                fixed
              >
                Back
              </Text>
            </div>
          </button>
        </Animator>
      </div>
    </>
  )
}
