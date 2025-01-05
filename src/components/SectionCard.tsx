"use client";

import { Animator, FrameKranox, Text } from '@arwes/react';
import { Howl } from 'howler';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface SectionCardProps {
  text: string,
  image: string
}

export default function SectionCard({ text, image }: SectionCardProps ) {
  const router = useRouter()

  const hoverSFX = new Howl({ src: [ "../assets/audio/hover.mp3" ], volume: 0.25, rate: 2.0 })
  const clickSFX = new Howl({ src: [ "../assets/audio/click.mp3" ], volume: 0.75, rate: 4.5 })

  const bleepOnHover = () => {
    hoverSFX.play()
  }

  const bleepOnClick = () => {
    clickSFX.play()
    router.push(`${ text.toLowerCase() }`)
  }

  return (
    <>
      <Animator>
        <button onMouseEnter={ bleepOnHover } onClick={ bleepOnClick } className="relative p-2 animate-fade">
          <FrameKranox className='section-frame' />
          <div className="relative -z-10 px-7 py-5 flex lg:flex-col gap-3 items-center justify-around md:justify-between lg:justify-center">
            <Image width={ 125 } height={ 125 } src={ image } alt={ text } />
            <hr />
            <Text 
              as="p" 
              className="uppercase text-xl tracking-widest"
              manager="sequence"
              fixed
            >
              { text }
            </Text>
          </div>
        </button>
      </Animator>
    </>
  )
}