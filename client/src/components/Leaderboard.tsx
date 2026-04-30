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
  
  // Use team session leaderboard if toggled, otherwise use individual scores
  const { data: leaderboard, isLoading: leaderboardLoading, refetch } = trpc.game.getLeaderboard.useQuery();
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
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white flex items-center justify-center">
        <p className="text-xl">{t("common.loading")}</p>
      </div>
    );
  }



  if (displayMode === "large") {
    // Large display mode for stand/projector
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white flex flex-col p-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            {t("leaderboard.title")}
          </h1>
          <p className="text-3xl text-cyan-300">{t("welcome.footer")}</p>
          
          {/* Team Session Toggle */}
          <div className="mt-6 flex justify-center gap-4">
            <button
              onClick={() => setShowTeamSessions(false)}
              className={`px-6 py-2 text-xl rounded-lg font-semibold transition ${
                !showTeamSessions
                  ? "bg-cyan-500 text-white"
                  : "bg-slate-700 text-slate-300 hover:bg-slate-600"
              }`}
            >
              Individual Scores
            </button>
            <button
              onClick={() => setShowTeamSessions(true)}
              className={`px-6 py-2 text-xl rounded-lg font-semibold transition ${
                showTeamSessions
                  ? "bg-cyan-500 text-white"
                  : "bg-slate-700 text-slate-300 hover:bg-slate-600"
              }`}
            >
              Team Scores
            </button>
          </div>
        </div>

        {/* Leaderboard Table - Large Display */}
        <div className="flex-1 overflow-auto">
          {scores.length === 0 ? (
            <div className="text-center text-2xl text-slate-400 py-12">{t("leaderboard.noScores")}</div>
          ) : (
            <table className="w-full text-2xl">
              <thead>
                <tr className="border-b-2 border-cyan-500 text-cyan-300">
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
                    <tr key={idx} className={`border-b border-slate-700 ${bgClass}`}>
                      <td className="py-4 px-4 font-bold text-cyan-400">
                        {idx === 0 ? "🥇" : idx === 1 ? "🥈" : idx === 2 ? "🥉" : idx + 1}
                      </td>
                      <td className="py-4 px-4 text-white font-semibold">{score.teamName}</td>
                      {showTeamSessions && (
                        <td className="py-4 px-4 text-center text-purple-400 font-bold">
                          {score.memberCount || 1}
                        </td>
                      )}
                      <td className="py-4 px-4 text-center text-cyan-400 font-bold">{score.totalScore}</td>
                      <td className="py-4 px-4 text-center text-blue-400 font-bold">{Math.round(score.accuracy)}%</td>
                      <td className="py-4 px-4 text-center text-green-400 font-bold">{formatTime(score.timeTaken)}</td>
                      <td className="py-4 px-4 text-slate-300 text-lg">{score.rank}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>

        {/* Footer */}
        <div className="text-center text-slate-400 text-xl mt-8">
          <p>Auto-refreshing every 5 seconds...</p>
        </div>
      </div>
    );
  }

  // Mobile display mode
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white flex flex-col items-center px-4 py-8">
      {/* Language Switcher */}
      <div className="absolute top-4 right-4 flex gap-2">
        <button
          onClick={() => onLanguageChange("en")}
          className={`px-4 py-2 rounded text-sm font-medium transition-all ${
            language === "en"
              ? "bg-cyan-500 text-white"
              : "bg-slate-700 text-slate-300 hover:bg-slate-600"
          }`}
        >
          EN
        </button>
        <button
          onClick={() => onLanguageChange("pt")}
          className={`px-4 py-2 rounded text-sm font-medium transition-all ${
            language === "pt"
              ? "bg-cyan-500 text-white"
              : "bg-slate-700 text-slate-300 hover:bg-slate-600"
          }`}
        >
          PT
        </button>
      </div>

      {/* Header */}
      <div className="text-center mb-8 mt-12">
        <div className="text-5xl mb-4">🏆</div>
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          {t("leaderboard.title")}
        </h1>
      </div>

      {/* Leaderboard List */}
      <div className="max-w-2xl w-full space-y-3">
        {scores.length === 0 ? (
          <div className="text-center text-slate-400 py-12">{t("leaderboard.noScores")}</div>
        ) : (
          scores.slice(0, 10).map((score: any, idx: number) => {
            const borderClass = idx === 0 ? "border-yellow-500/50 bg-yellow-500/5" : "";
            return (
              <div key={idx} className={`bg-slate-800/50 border border-slate-700 rounded-lg p-4 ${borderClass}`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-cyan-400">
                      {idx === 0 ? "🥇" : idx === 1 ? "🥈" : idx === 2 ? "🥉" : `#${idx + 1}`}
                    </span>
                    <div>
                      <p className="font-bold text-white text-lg">{score.teamName}</p>
                      <p className="text-sm text-slate-400">{score.rank}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-cyan-400">{score.totalScore}</p>
                    <p className="text-xs text-slate-400">points</p>
                  </div>
                </div>
                <div className="flex justify-between text-sm text-slate-300">
                  <span>Accuracy: {score.accuracy}%</span>
                  <span>Time: {formatTime(score.timeTaken)}</span>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Back Button */}
      <Button
        onClick={() => (window.location.href = "/")}
        className="mt-8 px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-all"
      >
        ← Back to Game
      </Button>
    </div>
  );
}
