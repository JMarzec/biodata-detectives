import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { translations, Language } from "@shared/translations";
import { Question } from "@shared/questions";
import SignalBars from "@/components/SignalBars";
import FeedbackModal from "@/components/FeedbackModal";
import QuitGameDialog from "@/components/QuitGameDialog";

interface GameRoundProps {
  question: Question;
  roundNumber: number;
  questionNumber: number;
  totalQuestions: number;
  language: Language;
  onAnswer: (answerId: string, isCorrect: boolean, timeSpent: number) => void;
  onNext: () => void;
  onQuit: () => void;
  teamScore: number;
  isExpertMode?: boolean;
  difficulty?: "beginner" | "normal" | "expert";
}

export default function GameRound({
  question,
  roundNumber,
  questionNumber,
  totalQuestions,
  language,
  onAnswer,
  onNext,
  onQuit,
  teamScore,
  isExpertMode = false,
  difficulty = "normal",
}: GameRoundProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [timeSpent, setTimeSpent] = useState(0);
  const [startTime] = useState(Date.now());
  const [showQuitDialog, setShowQuitDialog] = useState(false);

  // Timer threshold: 45 seconds for beginner, 30 for normal, 15 for expert
  const timerThreshold = difficulty === "beginner" ? 45 : difficulty === "expert" ? 15 : 30;

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeSpent(Math.round((Date.now() - startTime) / 1000));
    }, 1000);

    return () => clearInterval(timer);
  }, [startTime]);

  const t = (key: string) => {
    const keys = key.split(".");
    let value: any = translations;
    for (const k of keys) {
      value = value?.[k];
    }
    return typeof value === "object" && value !== null && language in value ? value[language] : key;
  };

  const getQuestionText = () => {
    return language === "en" ? question.scenario : question.scenarioPt;
  };

  const getQuestionTitle = () => {
    return language === "en" ? question.title : question.titlePt;
  };

  const getAnswerOptions = () => {
    return question.answerOptions;
  };

  const getExplanation = () => {
    return language === "en" ? question.explanation : question.explanationPt;
  };

  const isCorrect = selectedAnswer === question.correctAnswerId;

  const handleSubmit = () => {
    if (!selectedAnswer) return;

    onAnswer(selectedAnswer, isCorrect, timeSpent);
    setShowFeedback(true);
  };

  const handleNextQuestion = () => {
    setShowFeedback(false);
    onNext();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white flex flex-col items-center justify-center px-4 py-8">
      {/* Header */}
      <div className="max-w-3xl w-full mb-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="text-slate-400 text-sm">
              {t("gameplay.round")} {roundNumber} · {t("gameplay.of")} 3
            </p>
            <p className="text-slate-400 text-sm">
              Question {questionNumber} {t("gameplay.of")} {totalQuestions}
            </p>
          </div>
          <div className="text-right">
            <p className="text-cyan-400 font-semibold">{t("gameplay.score")}: {teamScore}</p>
            <p className={`text-sm font-semibold ${
              isExpertMode
                ? timeSpent >= timerThreshold
                  ? "text-red-400"
                  : "text-yellow-400"
                : "text-slate-400"
            }`}>
              {t("gameplay.time")}: {timeSpent}s {isExpertMode && `/ ${timerThreshold}s`}
            </p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
          <div
            className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full transition-all"
            style={{ width: `${((questionNumber - 1) / totalQuestions) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Question Card */}
      <div className="max-w-3xl w-full bg-slate-800/50 border border-slate-700 rounded-lg p-8 mb-8">
        {/* Question Title */}
        <h2 className="text-2xl font-bold mb-4 text-cyan-300">{getQuestionTitle()}</h2>

        {/* Scenario */}
        <p className="text-lg text-slate-300 mb-6">{getQuestionText()}</p>

        {/* Signal Bars */}
        {question.dataSignals.length > 0 && (
          <div className="mb-8 space-y-3">
            {question.dataSignals.map((signal, idx) => (
              <SignalBars key={idx} signal={signal} />
            ))}
          </div>
        )}
      </div>

      {/* Answer Options */}
      <div className="max-w-3xl w-full space-y-3 mb-8">
        {getAnswerOptions().map((option) => (
          <button
            key={option.id}
            onClick={() => setSelectedAnswer(option.id)}
            disabled={showFeedback}
            className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
              selectedAnswer === option.id
                ? "border-cyan-500 bg-cyan-500/10"
                : "border-slate-700 bg-slate-800/50 hover:border-slate-600"
            } ${showFeedback ? "cursor-not-allowed opacity-75" : "cursor-pointer"}`}
          >
            <p className="text-white font-medium">
              {language === "en" ? option.text : option.textPt}
            </p>
          </button>
        ))}
      </div>

      {/* Submit and Quit Buttons */}
      <div className="max-w-3xl w-full space-y-3">
        <Button
          onClick={handleSubmit}
          disabled={!selectedAnswer || showFeedback}
          className="w-full py-4 text-lg font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg transition-all"
        >
          {t("gameplay.submitButton")}
        </Button>
        <Button
          onClick={() => setShowQuitDialog(true)}
          disabled={showFeedback}
          className="w-full py-3 text-sm font-semibold bg-slate-700 hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg transition-all"
        >
          {language === "pt" ? "Sair do Jogo" : "Quit Game"}
        </Button>
      </div>

      {/* Feedback Modal */}
      {showFeedback && selectedAnswer && (
        <FeedbackModal
          isCorrect={isCorrect}
          explanation={getExplanation()}
          selectedAnswerText={
            language === "en"
              ? question.answerOptions.find((a) => a.id === selectedAnswer)?.text || ""
              : question.answerOptions.find((a) => a.id === selectedAnswer)?.textPt || ""
          }
          onNext={handleNextQuestion}
        />
      )}

      {/* Quit Game Dialog */}
      <QuitGameDialog
        isOpen={showQuitDialog}
        language={language}
        onConfirm={onQuit}
        onCancel={() => setShowQuitDialog(false)}
      />
    </div>
  );
}
