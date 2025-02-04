import { Animator, FrameNero, Text } from "@arwes/react";
import { CertificationProps } from "../../data/certifications";

export default function CertCard( cert: CertificationProps ) {
  return (
    <>
      <Animator>
        <div className="p-6 relative">
          <FrameNero className="skill-frame" />
          <div className="flex flex-col gap-1">
            <Animator>
              <Text
                as="p"
                manager="sequence"
                className="text-xl tracking-wider text-pink"
                fixed
              >
                { cert.title }
              </Text>
            </Animator>

            <Animator>
              <Text
                as="p"
                manager="sequence"
                className="text-base tracking-wider text-white text-opacity-50"
                fixed
              >
                { cert.issuedBy }
              </Text>
            </Animator>

            <Animator>
              <Text
                as="p"
                manager="sequence"
                className="mt-3 text-lg tracking-wider text-white"
                fixed
              >
                { cert.issuedOn } - { cert.expiredOn }
              </Text>
            </Animator>
          </div>
        </div>
      </Animator>
    </>
  )
}
