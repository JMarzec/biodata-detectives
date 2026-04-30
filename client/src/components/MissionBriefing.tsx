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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white flex flex-col items-center justify-center px-4 py-8">
      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-5xl mb-4">🎯</div>
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            {t("missionBriefing.title")}
          </h1>
          <p className="text-xl text-cyan-300">Team: {teamName}</p>
        </div>

        {/* Mission Content */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 space-y-6 mb-8">
          {/* Welcome Message */}
          <div>
            <p className="text-lg text-slate-300 leading-relaxed">{t("missionBriefing.welcome")}</p>
          </div>

          {/* Transcriptomics Info */}
          <div className="bg-slate-900/50 border-l-4 border-cyan-500 pl-4 py-3">
            <p className="text-slate-300">{t("missionBriefing.transcriptomics")}</p>
          </div>

          {/* Critical Thinking Message */}
          <div className="bg-slate-900/50 border-l-4 border-blue-500 pl-4 py-3">
            <p className="text-slate-300 font-semibold">{t("missionBriefing.criticalThinking")}</p>
          </div>
        </div>

        {/* Timer */}
        <div className="text-center mb-8">
          <p className="text-slate-400 mb-2">
            {canStart
              ? "✓ Ready to start!"
              : `Read the briefing carefully (${timeLeft} seconds remaining)`}
          </p>
          <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full transition-all duration-1000"
              style={{ width: `${(timeLeft / 30) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Start Button */}
        <Button
          onClick={onStart}
          disabled={!canStart}
          className="w-full py-4 text-lg font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg transition-all transform hover:scale-105"
        >
          {t("missionBriefing.startButton")}
        </Button>
      </div>
    </div>
  );
}
