import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { translations, Language } from "@shared/translations";
import { trpc } from "@/lib/trpc";
import { useLocation } from "wouter";

interface TeamLobbyProps {
  language: Language;
  sessionId: string;
  memberId: string;
}

export default function TeamLobby({ language, sessionId, memberId }: TeamLobbyProps) {
  const [, setLocation] = useLocation();
  const [copied, setCopied] = useState(false);

  const { data: members, refetch: refetchMembers } = trpc.teamJoining.getMembers.useQuery({ sessionId });
  const startGameMutation = trpc.teamJoining.startGameSession.useMutation();

  const t = (key: string) => {
    const keys = key.split(".");
    let value: any = translations;
    for (const k of keys) {
      value = value?.[k];
    }
    return typeof value === "object" && value !== null && language in value ? value[language] : key;
  };

  // Refresh members every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      refetchMembers();
    }, 2000);

    return () => clearInterval(interval);
  }, [refetchMembers]);

  const handleCopyCode = () => {
    // Extract join code from session (would need to pass it or fetch it)
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleStartGame = async () => {
    try {
      await startGameMutation.mutateAsync({ sessionId });
      // Navigate to game with session ID
      setLocation(`/game?sessionId=${sessionId}&memberId=${memberId}`);
    } catch (error) {
      console.error("Failed to start game:", error);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "joined":
        return "bg-blue-500";
      case "playing":
        return "bg-yellow-500";
      case "completed":
        return "bg-green-500";
      case "disconnected":
        return "bg-red-500";
      default:
        return "bg-slate-500";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white flex flex-col items-center px-4 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="text-5xl mb-4">👥</div>
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          {t("teamLobby.title")}
        </h1>
      </div>

      <div className="max-w-2xl w-full space-y-8">
        {/* Join Code Display */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center">
          <p className="text-slate-400 mb-2">{t("teamLobby.joinCode")}</p>
          <div className="text-4xl font-bold text-cyan-400 mb-4 tracking-widest">ABC123</div>
          <Button
            onClick={handleCopyCode}
            className="w-full py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-all"
          >
            {copied ? t("createTeamSession.copiedMessage") : t("createTeamSession.copyButton")}
          </Button>
        </div>

        {/* Team Members */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-cyan-300 mb-4">{t("teamLobby.members")}</h2>
          <div className="space-y-3">
            {members && members.length > 0 ? (
              members.map((member, idx) => (
                <div key={idx} className="bg-slate-900/50 rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${getStatusColor(member.status)}`}></div>
                    <div>
                      <p className="font-semibold text-white">{member.memberName || `Player ${idx + 1}`}</p>
                      <p className="text-sm text-slate-400">{t(`teamLobby.memberStatus.${member.status}`)}</p>
                    </div>
                  </div>
                  <span className="text-cyan-400 font-medium">{idx + 1}</span>
                </div>
              ))
            ) : (
              <p className="text-slate-400 text-center py-4">{t("createTeamSession.waitingForMembers")}</p>
            )}
          </div>
        </div>

        {/* Start Game Button */}
        <Button
          onClick={handleStartGame}
          className="w-full py-4 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all text-lg font-bold"
        >
          {t("teamLobby.startButton")}
        </Button>
      </div>
    </div>
  );
}
