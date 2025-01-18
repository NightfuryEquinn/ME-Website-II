export type EducationsProps = {
  id: number,
  title: string,
  qualification: string,
  location: string,
  grade: string,
  start: string,
  end: string,
  logo: string,
  cocurriculum: EducationCocoProps[],
  courses: EducationCourseProps[]
}

export type EducationCocoProps = {
  id: number,
  name: string,
  position: string,
  image: string[]
}

export type EducationCourseProps = {
  id: number,
  name: string,
}

export const educations: EducationsProps[] = [
  {
    id: 1,
    title: "SMJK Sam Tet",
    qualification: "Sijil Pelajaran Malaysia (SPM)",
    location: "Perak, Malaysia",
    grade: "8As 2Bs",
    start: "Jan 2015",
    end: "Nov 2019",
    logo: "sam_tet.jpg",
    cocurriculum: [
      {
        id: 1,
        name: "Sam Tet Symphony Orchestra (STSO)",
        position: "Bassoonist",
        image: [
          "stso_1.jpg",
          "stso_2.jpg",
          "stso_3.jpg"
        ]
      },
      {
        id: 2,
        name: "Sam Tet Archery Club",
        position: "President (2019/20)",
        image: []
      },
      {
        id: 3,
        name: "Sam Tet Math Club",
        position: "Secretary (2018/20)",
        image: []
      }
    ],
    courses: [
      {
        id: 1,
        name: "Bahasa Malaysia, Chinese, English"
      },
      {
        id: 2,
        name: "Modern & Additional Mathematics"
      },
      {
        id: 3,
        name: "History (Sejarah)"
      },
      {
        id: 4,
        name: "Physics, Chemistry, Biology"
      },
      {
        id: 5,
        name: "Moral (Pendidikan Moral)"
      }
    ]
  },
  {
    id: 2,
    title: "Asia Pacific University (APU)",
    qualification: "Diploma in Information and Communication Technology specialism in Software Engineering",
    location: "Kuala Lumpur, Malaysia",
    grade: "CGPA 3.48",
    start: "May 2020",
    end: "Jun 2022",
    logo: "apu.jpeg",
    cocurriculum: [],
    courses: [
      {
        id: 1,
        name: "Managing Business"
      },
      {
        id: 2,
        name: "English for Academic Purposes"
      },
      {
        id: 3,
        name: "Fundamentals of Entrepreneurship"
      },
      {
        id: 4,
        name: "Practical IT Skills"
      },
      {
        id: 5,
        name: "Discrete Mathematics"
      },
      {
        id: 6,
        name: "Academic Research Skills"
      },
      {
        id: 7,
        name: "Information Systems"
      },
      {
        id: 8,
        name: "Professional Communications"
      },
      {
        id: 9,
        name: "Programming with Python"
      },
      {
        id: 10,
        name: "Computer Systems Architecture"
      },
      {
        id: 11,
        name: "Operating Systems"
      },
      {
        id: 12,
        name: "Database Systems"
      },
      {
        id: 13,
        name: "Introduction to Software Engineering"
      },
      {
        id: 14,
        name: "Systems Analysis and Design"
      },
      {
        id: 15,
        name: "Web Development"
      },
      {
        id: 16,
        name: "Numerical Methods"
      },
      {
        id: 17,
        name: "Networks and Networking"
      },
      {
        id: 18,
        name: "Introduction to Artificial Intelligence"
      },
      {
        id: 19,
        name: "Java Programming"
      },
      {
        id: 20,
        name: "Digital Security and Forensics"
      },
      {
        id: 21,
        name: "Software Development Project"
      }
    ]
  },
  {
    id: 3,
    title: "Asia Pacific University (APU)",
    qualification: "Bachelor's Degree in Information Technology specialism in Mobile Technology",
    location: "Kuala Lumpur, Malaysia",
    grade: "CGPA 3.68",
    start: "Nov 2022",
    end: "Nov 2024",
    logo: "apu.jpeg",
    cocurriculum: [
      {
        id: 1,
        name: "APU Taekwondo Club",
        position: "Assistant Media Committee (2023)",
        image: [
          "tkd_media_1.jpg",
          "tkd_media_2.jpg"
        ]
      }
    ],
    courses: [
      {
        id: 1,
        name: "Probability and Statistical Modelling"
      },
      {
        id: 2,
        name: "Object-oriented Development with Java"
      },
      {
        id: 3,
        name: "System Development Methods"
      },
      {
        id: 4,
        name: "Mobile and Wireless Technology"
      },
      {
        id: 5,
        name: "iOS Mobile App Development"
      },
      {
        id: 6,
        name: "Programming for Data Analysis"
      },
      {
        id: 7,
        name: "Workplace Professional Communication Skills"
      },
      {
        id: 8,
        name: "Creativity and Innovation"
      },
      {
        id: 9,
        name: "Computer Games Design: High Concept and Preproduction"
      },
      {
        id: 10,
        name: "Human Computer Interaction"
      },
      {
        id: 11,
        name: "Web Applications"
      },
      {
        id: 12,
        name: "Research Methods for Computing and Technology"
      },
      {
        id: 13,
        name: "Mobile App Engineering"
      },
      {
        id: 14,
        name: "Employee and Employment Trends"
      },
      {
        id: 15,
        name: "Computer System Management"
      },
      {
        id: 16,
        name: "Project Management"
      },
      {
        id: 17,
        name: "Investigations in Mobile Technology"
      },
      {
        id: 18,
        name: "Mobile and Web Multimedia"
      },
      {
        id: 19,
        name: "Cloud Infrastructure and Services"
      },
      {
        id: 20,
        name: "Advanced Mobile Computing with Android"
      },
      {
        id: 21,
        name: "Innovation Management and New Product Development"
      },
      {
        id: 22,
        name: "Mobile Commerce"
      },
      {
        id: 23,
        name: "Multi-Platform Mobile App Development"
      },
      {
        id: 24,
        name: "Mobile Technology Project"
      },
    ]
  },
  {
    id: 4,
    title: "De Montfort University",
    qualification: "Diploma in Information and Communication Technology specialism in Software Engineering",
    location: "Kuala Lumpur, Malaysia",
    grade: "Dual-degree Programme with APU",
    start: "Nov 2022",
    end: "Nov 2024",
    logo: "de_montfort.png",
    cocurriculum: [],
    courses: []
  }
]