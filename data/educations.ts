export type EducationsProps = {
  id: number,
  title: string,
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
  position: string
}

export type EducationCourseProps = {
  id: number,
  name: string,
}

export const educations: EducationsProps[] = [

]