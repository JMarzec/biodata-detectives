import React from "react";
import { Button } from "@/components/ui/button";
import { Language } from "@shared/translations";

interface QuitGameDialogProps {
  isOpen: boolean;
  language: Language;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function QuitGameDialog({ isOpen, language, onConfirm, onCancel }: QuitGameDialogProps) {
  if (!isOpen) return null;

  const title = language === "pt" ? "Sair do Jogo?" : "Quit Game?";
  const message = language === "pt" 
    ? "Seu progresso será perdido. Tem certeza que deseja sair?"
    : "Your progress will be lost. Are you sure you want to quit?";
  const confirmText = language === "pt" ? "Sair" : "Quit";
  const cancelText = language === "pt" ? "Continuar" : "Continue";

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 rounded-lg max-w-sm w-full border border-cyan-500/30 p-6">
        <h2 className="text-2xl font-bold text-cyan-400 mb-4">{title}</h2>
        <p className="text-slate-200 mb-6">{message}</p>
        
        <div className="flex gap-3">
          <Button
            onClick={onCancel}
            className="flex-1 bg-slate-700 hover:bg-slate-600 text-white font-semibold py-2 rounded-lg"
          >
            {cancelText}
          </Button>
          <Button
            onClick={onConfirm}
            className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg"
          >
            {confirmText}
          </Button>
        </div>
      </div>
    </div>
  );
}
