import { Animator, FrameLines, Text } from "@arwes/react";

type MainDividerProps = {
  text: string
}

export default function MainDivider({ text }: MainDividerProps ) {
  return (
    <>
      <Animator>
        <div className="relative px-6 py-4 w-full">
          <FrameLines className="main-divider-frame" />
          <Animator>
            <Text
              as="p"
              manager="decipher"
              className="uppercase font-bold text-xl text-center text-blue tracking-widest"
              fixed
            >
              { text }
            </Text>
          </Animator>
        </div>
      </Animator>
    </>
  )
}
