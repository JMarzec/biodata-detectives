import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Language } from "@shared/translations";
import { trpc } from "@/lib/trpc";
import { selectGameQuestions } from "@shared/gameEngine";
import { questions } from "@shared/questions";
import { expertQuestions } from "@shared/expertQuestions";
import MissionBriefing from "@/components/MissionBriefing";
import GameRound from "@/components/GameRound";
import ResultsScreen from "@/components/ResultsScreen";

type GameScreen = "mission" | "playing" | "results";

interface GameAnswer {
  questionId: string;
  answerId: string;
  isCorrect: boolean;
  timeSpent: number;
}

export default function Game() {
  const [, setLocation] = useLocation();
  const [teamId, setTeamId] = useState<string>("");
  const [teamName, setTeamName] = useState<string>("");
  const [language, setLanguage] = useState<Language>("pt");
  const [isExpertMode, setIsExpertMode] = useState(false);
  const [difficulty, setDifficulty] = useState<"beginner" | "normal" | "expert">("normal");
  const [currentScreen, setCurrentScreen] = useState<GameScreen>("mission");
  const [gameQuestions, setGameQuestions] = useState<any[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<GameAnswer[]>([]);
  const [startTime, setStartTime] = useState<number>(0);
  const [finalScore, setFinalScore] = useState<any>(null);
  const [sessionId, setSessionId] = useState<string | undefined>(undefined);

  const submitScoreMutation = trpc.game.submitScore.useMutation();

  useEffect(() => {
    // Get teamId from URL params or redirect
    const params = new URLSearchParams(window.location.search);
    const tid = params.get("teamId");
    const tn = params.get("teamName");
    const lang = (params.get("language") || "en") as Language;
    const expertMode = params.get("isExpertMode") === "true";
    const sid = params.get("sessionId") || undefined;

    if (!tid || !tn) {
      setLocation("/");
      return;
    }

    setTeamId(tid);
    setTeamName(tn);
    setLanguage(lang);
    setIsExpertMode(expertMode);
    setSessionId(sid);
    setStartTime(Date.now());

    // Select random questions based on difficulty
    const questionBank = expertMode ? expertQuestions : questions;
    const selected = selectGameQuestions(questionBank);
    setGameQuestions(selected);
  }, [setLocation]);

  const handleStartGame = () => {
    setCurrentScreen("playing");
  };

  const handleAnswer = (answerId: string, isCorrect: boolean, timeSpent: number) => {
    const newAnswer: GameAnswer = {
      questionId: gameQuestions[currentQuestionIndex].id,
      answerId,
      isCorrect,
      timeSpent,
    };
    setAnswers([...answers, newAnswer]);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < gameQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Game complete - submit score immediately
      // Don't rely on state updates, use the answers array directly
      submitGameScore();
    }
  };

  const submitGameScore = async () => {
    try {
      const result = await submitScoreMutation.mutateAsync({
        teamId,
        answers, // Use current answers array
        startTime,
        isExpertMode,
        difficulty,
        sessionId, // Include session ID if part of a team session
      });
      setFinalScore(result);
      setCurrentScreen("results");
    } catch (error) {
      console.error("Failed to submit score:", error);
      alert("Failed to submit score. Please try again.");
    }
  };

  const handlePlayAgain = () => {
    setLocation("/");
  };

  const handleViewLeaderboard = () => {
    setLocation("/leaderboard");
  };

  const handleQuitGame = () => {
    setLocation("/");
  };

  const calculateTeamScore = () => {
    return answers.reduce((total, answer) => {
      if (answer.isCorrect) {
        return total + 100 + (answer.timeSpent < 30 ? 20 : 0);
      }
      return total;
    }, 0);
  };

  if (currentScreen === "mission") {
    return (
      <MissionBriefing
        teamId={teamId}
        teamName={teamName}
        language={language}
        onStart={handleStartGame}
      />
    );
  }

  if (currentScreen === "playing" && gameQuestions.length > 0) {
    const currentQuestion = gameQuestions[currentQuestionIndex];
    return (
      <GameRound
        question={currentQuestion}
        roundNumber={Math.floor(currentQuestionIndex / 3) + 1}
        questionNumber={currentQuestionIndex + 1}
        totalQuestions={gameQuestions.length}
        language={language}
        onAnswer={handleAnswer}
        onNext={handleNextQuestion}
        onQuit={handleQuitGame}
        teamScore={calculateTeamScore()}
        isExpertMode={isExpertMode}
      />
    );
  }

  if (currentScreen === "results" && finalScore) {
    return (
      <ResultsScreen
        teamName={teamName}
        totalScore={finalScore.totalScore}
        accuracy={finalScore.accuracy}
        timeTaken={finalScore.timeTaken}
        rank={finalScore.rank}
        rankKey={finalScore.rankKey}
        language={language}
        onPlayAgain={handlePlayAgain}
        onViewLeaderboard={handleViewLeaderboard}
        isExpertMode={isExpertMode}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white flex items-center justify-center">
      <p className="text-xl">Loading game...</p>
    </div>
  );
}
