export type InterestsProps = {
  id: number,
  name: string,
  description: string,
  image: string
}

export const interests: InterestsProps[] = [
  {
    id: 1,
    name: "Archery",
    description: "Joined in secondary school and it sparked my interests in marksmanship. I also learnt skills such as club management, bow assembling and dissambling, archery equipment repairing for fletchers, arrow tips etc. Hook me up if there is any archery events, I will be there!",
    image: "archery.png"
  },
  {
    id: 2,
    name: "ITF Taekwondo",
    description: "Having some fever over martial arts, I started since 16 years old. Although my stretching is on the downside, but rest assured, my sparring is on point. Anyways, discipline, self-control, mindset are the key factors I inovlved myself in one of many martial arts.",
    image: "taekwondo.png"
  },
  {
    id: 3,
    name: "Astronomy",
    description: "Since I was young, I always have the dream of exploring the stars and galaxies even until now I still dream on. Interstellar was the main driver which continuously motivates me to at least completed a degree in Astrophysics regardless how old I am and will be.",
    image: "astronomy.png"
  },
  {
    id: 4,
    name: "Bassoon",
    description: "Actually I wanted to learn cello when I joined my secondary school orchestra, but my coach told me to fill in the space at the woodwind section, the Bassoon. It was a heck expensive instrument that eventually I fond of it and wished to own one in the future. I do hope to perform in an orchestra again if I have the opportunity.",
    image: "bassoon.png"
  }
]