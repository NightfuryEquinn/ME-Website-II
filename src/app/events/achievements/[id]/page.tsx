"use client";

import { useParams } from "next/navigation";
import { achievements, AchievementsProps } from "../../../../../data/achievements";

export default function AchievementsDetails() {
  const { id } = useParams()
  const theAchievement = achievements.find(( achievement: AchievementsProps ) => achievement.id.toString() === id )
    
  return <>
    { theAchievement?.id }
  </>
}
