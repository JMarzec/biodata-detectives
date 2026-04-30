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
