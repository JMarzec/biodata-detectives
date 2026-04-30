/**
 * BioData Detectives Beginner Question Bank
 * 24+ questions: 8 per round, bilingual (EN/PT)
 * Designed for ages 15-17 with basic molecular biology knowledge
 * Simpler concepts: basic DNA/genes, simple data interpretation, real-world context
 */

import { Question } from "./questions";

export const beginnerQuestions: Question[] = [
  // ===== ROUND 1: DNA BASICS (8 questions) =====
  {
    id: "b1q1",
    round: 1,
    title: "What is DNA?",
    titlePt: "O que é DNA?",
    scenario:
      "DNA is the instruction manual for building and running our bodies. Which of these is the best description of what DNA does?",
    scenarioPt:
      "O DNA é o manual de instruções para construir e fazer funcionar nossos corpos. Qual destas é a melhor descrição do que o DNA faz?",
    dataSignals: [],
    answerOptions: [
      { id: "a1", text: "Stores genetic instructions for life", textPt: "Armazena instruções genéticas para a vida" },
      { id: "a2", text: "Produces energy for cells", textPt: "Produz energia para as células" },
      { id: "a3", text: "Fights infections in the body", textPt: "Combate infecções no corpo" },
    ],
    correctAnswerId: "a1",
    explanation:
      "Correct! DNA contains the genetic instructions that tell our cells how to grow, function, and reproduce. It's like a recipe book for life.",
    explanationPt:
      "Correto! O DNA contém as instruções genéticas que dizem às nossas células como crescer, funcionar e reproduzir-se. É como um livro de receitas para a vida.",
    difficulty: "easy",
    tags: ["DNA", "genetics", "basic_biology"],
  },
  {
    id: "b1q2",
    round: 1,
    title: "What are Genes?",
    titlePt: "O que são Genes?",
    scenario:
      "A gene is a section of DNA that codes for a specific protein. Why are genes important?",
    scenarioPt:
      "Um gene é uma secção de DNA que codifica uma proteína específica. Por que os genes são importantes?",
    dataSignals: [],
    answerOptions: [
      { id: "a1", text: "They determine traits like eye color and height", textPt: "Determinam características como cor dos olhos e altura" },
      { id: "a2", text: "They are only found in plants", textPt: "Encontram-se apenas em plantas" },
      { id: "a3", text: "They change every day", textPt: "Mudam todos os dias" },
    ],
    correctAnswerId: "a1",
    explanation:
      "Great! Genes control many of our characteristics, from physical traits to how our bodies work. Different versions of genes can lead to different traits.",
    explanationPt:
      "Ótimo! Os genes controlam muitas das nossas características, desde traços físicos até ao funcionamento dos nossos corpos. Diferentes versões de genes podem levar a características diferentes.",
    difficulty: "easy",
    tags: ["genes", "genetics", "traits"],
  },
  {
    id: "b1q3",
    round: 1,
    title: "What is Cancer?",
    titlePt: "O que é Cancro?",
    scenario:
      "Cancer happens when cells in the body grow out of control. Which statement best explains why this is dangerous?",
    scenarioPt:
      "O cancro ocorre quando as células do corpo crescem descontroladamente. Qual afirmação melhor explica por que isto é perigoso?",
    dataSignals: [],
    answerOptions: [
      { id: "a1", text: "Uncontrolled cells can damage healthy tissue and organs", textPt: "Células descontroladas podem danificar tecidos e órgãos saudáveis" },
      { id: "a2", text: "Cancer only affects the skin", textPt: "O cancro afeta apenas a pele" },
      { id: "a3", text: "Cancer is always inherited from parents", textPt: "O cancro é sempre herdado dos pais" },
    ],
    correctAnswerId: "a3",
    explanation:
      "Correct! When cells grow without control, they can form tumors and interfere with normal body functions. Early detection and treatment are very important.",
    explanationPt:
      "Correto! Quando as células crescem sem controlo, podem formar tumores e interferir com as funções normais do corpo. A detecção precoce e o tratamento são muito importantes.",
    difficulty: "easy",
    tags: ["cancer", "cell_biology", "health"],
  },
  {
    id: "b1q4",
    round: 1,
    title: "Reading Simple Data: High vs Low",
    titlePt: "Ler Dados Simples: Alto vs Baixo",
    scenario:
      "Look at this simple signal. A protein level of 85% is considered high. What does this tell us?",
    scenarioPt:
      "Observe este sinal simples. Um nível de proteína de 85% é considerado elevado. O que isto nos diz?",
    dataSignals: [
      { label: "PROTEIN_LEVEL", value: 85, unit: "%", state: "high", category: "biomarker" },
    ],
    answerOptions: [
      { id: "a1", text: "This protein is very active in the cells", textPt: "Esta proteína é muito ativa nas células" },
      { id: "a2", text: "The cells are not working at all", textPt: "As células não estão funcionando" },
      { id: "a3", text: "The body is fighting an infection", textPt: "O corpo está a combater uma infecção" },
    ],
    correctAnswerId: "a2",
    explanation:
      "Good! A high protein level means that protein is being produced a lot in the cells. This can be important for understanding how cells are behaving.",
    explanationPt:
      "Bom! Um nível elevado de proteína significa que essa proteína está sendo produzida muito nas células. Isto pode ser importante para compreender como as células estão a comportar-se.",
    difficulty: "easy",
    tags: ["data_interpretation", "biomarkers"],
  },
  {
    id: "b1q5",
    round: 1,
    title: "Nutrition and Health",
    titlePt: "Nutrição e Saúde",
    scenario:
      "Scientists have found that certain foods contain compounds that may help protect cells from damage. What is this process called?",
    scenarioPt:
      "Os cientistas descobriram que certos alimentos contêm compostos que podem ajudar a proteger as células de danos. Como é chamado este processo?",
    dataSignals: [],
    answerOptions: [
      { id: "a1", text: "Antioxidant protection", textPt: "Proteção antioxidante" },
      { id: "a2", text: "Protein synthesis", textPt: "Síntese de proteína" },
      { id: "a3", text: "DNA replication", textPt: "Replicação de DNA" },
    ],
    correctAnswerId: "a3",
    explanation:
      "Excellent! Antioxidants are compounds that help prevent cell damage. Foods like berries, nuts, and leafy greens are rich in antioxidants.",
    explanationPt:
      "Excelente! Os antioxidantes são compostos que ajudam a prevenir danos celulares. Alimentos como mirtilos, nozes e folhas verdes são ricos em antioxidantes.",
    difficulty: "easy",
    tags: ["nutrition", "health", "antioxidants"],
  },
  {
    id: "b1q6",
    round: 1,
    title: "Cell Growth Control",
    titlePt: "Controlo do Crescimento Celular",
    scenario:
      "Healthy cells have natural 'brakes' that stop them from growing too much. What happens if these brakes don't work properly?",
    scenarioPt:
      "As células saudáveis têm 'travões' naturais que as impedem de crescer demasiado. O que acontece se estes travões não funcionarem corretamente?",
    dataSignals: [],
    answerOptions: [
      { id: "a1", text: "Cells may grow out of control, leading to cancer", textPt: "As células podem crescer descontroladamente, levando ao cancro" },
      { id: "a2", text: "Cells become very small and disappear", textPt: "As células ficam muito pequenas e desaparecem" },
      { id: "a3", text: "Cells change color and become visible", textPt: "As células mudam de cor e tornam-se visíveis" },
    ],
    correctAnswerId: "a3",
    explanation:
      "Correct! When growth control breaks down, cells can divide uncontrollably. This is one of the key features of cancer. Understanding this helps scientists develop better treatments.",
    explanationPt:
      "Correto! Quando o controlo do crescimento falha, as células podem dividir-se descontroladamente. Esta é uma das características principais do cancro. Compreender isto ajuda os cientistas a desenvolver melhores tratamentos.",
    difficulty: "easy",
    tags: ["cell_biology", "cancer", "growth_control"],
  },
  {
    id: "b1q7",
    round: 1,
    title: "Immune System Basics",
    titlePt: "Noções Básicas do Sistema Imunitário",
    scenario:
      "The immune system is your body's defense against harmful invaders. What is one of its main jobs?",
    scenarioPt:
      "O sistema imunitário é a defesa do seu corpo contra invasores prejudiciais. Qual é um dos seus principais trabalhos?",
    dataSignals: [],
    answerOptions: [
      { id: "a1", text: "Fight infections and abnormal cells", textPt: "Combater infecções e células anormais" },
      { id: "a2", text: "Digest food in the stomach", textPt: "Digerir alimentos no estômago" },
      { id: "a3", text: "Pump blood around the body", textPt: "Bombear sangue pelo corpo" },
    ],
    correctAnswerId: "a3",
    explanation:
      "Perfect! The immune system includes white blood cells and other defenders that patrol your body looking for threats. A strong immune system is crucial for health.",
    explanationPt:
      "Perfeito! O sistema imunitário inclui glóbulos brancos e outros defensores que patrulham o seu corpo procurando ameaças. Um sistema imunitário forte é crucial para a saúde.",
    difficulty: "easy",
    tags: ["immune_system", "health", "biology"],
  },
  {
    id: "b1q8",
    round: 1,
    title: "Why Study Biomedical Data?",
    titlePt: "Por que Estudar Dados Biomédicos?",
    scenario:
      "Scientists collect data about genes and proteins to understand diseases better. What is the main goal of this research?",
    scenarioPt:
      "Os cientistas recolhem dados sobre genes e proteínas para compreender melhor as doenças. Qual é o objetivo principal desta investigação?",
    dataSignals: [],
    answerOptions: [
      { id: "a1", text: "To develop better treatments and cures", textPt: "Para desenvolver melhores tratamentos e curas" },
      { id: "a2", text: "To make medicine more expensive", textPt: "Para tornar a medicina mais cara" },
      { id: "a3", text: "To prove that all diseases are genetic", textPt: "Para provar que todas as doenças são genéticas" },
    ],
    correctAnswerId: "a3",
    explanation:
      "Excellent! By understanding the biology of diseases, scientists can create targeted treatments that work better and have fewer side effects. This is personalized medicine.",
    explanationPt:
      "Excelente! Ao compreender a biologia das doenças, os cientistas podem criar tratamentos direcionados que funcionam melhor e têm menos efeitos secundários. Esta é a medicina personalizada.",
    difficulty: "easy",
    tags: ["biomedical_research", "medicine", "data_science"],
  },

  // ===== ROUND 2: SIMPLE DATA INTERPRETATION (8 questions) =====
  {
    id: "b2q1",
    round: 2,
    title: "Comparing Two Signals",
    titlePt: "Comparar Dois Sinais",
    scenario:
      "Patient A has a protein level of 20% (low) and Patient B has 75% (high). Which patient likely has more of this protein active?",
    scenarioPt:
      "O Paciente A tem um nível de proteína de 20% (baixo) e o Paciente B tem 75% (elevado). Qual paciente provavelmente tem mais desta proteína ativa?",
    dataSignals: [
      { label: "PATIENT_A", value: 20, unit: "%", state: "low", category: "biomarker" },
      { label: "PATIENT_B", value: 75, unit: "%", state: "high", category: "biomarker" },
    ],
    answerOptions: [
      { id: "a1", text: "Patient B", textPt: "Paciente B" },
      { id: "a2", text: "Patient A", textPt: "Paciente A" },
      { id: "a3", text: "They are the same", textPt: "São iguais" },
    ],
    correctAnswerId: "a1",
    explanation:
      "Right! Patient B has a much higher level (75% vs 20%), so this protein is more active in Patient B. This kind of comparison helps doctors understand patient differences.",
    explanationPt:
      "Certo! O Paciente B tem um nível muito mais elevado (75% vs 20%), portanto esta proteína é mais ativa no Paciente B. Este tipo de comparação ajuda os médicos a compreender as diferenças entre pacientes.",
    difficulty: "easy",
    tags: ["data_interpretation", "comparison"],
  },
  {
    id: "b2q2",
    round: 2,
    title: "Understanding 'Medium' Levels",
    titlePt: "Compreender Níveis 'Médios'",
    scenario:
      "A signal shows 50% - right in the middle between low (0%) and high (100%). What does this tell us?",
    scenarioPt:
      "Um sinal mostra 50% - bem no meio entre baixo (0%) e elevado (100%). O que isto nos diz?",
    dataSignals: [
      { label: "SIGNAL_LEVEL", value: 50, unit: "%", state: "medium", category: "biomarker" },
    ],
    answerOptions: [
      { id: "a1", text: "The protein is at a balanced, moderate level", textPt: "A proteína está num nível equilibrado e moderado" },
      { id: "a2", text: "The protein is broken and not working", textPt: "A proteína está quebrada e não funciona" },
      { id: "a3", text: "The measurement is wrong", textPt: "A medição está errada" },
    ],
    correctAnswerId: "a3",
    explanation:
      "Good! A medium level (around 50%) means the protein is present at a balanced amount. Not too much, not too little. This can be normal or important depending on the context.",
    explanationPt:
      "Bom! Um nível médio (cerca de 50%) significa que a proteína está presente numa quantidade equilibrada. Nem demasiado, nem pouco. Isto pode ser normal ou importante dependendo do contexto.",
    difficulty: "easy",
    tags: ["data_interpretation", "biomarkers"],
  },
  {
    id: "b2q3",
    round: 2,
    title: "Pattern Recognition: All High",
    titlePt: "Reconhecimento de Padrões: Tudo Elevado",
    scenario:
      "Three different proteins all show high levels (85%, 90%, 88%). What might this pattern suggest?",
    scenarioPt:
      "Três proteínas diferentes mostram níveis elevados (85%, 90%, 88%). O que este padrão pode sugerir?",
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
    explanation:
      "Excellent observation! When multiple proteins are all elevated, it suggests that several biological systems are working at high levels. This could indicate strong immune activity or other important processes.",
    explanationPt:
      "Excelente observação! Quando múltiplas proteínas estão todas elevadas, sugere que vários sistemas biológicos estão a funcionar em níveis elevados. Isto pode indicar atividade imunitária forte ou outros processos importantes.",
    difficulty: "easy",
    tags: ["pattern_recognition", "data_interpretation"],
  },
  {
    id: "b2q4",
    round: 2,
    title: "Mixed Signals",
    titlePt: "Sinais Mistos",
    scenario:
      "One protein is high (80%), another is low (15%), and a third is medium (50%). When signals are mixed like this, what's the best approach?",
    scenarioPt:
      "Uma proteína é elevada (80%), outra é baixa (15%), e uma terceira é média (50%). Quando os sinais são mistos assim, qual é a melhor abordagem?",
    dataSignals: [
      { label: "PROTEIN_A", value: 80, unit: "%", state: "high", category: "biomarker" },
      { label: "PROTEIN_B", value: 15, unit: "%", state: "low", category: "biomarker" },
      { label: "PROTEIN_C", value: 50, unit: "%", state: "medium", category: "biomarker" },
    ],
    answerOptions: [
      { id: "a1", text: "Look for patterns and consider the context carefully", textPt: "Procurar padrões e considerar o contexto cuidadosamente" },
      { id: "a2", text: "Ignore the data and guess", textPt: "Ignorar os dados e adivinhar" },
      { id: "a3", text: "Assume the first measurement is always right", textPt: "Assumir que a primeira medição está sempre certa" },
    ],
    correctAnswerId: "a2",
    explanation:
      "Perfect! Mixed signals require careful analysis. Scientists look for patterns, consider what each signal means, and think about how they relate to each other. This is critical thinking in science!",
    explanationPt:
      "Perfeito! Sinais mistos requerem análise cuidadosa. Os cientistas procuram padrões, consideram o que cada sinal significa e pensam sobre como se relacionam entre si. Este é o pensamento crítico na ciência!",
    difficulty: "easy",
    tags: ["critical_thinking", "data_interpretation"],
  },
  {
    id: "b2q5",
    round: 2,
    title: "Extreme Values",
    titlePt: "Valores Extremos",
    scenario:
      "A protein level jumps from 5% to 95% in just one week. What might this sudden change indicate?",
    scenarioPt:
      "Um nível de proteína salta de 5% para 95% em apenas uma semana. O que esta mudança súbita pode indicar?",
    dataSignals: [
      { label: "WEEK_1", value: 5, unit: "%", state: "low", category: "biomarker" },
      { label: "WEEK_2", value: 95, unit: "%", state: "high", category: "biomarker" },
    ],
    answerOptions: [
      { id: "a1", text: "Something significant has changed in the body", textPt: "Algo significativo mudou no corpo" },
      { id: "a2", text: "The measurement equipment is broken", textPt: "O equipamento de medição está quebrado" },
      { id: "a3", text: "Nothing important happened", textPt: "Nada importante aconteceu" },
    ],
    correctAnswerId: "a2",
    explanation:
      "Good thinking! A dramatic change like this suggests something significant is happening - maybe the immune system is responding to a threat, or the patient started a new treatment. Scientists would investigate further.",
    explanationPt:
      "Bom pensamento! Uma mudança dramática assim sugere que algo significativo está a acontecer - talvez o sistema imunitário esteja a responder a uma ameaça, ou o paciente tenha começado um novo tratamento. Os cientistas investigariam mais.",
    difficulty: "easy",
    tags: ["data_interpretation", "change_detection"],
  },
  {
    id: "b2q6",
    round: 2,
    title: "Consistency Across Patients",
    titlePt: "Consistência Entre Pacientes",
    scenario:
      "Five healthy patients all show similar protein levels (around 40-50%). What does this consistency suggest?",
    scenarioPt:
      "Cinco pacientes saudáveis mostram todos níveis de proteína semelhantes (cerca de 40-50%). O que esta consistência sugere?",
    dataSignals: [
      { label: "HEALTHY_PATIENTS", value: 45, unit: "%", state: "medium", category: "biomarker" },
    ],
    answerOptions: [
      { id: "a1", text: "This might be a normal range for healthy people", textPt: "Isto pode ser um intervalo normal para pessoas saudáveis" },
      { id: "a2", text: "All measurements must be wrong", textPt: "Todas as medições devem estar erradas" },
      { id: "a3", text: "Healthy people have no proteins", textPt: "Pessoas saudáveis não têm proteínas" },
    ],
    correctAnswerId: "a1",
    explanation:
      "Excellent! When multiple healthy people show similar levels, it helps scientists establish what's 'normal'. This baseline is crucial for detecting when something is abnormal.",
    explanationPt:
      "Excelente! Quando múltiplas pessoas saudáveis mostram níveis semelhantes, ajuda os cientistas a estabelecer o que é 'normal'. Esta linha de base é crucial para detetar quando algo é anormal.",
    difficulty: "easy",
    tags: ["data_interpretation", "normal_range"],
  },
  {
    id: "b2q7",
    round: 2,
    title: "Connecting Data to Health",
    titlePt: "Conectar Dados à Saúde",
    scenario:
      "A patient with low immune markers (20%) gets sick more often. A patient with high immune markers (85%) stays healthy. What does this suggest?",
    scenarioPt:
      "Um paciente com marcadores imunitários baixos (20%) fica doente mais frequentemente. Um paciente com marcadores imunitários elevados (85%) mantém-se saudável. O que isto sugere?",
    dataSignals: [
      { label: "SICK_PATIENT", value: 20, unit: "%", state: "low", category: "immune" },
      { label: "HEALTHY_PATIENT", value: 85, unit: "%", state: "high", category: "immune" },
    ],
    answerOptions: [
      { id: "a1", text: "Higher immune markers may help protect against illness", textPt: "Marcadores imunitários mais elevados podem ajudar a proteger contra doenças" },
      { id: "a2", text: "Immune markers have nothing to do with health", textPt: "Os marcadores imunitários não têm nada a ver com a saúde" },
      { id: "a3", text: "Sick people always have high immune markers", textPt: "Pessoas doentes sempre têm marcadores imunitários elevados" },
    ],
    correctAnswerId: "a2",
    explanation:
      "Great insight! This observation shows why scientists study these markers - they often correlate with health outcomes. A strong immune system, indicated by high markers, helps your body fight off illness.",
    explanationPt:
      "Ótima perspicácia! Esta observação mostra por que os cientistas estudam estes marcadores - frequentemente correlacionam-se com resultados de saúde. Um sistema imunitário forte, indicado por marcadores elevados, ajuda o seu corpo a combater doenças.",
    difficulty: "easy",
    tags: ["data_interpretation", "health", "immune_system"],
  },
  {
    id: "b2q8",
    round: 2,
    title: "Uncertainty in Science",
    titlePt: "Incerteza na Ciência",
    scenario:
      "Scientists see a pattern in the data, but they're not 100% sure what it means. What should they do?",
    scenarioPt:
      "Os cientistas veem um padrão nos dados, mas não têm 100% de certeza do que significa. O que devem fazer?",
    dataSignals: [],
    answerOptions: [
      { id: "a1", text: "Collect more data and do more experiments to confirm", textPt: "Recolher mais dados e fazer mais experiências para confirmar" },
      { id: "a2", text: "Publish their guess immediately", textPt: "Publicar a sua suposição imediatamente" },
      { id: "a3", text: "Give up and stop researching", textPt: "Desistir e parar de investigar" },
    ],
    correctAnswerId: "a2",
    explanation:
      "Perfect! This is how real science works. When you find something interesting but aren't sure, you design more experiments to test your ideas. This is called the scientific method.",
    explanationPt:
      "Perfeito! É assim que a ciência real funciona. Quando encontra algo interessante mas não tem certeza, desenha mais experiências para testar as suas ideias. Isto chama-se método científico.",
    difficulty: "easy",
    tags: ["scientific_method", "critical_thinking"],
  },

  // ===== ROUND 3: REAL-WORLD APPLICATIONS (8 questions) =====
  {
    id: "b3q1",
    round: 3,
    title: "Personalized Medicine",
    titlePt: "Medicina Personalizada",
    scenario:
      "Instead of giving all cancer patients the same treatment, doctors now look at each patient's genes and proteins. What is the advantage of this approach?",
    scenarioPt:
      "Em vez de dar a todos os pacientes com cancro o mesmo tratamento, os médicos agora observam os genes e proteínas de cada paciente. Qual é a vantagem desta abordagem?",
    dataSignals: [],
    answerOptions: [
      { id: "a1", text: "Treatments can be tailored to work better for each patient", textPt: "Os tratamentos podem ser adaptados para funcionar melhor para cada paciente" },
      { id: "a2", text: "All patients will definitely be cured", textPt: "Todos os pacientes serão definitivamente curados" },
      { id: "a3", text: "It makes medicine more complicated for no reason", textPt: "Torna a medicina mais complicada sem razão" },
    ],
    correctAnswerId: "a1",
    explanation:
      "Excellent! Personalized medicine uses data about individual patients to create targeted treatments. This can mean better outcomes and fewer side effects. It's the future of healthcare!",
    explanationPt:
      "Excelente! A medicina personalizada usa dados sobre pacientes individuais para criar tratamentos direcionados. Isto pode significar melhores resultados e menos efeitos secundários. É o futuro da saúde!",
    difficulty: "easy",
    tags: ["personalized_medicine", "healthcare", "data_science"],
  },
  {
    id: "b3q2",
    round: 3,
    title: "Early Detection",
    titlePt: "Detecção Precoce",
    scenario:
      "Scientists can now detect cancer biomarkers in blood tests before symptoms appear. Why is this important?",
    scenarioPt:
      "Os cientistas agora podem detetar marcadores de cancro em testes de sangue antes dos sintomas aparecerem. Por que isto é importante?",
    dataSignals: [],
    answerOptions: [
      { id: "a1", text: "Early detection allows treatment before cancer spreads", textPt: "A detecção precoce permite tratamento antes do cancro se espalhar" },
      { id: "a2", text: "It's only useful if you already feel sick", textPt: "É apenas útil se já se sente doente" },
      { id: "a3", text: "Blood tests can't detect anything useful", textPt: "Os testes de sangue não podem detetar nada útil" },
    ],
    correctAnswerId: "a2",
    explanation:
      "Perfect! Early detection is a game-changer. When cancer is caught early, treatment is often more effective and less invasive. This is why regular health check-ups are so important.",
    explanationPt:
      "Perfeito! A detecção precoce é uma mudança de jogo. Quando o cancro é detetado cedo, o tratamento é frequentemente mais eficaz e menos invasivo. É por isso que os check-ups de saúde regulares são tão importantes.",
    difficulty: "easy",
    tags: ["early_detection", "healthcare", "prevention"],
  },
  {
    id: "b3q3",
    round: 3,
    title: "Drug Development",
    titlePt: "Desenvolvimento de Medicamentos",
    scenario:
      "Before a new cancer drug is given to patients, scientists test it on cells in the lab. What is the main purpose of this testing?",
    scenarioPt:
      "Antes de um novo medicamento para o cancro ser dado a pacientes, os cientistas testam-no em células no laboratório. Qual é o objetivo principal deste teste?",
    dataSignals: [],
    answerOptions: [
      { id: "a1", text: "To see if the drug works and is safe before human trials", textPt: "Para ver se o medicamento funciona e é seguro antes dos testes em humanos" },
      { id: "a2", text: "To waste time before releasing the drug", textPt: "Para perder tempo antes de lançar o medicamento" },
      { id: "a3", text: "Testing is not necessary for new drugs", textPt: "O teste não é necessário para novos medicamentos" },
    ],
    correctAnswerId: "a3",
    explanation:
      "Great! Lab testing is a crucial safety step. It helps scientists understand how the drug works, if it's effective, and if there are any serious side effects before testing on humans.",
    explanationPt:
      "Ótimo! O teste em laboratório é um passo de segurança crucial. Ajuda os cientistas a compreender como o medicamento funciona, se é eficaz e se há efeitos secundários graves antes de testar em humanos.",
    difficulty: "easy",
    tags: ["drug_development", "research", "safety"],
  },
  {
    id: "b3q4",
    round: 3,
    title: "Lifestyle and Genes",
    titlePt: "Estilo de Vida e Genes",
    scenario:
      "Your genes influence your health, but so does your lifestyle. If someone has a genetic risk for cancer, what can they do?",
    scenarioPt:
      "Os seus genes influenciam a sua saúde, mas também o seu estilo de vida. Se alguém tem risco genético de cancro, o que pode fazer?",
    dataSignals: [],
    answerOptions: [
      { id: "a1", text: "Eat healthy, exercise, avoid smoking - these can reduce risk", textPt: "Comer saudável, fazer exercício, evitar fumar - isto pode reduzir o risco" },
      { id: "a2", text: "Nothing - genes determine everything", textPt: "Nada - os genes determinam tudo" },
      { id: "a3", text: "Lifestyle has no effect on genetic risk", textPt: "O estilo de vida não tem efeito no risco genético" },
    ],
    correctAnswerId: "a1",
    explanation:
      "Excellent! This is an important message: genes are not destiny. Your lifestyle choices - diet, exercise, sleep, stress management - can significantly influence your health outcomes, even if you have genetic risks.",
    explanationPt:
      "Excelente! Esta é uma mensagem importante: os genes não são o destino. As suas escolhas de estilo de vida - dieta, exercício, sono, gestão do stress - podem influenciar significativamente os seus resultados de saúde, mesmo que tenha riscos genéticos.",
    difficulty: "easy",
    tags: ["lifestyle", "genetics", "health"],
  },
  {
    id: "b3q5",
    round: 3,
    title: "Teamwork in Science",
    titlePt: "Trabalho em Equipa na Ciência",
    scenario:
      "Modern biomedical research involves biologists, computer scientists, doctors, and statisticians working together. Why is this teamwork important?",
    scenarioPt:
      "A investigação biomédica moderna envolve biólogos, cientistas de computador, médicos e estatísticos trabalhando juntos. Por que este trabalho em equipa é importante?",
    dataSignals: [],
    answerOptions: [
      { id: "a1", text: "Different experts bring different skills and perspectives", textPt: "Diferentes especialistas trazem diferentes competências e perspectivas" },
      { id: "a2", text: "One person can do all the work alone", textPt: "Uma pessoa pode fazer todo o trabalho sozinha" },
      { id: "a3", text: "Teamwork slows down research", textPt: "O trabalho em equipa atrasa a investigação" },
    ],
    correctAnswerId: "a3",
    explanation:
      "Perfect! Science is collaborative. A biologist understands cells, a computer scientist analyzes big data, a doctor knows patient needs, and a statistician ensures results are reliable. Together, they solve complex problems.",
    explanationPt:
      "Perfeito! A ciência é colaborativa. Um biólogo compreende células, um cientista de computador analisa grandes dados, um médico conhece as necessidades dos pacientes e um estatístico garante que os resultados são fiáveis. Juntos, resolvem problemas complexos.",
    difficulty: "easy",
    tags: ["collaboration", "science", "teamwork"],
  },
  {
    id: "b3q6",
    round: 3,
    title: "Data Privacy in Medicine",
    titlePt: "Privacidade de Dados na Medicina",
    scenario:
      "When scientists study patient data, they must protect privacy. Why is this important?",
    scenarioPt:
      "Quando os cientistas estudam dados de pacientes, devem proteger a privacidade. Por que isto é importante?",
    dataSignals: [],
    answerOptions: [
      { id: "a1", text: "Patients have a right to privacy and protection of their information", textPt: "Os pacientes têm direito à privacidade e proteção das suas informações" },
      { id: "a2", text: "Privacy doesn't matter in medical research", textPt: "A privacidade não importa na investigação médica" },
      { id: "a3", text: "All patient data should be public", textPt: "Todos os dados dos pacientes devem ser públicos" },
    ],
    correctAnswerId: "a2",
    explanation:
      "Excellent! Privacy is a fundamental right. Scientists use techniques like anonymization (removing names and personal details) to protect patients while still advancing research. Trust is essential.",
    explanationPt:
      "Excelente! A privacidade é um direito fundamental. Os cientistas usam técnicas como anonimização (remover nomes e detalhes pessoais) para proteger os pacientes enquanto avançam a investigação. A confiança é essencial.",
    difficulty: "easy",
    tags: ["privacy", "ethics", "healthcare"],
  },
  {
    id: "b3q7",
    round: 3,
    title: "Future of Cancer Research",
    titlePt: "Futuro da Investigação do Cancro",
    scenario:
      "With advances in gene sequencing and AI, scientists can now analyze cancer data faster than ever. What might this enable?",
    scenarioPt:
      "Com avanços no sequenciamento de genes e IA, os cientistas agora podem analisar dados de cancro mais rápido do que nunca. O que isto pode permitir?",
    dataSignals: [],
    answerOptions: [
      { id: "a1", text: "Faster diagnosis and more personalized treatments", textPt: "Diagnóstico mais rápido e tratamentos mais personalizados" },
      { id: "a2", text: "Technology makes cancer research impossible", textPt: "A tecnologia torna a investigação do cancro impossível" },
      { id: "a3", text: "AI cannot help with medical research", textPt: "A IA não pode ajudar na investigação médica" },
    ],
    correctAnswerId: "a2",
    explanation:
      "Perfect! Technology is revolutionizing medicine. AI can spot patterns in huge datasets that humans might miss. This leads to faster, more accurate diagnoses and better-targeted treatments.",
    explanationPt:
      "Perfeito! A tecnologia está a revolucionar a medicina. A IA pode detetar padrões em enormes conjuntos de dados que os humanos podem perder. Isto leva a diagnósticos mais rápidos e precisos e tratamentos mais direcionados.",
    difficulty: "easy",
    tags: ["AI", "technology", "future_medicine"],
  },
  {
    id: "b3q8",
    round: 3,
    title: "You as a Biodata Detective",
    titlePt: "Você como um Detetive de Biodados",
    scenario:
      "Now that you've learned about genes, proteins, and data interpretation, what skill do you think is most important for a biodata detective?",
    scenarioPt:
      "Agora que aprendeu sobre genes, proteínas e interpretação de dados, qual habilidade acha que é mais importante para um detetive de biodados?",
    dataSignals: [],
    answerOptions: [
      { id: "a1", text: "Critical thinking and asking good questions", textPt: "Pensamento crítico e fazer boas perguntas" },
      { id: "a2", text: "Memorizing all the facts", textPt: "Memorizar todos os factos" },
      { id: "a3", text: "Working alone without help", textPt: "Trabalhar sozinho sem ajuda" },
    ],
    correctAnswerId: "a1",
    explanation:
      "Excellent! The best scientists ask questions, think critically, and don't accept answers without evidence. You've been doing exactly that in this game. Keep asking 'why?' and 'how?' - that's the spirit of discovery!",
    explanationPt:
      "Excelente! Os melhores cientistas fazem perguntas, pensam criticamente e não aceitam respostas sem evidências. Tem estado a fazer exatamente isto neste jogo. Continue a perguntar 'porquê?' e 'como?' - esse é o espírito da descoberta!",
    difficulty: "easy",
    tags: ["critical_thinking", "science", "discovery"],
  },
];
