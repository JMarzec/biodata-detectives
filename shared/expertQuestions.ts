/**
 * BioData Detectives Expert Mode Question Bank
 * 24 expert-level questions: 8 per round, bilingual (EN/PT)
 * Designed for advanced players with deeper scientific understanding
 */

import { Question } from "./questions";

export const expertQuestions: Question[] = [
  // ===== ROUND 1: RNA DETECTIVE - EXPERT (8 questions) =====
  {
    id: "exp_r1q1",
    round: 1,
    title: "RNA Detective: Multi-Signal Integration",
    titlePt: "Detetive de RNA: Integração Multi-Sinal",
    scenario:
      "Patient E-001 shows discordant signals: high TP53 mutation burden, elevated BRCA1 expression, but low DNA damage response markers. How would you interpret this complex pattern?",
    scenarioPt:
      "Paciente E-001 mostra sinais discordantes: alta carga de mutações TP53, expressão elevada de BRCA1, mas marcadores baixos de resposta a danos no DNA. Como interpretaria este padrão complexo?",
    dataSignals: [
      { label: "TP53_MUTATIONS", value: 85, unit: "%", state: "high", category: "gene_expression" },
      { label: "BRCA1_EXPR", value: 78, unit: "%", state: "high", category: "gene_expression" },
      { label: "DNA_DAMAGE_RESP", value: 25, unit: "%", state: "low", category: "stress" },
    ],
    answerOptions: [
      { id: "a1", text: "Possible BRCA1 compensatory response", textPt: "Possível resposta compensatória de BRCA1" },
      { id: "a2", text: "Certain therapeutic response", textPt: "Resposta terapêutica certa" },
      { id: "a3", text: "No meaningful pattern", textPt: "Nenhum padrão significativo" },
    ],
    correctAnswerId: "a1",
    explanation:
      "Advanced insight. This pattern may suggest BRCA1 upregulation attempting to compensate for TP53 dysfunction. However, low DNA damage response raises concerns about genomic instability. This requires functional validation and multi-omics integration.",
    explanationPt:
      "Perspetiva avançada. Este padrão pode sugerir upregulação de BRCA1 tentando compensar disfunção de TP53. No entanto, baixa resposta a danos no DNA levanta preocupações sobre instabilidade genómica. Isto requer validação funcional e integração multi-ómicas.",
    difficulty: "hard",
    tags: ["transcriptomics", "DNA_repair", "cancer", "systems_biology", "expert"],
  },
  {
    id: "exp_r1q2",
    round: 1,
    title: "RNA Detective: Pathway Crosstalk",
    titlePt: "Detetive de RNA: Interação de Vias",
    scenario:
      "Patient E-002 shows simultaneous activation of apoptosis and anti-apoptosis pathways. What does this suggest about cellular state?",
    scenarioPt:
      "Paciente E-002 mostra ativação simultânea de vias de apoptose e anti-apoptose. O que isto sugere sobre o estado celular?",
    dataSignals: [
      { label: "APOPTOSIS_GENES", value: 82, unit: "%", state: "high", category: "gene_expression" },
      { label: "SURVIVAL_GENES", value: 79, unit: "%", state: "high", category: "gene_expression" },
      { label: "CELL_CYCLE_ARREST", value: 65, unit: "%", state: "medium", category: "gene_expression" },
    ],
    answerOptions: [
      { id: "a1", text: "Cellular stress with conflicting signals", textPt: "Stress celular com sinais conflitantes" },
      { id: "a2", text: "Normal healthy state", textPt: "Estado saudável normal" },
      { id: "a3", text: "Definite apoptosis", textPt: "Apoptose definitiva" },
    ],
    correctAnswerId: "a1",
    explanation:
      "Excellent. Simultaneous pathway activation suggests cellular stress with competing signals—potentially a critical decision point. This may indicate therapy-induced stress or pre-malignant instability. Requires single-cell analysis for resolution.",
    explanationPt:
      "Excelente. Ativação simultânea de vias sugere stress celular com sinais concorrentes—potencialmente um ponto de decisão crítico. Isto pode indicar stress induzido por terapia ou instabilidade pré-maligna. Requer análise de célula única para resolução.",
    difficulty: "hard",
    tags: ["transcriptomics", "apoptosis", "pathway_analysis", "expert"],
  },
  {
    id: "exp_r1q3",
    round: 1,
    title: "RNA Detective: Isoform Switching",
    titlePt: "Detetive de RNA: Troca de Isoformas",
    scenario:
      "Patient E-003 shows normal total KRAS expression but altered isoform ratios (KRAS4A:KRAS4B = 0.3:0.7). What might this indicate?",
    scenarioPt:
      "Paciente E-003 mostra expressão total normal de KRAS mas proporções alteradas de isoformas (KRAS4A:KRAS4B = 0.3:0.7). O que isto pode indicar?",
    dataSignals: [
      { label: "KRAS_TOTAL", value: 50, unit: "%", state: "medium", category: "gene_expression" },
      { label: "KRAS4A_RATIO", value: 30, unit: "%", state: "low", category: "gene_expression" },
      { label: "KRAS4B_RATIO", value: 70, unit: "%", state: "high", category: "gene_expression" },
    ],
    answerOptions: [
      { id: "a1", text: "Functionally equivalent to normal", textPt: "Funcionalmente equivalente ao normal" },
      { id: "a2", text: "Potential functional shift despite normal levels", textPt: "Possível mudança funcional apesar de níveis normais" },
      { id: "a3", text: "Measurement error", textPt: "Erro de medição" },
    ],
    correctAnswerId: "a2",
    explanation:
      "Sophisticated understanding. KRAS isoforms have distinct biological functions and subcellular localizations. Altered ratios can shift cellular behavior without changing total expression. This highlights why isoform-level analysis is crucial beyond bulk RNA-seq.",
    explanationPt:
      "Compreensão sofisticada. As isoformas de KRAS têm funções biológicas distintas e localizações subcelulares. Proporções alteradas podem mudar o comportamento celular sem alterar a expressão total. Isto destaca por que a análise ao nível de isoforma é crucial além de RNA-seq em massa.",
    difficulty: "hard",
    tags: ["transcriptomics", "isoforms", "RNA_processing", "expert"],
  },
  {
    id: "exp_r1q4",
    round: 1,
    title: "RNA Detective: Temporal Dynamics",
    titlePt: "Detetive de RNA: Dinâmica Temporal",
    scenario:
      "Serial samples from Patient E-004 show: Day 0 (baseline), Day 3 (high immune response), Day 7 (immune response declining, tumor markers rising). What does this trajectory suggest?",
    scenarioPt:
      "Amostras seriais do Paciente E-004 mostram: Dia 0 (baseline), Dia 3 (resposta imunitária elevada), Dia 7 (resposta imunitária em declínio, marcadores tumorais aumentando). O que esta trajetória sugere?",
    dataSignals: [
      { label: "IMMUNE_RESPONSE_D3", value: 85, unit: "%", state: "high", category: "immune" },
      { label: "IMMUNE_RESPONSE_D7", value: 35, unit: "%", state: "low", category: "immune" },
      { label: "TUMOR_MARKERS_D7", value: 72, unit: "%", state: "high", category: "biomarker" },
    ],
    answerOptions: [
      { id: "a1", text: "Immune escape mechanism", textPt: "Mecanismo de fuga imunitária" },
      { id: "a2", text: "Treatment success", textPt: "Sucesso do tratamento" },
      { id: "a3", text: "Normal response pattern", textPt: "Padrão de resposta normal" },
    ],
    correctAnswerId: "a1",
    explanation:
      "Excellent temporal analysis. The initial immune response followed by rapid decline with rising tumor markers suggests potential immune escape. This dynamic pattern is more informative than single timepoints and critical for predicting treatment resistance.",
    explanationPt:
      "Excelente análise temporal. A resposta imunitária inicial seguida de declínio rápido com marcadores tumorais crescentes sugere possível fuga imunitária. Este padrão dinâmico é mais informativo do que pontos únicos no tempo e crítico para prever resistência ao tratamento.",
    difficulty: "hard",
    tags: ["transcriptomics", "temporal_analysis", "immune_escape", "expert"],
  },
  {
    id: "exp_r1q5",
    round: 1,
    title: "RNA Detective: Stromal Contamination",
    titlePt: "Detetive de RNA: Contaminação do Estroma",
    scenario:
      "Tumor sample shows high fibroblast markers (CAF signature) alongside cancer markers. How should this be interpreted in transcriptomics analysis?",
    scenarioPt:
      "Amostra tumoral mostra marcadores elevados de fibroblastos (assinatura CAF) juntamente com marcadores de cancro. Como isto deve ser interpretado na análise de transcriptómica?",
    dataSignals: [
      { label: "CANCER_MARKERS", value: 68, unit: "%", state: "high", category: "gene_expression" },
      { label: "CAF_SIGNATURE", value: 72, unit: "%", state: "high", category: "gene_expression" },
      { label: "IMMUNE_INFILTRATE", value: 55, unit: "%", state: "medium", category: "immune" },
    ],
    answerOptions: [
      { id: "a1", text: "Ignore stromal signal; focus on cancer genes", textPt: "Ignorar sinal do estroma; focar em genes de cancro" },
      { id: "a2", text: "Account for stromal composition; may affect interpretation", textPt: "Contabilizar composição do estroma; pode afetar interpretação" },
      { id: "a3", text: "Stromal genes are irrelevant", textPt: "Genes do estroma são irrelevantes" },
    ],
    correctAnswerId: "a2",
    explanation:
      "Critical insight. Tumor microenvironment composition significantly affects bulk RNA-seq results. High CAF (cancer-associated fibroblast) signature can confound cancer cell-intrinsic signals. Proper deconvolution or single-cell analysis is essential for accurate interpretation.",
    explanationPt:
      "Perspetiva crítica. A composição do microambiente tumoral afeta significativamente os resultados de RNA-seq em massa. Assinatura CAF elevada pode confundir sinais intrínsecos das células cancerígenas. Deconvolução adequada ou análise de célula única é essencial para interpretação precisa.",
    difficulty: "hard",
    tags: ["transcriptomics", "tumor_microenvironment", "deconvolution", "expert"],
  },
  {
    id: "exp_r1q6",
    round: 1,
    title: "RNA Detective: Batch Effects",
    titlePt: "Detetive de RNA: Efeitos de Lote",
    scenario:
      "Two cohorts show apparent gene expression differences, but samples were processed in different batches with different RNA extraction protocols. What is the first step?",
    scenarioPt:
      "Duas coortes mostram diferenças aparentes de expressão génica, mas as amostras foram processadas em diferentes lotes com protocolos diferentes de extração de RNA. Qual é o primeiro passo?",
    dataSignals: [
      { label: "COHORT_A_SIGNAL", value: 75, unit: "%", state: "high", category: "gene_expression" },
      { label: "COHORT_B_SIGNAL", value: 35, unit: "%", state: "low", category: "gene_expression" },
      { label: "BATCH_EFFECT_LIKELIHOOD", value: 88, unit: "%", state: "high", category: "clinical" },
    ],
    answerOptions: [
      { id: "a1", text: "Assume biological difference; publish results", textPt: "Assumir diferença biológica; publicar resultados" },
      { id: "a2", text: "Investigate and correct for batch effects before interpretation", textPt: "Investigar e corrigir efeitos de lote antes da interpretação" },
      { id: "a3", text: "Average the values", textPt: "Fazer a média dos valores" },
    ],
    correctAnswerId: "a2",
    explanation:
      "Essential for rigorous science. Batch effects from technical differences can easily overwhelm biological signals. Proper quality control, batch correction (e.g., ComBat), and validation across batches are mandatory before drawing biological conclusions.",
    explanationPt:
      "Essencial para ciência rigorosa. Efeitos de lote de diferenças técnicas podem facilmente sobrepor sinais biológicos. Controlo de qualidade adequado, correção de lote (p.ex., ComBat) e validação entre lotes são obrigatórios antes de tirar conclusões biológicas.",
    difficulty: "hard",
    tags: ["transcriptomics", "batch_effects", "quality_control", "expert"],
  },
  {
    id: "exp_r1q7",
    round: 1,
    title: "RNA Detective: Rare Isoform Detection",
    titlePt: "Detetive de RNA: Detecção de Isoforma Rara",
    scenario:
      "A rare oncogenic fusion transcript (1% of total KRAS reads) is detected in Patient E-007. Standard bulk RNA-seq barely captures it. Should this be reported clinically?",
    scenarioPt:
      "Uma rara transcrição de fusão oncogénica (1% das leituras totais de KRAS) é detectada no Paciente E-007. O RNA-seq em massa padrão mal a captura. Isto deve ser reportado clinicamente?",
    dataSignals: [
      { label: "FUSION_TRANSCRIPT_PCT", value: 1, unit: "%", state: "low", category: "gene_expression" },
      { label: "DETECTION_CONFIDENCE", value: 65, unit: "%", state: "medium", category: "clinical" },
      { label: "CLINICAL_SIGNIFICANCE", value: 85, unit: "%", state: "high", category: "biomarker" },
    ],
    answerOptions: [
      { id: "a1", text: "Too rare; ignore it", textPt: "Demasiado raro; ignorar" },
      { id: "a2", text: "Validate with targeted methods; may be clinically actionable", textPt: "Validar com métodos direcionados; pode ser clinicamente acionável" },
      { id: "a3", text: "Definitely report without validation", textPt: "Definitivamente reportar sem validação" },
    ],
    correctAnswerId: "a2",
    explanation:
      "Sophisticated judgment. Even rare transcripts can be functionally important if they encode oncogenic fusions. However, bulk RNA-seq sensitivity is limited. Validation with targeted methods (qPCR, digital PCR, or long-read sequencing) is essential before clinical reporting.",
    explanationPt:
      "Julgamento sofisticado. Mesmo transcrições raras podem ser funcionalmente importantes se codificarem fusões oncogénicas. No entanto, a sensibilidade de RNA-seq em massa é limitada. Validação com métodos direcionados (qPCR, PCR digital ou sequenciação de leitura longa) é essencial antes de reportagem clínica.",
    difficulty: "hard",
    tags: ["transcriptomics", "fusion_detection", "validation", "expert"],
  },
  {
    id: "exp_r1q8",
    round: 1,
    title: "RNA Detective: Pseudotime Analysis",
    titlePt: "Detetive de RNA: Análise de Pseudotempo",
    scenario:
      "Single-cell RNA-seq reveals a developmental trajectory from normal cells → pre-malignant → malignant. Which genes change earliest in this trajectory?",
    scenarioPt:
      "RNA-seq de célula única revela uma trajetória de desenvolvimento de células normais → pré-malignas → malignas. Quais genes mudam mais cedo nesta trajetória?",
    dataSignals: [
      { label: "EARLY_CHANGE_GENES", value: 72, unit: "%", state: "high", category: "gene_expression" },
      { label: "LATE_CHANGE_GENES", value: 45, unit: "%", state: "medium", category: "gene_expression" },
      { label: "TRAJECTORY_CLARITY", value: 80, unit: "%", state: "high", category: "clinical" },
    ],
    answerOptions: [
      { id: "a1", text: "Genes changing earliest are best therapeutic targets", textPt: "Genes que mudam mais cedo são melhores alvos terapêuticos" },
      { id: "a2", text: "Early-change genes may identify pre-malignancy; useful for prevention", textPt: "Genes que mudam cedo podem identificar pré-malignidade; útil para prevenção" },
      { id: "a3", text: "Pseudotime is not biologically meaningful", textPt: "Pseudotempo não é biologicamente significativo" },
    ],
    correctAnswerId: "a2",
    explanation:
      "Excellent systems thinking. Early-change genes in developmental trajectories can identify critical transition points and potential intervention windows. This is powerful for understanding disease progression and designing preventive strategies.",
    explanationPt:
      "Excelente pensamento de sistemas. Genes que mudam cedo em trajetórias de desenvolvimento podem identificar pontos de transição críticos e janelas potenciais de intervenção. Isto é poderoso para compreender progressão da doença e desenhar estratégias preventivas.",
    difficulty: "hard",
    tags: ["transcriptomics", "single_cell", "pseudotime", "expert"],
  },

  // ===== ROUND 2: NUTRITION & CELL STRESS - EXPERT (8 questions) =====
  {
    id: "exp_r2q1",
    round: 2,
    title: "Nutrition & Stress: Metabolic Reprogramming",
    titlePt: "Nutrição & Stress: Reprogramação Metabólica",
    scenario:
      "Cancer cells show Warburg effect (high glycolysis despite oxygen). Which metabolic intervention might be most effective?",
    scenarioPt:
      "Células cancerígenas mostram efeito Warburg (alta glicólise apesar de oxigénio). Qual intervenção metabólica pode ser mais eficaz?",
    dataSignals: [
      { label: "GLYCOLYSIS_RATE", value: 88, unit: "%", state: "high", category: "metabolism" },
      { label: "OXIDATIVE_PHOSPH", value: 20, unit: "%", state: "low", category: "metabolism" },
      { label: "LACTATE_PRODUCTION", value: 85, unit: "%", state: "high", category: "metabolism" },
    ],
    answerOptions: [
      { id: "a1", text: "Block glycolysis; force oxidative metabolism", textPt: "Bloquear glicólise; forçar metabolismo oxidativo" },
      { id: "a2", text: "Understand context; may need multi-target approach", textPt: "Compreender contexto; pode precisar abordagem multi-alvo" },
      { id: "a3", text: "Increase glucose supply", textPt: "Aumentar fornecimento de glicose" },
    ],
    correctAnswerId: "a2",
    explanation:
      "Sophisticated reasoning. While Warburg effect targeting is promising, cancer cells are metabolically plastic. Effective strategies often require multi-target approaches (e.g., glycolysis + glutaminolysis inhibition) and consideration of tumor microenvironment.",
    explanationPt:
      "Raciocínio sofisticado. Embora o direcionamento do efeito Warburg seja promissor, as células cancerígenas são metabolicamente plásticas. Estratégias eficazes frequentemente requerem abordagens multi-alvo (p.ex., inibição de glicólise + glutaminólise) e consideração do microambiente tumoral.",
    difficulty: "hard",
    tags: ["metabolism", "cancer", "therapeutic_strategy", "expert"],
  },
  {
    id: "exp_r2q2",
    round: 2,
    title: "Nutrition & Stress: Nutrient Scarcity Response",
    titlePt: "Nutrição & Stress: Resposta à Escassez de Nutrientes",
    scenario:
      "Tumor shows high autophagy markers under nutrient-poor conditions. Is this beneficial or harmful for the cancer?",
    scenarioPt:
      "Tumor mostra marcadores elevados de autofagia em condições pobres em nutrientes. Isto é benéfico ou prejudicial para o cancro?",
    dataSignals: [
      { label: "AUTOPHAGY_MARKERS", value: 82, unit: "%", state: "high", category: "stress" },
      { label: "NUTRIENT_AVAILABILITY", value: 25, unit: "%", state: "low", category: "metabolism" },
      { label: "TUMOR_SURVIVAL", value: 70, unit: "%", state: "high", category: "biomarker" },
    ],
    answerOptions: [
      { id: "a1", text: "Harmful; autophagy kills cancer cells", textPt: "Prejudicial; autofagia mata células cancerígenas" },
      { id: "a2", text: "Context-dependent; can promote survival or death", textPt: "Dependente do contexto; pode promover sobrevivência ou morte" },
      { id: "a3", text: "Always beneficial for treatment", textPt: "Sempre benéfico para o tratamento" },
    ],
    correctAnswerId: "a2",
    explanation:
      "Critical nuance. Autophagy is a double-edged sword in cancer. It can suppress early tumorigenesis but promote survival under stress. The outcome depends on tumor type, genetic context, and timing. This complexity explains why autophagy inhibitors show mixed clinical results.",
    explanationPt:
      "Nuance crítica. A autofagia é uma faca de dois gumes no cancro. Pode suprimir a tumorigenese precoce mas promover sobrevivência sob stress. O resultado depende do tipo de tumor, contexto genético e timing. Esta complexidade explica por que os inibidores de autofagia mostram resultados clínicos mistos.",
    difficulty: "hard",
    tags: ["metabolism", "autophagy", "stress_response", "expert"],
  },
  {
    id: "exp_r2q3",
    round: 2,
    title: "Nutrition & Stress: Ketone Body Metabolism",
    titlePt: "Nutrição & Stress: Metabolismo de Corpos Cetónicos",
    scenario:
      "Patient on ketogenic diet shows altered tumor metabolism with increased ketone utilization. What is the therapeutic implication?",
    scenarioPt:
      "Paciente em dieta cetogénica mostra metabolismo tumoral alterado com utilização aumentada de corpos cetónicos. Qual é a implicação terapêutica?",
    dataSignals: [
      { label: "KETONE_UTILIZATION", value: 78, unit: "%", state: "high", category: "metabolism" },
      { label: "GLUCOSE_DEPENDENCE", value: 35, unit: "%", state: "low", category: "metabolism" },
      { label: "TUMOR_GROWTH_RATE", value: 55, unit: "%", state: "medium", category: "biomarker" },
    ],
    answerOptions: [
      { id: "a1", text: "Ketogenic diet cures cancer", textPt: "Dieta cetogénica cura o cancro" },
      { id: "a2", text: "Metabolic flexibility may limit diet efficacy; requires validation", textPt: "Flexibilidade metabólica pode limitar eficácia da dieta; requer validação" },
      { id: "a3", text: "No metabolic relevance", textPt: "Sem relevância metabólica" },
    ],
    correctAnswerId: "a2",
    explanation:
      "Nuanced understanding. While ketogenic diets show promise in preclinical models, cancer cells often display metabolic flexibility—adapting to use ketones when glucose is limited. This adaptation limits diet efficacy alone. Combination approaches (diet + targeted therapy) may be more effective.",
    explanationPt:
      "Compreensão nuançada. Embora as dietas cetogénicas mostrem promessa em modelos pré-clínicos, as células cancerígenas frequentemente mostram flexibilidade metabólica—adaptando-se para usar corpos cetónicos quando a glicose é limitada. Esta adaptação limita a eficácia da dieta sozinha. Abordagens combinadas (dieta + terapia direcionada) podem ser mais eficazes.",
    difficulty: "hard",
    tags: ["metabolism", "nutrition", "diet_therapy", "expert"],
  },
  {
    id: "exp_r2q4",
    round: 2,
    title: "Nutrition & Stress: Amino Acid Addiction",
    titlePt: "Nutrição & Stress: Adição a Aminoácidos",
    scenario:
      "Tumor shows extreme glutamine dependence (glutamine addiction). Which therapeutic strategy is most rational?",
    scenarioPt:
      "Tumor mostra dependência extrema de glutamina (adição a glutamina). Qual estratégia terapêutica é mais racional?",
    dataSignals: [
      { label: "GLUTAMINE_DEPENDENCE", value: 92, unit: "%", state: "high", category: "metabolism" },
      { label: "GLUTAMINASE_EXPR", value: 88, unit: "%", state: "high", category: "gene_expression" },
      { label: "ALTERNATIVE_AMINO_ACIDS", value: 15, unit: "%", state: "low", category: "metabolism" },
    ],
    answerOptions: [
      { id: "a1", text: "Glutaminase inhibition alone", textPt: "Inibição de glutaminase sozinha" },
      { id: "a2", text: "Consider metabolic plasticity; may need combination therapy", textPt: "Considerar plasticidade metabólica; pode precisar terapia combinada" },
      { id: "a3", text: "Increase glutamine supply", textPt: "Aumentar fornecimento de glutamina" },
    ],
    correctAnswerId: "a2",
    explanation:
      "Advanced strategic thinking. While glutaminase inhibitors are rationally designed, cancer cells often escape through metabolic reprogramming (e.g., upregulating alternative amino acid transporters). Combination approaches targeting multiple metabolic nodes are more likely to succeed.",
    explanationPt:
      "Pensamento estratégico avançado. Embora os inibidores de glutaminase sejam racionalmente desenhados, as células cancerígenas frequentemente escapam através de reprogramação metabólica (p.ex., upregulando transportadores alternativos de aminoácidos). Abordagens combinadas direcionando múltiplos nós metabólicos têm mais probabilidade de sucesso.",
    difficulty: "hard",
    tags: ["metabolism", "amino_acids", "therapeutic_resistance", "expert"],
  },
  {
    id: "exp_r2q5",
    round: 2,
    title: "Nutrition & Stress: Lipid Metabolism Shift",
    titlePt: "Nutrição & Stress: Mudança no Metabolismo de Lípidos",
    scenario:
      "Aggressive tumor shows switch from lipid uptake to de novo lipogenesis. What does this indicate about tumor biology?",
    scenarioPt:
      "Tumor agressivo mostra mudança de captação de lípidos para lipogénese de novo. O que isto indica sobre a biologia do tumor?",
    dataSignals: [
      { label: "LIPID_UPTAKE_GENES", value: 25, unit: "%", state: "low", category: "gene_expression" },
      { label: "LIPOGENESIS_GENES", value: 85, unit: "%", state: "high", category: "gene_expression" },
      { label: "TUMOR_AGGRESSIVENESS", value: 88, unit: "%", state: "high", category: "biomarker" },
    ],
    answerOptions: [
      { id: "a1", text: "Metabolic independence; poor prognosis", textPt: "Independência metabólica; prognóstico pobre" },
      { id: "a2", text: "Increased biosynthetic demand; may indicate rapid growth", textPt: "Demanda biossintética aumentada; pode indicar crescimento rápido" },
      { id: "a3", text: "No prognostic significance", textPt: "Sem significância prognóstica" },
    ],
    correctAnswerId: "a2",
    explanation:
      "Sophisticated interpretation. De novo lipogenesis is energetically expensive but enables rapid membrane synthesis for fast-growing tumors. This metabolic shift often correlates with aggressive phenotype and may identify tumors vulnerable to fatty acid synthase (FASN) inhibition.",
    explanationPt:
      "Interpretação sofisticada. A lipogénese de novo é energeticamente cara mas permite síntese rápida de membrana para tumores em crescimento rápido. Esta mudança metabólica frequentemente correlaciona com fenótipo agressivo e pode identificar tumores vulneráveis a inibição de sintase de ácido gordo (FASN).",
    difficulty: "hard",
    tags: ["metabolism", "lipids", "tumor_aggressiveness", "expert"],
  },
  {
    id: "exp_r2q6",
    round: 2,
    title: "Nutrition & Stress: Redox Stress Adaptation",
    titlePt: "Nutrição & Stress: Adaptação ao Stress Redox",
    scenario:
      "Tumor shows high ROS production but also elevated antioxidant defenses (high SOD, catalase, GSH). What is the adaptive strategy?",
    scenarioPt:
      "Tumor mostra produção elevada de ROS mas também defesas antioxidantes elevadas (SOD elevado, catalase, GSH). Qual é a estratégia adaptativa?",
    dataSignals: [
      { label: "ROS_PRODUCTION", value: 80, unit: "%", state: "high", category: "stress" },
      { label: "ANTIOXIDANT_DEFENSE", value: 82, unit: "%", state: "high", category: "stress" },
      { label: "REDOX_SIGNALING", value: 75, unit: "%", state: "high", category: "gene_expression" },
    ],
    answerOptions: [
      { id: "a1", text: "Tumor is in redox equilibrium; stable", textPt: "Tumor está em equilíbrio redox; estável" },
      { id: "a2", text: "Controlled ROS for signaling; vulnerability to ROS-targeting drugs", textPt: "ROS controlado para sinalização; vulnerabilidade a drogas direcionadas a ROS" },
      { id: "a3", text: "Antioxidants are always protective", textPt: "Antioxidantes são sempre protetores" },
    ],
    correctAnswerId: "a2",
    explanation:
      "Excellent redox biology insight. Modern understanding recognizes that moderate ROS levels drive oncogenic signaling. Tumors maintain elevated antioxidant defenses to keep ROS in a 'sweet spot' for growth. This creates vulnerability to ROS-inducing therapies or antioxidant inhibitors.",
    explanationPt:
      "Excelente perspetiva de biologia redox. A compreensão moderna reconhece que níveis moderados de ROS impulsionam sinalização oncogénica. Os tumores mantêm defesas antioxidantes elevadas para manter ROS num 'ponto ideal' para crescimento. Isto cria vulnerabilidade a terapias indutoras de ROS ou inibidores de antioxidantes.",
    difficulty: "hard",
    tags: ["metabolism", "redox_biology", "ROS", "expert"],
  },
  {
    id: "exp_r2q7",
    round: 2,
    title: "Nutrition & Stress: Amino Acid Starvation Response",
    titlePt: "Nutrição & Stress: Resposta à Privação de Aminoácidos",
    scenario:
      "Under amino acid starvation, tumor activates ATF4 pathway and upregulates amino acid transporters. Is this adaptive or maladaptive?",
    scenarioPt:
      "Sob privação de aminoácidos, tumor ativa via ATF4 e upregula transportadores de aminoácidos. Isto é adaptativo ou desadaptativo?",
    dataSignals: [
      { label: "ATF4_ACTIVATION", value: 85, unit: "%", state: "high", category: "gene_expression" },
      { label: "AA_TRANSPORTER_EXPR", value: 80, unit: "%", state: "high", category: "gene_expression" },
      { label: "TUMOR_SURVIVAL", value: 72, unit: "%", state: "high", category: "biomarker" },
    ],
    answerOptions: [
      { id: "a1", text: "Maladaptive; tumor will die", textPt: "Desadaptativo; tumor morrerá" },
      { id: "a2", text: "Adaptive survival mechanism; exploitable for therapy", textPt: "Mecanismo adaptativo de sobrevivência; explorável para terapia" },
      { id: "a3", text: "No functional consequence", textPt: "Sem consequência funcional" },
    ],
    correctAnswerId: "a2",
    explanation:
      "Sophisticated understanding of stress adaptation. ATF4-mediated amino acid transporter upregulation is an adaptive response enabling tumor survival under nutrient stress. This creates therapeutic opportunity: ATF4 inhibition or amino acid transporter blocking could sensitize tumors to starvation.",
    explanationPt:
      "Compreensão sofisticada de adaptação ao stress. A upregulação de transportadores de aminoácidos mediada por ATF4 é uma resposta adaptativa que permite sobrevivência tumoral sob stress nutricional. Isto cria oportunidade terapêutica: inibição de ATF4 ou bloqueio de transportadores de aminoácidos poderia sensibilizar tumores à privação.",
    difficulty: "hard",
    tags: ["metabolism", "stress_response", "amino_acids", "expert"],
  },
  {
    id: "exp_r2q8",
    round: 2,
    title: "Nutrition & Stress: Ferroptosis Resistance",
    titlePt: "Nutrição & Stress: Resistência à Ferroptose",
    scenario:
      "Tumor resistant to ferroptosis shows high GPX4 and low ACSL4 expression. Which therapeutic approach is most rational?",
    scenarioPt:
      "Tumor resistente à ferroptose mostra expressão elevada de GPX4 e baixa de ACSL4. Qual abordagem terapêutica é mais racional?",
    dataSignals: [
      { label: "GPX4_EXPRESSION", value: 88, unit: "%", state: "high", category: "gene_expression" },
      { label: "ACSL4_EXPRESSION", value: 18, unit: "%", state: "low", category: "gene_expression" },
      { label: "FERROPTOSIS_SENSITIVITY", value: 15, unit: "%", state: "low", category: "biomarker" },
    ],
    answerOptions: [
      { id: "a1", text: "GPX4 inhibition alone", textPt: "Inibição de GPX4 sozinha" },
      { id: "a2", text: "Restore ACSL4 + GPX4 inhibition for synthetic lethality", textPt: "Restaurar ACSL4 + inibição de GPX4 para letalidade sintética" },
      { id: "a3", text: "Ferroptosis is not viable", textPt: "Ferroptose não é viável" },
    ],
    correctAnswerId: "a2",
    explanation:
      "Advanced therapeutic reasoning. Ferroptosis requires both lipid peroxidation (ACSL4-dependent) and failed antioxidant defense (GPX4). Tumors resistant through high GPX4 + low ACSL4 require dual targeting: ACSL4 restoration + GPX4 inhibition for effective ferroptosis induction.",
    explanationPt:
      "Raciocínio terapêutico avançado. A ferroptose requer tanto peroxidação lipídica (dependente de ACSL4) como defesa antioxidante falhada (GPX4). Tumores resistentes através de GPX4 elevado + ACSL4 baixo requerem direcionamento duplo: restauração de ACSL4 + inibição de GPX4 para indução eficaz de ferroptose.",
    difficulty: "hard",
    tags: ["metabolism", "ferroptosis", "synthetic_lethality", "expert"],
  },

  // ===== ROUND 3: BIOMARKER MISSION - EXPERT (8 questions) =====
  {
    id: "exp_r3q1",
    round: 3,
    title: "Biomarker Mission: Liquid Biopsy Integration",
    titlePt: "Missão de Biomarcador: Integração de Biópsia Líquida",
    scenario:
      "Circulating tumor DNA (ctDNA) shows mutation X, but tissue biopsy does not. How should this discordance be interpreted?",
    scenarioPt:
      "DNA tumoral circulante (ctDNA) mostra mutação X, mas biópsia de tecido não. Como esta discordância deve ser interpretada?",
    dataSignals: [
      { label: "CTDNA_MUTATION_X", value: 85, unit: "%", state: "high", category: "biomarker" },
      { label: "TISSUE_MUTATION_X", value: 0, unit: "%", state: "low", category: "biomarker" },
      { label: "CLONAL_HETEROGENEITY", value: 78, unit: "%", state: "high", category: "clinical" },
    ],
    answerOptions: [
      { id: "a1", text: "ctDNA is artifact; ignore it", textPt: "ctDNA é artefato; ignorar" },
      { id: "a2", text: "Possible subclonal mutation; indicates tumor heterogeneity", textPt: "Possível mutação subclonal; indica heterogeneidade tumoral" },
      { id: "a3", text: "Tissue biopsy is always correct", textPt: "Biópsia de tecido é sempre correta" },
    ],
    correctAnswerId: "a2",
    explanation:
      "Sophisticated understanding of tumor heterogeneity. ctDNA can detect subclonal mutations absent from the sampled tissue biopsy. This discordance is informative: it reveals clonal diversity and may identify emerging resistance mutations before they dominate the tumor.",
    explanationPt:
      "Compreensão sofisticada de heterogeneidade tumoral. ctDNA pode detetar mutações subclonais ausentes da biópsia de tecido amostrada. Esta discordância é informativa: revela diversidade clonal e pode identificar mutações de resistência emergentes antes de dominarem o tumor.",
    difficulty: "hard",
    tags: ["biomarker", "liquid_biopsy", "clonal_heterogeneity", "expert"],
  },
  {
    id: "exp_r3q2",
    round: 3,
    title: "Biomarker Mission: Immunoscore Complexity",
    titlePt: "Missão de Biomarcador: Complexidade de Imunoscore",
    scenario:
      "Tumor has high CD8+ T-cell infiltration but low CD4+ helper T cells. What does this immune composition suggest?",
    scenarioPt:
      "Tumor tem infiltração elevada de células T CD8+ mas células T auxiliares CD4+ baixas. O que esta composição imunitária sugere?",
    dataSignals: [
      { label: "CD8_INFILTRATION", value: 82, unit: "%", state: "high", category: "immune" },
      { label: "CD4_INFILTRATION", value: 25, unit: "%", state: "low", category: "immune" },
      { label: "CHECKPOINT_MARKERS", value: 70, unit: "%", state: "high", category: "biomarker" },
    ],
    answerOptions: [
      { id: "a1", text: "Excellent immune response; good prognosis", textPt: "Excelente resposta imunitária; bom prognóstico" },
      { id: "a2", text: "Imbalanced immunity; may lack helper support; checkpoint inhibitors may help", textPt: "Imunidade desequilibrada; pode faltar apoio auxiliar; inibidores de checkpoint podem ajudar" },
      { id: "a3", text: "CD4 cells are irrelevant", textPt: "Células CD4 são irrelevantes" },
    ],
    correctAnswerId: "a2",
    explanation:
      "Nuanced immunology. CD8+ T cells are cytotoxic effectors, but CD4+ helper T cells are essential for sustained CD8+ response and memory formation. High CD8 without CD4 support may lead to T-cell exhaustion. This imbalance may respond to checkpoint inhibition or CD4+ T-cell therapy.",
    explanationPt:
      "Imunologia nuançada. Células T CD8+ são efetores citotóxicos, mas células T auxiliares CD4+ são essenciais para resposta CD8+ sustentada e formação de memória. CD8 elevado sem apoio CD4 pode levar a exaustão de células T. Este desequilíbrio pode responder a inibição de checkpoint ou terapia de células T CD4+.",
    difficulty: "hard",
    tags: ["biomarker", "immunology", "checkpoint_inhibitors", "expert"],
  },
  {
    id: "exp_r3q3",
    round: 3,
    title: "Biomarker Mission: Tumor Mutational Burden Context",
    titlePt: "Missão de Biomarcador: Contexto de Carga Mutacional Tumoral",
    scenario:
      "High TMB (tumor mutational burden) usually predicts immunotherapy response, but this patient's high-TMB tumor is immunotherapy-resistant. What might explain this?",
    scenarioPt:
      "TMB elevada (carga mutacional tumoral) geralmente prediz resposta a imunoterapia, mas o tumor de TMB elevada deste paciente é resistente a imunoterapia. O que pode explicar isto?",
    dataSignals: [
      { label: "TMB_LEVEL", value: 88, unit: "%", state: "high", category: "biomarker" },
      { label: "IMMUNOTHERAPY_RESPONSE", value: 20, unit: "%", state: "low", category: "biomarker" },
      { label: "IMMUNE_INFILTRATION", value: 30, unit: "%", state: "low", category: "immune" },
    ],
    answerOptions: [
      { id: "a1", text: "TMB is always predictive", textPt: "TMB é sempre preditivo" },
      { id: "a2", text: "TMB alone insufficient; immune infiltration and checkpoint status also critical", textPt: "TMB sozinho insuficiente; infiltração imunitária e status de checkpoint também críticos" },
      { id: "a3", text: "Measurement error", textPt: "Erro de medição" },
    ],
    correctAnswerId: "a2",
    explanation:
      "Critical biomarker insight. High TMB generates neoantigens, but immunotherapy requires immune infiltration and permissive checkpoint status. 'Cold' tumors with high TMB but low immune infiltration are immunotherapy-resistant. Multi-parameter assessment is essential.",
    explanationPt:
      "Perspetiva crítica de biomarcador. TMB elevada gera neoantigénios, mas imunoterapia requer infiltração imunitária e status de checkpoint permissivo. Tumores 'frios' com TMB elevada mas infiltração imunitária baixa são resistentes a imunoterapia. Avaliação multi-parâmetro é essencial.",
    difficulty: "hard",
    tags: ["biomarker", "TMB", "immunotherapy", "expert"],
  },
  {
    id: "exp_r3q4",
    round: 3,
    title: "Biomarker Mission: Proteomics Validation",
    titlePt: "Missão de Biomarcador: Validação de Proteómica",
    scenario:
      "RNA-seq identifies a promising prognostic marker, but protein levels do not correlate with mRNA. Should this marker be pursued clinically?",
    scenarioPt:
      "RNA-seq identifica um marcador prognóstico promissor, mas níveis de proteína não correlacionam com mRNA. Este marcador deve ser prosseguido clinicamente?",
    dataSignals: [
      { label: "MRNA_LEVEL", value: 85, unit: "%", state: "high", category: "gene_expression" },
      { label: "PROTEIN_LEVEL", value: 30, unit: "%", state: "low", category: "biomarker" },
      { label: "MRNA_PROTEIN_CORRELATION", value: 15, unit: "%", state: "low", category: "clinical" },
    ],
    answerOptions: [
      { id: "a1", text: "Pursue RNA-based marker; protein is irrelevant", textPt: "Prosseguir marcador baseado em RNA; proteína é irrelevante" },
      { id: "a2", text: "Investigate post-translational regulation; protein level may be more predictive", textPt: "Investigar regulação pós-translacional; nível de proteína pode ser mais preditivo" },
      { id: "a3", text: "Marker is unreliable", textPt: "Marcador é pouco confiável" },
    ],
    correctAnswerId: "a2",
    explanation:
      "Sophisticated biomarker development. mRNA-protein discordance reveals post-translational regulation (phosphorylation, ubiquitination, localization). Protein levels often better predict phenotype than mRNA. Clinical biomarkers should be validated at the protein level using immunoassays or mass spectrometry.",
    explanationPt:
      "Desenvolvimento sofisticado de biomarcador. Discordância mRNA-proteína revela regulação pós-translacional (fosforilação, ubiquitinação, localização). Níveis de proteína frequentemente predizem melhor fenótipo do que mRNA. Biomarcadores clínicos devem ser validados ao nível de proteína usando imunoensaios ou espectrometria de massa.",
    difficulty: "hard",
    tags: ["biomarker", "proteomics", "validation", "expert"],
  },
  {
    id: "exp_r3q5",
    round: 3,
    title: "Biomarker Mission: Spatial Transcriptomics",
    titlePt: "Missão de Biomarcador: Transcriptómica Espacial",
    scenario:
      "Spatial transcriptomics reveals marker X is highly expressed in tumor-immune interface but absent in tumor core. What is the biological significance?",
    scenarioPt:
      "Transcriptómica espacial revela que o marcador X é altamente expresso na interface tumor-imunitária mas ausente no núcleo tumoral. Qual é a significância biológica?",
    dataSignals: [
      { label: "MARKER_INTERFACE", value: 88, unit: "%", state: "high", category: "gene_expression" },
      { label: "MARKER_CORE", value: 8, unit: "%", state: "low", category: "gene_expression" },
      { label: "SPATIAL_HETEROGENEITY", value: 82, unit: "%", state: "high", category: "clinical" },
    ],
    answerOptions: [
      { id: "a1", text: "Marker is irrelevant", textPt: "Marcador é irrelevante" },
      { id: "a2", text: "Interface expression suggests immune-tumor crosstalk; may indicate immunotherapy sensitivity", textPt: "Expressão de interface sugere crosstalk imuno-tumoral; pode indicar sensibilidade a imunoterapia" },
      { id: "a3", text: "Measurement error", textPt: "Erro de medição" },
    ],
    correctAnswerId: "a2",
    explanation:
      "Advanced biomarker interpretation. Spatial organization is functionally important. Markers enriched at tumor-immune interfaces often reflect immune-tumor crosstalk and may predict immunotherapy response. This highlights why spatial transcriptomics is superior to bulk RNA-seq for understanding tumor microenvironment.",
    explanationPt:
      "Interpretação avançada de biomarcador. A organização espacial é funcionalmente importante. Marcadores enriquecidos em interfaces tumor-imunitárias frequentemente refletem crosstalk imuno-tumoral e podem prever resposta a imunoterapia. Isto destaca por que a transcriptómica espacial é superior a RNA-seq em massa para compreender microambiente tumoral.",
    difficulty: "hard",
    tags: ["biomarker", "spatial_transcriptomics", "tumor_microenvironment", "expert"],
  },
  {
    id: "exp_r3q6",
    round: 3,
    title: "Biomarker Mission: Longitudinal Biomarker Drift",
    titlePt: "Missão de Biomarcador: Desvio Longitudinal de Biomarcador",
    scenario:
      "Biomarker Y predicts treatment response at baseline but loses predictive power during treatment. What might cause this?",
    scenarioPt:
      "Biomarcador Y prediz resposta ao tratamento na baseline mas perde poder preditivo durante o tratamento. O que pode causar isto?",
    dataSignals: [
      { label: "BASELINE_PREDICTION", value: 82, unit: "%", state: "high", category: "biomarker" },
      { label: "MID_TREATMENT_PREDICTION", value: 45, unit: "%", state: "medium", category: "biomarker" },
      { label: "CLONAL_EVOLUTION", value: 75, unit: "%", state: "high", category: "clinical" },
    ],
    answerOptions: [
      { id: "a1", text: "Biomarker is unreliable", textPt: "Biomarcador é pouco confiável" },
      { id: "a2", text: "Clonal evolution and selection may alter biomarker landscape", textPt: "Evolução clonal e seleção podem alterar paisagem de biomarcador" },
      { id: "a3", text: "Measurement drift", textPt: "Desvio de medição" },
    ],
    correctAnswerId: "a2",
    explanation:
      "Sophisticated longitudinal biomarker understanding. Treatment selects for resistant clones with different biomarker profiles. Baseline biomarkers may not predict response of emerging resistant populations. Dynamic biomarker monitoring (ctDNA, circulating proteins) is essential for tracking clonal evolution.",
    explanationPt:
      "Compreensão sofisticada de biomarcador longitudinal. O tratamento seleciona clones resistentes com perfis de biomarcador diferentes. Biomarcadores baseline podem não prever resposta de populações resistentes emergentes. Monitorização dinâmica de biomarcador (ctDNA, proteínas circulantes) é essencial para rastrear evolução clonal.",
    difficulty: "hard",
    tags: ["biomarker", "longitudinal", "clonal_evolution", "expert"],
  },
  {
    id: "exp_r3q7",
    round: 3,
    title: "Biomarker Mission: Artificial Intelligence Integration",
    titlePt: "Missão de Biomarcador: Integração de Inteligência Artificial",
    scenario:
      "AI model trained on 1000 patients predicts treatment response with 95% accuracy on training data but only 60% on new patients. What is the likely problem?",
    scenarioPt:
      "Modelo de IA treinado em 1000 pacientes prediz resposta ao tratamento com 95% de precisão em dados de treino mas apenas 60% em novos pacientes. Qual é o provável problema?",
    dataSignals: [
      { label: "TRAINING_ACCURACY", value: 95, unit: "%", state: "high", category: "clinical" },
      { label: "VALIDATION_ACCURACY", value: 60, unit: "%", state: "medium", category: "clinical" },
      { label: "OVERFITTING_RISK", value: 88, unit: "%", state: "high", category: "clinical" },
    ],
    answerOptions: [
      { id: "a1", text: "AI is always accurate", textPt: "IA é sempre precisa" },
      { id: "a2", text: "Likely overfitting; requires external validation and regularization", textPt: "Provável overfitting; requer validação externa e regularização" },
      { id: "a3", text: "New patients are different", textPt: "Novos pacientes são diferentes" },
    ],
    correctAnswerId: "a2",
    explanation:
      "Critical AI literacy. Large performance gaps between training and validation sets indicate overfitting. The model learned training data noise rather than generalizable patterns. Rigorous external validation, cross-validation, and regularization are essential before clinical deployment.",
    explanationPt:
      "Alfabetização crítica em IA. Grandes lacunas de desempenho entre conjuntos de treino e validação indicam overfitting. O modelo aprendeu ruído de dados de treino em vez de padrões generalizáveis. Validação externa rigorosa, validação cruzada e regularização são essenciais antes do desdobramento clínico.",
    difficulty: "hard",
    tags: ["biomarker", "AI", "validation", "expert"],
  },
  {
    id: "exp_r3q8",
    round: 3,
    title: "Biomarker Mission: Multi-Omics Integration",
    titlePt: "Missão de Biomarcador: Integração Multi-Ómicas",
    scenario:
      "Genomics, transcriptomics, and proteomics show discordant results for the same patient. How should this be interpreted?",
    scenarioPt:
      "Genómica, transcriptómica e proteómica mostram resultados discordantes para o mesmo paciente. Como isto deve ser interpretado?",
    dataSignals: [
      { label: "GENOMICS_SIGNAL", value: 75, unit: "%", state: "high", category: "gene_expression" },
      { label: "TRANSCRIPTOMICS_SIGNAL", value: 45, unit: "%", state: "medium", category: "gene_expression" },
      { label: "PROTEOMICS_SIGNAL", value: 25, unit: "%", state: "low", category: "biomarker" },
    ],
    answerOptions: [
      { id: "a1", text: "Only genomics is reliable", textPt: "Apenas genómica é confiável" },
      { id: "a2", text: "Discordance reveals regulatory complexity; integration needed for full understanding", textPt: "Discordância revela complexidade regulatória; integração necessária para compreensão completa" },
      { id: "a3", text: "Data are unreliable", textPt: "Dados são pouco confiáveis" },
    ],
    correctAnswerId: "a2",
    explanation:
      "Sophisticated systems biology. Genomics, transcriptomics, and proteomics measure different regulatory layers. Discordance is expected and informative: it reveals post-transcriptional/translational regulation. True understanding requires integrated multi-omics analysis, not single-layer interpretation.",
    explanationPt:
      "Biologia de sistemas sofisticada. Genómica, transcriptómica e proteómica medem camadas regulatórias diferentes. Discordância é esperada e informativa: revela regulação pós-transcricional/translacional. Compreensão verdadeira requer análise multi-ómicas integrada, não interpretação de camada única.",
    difficulty: "hard",
    tags: ["biomarker", "multi_omics", "systems_biology", "expert"],
  },
];
