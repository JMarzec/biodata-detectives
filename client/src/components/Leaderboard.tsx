import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { translations, Language } from "@shared/translations";
import { trpc } from "@/lib/trpc";
import { formatTime } from "@shared/gameEngine";

interface LeaderboardProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  displayMode?: "mobile" | "large"; // large for stand display
}

export default function Leaderboard({
  language,
  onLanguageChange,
  displayMode = "mobile",
}: LeaderboardProps) {
  const [autoRefresh, setAutoRefresh] = useState(displayMode === "large");
  const [showTeamSessions, setShowTeamSessions] = useState(false);
  const [selectedDifficulty, setSelectedDifficulty] = useState<"beginner" | "normal" | "expert" | undefined>(undefined);
  
  // Use team session leaderboard if toggled, otherwise use individual scores
  const { data: leaderboard, isLoading: leaderboardLoading, refetch } = trpc.game.getLeaderboard.useQuery({ difficulty: selectedDifficulty });
  const { data: teamSessions, isLoading: teamSessionsLoading } = trpc.game.getTeamSessionLeaderboard.useQuery();
  
  const isLoading = showTeamSessions ? teamSessionsLoading : leaderboardLoading;
  const scores = showTeamSessions ? (teamSessions || []) : (leaderboard || []);

  useEffect(() => {
    if (!autoRefresh) return;

    const interval = setInterval(() => {
      refetch();
    }, 5000); // Refresh every 5 seconds in large display mode

    return () => clearInterval(interval);
  }, [autoRefresh, refetch]);

  const t = (key: string) => {
    const keys = key.split(".");
    let value: any = translations;
    for (const k of keys) {
      value = value?.[k];
    }
    return typeof value === "object" && value !== null && language in value ? value[language] : key;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white text-slate-900 flex items-center justify-center">
        <p className="text-xl">{t("common.loading")}</p>
      </div>
    );
  }



  if (displayMode === "large") {
    // Large display mode for stand/projector
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white text-slate-900 flex flex-col p-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-7xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            {t("leaderboard.title")}
          </h1>
          <p className="text-3xl text-blue-300">{t("welcome.footer")}</p>
          
          {/* Team Session Toggle */}
          <div className="mt-6 flex justify-center gap-4">
            <button
              onClick={() => setShowTeamSessions(false)}
              className={`px-6 py-2 text-xl rounded-lg font-semibold transition ${
                !showTeamSessions
                  ? "bg-blue-500 text-slate-900"
                  : "bg-blue-100 text-slate-700 hover:bg-slate-600"
              }`}
            >
              Individual Scores
            </button>
            <button
              onClick={() => setShowTeamSessions(true)}
              className={`px-6 py-2 text-xl rounded-lg font-semibold transition ${
                showTeamSessions
                  ? "bg-blue-500 text-slate-900"
                  : "bg-blue-100 text-slate-700 hover:bg-slate-600"
              }`}
            >
              Team Scores
            </button>
          </div>
          
          {/* Difficulty Filter */}
          {!showTeamSessions && (
            <div className="mt-6 flex justify-center gap-3">
              <button
                onClick={() => setSelectedDifficulty(undefined)}
                className={`px-4 py-2 text-lg rounded-lg font-semibold transition ${
                  selectedDifficulty === undefined
                    ? "bg-blue-500 text-slate-900"
                    : "bg-blue-100 text-slate-700 hover:bg-slate-600"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setSelectedDifficulty("beginner")}
                className={`px-4 py-2 text-lg rounded-lg font-semibold transition ${
                  selectedDifficulty === "beginner"
                    ? "bg-green-500 text-slate-900"
                    : "bg-blue-100 text-slate-700 hover:bg-slate-600"
                }`}
              >
                🌱 Beginner
              </button>
              <button
                onClick={() => setSelectedDifficulty("normal")}
                className={`px-4 py-2 text-lg rounded-lg font-semibold transition ${
                  selectedDifficulty === "normal"
                    ? "bg-blue-500 text-slate-900"
                    : "bg-blue-100 text-slate-700 hover:bg-slate-600"
                }`}
              >
                Normal
              </button>
              <button
                onClick={() => setSelectedDifficulty("expert")}
                className={`px-4 py-2 text-lg rounded-lg font-semibold transition ${
                  selectedDifficulty === "expert"
                    ? "bg-purple-500 text-slate-900"
                    : "bg-blue-100 text-slate-700 hover:bg-slate-600"
                }`}
              >
                ⚡ Expert
              </button>
            </div>
          )}
        </div>

        {/* Leaderboard Table - Large Display */}
        <div className="flex-1 overflow-auto">
          {scores.length === 0 ? (
            <div className="text-center text-2xl text-slate-600 py-12">{t("leaderboard.noScores")}</div>
          ) : (
            <table className="w-full text-2xl">
              <thead>
                <tr className="border-b-2 border-blue-500 text-blue-300">
                  <th className="text-left py-4 px-4">{t("leaderboard.rank")}</th>
                  <th className="text-left py-4 px-4">{t("leaderboard.teamName")}</th>
                  {showTeamSessions && <th className="text-center py-4 px-4">Members</th>}
                  <th className="text-center py-4 px-4">{t("leaderboard.score")}</th>
                  <th className="text-center py-4 px-4">{t("leaderboard.accuracy")}</th>
                  <th className="text-center py-4 px-4">{t("leaderboard.time")}</th>
                  <th className="text-left py-4 px-4">{t("leaderboard.certificate")}</th>
                </tr>
              </thead>
              <tbody>
                {scores.slice(0, 10).map((score: any, idx: number) => {
                  const bgClass =
                    idx === 0 ? "bg-yellow-500/10" : idx === 1 ? "bg-slate-500/10" : idx === 2 ? "bg-orange-500/10" : "";
                  return (
                    <tr key={idx} className={`border-b border-blue-200 ${bgClass}`}>
                      <td className="py-4 px-4 font-bold text-blue-400">
                        {idx === 0 ? "🥇" : idx === 1 ? "🥈" : idx === 2 ? "🥉" : idx + 1}
                      </td>
                      <td className="py-4 px-4 text-slate-900 font-semibold">{score.teamName}</td>
                      {showTeamSessions && (
                        <td className="py-4 px-4 text-center text-purple-400 font-bold">
                          {score.memberCount || 1}
                        </td>
                      )}
                      <td className="py-4 px-4 text-center text-blue-400 font-bold">{score.totalScore}</td>
                      <td className="py-4 px-4 text-center text-blue-400 font-bold">{Math.round(score.accuracy)}%</td>
                      <td className="py-4 px-4 text-center text-green-400 font-bold">{formatTime(score.timeTaken)}</td>
                      <td className="py-4 px-4 text-slate-700 text-lg">{score.rank}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>

        {/* Footer */}
        <div className="text-center text-slate-600 text-xl mt-8 flex flex-col items-center gap-4">
          <p>Auto-refreshing every 5 seconds...</p>
          <Button
            onClick={() => (window.location.href = "/")}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all font-semibold"
          >
            🏠 Return to Home
          </Button>
        </div>
      </div>
    );
  }

  // Mobile display mode
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white text-slate-900 flex flex-col items-center px-4 py-8">
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

      {/* Header */}
      <div className="text-center mb-8 mt-12">
        <div className="text-5xl mb-4">🏆</div>
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
          {t("leaderboard.title")}
        </h1>
      </div>

      {/* Leaderboard List */}
      <div className="max-w-2xl w-full space-y-3">
        {scores.length === 0 ? (
          <div className="text-center text-slate-600 py-12">{t("leaderboard.noScores")}</div>
        ) : (
          scores.slice(0, 10).map((score: any, idx: number) => {
            const borderClass = idx === 0 ? "border-yellow-500/50 bg-yellow-500/5" : "";
            return (
              <div key={idx} className={`bg-blue-50/50 border border-blue-200 rounded-lg p-4 ${borderClass}`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-blue-400">
                      {idx === 0 ? "🥇" : idx === 1 ? "🥈" : idx === 2 ? "🥉" : `#${idx + 1}`}
                    </span>
                    <div>
                      <p className="font-bold text-slate-900 text-lg">{score.teamName}</p>
                      <p className="text-sm text-slate-600">{score.rank}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-blue-400">{score.totalScore}</p>
                    <p className="text-xs text-slate-600">points</p>
                  </div>
                </div>
                <div className="flex justify-between text-sm text-slate-700">
                  <span>Accuracy: {score.accuracy}%</span>
                  <span>Time: {formatTime(score.timeTaken)}</span>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="mt-8 flex gap-4">
        <Button
          onClick={() => (window.location.href = "/")}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all font-semibold"
        >
          🏠 Return to Home
        </Button>
      </div>
    </div>
  );
}
