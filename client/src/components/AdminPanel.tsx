import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { translations, Language } from "@shared/translations";
import { trpc } from "@/lib/trpc";
import QRCode from "qrcode";

interface AdminPanelProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export default function AdminPanel({ language, onLanguageChange }: AdminPanelProps) {
  const [showQRCode, setShowQRCode] = useState(true);
  const [demoMode, setDemoMode] = useState(false);
  const qrRef = useRef<HTMLDivElement>(null);
  const deleteScoresMutation = trpc.game.deleteAllScores.useMutation();
  const { data: leaderboard, refetch } = trpc.game.getLeaderboard.useQuery();

  useEffect(() => {
    if (showQRCode && qrRef.current) {
      const gameUrl = typeof window !== "undefined" ? window.location.origin : "";
      qrRef.current.innerHTML = "";
      QRCode.toCanvas(qrRef.current, gameUrl, { width: 256 }, (error: any) => {
        if (error) console.error("QR Code generation error:", error);
      });
    }
  }, [showQRCode]);

  const t = (key: string) => {
    const keys = key.split(".");
    let value: any = translations;
    for (const k of keys) {
      value = value?.[k];
    }
    return typeof value === "object" && value !== null && language in value ? value[language] : key;
  };

  const gameUrl = typeof window !== "undefined" ? window.location.origin : "";

  const handleResetLeaderboard = async () => {
    const adminKey = prompt("Enter admin password to reset leaderboard:");
    if (adminKey && confirm(t("admin.confirmReset"))) {
      try {
        await deleteScoresMutation.mutateAsync({ adminKey });
        refetch();
        alert("Leaderboard reset successfully!");
      } catch (error) {
        alert("Failed to reset leaderboard. Invalid admin key.");
      }
    }
  };

  const handleExportCSV = async () => {
    try {
      const result = await fetch("/api/trpc/game.exportScoresCSV").then((r) => r.json());
      const csv = result.result?.data?.csv;
      if (!csv) throw new Error("No CSV data");
      const element = document.createElement("a");
      element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(csv));
      element.setAttribute("download", `biodata-detectives-scores-${new Date().toISOString()}.csv`);
      element.style.display = "none";
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    } catch (error) {
      console.error("Failed to export CSV:", error);
    }
  };

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
      <div className="text-center mb-12 mt-8">
        <div className="text-5xl mb-4">⚙️</div>
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          {t("admin.title")}
        </h1>
      </div>

      <div className="max-w-4xl w-full space-y-8">
        {/* QR Code Section */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4 text-cyan-300">{t("admin.qrCode")}</h2>
          <div className="flex flex-col items-center space-y-4">
            {showQRCode && (
              <div className="bg-white p-4 rounded-lg">
                <div ref={qrRef}></div>
              </div>
            )}
            <p className="text-slate-300 text-center">{t("admin.scanToPlay")}</p>
            <p className="text-sm text-slate-400 break-all">{gameUrl}</p>
            <Button
              onClick={() => setShowQRCode(!showQRCode)}
              className="bg-slate-700 hover:bg-slate-600 text-white"
            >
              {showQRCode ? "Hide QR Code" : "Show QR Code"}
            </Button>
          </div>
        </div>

        {/* Leaderboard Stats */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4 text-cyan-300">{t("admin.viewScores")}</h2>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-slate-900/50 rounded-lg p-4 text-center">
              <p className="text-slate-400 text-sm mb-2">Total Teams</p>
              <p className="text-3xl font-bold text-cyan-400">{leaderboard?.length || 0}</p>
            </div>
            <div className="bg-slate-900/50 rounded-lg p-4 text-center">
              <p className="text-slate-400 text-sm mb-2">Top Score</p>
              <p className="text-3xl font-bold text-cyan-400">
                {leaderboard && leaderboard.length > 0 ? leaderboard[0].totalScore : 0}
              </p>
            </div>
          </div>

          {/* Top 5 Teams */}
          <div className="space-y-2">
            {leaderboard && leaderboard.length > 0 ? (
              leaderboard.slice(0, 5).map((score: any, idx: number) => (
                <div key={idx} className="bg-slate-900/50 p-3 rounded flex justify-between">
                  <span className="font-semibold">
                    {idx + 1}. {score.teamName}
                  </span>
                  <span className="text-cyan-400">{score.totalScore} pts</span>
                </div>
              ))
            ) : (
              <p className="text-slate-400">No scores yet</p>
            )}
          </div>
        </div>

        {/* Admin Controls */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 space-y-4">
          <h2 className="text-2xl font-bold mb-4 text-cyan-300">Controls</h2>

          <Button
            onClick={handleExportCSV}
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all"
          >
            {t("admin.exportCSV")}
          </Button>

          <div className="flex items-center justify-between bg-slate-900/50 p-4 rounded-lg">
            <label className="text-white font-medium">{t("admin.demoMode")}</label>
            <button
              onClick={() => setDemoMode(!demoMode)}
              className={`px-4 py-2 rounded ${demoMode ? "bg-green-600" : "bg-slate-700"} text-white`}
            >
              {demoMode ? "ON" : "OFF"}
            </button>
          </div>

          <Button
            onClick={handleResetLeaderboard}
            className="w-full py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-all"
          >
            {t("admin.resetLeaderboard")}
          </Button>
        </div>

        {/* Instructions */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4 text-cyan-300">{t("admin.instructions")}</h2>
          <div className="space-y-3 text-slate-300">
            <p>{t("adminInstructions.step1")}</p>
            <p>{t("adminInstructions.step2")}</p>
            <p>{t("adminInstructions.step3")}</p>
            <p>{t("adminInstructions.step4")}</p>
            <p>{t("adminInstructions.step5")}</p>
            <p>{t("adminInstructions.step6")}</p>
          </div>
        </div>

        {/* Back Button */}
        <Button
          onClick={() => (window.location.href = "/")}
          className="w-full py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-all"
        >
          ← Back to Game
        </Button>
      </div>
    </div>
  );
}
