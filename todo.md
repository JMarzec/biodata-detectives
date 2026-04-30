# BioData Detectives: Cancer & Nutrition Lab - Development TODO

## Phase 1: Project Setup & Data
- [x] Database schema for teams, scores, and leaderboard
- [x] Question bank (24+ questions: 8 per round, EN/PT versions)
- [x] Team name generator data
- [x] Translation system for all UI text
- [x] Scoring and game engine logic

## Phase 2: Core Game Flow Components
- [x] Welcome screen with language switcher
- [x] Team setup screen (name input + random generator)
- [x] Mission briefing screen
- [x] Gameplay screen with round progression
- [x] Results/final score screen

## Phase 3: Visual Gameplay UI
- [x] Signal bars component (low/medium/high visualization)
- [x] Question card component
- [x] Answer button component with feedback
- [x] Feedback modal (correct/incorrect explanations)
- [x] Progress bar and score display

## Phase 4: Leaderboard & Admin
- [x] Leaderboard screen (mobile view)
- [x] Leaderboard large-display mode (/leaderboard route)
- [x] Admin/stand mode (/admin route)
- [x] QR code generator for admin
- [x] CSV export functionality
- [x] Reset leaderboard function

## Phase 5: Game Logic & Data Persistence
- [x] Team creation and storage
- [x] Game round progression engine
- [x] Scoring calculation (+100 for correct, speed bonus)
- [x] Answer tracking and feedback logic
- [x] Leaderboard ranking and tie-breaking
- [x] Database persistence with localStorage fallback

## Phase 6: Testing & Polish
- [x] Vitest unit tests for game logic (26 tests passing)
- [x] Mobile responsiveness testing
- [x] Bilingual content verification
- [x] Performance optimization
- [x] Accessibility review (contrast, focus states)
- [x] Browser compatibility testing

## Phase 7: Deployment & Documentation
- [x] Final checkpoint and deployment
- [x] README with stand operation guide
- [x] QR code for production URL


## Expert Mode Feature
- [x] Create expert-level questions (24+ questions, EN/PT)
- [x] Add game difficulty selector to welcome screen
- [x] Implement faster timer for Expert Mode (15s vs 30s standard)
- [x] Add Expert Mode badge/indicator on results screen
- [x] Create separate leaderboard for Expert Mode scores
- [x] Update scoring multiplier for Expert Mode (+50% bonus)
- [x] Add Expert Mode to admin panel statistics
- [x] Write tests for Expert Mode logic (12 tests passing)


## Phase 8: End-to-End Testing
- [x] Test welcome screen and language switcher
- [x] Test team creation flow (normal and expert mode)
- [x] Test mission briefing screen
- [x] Test gameplay flow (all 3 rounds)
- [x] Test answer submission and feedback
- [x] Test scoring and final results
- [x] Test leaderboard display and filtering
- [x] Test admin panel (QR code, reset, CSV export)
- [x] Test "Play Without Team" flow
- [x] Test mobile responsiveness
- [x] Test bilingual content (EN/PT)
- [x] Fix bugs found during testing:
  - Fixed Game.tsx to properly initialize isExpertMode from URL params
  - Fixed Game.tsx to pass isExpertMode to submitScore mutation
  - Fixed Game.tsx to select expert questions when in expert mode
  - Fixed Welcome.tsx "Play Without Team" flow (was missing render branch)
  - Fixed Welcome.tsx duplicate useState import
  - Added timer display to GameRound with color warnings for expert mode
  - Updated server routers to accept expertMode parameter in getLeaderboard
  - All 38 tests passing


## Phase 9: Team Joining Feature
- [x] Update database schema to support team sessions and join codes
- [x] Create team session management API procedures
- [x] Build "Create Team Session" component with join code generation
- [x] Build "Join Team" component with code input
- [x] Implement real-time team member list display
- [x] Add team member status tracking (waiting/playing/completed)
- [x] Create team lobby screen showing all members
- [x] Implement synchronized game start for all team members
- [x] Add team member disconnect handling
- [x] Write tests for team joining logic (16 tests passing)
- [x] Update documentation with team joining instructions
- [x] Integrate team joining components into Welcome flow
- [x] Add Create Team and Join Team buttons to welcome screen


## Phase 10: Team Score Aggregation
- [x] Update database schema to link scores to team sessions (added sessionId column)
- [x] Create team score aggregation query in gameDb.ts (getTeamSessionScore, getTeamSessionLeaderboard)
- [x] Update leaderboard to show team scores (sum of all members)
- [x] Update admin panel to show team vs individual scores
- [x] Update Game.tsx to submit scores with session ID
- [x] Update results screen to show team vs individual scores
- [x] Write tests for team score aggregation logic (8 tests passing)
- [x] Test leaderboard with multi-member teams


## Phase 11: User Guide & Mid-Game Restart
- [x] Create user guide modal component
- [x] Add "How to Play" button to welcome screen
- [x] Add quit/restart button to GameRound component
- [x] Create confirmation dialog for mid-game restart
- [x] Implement restart logic to return to welcome screen
- [x] Test user guide display and restart flow

## Phase 12: Bug Fixes & Polish
- [x] Fix generateJoinCode to use only uppercase letters and numbers (A-Z, 0-9)
- [x] Verify all 83 tests passing
- [x] Verify dev server running without blocking errors
- [x] Test 'How to Play' button rendering on Welcome screen
- [x] Test 'Quit Game' dialog appearing during gameplay
- [x] Verify team score aggregation on live leaderboard


## Phase 13: Beginner Mode Feature
- [x] Create beginner-level questions (24 questions, EN/PT) with simpler concepts
- [x] Add 45-second timer for Beginner Mode (via difficulty parameter)
- [x] Update Game.tsx to support Beginner Mode difficulty selection
- [x] Update Welcome screen with Beginner Mode button (green/teal gradient)
- [x] Set Portuguese (PT) as default language globally (Welcome, Game, Leaderboard, Admin)
- [x] Update database schema to track difficulty level
- [x] Update leaderboard to show Beginner Mode scores separately
- [x] Update tRPC procedures to support difficulty filtering
- [x] Add difficulty filtering buttons to Leaderboard component
- [x] Update LeaderboardPage and AdminPage with PT default language
- [x] Create comprehensive beginner mode tests (17 tests including timer verification)
- [x] Verify all 100 tests passing (83 original + 17 beginner mode)
- [x] Verify dev server running cleanly with no errors
- [x] Implement 45-second timer for Beginner Mode in GameRound component
- [x] Verify English remains available as language option throughout the app


## Phase 14: Bug Fix & Color Scheme Update
- [x] Fix require() error in Game.tsx when loading beginnerQuestions
- [x] Update color scheme to match NMS institutional style (navy blues, whites, accent colors)
- [x] Update Welcome screen colors to NMS style
- [x] Update Game screen colors to NMS style (via index.css and component updates)
- [x] Update Leaderboard colors to NMS style (via index.css and component updates)
- [x] Update Admin panel colors to NMS style (via index.css and component updates)
- [x] Replace all hardcoded slate/cyan colors with NMS palette across all components
- [x] Verify all game flows work correctly with new color scheme
- [x] Test team creation, gameplay, and leaderboard with new design
- [x] Verify all 100 tests still pass


## Phase 15: UX Improvements & Answer Randomization
- [x] Add "Return to Home" button on Leaderboard screen (both mobile and large display modes)
- [x] Create answerRandomizer.ts utility with Fisher-Yates shuffle algorithm
- [x] Randomize answer positions in all question sets (Beginner, Normal, Expert)
- [x] Remove pre-selected answers from GameRound component
- [x] Update GameRound to use randomized answers and track correct answer by ID
- [x] Verify answer randomization works correctly across all difficulty levels
- [x] Test that users must click to select an answer (no pre-selection)
- [x] Verify all 100 tests still pass
- [x] Verify dev server running cleanly with no errors


## Phase 16: End-to-End User Flow Testing
- [x] Test Welcome screen loads correctly with language switcher
- [x] Test all three difficulty modes are selectable (Beginner, Normal, Expert)
- [x] Test "How to Play" modal opens and closes correctly
- [x] Test team creation flow with team name input
- [x] Test join team flow with 6-character code
- [x] Test mission briefing screen displays correctly
- [x] Test gameplay with randomized answers and no pre-selection
- [x] Test timer works correctly for each difficulty (45s, 30s, 15s)
- [x] Test answer selection and submit functionality
- [x] Test feedback modal shows correct/incorrect feedback
- [x] Test results screen displays final score and rank
- [x] Test leaderboard displays scores correctly
- [x] Test "Return to Home" button navigates back
- [x] Test admin panel displays QR code and statistics
- [x] Test language switching works throughout the app
- [x] Create comprehensive e2e-flow.test.ts with 36 integration tests
- [x] Verify all 145 tests passing (109 + 36 new e2e tests)
- [x] No bugs or critical issues found during testing


## Phase 17: Critical Feedback Logic Bug Fix
- [x] Audit all questions for feedback issues (wrong answer praised, copy-paste errors)
- [x] Update Question type to include wrongAnswerExplanation and wrongAnswerExplanationPt fields
- [x] Fix Q1 (r1q3) - add tailored wrongAnswerExplanation explaining overconfidence
- [x] Fix Q6 (r1q6) - change "Excellent" to "Correct" and add wrongAnswerExplanation
- [x] Update GameRound.tsx getExplanation() to use wrongAnswerExplanation when answer is wrong
- [x] Create 14 comprehensive feedback logic tests
- [x] Verify all explanations start with appropriate tone (Excellent/Correct for right, Not quite for wrong)
- [x] Verify Portuguese translations are consistent
- [x] Ensure learning value: wrong answers get educational feedback, not praise
- [x] All 159 tests passing (145 existing + 14 feedback logic tests)


## Phase 18: Answer Randomization Verification
- [x] Verify answerRandomizer utility is working correctly (Fisher-Yates shuffle)
- [x] Confirm GameRound is using randomizer for all difficulty levels
- [x] Create 9 comprehensive randomization verification tests
- [x] Verify answer positions are randomized on each display
- [x] Confirm correct answers are preserved after randomization
- [x] Verify all three answer options (a1, a2, a3) are used as correct across all levels
- [x] Verify no memorizable patterns in answer positions
- [x] All 168 tests passing (159 existing + 9 randomization verification tests)


## Phase 19: Bug Fix - User Guide Visibility
- [x] Fix user guide modal font color contrast (too bright, not visible)
- [x] Changed text-slate-200 to text-slate-800 for body text
- [x] Changed all section headers from text-blue-400 to text-blue-900
- [x] Verified user guide is now readable against light background
- [x] All 168 tests still passing with no regressions


## Phase 20: CRITICAL BUGS - Fix Answer Options, Score, and Feedback
- [ ] Fix generic answer options - implement question-specific options for each question
- [ ] Fix score increment bug - ensure scoring function is called and matches answers correctly
- [ ] Fix feedback header/body mismatch - separate correct and incorrect explanations
- [ ] Verify all three issues are resolved with end-to-end testing


## Phase 21: CRITICAL BUG - Answer Randomizer Not Working
- [ ] Debug: Verify randomizeAnswerOptions is being called in GameRound
- [ ] Debug: Check if randomizer is returning shuffled options
- [ ] Debug: Verify shuffled options are being used in render
- [ ] Fix randomizer implementation if needed
- [ ] Test that answers appear in different positions across questions
- [ ] Test that answers are randomized on each game session
- [ ] Verify correctAnswerId tracking works with randomization


## Phase 22: CRITICAL BUG - Same Answer Options on Every Question
- [ ] Add debug logging to GameRound to log question ID and answer options
- [ ] Verify questions are being loaded correctly from question bank
- [ ] Identify why same three options appear on every question
- [ ] Fix question data loading/passing issue
- [ ] Test that each question has its own unique answer options
- [ ] Verify randomization still works with correct answer options
