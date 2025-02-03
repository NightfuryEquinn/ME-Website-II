import { Animator, FrameNefrex, Text } from "@arwes/react";
import { VolunteersProps } from "../../data/volunteer";

export default function VolunteerCard( volunteer: VolunteersProps ) {
  return (
    <>
      <Animator>
        <div className="p-6 relative">
          <FrameNefrex className="skill-frame" />
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <Animator>
                <Text
                  as="p"
                  manager="sequence"
                  className="text-sm tracking-wider text-white text-opacity-50"
                  fixed
                >
                  Subject { volunteer.id }
                </Text>
              </Animator>

              <Animator>
                <Text
                  as="p"
                  manager="sequence"
                  className="uppercase text-2xl font-bold tracking-wider text-sky-blue"
                  fixed
                >
                  { volunteer.name }
                </Text>
              </Animator>

              <Animator>
                <Text
                  as="p"
                  manager="sequence"
                  className="uppercase text-base font-bold tracking-wider text-white"
                  fixed
                >
                  { volunteer.position }
                </Text>
              </Animator>
            </div>

            <div className="flex flex-row justify-between">
              <Animator>
                <Text
                  as="p"
                  manager="sequence"
                  className="text-sm tracking-wider text-pink font-medium"
                  fixed
                >
                  { volunteer.category }
                </Text>
              </Animator>

              <Animator>
                <Text
                  as="p"
                  manager="sequence"
                  className="text-sm tracking-wider text-pink font-medium"
                  fixed
                >
                  { volunteer.start } - { volunteer.end }
                </Text>
              </Animator>
            </div>

            <div className="flex flex-col">
              {
                volunteer.description.map(( text: string, index: number ) => (
                  <Animator key={ index }>
                    <Text
                      as="p"
                      manager="sequence"
                      className="mt-2 text-base tracking-wider"
                      fixed
                    >
                      [ { index + 1 } ] - { text }
                    </Text>
                  </Animator>
                ))
              }
            </div>
          </div>
        </div>
      </Animator>
    </>
  )
}
