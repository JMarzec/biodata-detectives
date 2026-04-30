import { Button } from "@/components/ui/button";

interface FeedbackModalProps {
  isCorrect: boolean;
  explanation: string;
  selectedAnswerText: string;
  onNext: () => void;
}

export default function FeedbackModal({
  isCorrect,
  explanation,
  selectedAnswerText,
  onNext,
}: FeedbackModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center px-4 z-50">
      <div className="bg-slate-800 border-2 border-slate-700 rounded-lg p-8 max-w-md w-full">
        {/* Feedback Icon */}
        <div className="text-center mb-6">
          {isCorrect ? (
            <>
              <div className="text-6xl mb-4 animate-bounce">✓</div>
              <h3 className="text-2xl font-bold text-green-400">Correct!</h3>
            </>
          ) : (
            <>
              <div className="text-6xl mb-4">💭</div>
              <h3 className="text-2xl font-bold text-yellow-400">Not quite...</h3>
            </>
          )}
        </div>

        {/* Your Answer */}
        <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4 mb-4">
          <p className="text-sm text-slate-400 mb-1">Your answer:</p>
          <p className="text-white font-medium">{selectedAnswerText}</p>
        </div>

        {/* Explanation */}
        <div className="bg-slate-900/50 border-l-4 border-cyan-500 rounded-lg p-4 mb-6">
          <p className="text-slate-300 leading-relaxed">{explanation}</p>
        </div>

        {/* Next Button */}
        <Button
          onClick={onNext}
          className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-lg transition-all font-semibold"
        >
          Next Question →
        </Button>
      </div>
    </div>
  );
}
