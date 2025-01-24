export type VolunteersProps = {
  id: number,
  name: string,
  description: string[],
  category: string,
  position: string,
  start: string,
  end: string,
}

export const volunteers: VolunteersProps[] = [
  {
    id: 1,
    name: "Z-E-N",
    description: [
      "Just a normal personal server to keep myself fresh with Discord.",
      "A playground to program my own Discord bot.", 
      "Maintaining a professional yet relaxing virtual place for all activities abide with rules mentioned in the server.",
    ],
    category: "Science & Technology",
    position: "Founder",
    start: "December 2020",
    end: "Present",
  },
  {
    id: 2,
    name: "Pynata",
    description: [
      "Currently have more than 200 members in our community.",
      "Provides IT enthusiasts a platform for discussion, project recruitment and establishing connections.",
      "Organizes workshops and events for community members to grow and learn."
    ],
    category: "Science & Technology",
    position: "Co-Founder",
    start: "July 2021",
    end: "Present"
  }
]