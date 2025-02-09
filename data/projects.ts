export type ProjectsProps = {
  id: number,
  title: string,
  logo: string,
  description: string,
  languages: string[],
  redirect: string,
}

export const projects: ProjectsProps[] = [
  {
    id: 1,
    title: "Star System",
    logo: "star_system.png",
    description: "To showcase some of my React Three Fiber skills and shaders. Kinda partially completed, but it can be better and more performance-optimized. There are much to learn for me, too ambitous to kick off with a huge project, yet I should be step-by-step in developing my portfolio. TypeScript is bad for portfolio, in my opinion.",
    languages: [
      "React JS Typescript",
      "React Three",
      "HTML CSS",
      "GLSL"
    ],
    redirect: "https://star-system.vercel.app"
  },
  {
    id: 2,
    title: "Raw2Plate: Fuel+",
    logo: "bao.png",
    description: "I proudly present, my final year project in degree at Asia Pacific University. An intelligent recipes finder with calories tracker and grocery shopping. Documentation are available upon request.",
    languages: [
      "React Native",
      "AWS API C#"
    ],
    redirect: "https://github.com/NightfuryEquinn/Raw2Plate-Fuel-Plus"
  },
  {
    id: 3,
    title: "Where's my Ingredients?",
    logo: "ingredients.png",
    description: "I mean we have no idea why our Mobile Technology degree included a game development module, in C# with Unity. It was a totally different and confused course structure for me but we managed to pull it off in time, creating a 2D platformer (but very user-unfriendly).",
    languages: [
      "Unity C#"
    ],
    redirect: "https://github.com/NightfuryEquinn/WhereAreMyIngredients"
  },
  {
    id: 4,
    title: "Findrobe",
    logo: "findrobe.png",
    description: "A lifestyle social application created with Firebase. Manage your wardrobe easily and pick n' match daily outfits without having the hassle of putting it on and taking it down again and again and again ... Admin interface are also available for data analysis and reporting purposes visualised in graphs.",
    languages: [
      "Flutter"
    ],
    redirect: "https://github.com/NightfuryEquinn/Findrobe"
  },
  {
    id: 5,
    title: "HaulEase",
    logo: "haulease.png",
    description: "A shipment delivery system for local and international clients. Users are required to register and sign in before accessing consumers' functions while admins can monitor and manage progress of all shipments.",
    languages: [
      "Kotlin",
      "AWS API C#"
    ],
    redirect: "https://github.com/NightfuryEquinn/HaulEase"
  },
  {
    id: 6,
    title: "Chateau du Nox",
    logo: "chateau.png",
    description: "The first-and-only iOS application I created for my university assignment in Mac lab because I, of course, don't have a Mac (can't afford for now). A vineyard delivery system for consumers only.",
    languages: [
      "Swift"
    ],
    redirect: "https://github.com/NightfuryEquinn/Chateau-Du-Nox"
  }
]