import { Animator, FrameCorners } from "@arwes/react"
import { Howl } from "howler"
import Image from "next/image"
import { useState } from "react"

export default function ImageSlider( images: string[] ) {
  const [ currentIndex, setCurrentIndex ] = useState( 0 )

  const hoverSFX = new Howl({ src: [ "../assets/audio/hover.mp3" ], volume: 0.25, rate: 2.0 })
  const clickSFX = new Howl({ src: [ "../assets/audio/exit.mp3" ], volume: 0.75, rate: 1.0 })

  const bleepOnHover = () => {
    hoverSFX.play()
  }

  const bleepOnClick = () => {
    clickSFX.play()
  }

  const nextIndex = () => {
    if ( currentIndex >= Object.keys( images ).length - 1 ) return

    setCurrentIndex(( prevIndex: number ) => prevIndex + 1 )
    bleepOnClick()
  }

  const prevIndex = () => {
    if ( currentIndex === 0 ) return

    setCurrentIndex(( prevIndex: number ) => prevIndex === 0 ? images.length - 1 : prevIndex - 1 )
    bleepOnClick()
  }

  return (
    <>
      <div className="animate-fade flex flex-row gap-5 items-s">
        <div className="max-h-[400px] max-w-[400px]">
          <Image width={ 1000 } height={ 1000 } src={ `/assets/images/${ images[ currentIndex ] }` } alt={ `${ images[ currentIndex ] }` } />
        </div>

        <div className="flex flex-col gap-2 items-center">
          <div className="relative">
            <Animator>
              <button onMouseEnter={ bleepOnHover } onClick={ prevIndex } className="flex justify-center items-center">
                <FrameCorners className="left-right-frame" />
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="relative -z-10 rotate-90">
                  <path fill="currentColor" d="m10.8 12l3.9 3.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-4.6-4.6q-.15-.15-.212-.325T8.425 12t.063-.375t.212-.325l4.6-4.6q.275-.275.7-.275t.7.275t.275.7t-.275.7z"/>
                </svg>
              </button>
            </Animator>
          </div>

          <div className="relative">
            <Animator>
              <button onMouseEnter={ bleepOnHover } onClick={ nextIndex } className="flex justify-center items-center">
                <FrameCorners className="left-right-frame" />
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="relative -z-10 rotate-90">
                  <path fill="currentColor" d="M12.6 12L8.7 8.1q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.6 4.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.6 4.6q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7z"/>
                </svg>
              </button>
            </Animator>
          </div>
        </div>
      </div>
    </>
  )
}
