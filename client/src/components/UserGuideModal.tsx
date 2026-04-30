import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { translations, Language } from "@shared/translations";
import { X } from "lucide-react";

interface UserGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export default function UserGuideModal({ isOpen, onClose, language }: UserGuideModalProps) {
  const t = (key: string) => {
    const keys = key.split(".");
    let value: any = translations;
    for (const k of keys) {
      value = value?.[k];
    }
    return typeof value === "object" && value !== null && language in value ? value[language] : key;
  };

  if (!isOpen) return null;

  const guideContent = language === "pt" ? (
    <>
      <h2 className="text-2xl font-bold mb-4 text-blue-400">Como Jogar</h2>
      
      <div className="space-y-4 text-slate-200">
        <div>
          <h3 className="text-lg font-semibold text-blue-400 mb-2">🎯 Objetivo</h3>
          <p>Responda perguntas sobre genética, transcriptômica e nutrição para ganhar pontos. Quanto mais rápido responder, mais pontos bônus você ganha!</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-blue-400 mb-2">📊 Estrutura do Jogo</h3>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>3 Rodadas</strong> - 9 perguntas no total (3 por rodada)</li>
            <li><strong>Rodada 1:</strong> RNA Detective - Expressão gênica e resposta ao tratamento</li>
            <li><strong>Rodada 2:</strong> Nutrição & Estresse Celular - Metabolismo e inflamação</li>
            <li><strong>Rodada 3:</strong> Missão Biomarcador - Pensamento crítico e validação</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-blue-400 mb-2">⏱️ Temporizador</h3>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Modo Normal:</strong> 30 segundos por pergunta</li>
            <li><strong>Modo Especialista:</strong> 15 segundos por pergunta (mais desafiador!)</li>
            <li>Respostas em menos de 30s ganham +20 pontos de bônus</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-blue-400 mb-2">🏆 Pontuação</h3>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>+100 pontos</strong> por resposta correta</li>
            <li><strong>+20 pontos</strong> bônus de velocidade (resposta em menos de 30s)</li>
            <li><strong>Modo Especialista:</strong> Multiplicador 1.5x em todos os pontos</li>
            <li>Sua classificação é baseada em precisão (acurácia)</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-blue-400 mb-2">👥 Modo Equipe</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Crie uma sessão de equipe e compartilhe o código com amigos</li>
            <li>Cada membro joga individualmente em seu telefone</li>
            <li>Os pontos são somados para uma pontuação de equipe</li>
            <li>A equipe aparece no placar com o total combinado</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-blue-400 mb-2">🎖️ Classificações</h3>
          <p>Sua classificação é baseada em quantas perguntas você acertou:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>90-100%: Senior BioData Investigators</li>
            <li>75-89%: BioData Specialists</li>
            <li>60-74%: Gene Analysts</li>
            <li>45-59%: Data Explorers</li>
            <li>&lt;45%: Researchers in Training</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-blue-400 mb-2">💡 Dicas</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Leia cada pergunta com cuidado - as palavras importam!</li>
            <li>Use os gráficos de sinal para entender os dados</li>
            <li>Pense criticamente sobre a biologia por trás de cada pergunta</li>
            <li>Não há penalidade por respostas erradas - aprenda com o feedback!</li>
          </ul>
        </div>
      </div>
    </>
  ) : (
    <>
      <h2 className="text-2xl font-bold mb-4 text-blue-400">How to Play</h2>
      
      <div className="space-y-4 text-slate-200">
        <div>
          <h3 className="text-lg font-semibold text-blue-400 mb-2">🎯 Objective</h3>
          <p>Answer questions about genetics, transcriptomics, and nutrition to earn points. The faster you answer, the more bonus points you earn!</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-blue-400 mb-2">📊 Game Structure</h3>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>3 Rounds</strong> - 9 questions total (3 per round)</li>
            <li><strong>Round 1:</strong> RNA Detective - Gene expression and treatment response</li>
            <li><strong>Round 2:</strong> Nutrition & Cell Stress - Metabolism and inflammation</li>
            <li><strong>Round 3:</strong> Biomarker Mission - Critical thinking and validation</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-blue-400 mb-2">⏱️ Timer</h3>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Normal Mode:</strong> 30 seconds per question</li>
            <li><strong>Expert Mode:</strong> 15 seconds per question (more challenging!)</li>
            <li>Answers under 30s earn +20 bonus points</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-blue-400 mb-2">🏆 Scoring</h3>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>+100 points</strong> per correct answer</li>
            <li><strong>+20 points</strong> speed bonus (answer in under 30s)</li>
            <li><strong>Expert Mode:</strong> 1.5x multiplier on all points</li>
            <li>Your rank is based on accuracy (percentage correct)</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-blue-400 mb-2">👥 Team Mode</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Create a team session and share the code with friends</li>
            <li>Each member plays individually on their phone</li>
            <li>Points are summed for a combined team score</li>
            <li>The team appears on the leaderboard with the total</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-blue-400 mb-2">🎖️ Ranks</h3>
          <p>Your rank is based on how many questions you answered correctly:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>90-100%: Senior BioData Investigators</li>
            <li>75-89%: BioData Specialists</li>
            <li>60-74%: Gene Analysts</li>
            <li>45-59%: Data Explorers</li>
            <li>&lt;45%: Researchers in Training</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-blue-400 mb-2">💡 Tips</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Read each question carefully - wording matters!</li>
            <li>Use the signal graphs to understand the data</li>
            <li>Think critically about the biology behind each question</li>
            <li>There's no penalty for wrong answers - learn from the feedback!</li>
          </ul>
        </div>
      </div>
    </>
  );

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-white via-blue-50 to-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-blue-500/30">
        {/* Header */}
        <div className="sticky top-0 bg-blue-900/95 border-b border-blue-500/30 p-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            {language === "pt" ? "Guia do Jogo" : "Game Guide"}
          </h1>
          <button
            onClick={onClose}
            className="text-slate-600 hover:text-slate-900 transition"
            aria-label="Close"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {guideContent}
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-blue-900/95 border-t border-blue-500/30 p-6">
          <Button
            onClick={onClose}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-cyan-600 hover:to-blue-600 text-slate-900 font-semibold py-2 rounded-lg"
          >
            {language === "pt" ? "Entendi!" : "Got it!"}
          </Button>
        </div>
      </div>
    </div>
  );
}
