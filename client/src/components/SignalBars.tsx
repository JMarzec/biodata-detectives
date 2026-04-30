import { DataSignal } from "@shared/questions";

interface SignalBarsProps {
  signal: DataSignal;
}

export default function SignalBars({ signal }: SignalBarsProps) {
  const getColor = (state: string) => {
    switch (state) {
      case "high":
        return "bg-red-500";
      case "medium":
        return "bg-yellow-500";
      case "low":
        return "bg-blue-500";
      default:
        return "bg-slate-500";
    }
  };

  const getStateLabel = (state: string) => {
    switch (state) {
      case "high":
        return "HIGH";
      case "medium":
        return "MED";
      case "low":
        return "LOW";
      default:
        return state.toUpperCase();
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "gene_expression":
        return "🧬";
      case "immune":
        return "🛡️";
      case "metabolism":
        return "⚡";
      case "stress":
        return "⚠️";
      case "biomarker":
        return "🔬";
      case "clinical":
        return "📊";
      default:
        return "📈";
    }
  };

  return (
    <div className="bg-blue-900/50 border border-blue-200 rounded-lg p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-lg">{getCategoryIcon(signal.category)}</span>
          <span className="font-mono text-sm font-semibold text-blue-300">{signal.label}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className={`px-2 py-1 rounded text-xs font-bold text-slate-900 ${getColor(signal.state)}`}>
            {getStateLabel(signal.state)}
          </span>
          <span className="text-slate-600 text-sm">
            {signal.value}
            {signal.unit}
          </span>
        </div>
      </div>

      {/* Bar visualization */}
      <div className="w-full bg-blue-50 rounded-full h-3 overflow-hidden">
        <div
          className={`h-full transition-all duration-500 ${getColor(signal.state)}`}
          style={{ width: `${Math.min(signal.value, 100)}%` }}
        ></div>
      </div>

      {/* Scale indicators */}
      <div className="flex justify-between mt-2 text-xs text-slate-500">
        <span>0%</span>
        <span>50%</span>
        <span>100%</span>
      </div>
    </div>
  );
}
