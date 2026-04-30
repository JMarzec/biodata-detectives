import { useState } from "react";
import { Button } from "@/components/ui/button";
import { translations, Language } from "@shared/translations";
import TeamSetup from "@/components/TeamSetup";
import { useLocation } from "wouter";

type Screen = "welcome" | "teamSetup" | "playWithoutTeam";

export default function Welcome() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("welcome");
  const [language, setLanguage] = useState<Language>("en");
  const [, setLocation] = useLocation();

  const t = (key: string) => {
    const keys = key.split(".");
    let value: any = translations;
    for (const k of keys) {
      value = value?.[k];
    }
    return typeof value === "object" && value !== null && language in value ? value[language] : key;
  };

  const handleCreateTeam = () => {
    setCurrentScreen("teamSetup");
  };

  const handlePlayWithoutTeam = () => {
    // Create anonymous team
    setCurrentScreen("playWithoutTeam");
  };

  const handleViewLeaderboard = () => {
    setLocation("/leaderboard");
  };

  if (currentScreen === "teamSetup") {
    return (
      <TeamSetup
        language={language}
        onLanguageChange={setLanguage}
        onBack={() => setCurrentScreen("welcome")}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white flex flex-col items-center justify-center px-4 py-8">
      {/* Animated background grid */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>

      {/* Language Switcher - Top Right */}
      <div className="absolute top-4 right-4 flex gap-2">
        <button
          onClick={() => setLanguage("en")}
          className={`px-4 py-2 rounded text-sm font-medium transition-all ${
            language === "en"
              ? "bg-cyan-500 text-white"
              : "bg-slate-700 text-slate-300 hover:bg-slate-600"
          }`}
        >
          EN
        </button>
        <button
          onClick={() => setLanguage("pt")}
          className={`px-4 py-2 rounded text-sm font-medium transition-all ${
            language === "pt"
              ? "bg-cyan-500 text-white"
              : "bg-slate-700 text-slate-300 hover:bg-slate-600"
          }`}
        >
          PT
        </button>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4 animate-pulse">🧬</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            {t("welcome.title")}
          </h1>
          <p className="text-2xl md:text-3xl text-cyan-300 mb-6">{t("welcome.subtitle")}</p>
          <p className="text-lg text-slate-300 mb-8">{t("welcome.description")}</p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4 mb-8">
          <Button
            onClick={handleCreateTeam}
            className="w-full py-6 text-lg font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-lg transition-all transform hover:scale-105"
          >
            {t("teamSetup.title")}
          </Button>

          <Button
            onClick={handlePlayWithoutTeam}
            className="w-full py-6 text-lg font-semibold bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-all"
          >
            {t("welcome.buttons.playWithoutTeam")}
          </Button>

          <Button
            onClick={handleViewLeaderboard}
            className="w-full py-6 text-lg font-semibold bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-all"
          >
            {t("welcome.buttons.leaderboard")}
          </Button>
        </div>

        {/* Footer */}
        <div className="text-center text-slate-400 text-sm border-t border-slate-700 pt-6">
          <p>{t("welcome.footer")}</p>
        </div>
      </div>

      <style>{`
        @keyframes grid-animation {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 40px 40px;
          }
        }

        .bg-grid-pattern {
          background-image:
            linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
          animation: grid-animation 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
