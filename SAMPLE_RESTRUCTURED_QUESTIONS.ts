/**
 * SAMPLE: Three restructured beginner questions showing all three modes
 * For user review before full regeneration
 */

import { Question } from "./shared/questions";

export const sampleRestructuredQuestions: Question[] = [
  // ===== PATTERN INTERPRETATION MODE =====
  {
    id: "b2q3",
    round: 2,
    title: "Pattern Recognition: All High",
    titlePt: "Reconhecimento de Padrões: Tudo Elevado",
    scenario:
      "Three different proteins all show high levels (85%, 90%, 88%). Based on this signature alone, what is the most likely interpretation?",
    scenarioPt:
      "Três proteínas diferentes mostram níveis elevados (85%, 90%, 88%). Com base apenas nesta assinatura, qual é a interpretação mais provável?",
    dataSignals: [
      { label: "PROTEIN_1", value: 85, unit: "%", state: "high", category: "biomarker" },
      { label: "PROTEIN_2", value: 90, unit: "%", state: "high", category: "biomarker" },
      { label: "PROTEIN_3", value: 88, unit: "%", state: "high", category: "biomarker" },
    ],
    answerOptions: [
      { id: "a1", text: "Multiple systems are very active in this patient", textPt: "Múltiplos sistemas estão muito ativos neste paciente" },
      { id: "a2", text: "The patient has no proteins at all", textPt: "O paciente não tem proteínas nenhumas" },
      { id: "a3", text: "The measurements are definitely wrong", textPt: "As medições estão definitivamente erradas" },
    ],
    correctAnswerId: "a1",
    // NEW: Per-answer explanations keyed by answer ID
    explanations: {
      a1: "Correct! When multiple proteins are all elevated, it indicates that several biological systems are working at high levels. This pattern is consistent with strong immune activity or other coordinated cellular responses. In this simplified model, the signature is clear enough to commit to this interpretation.",
      a1_pt: "Correto! Quando múltiplas proteínas estão todas elevadas, indica que vários sistemas biológicos estão a funcionar em níveis elevados. Este padrão é consistente com atividade imunitária forte ou outras respostas celulares coordenadas. Neste modelo simplificado, a assinatura é clara o suficiente para se comprometer com esta interpretação.",
      
      a2: "This answer misreads the data. The chart clearly shows three high values (85%, 90%, 88%), not zero. When you see elevated markers like these, the patient definitely has active proteins. The question asks what the pattern suggests — and the pattern clearly shows activity, not absence.",
      a2_pt: "Esta resposta interpreta mal os dados. O gráfico mostra claramente três valores elevados (85%, 90%, 88%), não zero. Quando vê marcadores elevados assim, o paciente definitivamente tem proteínas ativas. A pergunta pede o que o padrão sugere — e o padrão claramente mostra atividade, não ausência.",
      
      a3: "You're being overly cautious. While measurement error is always possible in real research, the three values are consistent with each other (85%, 90%, 88% are all in the high range). If there were a systematic error, we'd expect random scatter. The coherent pattern suggests real biology, not instrument failure. In this scenario, the data signature is clear enough to trust.",
      a3_pt: "Está a ser demasiado cauteloso. Embora o erro de medição seja sempre possível na investigação real, os três valores são consistentes um com o outro (85%, 90%, 88% estão todos no intervalo elevado). Se houvesse um erro sistemático, esperaríamos dispersão aleatória. O padrão coerente sugere biologia real, não falha do instrumento. Neste cenário, a assinatura dos dados é clara o suficiente para confiar.",
    },
    // FALLBACK: Keep old explanation field for backwards compatibility
    explanation:
      "Excellent observation! When multiple proteins are all elevated, it suggests that several biological systems are working at high levels. This could indicate strong immune activity or other important processes.",
    explanationPt:
      "Excelente observação! Quando múltiplas proteínas estão todas elevadas, sugere que vários sistemas biológicos estão a funcionar em níveis elevados. Isto pode indicar atividade imunitária forte ou outros processos importantes.",
    difficulty: "easy",
    tags: ["pattern_recognition", "data_interpretation"],
    mode: "pattern_interpretation", // NEW: Explicit mode tag
  },

  // ===== METHODOLOGICAL JUDGEMENT MODE =====
  {
    id: "b2q8",
    round: 2,
    title: "Uncertainty in Science",
    titlePt: "Incerteza na Ciência",
    scenario:
      "Scientists see a pattern in the data, but they're not 100% sure what it means. What should they do next to validate their observation?",
    scenarioPt:
      "Os cientistas veem um padrão nos dados, mas não têm 100% de certeza do que significa. O que devem fazer a seguir para validar a sua observação?",
    dataSignals: [],
    answerOptions: [
      { id: "validate", text: "Collect more data and do more experiments to confirm", textPt: "Recolher mais dados e fazer mais experiências para confirmar" },
      { id: "publish_early", text: "Publish their guess immediately", textPt: "Publicar a sua suposição imediatamente" },
      { id: "abandon", text: "Give up and stop researching", textPt: "Desistir e parar de investigar" },
    ],
    correctAnswerId: "validate",
    // NEW: Per-answer explanations keyed by actual answer IDs
    explanations: {
      validate: "Correct! This is exactly how real science works. When you find an interesting pattern but aren't completely certain, you design additional experiments to test your hypothesis. This iterative validation process — collecting more data, replicating results, checking for confounders — is the foundation of the scientific method. Caution here is not weakness; it's rigor.",
      validate_pt: "Correto! É exatamente assim que a ciência real funciona. Quando encontra um padrão interessante mas não tem certeza completa, desenha experiências adicionais para testar a sua hipótese. Este processo de validação iterativo — recolher mais dados, replicar resultados, verificar confundidores — é a base do método científico. A cautela aqui não é fraqueza; é rigor.",
      
      publish_early: "This would be premature and unethical. Publishing a guess without validation could mislead other researchers and waste resources on dead-end investigations. The scientific community expects evidence to be replicated and verified before publication. Rushing to publish an unconfirmed pattern damages credibility and trust.",
      publish_early_pt: "Isto seria prematuro e antiético. Publicar uma suposição sem validação pode enganar outros investigadores e desperdiçar recursos em investigações sem saída. A comunidade científica espera que as provas sejam replicadas e verificadas antes da publicação. Apressar-se a publicar um padrão não confirmado danifica a credibilidade e a confiança.",
      
      abandon: "Giving up too early means missing real discoveries. Science often involves uncertainty and requires persistence. The right response to uncertainty is not to abandon the work, but to design better experiments. Many major breakthroughs came from researchers who pushed through initial uncertainty by collecting more data and refining their methods.",
      abandon_pt: "Desistir demasiado cedo significa perder descobertas reais. A ciência frequentemente envolve incerteza e requer persistência. A resposta correta à incerteza não é abandonar o trabalho, mas desenhar melhores experiências. Muitos avanços importantes vieram de investigadores que ultrapassaram a incerteza inicial recolhendo mais dados e refinando os seus métodos.",
    },
    // FALLBACK
    explanation:
      "Perfect! This is how real science works. When you find something interesting but aren't sure, you design more experiments to test your ideas. This is called the scientific method.",
    explanationPt:
      "Perfeito! É assim que a ciência real funciona. Quando encontra algo interessante mas não tem certeza, desenha mais experiências para testar as suas ideias. Isto chama-se método científico.",
    difficulty: "easy",
    tags: ["scientific_method", "critical_thinking"],
    mode: "methodological_judgement", // NEW: Explicit mode tag
  },

  // ===== CLINICAL DECISION MODE =====
  {
    id: "b3q2",
    round: 3,
    title: "Early Detection",
    titlePt: "Detecção Precoce",
    scenario:
      "Scientists can now detect cancer biomarkers in blood tests before symptoms appear. Should this test be used to screen healthy people clinically?",
    scenarioPt:
      "Os cientistas agora podem detetar marcadores de cancro em testes de sangue antes dos sintomas aparecerem. Este teste deve ser usado para rastrear clinicamente pessoas saudáveis?",
    dataSignals: [],
    answerOptions: [
      { id: "yes_clinical", text: "Yes — early detection allows treatment before cancer spreads, improving outcomes", textPt: "Sim — a detecção precoce permite tratamento antes do cancro se espalhar, melhorando os resultados" },
      { id: "need_validation", text: "Not yet — we need more validation studies to confirm the test works reliably before clinical use", textPt: "Ainda não — precisamos de mais estudos de validação para confirmar que o teste funciona de forma fiável antes do uso clínico" },
      { id: "never", text: "Never — blood tests can't detect anything useful", textPt: "Nunca — os testes de sangue não podem detetar nada útil" },
    ],
    correctAnswerId: "need_validation",
    // NEW: Per-answer explanations keyed by actual answer IDs
    explanations: {
      yes_clinical: "This is too optimistic. While early detection *could* improve outcomes, gene expression patterns alone don't guarantee clinical benefit. Before deploying a screening test to healthy populations, you need: (1) prospective validation showing the test predicts clinical outcomes, (2) evidence that early treatment actually helps, (3) assessment of false positives and psychological harm, and (4) cost-benefit analysis. Jumping to clinical use without this evidence could harm people unnecessarily.",
      yes_clinical_pt: "Isto é demasiado otimista. Embora a detecção precoce *possa* melhorar os resultados, padrões de expressão génica sozinhos não garantem benefício clínico. Antes de implementar um teste de rastreio em populações saudáveis, precisa: (1) validação prospectiva mostrando que o teste prediz resultados clínicos, (2) evidência de que o tratamento precoce realmente ajuda, (3) avaliação de falsos positivos e dano psicológico, e (4) análise custo-benefício. Passar para uso clínico sem esta evidência pode prejudicar pessoas desnecessariamente.",
      
      need_validation: "Correct! This is the cautious, evidence-based approach. A biomarker that correlates with disease biology is promising, but clinical translation requires rigorous validation. You need prospective studies confirming the test predicts outcomes, evidence that early intervention helps, and assessment of harms (false positives, overtreatment, anxiety). This is not overcaution — it's the ethical standard for clinical medicine.",
      need_validation_pt: "Correto! Esta é a abordagem cautelosa e baseada em evidências. Um biomarcador que se correlaciona com a biologia da doença é promissor, mas a tradução clínica requer validação rigorosa. Precisa de estudos prospectivos confirmando que o teste prediz resultados, evidência de que a intervenção precoce ajuda, e avaliação de danos (falsos positivos, sobreratamento, ansiedade). Isto não é excesso de cautela — é o padrão ético da medicina clínica.",
      
      never: "This dismisses real progress. Blood tests have revolutionized medicine — they detect infections, measure organ function, and increasingly identify disease biomarkers. The issue isn't whether blood tests work; it's whether *this specific test* has been validated for clinical use. The answer depends on evidence, not blanket skepticism.",
      never_pt: "Isto descarta o progresso real. Os testes de sangue revolucionaram a medicina — detetam infecções, medem a função dos órgãos, e cada vez mais identificam biomarcadores de doença. A questão não é se os testes de sangue funcionam; é se *este teste específico* foi validado para uso clínico. A resposta depende de evidência, não de ceticismo generalizado.",
    },
    // FALLBACK
    explanation:
      "Perfect! Early detection is a game-changer. When cancer is caught early, treatment is often more effective and less invasive. This is why regular health check-ups are so important.",
    explanationPt:
      "Perfeito! A detecção precoce é uma mudança de jogo. Quando o cancro é detetado cedo, o tratamento é frequentemente mais eficaz e menos invasivo. É por isso que os check-ups de saúde regulares são tão importantes.",
    difficulty: "easy",
    tags: ["clinical_application", "evidence_based_medicine"],
    mode: "clinical_decision", // NEW: Explicit mode tag
  },
];
