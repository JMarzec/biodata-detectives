import { useState } from "react";
import { Button } from "@/components/ui/button";
import { translations, Language } from "@shared/translations";
import { trpc } from "@/lib/trpc";
import { useLocation } from "wouter";

interface JoinTeamCodeProps {
  language: Language;
  onBack: () => void;
}

export default function JoinTeamCode({ language, onBack }: JoinTeamCodeProps) {
  const [, setLocation] = useLocation();
  const [joinCode, setJoinCode] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getSessionByCode = trpc.teamJoining.getSessionByCode.useQuery(
    { joinCode: joinCode.toUpperCase() },
    { enabled: false }
  );

  const joinSessionMutation = trpc.teamJoining.joinSession.useMutation();

  const t = (key: string) => {
    const keys = key.split(".");
    let value: any = translations;
    for (const k of keys) {
      value = value?.[k];
    }
    return typeof value === "object" && value !== null && language in value ? value[language] : key;
  };

  const handleJoin = async () => {
    if (joinCode.length !== 6) {
      setError(t("teamJoining.error.invalidCode"));
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      // Get session by code
      const sessionResponse = await getSessionByCode.refetch();
      const session = sessionResponse.data;

      if (!session) {
        setError(t("teamJoining.error.invalidCode"));
        setIsLoading(false);
        return;
      }

      // Get device ID (create if doesn't exist)
      let deviceId = localStorage.getItem("deviceId");
      if (!deviceId) {
        deviceId = `device-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        localStorage.setItem("deviceId", deviceId);
      }

      // Join the session
      const member = await joinSessionMutation.mutateAsync({
        sessionId: session.sessionId,
        deviceId,
      });

      // Navigate to team lobby
      setLocation(`/team-lobby?sessionId=${session.sessionId}&memberId=${member.memberId}`);
    } catch (err: any) {
      const errorMessage = err.message || t("teamJoining.error.invalidCode");
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white text-slate-900 flex flex-col items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="text-5xl mb-4">🔗</div>
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            {t("teamJoining.title")}
          </h1>
          <p className="text-blue-300 text-lg">{t("teamJoining.subtitle")}</p>
        </div>

        {/* Join Code Input */}
        <div className="bg-blue-50/50 border border-blue-200 rounded-lg p-6 space-y-4">
          <label className="block text-slate-900 font-medium">{t("teamJoining.codeLabel")}</label>
          <input
            type="text"
            value={joinCode.toUpperCase()}
            onChange={(e) => {
              setJoinCode(e.target.value.toUpperCase().slice(0, 6));
              setError("");
            }}
            placeholder={t("teamJoining.codePlaceholder")}
            maxLength={6}
            className="w-full px-4 py-3 rounded-lg bg-blue-900 border border-blue-300 text-slate-900 text-center text-2xl font-bold tracking-widest focus:outline-none focus:border-blue-500 transition-colors"
          />

          {error && <p className="text-red-400 text-sm text-center">{error}</p>}

          <Button
            onClick={handleJoin}
            disabled={joinCode.length !== 6 || isLoading}
            className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-slate-900 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Joining..." : t("teamJoining.joinButton")}
          </Button>
        </div>

        {/* Back Button */}
        <Button
          onClick={onBack}
          className="w-full py-3 bg-blue-100 hover:bg-slate-600 text-slate-900 rounded-lg transition-all"
        >
          ← {t("teamJoining.backButton")}
        </Button>
      </div>
    </div>
  );
}
