import { useState } from "react";
import { Button } from "@/components/ui/button";
import { translations, Language } from "@shared/translations";
import { trpc } from "@/lib/trpc";
import { useLocation } from "wouter";

interface CreateTeamSessionProps {
  language: Language;
  teamName: string;
  isExpertMode: boolean;
  onBack: () => void;
}

export default function CreateTeamSession({ language, teamName, isExpertMode, onBack }: CreateTeamSessionProps) {
  const [, setLocation] = useLocation();
  const [copied, setCopied] = useState(false);
  const [joinCode, setJoinCode] = useState<string | null>(null);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const createSessionMutation = trpc.teamJoining.createSession.useMutation();

  const t = (key: string) => {
    const keys = key.split(".");
    let value: any = translations;
    for (const k of keys) {
      value = value?.[k];
    }
    return typeof value === "object" && value !== null && language in value ? value[language] : key;
  };

  const handleCreateSession = async () => {
    setIsLoading(true);

    try {
      // Get device ID (create if doesn't exist)
      let deviceId = localStorage.getItem("deviceId");
      if (!deviceId) {
        deviceId = `device-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        localStorage.setItem("deviceId", deviceId);
      }

      const session = await createSessionMutation.mutateAsync({
        teamName,
        language,
        isExpertMode,
        deviceId,
      });

      setJoinCode(session.joinCode);
      setSessionId(session.sessionId);
    } catch (error) {
      console.error("Failed to create team session:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyCode = () => {
    if (joinCode) {
      navigator.clipboard.writeText(joinCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleContinue = () => {
    if (sessionId) {
      setLocation(`/team-lobby?sessionId=${sessionId}`);
    }
  };

  if (joinCode && sessionId) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white text-slate-900 flex flex-col items-center justify-center px-4">
        <div className="max-w-md w-full space-y-8">
          {/* Header */}
          <div className="text-center">
            <div className="text-5xl mb-4">✨</div>
            <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              {t("createTeamSession.title")}
            </h1>
            <p className="text-blue-300">{t("createTeamSession.subtitle")}</p>
          </div>

          {/* Join Code Display */}
          <div className="bg-blue-50/50 border border-blue-200 rounded-lg p-8 text-center space-y-4">
            <p className="text-slate-600">{t("createTeamSession.generatedCode")}</p>
            <div className="text-5xl font-bold text-blue-400 tracking-widest">{joinCode}</div>
            <Button
              onClick={handleCopyCode}
              className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-slate-900 rounded-lg transition-all"
            >
              {copied ? t("createTeamSession.copiedMessage") : t("createTeamSession.copyButton")}
            </Button>
            <p className="text-sm text-slate-600">{t("createTeamSession.waitingForMembers")}</p>
          </div>

          {/* Continue Button */}
          <Button
            onClick={handleContinue}
            className="w-full py-3 bg-green-600 hover:bg-green-700 text-slate-900 rounded-lg transition-all text-lg font-bold"
          >
            {t("createTeamSession.continueButton")}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white text-slate-900 flex flex-col items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="text-5xl mb-4">👥</div>
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            {t("createTeamSession.title")}
          </h1>
          <p className="text-blue-300">{t("createTeamSession.subtitle")}</p>
        </div>

        {/* Team Info */}
        <div className="bg-blue-50/50 border border-blue-200 rounded-lg p-6 space-y-3">
          <div>
            <p className="text-slate-600 text-sm">Team Name</p>
            <p className="text-xl font-bold text-blue-400">{teamName}</p>
          </div>
          <div>
            <p className="text-slate-600 text-sm">Mode</p>
            <p className="text-xl font-bold text-blue-400">{isExpertMode ? "Expert Mode ⚡" : "Normal Mode"}</p>
          </div>
        </div>

        {/* Create Session Button */}
        <Button
          onClick={handleCreateSession}
          disabled={isLoading}
          className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-slate-900 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? "Creating..." : "Create Team Session"}
        </Button>

        {/* Back Button */}
        <Button
          onClick={onBack}
          className="w-full py-3 bg-blue-100 hover:bg-slate-600 text-slate-900 rounded-lg transition-all"
        >
          ← Back
        </Button>
      </div>
    </div>
  );
}
