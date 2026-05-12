/**
 * BioData Detectives Beginner Question Bank (Regenerated)
 * 24 questions: 8 per round, bilingual (EN/PT)
 * Designed for ages 15-17 with basic molecular biology knowledge
 * 
 * STRUCTURE: Each question has per-answer explanations keyed by semantic answer IDs
 * MODES: Pattern interpretation, Methodological judgement, Clinical decision
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
      "DNA is the instruction manual for building and running our bodies. Based on this description, which statement best captures what DNA does?",
    scenarioPt:
      "O DNA é o manual de instruções para construir e fazer funcionar nossos corpos. Com base nesta descrição, qual afirmação melhor descreve o que o DNA faz?",
    dataSignals: [],
    answerOptions: [
      { id: "stores_instructions", text: "Stores genetic instructions for life", textPt: "Armazena instruções genéticas para a vida" },
      { id: "produces_energy", text: "Produces energy for cells", textPt: "Produz energia para as células" },
      { id: "fights_infections", text: "Fights infections in the body", textPt: "Combate infecções no corpo" },
    ],
    correctAnswerId: "stores_instructions",
    explanation:
      "Correct! DNA contains the genetic instructions that tell our cells how to grow, function, and reproduce. It's like a recipe book for life.",
    explanationPt:
      "Correto! O DNA contém as instruções genéticas que dizem às nossas células como crescer, funcionar e reproduzir-se. É como um livro de receitas para a vida.",
    explanations: {
      stores_instructions: {
        en: "Correct! DNA contains the genetic instructions that tell our cells how to grow, function, and reproduce. It's like a recipe book for life. Every protein your body makes starts with instructions written in DNA.",
        pt: "Correto! O DNA contém as instruções genéticas que dizem às nossas células como crescer, funcionar e reproduzir-se. É como um livro de receitas para a vida. Cada proteína que o seu corpo produz começa com instruções escritas em DNA.",
      },
      produces_energy: {
        en: "Not quite. While DNA is essential for life, it doesn't directly produce energy. That's the job of mitochondria. DNA provides the instructions for making the proteins that help cells produce energy.",
        pt: "Não exatamente. Embora o DNA seja essencial para a vida, não produz energia diretamente. Esse é o trabalho das mitocôndrias. O DNA fornece as instruções para fazer as proteínas que ajudam as células a produzir energia.",
      },
      fights_infections: {
        en: "Not quite. While DNA does code for immune proteins, it doesn't directly fight infections. That's the job of your immune system. DNA provides the instructions for making the immune cells and antibodies that fight infections.",
        pt: "Não exatamente. Embora o DNA codifique proteínas imunitárias, não combate infecções diretamente. Esse é o trabalho do seu sistema imunitário. O DNA fornece as instruções para fazer as células imunitárias e anticorpos que combatem infecções.",
      },
    },
    difficulty: "easy",
    mode: "pattern_interpretation",
    tags: ["DNA", "genetics", "basic_biology"],
  },
  {
    id: "b1q2",
    round: 1,
    title: "What are Genes?",
    titlePt: "O que são Genes?",
    scenario:
      "A gene is a section of DNA that codes for a specific protein. Based on this definition, what is the main role of genes?",
    scenarioPt:
      "Um gene é uma secção de DNA que codifica uma proteína específica. Com base nesta definição, qual é o papel principal dos genes?",
    dataSignals: [],
    answerOptions: [
      { id: "determine_traits", text: "They determine traits like eye color and height", textPt: "Determinam características como cor dos olhos e altura" },
      { id: "only_in_plants", text: "They are only found in plants", textPt: "Encontram-se apenas em plantas" },
      { id: "change_daily", text: "They change every day", textPt: "Mudam todos os dias" },
    ],
    correctAnswerId: "determine_traits",
    explanation:
      "Great! Genes control many of our characteristics, from physical traits to how our bodies work. Different versions of genes can lead to different traits.",
    explanationPt:
      "Ótimo! Os genes controlam muitas das nossas características, desde traços físicos até ao funcionamento dos nossos corpos. Diferentes versões de genes podem levar a características diferentes.",
    explanations: {
      determine_traits: {
        en: "Correct! Genes code for proteins that determine our physical traits and how our bodies function. Your genes influence everything from eye color to height to how your immune system works. This is why family members often share similar traits.",
        pt: "Correto! Os genes codificam proteínas que determinam os nossos traços físicos e como o nosso corpo funciona. Os seus genes influenciam tudo, desde a cor dos olhos até à altura e como o seu sistema imunitário funciona. É por isso que os membros da família muitas vezes partilham características semelhantes.",
      },
      only_in_plants: {
        en: "Not quite. All living things have genes—not just plants. Humans, animals, bacteria, and fungi all have genes. Genes are a universal feature of life on Earth.",
        pt: "Não exatamente. Todos os seres vivos têm genes—não apenas plantas. Humanos, animais, bactérias e fungos todos têm genes. Os genes são uma característica universal da vida na Terra.",
      },
      change_daily: {
        en: "Not quite. Your genes are relatively stable throughout your life. The DNA sequence in your cells doesn't change day to day (with rare exceptions like mutations). However, which genes are 'turned on' or 'off' can change based on your environment and lifestyle.",
        pt: "Não exatamente. Os seus genes são relativamente estáveis ao longo da sua vida. A sequência de DNA nas suas células não muda dia a dia (com raras exceções como mutações). No entanto, quais genes estão 'ligados' ou 'desligados' pode mudar com base no seu ambiente e estilo de vida.",
      },
    },
    difficulty: "easy",
    mode: "pattern_interpretation",
    tags: ["genes", "genetics", "traits"],
  },
  {
    id: "b1q3",
    round: 1,
    title: "What is Cancer?",
    titlePt: "O que é Cancro?",
    scenario:
      "Cancer happens when cells in the body grow out of control. Based on what you know about cell growth, which statement best explains why uncontrolled cell growth is dangerous?",
    scenarioPt:
      "O cancro ocorre quando as células do corpo crescem descontroladamente. Com base no que sabe sobre o crescimento celular, qual afirmação melhor explica por que o crescimento descontrolado de células é perigoso?",
    dataSignals: [],
    answerOptions: [
      { id: "damage_tissue", text: "Uncontrolled cells can damage healthy tissue and organs", textPt: "Células descontroladas podem danificar tecidos e órgãos saudáveis" },
      { id: "only_skin", text: "Cancer only affects the skin", textPt: "O cancro afeta apenas a pele" },
      { id: "always_inherited", text: "Cancer is always inherited from parents", textPt: "O cancro é sempre herdado dos pais" },
    ],
    correctAnswerId: "damage_tissue",
    explanation:
      "Correct! When cells grow without control, they can form tumors and interfere with normal body functions. Early detection and treatment are very important.",
    explanationPt:
      "Correto! Quando as células crescem sem controlo, podem formar tumores e interferir com as funções normais do corpo. A detecção precoce e o tratamento são muito importantes.",
    explanations: {
      damage_tissue: {
        en: "Correct! Uncontrolled cell growth can form tumors that damage healthy tissue and interfere with normal organ function. Cancer can start in any tissue and spread to other parts of the body, which is why early detection and treatment are so important.",
        pt: "Correto! O crescimento descontrolado de células pode formar tumores que danificam tecidos saudáveis e interferem com o funcionamento normal dos órgãos. O cancro pode começar em qualquer tecido e espalhar-se para outras partes do corpo, razão pela qual a detecção precoce e o tratamento são tão importantes.",
      },
      only_skin: {
        en: "Not quite. While skin cancer is one type of cancer, cancer can develop in almost any tissue in the body—lungs, breast, colon, blood, brain, and many others. Each type of cancer behaves differently and requires different treatments.",
        pt: "Não exatamente. Embora o cancro da pele seja um tipo de cancro, o cancro pode desenvolver-se em quase qualquer tecido do corpo—pulmões, mama, cólon, sangue, cérebro e muitos outros. Cada tipo de cancro comporta-se de forma diferente e requer tratamentos diferentes.",
      },
      always_inherited: {
        en: "Not quite. While some cancers do run in families (like BRCA mutations), most cancers are NOT inherited. Most cancers develop due to mutations that happen during a person's lifetime from factors like smoking, sun exposure, or aging. Only about 5-10% of cancers are hereditary.",
        pt: "Não exatamente. Embora alguns cancros ocorram em famílias (como mutações BRCA), a maioria dos cancros NÃO é herdada. A maioria dos cancros desenvolve-se devido a mutações que ocorrem durante a vida de uma pessoa a partir de fatores como fumar, exposição solar ou envelhecimento. Apenas cerca de 5-10% dos cancros são hereditários.",
      },
    },
    difficulty: "easy",
    mode: "pattern_interpretation",
    tags: ["cancer", "cell_biology", "health"],
  },
  {
    id: "b1q4",
    round: 1,
    title: "Reading Simple Data: High vs Low",
    titlePt: "Ler Dados Simples: Alto vs Baixo",
    scenario:
      "Look at this simple signal. A protein level of 85% is considered high. Based on this data alone, what is the most direct interpretation?",
    scenarioPt:
      "Observe este sinal simples. Um nível de proteína de 85% é considerado elevado. Com base apenas nestes dados, qual é a interpretação mais direta?",
    dataSignals: [
      { label: "PROTEIN_LEVEL", value: 85, unit: "%", state: "high", category: "biomarker" },
    ],
    answerOptions: [
      { id: "protein_active", text: "This protein is very active in the cells", textPt: "Esta proteína é muito ativa nas células" },
      { id: "cells_not_working", text: "The cells are not working at all", textPt: "As células não estão funcionando" },
      { id: "fighting_infection", text: "The body is fighting an infection", textPt: "O corpo está a combater uma infecção" },
    ],
    correctAnswerId: "protein_active",
    explanation:
      "Good! A high protein level means that protein is being produced a lot in the cells. This can be important for understanding how cells are behaving.",
    explanationPt:
      "Bom! Um nível elevado de proteína significa que essa proteína está sendo produzida muito nas células. Isto pode ser importante para compreender como as células estão a comportar-se.",
    explanations: {
      protein_active: {
        en: "Correct! A high protein level (85%) indicates that this protein is being produced in large amounts, which means it's very active in these cells. High levels of a protein usually mean that protein is doing important work in the cell.",
        pt: "Correto! Um nível elevado de proteína (85%) indica que essa proteína está sendo produzida em grandes quantidades, o que significa que é muito ativa nestas células. Níveis elevados de uma proteína geralmente significam que essa proteína está fazendo trabalho importante na célula.",
      },
      cells_not_working: {
        en: "Not quite. If cells weren't working at all, we'd expect to see LOW protein levels, not high ones. A high protein level actually suggests the cells are actively producing proteins, which is a sign of active cellular function.",
        pt: "Não exatamente. Se as células não estivessem funcionando, esperaríamos ver níveis BAIXOS de proteína, não elevados. Um nível elevado de proteína na verdade sugere que as células estão produzindo proteínas ativamente, o que é um sinal de função celular ativa.",
      },
      fighting_infection: {
        en: "Not quite. While some immune proteins do increase during infection, we can't assume that a high protein level always means infection. The protein could be involved in many different processes. We'd need to know which specific protein is elevated to make that conclusion.",
        pt: "Não exatamente. Embora algumas proteínas imunitárias aumentem durante uma infecção, não podemos assumir que um nível elevado de proteína sempre significa infecção. A proteína pode estar envolvida em muitos processos diferentes. Precisaríamos de saber qual proteína específica está elevada para fazer essa conclusão.",
      },
    },
    difficulty: "easy",
    mode: "pattern_interpretation",
    tags: ["data_interpretation", "biomarkers"],
  },
  {
    id: "b1q5",
    round: 1,
    title: "Nutrition and Health",
    titlePt: "Nutrição e Saúde",
    scenario:
      "Scientists have found that certain foods contain compounds that may help protect cells from damage. Based on this observation, what is this protective process called?",
    scenarioPt:
      "Os cientistas descobriram que certos alimentos contêm compostos que podem ajudar a proteger as células de danos. Com base nesta observação, como é chamado este processo de proteção?",
    dataSignals: [],
    answerOptions: [
      { id: "antioxidant", text: "Antioxidant protection", textPt: "Proteção antioxidante" },
      { id: "protein_synthesis", text: "Protein synthesis", textPt: "Síntese de proteína" },
      { id: "dna_replication", text: "DNA replication", textPt: "Replicação de DNA" },
    ],
    correctAnswerId: "antioxidant",
    explanation:
      "Excellent! Antioxidants are compounds that help prevent cell damage. Foods like berries, nuts, and leafy greens are rich in antioxidants.",
    explanationPt:
      "Excelente! Os antioxidantes são compostos que ajudam a prevenir danos celulares. Alimentos como mirtilos, nozes e folhas verdes são ricos em antioxidantes.",
    explanations: {
      antioxidant: {
        en: "Correct! Antioxidants are compounds that neutralize harmful molecules called free radicals, preventing cell damage. Foods rich in antioxidants include berries, nuts, leafy greens, and colorful vegetables. This is why a healthy diet with plenty of fruits and vegetables is so important for protecting your cells.",
        pt: "Correto! Os antioxidantes são compostos que neutralizam moléculas prejudiciais chamadas radicais livres, prevenindo danos celulares. Alimentos ricos em antioxidantes incluem mirtilos, nozes, folhas verdes e vegetais coloridos. É por isso que uma dieta saudável com muitas frutas e vegetais é tão importante para proteger as suas células.",
      },
      protein_synthesis: {
        en: "Not quite. Protein synthesis is the process of making proteins from amino acids. While proteins can include antioxidant enzymes, the general term for protective compounds in food is antioxidants, not protein synthesis.",
        pt: "Não exatamente. A síntese de proteína é o processo de fazer proteínas a partir de aminoácidos. Embora as proteínas possam incluir enzimas antioxidantes, o termo geral para compostos protetores nos alimentos é antioxidantes, não síntese de proteína.",
      },
      dna_replication: {
        en: "Not quite. DNA replication is the process of copying DNA before cell division. While antioxidants can help protect DNA from damage, the specific term for protective compounds in food is antioxidants, not DNA replication.",
        pt: "Não exatamente. A replicação de DNA é o processo de copiar DNA antes da divisão celular. Embora os antioxidantes possam ajudar a proteger o DNA de danos, o termo específico para compostos protetores nos alimentos é antioxidantes, não replicação de DNA.",
      },
    },
    difficulty: "easy",
    mode: "pattern_interpretation",
    tags: ["nutrition", "health", "antioxidants"],
  },
  {
    id: "b1q6",
    round: 1,
    title: "Cell Growth Control",
    titlePt: "Controlo do Crescimento Celular",
    scenario:
      "Healthy cells have natural 'brakes' that stop them from growing too much. Based on what happens when these brakes fail, what is the consequence?",
    scenarioPt:
      "As células saudáveis têm 'travões' naturais que as impedem de crescer demasiado. Com base no que acontece quando estes travões falham, qual é a consequência?",
    dataSignals: [],
    answerOptions: [
      { id: "uncontrolled_growth", text: "Cells may grow out of control, leading to cancer", textPt: "As células podem crescer descontroladamente, levando ao cancro" },
      { id: "cells_disappear", text: "Cells become very small and disappear", textPt: "As células ficam muito pequenas e desaparecem" },
      { id: "cells_change_color", text: "Cells change color and become visible", textPt: "As células mudam de cor e tornam-se visíveis" },
    ],
    correctAnswerId: "uncontrolled_growth",
    explanation:
      "Correct! When growth control breaks down, cells can divide uncontrollably. This is one of the key features of cancer. Understanding this helps scientists develop better treatments.",
    explanationPt:
      "Correto! Quando o controlo do crescimento falha, as células podem dividir-se descontroladamente. Esta é uma das características principais do cancro. Compreender isto ajuda os cientistas a desenvolver melhores tratamentos.",
    explanations: {
      uncontrolled_growth: {
        en: "Correct! When the brakes on cell growth fail, cells can divide uncontrollably and form tumors. This is one of the hallmarks of cancer. Understanding how these growth controls work helps scientists develop treatments that can restore control or stop cancer cells from dividing.",
        pt: "Correto! Quando os travões do crescimento celular falham, as células podem dividir-se descontroladamente e formar tumores. Esta é uma das características do cancro. Compreender como estes controlos de crescimento funcionam ajuda os cientistas a desenvolver tratamentos que podem restaurar o controlo ou impedir que as células cancerígenas se dividam.",
      },
      cells_disappear: {
        en: "Not quite. If cells stopped growing, they wouldn't necessarily disappear. Cells that stop growing can still be present in the body. The problem with cancer is the opposite—cells grow TOO MUCH, not too little.",
        pt: "Não exatamente. Se as células parassem de crescer, não desapareceriam necessariamente. As células que param de crescer podem ainda estar presentes no corpo. O problema com o cancro é o oposto—as células crescem DEMASIADO, não pouco.",
      },
      cells_change_color: {
        en: "Not quite. Cells don't typically change color when growth controls fail. The issue is about the NUMBER of cells and their uncontrolled division, not their appearance or color.",
        pt: "Não exatamente. As células não mudam tipicamente de cor quando os controlos de crescimento falham. O problema é sobre o NÚMERO de células e a sua divisão descontrolada, não a sua aparência ou cor.",
      },
    },
    difficulty: "easy",
    mode: "pattern_interpretation",
    tags: ["cell_biology", "cancer", "growth_control"],
  },
  {
    id: "b1q7",
    round: 1,
    title: "Immune System Basics",
    titlePt: "Noções Básicas do Sistema Imunitário",
    scenario:
      "The immune system is your body's defense against harmful invaders. Based on this role, what is one of its main jobs?",
    scenarioPt:
      "O sistema imunitário é a defesa do seu corpo contra invasores prejudiciais. Com base neste papel, qual é um dos seus principais trabalhos?",
    dataSignals: [],
    answerOptions: [
      { id: "fight_infections", text: "Fight infections and abnormal cells", textPt: "Combater infecções e células anormais" },
      { id: "digest_food", text: "Digest food in the stomach", textPt: "Digerir alimentos no estômago" },
      { id: "pump_blood", text: "Pump blood around the body", textPt: "Bombear sangue pelo corpo" },
    ],
    correctAnswerId: "fight_infections",
    explanation:
      "Perfect! The immune system includes white blood cells and other defenders that patrol your body looking for threats. A strong immune system is crucial for health.",
    explanationPt:
      "Perfeito! O sistema imunitário inclui glóbulos brancos e outros defensores que patrulham o seu corpo procurando ameaças. Um sistema imunitário forte é crucial para a saúde.",
    explanations: {
      fight_infections: {
        en: "Correct! The immune system's main job is to protect you from infections (bacteria, viruses, fungi) and to identify and eliminate abnormal cells like cancer cells. White blood cells are the soldiers of your immune system, constantly patrolling for threats.",
        pt: "Correto! O trabalho principal do sistema imunitário é protegê-lo de infecções (bactérias, vírus, fungos) e identificar e eliminar células anormais como células cancerígenas. Os glóbulos brancos são os soldados do seu sistema imunitário, patrulhando constantemente à procura de ameaças.",
      },
      digest_food: {
        en: "Not quite. Digesting food is the job of the digestive system, not the immune system. The digestive system breaks down food into nutrients. The immune system's job is to protect you from harmful invaders.",
        pt: "Não exatamente. Digerir alimentos é o trabalho do sistema digestivo, não do sistema imunitário. O sistema digestivo quebra os alimentos em nutrientes. O trabalho do sistema imunitário é protegê-lo de invasores prejudiciais.",
      },
      pump_blood: {
        en: "Not quite. Pumping blood around the body is the job of the heart and circulatory system, not the immune system. The immune system's job is to protect you from harmful invaders like bacteria and viruses.",
        pt: "Não exatamente. Bombear sangue pelo corpo é o trabalho do coração e do sistema circulatório, não do sistema imunitário. O trabalho do sistema imunitário é protegê-lo de invasores prejudiciais como bactérias e vírus.",
      },
    },
    difficulty: "easy",
    mode: "pattern_interpretation",
    tags: ["immune_system", "health", "biology"],
  },
  {
    id: "b1q8",
    round: 1,
    title: "Why Study Biomedical Data?",
    titlePt: "Por que Estudar Dados Biomédicos?",
    scenario:
      "Scientists collect data about genes and proteins to understand diseases better. Based on this goal, what is the main purpose of this research?",
    scenarioPt:
      "Os cientistas recolhem dados sobre genes e proteínas para compreender melhor as doenças. Com base neste objetivo, qual é o objetivo principal desta investigação?",
    dataSignals: [],
    answerOptions: [
      { id: "develop_treatments", text: "To develop better treatments and cures", textPt: "Para desenvolver melhores tratamentos e curas" },
      { id: "make_expensive", text: "To make medicine more expensive", textPt: "Para tornar a medicina mais cara" },
      { id: "prove_genetic", text: "To prove that all diseases are genetic", textPt: "Para provar que todas as doenças são genéticas" },
    ],
    correctAnswerId: "develop_treatments",
    explanation:
      "Excellent! By understanding the biology of diseases, scientists can create targeted treatments that work better and have fewer side effects. This is personalized medicine.",
    explanationPt:
      "Excelente! Ao compreender a biologia das doenças, os cientistas podem criar tratamentos direcionados que funcionam melhor e têm menos efeitos secundários. Esta é a medicina personalizada.",
    explanations: {
      develop_treatments: {
        en: "Correct! By studying genes and proteins, scientists can understand what goes wrong in disease and develop targeted treatments. This leads to better outcomes, fewer side effects, and personalized medicine tailored to each patient's unique biology.",
        pt: "Correto! Ao estudar genes e proteínas, os cientistas podem compreender o que corre mal na doença e desenvolver tratamentos direcionados. Isto leva a melhores resultados, menos efeitos secundários e medicina personalizada adaptada à biologia única de cada paciente.",
      },
      make_expensive: {
        en: "Not quite. While advanced research can be expensive, the goal is to develop better treatments that ultimately improve health and quality of life. In the long run, better treatments can actually reduce healthcare costs by preventing complications and hospitalizations.",
        pt: "Não exatamente. Embora a investigação avançada possa ser cara, o objetivo é desenvolver melhores tratamentos que melhorem a saúde e a qualidade de vida. A longo prazo, melhores tratamentos podem realmente reduzir os custos de saúde ao prevenir complicações e hospitalizações.",
      },
      prove_genetic: {
        en: "Not quite. While some diseases are genetic, many are caused by environmental factors (lifestyle, diet, pollution) or a combination of genes and environment. The goal of biomedical research is to understand ALL the factors that cause disease, not just genetic ones.",
        pt: "Não exatamente. Embora algumas doenças sejam genéticas, muitas são causadas por fatores ambientais (estilo de vida, dieta, poluição) ou uma combinação de genes e ambiente. O objetivo da investigação biomédica é compreender TODOS os fatores que causam doença, não apenas os genéticos.",
      },
    },
    difficulty: "easy",
    mode: "clinical_decision",
    tags: ["biomedical_research", "medicine", "data_science"],
  },

  // ===== ROUND 2: SIMPLE DATA INTERPRETATION (8 questions) =====
  {
    id: "b2q1",
    round: 2,
    title: "Comparing Two Signals",
    titlePt: "Comparar Dois Sinais",
    scenario:
      "Patient A has a protein level of 20% (low) and Patient B has 75% (high). Based on these measurements alone, which patient likely has more of this protein active?",
    scenarioPt:
      "O Paciente A tem um nível de proteína de 20% (baixo) e o Paciente B tem 75% (elevado). Com base apenas nessas medições, qual paciente provavelmente tem mais desta proteína ativa?",
    dataSignals: [
      { label: "PATIENT_A", value: 20, unit: "%", state: "low", category: "biomarker" },
      { label: "PATIENT_B", value: 75, unit: "%", state: "high", category: "biomarker" },
    ],
    answerOptions: [
      { id: "patient_b", text: "Patient B", textPt: "Paciente B" },
      { id: "patient_a", text: "Patient A", textPt: "Paciente A" },
      { id: "same_level", text: "They are the same", textPt: "São iguais" },
    ],
    correctAnswerId: "patient_b",
    explanation:
      "Right! Patient B has a much higher level (75% vs 20%), so this protein is more active in Patient B. This kind of comparison helps doctors understand patient differences.",
    explanationPt:
      "Certo! O Paciente B tem um nível muito mais elevado (75% vs 20%), portanto esta proteína é mais ativa no Paciente B. Este tipo de comparação ajuda os médicos a compreender as diferenças entre pacientes.",
    explanations: {
      patient_b: {
        en: "Correct! Patient B has a much higher protein level (75% vs 20%), which means this protein is more active in Patient B's cells. Direct numerical comparisons like this are one of the most basic and reliable ways to interpret biomedical data.",
        pt: "Correto! O Paciente B tem um nível de proteína muito mais elevado (75% vs 20%), o que significa que essa proteína é mais ativa nas células do Paciente B. Comparações numéricas diretas como esta são uma das formas mais básicas e fiáveis de interpretar dados biomédicos.",
      },
      patient_a: {
        en: "Not quite. Patient A has a LOWER level (20%), not higher. When comparing numbers, 20% is less than 75%, so Patient A has less of this protein, not more.",
        pt: "Não exatamente. O Paciente A tem um nível MAIS BAIXO (20%), não mais elevado. Ao comparar números, 20% é menos de 75%, portanto o Paciente A tem menos desta proteína, não mais.",
      },
      same_level: {
        en: "Not quite. The two patients have very different levels: 20% vs 75%. These are clearly not the same. When interpreting data, it's important to notice significant differences in numbers.",
        pt: "Não exatamente. Os dois pacientes têm níveis muito diferentes: 20% vs 75%. Estes claramente não são iguais. Ao interpretar dados, é importante notar diferenças significativas nos números.",
      },
    },
    difficulty: "easy",
    mode: "pattern_interpretation",
    tags: ["data_interpretation", "comparison"],
  },
  {
    id: "b2q2",
    round: 2,
    title: "Understanding 'Medium' Levels",
    titlePt: "Compreender Níveis 'Médios'",
    scenario:
      "A signal shows 50% - right in the middle between low (0%) and high (100%). Based on this value, what does this tell us?",
    scenarioPt:
      "Um sinal mostra 50% - bem no meio entre baixo (0%) e elevado (100%). Com base neste valor, o que isto nos diz?",
    dataSignals: [
      { label: "SIGNAL_LEVEL", value: 50, unit: "%", state: "medium", category: "biomarker" },
    ],
    answerOptions: [
      { id: "balanced_level", text: "The protein is at a balanced, moderate level", textPt: "A proteína está num nível equilibrado e moderado" },
      { id: "protein_broken", text: "The protein is broken and not working", textPt: "A proteína está quebrada e não funciona" },
      { id: "measurement_wrong", text: "The measurement is wrong", textPt: "A medição está errada" },
    ],
    correctAnswerId: "balanced_level",
    explanation:
      "Good! A medium level (around 50%) means the protein is present at a balanced amount. Not too much, not too little. This can be normal or important depending on the context.",
    explanationPt:
      "Bom! Um nível médio (cerca de 50%) significa que a proteína está presente numa quantidade equilibrada. Nem demasiado, nem pouco. Isto pode ser normal ou importante dependendo do contexto.",
    explanations: {
      balanced_level: {
        en: "Correct! A 50% level represents a balanced, moderate amount of protein. This is neither high nor low—it's right in the middle. Whether this is 'normal' depends on the specific protein and the patient's context, but the measurement itself is clear and valid.",
        pt: "Correto! Um nível de 50% representa uma quantidade equilibrada e moderada de proteína. Isto não é nem elevado nem baixo—está bem no meio. Se isto é 'normal' depende da proteína específica e do contexto do paciente, mas a medição em si é clara e válida.",
      },
      protein_broken: {
        en: "Not quite. A 50% level doesn't tell us the protein is broken. A 50% level just means there's a moderate amount of the protein present. The protein could be working perfectly fine at this level.",
        pt: "Não exatamente. Um nível de 50% não nos diz que a proteína está quebrada. Um nível de 50% apenas significa que há uma quantidade moderada da proteína presente. A proteína pode estar funcionando perfeitamente bem neste nível.",
      },
      measurement_wrong: {
        en: "Not quite. There's no reason to assume the measurement is wrong just because it's 50%. A 50% reading is a perfectly valid measurement—it's neither suspiciously high nor suspiciously low. We should trust the data unless we have evidence of a problem.",
        pt: "Não exatamente. Não há razão para assumir que a medição está errada apenas porque é 50%. Uma leitura de 50% é uma medição perfeitamente válida—não é nem suspeitosamente elevada nem suspeitosamente baixa. Devemos confiar nos dados a menos que tenhamos evidência de um problema.",
      },
    },
    difficulty: "easy",
    mode: "pattern_interpretation",
    tags: ["data_interpretation", "biomarkers"],
  },
  {
    id: "b2q3",
    round: 2,
    title: "Pattern Recognition: All High",
    titlePt: "Reconhecimento de Padrões: Tudo Elevado",
    scenario:
      "Three different proteins all show high levels (85%, 90%, 88%). Based on this pattern alone, what might this coordinated activity suggest?",
    scenarioPt:
      "Três proteínas diferentes mostram níveis elevados (85%, 90%, 88%). Com base apenas neste padrão, o que esta atividade coordenada pode sugerir?",
    dataSignals: [
      { label: "PROTEIN_1", value: 85, unit: "%", state: "high", category: "biomarker" },
      { label: "PROTEIN_2", value: 90, unit: "%", state: "high", category: "biomarker" },
      { label: "PROTEIN_3", value: 88, unit: "%", state: "high", category: "biomarker" },
    ],
    answerOptions: [
      { id: "coordinated_activity", text: "Coordinated activity across multiple biological systems", textPt: "Atividade coordenada em múltiplos sistemas biológicos" },
      { id: "no_proteins", text: "The patient has no proteins at all", textPt: "O paciente não tem proteínas nenhumas" },
      { id: "measurement_error", text: "The measurements are definitely wrong", textPt: "As medições estão definitivamente erradas" },
    ],
    correctAnswerId: "coordinated_activity",
    explanation:
      "Excellent observation! When multiple proteins are all elevated, it suggests that several biological systems are working at high levels. This could indicate strong immune activity or other important processes.",
    explanationPt:
      "Excelente observação! Quando múltiplas proteínas estão todas elevadas, sugere que vários sistemas biológicos estão a funcionar em níveis elevados. Isto pode indicar atividade imunitária forte ou outros processos importantes.",
    explanations: {
      coordinated_activity: {
        en: "Correct! When multiple different proteins are all elevated at similar levels, this suggests coordinated biological activity. This could indicate a strong immune response, inflammation, or other systemic processes affecting multiple body systems simultaneously.",
        pt: "Correto! Quando múltiplas proteínas diferentes estão todas elevadas em níveis semelhantes, isto sugere atividade biológica coordenada. Isto pode indicar uma resposta imunitária forte, inflamação ou outros processos sistémicos que afetam múltiplos sistemas corporais simultaneamente.",
      },
      no_proteins: {
        en: "Not quite. The data clearly shows that the patient HAS these proteins—all three are at 85-90% levels. This is the opposite of having no proteins. High levels mean the proteins are definitely present and active.",
        pt: "Não exatamente. Os dados mostram claramente que o paciente TEM estas proteínas—todas as três estão em níveis de 85-90%. Isto é o oposto de não ter proteínas. Níveis elevados significam que as proteínas estão definitivamente presentes e ativas.",
      },
      measurement_error: {
        en: "Not quite. There's no reason to assume the measurements are wrong. Three independent measurements all showing high values (85%, 90%, 88%) is actually consistent and reliable data. If anything, the consistency across three different proteins suggests the measurements are CORRECT.",
        pt: "Não exatamente. Não há razão para assumir que as medições estão erradas. Três medições independentes mostrando todas valores elevados (85%, 90%, 88%) é na verdade dados consistentes e fiáveis. Se algo, a consistência em três proteínas diferentes sugere que as medições estão CORRETAS.",
      },
    },
    difficulty: "easy",
    mode: "pattern_interpretation",
    tags: ["pattern_recognition", "data_interpretation"],
  },
  {
    id: "b2q4",
    round: 2,
    title: "Mixed Signals",
    titlePt: "Sinais Mistos",
    scenario:
      "One protein is high (80%), another is low (15%), and a third is medium (50%). When signals are mixed like this, what's the best approach to interpretation?",
    scenarioPt:
      "Uma proteína é elevada (80%), outra é baixa (15%), e uma terceira é média (50%). Quando os sinais são mistos assim, qual é a melhor abordagem para interpretação?",
    dataSignals: [
      { label: "PROTEIN_A", value: 80, unit: "%", state: "high", category: "biomarker" },
      { label: "PROTEIN_B", value: 15, unit: "%", state: "low", category: "biomarker" },
      { label: "PROTEIN_C", value: 50, unit: "%", state: "medium", category: "biomarker" },
    ],
    answerOptions: [
      { id: "careful_analysis", text: "Look for patterns and consider the context carefully", textPt: "Procurar padrões e considerar o contexto cuidadosamente" },
      { id: "ignore_data", text: "Ignore the data and guess", textPt: "Ignorar os dados e adivinhar" },
      { id: "first_measurement", text: "Assume the first measurement is always right", textPt: "Assumir que a primeira medição está sempre certa" },
    ],
    correctAnswerId: "careful_analysis",
    explanation:
      "Perfect! Mixed signals require careful analysis. Scientists look for patterns, consider what each signal means, and think about how they relate to each other. This is critical thinking in science!",
    explanationPt:
      "Perfeito! Sinais mistos requerem análise cuidadosa. Os cientistas procuram padrões, consideram o que cada sinal significa e pensam sobre como se relacionam entre si. Este é o pensamento crítico na ciência!",
    explanations: {
      careful_analysis: {
        en: "Correct! When you have mixed signals with different values, the best approach is to carefully analyze each one, look for patterns, and consider the biological context. This is how real scientists work—they don't jump to conclusions but instead thoughtfully interpret complex data.",
        pt: "Correto! Quando tem sinais mistos com valores diferentes, a melhor abordagem é analisar cuidadosamente cada um, procurar padrões e considerar o contexto biológico. É assim que os cientistas reais trabalham—não saltam para conclusões mas interpretam cuidadosamente dados complexos.",
      },
      ignore_data: {
        en: "Not quite. Ignoring data and guessing is the opposite of good science. Data is the foundation of scientific understanding. Even when data is mixed or confusing, the right approach is to analyze it carefully, not to ignore it.",
        pt: "Não exatamente. Ignorar dados e adivinhar é o oposto de boa ciência. Os dados são a base da compreensão científica. Mesmo quando os dados são mistos ou confusos, a abordagem correta é analisá-los cuidadosamente, não ignorá-los.",
      },
      first_measurement: {
        en: "Not quite. There's no reason to assume the first measurement is always right. All three measurements are equally valid data points. The right approach is to consider all of them together and look for patterns.",
        pt: "Não exatamente. Não há razão para assumir que a primeira medição está sempre certa. Todas as três medições são pontos de dados igualmente válidos. A abordagem correta é considerá-los todos juntos e procurar padrões.",
      },
    },
    difficulty: "easy",
    mode: "methodological_judgement",
    tags: ["critical_thinking", "data_interpretation"],
  },
  {
    id: "b2q5",
    round: 2,
    title: "Extreme Values",
    titlePt: "Valores Extremos",
    scenario:
      "A protein level jumps from 5% to 95% in just one week. Based on this dramatic change, what might this indicate?",
    scenarioPt:
      "Um nível de proteína salta de 5% para 95% em apenas uma semana. Com base nesta mudança dramática, o que isto pode indicar?",
    dataSignals: [
      { label: "WEEK_1", value: 5, unit: "%", state: "low", category: "biomarker" },
      { label: "WEEK_2", value: 95, unit: "%", state: "high", category: "biomarker" },
    ],
    answerOptions: [
      { id: "significant_change", text: "Something significant has changed in the body", textPt: "Algo significativo mudou no corpo" },
      { id: "equipment_broken", text: "The measurement equipment is broken", textPt: "O equipamento de medição está quebrado" },
      { id: "nothing_important", text: "Nothing important happened", textPt: "Nada importante aconteceu" },
    ],
    correctAnswerId: "significant_change",
    explanation:
      "Good thinking! A dramatic change like this suggests something significant is happening - maybe the immune system is responding to a threat, or the patient started a new treatment. Scientists would investigate further.",
    explanationPt:
      "Bom pensamento! Uma mudança dramática assim sugere que algo significativo está a acontecer - talvez o sistema imunitário esteja a responder a uma ameaça, ou o paciente tenha começado um novo tratamento. Os cientistas investigariam mais.",
    explanations: {
      significant_change: {
        en: "Correct! A 90-point change in one week (from 5% to 95%) is dramatic and significant. This suggests something important is happening in the body—possibly an immune response, a treatment effect, or a disease progression. This kind of dramatic change warrants further investigation.",
        pt: "Correto! Uma mudança de 90 pontos em uma semana (de 5% para 95%) é dramática e significativa. Isto sugere que algo importante está a acontecer no corpo—possivelmente uma resposta imunitária, um efeito de tratamento ou progressão da doença. Este tipo de mudança dramática justifica investigação adicional.",
      },
      equipment_broken: {
        en: "Not quite. While equipment failure is always a possibility, a dramatic change like this is more likely to reflect a real biological change than a measurement error. If the equipment were broken, we'd expect to see random or inconsistent values, not a clear progression from very low to very high.",
        pt: "Não exatamente. Embora a falha do equipamento seja sempre uma possibilidade, uma mudança dramática assim é mais provável que reflita uma mudança biológica real do que um erro de medição. Se o equipamento estivesse quebrado, esperaríamos ver valores aleatórios ou inconsistentes, não uma progressão clara de muito baixo para muito elevado.",
      },
      nothing_important: {
        en: "Not quite. A 90-point change is HUGE. In data interpretation, when you see a dramatic change like this, it's always important and worth investigating. Ignoring dramatic changes is a common mistake in data analysis.",
        pt: "Não exatamente. Uma mudança de 90 pontos é ENORME. Na interpretação de dados, quando vê uma mudança dramática assim, é sempre importante e vale a pena investigar. Ignorar mudanças dramáticas é um erro comum na análise de dados.",
      },
    },
    difficulty: "easy",
    mode: "pattern_interpretation",
    tags: ["data_interpretation", "change_detection"],
  },
  {
    id: "b2q6",
    round: 2,
    title: "Consistency Across Patients",
    titlePt: "Consistência Entre Pacientes",
    scenario:
      "Five healthy patients all show similar protein levels (around 40-50%). Based on this consistency, what does this suggest?",
    scenarioPt:
      "Cinco pacientes saudáveis mostram todos níveis de proteína semelhantes (cerca de 40-50%). Com base nesta consistência, o que isto sugere?",
    dataSignals: [
      { label: "HEALTHY_PATIENTS", value: 45, unit: "%", state: "medium", category: "biomarker" },
    ],
    answerOptions: [
      { id: "normal_range", text: "This might be a normal range for healthy people", textPt: "Isto pode ser um intervalo normal para pessoas saudáveis" },
      { id: "all_wrong", text: "All measurements must be wrong", textPt: "Todas as medições devem estar erradas" },
      { id: "no_proteins", text: "Healthy people have no proteins", textPt: "Pessoas saudáveis não têm proteínas" },
    ],
    correctAnswerId: "normal_range",
    explanation:
      "Excellent! When multiple healthy people show similar levels, it helps scientists establish what's 'normal'. This baseline is crucial for detecting when something is abnormal.",
    explanationPt:
      "Excelente! Quando múltiplas pessoas saudáveis mostram níveis semelhantes, ajuda os cientistas a estabelecer o que é 'normal'. Esta linha de base é crucial para detetar quando algo é anormal.",
    explanations: {
      normal_range: {
        en: "Correct! When multiple healthy individuals show consistent, similar values, this helps establish a 'normal range' for that protein. This baseline is essential for identifying when a patient's value is abnormal. If a sick patient has a value of 85%, we can compare it to this normal range of 40-50% to see that something is wrong.",
        pt: "Correto! Quando múltiplos indivíduos saudáveis mostram valores consistentes e semelhantes, isto ajuda a estabelecer um 'intervalo normal' para essa proteína. Esta linha de base é essencial para identificar quando o valor de um paciente é anormal. Se um paciente doente tem um valor de 85%, podemos compará-lo com este intervalo normal de 40-50% para ver que algo está errado.",
      },
      all_wrong: {
        en: "Not quite. There's no reason to assume all five measurements are wrong just because they're consistent. In fact, consistency across multiple measurements is a SIGN that the measurements are correct. If the equipment were broken, we'd expect random, inconsistent values.",
        pt: "Não exatamente. Não há razão para assumir que todas as cinco medições estão erradas apenas porque são consistentes. Na verdade, a consistência em múltiplas medições é um SINAL de que as medições estão corretas. Se o equipamento estivesse quebrado, esperaríamos valores aleatórios e inconsistentes.",
      },
      no_proteins: {
        en: "Not quite. Healthy people definitely have proteins. A level of 40-50% means these proteins are present at a moderate level. This is a normal, healthy level—not an absence of proteins.",
        pt: "Não exatamente. Pessoas saudáveis definitivamente têm proteínas. Um nível de 40-50% significa que essas proteínas estão presentes num nível moderado. Este é um nível normal e saudável—não uma ausência de proteínas.",
      },
    },
    difficulty: "easy",
    mode: "pattern_interpretation",
    tags: ["data_interpretation", "normal_range"],
  },
  {
    id: "b2q7",
    round: 2,
    title: "Connecting Data to Health",
    titlePt: "Conectar Dados à Saúde",
    scenario:
      "A patient with low immune markers (20%) gets sick more often. A patient with high immune markers (85%) stays healthy. Based on this observation, what does this suggest?",
    scenarioPt:
      "Um paciente com marcadores imunitários baixos (20%) fica doente mais frequentemente. Um paciente com marcadores imunitários elevados (85%) mantém-se saudável. Com base nesta observação, o que isto sugere?",
    dataSignals: [
      { label: "SICK_PATIENT", value: 20, unit: "%", state: "low", category: "immune" },
      { label: "HEALTHY_PATIENT", value: 85, unit: "%", state: "high", category: "immune" },
    ],
    answerOptions: [
      { id: "higher_markers_protect", text: "Higher immune markers may help protect against illness", textPt: "Marcadores imunitários mais elevados podem ajudar a proteger contra doenças" },
      { id: "markers_irrelevant", text: "Immune markers have nothing to do with health", textPt: "Os marcadores imunitários não têm nada a ver com a saúde" },
      { id: "sick_always_high", text: "Sick people always have high immune markers", textPt: "Pessoas doentes sempre têm marcadores imunitários elevados" },
    ],
    correctAnswerId: "higher_markers_protect",
    explanation:
      "Great insight! This observation shows why scientists study these markers - they often correlate with health outcomes. A strong immune system, indicated by high markers, helps your body fight off illness.",
    explanationPt:
      "Ótima perspicácia! Esta observação mostra por que os cientistas estudam estes marcadores - frequentemente correlacionam-se com resultados de saúde. Um sistema imunitário forte, indicado por marcadores elevados, ajuda o seu corpo a combater doenças.",
    explanations: {
      higher_markers_protect: {
        en: "Correct! This observation shows a correlation between immune marker levels and health outcomes. Patients with higher immune markers tend to stay healthier, while those with low markers get sick more often. This is why scientists study these markers—they help predict and understand health outcomes.",
        pt: "Correto! Esta observação mostra uma correlação entre níveis de marcadores imunitários e resultados de saúde. Pacientes com marcadores imunitários mais elevados tendem a manter-se mais saudáveis, enquanto aqueles com marcadores baixos ficam doentes mais frequentemente. É por isso que os cientistas estudam estes marcadores—ajudam a prever e compreender resultados de saúde.",
      },
      markers_irrelevant: {
        en: "Not quite. The data clearly shows a relationship between immune markers and health. The patient with low markers (20%) gets sick often, while the patient with high markers (85%) stays healthy. This is evidence that markers ARE relevant to health.",
        pt: "Não exatamente. Os dados mostram claramente uma relação entre marcadores imunitários e saúde. O paciente com marcadores baixos (20%) fica doente frequentemente, enquanto o paciente com marcadores elevados (85%) mantém-se saudável. Isto é evidência de que os marcadores SÃO relevantes para a saúde.",
      },
      sick_always_high: {
        en: "Not quite. The data shows the opposite—sick people have LOW immune markers, not high ones. The patient who gets sick often has a low value (20%). High immune markers are associated with staying healthy.",
        pt: "Não exatamente. Os dados mostram o oposto—pessoas doentes têm marcadores imunitários BAIXOS, não elevados. O paciente que fica doente frequentemente tem um valor baixo (20%). Marcadores imunitários elevados estão associados a manter-se saudável.",
      },
    },
    difficulty: "easy",
    mode: "pattern_interpretation",
    tags: ["data_interpretation", "health", "immune_system"],
  },
  {
    id: "b2q8",
    round: 2,
    title: "Uncertainty in Science",
    titlePt: "Incerteza na Ciência",
    scenario:
      "Scientists see a pattern in the data, but they're not 100% sure what it means. Based on the scientific method, what should they do?",
    scenarioPt:
      "Os cientistas veem um padrão nos dados, mas não têm 100% de certeza do que significa. Com base no método científico, o que devem fazer?",
    dataSignals: [],
    answerOptions: [
      { id: "collect_more", text: "Collect more data and do more experiments to confirm", textPt: "Recolher mais dados e fazer mais experiências para confirmar" },
      { id: "publish_guess", text: "Publish their guess immediately", textPt: "Publicar a sua suposição imediatamente" },
      { id: "give_up", text: "Give up and stop researching", textPt: "Desistir e parar de investigar" },
    ],
    correctAnswerId: "collect_more",
    explanation:
      "Perfect! This is how real science works. When you find something interesting but aren't sure, you design more experiments to test your ideas. This is called the scientific method.",
    explanationPt:
      "Perfeito! É assim que a ciência real funciona. Quando encontra algo interessante mas não tem certeza, desenha mais experiências para testar as suas ideias. Isto chama-se método científico.",
    explanations: {
      collect_more: {
        en: "Correct! When scientists find an interesting pattern but aren't certain, the right approach is to design more experiments and collect more data to test their hypothesis. This is the essence of the scientific method: observe, hypothesize, test, and verify. Rushing to publish without confirmation is not good science.",
        pt: "Correto! Quando os cientistas encontram um padrão interessante mas não têm certeza, a abordagem correta é desenhar mais experiências e recolher mais dados para testar a sua hipótese. Esta é a essência do método científico: observar, hipotetizar, testar e verificar. Apressar-se a publicar sem confirmação não é boa ciência.",
      },
      publish_guess: {
        en: "Not quite. Publishing a guess without confirmation is not good science. It can spread misinformation and waste other scientists' time trying to verify something that isn't true. Good scientists wait until they have solid evidence before publishing.",
        pt: "Não exatamente. Publicar uma suposição sem confirmação não é boa ciência. Pode espalhar desinformação e desperdiçar o tempo de outros cientistas tentando verificar algo que não é verdadeiro. Bons cientistas esperam até terem evidência sólida antes de publicar.",
      },
      give_up: {
        en: "Not quite. Uncertainty is a normal part of science. When you find something interesting but aren't sure, that's exactly when you should do MORE research, not give up. Many scientific breakthroughs came from scientists who persisted despite initial uncertainty.",
        pt: "Não exatamente. A incerteza é uma parte normal da ciência. Quando encontra algo interessante mas não tem certeza, é exatamente quando deve fazer MAIS investigação, não desistir. Muitas descobertas científicas vieram de cientistas que persistiram apesar da incerteza inicial.",
      },
    },
    difficulty: "easy",
    mode: "methodological_judgement",
    tags: ["scientific_method", "critical_thinking"],
  },

  // ===== ROUND 3: REAL-WORLD APPLICATIONS (8 questions) =====
  {
    id: "b3q1",
    round: 3,
    title: "Personalized Medicine",
    titlePt: "Medicina Personalizada",
    scenario:
      "Instead of giving all cancer patients the same treatment, doctors now look at each patient's genes and proteins. Based on this approach, what is the advantage?",
    scenarioPt:
      "Em vez de dar a todos os pacientes com cancro o mesmo tratamento, os médicos agora observam os genes e proteínas de cada paciente. Com base nesta abordagem, qual é a vantagem?",
    dataSignals: [],
    answerOptions: [
      { id: "tailored_treatment", text: "Treatments can be tailored to work better for each patient", textPt: "Os tratamentos podem ser adaptados para funcionar melhor para cada paciente" },
      { id: "all_cured", text: "All patients will definitely be cured", textPt: "Todos os pacientes serão definitivamente curados" },
      { id: "more_complicated", text: "It makes medicine more complicated for no reason", textPt: "Torna a medicina mais complicada sem razão" },
    ],
    correctAnswerId: "tailored_treatment",
    explanation:
      "Excellent! Personalized medicine uses data about individual patients to create targeted treatments. This can mean better outcomes and fewer side effects. It's the future of healthcare!",
    explanationPt:
      "Excelente! A medicina personalizada usa dados sobre pacientes individuais para criar tratamentos direcionados. Isto pode significar melhores resultados e menos efeitos secundários. É o futuro da saúde!",
    explanations: {
      tailored_treatment: {
        en: "Correct! Personalized medicine tailors treatments to each patient's unique genetic and protein profile. This means treatments are more likely to work, side effects are reduced, and outcomes are better. It's a more effective approach than one-size-fits-all medicine.",
        pt: "Correto! A medicina personalizada adapta tratamentos ao perfil genético e proteico único de cada paciente. Isto significa que os tratamentos têm mais probabilidade de funcionar, os efeitos secundários são reduzidos e os resultados são melhores. É uma abordagem mais eficaz do que a medicina única para todos.",
      },
      all_cured: {
        en: "Not quite. While personalized medicine improves outcomes, it doesn't guarantee that all patients will be cured. Some patients may still not respond to treatment. However, personalized medicine does increase the chances of successful treatment compared to generic approaches.",
        pt: "Não exatamente. Embora a medicina personalizada melhore os resultados, não garante que todos os pacientes sejam curados. Alguns pacientes podem ainda não responder ao tratamento. No entanto, a medicina personalizada aumenta as chances de tratamento bem-sucedido em comparação com abordagens genéricas.",
      },
      more_complicated: {
        en: "Not quite. While personalized medicine does require more analysis, the added complexity leads to better outcomes. In healthcare, a more complex approach that works better is always preferable to a simpler approach that works worse.",
        pt: "Não exatamente. Embora a medicina personalizada exija mais análise, a complexidade adicional leva a melhores resultados. Na saúde, uma abordagem mais complexa que funciona melhor é sempre preferível a uma abordagem mais simples que funciona pior.",
      },
    },
    difficulty: "easy",
    mode: "clinical_decision",
    tags: ["personalized_medicine", "healthcare", "data_science"],
  },
  {
    id: "b3q2",
    round: 3,
    title: "Early Detection",
    titlePt: "Detecção Precoce",
    scenario:
      "Scientists can now detect cancer biomarkers in blood tests before symptoms appear. Based on this capability, why is this important?",
    scenarioPt:
      "Os cientistas agora podem detetar marcadores de cancro em testes de sangue antes dos sintomas aparecerem. Com base nesta capacidade, por que isto é importante?",
    dataSignals: [],
    answerOptions: [
      { id: "early_treatment", text: "Early detection allows treatment before cancer spreads", textPt: "A detecção precoce permite tratamento antes do cancro se espalhar" },
      { id: "only_if_sick", text: "It's only useful if you already feel sick", textPt: "É apenas útil se já se sente doente" },
      { id: "blood_not_useful", text: "Blood tests can't detect anything useful", textPt: "Os testes de sangue não podem detetar nada útil" },
    ],
    correctAnswerId: "early_treatment",
    explanation:
      "Perfect! Early detection is a game-changer. When cancer is caught early, treatment is often more effective and less invasive. This is why regular health check-ups are so important.",
    explanationPt:
      "Perfeito! A detecção precoce é uma mudança de jogo. Quando o cancro é detetado cedo, o tratamento é frequentemente mais eficaz e menos invasivo. É por isso que os check-ups de saúde regulares são tão importantes.",
    explanations: {
      early_treatment: {
        en: "Correct! Early detection allows doctors to start treatment before cancer has spread to other parts of the body. Early-stage cancers are typically easier to treat, have better survival rates, and require less aggressive treatment. This is why screening programs and early detection are so important in cancer prevention.",
        pt: "Correto! A detecção precoce permite aos médicos começar o tratamento antes do cancro se ter espalhado para outras partes do corpo. Cancros em fase inicial são tipicamente mais fáceis de tratar, têm taxas de sobrevivência melhores e requerem tratamento menos agressivo. É por isso que os programas de rastreio e detecção precoce são tão importantes na prevenção do cancro.",
      },
      only_if_sick: {
        en: "Not quite. The whole point of early detection is to find disease BEFORE symptoms appear. If you wait until you feel sick, it's no longer 'early' detection—it's late detection. Early detection tests are most valuable for asymptomatic people.",
        pt: "Não exatamente. O objetivo da detecção precoce é encontrar a doença ANTES dos sintomas aparecerem. Se esperar até se sentir doente, já não é detecção 'precoce'—é detecção tardia. Os testes de detecção precoce são mais valiosos para pessoas assintomáticas.",
      },
      blood_not_useful: {
        en: "Not quite. Blood tests are extremely useful for detecting biomarkers. In fact, blood tests are one of the most powerful tools in modern medicine for detecting disease early. Many serious conditions can be detected through blood tests before symptoms appear.",
        pt: "Não exatamente. Os testes de sangue são extremamente úteis para detetar marcadores. Na verdade, os testes de sangue são uma das ferramentas mais poderosas da medicina moderna para detetar doenças cedo. Muitas condições sérias podem ser detetadas através de testes de sangue antes dos sintomas aparecerem.",
      },
    },
    difficulty: "easy",
    mode: "clinical_decision",
    tags: ["early_detection", "healthcare", "prevention"],
  },
  {
    id: "b3q3",
    round: 3,
    title: "Drug Development",
    titlePt: "Desenvolvimento de Medicamentos",
    scenario:
      "Before a new cancer drug is given to patients, scientists test it on cells in the lab. Based on this practice, what is the main purpose?",
    scenarioPt:
      "Antes de um novo medicamento para o cancro ser dado a pacientes, os cientistas testam-no em células no laboratório. Com base nesta prática, qual é o objetivo principal?",
    dataSignals: [],
    answerOptions: [
      { id: "safety_efficacy", text: "To see if the drug works and is safe before human trials", textPt: "Para ver se o medicamento funciona e é seguro antes dos testes em humanos" },
      { id: "waste_time", text: "To waste time before releasing the drug", textPt: "Para perder tempo antes de lançar o medicamento" },
      { id: "testing_unnecessary", text: "Testing is not necessary for new drugs", textPt: "O teste não é necessário para novos medicamentos" },
    ],
    correctAnswerId: "safety_efficacy",
    explanation:
      "Great! Lab testing is a crucial safety step. It helps scientists understand how the drug works, if it's effective, and if there are any serious side effects before testing on humans.",
    explanationPt:
      "Ótimo! O teste em laboratório é um passo de segurança crucial. Ajuda os cientistas a compreender como o medicamento funciona, se é eficaz e se há efeitos secundários graves antes de testar em humanos.",
    explanations: {
      safety_efficacy: {
        en: "Correct! Lab testing (in vitro testing) is a critical first step in drug development. It allows scientists to test whether the drug kills cancer cells, understand how it works, identify potential side effects, and determine safe dosages before any human testing. This protects patient safety and saves time and money by eliminating drugs that don't work.",
        pt: "Correto! O teste em laboratório (teste in vitro) é um passo crítico no desenvolvimento de medicamentos. Permite aos cientistas testar se o medicamento mata células cancerígenas, compreender como funciona, identificar potenciais efeitos secundários e determinar dosagens seguras antes de qualquer teste em humanos. Isto protege a segurança do paciente e economiza tempo e dinheiro ao eliminar medicamentos que não funcionam.",
      },
      waste_time: {
        en: "Not quite. Lab testing is not a waste of time—it's an essential safety measure. Skipping lab testing and going straight to human trials would be dangerous and unethical. Lab testing saves time overall by eliminating ineffective drugs early.",
        pt: "Não exatamente. O teste em laboratório não é uma perda de tempo—é uma medida de segurança essencial. Saltar testes em laboratório e ir diretamente para testes em humanos seria perigoso e antiético. O teste em laboratório economiza tempo no geral ao eliminar medicamentos ineficazes cedo.",
      },
      testing_unnecessary: {
        en: "Not quite. Testing is absolutely necessary for new drugs. Giving untested drugs to patients would be dangerous and unethical. All new drugs must go through rigorous testing (lab, animal, and human trials) before approval. This is why drug development takes many years.",
        pt: "Não exatamente. O teste é absolutamente necessário para novos medicamentos. Dar medicamentos não testados aos pacientes seria perigoso e antiético. Todos os novos medicamentos devem passar por testes rigorosos (laboratório, animal e testes em humanos) antes da aprovação. É por isso que o desenvolvimento de medicamentos leva muitos anos.",
      },
    },
    difficulty: "easy",
    mode: "methodological_judgement",
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
      { id: "healthy_lifestyle", text: "Eat healthy, exercise, avoid smoking - these can reduce risk", textPt: "Comer saudável, fazer exercício, evitar fumar - isto pode reduzir o risco" },
      { id: "genes_determine", text: "Nothing - genes determine everything", textPt: "Nada - os genes determinam tudo" },
      { id: "lifestyle_no_effect", text: "Lifestyle has no effect on genetic risk", textPt: "O estilo de vida não tem efeito no risco genético" },
    ],
    correctAnswerId: "healthy_lifestyle",
    explanation:
      "Excellent! This is an important message: genes are not destiny. Your lifestyle choices - diet, exercise, sleep, stress management - can significantly influence your health outcomes, even if you have genetic risks.",
    explanationPt:
      "Excelente! Esta é uma mensagem importante: os genes não são o destino. As suas escolhas de estilo de vida - dieta, exercício, sono, gestão do stress - podem influenciar significativamente os seus resultados de saúde, mesmo que tenha riscos genéticos.",
    explanations: {
      healthy_lifestyle: {
        en: "Correct! While genes do influence health, they are not destiny. Lifestyle factors like diet, exercise, sleep, stress management, and avoiding smoking can significantly reduce cancer risk, even in people with genetic predisposition. This is called 'epigenetics'—your lifestyle can turn genes on or off.",
        pt: "Correto! Embora os genes influenciem a saúde, não são o destino. Fatores de estilo de vida como dieta, exercício, sono, gestão do stress e evitar fumar podem reduzir significativamente o risco de cancro, mesmo em pessoas com predisposição genética. Isto chama-se 'epigenética'—o seu estilo de vida pode ligar ou desligar genes.",
      },
      genes_determine: {
        en: "Not quite. While genes do play a role in health, they don't determine everything. Lifestyle factors are equally important. Many people with genetic risk factors never develop cancer because of healthy lifestyle choices. Genes are not destiny.",
        pt: "Não exatamente. Embora os genes desempenhem um papel na saúde, não determinam tudo. Fatores de estilo de vida são igualmente importantes. Muitas pessoas com fatores de risco genético nunca desenvolvem cancro por causa de escolhas de estilo de vida saudáveis. Os genes não são o destino.",
      },
      lifestyle_no_effect: {
        en: "Not quite. Lifestyle has a HUGE effect on health outcomes, even for people with genetic risks. Studies show that people with genetic predisposition who maintain healthy lifestyles have much lower cancer rates than those with poor lifestyles. Your choices matter!",
        pt: "Não exatamente. O estilo de vida tem um ENORME efeito nos resultados de saúde, mesmo para pessoas com riscos genéticos. Estudos mostram que pessoas com predisposição genética que mantêm estilos de vida saudáveis têm taxas de cancro muito mais baixas do que aquelas com estilos de vida pobres. As suas escolhas importam!",
      },
    },
    difficulty: "easy",
    mode: "clinical_decision",
    tags: ["lifestyle", "genetics", "health"],
  },
  {
    id: "b3q5",
    round: 3,
    title: "Teamwork in Science",
    titlePt: "Trabalho em Equipa na Ciência",
    scenario:
      "Modern biomedical research involves biologists, computer scientists, doctors, and statisticians working together. Based on this diversity, why is this teamwork important?",
    scenarioPt:
      "A investigação biomédica moderna envolve biólogos, cientistas de computador, médicos e estatísticos trabalhando juntos. Com base nesta diversidade, por que este trabalho em equipa é importante?",
    dataSignals: [],
    answerOptions: [
      { id: "different_skills", text: "Different experts bring different skills and perspectives", textPt: "Diferentes especialistas trazem diferentes competências e perspectivas" },
      { id: "one_person", text: "One person can do all the work alone", textPt: "Uma pessoa pode fazer todo o trabalho sozinha" },
      { id: "teamwork_slows", text: "Teamwork slows down research", textPt: "O trabalho em equipa atrasa a investigação" },
    ],
    correctAnswerId: "different_skills",
    explanation:
      "Perfect! Science is collaborative. A biologist understands cells, a computer scientist analyzes big data, a doctor knows patient needs, and a statistician ensures results are reliable. Together, they solve complex problems.",
    explanationPt:
      "Perfeito! A ciência é colaborativa. Um biólogo compreende células, um cientista de computador analisa grandes dados, um médico conhece as necessidades dos pacientes e um estatístico garante que os resultados são fiáveis. Juntos, resolvem problemas complexos.",
    explanations: {
      different_skills: {
        en: "Correct! Teamwork in science is essential because complex problems require diverse expertise. A biologist understands cell biology, a computer scientist can analyze massive datasets, a doctor understands clinical needs, and a statistician ensures the data is interpreted correctly. Together, they accomplish what no single person could do alone.",
        pt: "Correto! O trabalho em equipa na ciência é essencial porque problemas complexos requerem expertise diversa. Um biólogo compreende biologia celular, um cientista de computador pode analisar conjuntos de dados massivos, um médico compreende necessidades clínicas e um estatístico garante que os dados são interpretados corretamente. Juntos, realizam o que nenhuma pessoa sozinha poderia fazer.",
      },
      one_person: {
        en: "Not quite. While some scientists are multi-talented, modern biomedical research is too complex for one person to master all areas. You can't be an expert in cell biology, computer science, medicine, AND statistics all at once. Teamwork is necessary.",
        pt: "Não exatamente. Embora alguns cientistas sejam multi-talentosos, a investigação biomédica moderna é demasiado complexa para uma pessoa dominar todas as áreas. Não pode ser um especialista em biologia celular, ciência da computação, medicina E estatística tudo ao mesmo tempo. O trabalho em equipa é necessário.",
      },
      teamwork_slows: {
        en: "Not quite. Teamwork actually speeds up research by allowing experts to focus on their specialties and collaborate efficiently. A team of specialists working together accomplishes more than one generalist working alone.",
        pt: "Não exatamente. O trabalho em equipa na verdade acelera a investigação ao permitir que especialistas se concentrem nas suas especialidades e colaborem eficientemente. Uma equipa de especialistas trabalhando juntos realiza mais do que um generalista trabalhando sozinho.",
      },
    },
    difficulty: "easy",
    mode: "methodological_judgement",
    tags: ["collaboration", "science", "teamwork"],
  },
  {
    id: "b3q6",
    round: 3,
    title: "Data Privacy in Medicine",
    titlePt: "Privacidade de Dados na Medicina",
    scenario:
      "When scientists study patient data, they must protect privacy. Based on this requirement, why is this important?",
    scenarioPt:
      "Quando os cientistas estudam dados de pacientes, devem proteger a privacidade. Com base neste requisito, por que isto é importante?",
    dataSignals: [],
    answerOptions: [
      { id: "patient_rights", text: "Patients have a right to privacy and protection of their information", textPt: "Os pacientes têm direito à privacidade e proteção das suas informações" },
      { id: "privacy_irrelevant", text: "Privacy doesn't matter in medical research", textPt: "A privacidade não importa na investigação médica" },
      { id: "all_public", text: "All patient data should be public", textPt: "Todos os dados dos pacientes devem ser públicos" },
    ],
    correctAnswerId: "patient_rights",
    explanation:
      "Excellent! Privacy is a fundamental right. Scientists use techniques like anonymization (removing names and personal details) to protect patients while still advancing research. Trust is essential.",
    explanationPt:
      "Excelente! A privacidade é um direito fundamental. Os cientistas usam técnicas como anonimização (remover nomes e detalhes pessoais) para proteger os pacientes enquanto avançam a investigação. A confiança é essencial.",
    explanations: {
      patient_rights: {
        en: "Correct! Patient privacy is a fundamental right and a legal requirement. Patients must trust that their medical information is protected. Scientists use techniques like anonymization and encryption to protect patient data while still being able to conduct research. Without privacy protection, patients wouldn't participate in research, which would slow medical progress.",
        pt: "Correto! A privacidade do paciente é um direito fundamental e um requisito legal. Os pacientes devem confiar que as suas informações médicas estão protegidas. Os cientistas usam técnicas como anonimização e encriptação para proteger dados de pacientes enquanto ainda podem conduzir investigação. Sem proteção de privacidade, os pacientes não participariam em investigação, o que abrandaria o progresso médico.",
      },
      privacy_irrelevant: {
        en: "Not quite. Privacy is absolutely relevant in medical research. It's both a legal requirement and an ethical responsibility. Violating patient privacy would be unethical and illegal, and it would destroy patient trust in the medical system.",
        pt: "Não exatamente. A privacidade é absolutamente relevante na investigação médica. É tanto um requisito legal como uma responsabilidade ética. Violar a privacidade do paciente seria antiético e ilegal, e destruiria a confiança do paciente no sistema médico.",
      },
      all_public: {
        en: "Not quite. Making all patient data public would violate privacy rights and be unethical. Patients have a right to keep their medical information private. Scientists can conduct research while protecting privacy through anonymization and other techniques.",
        pt: "Não exatamente. Tornar todos os dados dos pacientes públicos violaria direitos de privacidade e seria antiético. Os pacientes têm direito a manter as suas informações médicas privadas. Os cientistas podem conduzir investigação enquanto protegem a privacidade através de anonimização e outras técnicas.",
      },
    },
    difficulty: "easy",
    mode: "methodological_judgement",
    tags: ["privacy", "ethics", "healthcare"],
  },
  {
    id: "b3q7",
    round: 3,
    title: "Future of Cancer Research",
    titlePt: "Futuro da Investigação do Cancro",
    scenario:
      "With advances in gene sequencing and AI, scientists can now analyze cancer data faster than ever. Based on these technological advances, what might this enable?",
    scenarioPt:
      "Com avanços no sequenciamento de genes e IA, os cientistas agora podem analisar dados de cancro mais rápido do que nunca. Com base nestes avanços tecnológicos, o que isto pode permitir?",
    dataSignals: [],
    answerOptions: [
      { id: "faster_diagnosis", text: "Faster diagnosis and more personalized treatments", textPt: "Diagnóstico mais rápido e tratamentos mais personalizados" },
      { id: "tech_impossible", text: "Technology makes cancer research impossible", textPt: "A tecnologia torna a investigação do cancro impossível" },
      { id: "ai_no_help", text: "AI cannot help with medical research", textPt: "A IA não pode ajudar na investigação médica" },
    ],
    correctAnswerId: "faster_diagnosis",
    explanation:
      "Perfect! Technology is revolutionizing medicine. AI can spot patterns in huge datasets that humans might miss. This leads to faster, more accurate diagnoses and better-targeted treatments.",
    explanationPt:
      "Perfeito! A tecnologia está a revolucionar a medicina. A IA pode detetar padrões em enormes conjuntos de dados que os humanos podem perder. Isto leva a diagnósticos mais rápidos e precisos e tratamentos mais direcionados.",
    explanations: {
      faster_diagnosis: {
        en: "Correct! Advanced technology like AI and fast gene sequencing enables faster analysis of cancer data, leading to quicker diagnoses and more personalized treatment plans. AI can identify patterns in massive datasets that would take humans years to analyze, accelerating medical discovery and improving patient outcomes.",
        pt: "Correto! Tecnologia avançada como IA e sequenciamento rápido de genes permite análise mais rápida de dados de cancro, levando a diagnósticos mais rápidos e planos de tratamento mais personalizados. A IA pode identificar padrões em conjuntos de dados massivos que levaria anos aos humanos a analisar, acelerando a descoberta médica e melhorando os resultados dos pacientes.",
      },
      tech_impossible: {
        en: "Not quite. Technology actually makes cancer research EASIER and FASTER, not impossible. Advanced tools like AI and gene sequencing have revolutionized the field and led to major breakthroughs in cancer treatment.",
        pt: "Não exatamente. A tecnologia na verdade torna a investigação do cancro MAIS FÁCIL e MAIS RÁPIDA, não impossível. Ferramentas avançadas como IA e sequenciamento de genes revolucionaram o campo e levaram a avanços importantes no tratamento do cancro.",
      },
      ai_no_help: {
        en: "Not quite. AI is already helping with medical research in many ways—analyzing medical images, identifying drug candidates, predicting treatment responses, and discovering new disease patterns. AI is one of the most powerful tools in modern medicine.",
        pt: "Não exatamente. A IA já está ajudando na investigação médica de muitas formas—analisando imagens médicas, identificando candidatos a medicamentos, prevendo respostas ao tratamento e descobrindo novos padrões de doença. A IA é uma das ferramentas mais poderosas da medicina moderna.",
      },
    },
    difficulty: "easy",
    mode: "clinical_decision",
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
      { id: "critical_thinking", text: "Critical thinking and asking good questions", textPt: "Pensamento crítico e fazer boas perguntas" },
      { id: "memorize_facts", text: "Memorizing all the facts", textPt: "Memorizar todos os factos" },
      { id: "work_alone", text: "Working alone without help", textPt: "Trabalhar sozinho sem ajuda" },
    ],
    correctAnswerId: "critical_thinking",
    explanation:
      "Excellent! The best scientists ask questions, think critically, and don't accept answers without evidence. You've been doing exactly that in this game. Keep asking 'why?' and 'how?' - that's the spirit of discovery!",
    explanationPt:
      "Excelente! Os melhores cientistas fazem perguntas, pensam criticamente e não aceitam respostas sem evidências. Tem estado a fazer exatamente isto neste jogo. Continue a perguntar 'porquê?' e 'como?' - esse é o espírito da descoberta!",
    explanations: {
      critical_thinking: {
        en: "Correct! Critical thinking is the most important skill for a biodata detective. Good scientists ask questions, examine evidence carefully, look for patterns, consider alternative explanations, and don't accept conclusions without solid evidence. This is what makes great scientists—not memorization, but the ability to think deeply and ask good questions.",
        pt: "Correto! O pensamento crítico é a habilidade mais importante para um detetive de biodados. Bons cientistas fazem perguntas, examinam evidências cuidadosamente, procuram padrões, consideram explicações alternativas e não aceitam conclusões sem evidência sólida. É isto que torna grandes cientistas—não memorização, mas a capacidade de pensar profundamente e fazer boas perguntas.",
      },
      memorize_facts: {
        en: "Not quite. While knowing facts is helpful, memorization alone doesn't make a good scientist. Science is about understanding concepts and being able to apply them to new situations. Critical thinking is more important than memorization.",
        pt: "Não exatamente. Embora conhecer factos seja útil, a memorização sozinha não torna um bom cientista. A ciência é sobre compreender conceitos e ser capaz de aplicá-los a novas situações. O pensamento crítico é mais importante do que a memorização.",
      },
      work_alone: {
        en: "Not quite. Modern science is collaborative. The best scientists work with teams, share ideas, and build on each other's work. While independent thinking is important, working with others and learning from different perspectives is equally valuable.",
        pt: "Não exatamente. A ciência moderna é colaborativa. Os melhores cientistas trabalham com equipas, partilham ideias e constroem sobre o trabalho uns dos outros. Embora o pensamento independente seja importante, trabalhar com outros e aprender com diferentes perspectivas é igualmente valioso.",
      },
    },
    difficulty: "easy",
    mode: "methodological_judgement",
    tags: ["critical_thinking", "science", "discovery"],
  },
];
