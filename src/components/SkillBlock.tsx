import { Animator, FrameUnderline, Text } from "@arwes/react";

type SkillBlockProps = {
  name: string,
  isNa?: boolean
}

export default function SkillBlock({ name, isNa = false }: SkillBlockProps ) {
  return (
    <>
      <Animator>
        <div className="relative pl-4 pr-6 py-2">
          <FrameUnderline className={ isNa ? "detail-frame-alt" : "detail-frame" } strokeWidth={ 2 } />
          <Text
            as="p" 
            className="text-sm tracking-widest"
            manager="decipher"
            fixed
          >
            { name }
          </Text>
        </div>
      </Animator>
    </>
  )
}
