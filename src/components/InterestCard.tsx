import { Animator, FrameNefrex, Text } from "@arwes/react";
import Image from "next/image";
import { InterestsProps } from "../../data/interests";

export default function InterestCard( interest: InterestsProps ) {
  return (
    <>
      <Animator>
        <div className="p-6 relative">
          <FrameNefrex className="skill-frame" />
          <div className="flex flex-col gap-5">  
            <div className="flex flex-row gap-10 items-center">
              <div className="min-w-28 min-h-28 w-28 h-28 animate-fade animate-delay-200">
                <Image width={ 200 } height={ 200 } src={ `/assets/icons/${ interest.image }` } alt={ `${ interest.image } Icon` } />
              </div>
              <div className="flex flex-col gap-2">
                <Animator>
                  <Text
                    as="p"
                    manager="sequence"
                    className="text-sm tracking-wider text-white text-opacity-50"
                    fixed
                  >
                    Passion { interest.id }
                  </Text>
                </Animator>
                
                <Animator>
                  <Text
                    as="p"
                    manager="sequence"
                    className="uppercase text-2xl font-bold tracking-wider text-sky-blue"
                    fixed
                  >
                    { interest.name }
                  </Text>
                </Animator>
              </div>
            </div>

            <Animator>
              <Text
                as="p"
                manager="sequence"
                className="mt-2 text-base tracking-wider"
                fixed
              >
                { interest.description }
              </Text>
            </Animator>
          </div>
        </div>
      </Animator>
    </>
  )
}
