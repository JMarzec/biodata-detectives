/**
 * BioData Detectives - Normal Difficulty Question Bank
 * 24 questions: Pattern recognition, methodological thinking, clinical decisions
 * Each question has per-answer explanations (3 explanations per question)
 * Bilingual content (EN/PT)
 */

import { Question } from "./questions";

export const normalQuestions: Question[] = [
  // ===== ROUND 1: RNA DETECTIVE (8 questions) =====
  {
    id: "n1q1",
    round: 1,
    title: "RNA Detective: Mixed Signals Pattern",
    titlePt: "Detetive de RNA: Padrão de Sinais Mistos",
    scenario:
      "Patient R-042 shows high immune response but low repair capacity. Based on this pattern, what is the most likely interpretation?",
    scenarioPt:
      "Paciente R-042 mostra resposta imunitária elevada mas baixa capacidade de reparação. Com base neste padrão, qual é a interpretação mais provável?",
    dataSignals: [
      { label: "IMMUNE_SIGNAL", value: 85, unit: "%", state: "high", category: "immune" },
      { label: "RNA_REPAIR", value: 25, unit: "%", state: "low", category: "gene_expression" },
      { label: "CELL_GROWTH", value: 55, unit: "%", state: "medium", category: "gene_expression" },
    ],
    answerOptions: [
      { id: "active_infection", text: "Active infection or inflammatory state", textPt: "Infeção ativa ou estado inflamatório" },
      { id: "healthy_response", text: "Sign of excellent health", textPt: "Sinal de excelente saúde" },
      { id: "need_more_data", text: "Need additional biomarkers to interpret", textPt: "Precisamos de biomarcadores adicionais para interpretar" },
    ],
    correctAnswerId: "active_infection",
    explanation: "In this simplified model, high immune activity with low repair capacity suggests an active immune response to infection or inflammation.",
    explanationPt: "Neste modelo simplificado, alta atividade imunitária com baixa capacidade de reparação sugere uma resposta imunitária ativa a infeção ou inflamação.",
    explanations: {
      active_infection: {
        en: "Correct interpretation. High immune signalling paired with low repair capacity suggests the immune system is actively responding to a threat (infection or inflammation). This pattern is consistent with acute immune activation.",
        pt: "Interpretação correta. Sinalização imunitária elevada associada a baixa capacidade de reparação sugere que o sistema imunitário está respondendo ativamente a uma ameaça (infeção ou inflamação). Este padrão é consistente com ativação imunitária aguda.",
      },
      healthy_response: {
        en: "Incorrect. While high immune response can be protective, low repair capacity alongside it suggests the system is under stress responding to a threat, not in a state of excellent health. Healthy cells maintain robust repair mechanisms.",
        pt: "Incorreto. Embora a resposta imunitária elevada possa ser protetora, a baixa capacidade de reparação associada sugere que o sistema está sob stress respondendo a uma ameaça, não em estado de excelente saúde. Células saudáveis mantêm mecanismos de reparação robustos.",
      },
      need_more_data: {
        en: "While additional data is always valuable in real research, this pattern is distinctive enough to suggest active immune response. Caution is important, but the signature here is clear enough to make a provisional interpretation.",
        pt: "Embora dados adicionais sejam sempre valiosos em investigação real, este padrão é distintivo o suficiente para sugerir resposta imunitária ativa. A cautela é importante, mas a assinatura aqui é clara o suficiente para fazer uma interpretação provisória.",
      },
    },
    mode: "pattern_interpretation",
    difficulty: "medium",
    tags: ["transcriptomics", "RNA", "immune_response", "inflammation"],
  },
  {
    id: "n1q2",
    round: 1,
    title: "RNA Detective: Metabolic Shift Detection",
    titlePt: "Detetive de RNA: Deteção de Mudança Metabólica",
    scenario:
      "Three patients show coordinated high expression in metabolism genes but low in growth genes. What should researchers do next?",
    scenarioPt:
      "Três pacientes mostram expressão coordenada elevada em genes de metabolismo mas baixa em genes de crescimento. O que os investigadores devem fazer a seguir?",
    dataSignals: [
      { label: "METABOLISM_HIGH", value: 88, unit: "%", state: "high", category: "metabolism" },
      { label: "CELL_GROWTH", value: 18, unit: "%", state: "low", category: "gene_expression" },
      { label: "ENERGY_PRODUCTION", value: 82, unit: "%", state: "high", category: "metabolism" },
    ],
    answerOptions: [
      { id: "validate_cohort", text: "Validate this pattern in a larger independent cohort", textPt: "Validar este padrão numa coorte independente maior" },
      { id: "publish_immediately", text: "Publish immediately as a novel discovery", textPt: "Publicar imediatamente como descoberta inovadora" },
      { id: "single_study_conclusion", text: "Conclude this is a definitive metabolic signature", textPt: "Concluir que esta é uma assinatura metabólica definitiva" },
    ],
    correctAnswerId: "validate_cohort",
    explanation: "The next step in rigorous research is validation in an independent cohort to confirm the pattern is reproducible.",
    explanationPt: "O próximo passo em investigação rigorosa é validação numa coorte independente para confirmar que o padrão é reproduzível.",
    explanations: {
      validate_cohort: {
        en: "Correct methodology. Observing a pattern in three patients is interesting, but the scientific standard requires validation in an independent cohort before drawing conclusions. This prevents overfitting and ensures reproducibility.",
        pt: "Metodologia correta. Observar um padrão em três pacientes é interessante, mas o padrão científico requer validação numa coorte independente antes de tirar conclusões. Isto previne sobreajuste e garante reprodutibilidade.",
      },
      publish_immediately: {
        en: "Premature publication. Publishing based on three patients without validation would violate research ethics and reproducibility standards. Peer reviewers would reject this for lack of validation.",
        pt: "Publicação prematura. Publicar com base em três pacientes sem validação violaria normas éticas de investigação e reprodutibilidade. Revisores pares rejeitariam isto por falta de validação.",
      },
      single_study_conclusion: {
        en: "Overgeneralization. A pattern in three patients cannot be called 'definitive' without validation. Real metabolic signatures require reproducibility across independent populations.",
        pt: "Sobregeneralização. Um padrão em três pacientes não pode ser chamado 'definitivo' sem validação. Assinaturas metabólicas reais requerem reprodutibilidade em populações independentes.",
      },
    },
    mode: "methodological_judgement",
    difficulty: "medium",
    tags: ["methodology", "validation", "reproducibility", "research_ethics"],
  },
  {
    id: "n1q3",
    round: 1,
    title: "Clinical Translation: Biomarker for Screening",
    titlePt: "Tradução Clínica: Biomarcador para Rastreio",
    scenario:
      "A biomarker shows 85% accuracy in identifying disease in symptomatic patients. Can it be used to screen asymptomatic populations?",
    scenarioPt:
      "Um biomarcador mostra 85% de precisão na identificação de doença em pacientes sintomáticos. Pode ser utilizado para rastrear populações assintomáticas?",
    dataSignals: [
      { label: "SENSITIVITY", value: 85, unit: "%", state: "high", category: "biomarker" },
      { label: "SPECIFICITY", value: 82, unit: "%", state: "high", category: "biomarker" },
      { label: "POSITIVE_PREDICTIVE_VALUE", value: 45, unit: "%", state: "low", category: "biomarker" },
    ],
    answerOptions: [
      { id: "not_suitable", text: "Not suitable without further validation in asymptomatic cohorts", textPt: "Não adequado sem validação adicional em coortes assintomáticas" },
      { id: "ready_to_use", text: "Ready to use immediately for population screening", textPt: "Pronto para usar imediatamente para rastreio populacional" },
      { id: "perfect_test", text: "85% accuracy means it's a perfect screening test", textPt: "85% de precisão significa que é um teste de rastreio perfeito" },
    ],
    correctAnswerId: "not_suitable",
    explanation: "Accuracy in symptomatic patients doesn't guarantee performance in asymptomatic populations. Clinical translation requires validation in the target population.",
    explanationPt: "Precisão em pacientes sintomáticos não garante desempenho em populações assintomáticas. A tradução clínica requer validação na população alvo.",
    explanations: {
      not_suitable: {
        en: "Correct assessment. The low positive predictive value (45%) indicates many false positives in screening asymptomatic populations. Symptomatic and asymptomatic populations have different disease prevalence, requiring separate validation.",
        pt: "Avaliação correta. O baixo valor preditivo positivo (45%) indica muitos falsos positivos no rastreio de populações assintomáticas. Populações sintomáticas e assintomáticas têm prevalência de doença diferente, requerendo validação separada.",
      },
      ready_to_use: {
        en: "Premature clinical translation. Performance in symptomatic patients does not predict performance in asymptomatic screening. The low PPV would cause harm through unnecessary interventions.",
        pt: "Tradução clínica prematura. O desempenho em pacientes sintomáticos não prediz desempenho no rastreio assintomático. O baixo PPV causaria dano através de intervenções desnecessárias.",
      },
      perfect_test: {
        en: "Misunderstanding of test performance. 85% accuracy is good for diagnosis but insufficient for screening. The low positive predictive value means most positive results in asymptomatic populations would be false alarms.",
        pt: "Compreensão errada do desempenho do teste. 85% de precisão é bom para diagnóstico mas insuficiente para rastreio. O baixo valor preditivo positivo significa que a maioria dos resultados positivos em populações assintomáticas seriam alarmes falsos.",
      },
    },
    mode: "clinical_decision",
    difficulty: "medium",
    tags: ["clinical_translation", "screening", "biomarker", "predictive_value"],
  },
  {
    id: "n1q4",
    round: 1,
    title: "RNA Detective: Pathway Dominance",
    titlePt: "Detetive de RNA: Dominância de Via",
    scenario:
      "Patient R-067 shows high expression in 12 different stress-response genes. What does this suggest about the underlying biology?",
    scenarioPt:
      "Paciente R-067 mostra expressão elevada em 12 genes diferentes de resposta ao stress. O que isto sugere sobre a biologia subjacente?",
    dataSignals: [
      { label: "STRESS_RESPONSE_1", value: 78, unit: "%", state: "high", category: "stress" },
      { label: "STRESS_RESPONSE_2", value: 81, unit: "%", state: "high", category: "stress" },
      { label: "STRESS_RESPONSE_3", value: 75, unit: "%", state: "high", category: "stress" },
    ],
    answerOptions: [
      { id: "broad_stress", text: "Broad stress response across multiple pathways", textPt: "Resposta de stress ampla em múltiplas vias" },
      { id: "single_pathway", text: "Activation of a single dominant stress pathway", textPt: "Ativação de uma única via de stress dominante" },
      { id: "measurement_error", text: "Likely a measurement or batch effect artifact", textPt: "Provável artefato de efeito de medição ou lote" },
    ],
    correctAnswerId: "broad_stress",
    explanation: "Coordinated high expression across multiple stress genes indicates a broad cellular stress response, not a single pathway.",
    explanationPt: "Expressão coordenada elevada em múltiplos genes de stress indica uma resposta de stress celular ampla, não uma única via.",
    explanations: {
      broad_stress: {
        en: "Correct interpretation. High coordinated expression across 12 different stress genes suggests the cell is mounting a broad, multi-pathway response to stress. This indicates a systemic stress state rather than a single-pathway activation.",
        pt: "Interpretação correta. Expressão coordenada elevada em 12 genes de stress diferentes sugere que a célula está montando uma resposta ampla e multi-via ao stress. Isto indica um estado de stress sistémico em vez de ativação de uma única via.",
      },
      single_pathway: {
        en: "Misinterpretation. If only a single pathway were active, you would expect high expression in genes from that pathway only, not coordinated elevation across 12 different stress genes. Multiple pathways are clearly involved.",
        pt: "Má interpretação. Se apenas uma única via estivesse ativa, esperaríamos expressão elevada apenas em genes dessa via, não elevação coordenada em 12 genes de stress diferentes. Múltiplas vias estão claramente envolvidas.",
      },
      measurement_error: {
        en: "Unlikely. While batch effects are always a concern, the coordinated elevation across 12 genes is a specific biological pattern, not a random artifact. Batch effects typically affect all genes similarly.",
        pt: "Improvável. Embora efeitos de lote sejam sempre uma preocupação, a elevação coordenada em 12 genes é um padrão biológico específico, não um artefato aleatório. Efeitos de lote afetam tipicamente todos os genes de forma similar.",
      },
    },
    mode: "pattern_interpretation",
    difficulty: "medium",
    tags: ["transcriptomics", "stress_response", "pathway_analysis"],
  },
  {
    id: "n1q5",
    round: 1,
    title: "Methodology: Sample Size Adequacy",
    titlePt: "Metodologia: Adequação do Tamanho da Amostra",
    scenario:
      "A study finds a statistically significant difference (p=0.03) between treatment and control in 8 patients. What is the appropriate next step?",
    scenarioPt:
      "Um estudo encontra uma diferença estatisticamente significativa (p=0,03) entre tratamento e controlo em 8 pacientes. Qual é o próximo passo apropriado?",
    dataSignals: [
      { label: "P_VALUE", value: 3, unit: "%", state: "low", category: "biomarker" },
      { label: "SAMPLE_SIZE", value: 8, unit: "n", state: "low", category: "biomarker" },
      { label: "EFFECT_SIZE", value: 65, unit: "%", state: "high", category: "biomarker" },
    ],
    answerOptions: [
      { id: "replicate_study", text: "Replicate in a larger, independent cohort", textPt: "Replicar numa coorte independente maior" },
      { id: "claim_discovery", text: "Claim a novel discovery and publish", textPt: "Reivindicar uma descoberta inovadora e publicar" },
      { id: "no_further_work", text: "Statistical significance means the result is valid", textPt: "Significância estatística significa que o resultado é válido" },
    ],
    correctAnswerId: "replicate_study",
    explanation: "Small sample sizes increase the risk of false positives. Replication in a larger cohort is essential for validation.",
    explanationPt: "Tamanhos de amostra pequenos aumentam o risco de falsos positivos. Replicação numa coorte maior é essencial para validação.",
    explanations: {
      replicate_study: {
        en: "Correct approach. With only 8 patients, statistical significance is vulnerable to false positives. Replication in a larger, independent cohort is the scientific standard before claiming a discovery.",
        pt: "Abordagem correta. Com apenas 8 pacientes, a significância estatística é vulnerável a falsos positivos. Replicação numa coorte independente maior é o padrão científico antes de reivindicar uma descoberta.",
      },
      claim_discovery: {
        en: "Premature claim. A p-value of 0.03 in 8 patients is suggestive but not conclusive. The small sample size creates high risk of false positive. This would not meet publication standards without replication.",
        pt: "Reivindicação prematura. Um p-value de 0,03 em 8 pacientes é sugestivo mas não conclusivo. O tamanho pequeno da amostra cria alto risco de falso positivo. Isto não atenderia normas de publicação sem replicação.",
      },
      no_further_work: {
        en: "Misunderstanding of statistical significance. P-values depend on sample size. With n=8, even a true effect might not reach significance, and a false positive is more likely. Replication is essential.",
        pt: "Compreensão errada de significância estatística. Os p-values dependem do tamanho da amostra. Com n=8, mesmo um efeito verdadeiro pode não atingir significância, e um falso positivo é mais provável. Replicação é essencial.",
      },
    },
    mode: "methodological_judgement",
    difficulty: "medium",
    tags: ["statistics", "sample_size", "false_positive"],
  },
  {
    id: "n1q6",
    round: 1,
    title: "RNA Detective: Immune Escape Pattern",
    titlePt: "Detetive de RNA: Padrão de Escape Imunitário",
    scenario:
      "Patient R-089 shows high tumor growth genes but very low immune activation. What does this pattern suggest?",
    scenarioPt:
      "Paciente R-089 mostra genes de crescimento tumoral elevados mas ativação imunitária muito baixa. O que este padrão sugere?",
    dataSignals: [
      { label: "TUMOR_GROWTH", value: 92, unit: "%", state: "high", category: "gene_expression" },
      { label: "IMMUNE_ACTIVATION", value: 8, unit: "%", state: "low", category: "immune" },
      { label: "IMMUNE_SUPPRESSION", value: 78, unit: "%", state: "high", category: "immune" },
    ],
    answerOptions: [
      { id: "immune_escape", text: "Tumor is evading immune detection (immune escape)", textPt: "Tumor está evitando deteção imunitária (escape imunitário)" },
      { id: "healthy_state", text: "This indicates a healthy immune state", textPt: "Isto indica um estado imunitário saudável" },
      { id: "need_validation", text: "Need additional markers to interpret this pattern", textPt: "Precisamos de marcadores adicionais para interpretar este padrão" },
    ],
    correctAnswerId: "immune_escape",
    explanation: "High tumor growth paired with immune suppression and low immune activation suggests the tumor is evading immune detection.",
    explanationPt: "Crescimento tumoral elevado associado a supressão imunitária e baixa ativação imunitária sugere que o tumor está evitando deteção imunitária.",
    explanations: {
      immune_escape: {
        en: "Correct interpretation. This is a classic immune escape pattern: high tumor growth signals paired with immune suppression and low immune activation. The tumor is actively suppressing the immune response.",
        pt: "Interpretação correta. Este é um padrão clássico de escape imunitário: sinais de crescimento tumoral elevados associados a supressão imunitária e baixa ativação imunitária. O tumor está ativamente suprimindo a resposta imunitária.",
      },
      healthy_state: {
        en: "Incorrect. A healthy immune state would show active immune response genes, not suppression. The combination of high tumor growth with immune suppression is a concerning pattern, not a healthy one.",
        pt: "Incorreto. Um estado imunitário saudável mostraria genes de resposta imunitária ativa, não supressão. A combinação de crescimento tumoral elevado com supressão imunitária é um padrão preocupante, não saudável.",
      },
      need_validation: {
        en: "While additional markers are always valuable, this pattern is distinctive enough to suggest immune escape. The combination of high tumor growth, immune suppression, and low immune activation is a clear signature.",
        pt: "Embora marcadores adicionais sejam sempre valiosos, este padrão é distintivo o suficiente para sugerir escape imunitário. A combinação de crescimento tumoral elevado, supressão imunitária e baixa ativação imunitária é uma assinatura clara.",
      },
    },
    mode: "pattern_interpretation",
    difficulty: "medium",
    tags: ["transcriptomics", "immune_escape", "tumor_biology"],
  },
  {
    id: "n1q7",
    round: 1,
    title: "Clinical Decision: Experimental Treatment",
    titlePt: "Decisão Clínica: Tratamento Experimental",
    scenario:
      "A patient with a rare disease shows the biomarker pattern matching a new experimental treatment. Should they receive it?",
    scenarioPt:
      "Um paciente com doença rara mostra o padrão de biomarcador correspondente a um novo tratamento experimental. Devem recebê-lo?",
    dataSignals: [
      { label: "BIOMARKER_MATCH", value: 92, unit: "%", state: "high", category: "biomarker" },
      { label: "TREATMENT_EFFICACY", value: 65, unit: "%", state: "high", category: "biomarker" },
      { label: "SAFETY_DATA", value: 35, unit: "%", state: "low", category: "biomarker" },
    ],
    answerOptions: [
      { id: "informed_consent", text: "Yes, with informed consent and careful monitoring", textPt: "Sim, com consentimento informado e monitorização cuidadosa" },
      { id: "wait_approval", text: "Wait until the treatment is FDA approved", textPt: "Esperar até que o tratamento seja aprovado pela FDA" },
      { id: "automatic_treatment", text: "Biomarker match guarantees the treatment will work", textPt: "Correspondência de biomarcador garante que o tratamento funcionará" },
    ],
    correctAnswerId: "informed_consent",
    explanation: "For rare diseases with no standard treatment, experimental therapy with informed consent may be appropriate when biomarker evidence is strong.",
    explanationPt: "Para doenças raras sem tratamento padrão, terapia experimental com consentimento informado pode ser apropriada quando a evidência de biomarcador é forte.",
    explanations: {
      informed_consent: {
        en: "Correct clinical judgment. For rare diseases with no standard treatment, experimental therapy with strong biomarker evidence and informed consent is ethically justified. Careful monitoring is essential.",
        pt: "Julgamento clínico correto. Para doenças raras sem tratamento padrão, terapia experimental com evidência de biomarcador forte e consentimento informado é eticamente justificado. Monitorização cuidadosa é essencial.",
      },
      wait_approval: {
        en: "May not be ethical for rare disease. Waiting for full FDA approval could mean the patient has no treatment options. Compassionate use of experimental therapy is sometimes justified when standard options don't exist.",
        pt: "Pode não ser ético para doença rara. Esperar aprovação completa da FDA pode significar que o paciente não tem opções de tratamento. Uso compassivo de terapia experimental às vezes é justificado quando opções padrão não existem.",
      },
      automatic_treatment: {
        en: "Overconfidence. Biomarker match is promising but doesn't guarantee efficacy. The low safety data (35%) indicates risks are not fully understood. Informed consent is essential.",
        pt: "Excesso de confiança. Correspondência de biomarcador é promissora mas não garante eficácia. Os dados de segurança baixos (35%) indicam que os riscos não são totalmente compreendidos. Consentimento informado é essencial.",
      },
    },
    mode: "clinical_decision",
    difficulty: "medium",
    tags: ["clinical_decision", "rare_disease", "experimental_therapy"],
  },
  {
    id: "n1q8",
    round: 1,
    title: "Methodology: Confounding Variables",
    titlePt: "Metodologia: Variáveis de Confusão",
    scenario:
      "A study shows patients on a new drug have better outcomes. However, wealthier patients were more likely to receive it. What is the concern?",
    scenarioPt:
      "Um estudo mostra que pacientes num novo fármaco têm melhores resultados. No entanto, pacientes mais ricos tinham mais probabilidade de recebê-lo. Qual é a preocupação?",
    dataSignals: [
      { label: "OUTCOME_IMPROVEMENT", value: 72, unit: "%", state: "high", category: "biomarker" },
      { label: "WEALTH_CORRELATION", value: 68, unit: "%", state: "high", category: "biomarker" },
      { label: "RANDOMIZATION", value: 15, unit: "%", state: "low", category: "biomarker" },
    ],
    answerOptions: [
      { id: "confounding", text: "Wealth may be a confounding variable affecting outcomes", textPt: "Riqueza pode ser uma variável de confusão afetando resultados" },
      { id: "drug_works", text: "The drug clearly works based on the outcome improvement", textPt: "O fármaco claramente funciona com base na melhoria de resultados" },
      { id: "ignore_wealth", text: "Wealth is irrelevant to drug efficacy", textPt: "Riqueza é irrelevante para eficácia do fármaco" },
    ],
    correctAnswerId: "confounding",
    explanation: "When treatment assignment is correlated with other variables (like wealth), those variables can confound the results. Randomization helps prevent this.",
    explanationPt: "Quando a atribuição de tratamento está correlacionada com outras variáveis (como riqueza), essas variáveis podem confundir os resultados. A aleatorização ajuda a prevenir isto.",
    explanations: {
      confounding: {
        en: "Correct identification of confounding. Wealthier patients may have better outcomes due to better nutrition, healthcare access, or other factors—not the drug. This is classic confounding bias. Randomization would help control for this.",
        pt: "Identificação correta de confusão. Pacientes mais ricos podem ter melhores resultados devido a melhor nutrição, acesso a cuidados de saúde, ou outros fatores—não o fármaco. Este é viés de confusão clássico. A aleatorização ajudaria a controlar isto.",
      },
      drug_works: {
        en: "Premature conclusion. The outcome improvement could be due to wealth-related factors rather than the drug. Without controlling for confounding variables, you cannot attribute the improvement to the drug.",
        pt: "Conclusão prematura. A melhoria de resultados pode ser devida a fatores relacionados com riqueza em vez do fármaco. Sem controlar variáveis de confusão, não pode atribuir a melhoria ao fármaco.",
      },
      ignore_wealth: {
        en: "Incorrect. Wealth strongly correlates with healthcare outcomes through multiple pathways (nutrition, healthcare access, stress levels). Ignoring this correlation is methodologically unsound.",
        pt: "Incorreto. Riqueza correlaciona fortemente com resultados de cuidados de saúde através de múltiplos caminhos (nutrição, acesso a cuidados de saúde, níveis de stress). Ignorar esta correlação é metodologicamente insustentável.",
      },
    },
    mode: "methodological_judgement",
    difficulty: "medium",
    tags: ["methodology", "confounding", "bias", "study_design"],
  },

  // ===== ROUND 2: BIOMARKER DETECTIVE (8 questions) =====
  {
    id: "n2q1",
    round: 2,
    title: "Biomarker Pattern: Coordinated Elevation",
    titlePt: "Padrão de Biomarcador: Elevação Coordenada",
    scenario:
      "Three independent biomarkers all show high levels in the same patient cohort. What is the most likely explanation?",
    scenarioPt:
      "Três biomarcadores independentes mostram níveis elevados na mesma coorte de pacientes. Qual é a explicação mais provável?",
    dataSignals: [
      { label: "BIOMARKER_A", value: 78, unit: "%", state: "high", category: "biomarker" },
      { label: "BIOMARKER_B", value: 82, unit: "%", state: "high", category: "biomarker" },
      { label: "BIOMARKER_C", value: 75, unit: "%", state: "high", category: "biomarker" },
    ],
    answerOptions: [
      { id: "shared_pathway", text: "All three reflect a shared underlying biological process", textPt: "Todos os três refletem um processo biológico subjacente compartilhado" },
      { id: "measurement_error", text: "This is likely a systematic measurement error", textPt: "Isto é provavelmente um erro de medição sistemático" },
      { id: "independent_events", text: "Three independent biomarkers elevating together is coincidence", textPt: "Três biomarcadores independentes elevando juntos é coincidência" },
    ],
    correctAnswerId: "shared_pathway",
    explanation: "Coordinated elevation of independent biomarkers suggests they are responding to a shared underlying biological process.",
    explanationPt: "Elevação coordenada de biomarcadores independentes sugere que estão respondendo a um processo biológico subjacente compartilhado.",
    explanations: {
      shared_pathway: {
        en: "Correct interpretation. Three independent biomarkers all elevating together is unlikely to be coincidence. They are likely responding to a shared biological process—such as systemic inflammation or metabolic dysfunction.",
        pt: "Interpretação correta. Três biomarcadores independentes elevando juntos é improvável ser coincidência. Provavelmente estão respondendo a um processo biológico compartilhado—como inflamação sistémica ou disfunção metabólica.",
      },
      measurement_error: {
        en: "Unlikely. If it were measurement error, you would expect random variation, not coordinated elevation across three independent biomarkers. Systematic error typically affects all measurements similarly.",
        pt: "Improvável. Se fosse erro de medição, esperaríamos variação aleatória, não elevação coordenada em três biomarcadores independentes. Erro sistemático afeta tipicamente todas as medições de forma similar.",
      },
      independent_events: {
        en: "Statistically improbable. The probability of three independent biomarkers all elevating by chance is very low. Coordinated elevation strongly suggests a shared biological cause.",
        pt: "Estatisticamente improvável. A probabilidade de três biomarcadores independentes elevarem por acaso é muito baixa. Elevação coordenada sugere fortemente uma causa biológica compartilhada.",
      },
    },
    mode: "pattern_interpretation",
    difficulty: "medium",
    tags: ["biomarkers", "pattern_recognition", "biology"],
  },
  {
    id: "n2q2",
    round: 2,
    title: "Study Design: Control Group Selection",
    titlePt: "Design de Estudo: Seleção de Grupo de Controlo",
    scenario:
      "A study compares disease patients to healthy volunteers from a university. What potential bias could this introduce?",
    scenarioPt:
      "Um estudo compara pacientes com doença a voluntários saudáveis de uma universidade. Que viés potencial isto poderia introduzir?",
    dataSignals: [
      { label: "DISEASE_GROUP_AGE", value: 65, unit: "years", state: "high", category: "biomarker" },
      { label: "CONTROL_GROUP_AGE", value: 22, unit: "years", state: "low", category: "biomarker" },
      { label: "SOCIOECONOMIC_MATCH", value: 20, unit: "%", state: "low", category: "biomarker" },
    ],
    answerOptions: [
      { id: "age_bias", text: "Age and socioeconomic mismatch could confound results", textPt: "Desajuste de idade e socioeconómico poderia confundir resultados" },
      { id: "no_bias", text: "Healthy controls are always appropriate regardless of demographics", textPt: "Controlos saudáveis são sempre apropriados independentemente da demografia" },
      { id: "university_bias", text: "University volunteers are more reliable", textPt: "Voluntários universitários são mais confiáveis" },
    ],
    correctAnswerId: "age_bias",
    explanation: "Age and socioeconomic differences between groups can confound results. Controls should be matched to disease patients on these variables.",
    explanationPt: "Diferenças de idade e socioeconómicas entre grupos podem confundir resultados. Controlos devem ser correspondidos a pacientes com doença nestas variáveis.",
    explanations: {
      age_bias: {
        en: "Correct identification of bias. Disease patients (avg 65 years) vs. university students (avg 22 years) introduces major age and socioeconomic confounding. Biomarker differences could reflect age/wealth, not disease.",
        pt: "Identificação correta de viés. Pacientes com doença (média 65 anos) vs. estudantes universitários (média 22 anos) introduz confusão de idade e socioeconómica major. Diferenças de biomarcador podem refletir idade/riqueza, não doença.",
      },
      no_bias: {
        en: "Incorrect. Healthy controls must be matched to disease patients on key variables like age and socioeconomic status. Unmatched controls introduce confounding bias.",
        pt: "Incorreto. Controlos saudáveis devem ser correspondidos a pacientes com doença em variáveis-chave como idade e estado socioeconómico. Controlos não correspondidos introduzem viés de confusão.",
      },
      university_bias: {
        en: "Misunderstanding of study design. University volunteers are convenient but not necessarily representative. They are typically younger and wealthier than disease patients, introducing systematic bias.",
        pt: "Compreensão errada do design de estudo. Voluntários universitários são convenientes mas não necessariamente representativos. São tipicamente mais jovens e mais ricos que pacientes com doença, introduzindo viés sistemático.",
      },
    },
    mode: "methodological_judgement",
    difficulty: "medium",
    tags: ["study_design", "bias", "control_selection"],
  },
  {
    id: "n2q3",
    round: 2,
    title: "Clinical Translation: Drug Efficacy",
    titlePt: "Tradução Clínica: Eficácia do Fármaco",
    scenario:
      "A drug shows 60% efficacy in clinical trials but only 30% in real-world use. What might explain this difference?",
    scenarioPt:
      "Um fármaco mostra 60% de eficácia em ensaios clínicos mas apenas 30% em uso real. O que poderia explicar esta diferença?",
    dataSignals: [
      { label: "TRIAL_EFFICACY", value: 60, unit: "%", state: "high", category: "biomarker" },
      { label: "REAL_WORLD_EFFICACY", value: 30, unit: "%", state: "low", category: "biomarker" },
      { label: "PATIENT_ADHERENCE", value: 45, unit: "%", state: "low", category: "biomarker" },
    ],
    answerOptions: [
      { id: "adherence_comorbidity", text: "Poor adherence and comorbidities in real-world patients", textPt: "Má adesão e comorbilidades em pacientes do mundo real" },
      { id: "drug_ineffective", text: "The drug is actually ineffective", textPt: "O fármaco é realmente ineficaz" },
      { id: "trial_fraud", text: "Clinical trials must have been fraudulent", textPt: "Ensaios clínicos devem ter sido fraudulentos" },
    ],
    correctAnswerId: "adherence_comorbidity",
    explanation: "Real-world patients often have lower adherence, comorbidities, and different demographics than trial participants, reducing efficacy.",
    explanationPt: "Pacientes do mundo real frequentemente têm menor adesão, comorbilidades, e demografia diferente de participantes de ensaios, reduzindo eficácia.",
    explanations: {
      adherence_comorbidity: {
        en: "Correct explanation. Clinical trials enroll highly selected patients with good adherence. Real-world patients have lower adherence, multiple comorbidities, and different demographics. These factors reduce drug efficacy in practice.",
        pt: "Explicação correta. Ensaios clínicos inscrevem pacientes altamente selecionados com boa adesão. Pacientes do mundo real têm menor adesão, múltiplas comorbilidades, e demografia diferente. Estes fatores reduzem eficácia do fármaco na prática.",
      },
      drug_ineffective: {
        en: "Incorrect conclusion. 60% efficacy in trials is still meaningful. The difference reflects the gap between controlled trial conditions and real-world complexity, not drug ineffectiveness.",
        pt: "Conclusão incorreta. 60% de eficácia em ensaios é ainda significativa. A diferença reflete a lacuna entre condições de ensaio controladas e complexidade do mundo real, não ineficácia do fármaco.",
      },
      trial_fraud: {
        en: "Unfounded accusation. Efficacy gaps between trials and real-world use are common and expected. This reflects normal variation, not fraud. Regulatory oversight prevents fraudulent trials.",
        pt: "Acusação infundada. Lacunas de eficácia entre ensaios e uso real são comuns e esperadas. Isto reflete variação normal, não fraude. Supervisão regulatória previne ensaios fraudulentos.",
      },
    },
    mode: "clinical_decision",
    difficulty: "medium",
    tags: ["clinical_translation", "efficacy", "real_world"],
  },
  {
    id: "n2q4",
    round: 2,
    title: "RNA Pattern: Tissue-Specific Expression",
    titlePt: "Padrão de RNA: Expressão Específica de Tecido",
    scenario:
      "A gene shows high expression in liver samples but low in blood samples from the same patient. What does this indicate?",
    scenarioPt:
      "Um gene mostra expressão elevada em amostras de fígado mas baixa em amostras de sangue do mesmo paciente. O que isto indica?",
    dataSignals: [
      { label: "LIVER_EXPRESSION", value: 88, unit: "%", state: "high", category: "gene_expression" },
      { label: "BLOOD_EXPRESSION", value: 12, unit: "%", state: "low", category: "gene_expression" },
      { label: "TISSUE_SPECIFICITY", value: 76, unit: "%", state: "high", category: "gene_expression" },
    ],
    answerOptions: [
      { id: "tissue_specific", text: "The gene is tissue-specifically expressed in liver", textPt: "O gene é expresso de forma específica de tecido no fígado" },
      { id: "measurement_error", text: "This is a measurement error or contamination", textPt: "Isto é um erro de medição ou contaminação" },
      { id: "disease_artifact", text: "This pattern indicates disease in the liver", textPt: "Este padrão indica doença no fígado" },
    ],
    correctAnswerId: "tissue_specific",
    explanation: "Differential expression between tissues is normal and indicates tissue-specific gene regulation, not disease or error.",
    explanationPt: "Expressão diferencial entre tecidos é normal e indica regulação génica específica de tecido, não doença ou erro.",
    explanations: {
      tissue_specific: {
        en: "Correct interpretation. Tissue-specific expression patterns are normal. Many genes are expressed at high levels in some tissues and low in others based on cellular function. This is expected biology.",
        pt: "Interpretação correta. Padrões de expressão específicos de tecido são normais. Muitos genes são expressos em níveis elevados em alguns tecidos e baixos em outros com base na função celular. Esta é biologia esperada.",
      },
      measurement_error: {
        en: "Unlikely. Tissue-specific expression is a well-established biological phenomenon. If this were error, you would expect random variation, not consistent high/low patterns.",
        pt: "Improvável. Expressão específica de tecido é um fenómeno biológico bem estabelecido. Se fosse erro, esperaríamos variação aleatória, não padrões consistentes elevados/baixos.",
      },
      disease_artifact: {
        en: "Misinterpretation. Tissue-specific expression is normal biology, not a sign of disease. Different tissues have different metabolic needs and express different genes accordingly.",
        pt: "Má interpretação. Expressão específica de tecido é biologia normal, não um sinal de doença. Diferentes tecidos têm necessidades metabólicas diferentes e expressam genes diferentes em conformidade.",
      },
    },
    mode: "pattern_interpretation",
    difficulty: "medium",
    tags: ["transcriptomics", "tissue_specificity", "gene_expression"],
  },
  {
    id: "n2q5",
    round: 2,
    title: "Methodology: Publication Bias",
    titlePt: "Metodologia: Viés de Publicação",
    scenario:
      "A meta-analysis finds that published studies show 70% efficacy, but unpublished studies show 40%. What does this suggest?",
    scenarioPt:
      "Uma meta-análise encontra que estudos publicados mostram 70% de eficácia, mas estudos não publicados mostram 40%. O que isto sugere?",
    dataSignals: [
      { label: "PUBLISHED_EFFICACY", value: 70, unit: "%", state: "high", category: "biomarker" },
      { label: "UNPUBLISHED_EFFICACY", value: 40, unit: "%", state: "low", category: "biomarker" },
      { label: "PUBLICATION_BIAS", value: 30, unit: "%", state: "high", category: "biomarker" },
    ],
    answerOptions: [
      { id: "publication_bias", text: "Publication bias: positive results are more likely to be published", textPt: "Viés de publicação: resultados positivos têm mais probabilidade de ser publicados" },
      { id: "unpublished_wrong", text: "Unpublished studies must be methodologically flawed", textPt: "Estudos não publicados devem ser metodologicamente falhos" },
      { id: "true_efficacy_high", text: "The true efficacy is 70% as shown by published studies", textPt: "A verdadeira eficácia é 70% como mostrado por estudos publicados" },
    ],
    correctAnswerId: "publication_bias",
    explanation: "Publication bias occurs when positive results are more likely to be published than negative results, skewing the literature.",
    explanationPt: "Viés de publicação ocorre quando resultados positivos têm mais probabilidade de ser publicados que resultados negativos, distorcendo a literatura.",
    explanations: {
      publication_bias: {
        en: "Correct identification. This is classic publication bias. Journals preferentially publish positive results, so published literature overestimates true efficacy. The 40% from unpublished studies is likely closer to true efficacy.",
        pt: "Identificação correta. Este é viés de publicação clássico. Revistas publicam preferencialmente resultados positivos, então literatura publicada superestima eficácia verdadeira. Os 40% de estudos não publicados provavelmente estão mais próximos de eficácia verdadeira.",
      },
      unpublished_wrong: {
        en: "Incorrect assumption. Unpublished studies aren't necessarily flawed—they're often not published precisely because they show negative results. This is the definition of publication bias.",
        pt: "Suposição incorreta. Estudos não publicados não são necessariamente falhos—frequentemente não são publicados precisamente porque mostram resultados negativos. Esta é a definição de viés de publicação.",
      },
      true_efficacy_high: {
        en: "Overestimation. The published literature is biased toward positive results. The true efficacy is likely somewhere between 40-70%, closer to the unpublished average.",
        pt: "Superestimação. A literatura publicada é enviesada em direção a resultados positivos. A verdadeira eficácia é provavelmente em algum lugar entre 40-70%, mais próxima da média não publicada.",
      },
    },
    mode: "methodological_judgement",
    difficulty: "medium",
    tags: ["methodology", "publication_bias", "meta_analysis"],
  },
  {
    id: "n2q6",
    round: 2,
    title: "Clinical Decision: Rare Disease Treatment",
    titlePt: "Decisão Clínica: Tratamento de Doença Rara",
    scenario:
      "A patient with a rare disease has a biomarker that matches a new experimental treatment. The treatment has shown promise in 15 patients. What should you do?",
    scenarioPt:
      "Um paciente com doença rara tem um biomarcador que corresponde a um novo tratamento experimental. O tratamento mostrou promessa em 15 pacientes. O que deve fazer?",
    dataSignals: [
      { label: "BIOMARKER_MATCH", value: 95, unit: "%", state: "high", category: "biomarker" },
      { label: "SAMPLE_SIZE", value: 15, unit: "n", state: "low", category: "biomarker" },
      { label: "TREATMENT_SAFETY", value: 55, unit: "%", state: "medium", category: "biomarker" },
    ],
    answerOptions: [
      { id: "compassionate_use", text: "Consider compassionate use with informed consent and monitoring", textPt: "Considerar uso compassivo com consentimento informado e monitorização" },
      { id: "wait_more_data", text: "Wait for larger trials before offering treatment", textPt: "Esperar por ensaios maiores antes de oferecer tratamento" },
      { id: "standard_care", text: "Stick to standard care only", textPt: "Manter apenas cuidados padrão" },
    ],
    correctAnswerId: "compassionate_use",
    explanation: "For rare diseases with no standard treatment, compassionate use of promising experimental therapy is ethically justified when informed consent is obtained.",
    explanationPt: "Para doenças raras sem tratamento padrão, uso compassivo de terapia experimental promissora é eticamente justificado quando consentimento informado é obtido.",
    explanations: {
      compassionate_use: {
        en: "Correct ethical decision. For rare diseases with no standard treatment, compassionate use is justified. The strong biomarker match and promise in 15 patients supports this. Informed consent and careful monitoring are essential.",
        pt: "Decisão ética correta. Para doenças raras sem tratamento padrão, uso compassivo é justificado. A forte correspondência de biomarcador e promessa em 15 pacientes suporta isto. Consentimento informado e monitorização cuidadosa são essenciais.",
      },
      wait_more_data: {
        en: "May not be ethical for rare disease. Waiting for larger trials could mean the patient has no treatment options. Compassionate use is sometimes justified when standard options don't exist.",
        pt: "Pode não ser ético para doença rara. Esperar por ensaios maiores pode significar que o paciente não tem opções de tratamento. Uso compassivo às vezes é justificado quando opções padrão não existem.",
      },
      standard_care: {
        en: "Overly restrictive. If standard care doesn't exist for a rare disease, refusing a promising experimental option denies the patient their best chance. Compassionate use is appropriate here.",
        pt: "Excessivamente restritivo. Se cuidados padrão não existem para doença rara, recusar uma opção experimental promissora nega ao paciente sua melhor chance. Uso compassivo é apropriado aqui.",
      },
    },
    mode: "clinical_decision",
    difficulty: "medium",
    tags: ["clinical_decision", "rare_disease", "compassionate_use"],
  },
  {
    id: "n2q7",
    round: 2,
    title: "RNA Pattern: Batch Effect Detection",
    titlePt: "Padrão de RNA: Deteção de Efeito de Lote",
    scenario:
      "All samples from sequencing batch A show high expression of a gene, while batch B shows low. Patient demographics are similar. What is likely?",
    scenarioPt:
      "Todas as amostras do lote de sequenciação A mostram expressão elevada de um gene, enquanto lote B mostra baixa. Demografia de pacientes é similar. O que é provável?",
    dataSignals: [
      { label: "BATCH_A_EXPRESSION", value: 85, unit: "%", state: "high", category: "gene_expression" },
      { label: "BATCH_B_EXPRESSION", value: 15, unit: "%", state: "low", category: "gene_expression" },
      { label: "DEMOGRAPHIC_SIMILARITY", value: 92, unit: "%", state: "high", category: "biomarker" },
    ],
    answerOptions: [
      { id: "batch_effect", text: "This is likely a batch effect, not a biological difference", textPt: "Isto é provavelmente um efeito de lote, não uma diferença biológica" },
      { id: "biological_difference", text: "This represents a true biological difference between batches", textPt: "Isto representa uma verdadeira diferença biológica entre lotes" },
      { id: "measurement_error", text: "This indicates a measurement error in one batch", textPt: "Isto indica um erro de medição num lote" },
    ],
    correctAnswerId: "batch_effect",
    explanation: "When samples from different batches show systematic differences despite similar demographics, batch effects are the most likely explanation.",
    explanationPt: "Quando amostras de diferentes lotes mostram diferenças sistemáticas apesar de demografia similar, efeitos de lote são a explicação mais provável.",
    explanations: {
      batch_effect: {
        en: "Correct identification. Perfect separation by batch with similar demographics is classic batch effect. Different sequencing runs, reagent lots, or technicians can introduce systematic bias. This is not biological.",
        pt: "Identificação correta. Separação perfeita por lote com demografia similar é efeito de lote clássico. Diferentes execuções de sequenciação, lotes de reagentes, ou técnicos podem introduzir viés sistemático. Isto não é biológico.",
      },
      biological_difference: {
        en: "Unlikely. If demographics are similar, a true biological difference would be random, not perfectly separated by batch. Perfect batch separation indicates technical, not biological, effects.",
        pt: "Improvável. Se demografia é similar, uma verdadeira diferença biológica seria aleatória, não perfeitamente separada por lote. Separação perfeita de lote indica efeitos técnicos, não biológicos.",
      },
      measurement_error: {
        en: "Partially correct but imprecise. This is a systematic measurement error (batch effect), not random error. Batch effects are a known source of technical variation in sequencing.",
        pt: "Parcialmente correto mas impreciso. Isto é um erro de medição sistemático (efeito de lote), não erro aleatório. Efeitos de lote são uma fonte conhecida de variação técnica em sequenciação.",
      },
    },
    mode: "pattern_interpretation",
    difficulty: "medium",
    tags: ["transcriptomics", "batch_effect", "quality_control"],
  },
  {
    id: "n2q8",
    round: 2,
    title: "Methodology: Replication Crisis",
    titlePt: "Metodologia: Crise de Replicação",
    scenario:
      "A highly cited study cannot be replicated by independent labs. What does this suggest about the original findings?",
    scenarioPt:
      "Um estudo altamente citado não pode ser replicado por laboratórios independentes. O que isto sugere sobre os achados originais?",
    dataSignals: [
      { label: "CITATIONS", value: 95, unit: "%", state: "high", category: "biomarker" },
      { label: "REPLICATION_SUCCESS", value: 15, unit: "%", state: "low", category: "biomarker" },
      { label: "EFFECT_SIZE_ORIGINAL", value: 88, unit: "%", state: "high", category: "biomarker" },
    ],
    answerOptions: [
      { id: "false_positive", text: "The original findings may be false positives or overestimated", textPt: "Os achados originais podem ser falsos positivos ou superestimados" },
      { id: "replicators_wrong", text: "The replicators must be using wrong methods", textPt: "Os replicadores devem estar usando métodos errados" },
      { id: "citations_prove_validity", text: "High citations prove the findings are valid", textPt: "Citações elevadas provam que os achados são válidos" },
    ],
    correctAnswerId: "false_positive",
    explanation: "Failure to replicate suggests the original findings may have been false positives, p-hacking, or publication bias rather than true effects.",
    explanationPt: "Falha em replicar sugere que os achados originais podem ter sido falsos positivos, p-hacking, ou viés de publicação em vez de efeitos verdadeiros.",
    explanations: {
      false_positive: {
        en: "Correct assessment. Replication failure is strong evidence that original findings were false positives, p-hacked, or overestimated. This is the replication crisis in action. High citations don't validate false findings.",
        pt: "Avaliação correta. Falha de replicação é evidência forte de que achados originais foram falsos positivos, p-hacked, ou superestimados. Esta é a crise de replicação em ação. Citações elevadas não validam achados falsos.",
      },
      replicators_wrong: {
        en: "Unlikely excuse. Multiple independent labs failing to replicate suggests the problem is with the original study, not the replicators. Coordinated error across labs is improbable.",
        pt: "Desculpa improvável. Múltiplos laboratórios independentes falhando em replicar sugere que o problema é com o estudo original, não com os replicadores. Erro coordenado entre labs é improvável.",
      },
      citations_prove_validity: {
        en: "Misunderstanding of scientific validity. Citations reflect visibility, not truth. Many false findings get heavily cited before replication failures expose them. Replication is the true test of validity.",
        pt: "Compreensão errada de validade científica. Citações refletem visibilidade, não verdade. Muitos achados falsos são fortemente citados antes de falhas de replicação os exporem. Replicação é o verdadeiro teste de validade.",
      },
    },
    mode: "methodological_judgement",
    difficulty: "medium",
    tags: ["methodology", "replication", "false_positive"],
  },

  // ===== ROUND 3: EXPERT ANALYSIS (8 questions) =====
  {
    id: "n3q1",
    round: 3,
    title: "Advanced Pattern: Pseudotime Trajectory",
    titlePt: "Padrão Avançado: Trajetória de Pseudotempo",
    scenario:
      "Single-cell RNA data shows a clear trajectory from cell state A → B → C. What does this suggest?",
    scenarioPt:
      "Dados de RNA de célula única mostram uma trajetória clara de estado celular A → B → C. O que isto sugere?",
    dataSignals: [
      { label: "TRAJECTORY_CLARITY", value: 88, unit: "%", state: "high", category: "gene_expression" },
      { label: "CELL_STATE_A", value: 25, unit: "%", state: "low", category: "gene_expression" },
      { label: "CELL_STATE_C", value: 78, unit: "%", state: "high", category: "gene_expression" },
    ],
    answerOptions: [
      { id: "developmental_process", text: "A developmental or differentiation process", textPt: "Um processo de desenvolvimento ou diferenciação" },
      { id: "disease_progression", text: "Disease progression pathway", textPt: "Caminho de progressão da doença" },
      { id: "technical_artifact", text: "A technical artifact from data processing", textPt: "Um artefato técnico do processamento de dados" },
    ],
    correctAnswerId: "developmental_process",
    explanation: "Clear pseudotime trajectories in single-cell data typically represent developmental or differentiation processes.",
    explanationPt: "Trajetórias claras de pseudotempo em dados de célula única tipicamente representam processos de desenvolvimento ou diferenciação.",
    explanations: {
      developmental_process: {
        en: "Correct interpretation. Clear trajectories from A → B → C suggest an ordered developmental or differentiation process. This is the expected pattern when cells progress through developmental stages.",
        pt: "Interpretação correta. Trajetórias claras de A → B → C sugerem um processo ordenado de desenvolvimento ou diferenciação. Este é o padrão esperado quando células progridem através de estágios de desenvolvimento.",
      },
      disease_progression: {
        en: "Possible but requires additional evidence. While disease progression can show trajectories, developmental processes are more common. You would need clinical correlation to distinguish these.",
        pt: "Possível mas requer evidência adicional. Embora progressão da doença possa mostrar trajetórias, processos de desenvolvimento são mais comuns. Precisaria de correlação clínica para distinguir estes.",
      },
      technical_artifact: {
        en: "Unlikely. Clear pseudotime trajectories are robust biological signals, not artifacts. If it were an artifact, the trajectory would be random, not ordered.",
        pt: "Improvável. Trajetórias claras de pseudotempo são sinais biológicos robustos, não artefatos. Se fosse um artefato, a trajetória seria aleatória, não ordenada.",
      },
    },
    mode: "pattern_interpretation",
    difficulty: "medium",
    tags: ["single_cell", "pseudotime", "development"],
  },
  {
    id: "n3q2",
    round: 3,
    title: "Methodology: Multiple Testing Correction",
    titlePt: "Metodologia: Correção de Testes Múltiplos",
    scenario:
      "A study tests 20,000 genes for association with disease. Without correction, 1,000 show p<0.05. What is the concern?",
    scenarioPt:
      "Um estudo testa 20.000 genes para associação com doença. Sem correção, 1.000 mostram p<0,05. Qual é a preocupação?",
    dataSignals: [
      { label: "GENES_TESTED", value: 20000, unit: "n", state: "high", category: "biomarker" },
      { label: "SIGNIFICANT_RESULTS", value: 1000, unit: "n", state: "high", category: "biomarker" },
      { label: "MULTIPLE_TESTING_CORRECTION", value: 5, unit: "%", state: "low", category: "biomarker" },
    ],
    answerOptions: [
      { id: "false_positives", text: "Most results are likely false positives due to multiple testing", textPt: "A maioria dos resultados são provavelmente falsos positivos devido a testes múltiplos" },
      { id: "true_discoveries", text: "All 1,000 results are true discoveries", textPt: "Todos os 1.000 resultados são descobertas verdadeiras" },
      { id: "no_correction_needed", text: "Multiple testing correction is not necessary", textPt: "Correção de testes múltiplos não é necessária" },
    ],
    correctAnswerId: "false_positives",
    explanation: "With 20,000 tests and p<0.05, we expect 1,000 false positives by chance alone. Multiple testing correction is essential.",
    explanationPt: "Com 20.000 testes e p<0,05, esperamos 1.000 falsos positivos apenas por acaso. Correção de testes múltiplos é essencial.",
    explanations: {
      false_positives: {
        en: "Correct identification. By chance alone, 5% of 20,000 tests = 1,000 false positives. Without correction, you cannot distinguish true signals from noise. Bonferroni or FDR correction is essential.",
        pt: "Identificação correta. Apenas por acaso, 5% de 20.000 testes = 1.000 falsos positivos. Sem correção, não pode distinguir sinais verdadeiros de ruído. Correção de Bonferroni ou FDR é essencial.",
      },
      true_discoveries: {
        en: "Unlikely without correction. The expected false positive rate is exactly 1,000 by chance. Most of these 1,000 results are probably false positives, not true discoveries.",
        pt: "Improvável sem correção. A taxa de falso positivo esperada é exatamente 1.000 por acaso. A maioria destes 1.000 resultados são provavelmente falsos positivos, não descobertas verdadeiras.",
      },
      no_correction_needed: {
        en: "Incorrect. Multiple testing correction is absolutely necessary when testing thousands of hypotheses. Ignoring this leads to massive false positive rates.",
        pt: "Incorreto. Correção de testes múltiplos é absolutamente necessária ao testar milhares de hipóteses. Ignorar isto leva a taxas de falso positivo massivas.",
      },
    },
    mode: "methodological_judgement",
    difficulty: "medium",
    tags: ["statistics", "multiple_testing", "false_positive"],
  },
  {
    id: "n3q3",
    round: 3,
    title: "Clinical Translation: Biomarker Validation",
    titlePt: "Tradução Clínica: Validação de Biomarcador",
    scenario:
      "A biomarker predicts treatment response with 80% accuracy in the discovery cohort. What must happen before clinical use?",
    scenarioPt:
      "Um biomarcador prediz resposta ao tratamento com 80% de precisão na coorte de descoberta. O que deve acontecer antes do uso clínico?",
    dataSignals: [
      { label: "DISCOVERY_ACCURACY", value: 80, unit: "%", state: "high", category: "biomarker" },
      { label: "VALIDATION_COHORT", value: 0, unit: "%", state: "low", category: "biomarker" },
      { label: "CLINICAL_IMPLEMENTATION", value: 0, unit: "%", state: "low", category: "biomarker" },
    ],
    answerOptions: [
      { id: "independent_validation", text: "Validation in independent cohorts with prospective design", textPt: "Validação em coortes independentes com design prospetivo" },
      { id: "clinical_use_now", text: "Can be used clinically immediately", textPt: "Pode ser usado clinicamente imediatamente" },
      { id: "retrospective_only", text: "Retrospective validation is sufficient", textPt: "Validação retrospetiva é suficiente" },
    ],
    correctAnswerId: "independent_validation",
    explanation: "Biomarkers must be validated in independent cohorts with prospective design before clinical implementation.",
    explanationPt: "Biomarcadores devem ser validados em coortes independentes com design prospetivo antes de implementação clínica.",
    explanations: {
      independent_validation: {
        en: "Correct clinical translation pathway. Discovery cohort accuracy (80%) is promising but vulnerable to overfitting. Independent validation with prospective design is the gold standard before clinical use.",
        pt: "Caminho correto de tradução clínica. Precisão da coorte de descoberta (80%) é promissora mas vulnerável a sobreajuste. Validação independente com design prospetivo é o padrão ouro antes do uso clínico.",
      },
      clinical_use_now: {
        en: "Premature implementation. Using a discovery-cohort biomarker clinically without validation risks harming patients. Overfitting in discovery cohorts is common.",
        pt: "Implementação prematura. Usar um biomarcador de coorte de descoberta clinicamente sem validação arrisca prejudicar pacientes. Sobreajuste em coortes de descoberta é comum.",
      },
      retrospective_only: {
        en: "Insufficient. Retrospective validation is better than nothing but less rigorous than prospective validation. Prospective design prevents bias and ensures real-world applicability.",
        pt: "Insuficiente. Validação retrospetiva é melhor que nada mas menos rigorosa que validação prospetiva. Design prospetivo previne viés e garante aplicabilidade do mundo real.",
      },
    },
    mode: "clinical_decision",
    difficulty: "medium",
    tags: ["clinical_translation", "biomarker", "validation"],
  },
  {
    id: "n3q4",
    round: 3,
    title: "RNA Pattern: Immune Infiltration",
    titlePt: "Padrão de RNA: Infiltração Imunitária",
    scenario:
      "Tumor samples show high expression of immune checkpoint genes (PD-L1, CTLA4). What does this indicate?",
    scenarioPt:
      "Amostras de tumor mostram expressão elevada de genes de ponto de controlo imunitário (PD-L1, CTLA4). O que isto indica?",
    dataSignals: [
      { label: "PD_L1_EXPRESSION", value: 85, unit: "%", state: "high", category: "gene_expression" },
      { label: "CTLA4_EXPRESSION", value: 78, unit: "%", state: "high", category: "gene_expression" },
      { label: "IMMUNE_INFILTRATION", value: 82, unit: "%", state: "high", category: "immune" },
    ],
    answerOptions: [
      { id: "immune_infiltration", text: "Immune cells are infiltrating the tumor", textPt: "Células imunitárias estão infiltrando o tumor" },
      { id: "tumor_weakness", text: "The tumor is weak and dying", textPt: "O tumor é fraco e está morrendo" },
      { id: "immune_evasion", text: "The tumor is evading immune detection", textPt: "O tumor está evitando deteção imunitária" },
    ],
    correctAnswerId: "immune_infiltration",
    explanation: "High checkpoint gene expression indicates immune cells are present and attempting to attack the tumor, but are being suppressed.",
    explanationPt: "Expressão elevada de genes de ponto de controlo indica que células imunitárias estão presentes e tentando atacar o tumor, mas estão sendo suprimidas.",
    explanations: {
      immune_infiltration: {
        en: "Correct interpretation. High PD-L1 and CTLA4 expression indicates immune cells have infiltrated the tumor and are attempting attack. The tumor is expressing these checkpoint proteins to suppress the immune response.",
        pt: "Interpretação correta. Expressão elevada de PD-L1 e CTLA4 indica que células imunitárias infiltraram o tumor e estão tentando atacar. O tumor está expressando estas proteínas de ponto de controlo para suprimir a resposta imunitária.",
      },
      tumor_weakness: {
        en: "Misinterpretation. High checkpoint expression doesn't indicate weakness—it's an active immune suppression strategy. The tumor is actively fighting back against immune infiltration.",
        pt: "Má interpretação. Expressão elevada de ponto de controlo não indica fraqueza—é uma estratégia ativa de supressão imunitária. O tumor está ativamente lutando contra infiltração imunitária.",
      },
      immune_evasion: {
        en: "Partially correct but imprecise. The tumor isn't evading immune detection (immune cells are present). Rather, it's suppressing the immune response through checkpoint proteins.",
        pt: "Parcialmente correto mas impreciso. O tumor não está evitando deteção imunitária (células imunitárias estão presentes). Em vez disso, está suprimindo a resposta imunitária através de proteínas de ponto de controlo.",
      },
    },
    mode: "pattern_interpretation",
    difficulty: "medium",
    tags: ["transcriptomics", "immune_checkpoint", "tumor_biology"],
  },
  {
    id: "n3q5",
    round: 3,
    title: "Methodology: Confounding in Observational Studies",
    titlePt: "Metodologia: Confusão em Estudos Observacionais",
    scenario:
      "An observational study shows coffee drinkers have lower heart disease risk. But coffee drinkers also exercise more. What is the issue?",
    scenarioPt:
      "Um estudo observacional mostra que bebedores de café têm menor risco de doença cardíaca. Mas bebedores de café também exercem mais. Qual é o problema?",
    dataSignals: [
      { label: "COFFEE_BENEFIT", value: 35, unit: "%", state: "high", category: "biomarker" },
      { label: "EXERCISE_CORRELATION", value: 72, unit: "%", state: "high", category: "biomarker" },
      { label: "CONFOUNDING_CONTROL", value: 15, unit: "%", state: "low", category: "biomarker" },
    ],
    answerOptions: [
      { id: "exercise_confounding", text: "Exercise is a confounding variable; coffee may not be protective", textPt: "Exercício é uma variável de confusão; café pode não ser protetor" },
      { id: "coffee_works", text: "Coffee clearly protects against heart disease", textPt: "Café claramente protege contra doença cardíaca" },
      { id: "both_protective", text: "Both coffee and exercise are independently protective", textPt: "Ambos café e exercício são independentemente protetores" },
    ],
    correctAnswerId: "exercise_confounding",
    explanation: "Exercise is a confounding variable. Coffee drinkers may have lower heart disease risk due to exercise, not coffee.",
    explanationPt: "Exercício é uma variável de confusão. Bebedores de café podem ter menor risco de doença cardíaca devido a exercício, não café.",
    explanations: {
      exercise_confounding: {
        en: "Correct identification of confounding. The observed coffee benefit could be entirely due to exercise. Coffee drinkers exercise more, and exercise protects against heart disease. Without controlling for exercise, you cannot attribute the benefit to coffee.",
        pt: "Identificação correta de confusão. O benefício observado do café pode ser inteiramente devido a exercício. Bebedores de café exercem mais, e exercício protege contra doença cardíaca. Sem controlar para exercício, não pode atribuir o benefício ao café.",
      },
      coffee_works: {
        en: "Premature conclusion. The observed benefit could be entirely due to confounding. Observational studies cannot establish causation without controlling for confounders.",
        pt: "Conclusão prematura. O benefício observado pode ser inteiramente devido a confusão. Estudos observacionais não podem estabelecer causalidade sem controlar confundidores.",
      },
      both_protective: {
        en: "Possible but not demonstrated. The study doesn't show that coffee is independently protective. You would need to control for exercise statistically to determine if coffee has an independent effect.",
        pt: "Possível mas não demonstrado. O estudo não mostra que café é independentemente protetor. Precisaria controlar para exercício estatisticamente para determinar se café tem um efeito independente.",
      },
    },
    mode: "methodological_judgement",
    difficulty: "medium",
    tags: ["methodology", "confounding", "observational_study"],
  },
  {
    id: "n3q6",
    round: 3,
    title: "Clinical Translation: Precision Medicine",
    titlePt: "Tradução Clínica: Medicina de Precisão",
    scenario:
      "A precision medicine approach identifies a rare mutation in a patient's tumor. No approved drug targets this mutation. What should you do?",
    scenarioPt:
      "Uma abordagem de medicina de precisão identifica uma mutação rara no tumor de um paciente. Nenhum fármaco aprovado visa esta mutação. O que deve fazer?",
    dataSignals: [
      { label: "MUTATION_IDENTIFIED", value: 95, unit: "%", state: "high", category: "biomarker" },
      { label: "APPROVED_DRUGS", value: 0, unit: "%", state: "low", category: "biomarker" },
      { label: "EXPERIMENTAL_OPTIONS", value: 65, unit: "%", state: "high", category: "biomarker" },
    ],
    answerOptions: [
      { id: "experimental_trial", text: "Explore experimental drugs or clinical trials targeting this mutation", textPt: "Explorar fármacos experimentais ou ensaios clínicos visando esta mutação" },
      { id: "standard_care", text: "Use only standard chemotherapy", textPt: "Usar apenas quimioterapia padrão" },
      { id: "no_treatment", text: "No treatment options exist", textPt: "Nenhuma opção de tratamento existe" },
    ],
    correctAnswerId: "experimental_trial",
    explanation: "Precision medicine identifies actionable mutations. Even without approved drugs, experimental trials or off-label options may be available.",
    explanationPt: "Medicina de precisão identifica mutações acionáveis. Mesmo sem fármacos aprovados, ensaios experimentais ou opções off-label podem estar disponíveis.",
    explanations: {
      experimental_trial: {
        en: "Correct precision medicine approach. Identifying a rare, actionable mutation opens possibilities for experimental drugs or clinical trials. This is the promise of precision medicine—tailored treatment based on tumor genetics.",
        pt: "Abordagem correta de medicina de precisão. Identificar uma mutação rara e acionável abre possibilidades para fármacos experimentais ou ensaios clínicos. Esta é a promessa da medicina de precisão—tratamento personalizado com base em genética tumoral.",
      },
      standard_care: {
        en: "Missed opportunity. Standard chemotherapy may not be optimal for this patient. Precision medicine specifically aims to move beyond one-size-fits-all treatment.",
        pt: "Oportunidade perdida. Quimioterapia padrão pode não ser ótima para este paciente. Medicina de precisão especificamente visa ir além do tratamento único para todos.",
      },
      no_treatment: {
        en: "Incorrect. Even without approved drugs, experimental options exist. Precision medicine is advancing rapidly, and rare mutations often have emerging treatment options.",
        pt: "Incorreto. Mesmo sem fármacos aprovados, opções experimentais existem. Medicina de precisão está avançando rapidamente, e mutações raras frequentemente têm opções de tratamento emergentes.",
      },
    },
    mode: "clinical_decision",
    difficulty: "medium",
    tags: ["precision_medicine", "clinical_translation", "rare_mutation"],
  },
  {
    id: "n3q7",
    round: 3,
    title: "RNA Pattern: Stromal Contamination",
    titlePt: "Padrão de RNA: Contaminação Estromal",
    scenario:
      "Tumor samples show high expression of fibroblast markers (COL1A1, FAP). What does this suggest?",
    scenarioPt:
      "Amostras de tumor mostram expressão elevada de marcadores de fibroblasto (COL1A1, FAP). O que isto sugere?",
    dataSignals: [
      { label: "COL1A1_EXPRESSION", value: 88, unit: "%", state: "high", category: "gene_expression" },
      { label: "FAP_EXPRESSION", value: 82, unit: "%", state: "high", category: "gene_expression" },
      { label: "TUMOR_PURITY", value: 25, unit: "%", state: "low", category: "biomarker" },
    ],
    answerOptions: [
      { id: "stromal_contamination", text: "The sample contains significant stromal/fibroblast contamination", textPt: "A amostra contém contaminação significativa de estroma/fibroblasto" },
      { id: "tumor_fibroblasts", text: "The tumor cells themselves are expressing these markers", textPt: "As células tumorais em si estão expressando estes marcadores" },
      { id: "measurement_error", text: "This is a measurement error", textPt: "Isto é um erro de medição" },
    ],
    correctAnswerId: "stromal_contamination",
    explanation: "High fibroblast marker expression indicates stromal contamination rather than tumor cell expression.",
    explanationPt: "Expressão elevada de marcador de fibroblasto indica contaminação estromal em vez de expressão de célula tumoral.",
    explanations: {
      stromal_contamination: {
        en: "Correct interpretation. COL1A1 and FAP are fibroblast-specific markers. High expression indicates the sample contains significant stromal cells, not pure tumor. This is common in solid tumors.",
        pt: "Interpretação correta. COL1A1 e FAP são marcadores específicos de fibroblasto. Expressão elevada indica que a amostra contém células estromais significativas, não tumor puro. Isto é comum em tumores sólidos.",
      },
      tumor_fibroblasts: {
        en: "Unlikely. Tumor cells rarely express fibroblast-specific markers. High expression of these markers indicates the sample contains actual fibroblasts, not tumor cells.",
        pt: "Improvável. Células tumorais raramente expressam marcadores específicos de fibroblasto. Expressão elevada destes marcadores indica que a amostra contém fibroblastos reais, não células tumorais.",
      },
      measurement_error: {
        en: "Unlikely. Fibroblast markers are robust and well-validated. High expression is a specific biological signal, not random error.",
        pt: "Improvável. Marcadores de fibroblasto são robustos e bem validados. Expressão elevada é um sinal biológico específico, não erro aleatório.",
      },
    },
    mode: "pattern_interpretation",
    difficulty: "medium",
    tags: ["transcriptomics", "stromal_contamination", "tumor_purity"],
  },
  {
    id: "n3q8",
    round: 3,
    title: "Methodology: Ethical Review",
    titlePt: "Metodologia: Revisão Ética",
    scenario:
      "A researcher wants to study a rare disease by collecting data from patient social media without consent. Is this ethical?",
    scenarioPt:
      "Um investigador quer estudar uma doença rara recolhendo dados de redes sociais de pacientes sem consentimento. É isto ético?",
    dataSignals: [
      { label: "INFORMED_CONSENT", value: 0, unit: "%", state: "low", category: "biomarker" },
      { label: "DATA_SENSITIVITY", value: 95, unit: "%", state: "high", category: "biomarker" },
      { label: "PRIVACY_RISK", value: 88, unit: "%", state: "high", category: "biomarker" },
    ],
    answerOptions: [
      { id: "not_ethical", text: "Not ethical without informed consent and IRB approval", textPt: "Não ético sem consentimento informado e aprovação de IRB" },
      { id: "public_data", text: "Public data doesn't require consent", textPt: "Dados públicos não requerem consentimento" },
      { id: "rare_disease_exception", text: "Rare disease research is exempt from ethical review", textPt: "Investigação de doença rara está isenta de revisão ética" },
    ],
    correctAnswerId: "not_ethical",
    explanation: "All human subjects research requires informed consent and IRB approval, regardless of data source.",
    explanationPt: "Toda investigação com sujeitos humanos requer consentimento informado e aprovação de IRB, independentemente da fonte de dados.",
    explanations: {
      not_ethical: {
        en: "Correct ethical assessment. Even if data is publicly available, using it for research requires informed consent and IRB approval. Privacy and autonomy must be respected.",
        pt: "Avaliação ética correta. Mesmo que dados sejam publicamente disponíveis, usá-los para investigação requer consentimento informado e aprovação de IRB. Privacidade e autonomia devem ser respeitadas.",
      },
      public_data: {
        en: "Incorrect ethical reasoning. Public availability doesn't eliminate ethical obligations. Patients didn't consent to research use of their data. IRB approval is still required.",
        pt: "Raciocínio ético incorreto. Disponibilidade pública não elimina obrigações éticas. Pacientes não consentiram ao uso de pesquisa dos seus dados. Aprovação de IRB ainda é necessária.",
      },
      rare_disease_exception: {
        en: "Incorrect. No research is exempt from ethical review. Rare disease status doesn't override informed consent requirements. IRB review is mandatory.",
        pt: "Incorreto. Nenhuma investigação está isenta de revisão ética. Status de doença rara não substitui requisitos de consentimento informado. Revisão de IRB é obrigatória.",
      },
    },
    mode: "methodological_judgement",
    difficulty: "medium",
    tags: ["ethics", "informed_consent", "privacy"],
  },
];
