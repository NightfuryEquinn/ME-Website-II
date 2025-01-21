import { NameProps } from "./achievements"

export type EventsProps = {
  id: number,
  title: string,
  speaker: string,
  date: string,
  images: string[],
  description: string,
  members: NameProps[]
}

export const events: EventsProps[] = [
  {
    id: 1,
    title: "Git-GitHub Workshop",
    speaker: "Yip Zi Xian, Me Myself",
    date: "20 June 2023",
    images: [
      "git_1.jpeg",
      "git_2.jpeg",
      "git_3.jpeg",
      "git_4.jpeg",
      "git_5.jpeg",
      "git_6.jpeg",
      "git_7.jpeg"
    ],
    description: "Conducted a workshop on Git and GitHub as part of my assignment with my groupmates. We were not expecting a large number of participants but it was nearly a full house, eventually. It was very enjoyable to conduct a small, short session in a sarcastic way. It did help me to benchmark my knowledge about Git and GitHub and allowed me to further research about these softwares and tools.",
    members: [
      {
        id: 1,
        name: "Yip Zi Xian"
      },
      {
        id: 2,
        name: "Kenny Wong Sy Qi"
      },
      {
        id: 3,
        name: "Nurain Ameelynn"
      },
      {
        id: 4,
        name: "Chong Shing Chee"
      },
      {
        id: 5,
        name: "Choong Wei Jun"
      },
      {
        id: 6,
        name: "Harrish Siwa"
      },
      {
        id: 7,
        name: "Hor Jia Xing"
      },
      {
        id: 8,
        name: "Ng Zheng Hao"
      },
      {
        id: 9,
        name: "Jonathan Jason"
      },
      {
        id: 10,
        name: "Au Zhen Yau"
      },
      {
        id: 11,
        name: "Loo Yew Sun"
      },
      {
        id: 12,
        name: "Ning Seng Chun"
      },
      {
        id: 13,
        name: "Pio Kow Yu Hang"
      }
    ]
  },
  {
    id: 2,
    title: "How to Land your First Job in a Startup?",
    speaker: "Mr. Ugendran Letchimenan",
    date: "18 July 2023",
    images: [
      "cradle_1.jpeg",
      "cradle_2.jpeg",
      "cradle_3.jpeg",
      "cradle_4.jpeg",
    ],
    description: "It was very honored to have Mr. Ugendran to conduct a speaker session about landing a job in a startup. The whole process of searching and seeking for an industry speaker, member meetings, documentation, and wrap-up presentation were very successful thanks to my groupmates. It was not easy in managing a group of skillful people as each members have their own skillsets. As a leader, I was required to appoint the right person to the right jobs while staying positive and motivated.",
    members: [
      {
        id: 1,
        name: "Yip Zi Xian"
      },
      {
        id: 2,
        name: "Deng Qing"
      },
      {
        id: 3,
        name: "Felicia Malini a/p Santha Kumaran"
      },
      {
        id: 4,
        name: "Imani Oming'o Ogana"
      },
      {
        id: 5,
        name: "Neo Teng Cher"
      },
      {
        id: 6,
        name: "Nashad Abdul Wahid"
      },      
      {
        id: 7,
        name: "Shanzay Hashmi"
      },
      {
        id: 8,
        name: "Yeoh Jia Heng"
      }
    ]
  },
  {
    id: 3,
    title: "Asia Pacific University Final Year Project Showcase",
    speaker: "Yip Zi Xian, Me Myself",
    date: "15 January 2025",
    images: [
      "fyp_1.jpeg",
      "fyp_2.jpeg",
      "fyp_3.jpeg",
    ],
    description: "An opportunity to gain more exposure in presenting my ideas to industry leaders and collecting their feedbacks to further improve on my project. Extending my thanks to my lecturers and supervisors, Mr. Amad Arshad and Ms. Khurshid who helped me along the way.",
    members: []
  }
]