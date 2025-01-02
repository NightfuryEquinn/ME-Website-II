"use client";

import { Animator, FrameKranox } from '@arwes/react';
import { Howl } from 'howler';
import Image from 'next/image';

interface SectionCardProps {
  text: string,
  image: string
}

export default function SectionCard({ text, image }: SectionCardProps ) {
  const hoverSFX = new Howl({ src: [ "../assets/audio/hover.mp3" ], volume: 0.25, rate: 2.0 })
  const clickSFX = new Howl({ src: [ "../assets/audio/click.mp3" ], volume: 0.75, rate: 4.5 })

  const bleepOnHover = () => {
    hoverSFX.play()
  }

  const bleepOnClick = () => {
    clickSFX.play()
  }

  return (
    <>
      <Animator>
        <button onMouseEnter={ bleepOnHover } onClick={ bleepOnClick } className={`relative p-2 animate-fade`}>
          <FrameKranox className='section-frame' />
          <div className="p-2 flex flex-col gap-3 items-center justify-center">
            <Image width={ 150 } height={ 150 } src={ image } alt={ text } />
            <hr />
            <p className="uppercase text-xl tracking-widest">{ text }</p>
          </div>
        </button>
      </Animator>
    </>
  )
}