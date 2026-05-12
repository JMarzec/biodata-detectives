# Audit of Beginner Questions: Explanation vs correctAnswerId Mismatches

## Summary
Checking all 24 beginner questions for cases where the explanation text contradicts the correctAnswerId value.

---

## QUESTIONS WITH MISMATCHES

### ❌ b1q3: "What is Cancer?"
- **Current correctAnswerId:** a3
- **Answer a3 text:** "Cancer is always inherited from parents"
- **Explanation:** "Correct! When cells grow without control, they can form tumors and interfere with normal body functions..."
- **Issue:** Explanation describes uncontrolled cell growth (a1), not inheritance (a3). Answer a3 is factually wrong.
- **Should be:** a1

### ❌ b1q4: "Reading Simple Data: High vs Low"
- **Current correctAnswerId:** a2
- **Answer a2 text:** "The cells are not working at all"
- **Explanation:** "Good! A high protein level means that protein is being produced a lot in the cells..."
- **Issue:** Explanation says high protein = active production (a1), not "cells not working" (a2).
- **Should be:** a1

### ❌ b1q5: "Nutrition and Health"
- **Current correctAnswerId:** a3
- **Answer a3 text:** "DNA replication"
- **Explanation:** "Excellent! Antioxidants are compounds that help prevent cell damage..."
- **Issue:** Explanation is about antioxidants (a1), not DNA replication (a3).
- **Should be:** a1

### ❌ b1q6: "Cell Growth Control"
- **Current correctAnswerId:** a3
- **Answer a3 text:** "Cells change color and become visible"
- **Explanation:** "Correct! When growth control breaks down, cells can divide uncontrollably. This is one of the key features of cancer..."
- **Issue:** Explanation describes uncontrolled growth/cancer (a1), not color change (a3).
- **Should be:** a1

### ❌ b1q7: "Immune System Basics"
- **Current correctAnswerId:** a3
- **Answer a3 text:** "Pump blood around the body"
- **Explanation:** "Perfect! The immune system includes white blood cells and other defenders that patrol your body looking for threats..."
- **Issue:** Explanation describes immune function (a1), not blood pumping (a3, which is the heart).
- **Should be:** a1

### ❌ b1q8: "Why Study Biomedical Data?"
- **Current correctAnswerId:** a3
- **Answer a3 text:** "To prove that all diseases are genetic"
- **Explanation:** "Excellent! By understanding the biology of diseases, scientists can create targeted treatments..."
- **Issue:** Explanation describes treatment development (a1), not proving all diseases are genetic (a3, which is false).
- **Should be:** a1

### ❌ b2q2: "Understanding 'Medium' Levels"
- **Current correctAnswerId:** a3
- **Answer a3 text:** "The measurement is wrong"
- **Explanation:** "Good! A medium level (around 50%) means the protein is present at a balanced amount..."
- **Issue:** Explanation describes balanced levels (a1), not measurement error (a3).
- **Should be:** a1

### ❌ b2q4: "Mixed Signals"
- **Current correctAnswerId:** a2
- **Answer a2 text:** "Ignore the data and guess"
- **Explanation:** "Perfect! Mixed signals require careful analysis. Scientists look for patterns, consider what each signal means..."
- **Issue:** Explanation describes careful analysis (a1), not ignoring data (a2, which is wrong).
- **Should be:** a1

### ❌ b2q5: "Extreme Values"
- **Current correctAnswerId:** a2
- **Answer a2 text:** "The measurement equipment is broken"
- **Explanation:** "Good thinking! A dramatic change like this suggests something significant is happening..."
- **Issue:** Explanation describes significant biological change (a1), not equipment failure (a2).
- **Should be:** a1

### ❌ b2q7: "Connecting Data to Health"
- **Current correctAnswerId:** a2
- **Answer a2 text:** "Immune markers have nothing to do with health"
- **Explanation:** "Great insight! This observation shows why scientists study these markers - they often correlate with health outcomes..."
- **Issue:** Explanation says markers correlate with health (a1), not that they have nothing to do with health (a2, which is wrong).
- **Should be:** a1

### ❌ b2q8: "Uncertainty in Science"
- **Current correctAnswerId:** a2
- **Answer a2 text:** "Publish their guess immediately"
- **Explanation:** "Perfect! This is how real science works. When you find something interesting but aren't sure, you design more experiments..."
- **Issue:** Explanation describes validation through experiments (a1), not immediate publication (a2, which is unethical).
- **Should be:** a1

### ❌ b3q2: "Early Detection"
- **Current correctAnswerId:** a2
- **Answer a2 text:** "It's only useful if you already feel sick"
- **Explanation:** "Perfect! Early detection is a game-changer. When cancer is caught early, treatment is often more effective..."
- **Issue:** Explanation describes early detection value (a1), not usefulness only when sick (a2, which contradicts "early").
- **Should be:** a1

### ❌ b3q3: "Drug Development"
- **Current correctAnswerId:** a3
- **Answer a3 text:** "Testing is not necessary for new drugs"
- **Explanation:** "Great! Lab testing is a crucial safety step. It helps scientists understand how the drug works..."
- **Issue:** Explanation emphasizes testing importance (a1), not that testing is unnecessary (a3, which is dangerous/false).
- **Should be:** a1

### ❌ b3q5: "Teamwork in Science"
- **Current correctAnswerId:** a3
- **Answer a3 text:** "Teamwork slows down research"
- **Explanation:** "Perfect! Science is collaborative. A biologist understands cells, a computer scientist analyzes big data..."
- **Issue:** Explanation describes collaborative benefits (a1), not teamwork slowing research (a3, which is wrong).
- **Should be:** a1

### ❌ b3q6: "Data Privacy in Medicine"
- **Current correctAnswerId:** a2
- **Answer a2 text:** "Privacy doesn't matter in medical research"
- **Explanation:** "Excellent! Privacy is a fundamental right. Scientists use techniques like anonymization..."
- **Issue:** Explanation emphasizes privacy importance (a1), not that privacy doesn't matter (a2, which is wrong).
- **Should be:** a1

### ❌ b3q7: "Future of Cancer Research"
- **Current correctAnswerId:** a2
- **Answer a2 text:** "Technology makes cancer research impossible"
- **Explanation:** "Perfect! Technology is revolutionizing medicine. AI can spot patterns in huge datasets..."
- **Issue:** Explanation describes technology benefits (a1), not that technology makes research impossible (a2, which is wrong).
- **Should be:** a1

---

## QUESTIONS WITH CORRECT MAPPINGS

### ✅ b1q1: "What is DNA?"
- correctAnswerId: a1 ✓
- Explanation matches a1 ✓

### ✅ b1q2: "What are Genes?"
- correctAnswerId: a1 ✓
- Explanation matches a1 ✓

### ✅ b2q1: "Comparing Two Signals"
- correctAnswerId: a1 ✓
- Explanation matches a1 ✓

### ✅ b2q3: "Pattern Recognition: All High"
- correctAnswerId: a1 ✓
- Explanation matches a1 ✓

### ✅ b2q6: "Consistency Across Patients"
- correctAnswerId: a1 ✓
- Explanation matches a1 ✓

### ✅ b3q1: "Personalized Medicine"
- correctAnswerId: a1 ✓
- Explanation matches a1 ✓

### ✅ b3q4: "Lifestyle and Genes"
- correctAnswerId: a1 ✓
- Explanation matches a1 ✓

### ✅ b3q8: "You as a Biodata Detective"
- correctAnswerId: a1 ✓
- Explanation matches a1 ✓

---

## SUMMARY

- **Total questions:** 24
- **Mismatches found:** 16 (67%)
- **Correct mappings:** 8 (33%)
- **Pattern:** All 16 mismatches have the same issue: correctAnswerId points to a wrong/nonsensical answer, while the explanation describes what should be the correct answer (a1)

## RECOMMENDATION

Fix all 16 mismatched questions by changing their correctAnswerId to "a1". This will align the game logic with the pedagogical content and explanations.

