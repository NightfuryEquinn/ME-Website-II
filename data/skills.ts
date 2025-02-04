export enum SkillCategory {
  technical = "Technical",
  recreation = "Recreation",
  others = "Other"
}

export type SkillsProps = {
  id: number,
  title: string,
  category: SkillCategory
}

export const skills: SkillsProps[] = [
  {
    id: 1,
    title: "Git GitHub",
    category: SkillCategory.technical
  },
  {
    id: 2,
    title: "Software Development",
    category: SkillCategory.technical
  },
  {
    id: 3,
    title: "Android Development",
    category: SkillCategory.technical
  },
  {
    id: 4,
    title: "API Development",
    category: SkillCategory.technical
  },
  {
    id: 5,
    title: "Mobile App Development",
    category: SkillCategory.technical
  },
  {
    id: 6,
    title: "2D/3D Web Development",
    category: SkillCategory.technical
  },
  {
    id: 7,
    title: "Full-stack Development",
    category: SkillCategory.technical
  },
  {
    id: 8,
    title: "UI/UX Design",
    category: SkillCategory.others
  },
  {
    id: 9,
    title: "Software Documentation",
    category: SkillCategory.others
  },
  {
    id: 10,
    title: "Unity",
    category: SkillCategory.technical
  },
  {
    id: 11,
    title: "Blender",
    category: SkillCategory.technical
  },
  {
    id: 12,
    title: "Archery",
    category: SkillCategory.recreation
  },
  {
    id: 13,
    title: "Taekwondo",
    category: SkillCategory.recreation
  },
  {
    id: 14,
    title: "Badminton",
    category: SkillCategory.recreation
  },
  {
    id: 15,
    title: "Bassoon",
    category: SkillCategory.recreation
  },
  {
    id: 16,
    title: "Stargazing",
    category: SkillCategory.recreation
  },
]