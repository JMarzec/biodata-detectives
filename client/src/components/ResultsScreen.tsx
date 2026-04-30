import { Button } from "@/components/ui/button";
import { translations, Language } from "@shared/translations";
import { formatTime } from "@shared/gameEngine";

interface ResultsScreenProps {
  teamName: string;
  totalScore: number;
  accuracy: number;
  timeTaken: number;
  rank: string;
  rankKey: string;
  language: Language;
  onPlayAgain: () => void;
  onViewLeaderboard: () => void;
  isExpertMode?: boolean;
}

export default function ResultsScreen({
  teamName,
  totalScore,
  accuracy,
  timeTaken,
  rank,
  rankKey,
  language,
  onPlayAgain,
  onViewLeaderboard,
  isExpertMode = false,
}: ResultsScreenProps) {
  const t = (key: string) => {
    const keys = key.split(".");
    let value: any = translations;
    for (const k of keys) {
      value = value?.[k];
    }
    return typeof value === "object" && value !== null && language in value ? value[language] : key;
  };

  const getRankMessage = () => {
    const messageKey = `rankMessages.${rankKey.split(".")[1]}`;
    const keys = messageKey.split(".");
    let value: any = translations;
    for (const k of keys) {
      value = value?.[k];
    }
    return typeof value === "object" && value !== null && language in value ? value[language] : "";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white text-slate-900 flex flex-col items-center justify-center px-4 py-8">
      {/* Confetti animation would go here */}

      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4 animate-bounce">🎉</div>
          <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            {t("results.title")}
          </h1>
          <p className="text-2xl text-blue-300 mb-2">{teamName}</p>
        </div>

        {/* Score Card */}
        <div className="bg-blue-50/50 border border-blue-200 rounded-lg p-8 mb-8 space-y-6">
          {/* Score Display */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-900/50 rounded-lg p-4 text-center">
              <p className="text-slate-600 text-sm mb-2">{t("results.finalScore")}</p>
              <p className="text-4xl font-bold text-blue-400">{totalScore}</p>
            </div>
            <div className="bg-blue-900/50 rounded-lg p-4 text-center">
              <p className="text-slate-600 text-sm mb-2">{t("results.accuracy")}</p>
              <p className="text-4xl font-bold text-blue-400">{accuracy}%</p>
            </div>
            <div className="bg-blue-900/50 rounded-lg p-4 text-center col-span-2">
              <p className="text-slate-600 text-sm mb-2">{t("results.timeTaken")}</p>
              <p className="text-3xl font-bold text-green-400">{formatTime(timeTaken)}</p>
            </div>
          </div>

          {/* Rank Display */}
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-blue-500/50 rounded-lg p-6 text-center">
            <p className="text-slate-600 text-sm mb-2">{t("results.rank")}</p>
            <p className="text-3xl font-bold text-blue-300 mb-3">{rank}</p>
            <p className="text-slate-700 text-sm leading-relaxed">{getRankMessage()}</p>
          </div>

          {/* Lab Description */}
          <div className="space-y-4">
            <div className="bg-blue-900/50 border-l-4 border-blue-500 pl-4 py-3">
              <p className="text-slate-700">{t("labDescription.intro")}</p>
            </div>
            <div className="bg-blue-900/50 border-l-4 border-blue-500 pl-4 py-3">
              <p className="text-slate-700">{t("labDescription.details")}</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button
            onClick={onPlayAgain}
            className="w-full py-4 text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-700 hover:from-cyan-600 hover:to-blue-600 text-slate-900 rounded-lg transition-all transform hover:scale-105"
          >
            {t("results.playAgain")}
          </Button>
          <Button
            onClick={onViewLeaderboard}
            className="w-full py-4 text-lg font-semibold bg-blue-100 hover:bg-slate-600 text-slate-900 rounded-lg transition-all"
          >
            {t("results.leaderboard")}
          </Button>
        </div>
      </div>
    </div>
  );
}
