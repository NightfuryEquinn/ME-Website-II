import { DM_Mono } from "next/font/google";

const dmMonoLight = DM_Mono({ weight: '300', subsets: ['latin'] })
const dmMonoBold = DM_Mono({ weight: '500', subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <h1 className={ dmMonoBold.className }>Hello World!</h1>
      <p className={ dmMonoLight.className }>Nice to meet you!</p>
    </>
  )
}
