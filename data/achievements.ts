export type AchievementsProps = {
  id: number,
  title: string,
  award: string,
  issuedBy: NameProps[],
  under: string,
  date: string,
  description: string,
  members: NameProps[],
}

export type NameProps = {
  id: number,
  name: string,
}

export const achievements: AchievementsProps[] = [
  {
    id: 1,
    title: "Largest Participation in a 'Zongzi' Making Event",
    award: "Certificate of Participation",
    issuedBy: [
      {
        id: 1,
        name: "Tan Sri Danny Ooi, Founder"
      }
    ],
    under: "The Malaysia Book of Records",
    date: "June 2015",
    description: "Total: 2000 participants",
    members: [
      {
        id: 1,
        name: "Students of SMJK Sam Tet"
      }
    ]
  },
  {
    id: 2,
    title: "Longest 'Zhuan Shu Hui Chun' Calligraphy",
    award: "Certificate of Participation",
    issuedBy: [
      {
        id: 1,
        name: "YB Yuan Chang Lih Kang, Ahli Parlimen Tanjung Malim"
      },
      {
        id: 2,
        name: "Tan Sri Datuk Danny Ooi, Founder"
      },
      {
        id: 3,
        name: "Dato' Michael Tio, CEO"
      }
    ],
    under: "The Malaysia Book of Records",
    date: "February 2019",
    description: "Length: 621.20 meters",
    members: [
      {
        id: 1,
        name: "Students of SMJK Sam Tet"
      }
    ]
  },
  {
    id: 3,
    title: "Math Carnival 2020",
    award: "Certificate of Participation",
    issuedBy: [
      {
        id: 1,
        name: "Mr. Rajasegeran a/l Ramasamy, Head of School"
      },
      {
        id: 2,
        name: "Dr. Hari Narayanan a/l P. Ondiveeran, Vice Chancellor"
      }
    ],
    under: "School of Mathematics, Actuarial, and Quantitative Studies of Asia Pacific University (APU)",
    date: "December 2020",
    description: "Participated as member of a group called 'The Derivatives' in three different events, Math Magician, Math Merrill, and Mathletes. As I am interested in Maths and Physics, I opt to join this carnival to gain new insights about university campus events while making new friends and connections.",
    members: [
      {
        id: 1,
        name: "Yip Zi Xian"
      },
      {
        id: 2,
        name: "Lim Chen Yang"
      },
      {
        id: 3,
        name: "Liew Khai Xen"
      },
      {
        id: 4,
        name: "Lee Dong Xuan",
      },
      {
        id: 5,
        name: "Chua E Heng"
      }
    ]
  },
  {
    id: 4,
    title: "PyPro Competition",
    award: "Certificate of Participation",
    issuedBy: [
      {
        id: 1,
        name: "Prof. Dr. R. Logeswaran, Chair, IEEE SPS Malaysia Chapter, Head, APCA"
      },
      {
        id: 2,
        name: "Dr. Nowshath K. Batcha, Advisor, APAC"
      }
    ],
    under: "Asia Pacific Analytics Club",
    date: "May 2021",
    description: "Joined for the only reason to learn more about data analytics usage in Python. I have no second idea why I joined but I gained some knowledges about NumPy, Pandas and Matplotlib so it was worth the fun.",
    members: []
  },
  {
    id: 5,
    title: "Block Us Competition",
    award: "Certificate of Participation",
    issuedBy: [
      {
        id: 1,
        name: "Assoc. Prof. Wong Bee Suan, Head, School of Computing",
      },
    ],
    under: "Asia Pacific University",
    date: "May 2022",
    description: "This competition has no connection to programming languages or IT skills or whatsoever. I participated in this competition because I initially hope to win a printer for my hostel. Sadly, I lost in the preliminary round. Hehe XD.",
    members: []
  },
  {
    id: 6,
    title: "AWS DeepRacer League",
    award: "Certificate of Participation",
    issuedBy: [
      {
        id: 1,
        name: "Prof. Dr. Ho Chin Kuan, Vice Chancellor of Asia Pacific University",
      }
    ],
    under: "Asia Pacific University collaborating with Amazon Web Services",
    date: "April 2023",
    description: "Participated with two of my classmates. During that time, I suddenly started to shift my attention towards AI and Machine Learning. It is very interesting that I can write Python programs in terms of reward functions and train the model to speed through the race track. The Python files are available in my GitHub as repository",
    members: [
      {
        id: 1,
        name: "Yip Zi Xian"
      },
      {
        id: 2,
        name: "Aw Yong Xue Li"
      },
      {
        id: 3,
        name: "Neong Yee Kay"
      }
    ],
  },
  {
    id: 7,
    title: "Hilti IT Competition 2024",
    award: "Certificate of Achievement, Semi-finalist",
    issuedBy: [
      {
        id: 1,
        name: "Chief Information Officer (CIO), Hilti AG, Mr. Johannes Reichert"
      },
      {
        id: 2,
        name: "Head of IT, Hilti Asia IT Services, Mr. Lee Wai Meng"
      }
    ],
    under: "Hilti",
    date: "June 2024",
    description: "This is the second, more serious competition I have participated in a team. We are requested to propose an enhanced version of Hilti current HR system. Our team has leveraged the Figma prototype and Canva slides to present the ideas to the panel of judges. It was quite an experience as I was appointed the role of Fullstack Developer to draft out a whole system architecture.",
    members: [
      {
        id: 1,
        name: "Yip Zi Xian"
      },
      {
        id: 2,
        name: "Tan Xiu Haw"
      },
      {
        id: 3,
        name: "Tan Wei Kang"
      },
      {
        id: 4,
        name: "Eyu Ji Yuen"
      },
      {
        id: 5,
        name: "Chin Pei Yueh"
      }
    ]
  }
]