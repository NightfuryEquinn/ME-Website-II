export type CareersProps = {
  id: number,
  title: string,
  company: string,
  start: string,
  end: string,
  logo: string
}

export const careers: CareersProps[] = [
  {
    id: 1,
    title: "Part-Timer",
    company: "Erican Language Centre",
    start: "December 2019",
    end: "March 2020",
    logo: "erican.png"
  },
  {
    id: 2,
    title: "Front-end Developer / Intern",
    company: "Studio 20 Sdn. Bhd.",
    start: "May 2022",
    end: "October 2022",
    logo: "studio20.png"
  },
  {
    id: 3,
    title: "Software Developer Intern",
    company: "57 Codebox Sdn. Bhd.",
    start: "October 2023",
    end: "February 2024",
    logo: "57.jpeg"
  }
]