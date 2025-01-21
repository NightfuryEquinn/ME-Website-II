import { Animator, FrameLines, Text } from "@arwes/react";

export default function MainDivider({ text }: any ) {
  return <>
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
}
