import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { translations, Language } from "@shared/translations";
import { trpc } from "@/lib/trpc";
import { useLocation } from "wouter";

interface TeamSetupProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onBack?: () => void;
  difficulty?: "beginner" | "normal" | "expert" | undefined;
}

export default function TeamSetup({ language, onLanguageChange, onBack, difficulty = "normal" }: TeamSetupProps) {
  const [teamName, setTeamName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [, setLocation] = useLocation();
  const createTeamMutation = trpc.game.createTeam.useMutation();

  const t = (key: string) => {
    const keys = key.split(".");
    let value: any = translations;
    for (const k of keys) {
      value = value?.[k];
    }
    return typeof value === "object" && value !== null && language in value ? value[language] : key;
  };

  const getRandomTeamName = () => {
    const names = translations.teamNames[language];
    return names[Math.floor(Math.random() * names.length)];
  };

  const handleRandomName = () => {
    setTeamName(getRandomTeamName());
  };

  const handleStartMission = async () => {
    if (!teamName.trim()) return;

    setIsLoading(true);
    try {
      const result = await createTeamMutation.mutateAsync({
        teamName: teamName.trim(),
        language,
        isExpertMode: difficulty === "expert",
        difficulty,
      });

      // Navigate to game page with team info
      const params = new URLSearchParams({
        teamId: result.teamId,
        isExpertMode: difficulty === "expert" ? "true" : "false",
        teamName: teamName.trim(),
        language,
        difficulty,
      });
      setLocation(`/game?${params.toString()}`);
    } catch (error) {
      console.error("Failed to create team:", error);
      alert("Failed to create team. Please try again.");
      setIsLoading(false);
    }
  };

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      setLocation("/");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white text-slate-900 flex flex-col items-center justify-center px-4 py-8">
      {/* Language Switcher */}
      <div className="absolute top-4 right-4 flex gap-2">
        <button
          onClick={() => onLanguageChange("en")}
          className={`px-4 py-2 rounded text-sm font-medium transition-all ${
            language === "en"
              ? "bg-blue-500 text-slate-900"
              : "bg-blue-100 text-slate-700 hover:bg-slate-600"
          }`}
        >
          EN
        </button>
        <button
          onClick={() => onLanguageChange("pt")}
          className={`px-4 py-2 rounded text-sm font-medium transition-all ${
            language === "pt"
              ? "bg-blue-500 text-slate-900"
              : "bg-blue-100 text-slate-700 hover:bg-slate-600"
          }`}
        >
          PT
        </button>
      </div>

      {/* Back Button */}
      <button
        onClick={handleBack}
        className="absolute top-4 left-4 px-4 py-2 text-sm font-medium bg-blue-100 hover:bg-slate-600 text-slate-900 rounded transition-all"
      >
        ← {t("teamSetup.backButton")}
      </button>

      {/* Main Content */}
      <div className="relative z-10 max-w-md w-full">
        <div className="text-center mb-8">
          <div className="text-5xl mb-4">👥</div>
          <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            {t("teamSetup.title")}
          </h2>
        </div>

        {/* Team Name Input */}
        <div className="space-y-4">
          <div>
            <Input
              type="text"
              placeholder={t("teamSetup.placeholder")}
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter" && teamName.trim()) {
                  handleStartMission();
                }
              }}
              className="w-full px-4 py-3 bg-blue-50 border border-blue-200 text-slate-900 placeholder-slate-500 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-cyan-500/50"
              disabled={isLoading}
            />
          </div>

          {/* Random Name Button */}
          <Button
            onClick={handleRandomName}
            disabled={isLoading}
            className="w-full py-3 bg-blue-100 hover:bg-slate-600 text-slate-900 rounded-lg transition-all"
          >
            🎲 {t("teamSetup.randomNameButton")}
          </Button>

          {/* Start Mission Button */}
          <Button
            onClick={handleStartMission}
            disabled={!teamName.trim() || isLoading}
            className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-cyan-600 hover:to-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-slate-900 rounded-lg transition-all transform hover:scale-105"
          >
            {isLoading ? t("common.loading") : t("teamSetup.startButton")}
          </Button>
        </div>

        {/* Suggested Names */}
        <div className="mt-8 p-4 bg-blue-50/50 rounded-lg border border-blue-200">
          <p className="text-sm text-slate-600 mb-3">💡 {t("common.success")} suggestions:</p>
          <div className="flex flex-wrap gap-2">
            {translations.teamNames[language]
              .slice(0, 5)
              .map((name, idx) => (
                <button
                  key={idx}
                  onClick={() => setTeamName(name)}
                  className="px-3 py-1 text-xs bg-blue-100 hover:bg-blue-600 text-slate-900 rounded transition-all"
                >
                  {name}
                </button>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
