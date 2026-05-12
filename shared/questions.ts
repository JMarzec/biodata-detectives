/**
 * BioData Detectives Question Bank
 * 24+ questions: 8 per round, bilingual (EN/PT)
 * Each question has scientifically cautious wording and feedback
 */

export type DataSignal = {
  label: string;
  value: number; // 0-100
  unit: string;
  state: "low" | "medium" | "high";
  category: "gene_expression" | "immune" | "metabolism" | "stress" | "biomarker" | "clinical";
};

export type AnswerOption = {
  id: string;
  text: string;
  textPt: string;
};

export type Question = {
  id: string;
  round: 1 | 2 | 3;
  title: string;
  titlePt: string;
  scenario: string;
  scenarioPt: string;
  dataSignals: DataSignal[];
  answerOptions: AnswerOption[];
  correctAnswerId: string;
  explanation: string; // Shown when answer is correct (fallback)
  explanationPt: string; // Shown when answer is correct (PT, fallback)
  wrongAnswerExplanation?: string; // Shown when answer is wrong (fallback)
  wrongAnswerExplanationPt?: string; // Shown when answer is wrong (PT, fallback)
  explanations?: { // Per-answer explanations keyed by answer ID
    [answerId: string]: {
      en: string;
      pt: string;
    };
  };
  mode?: "pattern_interpretation" | "methodological_judgement" | "clinical_decision";
  difficulty: "easy" | "medium" | "hard";
  tags: string[];
};

export const questions: Question[] = [
  // ===== ROUND 1: RNA DETECTIVE (8 questions) =====
  {
    id: "r1q1",
    round: 1,
    title: "RNA Detective: Treatment Response",
    titlePt: "Detetive de RNA: Resposta ao Tratamento",
    scenario:
      "Fictional Patient T-014 shows these gene-expression signals. Does this pattern suggest a favourable treatment-response hypothesis?",
    scenarioPt:
      "Paciente Fictício T-014 mostra estes sinais de expressão génica. Este padrão sugere uma hipótese de resposta ao tratamento mais favorável?",
    dataSignals: [
      { label: "RNA_REPAIR", value: 85, unit: "%", state: "high", category: "gene_expression" },
      { label: "CELL_GROWTH", value: 25, unit: "%", state: "low", category: "gene_expression" },
      { label: "IMMUNE_SIGNAL", value: 80, unit: "%", state: "high", category: "immune" },
    ],
    answerOptions: [
      { id: "a1", text: "Yes, likely response", textPt: "Sim, provável resposta" },
      { id: "a2", text: "No, likely resistance", textPt: "Não, provável resistência" },
      { id: "a3", text: "Need more data", textPt: "Precisamos de mais dados" },
    ],
    correctAnswerId: "a1",
    explanation:
      "Good choice. In this simplified fictional model, stronger immune activity and lower cell-growth signalling suggest a more favourable response pattern. In real research, many more samples and validation steps would be needed.",
    explanationPt:
      "Boa escolha. Neste modelo fictício simplificado, maior atividade imunitária e menor sinal de crescimento celular sugerem um padrão de resposta mais favorável. Na investigação real, seriam necessárias muitas mais amostras e etapas de validação.",
    difficulty: "easy",
    tags: ["transcriptomics", "RNA", "cancer", "gene_expression", "prognosis"],
  },
  {
    id: "r1q2",
    round: 1,
    title: "RNA Detective: Resistance Pattern",
    titlePt: "Detetive de RNA: Padrão de Resistência",
    scenario:
      "Fictional Patient T-025 shows these signals. What does this pattern suggest about treatment response?",
    scenarioPt:
      "Paciente Fictício T-025 mostra estes sinais. O que este padrão sugere sobre a resposta ao tratamento?",
    dataSignals: [
      { label: "RNA_REPAIR", value: 30, unit: "%", state: "low", category: "gene_expression" },
      { label: "CELL_GROWTH", value: 90, unit: "%", state: "high", category: "gene_expression" },
      { label: "IMMUNE_SIGNAL", value: 20, unit: "%", state: "low", category: "immune" },
    ],
    answerOptions: [
      { id: "a1", text: "Likely response", textPt: "Provável resposta" },
      { id: "a2", text: "Likely resistance", textPt: "Provável resistência" },
      { id: "a3", text: "Unclear without more data", textPt: "Pouco claro sem mais dados" },
    ],
    correctAnswerId: "a2",
    explanation:
      "Correct. This simplified pattern suggests potential resistance: low repair capacity, high cell-growth signalling, and weak immune response. However, real diagnosis requires extensive validation.",
    explanationPt:
      "Correto. Este padrão simplificado sugere potencial resistência: baixa capacidade de reparação, sinal elevado de crescimento celular e resposta imunitária fraca. No entanto, o diagnóstico real requer validação extensiva.",
    difficulty: "medium",
    tags: ["transcriptomics", "RNA", "cancer", "resistance", "therapeutic_target"],
  },
  {
    id: "r1q3",
    round: 1,
    title: "RNA Detective: Uncertain Signal",
    titlePt: "Detetive de RNA: Sinal Incerto",
    scenario:
      "Fictional Patient T-033 shows mixed signals. What is the best scientific conclusion?",
    scenarioPt:
      "Paciente Fictício T-033 mostra sinais mistos. Qual é a melhor conclusão científica?",
    dataSignals: [
      { label: "RNA_REPAIR", value: 55, unit: "%", state: "medium", category: "gene_expression" },
      { label: "CELL_GROWTH", value: 50, unit: "%", state: "medium", category: "gene_expression" },
      { label: "IMMUNE_SIGNAL", value: 60, unit: "%", state: "medium", category: "immune" },
    ],
    answerOptions: [
      { id: "a1", text: "Definitely responds", textPt: "Definitivamente responde" },
      { id: "a2", text: "Definitely resistant", textPt: "Definitivamente resistente" },
      { id: "a3", text: "Need more data to decide", textPt: "Precisamos de mais dados para decidir" },
    ],
    correctAnswerId: "a3",
    explanation:
      "Excellent critical thinking. When signals are ambiguous, the responsible conclusion is that more data are needed. This is exactly why biomedical research requires validation and replication.",
    explanationPt:
      "Excelente pensamento crítico. Quando os sinais são ambíguos, a conclusão responsável é que precisamos de mais dados. É exatamente por isso que a investigação biomédica requer validação e replicação.",
    difficulty: "medium",
    tags: ["critical_thinking", "validation", "transcriptomics", "uncertainty"],
    wrongAnswerExplanation: "Not quite. When data signals are mixed or ambiguous, jumping to a definitive conclusion (whether 'responds' or 'resistant') is overconfident. In real research, ambiguous results require more investigation before making claims. The correct answer is to acknowledge uncertainty and call for more data.",
    wrongAnswerExplanationPt: "Não exatamente. Quando os sinais de dados são mistos ou ambíguos, chegar a uma conclusão definitiva (seja 'responde' ou 'resistente') é demasiado confiante. Na investigação real, resultados ambíguos requerem mais investigação antes de fazer afirmações. A resposta correta é reconhecer a incerteza e pedir mais dados.",
  },
  {
    id: "r1q4",
    round: 1,
    title: "RNA Detective: Strong Immune Response",
    titlePt: "Detetive de RNA: Resposta Imunitária Forte",
    scenario:
      "Fictional Patient T-041 shows very high immune signalling. What might this suggest?",
    scenarioPt:
      "Paciente Fictício T-041 mostra sinalização imunitária muito elevada. O que isto pode sugerir?",
    dataSignals: [
      { label: "IMMUNE_SIGNAL", value: 95, unit: "%", state: "high", category: "immune" },
      { label: "INFLAM_MARKER", value: 88, unit: "%", state: "high", category: "stress" },
      { label: "CELL_GROWTH", value: 35, unit: "%", state: "low", category: "gene_expression" },
    ],
    answerOptions: [
      { id: "a1", text: "Excellent treatment response", textPt: "Excelente resposta ao tratamento" },
      { id: "a2", text: "Possible strong immune activation", textPt: "Possível ativação imunitária forte" },
      { id: "a3", text: "Certain cure", textPt: "Cura certa" },
    ],
    correctAnswerId: "a2",
    explanation:
      "Good choice. High immune signalling may indicate strong immune activation, which could be favourable. However, we use cautious language: 'possible' and 'may indicate', because real biology is complex and requires validation.",
    explanationPt:
      "Boa escolha. A sinalização imunitária elevada pode indicar ativação imunitária forte, o que poderia ser favorável. No entanto, usamos linguagem cautelosa: 'possível' e 'pode indicar', porque a biologia real é complexa e requer validação.",
    difficulty: "medium",
    tags: ["immune_response", "transcriptomics", "critical_thinking"],
  },
  {
    id: "r1q5",
    round: 1,
    title: "RNA Detective: Low Expression Pattern",
    titlePt: "Detetive de RNA: Padrão de Baixa Expressão",
    scenario:
      "Fictional Patient T-052 shows very low expression across all measured genes. What does this tell us?",
    scenarioPt:
      "Paciente Fictício T-052 mostra expressão muito baixa em todos os genes medidos. O que nos diz isto?",
    dataSignals: [
      { label: "RNA_REPAIR", value: 15, unit: "%", state: "low", category: "gene_expression" },
      { label: "CELL_GROWTH", value: 10, unit: "%", state: "low", category: "gene_expression" },
      { label: "IMMUNE_SIGNAL", value: 12, unit: "%", state: "low", category: "immune" },
    ],
    answerOptions: [
      { id: "a1", text: "Patient is healthy", textPt: "Paciente está saudável" },
      { id: "a2", text: "Pattern is unclear; more investigation needed", textPt: "Padrão é pouco claro; mais investigação necessária" },
      { id: "a3", text: "All genes are broken", textPt: "Todos os genes estão danificados" },
    ],
    correctAnswerId: "a2",
    explanation:
      "Correct. Uniformly low expression is unusual and requires investigation. It could indicate technical issues, a specific disease state, or other factors. This is why researchers always validate findings.",
    explanationPt:
      "Correto. A expressão uniformemente baixa é incomum e requer investigação. Pode indicar problemas técnicos, um estado de doença específico ou outros fatores. É por isso que os investigadores sempre validam as descobertas.",
    difficulty: "hard",
    tags: ["transcriptomics", "critical_thinking", "validation"],
  },
  {
    id: "r1q6",
    round: 1,
    title: "RNA Detective: Mixed Signals",
    titlePt: "Detetive de RNA: Sinais Mistos",
    scenario:
      "Fictional Patient T-061 shows high repair genes but also high cell-growth genes. What is the best interpretation?",
    scenarioPt:
      "Paciente Fictício T-061 mostra genes de reparação elevados mas também genes de crescimento celular elevados. Qual é a melhor interpretação?",
    dataSignals: [
      { label: "RNA_REPAIR", value: 82, unit: "%", state: "high", category: "gene_expression" },
      { label: "CELL_GROWTH", value: 75, unit: "%", state: "high", category: "gene_expression" },
      { label: "IMMUNE_SIGNAL", value: 45, unit: "%", state: "medium", category: "immune" },
    ],
    answerOptions: [
      { id: "a1", text: "Definitely good prognosis", textPt: "Definitivamente bom prognóstico" },
      { id: "a2", text: "Conflicting signals; needs more analysis", textPt: "Sinais conflitantes; precisa de mais análise" },
      { id: "a3", text: "Definitely bad prognosis", textPt: "Definitivamente mau prognóstico" },
    ],
    correctAnswerId: "a2",
    explanation:
      "Correct. When signals seem to conflict, we must be cautious. High repair and high growth could indicate different biological processes or complex disease states. This requires deeper investigation and validation.",
    explanationPt:
      "Correto. Quando os sinais parecem conflitantes, devemos ser cautelosos. Reparação elevada e crescimento elevado podem indicar processos biológicos diferentes ou estados de doença complexos. Isto requer investigação mais profunda e validação.",
    wrongAnswerExplanation:
      "Not quite. While high repair genes might seem positive, when combined with high growth genes, the signals are conflicting and require careful analysis. Jumping to 'definitely good' or 'definitely bad' prognosis without deeper investigation is premature. The correct approach is to recognize the complexity and call for more analysis.",
    wrongAnswerExplanationPt:
      "Não exatamente. Embora genes de reparação elevados possam parecer positivos, quando combinados com genes de crescimento elevados, os sinais são conflitantes e requerem análise cuidadosa. Chegar a 'definitivamente bom' ou 'definitivamente mau' prognóstico sem investigação mais profunda é prematuro. A abordagem correta é reconhecer a complexidade e pedir mais análise.",
    difficulty: "hard",
    tags: ["transcriptomics", "critical_thinking", "complexity"],
  },
  {
    id: "r1q7",
    round: 1,
    title: "RNA Detective: Immune Activation",
    titlePt: "Detetive de RNA: Ativação Imunitária",
    scenario:
      "Fictional Patient T-072 shows very high immune activation and moderate repair genes. What pattern does this suggest?",
    scenarioPt:
      "Paciente Fictício T-072 mostra ativação imunitária muito elevada e genes de reparação moderados. Que padrão isto sugere?",
    dataSignals: [
      { label: "IMMUNE_SIGNAL", value: 92, unit: "%", state: "high", category: "immune" },
      { label: "RNA_REPAIR", value: 60, unit: "%", state: "medium", category: "gene_expression" },
      { label: "CELL_GROWTH", value: 40, unit: "%", state: "medium", category: "gene_expression" },
    ],
    answerOptions: [
      { id: "a1", text: "Strong immune response, possibly favourable", textPt: "Resposta imunitária forte, possivelmente favorável" },
      { id: "a2", text: "Immune system is broken", textPt: "Sistema imunitário está danificado" },
      { id: "a3", text: "Patient will definitely recover", textPt: "Paciente vai definitivamente recuperar" },
    ],
    correctAnswerId: "a1",
    explanation:
      "Good choice. In this simplified model, strong immune response may suggest a favourable pattern. However, we use 'possibly' and 'may' because real biology requires validation and many factors influence outcomes.",
    explanationPt:
      "Boa escolha. Neste modelo simplificado, uma resposta imunitária forte pode sugerir um padrão favorável. No entanto, usamos 'possivelmente' e 'pode' porque a biologia real requer validação e muitos fatores influenciam os resultados.",
    difficulty: "easy",
    tags: ["immune_response", "transcriptomics", "prognosis"],
  },
  {
    id: "r1q8",
    round: 1,
    title: "RNA Detective: Baseline Expression",
    titlePt: "Detetive de RNA: Expressão de Base",
    scenario:
      "Fictional Patient T-083 shows all genes at approximately 50% expression level. What does this suggest?",
    scenarioPt:
      "Paciente Fictício T-083 mostra todos os genes a aproximadamente 50% de nível de expressão. O que isto sugere?",
    dataSignals: [
      { label: "RNA_REPAIR", value: 50, unit: "%", state: "medium", category: "gene_expression" },
      { label: "CELL_GROWTH", value: 52, unit: "%", state: "medium", category: "gene_expression" },
      { label: "IMMUNE_SIGNAL", value: 48, unit: "%", state: "medium", category: "immune" },
    ],
    answerOptions: [
      { id: "a1", text: "Baseline/normal state", textPt: "Estado de base/normal" },
      { id: "a2", text: "Cannot determine without comparison", textPt: "Não é possível determinar sem comparação" },
      { id: "a3", text: "Definitely diseased", textPt: "Definitivamente doente" },
    ],
    correctAnswerId: "a2",
    explanation:
      "Correct. A 50% expression level is meaningless without comparison to healthy controls or disease baselines. Biomedical data science always requires context and comparison groups.",
    explanationPt:
      "Correto. Um nível de expressão de 50% é sem significado sem comparação com controlos saudáveis ou linhas de base de doença. A ciência de dados biomédica sempre requer contexto e grupos de comparação.",
    difficulty: "hard",
    tags: ["critical_thinking", "transcriptomics", "validation"],
  },

  // ===== ROUND 2: NUTRITION & CELL STRESS (8 questions) =====
  {
    id: "r2q1",
    round: 2,
    title: "Cell Stress: Inflammation Pattern",
    titlePt: "Stress Celular: Padrão de Inflamação",
    scenario:
      "Cells under stress show these signals. What biological process could this fictional pattern represent?",
    scenarioPt:
      "Células sob stress mostram estes sinais. Que processo biológico este padrão fictício pode representar?",
    dataSignals: [
      { label: "OX_STRESS", value: 85, unit: "%", state: "high", category: "stress" },
      { label: "INFLAM_SIGNAL", value: 88, unit: "%", state: "high", category: "stress" },
      { label: "METAB_SWITCH", value: 80, unit: "%", state: "high", category: "metabolism" },
    ],
    answerOptions: [
      { id: "a1", text: "Cellular stress / inflammation", textPt: "Stress celular / inflamação" },
      { id: "a2", text: "Deep sleep", textPt: "Sono profundo" },
      { id: "a3", text: "Bone growth", textPt: "Crescimento ósseo" },
    ],
    correctAnswerId: "a1",
    explanation:
      "Correct. This fictional pattern suggests cellular stress and inflammation. Nutrition, environment, genetics, and disease can all influence biological processes, but there are no simple one-food-one-outcome answers.",
    explanationPt:
      "Correto. Este padrão fictício sugere stress celular e inflamação. Nutrição, ambiente, genética e doença podem influenciar processos biológicos, mas não existem respostas simples do tipo 'um alimento, um efeito'.",
    difficulty: "easy",
    tags: ["nutrition", "inflammation", "metabolism", "cell_stress"],
  },
  {
    id: "r2q2",
    round: 2,
    title: "Metabolism: Energy Switch",
    titlePt: "Metabolismo: Mudança de Energia",
    scenario:
      "A cell shows high metabolic switching and moderate oxidative stress. What might this indicate?",
    scenarioPt:
      "Uma célula mostra mudança metabólica elevada e stress oxidativo moderado. O que isto pode indicar?",
    dataSignals: [
      { label: "METAB_SWITCH", value: 78, unit: "%", state: "high", category: "metabolism" },
      { label: "OX_STRESS", value: 55, unit: "%", state: "medium", category: "stress" },
      { label: "ATP_PRODUCTION", value: 65, unit: "%", state: "medium", category: "metabolism" },
    ],
    answerOptions: [
      { id: "a1", text: "Possible metabolic adaptation", textPt: "Possível adaptação metabólica" },
      { id: "a2", text: "Cell is definitely dying", textPt: "Célula está definitivamente a morrer" },
      { id: "a3", text: "Normal resting state", textPt: "Estado de repouso normal" },
    ],
    correctAnswerId: "a1",
    explanation:
      "Good choice. High metabolic switching may indicate the cell is adapting to new conditions. This could be a response to stress, disease, or environmental changes. Real biology requires more investigation.",
    explanationPt:
      "Boa escolha. A mudança metabólica elevada pode indicar que a célula está a adaptar-se a novas condições. Isto pode ser uma resposta a stress, doença ou mudanças ambientais. A biologia real requer mais investigação.",
    difficulty: "medium",
    tags: ["metabolism", "cell_stress", "nutrition"],
  },
  {
    id: "r2q3",
    round: 2,
    title: "Nutrition: Antioxidant Response",
    titlePt: "Nutrição: Resposta Antioxidante",
    scenario:
      "A cell shows high oxidative stress but also high antioxidant defense genes. What does this pattern suggest?",
    scenarioPt:
      "Uma célula mostra stress oxidativo elevado mas também genes de defesa antioxidante elevados. O que este padrão sugere?",
    dataSignals: [
      { label: "OX_STRESS", value: 82, unit: "%", state: "high", category: "stress" },
      { label: "ANTIOXID_DEFENSE", value: 85, unit: "%", state: "high", category: "metabolism" },
      { label: "INFLAM_SIGNAL", value: 45, unit: "%", state: "medium", category: "stress" },
    ],
    answerOptions: [
      { id: "a1", text: "Cell is mounting a defense response", textPt: "Célula está a montar uma resposta de defesa" },
      { id: "a2", text: "Antioxidants are useless", textPt: "Antioxidantes são inúteis" },
      { id: "a3", text: "Cell will definitely recover", textPt: "Célula vai definitivamente recuperar" },
    ],
    correctAnswerId: "a1",
    explanation:
      "Excellent. This pattern suggests the cell is actively responding to oxidative stress by upregulating antioxidant defenses. This is a normal adaptive response, but we cannot predict the outcome without more data.",
    explanationPt:
      "Excelente. Este padrão sugere que a célula está a responder ativamente ao stress oxidativo aumentando as defesas antioxidantes. Esta é uma resposta adaptativa normal, mas não podemos prever o resultado sem mais dados.",
    difficulty: "medium",
    tags: ["nutrition", "antioxidants", "cell_stress", "metabolism"],
  },
  {
    id: "r2q4",
    round: 2,
    title: "Inflammation: Cytokine Pattern",
    titlePt: "Inflamação: Padrão de Citocinas",
    scenario:
      "Tissue shows high inflammatory signals and immune activation. What biological state might this represent?",
    scenarioPt:
      "Tecido mostra sinais inflamatórios elevados e ativação imunitária. Que estado biológico isto pode representar?",
    dataSignals: [
      { label: "INFLAM_SIGNAL", value: 90, unit: "%", state: "high", category: "stress" },
      { label: "IMMUNE_SIGNAL", value: 85, unit: "%", state: "high", category: "immune" },
      { label: "CYTOKINE_IL6", value: 88, unit: "%", state: "high", category: "stress" },
    ],
    answerOptions: [
      { id: "a1", text: "Possible active inflammation", textPt: "Possível inflamação ativa" },
      { id: "a2", text: "Tissue is perfectly healthy", textPt: "Tecido está perfeitamente saudável" },
      { id: "a3", text: "Inflammation is always bad", textPt: "Inflamação é sempre má" },
    ],
    correctAnswerId: "a1",
    explanation:
      "Good choice. High inflammatory and immune signals suggest active inflammation. However, inflammation is complex: it can be protective or harmful depending on context. We must be cautious about interpreting it.",
    explanationPt:
      "Boa escolha. Sinais inflamatórios e imunitários elevados sugerem inflamação ativa. No entanto, a inflamação é complexa: pode ser protetora ou prejudicial dependendo do contexto. Devemos ser cautelosos na sua interpretação.",
    difficulty: "medium",
    tags: ["inflammation", "immune_response", "cell_stress"],
  },
  {
    id: "r2q5",
    round: 2,
    title: "Metabolism: Glucose Stress",
    titlePt: "Metabolismo: Stress de Glucose",
    scenario:
      "Cells show low glucose uptake and high metabolic stress signals. What might this indicate?",
    scenarioPt:
      "Células mostram baixa captação de glucose e sinais elevados de stress metabólico. O que isto pode indicar?",
    dataSignals: [
      { label: "GLUCOSE_UPTAKE", value: 25, unit: "%", state: "low", category: "metabolism" },
      { label: "METAB_STRESS", value: 80, unit: "%", state: "high", category: "stress" },
      { label: "ENERGY_CRISIS", value: 75, unit: "%", state: "high", category: "metabolism" },
    ],
    answerOptions: [
      { id: "a1", text: "Possible metabolic dysfunction", textPt: "Possível disfunção metabólica" },
      { id: "a2", text: "Cells are fasting", textPt: "Células estão em jejum" },
      { id: "a3", text: "Cannot determine without more context", textPt: "Não é possível determinar sem mais contexto" },
    ],
    correctAnswerId: "a3",
    explanation:
      "Correct. Low glucose uptake with high metabolic stress could indicate many things: metabolic dysfunction, adaptation to low-glucose conditions, or disease. Context and comparison are essential.",
    explanationPt:
      "Correto. Baixa captação de glucose com stress metabólico elevado pode indicar muitas coisas: disfunção metabólica, adaptação a condições de baixa glucose ou doença. Contexto e comparação são essenciais.",
    difficulty: "hard",
    tags: ["metabolism", "nutrition", "critical_thinking"],
  },
  {
    id: "r2q6",
    round: 2,
    title: "Cell Stress: Recovery Pattern",
    titlePt: "Stress Celular: Padrão de Recuperação",
    scenario:
      "Cells show high stress signals but also high repair and recovery genes. What does this suggest?",
    scenarioPt:
      "Células mostram sinais de stress elevados mas também genes elevados de reparação e recuperação. O que isto sugere?",
    dataSignals: [
      { label: "OX_STRESS", value: 75, unit: "%", state: "high", category: "stress" },
      { label: "DNA_REPAIR", value: 82, unit: "%", state: "high", category: "gene_expression" },
      { label: "RECOVERY_GENES", value: 78, unit: "%", state: "high", category: "gene_expression" },
    ],
    answerOptions: [
      { id: "a1", text: "Cells may be attempting recovery", textPt: "Células podem estar a tentar recuperação" },
      { id: "a2", text: "Cells are definitely dying", textPt: "Células estão definitivamente a morrer" },
      { id: "a3", text: "Repair genes are useless", textPt: "Genes de reparação são inúteis" },
    ],
    correctAnswerId: "a1",
    explanation:
      "Excellent. This pattern suggests the cells are mounting a defense and attempting repair. However, whether recovery succeeds depends on many factors. This is why biomedical research requires validation.",
    explanationPt:
      "Excelente. Este padrão sugere que as células estão a montar uma defesa e a tentar reparação. No entanto, se a recuperação tem sucesso depende de muitos fatores. É por isso que a investigação biomédica requer validação.",
    difficulty: "medium",
    tags: ["cell_stress", "recovery", "gene_expression"],
  },
  {
    id: "r2q7",
    round: 2,
    title: "Nutrition: Nutrient Deficiency",
    titlePt: "Nutrição: Deficiência de Nutrientes",
    scenario:
      "Tissue shows signs of nutrient stress and altered metabolism. What might this indicate?",
    scenarioPt:
      "Tecido mostra sinais de stress nutricional e metabolismo alterado. O que isto pode indicar?",
    dataSignals: [
      { label: "NUTRIENT_STRESS", value: 80, unit: "%", state: "high", category: "stress" },
      { label: "METAB_ADAPTATION", value: 75, unit: "%", state: "high", category: "metabolism" },
      { label: "ENERGY_PRODUCTION", value: 40, unit: "%", state: "low", category: "metabolism" },
    ],
    answerOptions: [
      { id: "a1", text: "Possible nutrient limitation", textPt: "Possível limitação de nutrientes" },
      { id: "a2", text: "Definitely caused by poor diet", textPt: "Definitivamente causado por má alimentação" },
      { id: "a3", text: "No information can be drawn", textPt: "Nenhuma informação pode ser tirada" },
    ],
    correctAnswerId: "a1",
    explanation:
      "Good choice. This pattern suggests nutrient stress and metabolic adaptation. However, many factors influence nutrient availability and metabolism. We cannot make definitive claims without more investigation.",
    explanationPt:
      "Boa escolha. Este padrão sugere stress nutricional e adaptação metabólica. No entanto, muitos fatores influenciam a disponibilidade de nutrientes e o metabolismo. Não podemos fazer afirmações definitivas sem mais investigação.",
    difficulty: "medium",
    tags: ["nutrition", "metabolism", "cell_stress"],
  },
  {
    id: "r2q8",
    round: 2,
    title: "Inflammation: Chronic vs Acute",
    titlePt: "Inflamação: Crónica vs Aguda",
    scenario:
      "Tissue shows moderate inflammation with high chronic-stress markers. What pattern does this suggest?",
    scenarioPt:
      "Tecido mostra inflamação moderada com marcadores elevados de stress crónico. Que padrão isto sugere?",
    dataSignals: [
      { label: "INFLAM_SIGNAL", value: 60, unit: "%", state: "medium", category: "stress" },
      { label: "CHRONIC_STRESS", value: 85, unit: "%", state: "high", category: "stress" },
      { label: "IMMUNE_ACTIVATION", value: 50, unit: "%", state: "medium", category: "immune" },
    ],
    answerOptions: [
      { id: "a1", text: "Possible chronic inflammation", textPt: "Possível inflamação crónica" },
      { id: "a2", text: "Definitely acute infection", textPt: "Definitivamente infeção aguda" },
      { id: "a3", text: "No inflammation present", textPt: "Nenhuma inflamação presente" },
    ],
    correctAnswerId: "a1",
    explanation:
      "Correct. The pattern suggests chronic rather than acute inflammation. Chronic inflammation is associated with many diseases, but causation is complex and requires investigation.",
    explanationPt:
      "Correto. O padrão sugere inflamação crónica em vez de aguda. A inflamação crónica está associada a muitas doenças, mas a causalidade é complexa e requer investigação.",
    difficulty: "medium",
    tags: ["inflammation", "chronic_disease", "cell_stress"],
  },

  // ===== ROUND 3: BIOMARKER MISSION (8 questions) =====
  {
    id: "r3q1",
    round: 3,
    title: "Biomarker Mission: Validation",
    titlePt: "Missão de Biomarcador: Validação",
    scenario:
      "A marker is high in aggressive tumours but also high in some normal tissues. Only 6 samples tested. Patient outcomes are incomplete. What is the best scientific conclusion?",
    scenarioPt:
      "Um marcador é elevado em tumores agressivos mas também elevado em alguns tecidos normais. Apenas 6 amostras testadas. Os resultados dos pacientes estão incompletos. Qual é a melhor conclusão científica?",
    dataSignals: [
      { label: "MARKER_A", value: 88, unit: "%", state: "high", category: "biomarker" },
      { label: "SAMPLE_SIZE", value: 6, unit: "n", state: "low", category: "clinical" },
      { label: "OUTCOME_DATA", value: 30, unit: "%", state: "low", category: "clinical" },
    ],
    answerOptions: [
      { id: "a1", text: "This is definitely a cancer cure", textPt: "Isto é definitivamente uma cura para o cancro" },
      { id: "a2", text: "This is a promising hypothesis, but needs validation", textPt: "Esta é uma hipótese promissora, mas precisa de validação" },
      { id: "a3", text: "Ignore all data", textPt: "Ignore todos os dados" },
    ],
    correctAnswerId: "a2",
    explanation:
      "Excellent critical thinking. A possible biomarker must be tested in more samples and compared with clinical data before it can be considered useful. Small sample sizes and incomplete outcomes are red flags.",
    explanationPt:
      "Excelente pensamento crítico. Um possível biomarcador tem de ser testado em mais amostras e comparado com dados clínicos antes de poder ser considerado útil. Tamanhos pequenos de amostra e resultados incompletos são sinais de alerta.",
    difficulty: "easy",
    tags: ["biomarker", "validation", "critical_thinking"],
  },
  {
    id: "r3q2",
    round: 3,
    title: "Biomarker Mission: Specificity",
    titlePt: "Missão de Biomarcador: Especificidade",
    scenario:
      "Marker B is high in cancer patients but also high in patients with inflammation. What does this tell us about its clinical usefulness?",
    scenarioPt:
      "Marcador B é elevado em pacientes com cancro mas também elevado em pacientes com inflamação. O que isto nos diz sobre a sua utilidade clínica?",
    dataSignals: [
      { label: "MARKER_B_CANCER", value: 92, unit: "%", state: "high", category: "biomarker" },
      { label: "MARKER_B_INFLAM", value: 85, unit: "%", state: "high", category: "biomarker" },
      { label: "SPECIFICITY", value: 20, unit: "%", state: "low", category: "clinical" },
    ],
    answerOptions: [
      { id: "a1", text: "Perfect diagnostic marker", textPt: "Marcador diagnóstico perfeito" },
      { id: "a2", text: "Low specificity; not useful for diagnosis alone", textPt: "Baixa especificidade; não é útil para diagnóstico sozinho" },
      { id: "a3", text: "Definitely causes cancer", textPt: "Definitivamente causa cancro" },
    ],
    correctAnswerId: "a2",
    explanation:
      "Correct. A marker that is high in multiple conditions has low specificity and cannot be used alone for diagnosis. Good biomarkers must be specific to the condition they are meant to detect.",
    explanationPt:
      "Correto. Um marcador que é elevado em múltiplas condições tem baixa especificidade e não pode ser usado sozinho para diagnóstico. Bons biomarcadores devem ser específicos para a condição que se destinam a detectar.",
    difficulty: "medium",
    tags: ["biomarker", "specificity", "diagnostic"],
  },
  {
    id: "r3q3",
    round: 3,
    title: "Biomarker Mission: Sample Size",
    titlePt: "Missão de Biomarcador: Tamanho da Amostra",
    scenario:
      "A study finds a strong correlation between Marker C and treatment response in 500 patients. What is the next step?",
    scenarioPt:
      "Um estudo encontra uma correlação forte entre Marcador C e resposta ao tratamento em 500 pacientes. Qual é o próximo passo?",
    dataSignals: [
      { label: "SAMPLE_SIZE", value: 500, unit: "n", state: "high", category: "clinical" },
      { label: "CORRELATION", value: 92, unit: "%", state: "high", category: "biomarker" },
      { label: "VALIDATION_STATUS", value: 0, unit: "%", state: "low", category: "clinical" },
    ],
    answerOptions: [
      { id: "a1", text: "Publish immediately as a cure", textPt: "Publicar imediatamente como uma cura" },
      { id: "a2", text: "Validate in an independent cohort", textPt: "Validar numa coorte independente" },
      { id: "a3", text: "Ignore the finding", textPt: "Ignorar a descoberta" },
    ],
    correctAnswerId: "a2",
    explanation:
      "Excellent. Even with 500 patients, a finding must be validated in an independent cohort to ensure it is not due to chance or bias. This is a fundamental principle of biomedical research.",
    explanationPt:
      "Excelente. Mesmo com 500 pacientes, uma descoberta deve ser validada numa coorte independente para garantir que não é devida ao acaso ou viés. Este é um princípio fundamental da investigação biomédica.",
    difficulty: "hard",
    tags: ["biomarker", "validation", "critical_thinking"],
  },
  {
    id: "r3q4",
    round: 3,
    title: "Biomarker Mission: Confounding Factors",
    titlePt: "Missão de Biomarcador: Fatores de Confusão",
    scenario:
      "Marker D correlates with survival, but also correlates with age and disease stage. What must we consider?",
    scenarioPt:
      "Marcador D correlaciona com sobrevivência, mas também correlaciona com idade e estágio da doença. O que devemos considerar?",
    dataSignals: [
      { label: "MARKER_D_SURVIVAL", value: 78, unit: "%", state: "high", category: "biomarker" },
      { label: "MARKER_D_AGE", value: 72, unit: "%", state: "high", category: "clinical" },
      { label: "MARKER_D_STAGE", value: 85, unit: "%", state: "high", category: "clinical" },
    ],
    answerOptions: [
      { id: "a1", text: "Marker D is independent and useful", textPt: "Marcador D é independente e útil" },
      { id: "a2", text: "Must adjust for confounding factors", textPt: "Deve ajustar para fatores de confusão" },
      { id: "a3", text: "Age and stage are not important", textPt: "Idade e estágio não são importantes" },
    ],
    correctAnswerId: "a2",
    explanation:
      "Correct. When a marker correlates with multiple factors, we must use statistical methods to adjust for confounding. Otherwise, we cannot know if the marker is truly predictive or just a proxy for age/stage.",
    explanationPt:
      "Correto. Quando um marcador correlaciona com múltiplos fatores, devemos usar métodos estatísticos para ajustar para confusão. Caso contrário, não podemos saber se o marcador é verdadeiramente preditivo ou apenas um proxy para idade/estágio.",
    difficulty: "hard",
    tags: ["biomarker", "confounding", "critical_thinking"],
  },
  {
    id: "r3q5",
    round: 3,
    title: "Biomarker Mission: Sensitivity",
    titlePt: "Missão de Biomarcador: Sensibilidade",
    scenario:
      "Marker E detects 95% of cancer cases but also gives false positives in 40% of healthy controls. What does this mean?",
    scenarioPt:
      "Marcador E detecta 95% dos casos de cancro mas também dá falsos positivos em 40% dos controlos saudáveis. O que isto significa?",
    dataSignals: [
      { label: "SENSITIVITY", value: 95, unit: "%", state: "high", category: "biomarker" },
      { label: "SPECIFICITY", value: 60, unit: "%", state: "medium", category: "biomarker" },
      { label: "FALSE_POS_RATE", value: 40, unit: "%", state: "high", category: "clinical" },
    ],
    answerOptions: [
      { id: "a1", text: "Excellent diagnostic test", textPt: "Teste diagnóstico excelente" },
      { id: "a2", text: "High sensitivity but low specificity; not suitable for screening", textPt: "Alta sensibilidade mas baixa especificidade; não adequado para rastreio" },
      { id: "a3", text: "False positives are impossible", textPt: "Falsos positivos são impossíveis" },
    ],
    correctAnswerId: "a2",
    explanation:
      "Correct. High sensitivity is good for ruling out disease, but low specificity means many false alarms. This marker alone would not be suitable for clinical screening without additional tests.",
    explanationPt:
      "Correto. Alta sensibilidade é boa para descartar doença, mas baixa especificidade significa muitos alarmes falsos. Este marcador sozinho não seria adequado para rastreio clínico sem testes adicionais.",
    difficulty: "hard",
    tags: ["biomarker", "sensitivity", "specificity"],
  },
  {
    id: "r3q6",
    round: 3,
    title: "Biomarker Mission: Mechanistic Understanding",
    titlePt: "Missão de Biomarcador: Compreensão Mecanística",
    scenario:
      "A marker correlates with disease but we do not understand why. Should we use it clinically?",
    scenarioPt:
      "Um marcador correlaciona com doença mas não compreendemos porquê. Devemos usá-lo clinicamente?",
    dataSignals: [
      { label: "CORRELATION", value: 88, unit: "%", state: "high", category: "biomarker" },
      { label: "MECHANISM_KNOWN", value: 0, unit: "%", state: "low", category: "clinical" },
      { label: "VALIDATION_DATA", value: 45, unit: "%", state: "medium", category: "clinical" },
    ],
    answerOptions: [
      { id: "a1", text: "Yes, correlation is enough", textPt: "Sim, correlação é suficiente" },
      { id: "a2", text: "Preferably understand mechanism first", textPt: "Preferencialmente compreender o mecanismo primeiro" },
      { id: "a3", text: "Markers are always useless", textPt: "Marcadores são sempre inúteis" },
    ],
    correctAnswerId: "a2",
    explanation:
      "Excellent. While correlation can be clinically useful, understanding the biological mechanism strengthens confidence in the marker. Markers without known mechanisms are riskier and require more validation.",
    explanationPt:
      "Excelente. Embora a correlação possa ser clinicamente útil, compreender o mecanismo biológico fortalece a confiança no marcador. Marcadores sem mecanismos conhecidos são mais arriscados e requerem mais validação.",
    difficulty: "hard",
    tags: ["biomarker", "mechanism", "critical_thinking"],
  },
  {
    id: "r3q7",
    round: 3,
    title: "Biomarker Mission: Cost-Benefit",
    titlePt: "Missão de Biomarcador: Custo-Benefício",
    scenario:
      "Marker F is a good predictor but very expensive to measure. How should we decide if it is clinically useful?",
    scenarioPt:
      "Marcador F é um bom preditor mas muito caro de medir. Como devemos decidir se é clinicamente útil?",
    dataSignals: [
      { label: "PREDICTIVE_VALUE", value: 82, unit: "%", state: "high", category: "biomarker" },
      { label: "COST", value: 95, unit: "%", state: "high", category: "clinical" },
      { label: "ACCESSIBILITY", value: 15, unit: "%", state: "low", category: "clinical" },
    ],
    answerOptions: [
      { id: "a1", text: "Use it regardless of cost", textPt: "Use-o independentemente do custo" },
      { id: "a2", text: "Compare cost-benefit with alternatives", textPt: "Compare custo-benefício com alternativas" },
      { id: "a3", text: "Never use expensive tests", textPt: "Nunca use testes caros" },
    ],
    correctAnswerId: "a2",
    explanation:
      "Correct. Clinical utility depends on cost, accessibility, and benefit. A good marker that is too expensive or difficult to access may not be practical. Real-world implementation requires balancing many factors.",
    explanationPt:
      "Correto. A utilidade clínica depende do custo, acessibilidade e benefício. Um bom marcador que é demasiado caro ou difícil de aceder pode não ser prático. A implementação no mundo real requer equilibrar muitos fatores.",
    difficulty: "hard",
    tags: ["biomarker", "clinical_utility", "critical_thinking"],
  },
  {
    id: "r3q8",
    round: 3,
    title: "Biomarker Mission: Precision Medicine",
    titlePt: "Missão de Biomarcador: Medicina de Precisão",
    scenario:
      "A panel of 5 markers together predicts treatment response better than any single marker. What does this suggest?",
    scenarioPt:
      "Um painel de 5 marcadores juntos prediz resposta ao tratamento melhor do que qualquer marcador único. O que isto sugere?",
    dataSignals: [
      { label: "SINGLE_MARKER", value: 72, unit: "%", state: "medium", category: "biomarker" },
      { label: "PANEL_ACCURACY", value: 88, unit: "%", state: "high", category: "biomarker" },
      { label: "COMPLEXITY", value: 75, unit: "%", state: "high", category: "clinical" },
    ],
    answerOptions: [
      { id: "a1", text: "Disease is complex; multiple markers needed", textPt: "Doença é complexa; múltiplos marcadores necessários" },
      { id: "a2", text: "Single markers are always better", textPt: "Marcadores únicos são sempre melhores" },
      { id: "a3", text: "Panels are too complicated", textPt: "Painéis são demasiado complicados" },
    ],
    correctAnswerId: "a1",
    explanation:
      "Excellent. This is the principle of precision medicine: complex diseases often require multiple biomarkers for accurate prediction. However, complexity must be balanced with practical implementation.",
    explanationPt:
      "Excelente. Este é o princípio da medicina de precisão: doenças complexas frequentemente requerem múltiplos biomarcadores para predição precisa. No entanto, a complexidade deve ser equilibrada com a implementação prática.",
    difficulty: "hard",
    tags: ["biomarker", "precision_medicine", "complexity"],
  },
];
