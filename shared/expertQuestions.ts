/**
 * BioData Detectives - Expert Difficulty Question Bank
 * 24 questions: Advanced transcriptomics, complex systems analysis, research methodology
 * Each question has per-answer explanations (3 explanations per question)
 * Bilingual content (EN/PT)
 */

import { Question } from "./questions";

export const expertQuestions: Question[] = [
  // ===== ROUND 1: ADVANCED RNA DETECTIVE (8 questions) =====
  {
    id: "exp_r1q1",
    round: 1,
    title: "Advanced Transcriptomics: Pathway Compensation",
    titlePt: "Transcriptómica Avançada: Compensação de Via",
    scenario:
      "BRCA1 is deleted, but cells show normal DNA repair capacity. What is the most likely explanation?",
    scenarioPt:
      "BRCA1 está deletado, mas células mostram capacidade normal de reparação de DNA. Qual é a explicação mais provável?",
    dataSignals: [
      { label: "BRCA1_EXPRESSION", value: 5, unit: "%", state: "low", category: "gene_expression" },
      { label: "DNA_REPAIR_CAPACITY", value: 78, unit: "%", state: "high", category: "gene_expression" },
      { label: "COMPENSATORY_GENES", value: 85, unit: "%", state: "high", category: "gene_expression" },
    ],
    answerOptions: [
      { id: "pathway_compensation", text: "Compensatory pathways are upregulated", textPt: "Vias compensatórias estão upreguladas" },
      { id: "brca1_not_essential", text: "BRCA1 is not essential for DNA repair", textPt: "BRCA1 não é essencial para reparação de DNA" },
      { id: "measurement_error", text: "The low BRCA1 measurement is an error", textPt: "A medição baixa de BRCA1 é um erro" },
    ],
    correctAnswerId: "pathway_compensation",
    explanation: "Cells can activate compensatory pathways when key genes are deleted, maintaining function through alternative routes.",
    explanationPt: "Células podem ativar vias compensatórias quando genes-chave são deletados, mantendo função através de rotas alternativas.",
    explanations: {
      pathway_compensation: {
        en: "Correct interpretation. BRCA1 deletion with maintained DNA repair capacity indicates compensatory pathway activation. Other DNA repair genes (RAD51, PALB2, etc.) are upregulated to compensate for BRCA1 loss.",
        pt: "Interpretação correta. Deleção de BRCA1 com capacidade de reparação de DNA mantida indica ativação de via compensatória. Outros genes de reparação de DNA (RAD51, PALB2, etc.) estão upregulados para compensar perda de BRCA1.",
      },
      brca1_not_essential: {
        en: "Incorrect conclusion. BRCA1 is essential in most contexts. The normal repair capacity indicates compensation, not that BRCA1 is dispensable. These cells may be vulnerable if compensatory pathways are disrupted.",
        pt: "Conclusão incorreta. BRCA1 é essencial na maioria dos contextos. A capacidade de reparação normal indica compensação, não que BRCA1 seja dispensável. Estas células podem ser vulneráveis se vias compensatórias forem perturbadas.",
      },
      measurement_error: {
        en: "Unlikely. BRCA1 measurement is robust. The pattern of low BRCA1 with high compensatory genes is biologically coherent, not random error.",
        pt: "Improvável. Medição de BRCA1 é robusta. O padrão de BRCA1 baixo com genes compensatórios altos é biologicamente coerente, não erro aleatório.",
      },
    },
    mode: "pattern_interpretation",
    difficulty: "hard",
    tags: ["transcriptomics", "pathway_compensation", "DNA_repair"],
  },
  {
    id: "exp_r1q2",
    round: 1,
    title: "Single-Cell Analysis: Cell State Heterogeneity",
    titlePt: "Análise de Célula Única: Heterogeneidade de Estado Celular",
    scenario:
      "Single-cell RNA-seq shows three distinct cell states in what was thought to be a homogeneous cell population. What does this indicate?",
    scenarioPt:
      "RNA-seq de célula única mostra três estados celulares distintos no que se pensava ser uma população celular homogénea. O que isto indica?",
    dataSignals: [
      { label: "CELL_STATE_1", value: 35, unit: "%", state: "medium", category: "gene_expression" },
      { label: "CELL_STATE_2", value: 38, unit: "%", state: "medium", category: "gene_expression" },
      { label: "CELL_STATE_3", value: 27, unit: "%", state: "medium", category: "gene_expression" },
    ],
    answerOptions: [
      { id: "functional_heterogeneity", text: "Functional heterogeneity within the population", textPt: "Heterogeneidade funcional dentro da população" },
      { id: "technical_artifact", text: "Technical artifact from batch effects", textPt: "Artefato técnico de efeitos de lote" },
      { id: "measurement_error", text: "Measurement error in the sequencing", textPt: "Erro de medição na sequenciação" },
    ],
    correctAnswerId: "functional_heterogeneity",
    explanation: "Single-cell analysis reveals cellular heterogeneity that bulk analysis masks. Multiple cell states indicate functional diversity.",
    explanationPt: "Análise de célula única revela heterogeneidade celular que análise em massa mascara. Múltiplos estados celulares indicam diversidade funcional.",
    explanations: {
      functional_heterogeneity: {
        en: "Correct interpretation. Single-cell RNA-seq is specifically designed to reveal cell-to-cell heterogeneity. Three distinct states indicate the population contains functionally diverse cells—not a homogeneous population.",
        pt: "Interpretação correta. RNA-seq de célula única é especificamente projetado para revelar heterogeneidade célula-a-célula. Três estados distintos indicam que a população contém células funcionalmente diversas—não uma população homogénea.",
      },
      technical_artifact: {
        en: "Unlikely. Batch effects typically show random variation, not three distinct, reproducible states. The clear clustering indicates biological signal.",
        pt: "Improvável. Efeitos de lote tipicamente mostram variação aleatória, não três estados distintos e reproduzíveis. O agrupamento claro indica sinal biológico.",
      },
      measurement_error: {
        en: "Unlikely. Three distinct, reproducible states are not consistent with random measurement error. This is a robust biological finding.",
        pt: "Improvável. Três estados distintos e reproduzíveis não são consistentes com erro de medição aleatório. Este é um achado biológico robusto.",
      },
    },
    mode: "pattern_interpretation",
    difficulty: "hard",
    tags: ["single_cell", "heterogeneity", "cell_states"],
  },
  {
    id: "exp_r1q3",
    round: 1,
    title: "Methodology: Pseudotime Validation",
    titlePt: "Metodologia: Validação de Pseudotempo",
    scenario:
      "A pseudotime trajectory is inferred from single-cell data. What is the critical next step before accepting it as a developmental process?",
    scenarioPt:
      "Uma trajetória de pseudotempo é inferida a partir de dados de célula única. Qual é o próximo passo crítico antes de aceitá-la como um processo de desenvolvimento?",
    dataSignals: [
      { label: "TRAJECTORY_CLARITY", value: 92, unit: "%", state: "high", category: "gene_expression" },
      { label: "BIOLOGICAL_VALIDATION", value: 0, unit: "%", state: "low", category: "biomarker" },
      { label: "TEMPORAL_CORRELATION", value: 0, unit: "%", state: "low", category: "biomarker" },
    ],
    answerOptions: [
      { id: "temporal_validation", text: "Validate with temporal/developmental data (e.g., embryonic time series)", textPt: "Validar com dados temporais/de desenvolvimento (ex. série de tempo embrionária)" },
      { id: "publish_trajectory", text: "Publish the trajectory as a developmental process", textPt: "Publicar a trajetória como um processo de desenvolvimento" },
      { id: "trajectory_sufficient", text: "The trajectory alone is sufficient proof", textPt: "A trajetória sozinha é prova suficiente" },
    ],
    correctAnswerId: "temporal_validation",
    explanation: "Pseudotime is inferred, not measured. Validation with actual temporal data is essential before claiming a developmental process.",
    explanationPt: "Pseudotempo é inferido, não medido. Validação com dados temporais reais é essencial antes de reivindicar um processo de desenvolvimento.",
    explanations: {
      temporal_validation: {
        en: "Correct methodology. Pseudotime is a computational inference, not direct measurement of time. Validation requires independent temporal data (embryonic stages, time-course experiments) to confirm the trajectory represents actual development.",
        pt: "Metodologia correta. Pseudotempo é uma inferência computacional, não medição direta de tempo. Validação requer dados temporais independentes (estágios embrionários, experimentos de série de tempo) para confirmar que a trajetória representa desenvolvimento real.",
      },
      publish_trajectory: {
        en: "Premature publication. Publishing pseudotime trajectories as developmental processes without temporal validation would be misleading. The trajectory is suggestive but not proof.",
        pt: "Publicação prematura. Publicar trajetórias de pseudotempo como processos de desenvolvimento sem validação temporal seria enganoso. A trajetória é sugestiva mas não prova.",
      },
      trajectory_sufficient: {
        en: "Incorrect methodology. Pseudotime is inferred from transcriptional similarity, not actual time. It's a useful hypothesis generator but requires validation with real temporal data.",
        pt: "Metodologia incorreta. Pseudotempo é inferido de similaridade transcricional, não tempo real. É um gerador de hipóteses útil mas requer validação com dados temporais reais.",
      },
    },
    mode: "methodological_judgement",
    difficulty: "hard",
    tags: ["methodology", "pseudotime", "validation"],
  },
  {
    id: "exp_r1q4",
    round: 1,
    title: "Advanced Transcriptomics: Immune Escape Mechanisms",
    titlePt: "Transcriptómica Avançada: Mecanismos de Escape Imunitário",
    scenario:
      "Tumor shows high PD-L1 expression but low T-cell infiltration. What is the likely mechanism?",
    scenarioPt:
      "Tumor mostra expressão elevada de PD-L1 mas baixa infiltração de células T. Qual é o mecanismo provável?",
    dataSignals: [
      { label: "PD_L1_EXPRESSION", value: 88, unit: "%", state: "high", category: "gene_expression" },
      { label: "T_CELL_INFILTRATION", value: 12, unit: "%", state: "low", category: "immune" },
      { label: "IMMUNOSUPPRESSIVE_SIGNALS", value: 82, unit: "%", state: "high", category: "immune" },
    ],
    answerOptions: [
      { id: "immune_exclusion", text: "Immune exclusion: T cells are prevented from entering the tumor", textPt: "Exclusão imunitária: células T são impedidas de entrar no tumor" },
      { id: "immune_ignorance", text: "Immune ignorance: tumor is hidden from immune system", textPt: "Ignorância imunitária: tumor está oculto do sistema imunitário" },
      { id: "pd_l1_ineffective", text: "PD-L1 expression is ineffective at suppressing immunity", textPt: "Expressão de PD-L1 é ineficaz em suprimir imunidade" },
    ],
    correctAnswerId: "immune_exclusion",
    explanation: "High PD-L1 with low T-cell infiltration suggests immune exclusion—the tumor prevents T-cell entry rather than suppressing infiltrating T cells.",
    explanationPt: "PD-L1 elevado com baixa infiltração de células T sugere exclusão imunitária—o tumor impede entrada de células T em vez de suprimir células T infiltrantes.",
    explanations: {
      immune_exclusion: {
        en: "Correct interpretation. High PD-L1 without T-cell infiltration indicates immune exclusion. The tumor is preventing T-cell entry through physical or chemical barriers, making PD-L1 irrelevant (no T cells to suppress).",
        pt: "Interpretação correta. PD-L1 elevado sem infiltração de células T indica exclusão imunitária. O tumor está impedindo entrada de células T através de barreiras físicas ou químicas, tornando PD-L1 irrelevante (sem células T para suprimir).",
      },
      immune_ignorance: {
        en: "Partially correct but imprecise. Immune ignorance would show low PD-L1 (tumor is hidden). High PD-L1 indicates the tumor is 'visible' to the immune system but is preventing T-cell entry.",
        pt: "Parcialmente correto mas impreciso. Ignorância imunitária mostraria PD-L1 baixo (tumor está oculto). PD-L1 elevado indica que o tumor é 'visível' para o sistema imunitário mas está impedindo entrada de células T.",
      },
      pd_l1_ineffective: {
        en: "Incorrect. PD-L1 is effective, but it's irrelevant when there are no T cells to suppress. The problem is immune exclusion, not PD-L1 ineffectiveness.",
        pt: "Incorreto. PD-L1 é eficaz, mas é irrelevante quando não há células T para suprimir. O problema é exclusão imunitária, não ineficácia de PD-L1.",
      },
    },
    mode: "pattern_interpretation",
    difficulty: "hard",
    tags: ["transcriptomics", "immune_escape", "tumor_biology"],
  },
  {
    id: "exp_r1q5",
    round: 1,
    title: "Methodology: Batch Effect Correction",
    titlePt: "Metodologia: Correção de Efeito de Lote",
    scenario:
      "After batch effect correction, the biological signal is reduced. What does this suggest?",
    scenarioPt:
      "Após correção de efeito de lote, o sinal biológico é reduzido. O que isto sugere?",
    dataSignals: [
      { label: "BATCH_EFFECT_SIZE", value: 75, unit: "%", state: "high", category: "biomarker" },
      { label: "BIOLOGICAL_SIGNAL_BEFORE", value: 85, unit: "%", state: "high", category: "biomarker" },
      { label: "BIOLOGICAL_SIGNAL_AFTER", value: 45, unit: "%", state: "low", category: "biomarker" },
    ],
    answerOptions: [
      { id: "overcorrection", text: "The correction algorithm is overcorrecting and removing biological signal", textPt: "O algoritmo de correção está a sobrecorrigir e remover sinal biológico" },
      { id: "signal_was_artifact", text: "The original signal was an artifact, not biological", textPt: "O sinal original era um artefato, não biológico" },
      { id: "correction_working", text: "The correction is working properly", textPt: "A correção está funcionando adequadamente" },
    ],
    correctAnswerId: "overcorrection",
    explanation: "Batch effect correction should remove technical variation while preserving biological signal. Reduced signal suggests overcorrection.",
    explanationPt: "Correção de efeito de lote deve remover variação técnica enquanto preserva sinal biológico. Sinal reduzido sugere sobrecorreção.",
    explanations: {
      overcorrection: {
        en: "Correct diagnosis. A large batch effect (75%) that, when corrected, reduces biological signal (85% → 45%) indicates overcorrection. The algorithm is removing real biology along with technical variation.",
        pt: "Diagnóstico correto. Um efeito de lote grande (75%) que, quando corrigido, reduz sinal biológico (85% → 45%) indica sobrecorreção. O algoritmo está removendo biologia real junto com variação técnica.",
      },
      signal_was_artifact: {
        en: "Unlikely. If the original signal were an artifact, it would correlate perfectly with batch. The fact that correction reduces it suggests it's partially biological.",
        pt: "Improvável. Se o sinal original fosse um artefato, correlacionaria perfeitamente com lote. O facto de que a correção o reduz sugere que é parcialmente biológico.",
      },
      correction_working: {
        en: "Incorrect assessment. Proper batch correction removes technical variation without substantially reducing biological signal. A 40-point drop in signal indicates a problem with the correction method.",
        pt: "Avaliação incorreta. Correção adequada de lote remove variação técnica sem reduzir substancialmente sinal biológico. Uma queda de 40 pontos em sinal indica um problema com o método de correção.",
      },
    },
    mode: "methodological_judgement",
    difficulty: "hard",
    tags: ["methodology", "batch_effect", "quality_control"],
  },
  {
    id: "exp_r1q6",
    round: 1,
    title: "Advanced Analysis: Stromal Composition Impact",
    titlePt: "Análise Avançada: Impacto da Composição Estromal",
    scenario:
      "Two tumors show identical gene expression profiles, but one has high stromal content and one has low. How should this be interpreted?",
    scenarioPt:
      "Dois tumores mostram perfis de expressão génica idênticos, mas um tem conteúdo estromal elevado e outro tem baixo. Como isto deve ser interpretado?",
    dataSignals: [
      { label: "GENE_EXPRESSION_SIMILARITY", value: 95, unit: "%", state: "high", category: "gene_expression" },
      { label: "STROMAL_CONTENT_A", value: 85, unit: "%", state: "high", category: "biomarker" },
      { label: "STROMAL_CONTENT_B", value: 15, unit: "%", state: "low", category: "biomarker" },
    ],
    answerOptions: [
      { id: "stromal_confounding", text: "Stromal composition is confounding the expression comparison", textPt: "Composição estromal está confundindo a comparação de expressão" },
      { id: "identical_tumors", text: "The tumors are biologically identical", textPt: "Os tumores são biologicamente idênticos" },
      { id: "expression_is_tumor", text: "The expression profiles reflect only tumor cells", textPt: "Os perfis de expressão refletem apenas células tumorais" },
    ],
    correctAnswerId: "stromal_confounding",
    explanation: "Identical bulk expression with different stromal content suggests the expression is influenced by stromal composition, not purely tumor biology.",
    explanationPt: "Expressão em massa idêntica com composição estromal diferente sugere que a expressão é influenciada por composição estromal, não puramente biologia tumoral.",
    explanations: {
      stromal_confounding: {
        en: "Correct interpretation. Identical expression profiles with different stromal content indicates the bulk expression is confounded by stromal contribution. The tumors may be biologically different, but the stromal content masks this.",
        pt: "Interpretação correta. Perfis de expressão idênticos com composição estromal diferente indica que a expressão em massa é confundida por contribuição estromal. Os tumores podem ser biologicamente diferentes, mas o conteúdo estromal mascara isto.",
      },
      identical_tumors: {
        en: "Incorrect conclusion. Different stromal content suggests different tumor microenvironments, which likely reflect different tumor biology. Identical bulk expression doesn't mean identical tumor cells.",
        pt: "Conclusão incorreta. Composição estromal diferente sugere microambientes tumorais diferentes, que provavelmente refletem biologia tumoral diferente. Expressão em massa idêntica não significa células tumorais idênticas.",
      },
      expression_is_tumor: {
        en: "Incorrect assumption. Bulk expression includes both tumor and stromal cells. High stromal content means stromal genes dominate the expression profile, not tumor genes.",
        pt: "Suposição incorreta. Expressão em massa inclui células tumorais e estromais. Conteúdo estromal elevado significa que genes estromais dominam o perfil de expressão, não genes tumorais.",
      },
    },
    mode: "methodological_judgement",
    difficulty: "hard",
    tags: ["transcriptomics", "stromal_composition", "bulk_analysis"],
  },
  {
    id: "exp_r1q7",
    round: 1,
    title: "Clinical Translation: Precision Oncology",
    titlePt: "Tradução Clínica: Oncologia de Precisão",
    scenario:
      "A patient's tumor has a rare mutation. Preclinical data shows a drug targets this mutation, but no clinical trials exist. What is the appropriate action?",
    scenarioPt:
      "O tumor de um paciente tem uma mutação rara. Dados pré-clínicos mostram que um fármaco visa esta mutação, mas nenhum ensaio clínico existe. Qual é a ação apropriada?",
    dataSignals: [
      { label: "MUTATION_IDENTIFIED", value: 98, unit: "%", state: "high", category: "biomarker" },
      { label: "PRECLINICAL_EFFICACY", value: 78, unit: "%", state: "high", category: "biomarker" },
      { label: "CLINICAL_DATA", value: 0, unit: "%", state: "low", category: "biomarker" },
    ],
    answerOptions: [
      { id: "compassionate_use", text: "Pursue compassionate use or expanded access program", textPt: "Prosseguir com uso compassivo ou programa de acesso expandido" },
      { id: "standard_care", text: "Use only standard chemotherapy", textPt: "Usar apenas quimioterapia padrão" },
      { id: "wait_trials", text: "Wait for clinical trials to complete", textPt: "Esperar que ensaios clínicos se completem" },
    ],
    correctAnswerId: "compassionate_use",
    explanation: "For rare mutations with strong preclinical evidence, compassionate use is ethically justified when standard options are limited.",
    explanationPt: "Para mutações raras com forte evidência pré-clínica, uso compassivo é eticamente justificado quando opções padrão são limitadas.",
    explanations: {
      compassionate_use: {
        en: "Correct clinical decision. Strong preclinical evidence for a rare mutation justifies compassionate use. Standard chemotherapy may be less effective than a targeted approach. Regulatory pathways exist for this scenario.",
        pt: "Decisão clínica correta. Forte evidência pré-clínica para uma mutação rara justifica uso compassivo. Quimioterapia padrão pode ser menos eficaz que uma abordagem direcionada. Caminhos regulatórios existem para este cenário.",
      },
      standard_care: {
        en: "Missed opportunity. Standard chemotherapy is likely suboptimal when a targeted option exists. Precision oncology specifically aims to move beyond one-size-fits-all treatment.",
        pt: "Oportunidade perdida. Quimioterapia padrão é provavelmente subótima quando uma opção direcionada existe. Oncologia de precisão especificamente visa ir além do tratamento único para todos.",
      },
      wait_trials: {
        en: "May not be ethical for rare disease. Clinical trials take years. Waiting could mean the patient has no treatment options. Compassionate use is sometimes justified.",
        pt: "Pode não ser ético para doença rara. Ensaios clínicos levam anos. Esperar pode significar que o paciente não tem opções de tratamento. Uso compassivo às vezes é justificado.",
      },
    },
    mode: "clinical_decision",
    difficulty: "hard",
    tags: ["precision_medicine", "clinical_translation", "rare_mutation"],
  },
  {
    id: "exp_r1q8",
    round: 1,
    title: "Advanced Pattern: Regulatory Network Analysis",
    titlePt: "Padrão Avançado: Análise de Rede Regulatória",
    scenario:
      "A transcription factor (TF) shows high expression, but its target genes show low expression. What does this indicate?",
    scenarioPt:
      "Um fator de transcrição (FT) mostra expressão elevada, mas seus genes alvo mostram expressão baixa. O que isto indica?",
    dataSignals: [
      { label: "TF_EXPRESSION", value: 88, unit: "%", state: "high", category: "gene_expression" },
      { label: "TARGET_GENE_EXPRESSION", value: 18, unit: "%", state: "low", category: "gene_expression" },
      { label: "TF_ACTIVITY", value: 15, unit: "%", state: "low", category: "gene_expression" },
    ],
    answerOptions: [
      { id: "inactive_tf", text: "The TF is present but transcriptionally inactive", textPt: "O FT está presente mas transcripcionalmente inativo" },
      { id: "target_genes_deleted", text: "The target genes are deleted or mutated", textPt: "Os genes alvo são deletados ou mutados" },
      { id: "measurement_error", text: "This is a measurement error", textPt: "Isto é um erro de medição" },
    ],
    correctAnswerId: "inactive_tf",
    explanation: "High TF expression without target gene activation indicates the TF is present but transcriptionally inactive.",
    explanationPt: "Expressão elevada de FT sem ativação de gene alvo indica que o FT está presente mas transcripcionalmente inativo.",
    explanations: {
      inactive_tf: {
        en: "Correct interpretation. TF activity depends on post-translational modifications, cofactor availability, and chromatin accessibility—not just expression level. High TF expression with low target gene expression indicates the TF is inactive.",
        pt: "Interpretação correta. Atividade de FT depende de modificações pós-traducionais, disponibilidade de cofator, e acessibilidade de cromatina—não apenas nível de expressão. Expressão elevada de FT com expressão baixa de gene alvo indica que o FT está inativo.",
      },
      target_genes_deleted: {
        en: "Possible but less likely. If target genes were deleted, you would expect no expression at all. Low expression suggests regulatory suppression, not deletion.",
        pt: "Possível mas menos provável. Se genes alvo fossem deletados, esperaria nenhuma expressão. Expressão baixa sugere supressão regulatória, não deleção.",
      },
      measurement_error: {
        en: "Unlikely. This pattern is biologically coherent and reflects the distinction between TF expression and TF activity—a well-established principle.",
        pt: "Improvável. Este padrão é biologicamente coerente e reflete a distinção entre expressão de FT e atividade de FT—um princípio bem estabelecido.",
      },
    },
    mode: "pattern_interpretation",
    difficulty: "hard",
    tags: ["transcriptomics", "regulatory_networks", "transcription_factors"],
  },

  // ===== ROUND 2: ADVANCED BIOMARKER DETECTIVE (8 questions) =====
  {
    id: "exp_r2q1",
    round: 2,
    title: "Methodology: Multiple Hypothesis Testing",
    titlePt: "Metodologia: Teste de Múltiplas Hipóteses",
    scenario:
      "A researcher tests 100 hypotheses and finds 5 significant results (p<0.05). How many are expected to be false positives?",
    scenarioPt:
      "Um investigador testa 100 hipóteses e encontra 5 resultados significativos (p<0,05). Quantos são esperados ser falsos positivos?",
    dataSignals: [
      { label: "HYPOTHESES_TESTED", value: 100, unit: "n", state: "high", category: "biomarker" },
      { label: "SIGNIFICANT_RESULTS", value: 5, unit: "n", state: "medium", category: "biomarker" },
      { label: "EXPECTED_FALSE_POSITIVES", value: 5, unit: "n", state: "medium", category: "biomarker" },
    ],
    answerOptions: [
      { id: "five_false_positives", text: "Approximately 5 are false positives by chance alone", textPt: "Aproximadamente 5 são falsos positivos apenas por acaso" },
      { id: "all_true_positives", text: "All 5 are likely true positives", textPt: "Todos os 5 são provavelmente verdadeiros positivos" },
      { id: "one_false_positive", text: "Only 1 is a false positive", textPt: "Apenas 1 é um falso positivo" },
    ],
    correctAnswerId: "five_false_positives",
    explanation: "With 100 tests and p<0.05, we expect 5 false positives by chance. Multiple testing correction is essential.",
    explanationPt: "Com 100 testes e p<0,05, esperamos 5 falsos positivos por acaso. Correção de testes múltiplos é essencial.",
    explanations: {
      five_false_positives: {
        en: "Correct calculation. By chance alone, 5% of 100 tests = 5 false positives. Without correction, you cannot distinguish true signals from noise.",
        pt: "Cálculo correto. Apenas por acaso, 5% de 100 testes = 5 falsos positivos. Sem correção, não pode distinguir sinais verdadeiros de ruído.",
      },
      all_true_positives: {
        en: "Incorrect. The expected false positive rate is exactly 5 by chance. Most of these 5 results are probably false positives, not true discoveries.",
        pt: "Incorreto. A taxa de falso positivo esperada é exatamente 5 por acaso. A maioria destes 5 resultados são provavelmente falsos positivos, não descobertas verdadeiras.",
      },
      one_false_positive: {
        en: "Incorrect calculation. The false positive rate is 5% × 100 tests = 5, not 1.",
        pt: "Cálculo incorreto. A taxa de falso positivo é 5% × 100 testes = 5, não 1.",
      },
    },
    mode: "methodological_judgement",
    difficulty: "hard",
    tags: ["statistics", "multiple_testing", "false_positive"],
  },
  {
    id: "exp_r2q2",
    round: 2,
    title: "Advanced Biomarker: Prognostic Validation",
    titlePt: "Biomarcador Avançado: Validação Prognóstica",
    scenario:
      "A prognostic biomarker predicts survival with 75% accuracy in the discovery cohort. In an independent validation cohort, accuracy drops to 55%. What is the likely explanation?",
    scenarioPt:
      "Um biomarcador prognóstico prediz sobrevivência com 75% de precisão na coorte de descoberta. Numa coorte de validação independente, a precisão cai para 55%. Qual é a explicação provável?",
    dataSignals: [
      { label: "DISCOVERY_ACCURACY", value: 75, unit: "%", state: "high", category: "biomarker" },
      { label: "VALIDATION_ACCURACY", value: 55, unit: "%", state: "medium", category: "biomarker" },
      { label: "ACCURACY_DROP", value: 20, unit: "%", state: "high", category: "biomarker" },
    ],
    answerOptions: [
      { id: "overfitting", text: "Overfitting in the discovery cohort", textPt: "Sobreajuste na coorte de descoberta" },
      { id: "validation_cohort_wrong", text: "The validation cohort is not representative", textPt: "A coorte de validação não é representativa" },
      { id: "biomarker_invalid", text: "The biomarker is invalid", textPt: "O biomarcador é inválido" },
    ],
    correctAnswerId: "overfitting",
    explanation: "A 20% accuracy drop from discovery to validation indicates overfitting in the discovery cohort.",
    explanationPt: "Uma queda de 20% em precisão de descoberta para validação indica sobreajuste na coorte de descoberta.",
    explanations: {
      overfitting: {
        en: "Correct diagnosis. A 20-point accuracy drop is classic overfitting. The discovery model learned noise specific to that cohort, not generalizable patterns. This is why independent validation is essential.",
        pt: "Diagnóstico correto. Uma queda de 20 pontos em precisão é sobreajuste clássico. O modelo de descoberta aprendeu ruído específico dessa coorte, não padrões generalizáveis. Por isto validação independente é essencial.",
      },
      validation_cohort_wrong: {
        en: "Unlikely. A 20-point drop is too large to be explained by cohort differences. Overfitting is the more parsimonious explanation.",
        pt: "Improvável. Uma queda de 20 pontos é demasiado grande para ser explicada por diferenças de coorte. Sobreajuste é a explicação mais parcimoniosa.",
      },
      biomarker_invalid: {
        en: "Partially true but imprecise. The biomarker isn't completely invalid (55% is above chance), but the discovery model is overfit. The biomarker may be valid with better modeling.",
        pt: "Parcialmente verdadeiro mas impreciso. O biomarcador não é completamente inválido (55% está acima do acaso), mas o modelo de descoberta está sobreajustado. O biomarcador pode ser válido com melhor modelagem.",
      },
    },
    mode: "methodological_judgement",
    difficulty: "hard",
    tags: ["methodology", "overfitting", "validation"],
  },
  {
    id: "exp_r2q3",
    round: 2,
    title: "Clinical Translation: Biomarker Cutoff Selection",
    titlePt: "Tradução Clínica: Seleção de Ponto de Corte de Biomarcador",
    scenario:
      "A continuous biomarker shows ROC AUC of 0.85. How should the clinical cutoff be selected?",
    scenarioPt:
      "Um biomarcador contínuo mostra ROC AUC de 0,85. Como o ponto de corte clínico deve ser selecionado?",
    dataSignals: [
      { label: "ROC_AUC", value: 85, unit: "%", state: "high", category: "biomarker" },
      { label: "SENSITIVITY_SPECIFICITY_TRADEOFF", value: 50, unit: "%", state: "medium", category: "biomarker" },
      { label: "CLINICAL_CONTEXT", value: 0, unit: "%", state: "low", category: "biomarker" },
    ],
    answerOptions: [
      { id: "clinical_context", text: "Based on clinical context (cost of false positives vs. false negatives)", textPt: "Com base em contexto clínico (custo de falsos positivos vs. falsos negativos)" },
      { id: "max_sensitivity", text: "Maximize sensitivity to catch all cases", textPt: "Maximizar sensibilidade para pegar todos os casos" },
      { id: "max_specificity", text: "Maximize specificity to avoid false alarms", textPt: "Maximizar especificidade para evitar alarmes falsos" },
    ],
    correctAnswerId: "clinical_context",
    explanation: "Biomarker cutoff selection depends on clinical context and the relative costs of false positives vs. false negatives.",
    explanationPt: "Seleção de ponto de corte de biomarcador depende de contexto clínico e custos relativos de falsos positivos vs. falsos negativos.",
    explanations: {
      clinical_context: {
        en: "Correct approach. The optimal cutoff depends on clinical consequences. For screening, sensitivity matters more (catch all cases). For confirmation, specificity matters more (avoid false alarms). Context determines the choice.",
        pt: "Abordagem correta. O ponto de corte ótimo depende de consequências clínicas. Para rastreio, sensibilidade importa mais (pegar todos os casos). Para confirmação, especificidade importa mais (evitar alarmes falsos). Contexto determina a escolha.",
      },
      max_sensitivity: {
        en: "Context-dependent. Maximizing sensitivity is appropriate for screening (catch all cases) but inappropriate for confirmation (too many false alarms). Clinical context must guide the choice.",
        pt: "Dependente de contexto. Maximizar sensibilidade é apropriado para rastreio (pegar todos os casos) mas inapropriado para confirmação (demasiados alarmes falsos). Contexto clínico deve guiar a escolha.",
      },
      max_specificity: {
        en: "Context-dependent. Maximizing specificity is appropriate for confirmation but inappropriate for screening (miss too many cases). Clinical context must guide the choice.",
        pt: "Dependente de contexto. Maximizar especificidade é apropriado para confirmação mas inapropriado para rastreio (perder demasiados casos). Contexto clínico deve guiar a escolha.",
      },
    },
    mode: "clinical_decision",
    difficulty: "hard",
    tags: ["clinical_translation", "biomarker", "ROC_analysis"],
  },
  {
    id: "exp_r2q4",
    round: 2,
    title: "Advanced Pattern: Co-expression Network Analysis",
    titlePt: "Padrão Avançado: Análise de Rede de Co-expressão",
    scenario:
      "A gene co-expression network identifies a module of 50 genes that are highly correlated. What does this suggest?",
    scenarioPt:
      "Uma rede de co-expressão génica identifica um módulo de 50 genes que são altamente correlacionados. O que isto sugere?",
    dataSignals: [
      { label: "MODULE_SIZE", value: 50, unit: "genes", state: "high", category: "gene_expression" },
      { label: "CORRELATION_STRENGTH", value: 92, unit: "%", state: "high", category: "gene_expression" },
      { label: "FUNCTIONAL_ENRICHMENT", value: 88, unit: "%", state: "high", category: "gene_expression" },
    ],
    answerOptions: [
      { id: "shared_regulation", text: "Genes share common regulatory mechanisms", textPt: "Genes compartilham mecanismos regulatórios comuns" },
      { id: "measurement_artifact", text: "This is a measurement artifact", textPt: "Isto é um artefato de medição" },
      { id: "random_correlation", text: "Random correlation by chance", textPt: "Correlação aleatória por acaso" },
    ],
    correctAnswerId: "shared_regulation",
    explanation: "Highly correlated gene modules with functional enrichment indicate shared regulatory mechanisms.",
    explanationPt: "Módulos de genes altamente correlacionados com enriquecimento funcional indicam mecanismos regulatórios compartilhados.",
    explanations: {
      shared_regulation: {
        en: "Correct interpretation. A module of 50 genes with high correlation and functional enrichment indicates they are co-regulated. They likely share transcription factors or other regulatory elements.",
        pt: "Interpretação correta. Um módulo de 50 genes com correlação elevada e enriquecimento funcional indica que são co-regulados. Provavelmente compartilham fatores de transcrição ou outros elementos regulatórios.",
      },
      measurement_artifact: {
        en: "Unlikely. Functional enrichment indicates this is biological, not technical. Artifacts don't show functional coherence.",
        pt: "Improvável. Enriquecimento funcional indica que isto é biológico, não técnico. Artefatos não mostram coerência funcional.",
      },
      random_correlation: {
        en: "Statistically improbable. The probability of 50 genes randomly correlating with 92% strength is vanishingly small. This is a robust biological signal.",
        pt: "Estatisticamente improvável. A probabilidade de 50 genes correlacionarem aleatoriamente com 92% de força é desvanecidamente pequena. Este é um sinal biológico robusto.",
      },
    },
    mode: "pattern_interpretation",
    difficulty: "hard",
    tags: ["transcriptomics", "co_expression", "network_analysis"],
  },
  {
    id: "exp_r2q5",
    round: 2,
    title: "Methodology: Longitudinal Study Design",
    titlePt: "Metodologia: Design de Estudo Longitudinal",
    scenario:
      "A longitudinal study follows 1,000 patients for 10 years. 30% drop out. How should this be handled?",
    scenarioPt:
      "Um estudo longitudinal acompanha 1.000 pacientes por 10 anos. 30% desistem. Como isto deve ser tratado?",
    dataSignals: [
      { label: "INITIAL_COHORT", value: 1000, unit: "n", state: "high", category: "biomarker" },
      { label: "DROPOUT_RATE", value: 30, unit: "%", state: "high", category: "biomarker" },
      { label: "REMAINING_COHORT", value: 700, unit: "n", state: "medium", category: "biomarker" },
    ],
    answerOptions: [
      { id: "analyze_dropouts", text: "Analyze whether dropouts differ systematically from completers", textPt: "Analisar se desistências diferem sistematicamente de completadores" },
      { id: "exclude_dropouts", text: "Simply exclude dropouts from analysis", textPt: "Simplesmente excluir desistências da análise" },
      { id: "dropouts_random", text: "Assume dropouts are random and ignore them", textPt: "Assumir que desistências são aleatórias e ignorá-las" },
    ],
    correctAnswerId: "analyze_dropouts",
    explanation: "Dropout bias can distort results. Systematic analysis of dropouts is essential to assess potential bias.",
    explanationPt: "Viés de desistência pode distorcer resultados. Análise sistemática de desistências é essencial para avaliar viés potencial.",
    explanations: {
      analyze_dropouts: {
        en: "Correct methodology. 30% dropout is substantial. You must analyze whether dropouts differ from completers (age, disease severity, treatment response). If they differ systematically, results are biased.",
        pt: "Metodologia correta. 30% de desistência é substancial. Deve analisar se desistências diferem de completadores (idade, gravidade da doença, resposta ao tratamento). Se diferem sistematicamente, resultados são enviesados.",
      },
      exclude_dropouts: {
        en: "Incomplete approach. Simply excluding dropouts ignores potential bias. You must understand why they dropped out before deciding how to handle them.",
        pt: "Abordagem incompleta. Simplesmente excluir desistências ignora viés potencial. Deve compreender por que desistiram antes de decidir como tratá-las.",
      },
      dropouts_random: {
        en: "Risky assumption. Dropouts are rarely random. Patients may drop out due to adverse effects, lack of efficacy, or other factors correlated with outcomes. This must be investigated.",
        pt: "Suposição arriscada. Desistências raramente são aleatórias. Pacientes podem desistir devido a efeitos adversos, falta de eficácia, ou outros fatores correlacionados com resultados. Isto deve ser investigado.",
      },
    },
    mode: "methodological_judgement",
    difficulty: "hard",
    tags: ["methodology", "longitudinal_study", "dropout_bias"],
  },
  {
    id: "exp_r2q6",
    round: 2,
    title: "Clinical Translation: Precision Diagnostics",
    titlePt: "Tradução Clínica: Diagnósticos de Precisão",
    scenario:
      "A multi-gene panel identifies 15 genetic variants in a patient. Most are variants of uncertain significance (VUS). What should the clinical report include?",
    scenarioPt:
      "Um painel de múltiplos genes identifica 15 variantes genéticas num paciente. A maioria são variantes de significado incerto (VUS). O que o relatório clínico deve incluir?",
    dataSignals: [
      { label: "VARIANTS_IDENTIFIED", value: 15, unit: "n", state: "high", category: "biomarker" },
      { label: "PATHOGENIC_VARIANTS", value: 2, unit: "n", state: "low", category: "biomarker" },
      { label: "VUS_VARIANTS", value: 13, unit: "n", state: "high", category: "biomarker" },
    ],
    answerOptions: [
      { id: "clear_interpretation", text: "Distinguish pathogenic variants from VUS; counsel on uncertainty", textPt: "Distinguir variantes patogénicas de VUS; aconselhar sobre incerteza" },
      { id: "report_all_equally", text: "Report all variants as equally important", textPt: "Relatar todas as variantes como igualmente importantes" },
      { id: "ignore_vus", text: "Ignore VUS and report only pathogenic variants", textPt: "Ignorar VUS e relatar apenas variantes patogénicas" },
    ],
    correctAnswerId: "clear_interpretation",
    explanation: "Clinical reports must distinguish pathogenic variants from VUS and communicate uncertainty appropriately.",
    explanationPt: "Relatórios clínicos devem distinguir variantes patogénicas de VUS e comunicar incerteza apropriadamente.",
    explanations: {
      clear_interpretation: {
        en: "Correct clinical communication. The report must clearly distinguish the 2 pathogenic variants (actionable) from the 13 VUS (uncertain significance). Patients must understand what is known and what is uncertain.",
        pt: "Comunicação clínica correta. O relatório deve distinguir claramente as 2 variantes patogénicas (acionáveis) das 13 VUS (significado incerto). Pacientes devem compreender o que é conhecido e o que é incerto.",
      },
      report_all_equally: {
        en: "Misleading communication. Reporting all variants equally would confuse patients and clinicians. Clear distinction between pathogenic and uncertain variants is essential.",
        pt: "Comunicação enganosa. Relatar todas as variantes igualmente confundiria pacientes e clínicos. Distinção clara entre variantes patogénicas e incertas é essencial.",
      },
      ignore_vus: {
        en: "Incomplete reporting. While VUS don't require immediate action, they should be reported and explained. Ignoring them withholds information from patients.",
        pt: "Relatório incompleto. Embora VUS não requeiram ação imediata, devem ser relatadas e explicadas. Ignorá-las retém informação de pacientes.",
      },
    },
    mode: "clinical_decision",
    difficulty: "hard",
    tags: ["precision_medicine", "genetic_testing", "clinical_reporting"],
  },
  {
    id: "exp_r2q7",
    round: 2,
    title: "Advanced Pattern: Temporal Dynamics",
    titlePt: "Padrão Avançado: Dinâmica Temporal",
    scenario:
      "Gene expression changes over time in a time-course experiment. Early genes show transient peaks, late genes show sustained elevation. What does this suggest?",
    scenarioPt:
      "Expressão génica muda ao longo do tempo num experimento de série de tempo. Genes precoces mostram picos transitórios, genes tardios mostram elevação sustentada. O que isto sugere?",
    dataSignals: [
      { label: "EARLY_GENE_PEAK", value: 88, unit: "%", state: "high", category: "gene_expression" },
      { label: "EARLY_GENE_DURATION", value: 2, unit: "hours", state: "low", category: "gene_expression" },
      { label: "LATE_GENE_DURATION", value: 24, unit: "hours", state: "high", category: "gene_expression" },
    ],
    answerOptions: [
      { id: "cascade_response", text: "A regulatory cascade: early genes activate late genes", textPt: "Uma cascata regulatória: genes precoces ativam genes tardios" },
      { id: "independent_response", text: "Independent responses to the same stimulus", textPt: "Respostas independentes ao mesmo estímulo" },
      { id: "measurement_error", text: "Measurement error in late gene measurement", textPt: "Erro de medição na medição de gene tardio" },
    ],
    correctAnswerId: "cascade_response",
    explanation: "Transient early gene peaks followed by sustained late gene elevation suggests a regulatory cascade.",
    explanationPt: "Picos transitórios de genes precoces seguidos de elevação sustentada de genes tardios sugere uma cascata regulatória.",
    explanations: {
      cascade_response: {
        en: "Correct interpretation. This temporal pattern is classic for regulatory cascades: early genes (transcription factors) are activated transiently, then activate late genes (effector genes) which sustain their expression.",
        pt: "Interpretação correta. Este padrão temporal é clássico para cascatas regulatórias: genes precoces (fatores de transcrição) são ativados transitoriamente, depois ativam genes tardios (genes efetores) que sustentam sua expressão.",
      },
      independent_response: {
        en: "Unlikely. The temporal relationship (early peaks before late elevation) suggests causality, not independent responses. This indicates a regulatory hierarchy.",
        pt: "Improvável. A relação temporal (picos precoces antes de elevação tardia) sugere causalidade, não respostas independentes. Isto indica uma hierarquia regulatória.",
      },
      measurement_error: {
        en: "Unlikely. The sustained elevation of late genes is a robust, reproducible pattern in time-course experiments, not random error.",
        pt: "Improvável. A elevação sustentada de genes tardios é um padrão robusto e reproduzível em experimentos de série de tempo, não erro aleatório.",
      },
    },
    mode: "pattern_interpretation",
    difficulty: "hard",
    tags: ["transcriptomics", "time_course", "regulatory_cascade"],
  },
  {
    id: "exp_r2q8",
    round: 2,
    title: "Methodology: Ethical Oversight in Genomics",
    titlePt: "Metodologia: Supervisão Ética em Genómica",
    scenario:
      "A genomic study discovers incidental findings (e.g., unexpected paternity, disease predisposition). Should these be reported to participants?",
    scenarioPt:
      "Um estudo genómico descobre achados incidentais (ex. paternidade inesperada, predisposição a doença). Devem estes ser relatados aos participantes?",
    dataSignals: [
      { label: "INCIDENTAL_FINDINGS", value: 95, unit: "%", state: "high", category: "biomarker" },
      { label: "CLINICAL_ACTIONABILITY", value: 65, unit: "%", state: "high", category: "biomarker" },
      { label: "INFORMED_CONSENT_COVERAGE", value: 30, unit: "%", state: "low", category: "biomarker" },
    ],
    answerOptions: [
      { id: "report_actionable", text: "Report clinically actionable findings; counsel on uncertainty", textPt: "Relatar achados clinicamente acionáveis; aconselhar sobre incerteza" },
      { id: "report_all", text: "Report all incidental findings", textPt: "Relatar todos os achados incidentais" },
      { id: "report_none", text: "Do not report any incidental findings", textPt: "Não relatar nenhum achado incidental" },
    ],
    correctAnswerId: "report_actionable",
    explanation: "Clinically actionable incidental findings should be reported with appropriate counseling and informed consent.",
    explanationPt: "Achados incidentais clinicamente acionáveis devem ser relatados com aconselhamento apropriado e consentimento informado.",
    explanations: {
      report_actionable: {
        en: "Correct ethical approach. Clinically actionable findings (e.g., BRCA1 mutations, Lynch syndrome) should be reported because patients can take action. Non-actionable findings require careful consideration of harm vs. benefit.",
        pt: "Abordagem ética correta. Achados clinicamente acionáveis (ex. mutações BRCA1, síndrome de Lynch) devem ser relatados porque pacientes podem tomar ação. Achados não acionáveis requerem consideração cuidadosa de dano vs. benefício.",
      },
      report_all: {
        en: "Ethically problematic. Reporting all incidental findings, including non-actionable ones, can cause psychological harm without clinical benefit. Selective reporting is more ethical.",
        pt: "Eticamente problemático. Relatar todos os achados incidentais, incluindo não acionáveis, pode causar dano psicológico sem benefício clínico. Relatório seletivo é mais ético.",
      },
      report_none: {
        en: "Ethically problematic. Withholding clinically actionable findings denies patients information they could use to protect their health. This violates autonomy.",
        pt: "Eticamente problemático. Reter achados clinicamente acionáveis nega aos pacientes informação que poderiam usar para proteger sua saúde. Isto viola autonomia.",
      },
    },
    mode: "methodological_judgement",
    difficulty: "hard",
    tags: ["ethics", "genomics", "incidental_findings"],
  },

  // ===== ROUND 3: EXPERT SYSTEMS ANALYSIS (8 questions) =====
  {
    id: "exp_r3q1",
    round: 3,
    title: "Advanced Systems: Multi-Omics Integration",
    titlePt: "Sistemas Avançados: Integração Multi-Ómicas",
    scenario:
      "Genomics, transcriptomics, and proteomics data show discordant results for the same genes. How should this be interpreted?",
    scenarioPt:
      "Dados de genómica, transcriptómica e proteómica mostram resultados discordantes para os mesmos genes. Como isto deve ser interpretado?",
    dataSignals: [
      { label: "GENOMIC_SIGNAL", value: 75, unit: "%", state: "high", category: "gene_expression" },
      { label: "TRANSCRIPTOMIC_SIGNAL", value: 42, unit: "%", state: "medium", category: "gene_expression" },
      { label: "PROTEOMIC_SIGNAL", value: 18, unit: "%", state: "low", category: "gene_expression" },
    ],
    answerOptions: [
      { id: "post_transcriptional", text: "Post-transcriptional regulation (protein degradation, translation control)", textPt: "Regulação pós-transcricional (degradação de proteína, controlo de tradução)" },
      { id: "measurement_error", text: "Measurement error in one or more platforms", textPt: "Erro de medição numa ou mais plataformas" },
      { id: "biological_noise", text: "Biological noise and random variation", textPt: "Ruído biológico e variação aleatória" },
    ],
    correctAnswerId: "post_transcriptional",
    explanation: "Discordance between transcriptomics and proteomics indicates post-transcriptional regulation.",
    explanationPt: "Discordância entre transcriptómica e proteómica indica regulação pós-transcricional.",
    explanations: {
      post_transcriptional: {
        en: "Correct interpretation. The pattern (high genomic/transcriptomic, low proteomic) indicates post-transcriptional regulation. Proteins are degraded, translation is suppressed, or proteins are sequestered—despite high mRNA levels.",
        pt: "Interpretação correta. O padrão (genómico/transcriptómico elevado, proteómico baixo) indica regulação pós-transcricional. Proteínas são degradadas, tradução é suprimida, ou proteínas são sequestradas—apesar de níveis elevados de mRNA.",
      },
      measurement_error: {
        en: "Possible but less likely. The systematic pattern (genomic > transcriptomic > proteomic) is too coherent to be random error. This indicates biological regulation.",
        pt: "Possível mas menos provável. O padrão sistemático (genómico > transcriptómico > proteómico) é demasiado coerente para ser erro aleatório. Isto indica regulação biológica.",
      },
      biological_noise: {
        en: "Unlikely. The systematic gradient across three platforms suggests biological regulation, not random noise.",
        pt: "Improvável. O gradiente sistemático em três plataformas sugere regulação biológica, não ruído aleatório.",
      },
    },
    mode: "pattern_interpretation",
    difficulty: "hard",
    tags: ["multi_omics", "post_transcriptional", "systems_biology"],
  },
  {
    id: "exp_r3q2",
    round: 3,
    title: "Methodology: Causal Inference in Observational Data",
    titlePt: "Metodologia: Inferência Causal em Dados Observacionais",
    scenario:
      "An observational study shows patients on drug A have better outcomes than drug B. Can you conclude drug A is superior?",
    scenarioPt:
      "Um estudo observacional mostra que pacientes no fármaco A têm melhores resultados que fármaco B. Pode concluir que fármaco A é superior?",
    dataSignals: [
      { label: "OUTCOME_DIFFERENCE", value: 35, unit: "%", state: "high", category: "biomarker" },
      { label: "RANDOMIZATION", value: 0, unit: "%", state: "low", category: "biomarker" },
      { label: "CONFOUNDING_CONTROL", value: 25, unit: "%", state: "low", category: "biomarker" },
    ],
    answerOptions: [
      { id: "cannot_conclude_causality", text: "No; confounding makes causal inference impossible without randomization", textPt: "Não; confusão torna inferência causal impossível sem aleatorização" },
      { id: "drug_a_superior", text: "Yes; the outcome difference proves drug A is superior", textPt: "Sim; a diferença de resultado prova que fármaco A é superior" },
      { id: "propensity_score_sufficient", text: "Propensity score matching is sufficient to establish causality", textPt: "Correspondência de pontuação de propensão é suficiente para estabelecer causalidade" },
    ],
    correctAnswerId: "cannot_conclude_causality",
    explanation: "Observational data cannot establish causality. Unmeasured confounding is always possible.",
    explanationPt: "Dados observacionais não podem estabelecer causalidade. Confusão não medida é sempre possível.",
    explanations: {
      cannot_conclude_causality: {
        en: "Correct conclusion. Observational studies cannot establish causality. Patients on drug A may differ from drug B patients in unmeasured ways (severity, comorbidities, lifestyle) that explain the outcome difference.",
        pt: "Conclusão correta. Estudos observacionais não podem estabelecer causalidade. Pacientes no fármaco A podem diferir de pacientes do fármaco B de formas não medidas (gravidade, comorbilidades, estilo de vida) que explicam a diferença de resultado.",
      },
      drug_a_superior: {
        en: "Incorrect causal inference. Observational data cannot prove causality. Randomized trials are needed to establish drug superiority.",
        pt: "Inferência causal incorreta. Dados observacionais não podem provar causalidade. Ensaios aleatorizados são necessários para estabelecer superioridade do fármaco.",
      },
      propensity_score_sufficient: {
        en: "Incomplete. Propensity score matching controls for measured confounding but cannot control for unmeasured confounding. Randomization is the gold standard.",
        pt: "Incompleto. Correspondência de pontuação de propensão controla confusão medida mas não pode controlar confusão não medida. Aleatorização é o padrão ouro.",
      },
    },
    mode: "methodological_judgement",
    difficulty: "hard",
    tags: ["methodology", "causal_inference", "observational_study"],
  },
  {
    id: "exp_r3q3",
    round: 3,
    title: "Clinical Translation: Precision Medicine Implementation",
    titlePt: "Tradução Clínica: Implementação de Medicina de Precisão",
    scenario:
      "A hospital wants to implement a precision medicine program using genomic testing. What is the critical first step?",
    scenarioPt:
      "Um hospital quer implementar um programa de medicina de precisão usando testes genómicos. Qual é o primeiro passo crítico?",
    dataSignals: [
      { label: "GENOMIC_DATA_AVAILABLE", value: 95, unit: "%", state: "high", category: "biomarker" },
      { label: "CLINICAL_WORKFLOW_INTEGRATION", value: 15, unit: "%", state: "low", category: "biomarker" },
      { label: "CLINICIAN_TRAINING", value: 0, unit: "%", state: "low", category: "biomarker" },
    ],
    answerOptions: [
      { id: "workflow_integration", text: "Integrate genomic data into clinical workflows and train clinicians", textPt: "Integrar dados genómicos em fluxos de trabalho clínicos e treinar clínicos" },
      { id: "generate_more_data", text: "Generate more genomic data", textPt: "Gerar mais dados genómicos" },
      { id: "publish_results", text: "Publish results in scientific journals", textPt: "Publicar resultados em revistas científicas" },
    ],
    correctAnswerId: "workflow_integration",
    explanation: "Precision medicine requires integration into clinical practice and clinician training, not just data generation.",
    explanationPt: "Medicina de precisão requer integração em prática clínica e treinamento de clínicos, não apenas geração de dados.",
    explanations: {
      workflow_integration: {
        en: "Correct implementation strategy. Genomic data is only useful if clinicians understand it and can act on it. Workflow integration and training are essential before expanding the program.",
        pt: "Estratégia de implementação correta. Dados genómicos são úteis apenas se clínicos os compreendem e podem agir sobre eles. Integração de fluxo de trabalho e treinamento são essenciais antes de expandir o programa.",
      },
      generate_more_data: {
        en: "Premature. More data without clinical integration is useless. The bottleneck is implementation, not data generation.",
        pt: "Prematuro. Mais dados sem integração clínica são inúteis. O gargalo é implementação, não geração de dados.",
      },
      publish_results: {
        en: "Not the priority. Publishing is important for dissemination but doesn't help patients unless the program is clinically implemented.",
        pt: "Não é a prioridade. Publicar é importante para disseminação mas não ajuda pacientes a menos que o programa seja clinicamente implementado.",
      },
    },
    mode: "clinical_decision",
    difficulty: "hard",
    tags: ["precision_medicine", "implementation", "clinical_workflow"],
  },
  {
    id: "exp_r3q4",
    round: 3,
    title: "Advanced Pattern: Emergent Properties",
    titlePt: "Padrão Avançado: Propriedades Emergentes",
    scenario:
      "Individual genes show weak effects, but their combination shows strong phenotypic effect. What does this indicate?",
    scenarioPt:
      "Genes individuais mostram efeitos fracos, mas sua combinação mostra efeito fenotípico forte. O que isto indica?",
    dataSignals: [
      { label: "INDIVIDUAL_GENE_EFFECT", value: 15, unit: "%", state: "low", category: "gene_expression" },
      { label: "COMBINED_EFFECT", value: 78, unit: "%", state: "high", category: "gene_expression" },
      { label: "SYNERGISTIC_INTERACTION", value: 63, unit: "%", state: "high", category: "gene_expression" },
    ],
    answerOptions: [
      { id: "genetic_interaction", text: "Genetic interaction (epistasis) or synergy between genes", textPt: "Interação genética (epistasia) ou sinergia entre genes" },
      { id: "measurement_error", text: "Measurement error in combined analysis", textPt: "Erro de medição na análise combinada" },
      { id: "additive_effects", text: "Simple additive effects of individual genes", textPt: "Efeitos aditivos simples de genes individuais" },
    ],
    correctAnswerId: "genetic_interaction",
    explanation: "Strong combined effect with weak individual effects indicates genetic interaction or synergy.",
    explanationPt: "Efeito combinado forte com efeitos individuais fracos indica interação genética ou sinergia.",
    explanations: {
      genetic_interaction: {
        en: "Correct interpretation. This is classic epistasis: individual genes have weak effects, but together they produce strong phenotypic effects. The genes interact synergistically.",
        pt: "Interpretação correta. Esta é epistasia clássica: genes individuais têm efeitos fracos, mas juntos produzem efeitos fenotípicos fortes. Os genes interagem sinergicamente.",
      },
      measurement_error: {
        en: "Unlikely. The strong combined effect is a robust finding. If it were error, you would expect random variation, not synergistic amplification.",
        pt: "Improvável. O efeito combinado forte é um achado robusto. Se fosse erro, esperaria variação aleatória, não amplificação sinérgica.",
      },
      additive_effects: {
        en: "Incorrect. Additive effects would predict combined effect = sum of individual effects. The strong combined effect exceeds this prediction, indicating non-additive (synergistic) interaction.",
        pt: "Incorreto. Efeitos aditivos prediriam efeito combinado = soma de efeitos individuais. O efeito combinado forte excede esta predição, indicando interação não aditiva (sinérgica).",
      },
    },
    mode: "pattern_interpretation",
    difficulty: "hard",
    tags: ["genetics", "epistasis", "systems_biology"],
  },
  {
    id: "exp_r3q5",
    round: 3,
    title: "Methodology: Replication and Meta-Analysis",
    titlePt: "Metodologia: Replicação e Meta-Análise",
    scenario:
      "Five independent studies show similar effect sizes but with wide confidence intervals. Should these be meta-analyzed?",
    scenarioPt:
      "Cinco estudos independentes mostram tamanhos de efeito similares mas com intervalos de confiança amplos. Devem estes ser meta-analisados?",
    dataSignals: [
      { label: "EFFECT_SIZE_CONSISTENCY", value: 88, unit: "%", state: "high", category: "biomarker" },
      { label: "CONFIDENCE_INTERVAL_WIDTH", value: 75, unit: "%", state: "high", category: "biomarker" },
      { label: "HETEROGENEITY", value: 42, unit: "%", state: "medium", category: "biomarker" },
    ],
    answerOptions: [
      { id: "meta_analyze", text: "Yes; meta-analysis increases statistical power", textPt: "Sim; meta-análise aumenta poder estatístico" },
      { id: "no_meta_analysis", text: "No; wide confidence intervals indicate unreliable data", textPt: "Não; intervalos de confiança amplos indicam dados não confiáveis" },
      { id: "investigate_heterogeneity", text: "First investigate heterogeneity; then decide on meta-analysis", textPt: "Primeiro investigar heterogeneidade; depois decidir sobre meta-análise" },
    ],
    correctAnswerId: "investigate_heterogeneity",
    explanation: "Before meta-analyzing, investigate heterogeneity to understand why confidence intervals are wide.",
    explanationPt: "Antes de meta-analisar, investigar heterogeneidade para compreender por que intervalos de confiança são amplos.",
    explanations: {
      meta_analyze: {
        en: "Partially correct but incomplete. Meta-analysis does increase power, but first you must understand the heterogeneity. Wide CIs suggest real differences between studies that should be explored.",
        pt: "Parcialmente correto mas incompleto. Meta-análise aumenta poder, mas primeiro deve compreender a heterogeneidade. CIs amplos sugerem diferenças reais entre estudos que devem ser exploradas.",
      },
      no_meta_analysis: {
        en: "Incorrect. Wide confidence intervals don't mean unreliable data—they reflect genuine uncertainty. Meta-analysis is specifically designed to combine uncertain estimates.",
        pt: "Incorreto. Intervalos de confiança amplos não significam dados não confiáveis—refletem incerteza genuína. Meta-análise é especificamente projetada para combinar estimativas incertas.",
      },
      investigate_heterogeneity: {
        en: "Correct approach. Consistent effect sizes with heterogeneous CIs suggest real differences between studies. Investigate these differences (population, methods, context) before meta-analyzing.",
        pt: "Abordagem correta. Tamanhos de efeito consistentes com CIs heterogéneos sugerem diferenças reais entre estudos. Investigar estas diferenças (população, métodos, contexto) antes de meta-analisar.",
      },
    },
    mode: "methodological_judgement",
    difficulty: "hard",
    tags: ["methodology", "meta_analysis", "heterogeneity"],
  },
  {
    id: "exp_r3q6",
    round: 3,
    title: "Clinical Translation: Biomarker-Driven Trial Design",
    titlePt: "Tradução Clínica: Design de Ensaio Orientado por Biomarcador",
    scenario:
      "A drug trial enrolls only patients with a specific biomarker. What is the advantage and risk of this approach?",
    scenarioPt:
      "Um ensaio de fármaco inscreve apenas pacientes com um biomarcador específico. Qual é a vantagem e risco desta abordagem?",
    dataSignals: [
      { label: "BIOMARKER_ENRICHMENT", value: 95, unit: "%", state: "high", category: "biomarker" },
      { label: "STATISTICAL_POWER", value: 88, unit: "%", state: "high", category: "biomarker" },
      { label: "GENERALIZABILITY", value: 25, unit: "%", state: "low", category: "biomarker" },
    ],
    answerOptions: [
      { id: "enrichment_tradeoff", text: "Advantage: power; Risk: limited generalizability to biomarker-negative patients", textPt: "Vantagem: poder; Risco: generalizabilidade limitada a pacientes biomarker-negativos" },
      { id: "enrichment_only_good", text: "Biomarker enrichment is purely beneficial", textPt: "Enriquecimento de biomarcador é puramente benéfico" },
      { id: "enrichment_only_bad", text: "Biomarker enrichment reduces statistical power", textPt: "Enriquecimento de biomarcador reduz poder estatístico" },
    ],
    correctAnswerId: "enrichment_tradeoff",
    explanation: "Biomarker enrichment increases power but limits generalizability to the broader population.",
    explanationPt: "Enriquecimento de biomarcador aumenta poder mas limita generalizabilidade à população mais ampla.",
    explanations: {
      enrichment_tradeoff: {
        en: "Correct assessment. Biomarker enrichment increases statistical power (fewer patients needed) but creates a tradeoff: results apply only to biomarker-positive patients. Efficacy in biomarker-negative patients remains unknown.",
        pt: "Avaliação correta. Enriquecimento de biomarcador aumenta poder estatístico (menos pacientes necessários) mas cria um tradeoff: resultados aplicam-se apenas a pacientes biomarker-positivos. Eficácia em pacientes biomarker-negativos permanece desconhecida.",
      },
      enrichment_only_good: {
        en: "Incomplete. While enrichment increases power, it limits generalizability. This is a real tradeoff that must be acknowledged.",
        pt: "Incompleto. Embora enriquecimento aumente poder, limita generalizabilidade. Este é um tradeoff real que deve ser reconhecido.",
      },
      enrichment_only_bad: {
        en: "Incorrect. Biomarker enrichment increases power by focusing on responsive patients. The tradeoff is generalizability, not power.",
        pt: "Incorreto. Enriquecimento de biomarcador aumenta poder focando em pacientes responsivos. O tradeoff é generalizabilidade, não poder.",
      },
    },
    mode: "clinical_decision",
    difficulty: "hard",
    tags: ["clinical_trial", "biomarker", "trial_design"],
  },
  {
    id: "exp_r3q7",
    round: 3,
    title: "Advanced Pattern: Phenotypic Plasticity",
    titlePt: "Padrão Avançado: Plasticidade Fenotípica",
    scenario:
      "Genetically identical cells show different phenotypes depending on microenvironment. What is the mechanism?",
    scenarioPt:
      "Células geneticamente idênticas mostram fenótipos diferentes dependendo do microambiente. Qual é o mecanismo?",
    dataSignals: [
      { label: "GENETIC_IDENTITY", value: 100, unit: "%", state: "high", category: "gene_expression" },
      { label: "PHENOTYPE_DIVERSITY", value: 85, unit: "%", state: "high", category: "gene_expression" },
      { label: "EPIGENETIC_VARIATION", value: 78, unit: "%", state: "high", category: "gene_expression" },
    ],
    answerOptions: [
      { id: "epigenetic_plasticity", text: "Epigenetic plasticity: different chromatin states in different environments", textPt: "Plasticidade epigenética: diferentes estados de cromatina em diferentes ambientes" },
      { id: "genetic_mutation", text: "Genetic mutations accumulating in different environments", textPt: "Mutações genéticas acumulando em diferentes ambientes" },
      { id: "measurement_error", text: "Measurement error in phenotyping", textPt: "Erro de medição em fenotipagem" },
    ],
    correctAnswerId: "epigenetic_plasticity",
    explanation: "Phenotypic diversity in genetically identical cells indicates epigenetic regulation responding to environmental signals.",
    explanationPt: "Diversidade fenotípica em células geneticamente idênticas indica regulação epigenética respondendo a sinais ambientais.",
    explanations: {
      epigenetic_plasticity: {
        en: "Correct interpretation. Genetically identical cells with different phenotypes demonstrate epigenetic plasticity. Different chromatin states, DNA methylation, and histone modifications in different microenvironments produce phenotypic diversity.",
        pt: "Interpretação correta. Células geneticamente idênticas com fenótipos diferentes demonstram plasticidade epigenética. Diferentes estados de cromatina, metilação de DNA, e modificações de histona em diferentes microambientes produzem diversidade fenotípica.",
      },
      genetic_mutation: {
        en: "Unlikely. Mutations accumulate slowly and randomly. The rapid, reversible phenotypic changes in response to environment indicate epigenetic, not genetic, mechanisms.",
        pt: "Improvável. Mutações acumulam lentamente e aleatoriamente. As mudanças fenotípicas rápidas e reversíveis em resposta ao ambiente indicam mecanismos epigenéticos, não genéticos.",
      },
      measurement_error: {
        en: "Unlikely. Consistent phenotypic differences in different environments indicate real biological variation, not measurement error.",
        pt: "Improvável. Diferenças fenotípicas consistentes em diferentes ambientes indicam variação biológica real, não erro de medição.",
      },
    },
    mode: "pattern_interpretation",
    difficulty: "hard",
    tags: ["epigenetics", "plasticity", "systems_biology"],
  },
  {
    id: "exp_r3q8",
    round: 3,
    title: "Methodology: Research Integrity and Reproducibility",
    titlePt: "Metodologia: Integridade de Investigação e Reprodutibilidade",
    scenario:
      "A researcher's published results cannot be reproduced by independent labs. What should happen next?",
    scenarioPt:
      "Os resultados publicados de um investigador não podem ser reproduzidos por laboratórios independentes. O que deve acontecer a seguir?",
    dataSignals: [
      { label: "REPLICATION_ATTEMPTS", value: 5, unit: "n", state: "high", category: "biomarker" },
      { label: "REPLICATION_SUCCESS", value: 0, unit: "%", state: "low", category: "biomarker" },
      { label: "ORIGINAL_CITATIONS", value: 95, unit: "%", state: "high", category: "biomarker" },
    ],
    answerOptions: [
      { id: "investigate_methods", text: "Investigate methods, data, and assumptions; consider retraction if fraud is found", textPt: "Investigar métodos, dados, e suposições; considerar retração se fraude é encontrada" },
      { id: "citations_validate", text: "High citations validate the original findings", textPt: "Citações elevadas validam os achados originais" },
      { id: "replicators_wrong", text: "The replicators must be using wrong methods", textPt: "Os replicadores devem estar usando métodos errados" },
    ],
    correctAnswerId: "investigate_methods",
    explanation: "Replication failure requires investigation of original methods and data to identify the source of non-reproducibility.",
    explanationPt: "Falha de replicação requer investigação de métodos e dados originais para identificar a fonte de não reprodutibilidade.",
    explanations: {
      investigate_methods: {
        en: "Correct response. Replication failure by multiple independent labs is strong evidence of a problem with the original work. Investigate methods, data, and assumptions. If fraud is found, retraction is appropriate.",
        pt: "Resposta correta. Falha de replicação por múltiplos laboratórios independentes é evidência forte de um problema com o trabalho original. Investigar métodos, dados, e suposições. Se fraude é encontrada, retração é apropriada.",
      },
      citations_validate: {
        en: "Incorrect. Citations reflect visibility, not validity. Many fraudulent findings are heavily cited before replication failures expose them.",
        pt: "Incorreto. Citações refletem visibilidade, não validade. Muitos achados fraudulentos são fortemente citados antes de falhas de replicação os exporem.",
      },
      replicators_wrong: {
        en: "Unlikely excuse. Multiple independent labs failing to replicate suggests the problem is with the original study, not coordinated error across labs.",
        pt: "Desculpa improvável. Múltiplos laboratórios independentes falhando em replicar sugere que o problema é com o estudo original, não erro coordenado entre labs.",
      },
    },
    mode: "methodological_judgement",
    difficulty: "hard",
    tags: ["research_integrity", "replication", "reproducibility"],
  },
];
