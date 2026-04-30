import { useState } from "react";
import { Language } from "@shared/translations";
import Leaderboard from "@/components/Leaderboard";

export default function LeaderboardPage() {
  const [language, setLanguage] = useState<Language>("en");
  const isLargeDisplay = typeof window !== "undefined" && window.innerWidth > 1200;

  return (
    <Leaderboard
      language={language}
      onLanguageChange={setLanguage}
      displayMode={isLargeDisplay ? "large" : "mobile"}
    />
  );
}
