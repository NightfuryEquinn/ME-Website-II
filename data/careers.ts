export type CareersProps = {
  id: number,
  title: string,
  company: string,
  location: string,
  start: string,
  end: string,
  logo: string,
  skills: CareersSkillProps[],
  description: string
}

export type CareersSkillProps = {
  id: number,
  name: string
}

export const careers: CareersProps[] = [
  {
    id: 1,
    title: "Part-Timer",
    company: "Erican Language Centre",
    location: "Perak, Malaysia",
    start: "December 2019",
    end: "March 2020",
    logo: "erican.png",
    skills: [
      {
        id: 1,
        name: "Customer Service"
      },
      {
        id: 2,
        name: "Communication"
      }
    ],
    description: "Contacting customers for follow-ups on enrolment and course advancement. Helping out on weekend lessons or events and preparing teaching materials. Guarding and overseeing examination halls."
  },
  {
    id: 2,
    title: "Front-end Developer / Intern",
    company: "Studio 20 Sdn. Bhd.",
    location: "Kuala Lumpur, Malaysia",
    start: "May 2022",
    end: "October 2022",
    logo: "studio20.png",
    skills: [
      {
        id: 1,
        name: "Customer Service"
      },
      {
        id: 2,
        name: "Software Development"
      },
      {
        id: 3,
        name: "Communication"
      },
      {
        id: 4,
        name: "Web Development"
      },
      {
        id: 5,
        name: "Git Github"
      }
    ],
    description: "As an front-end intern, learning the fundamentals of front-end development, focusing on mobile-responsive design using WordPress PHP, ReactJS, and TailwindCSS. Involves communicating with clients and designers to find optimal solutions for website usability and development efficiency. Manage smaller projects, such as The Wildcats and eMart24, while also collaborating on larger projects, including FHL, HoHup Flex, USJ Citypoint, and PayPal, leveraging GitHub for version control and collaboration. Converted to front-end developer after three-month internship, expanding skillset by learning new frameworks and libraries like NextJS and Strapi, adapting to different programming languages, and transitioning between various projects. Responsibilities include managing company server files, maintaining website health, and handling moderately larger projects, such as Microlink and Syspex. Maintain earlier projects and work closely with back-end developers to integrate websites with servers effectively."
  },
  {
    id: 3,
    title: "Software Developer Intern",
    company: "57 Codebox Sdn. Bhd.",
    location: "Kuala Lumpur, Malaysia",
    start: "October 2023",
    end: "February 2024",
    logo: "57.jpeg",
    skills: [
      {
        id: 1,
        name: "Customer Service"
      },
      {
        id: 2,
        name: "Mobile Application Development"
      },
      {
        id: 3,
        name: "UI/UX Design"
      },
      {
        id: 4,
        name: "Software Development"
      },
      {
        id: 5,
        name: "API Development"
      },
      {
        id: 6,
        name: "Software Documentation"
      },
      {
        id: 7,
        name: "Communication"
      },
      {
        id: 8,
        name: "Web Development"
      },
      {
        id: 9,
        name: "Git Github"
      },
      {
        id: 10,
        name: "Android Development"
      },
      {
        id: 11,
        name: "Full-stack Development"
      }
    ],
    description: "Adapting different roles and learning various skills like documentation, UI designing, full stack development on projects like Solarvest, Powervest, Nusa Kapital, Euroq Assistance etc. Briefly communicate and provide guidance with potential clients to promote in-house application - ConneXtion. Working on website with Angular Bootstrap and Angular Tailwind, mobile application with React Native, API and back-end development using .NET Core / C#. Handling tight deadlines and deliverables while communicating with colleagues to ensure that the website and mobile application are connected via the same API developed."
  },
  {
    id: 4,
    title: "JS Back End Developer",
    company: "Studio 20 Sdn. Bhd.",
    location: "Kuala Lumpur, Malaysia",
    start: "February 2025",
    end: "August 2025",
    logo: "studio20.png",
    skills: [
      {
        id: 1,
        name: "Software Development"
      },
      {
        id: 2,
        name: "API Development"
      },
      {
        id: 3,
        name: "Web Development"
      },
      {
        id: 4,
        name: "Mobile Application Development"
      },
      {
        id: 5,
        name: "Git Github"
      }
    ],
    description: "NestJS, PayloadCMS, Swagger API, Ionic Capacitor React Native, Expo, Vercel, WebRTC, Stripe, Docker, GitHub workflow, Kysely"
  },
  {
    id: 5,
    title: "Fullstack JS Developer",
    company: "Studio 20 Sdn. Bhd.",
    location: "Kuala Lumpur, Malaysia",
    start: "September 2025",
    end: "January 2026",
    logo: "studio20.png",
    skills: [
      {
        id: 1,
        name: "Full-stack Development"
      },
      {
        id: 2,
        name: "Mobile Application Development"
      },
      {
        id: 3,
        name: "Web Development"
      },
      {
        id: 4,
        name: "Software Development"
      },
      {
        id: 5,
        name: "API Development"
      },
      {
        id: 6,
        name: "Communication"
      },
      {
        id: 7,
        name: "Git Github"
      }
    ],
    description: "Leading two projects simultaneously and coordinating weekly SCRUM for team updates. Transitioning between different projects, adapting on multiple distinct frameworks. Developed RTC-Made-Simple package for real-time video conferencing and messaging. Collaborating with teams in projects like Trainee Companion, Maid Without Borders, Invicta Performance etc. Focus on mobile development using React Native Expo, Kotlin, Swift, and API development with Kysely, Docker, NestJS."
  }
]