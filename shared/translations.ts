/**
 * BioData Detectives - Bilingual Translation System
 * English (EN) and European Portuguese (PT)
 */

export type Language = "en" | "pt";

export const translations = {
  // ===== WELCOME SCREEN =====
  welcome: {
    title: {
      en: "BioData Detectives",
      pt: "Detetives dos BioDados",
    },
    subtitle: {
      en: "Cancer & Nutrition Lab",
      pt: "Laboratório de Cancro e Nutrição",
    },
    description: {
      en: "Join your team, analyse molecular clues, and discover how biomedical data helps researchers understand disease.",
      pt: "Junta a tua equipa, analisa pistas moleculares e descobre como os dados biomédicos ajudam os investigadores a compreender doenças.",
    },
    buttons: {
      createTeam: { en: "Create Team", pt: "Criar Equipa" },
      playWithoutTeam: { en: "Play Without Team", pt: "Jogar Sem Equipa" },
      leaderboard: { en: "Leaderboard", pt: "Classificação" },
      language: { en: "Language", pt: "Idioma" },
    },
    expertMode: {
      en: "⚡ Expert Mode (Harder Questions, Faster Timer)",
      pt: "⚡ Modo Especialista (Perguntas Mais Difíceis, Cronómetro Mais Rápido)",
    },
    footer: {
      en: "Disease Transcriptomics · NOVA Medical School",
      pt: "Disease Transcriptomics · NOVA Medical School",
    },
  },

  // ===== TEAM SETUP =====
  teamSetup: {
    title: { en: "Create Your Team", pt: "Cria a Tua Equipa" },
    placeholder: { en: "Enter your team name", pt: "Introduz o nome da tua equipa" },
    randomNameButton: { en: "Random Name", pt: "Nome Aleatório" },
    startButton: { en: "Start Mission", pt: "Iniciar Missão" },
    backButton: { en: "Back", pt: "Voltar" },
    expertModeIndicator: {
      en: "Expert Mode - Advanced Questions & Faster Timer (15s per question)",
      pt: "Modo Especialista - Perguntas Avançadas e Cronómetro Mais Rápido (15s por pergunta)",
    },
  },

  // ===== EXPERT MODE BADGE =====
  expertBadge: {
    en: "Expert Mode",
    pt: "Modo Especialista",
  },

  // ===== RANDOM TEAM NAMES =====
  teamNames: {
    en: [
      "RNA Rangers",
      "BioHackers",
      "Gene Ninjas",
      "Team Mitochondria",
      "Data Doctors",
      "Cancer Clue Hunters",
      "The Biomarker Squad",
      "Transcriptome Titans",
      "Lab Legends",
      "Molecular Minds",
      "DNA Detectives",
      "Protein Pioneers",
      "Genome Guardians",
      "Cell Sleuths",
      "Mutation Masters",
    ],
    pt: [
      "Guardiões do RNA",
      "BioHackers",
      "Equipa Mitocôndria",
      "Detetives Moleculares",
      "Os Biomarcadores",
      "Caçadores de Sinais",
      "Mentes Moleculares",
      "Investigadores de Genes",
      "Equipa de Proteínas",
      "Guardiões do Genoma",
      "Detetives de ADN",
      "Pioneiros da Biologia",
      "Mestres da Mutação",
      "Heróis Celulares",
      "Cientistas Brilhantes",
    ],
  },

  // ===== MISSION BRIEFING =====
  missionBriefing: {
    title: { en: "Mission Briefing", pt: "Briefing da Missão" },
    welcome: {
      en: "Welcome, BioData Detectives. You are joining a fictional biomedical research team. Your mission is to analyse simplified RNA, cancer, nutrition, and biomarker clues. All data are fictional. Your goal is not to diagnose patients, but to think like researchers: find patterns, question them, and decide what evidence is still missing.",
      pt: "Bem-vindos, Detetives dos BioDados. Vão juntar-se a uma equipa fictícia de investigação biomédica. A vossa missão é analisar pistas simplificadas de RNA, cancro, nutrição e biomarcadores. Todos os dados são fictícios. O objetivo não é diagnosticar doentes, mas pensar como investigadores: encontrar padrões, questioná-los e decidir que evidência ainda falta.",
    },
    transcriptomics: {
      en: "Transcriptomics lets researchers observe which genes are more or less active in cells or tissues.",
      pt: "A transcriptómica permite observar quais genes estão mais ou menos ativos em células ou tecidos.",
    },
    criticalThinking: {
      en: "Biomedical data does not give magical answers. It helps us find patterns, build hypotheses, and ask better questions.",
      pt: "Os dados biomédicos não dão respostas mágicas. Ajudam-nos a encontrar padrões, formular hipóteses e fazer melhores perguntas.",
    },
    startButton: { en: "Start Round 1", pt: "Iniciar Ronda 1" },
  },

  // ===== GAMEPLAY =====
  gameplay: {
    round: { en: "Round", pt: "Ronda" },
    of: { en: "of", pt: "de" },
    score: { en: "Score", pt: "Pontuação" },
    time: { en: "Time", pt: "Tempo" },
    nextButton: { en: "Next", pt: "Seguinte" },
    submitButton: { en: "Submit Answer", pt: "Enviar Resposta" },
  },

  // ===== RESULTS SCREEN =====
  results: {
    title: { en: "Mission Complete!", pt: "Missão Completa!" },
    finalScore: { en: "Final Score", pt: "Pontuação Final" },
    accuracy: { en: "Accuracy", pt: "Precisão" },
    timeTaken: { en: "Time Taken", pt: "Tempo Decorrido" },
    rank: { en: "Your Rank", pt: "A Tua Classificação" },
    whatYouLearned: { en: "What You Learned", pt: "O Que Aprendeste" },
    whatOurLabDoes: { en: "What Our Lab Does", pt: "O Que O Nosso Laboratório Faz" },
    playAgain: { en: "Play Again", pt: "Jogar Novamente" },
    leaderboard: { en: "View Leaderboard", pt: "Ver Classificação" },
  },

  // ===== RANKS =====
  ranks: {
    rank1: { en: "Senior BioData Investigators", pt: "Investigadores Sénior de BioDados" },
    rank2: { en: "Certified Molecular Detectives", pt: "Detetives Moleculares Certificados" },
    rank3: { en: "Biomedical Data Analysts", pt: "Analistas de Dados Biomédicos" },
    rank4: { en: "Junior Lab Detectives", pt: "Detetives Júnior de Laboratório" },
    rank5: { en: "Researchers in Training", pt: "Investigadores em Treino" },
  },

  // ===== RANK MESSAGES =====
  rankMessages: {
    rank1: {
      en: "Outstanding! You demonstrated expert-level critical thinking and biomedical data interpretation.",
      pt: "Extraordinário! Demonstraste pensamento crítico ao nível de especialista e interpretação de dados biomédicos.",
    },
    rank2: {
      en: "Excellent work! You showed strong understanding of transcriptomics and validation principles.",
      pt: "Excelente trabalho! Mostraste uma compreensão forte de transcriptómica e princípios de validação.",
    },
    rank3: {
      en: "Good job! You grasped the key concepts of biomedical data analysis and critical thinking.",
      pt: "Bom trabalho! Compreendeste os conceitos-chave de análise de dados biomédicos e pensamento crítico.",
    },
    rank4: {
      en: "Nice effort! You are building your skills in biomedical data science. Keep learning!",
      pt: "Bom esforço! Estás a desenvolver as tuas competências em ciência de dados biomédicos. Continua a aprender!",
    },
    rank5: {
      en: "Welcome to the world of biomedical research! Every expert started as a beginner. Keep exploring!",
      pt: "Bem-vindo ao mundo da investigação biomédica! Todo o especialista começou como um principiante. Continua a explorar!",
    },
  },

  // ===== LAB DESCRIPTION =====
  labDescription: {
    intro: {
      en: "Liked the challenge? This is a small glimpse of how transcriptomics, bioinformatics, and medicine can work together to understand diseases such as cancer.",
      pt: "Gostaste do desafio? Esta é uma pequena amostra de como a transcriptómica, a bioinformática e a medicina se cruzam para compreender doenças como o cancro.",
    },
    details: {
      en: "At the Disease Transcriptomics lab, researchers use RNA data and computational tools to study disease, discover candidate biomarkers, and generate new hypotheses for biomedical research.",
      pt: "No laboratório Disease Transcriptomics, os investigadores usam dados de RNA e ferramentas computacionais para estudar doenças, descobrir candidatos a biomarcadores e gerar novas hipóteses para investigação biomédica.",
    },
  },

  // ===== LEADERBOARD =====
  leaderboard: {
    title: { en: "Leaderboard", pt: "Classificação" },
    rank: { en: "Rank", pt: "Classificação" },
    teamName: { en: "Team Name", pt: "Nome da Equipa" },
    score: { en: "Score", pt: "Pontuação" },
    accuracy: { en: "Accuracy", pt: "Precisão" },
    time: { en: "Time", pt: "Tempo" },
    certificate: { en: "Certificate", pt: "Certificado" },
    completedAt: { en: "Completed", pt: "Concluído" },
    noScores: { en: "No scores yet. Be the first to play!", pt: "Sem pontuações ainda. Sê o primeiro a jogar!" },
    newTopScore: { en: "🎉 New Top Score!", pt: "🎉 Nova Pontuação Máxima!" },
  },

  // ===== ADMIN MODE =====
  admin: {
    title: { en: "Admin / Stand Mode", pt: "Modo Admin / Stand" },
    qrCode: { en: "QR Code", pt: "Código QR" },
    scanToPlay: { en: "Scan to Play", pt: "Digitalizar para Jogar" },
    resetLeaderboard: { en: "Reset Leaderboard", pt: "Repor Classificação" },
    confirmReset: { en: "Are you sure? This will delete all scores.", pt: "Tens a certeza? Isto vai eliminar todas as pontuações." },
    yes: { en: "Yes", pt: "Sim" },
    no: { en: "No", pt: "Não" },
    viewScores: { en: "View Scores", pt: "Ver Pontuações" },
    exportCSV: { en: "Export as CSV", pt: "Exportar como CSV" },
    demoMode: { en: "Demo Mode", pt: "Modo Demo" },
    toggleLanguage: { en: "Toggle Language", pt: "Alternar Idioma" },
    instructions: { en: "Stand Instructions", pt: "Instruções do Stand" },
  },

  // ===== ADMIN INSTRUCTIONS =====
  adminInstructions: {
    title: { en: "How to Run the Game at Your Stand", pt: "Como Executar o Jogo no Teu Stand" },
    step1: {
      en: "1. Open this admin panel on a laptop or tablet.",
      pt: "1. Abre este painel de administração num computador portátil ou tablet.",
    },
    step2: {
      en: "2. Display the QR code on a screen or print it on a poster.",
      pt: "2. Mostra o código QR num ecrã ou imprime-o num cartaz.",
    },
    step3: {
      en: "3. Students scan the QR code with their phones.",
      pt: "3. Os alunos digitalizam o código QR com os seus telemóveis.",
    },
    step4: {
      en: "4. They create a team and play the game on their phone.",
      pt: "4. Criam uma equipa e jogam o jogo no seu telemóvel.",
    },
    step5: {
      en: "5. Their scores appear on the leaderboard automatically.",
      pt: "5. As suas pontuações aparecem na classificação automaticamente.",
    },
    step6: {
      en: "6. You can view and export scores from this admin panel.",
      pt: "6. Podes ver e exportar pontuações a partir deste painel de administração.",
    },
  },

  // ===== COMMON UI =====
  common: {
    loading: { en: "Loading...", pt: "Carregando..." },
    error: { en: "Error", pt: "Erro" },
    success: { en: "Success", pt: "Sucesso" },
    close: { en: "Close", pt: "Fechar" },
    cancel: { en: "Cancel", pt: "Cancelar" },
    confirm: { en: "Confirm", pt: "Confirmar" },
    seconds: { en: "seconds", pt: "segundos" },
    percent: { en: "%", pt: "%" },
  },
};

/**
 * Helper function to get translated text
 */
export function t(key: string, lang: Language): string {
  const keys = key.split(".");
  let value: any = translations;

  for (const k of keys) {
    value = value?.[k];
  }

  if (typeof value === "object" && value !== null && lang in value) {
    return value[lang];
  }

  return key; // Fallback to key if translation not found
}
