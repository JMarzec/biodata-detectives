import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { translations, Language } from "@shared/translations";

interface MissionBriefingProps {
  teamId: string;
  teamName: string;
  language: Language;
  onStart: () => void;
}

export default function MissionBriefing({ teamId, teamName, language, onStart }: MissionBriefingProps) {
  const [timeLeft, setTimeLeft] = useState(30);
  const [canStart, setCanStart] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setCanStart(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const t = (key: string) => {
    const keys = key.split(".");
    let value: any = translations;
    for (const k of keys) {
      value = value?.[k];
    }
    return typeof value === "object" && value !== null && language in value ? value[language] : key;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white text-slate-900 flex flex-col items-center justify-center px-4 py-8">
      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-5xl mb-4">🎯</div>
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            {t("missionBriefing.title")}
          </h1>
          <p className="text-xl text-blue-300">Team: {teamName}</p>
        </div>

        {/* Mission Content */}
        <div className="bg-blue-50/50 border border-blue-200 rounded-lg p-8 space-y-6 mb-8">
          {/* Welcome Message */}
          <div>
            <p className="text-lg text-slate-700 leading-relaxed">{t("missionBriefing.welcome")}</p>
          </div>

          {/* Transcriptomics Info */}
          <div className="bg-blue-900/50 border-l-4 border-blue-500 pl-4 py-3">
            <p className="text-slate-700">{t("missionBriefing.transcriptomics")}</p>
          </div>

          {/* Critical Thinking Message */}
          <div className="bg-blue-900/50 border-l-4 border-blue-500 pl-4 py-3">
            <p className="text-slate-700 font-semibold">{t("missionBriefing.criticalThinking")}</p>
          </div>
        </div>

        {/* Timer */}
        <div className="text-center mb-8">
          <p className="text-slate-600 mb-2">
            {canStart
              ? "✓ Ready to start!"
              : `Read the briefing carefully (${timeLeft} seconds remaining)`}
          </p>
          <div className="w-full bg-blue-100 rounded-full h-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-blue-600 to-blue-700 h-full transition-all duration-1000"
              style={{ width: `${(timeLeft / 30) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Start Button */}
        <Button
          onClick={onStart}
          disabled={!canStart}
          className="w-full py-4 text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-700 hover:from-cyan-600 hover:to-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-slate-900 rounded-lg transition-all transform hover:scale-105"
        >
          {t("missionBriefing.startButton")}
        </Button>
      </div>
    </div>
  );
}
