import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { createTeam, recordScore, getAllScores, getTopScores, deleteAllScores, exportScoresAsCSV, getTeamSessionLeaderboard, getTopTeamSessions } from "./gameDb";
import { calculateFinalScore, selectGameQuestions } from "@shared/gameEngine";
import { questions } from "@shared/questions";
import { expertQuestions } from "@shared/expertQuestions";
import { teamJoiningRouter } from "./teamJoiningRouter";

export const appRouter = router({
  system: systemRouter,
  teamJoining: teamJoiningRouter,
  auth: router({
    me: publicProcedure.query((opts) => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // BioData Detectives Game API
  game: router({
    // Create a new team
    createTeam: publicProcedure
      .input(
        z.object({
          teamName: z.string().min(1).max(255),
          language: z.enum(["en", "pt"]).default("en"),
          isExpertMode: z.boolean().default(false),
        })
      )
      .mutation(async ({ input }) => {
        const teamId = await createTeam(input.teamName, input.language);
        return { teamId, isExpertMode: input.isExpertMode };
      }),

    // Get questions for a game session
    getQuestions: publicProcedure
      .input(z.object({ isExpertMode: z.boolean().default(false) }).optional())
      .query(async ({ input }) => {
        const difficulty = input?.isExpertMode ? "hard" : undefined;
        const selectedQuestions = selectGameQuestions(questions, difficulty);
        return selectedQuestions;
      }),

    // Submit game results
    submitScore: publicProcedure
      .input(
        z.object({
          teamId: z.string(),
          answers: z.array(
            z.object({
              questionId: z.string(),
              answerId: z.string(),
              isCorrect: z.boolean(),
              timeSpent: z.number(),
            })
          ),
          startTime: z.number(),
          isExpertMode: z.boolean().default(false),
          sessionId: z.string().optional(), // Optional: for team joining sessions
        })
      )
      .mutation(async ({ input }) => {
        const finalScore = calculateFinalScore(input.answers, input.startTime, input.isExpertMode);
        const scoreId = await recordScore(
          input.teamId,
          finalScore.totalScore,
          finalScore.accuracy,
          finalScore.timeTaken,
          input.answers,
          finalScore.rank,
          input.isExpertMode,
          input.sessionId
        );

        return {
          scoreId,
          ...finalScore,
        };
      }),

    // Get leaderboard
    getLeaderboard: publicProcedure.query(async () => {
      const allScores = await getAllScores();
      return allScores.map((score, index) => ({
        leaderboardRank: index + 1,
        ...score,
      }));
    }),

    // Get top scores
    getTopScores: publicProcedure
      .input(z.object({ limit: z.number().default(10) }))
      .query(async ({ input }) => {
        const topScores = await getTopScores(input.limit);
        return topScores.map((score, index) => ({
          leaderboardRank: index + 1,
          ...score,
        }));
      }),

    // Get team session leaderboard (aggregated scores for multi-player sessions)
    getTeamSessionLeaderboard: publicProcedure.query(async () => {
      const leaderboard = await getTeamSessionLeaderboard();
      return leaderboard.map((entry, index) => ({
        leaderboardRank: index + 1,
        ...entry,
      }));
    }),

    // Get top team sessions
    getTopTeamSessions: publicProcedure
      .input(z.object({ limit: z.number().default(10) }))
      .query(async ({ input }) => {
        const topSessions = await getTopTeamSessions(input.limit);
        return topSessions.map((session, index) => ({
          leaderboardRank: index + 1,
          ...session,
        }));
      }),

    // Admin: Delete all scores (requires admin key)
    deleteAllScores: publicProcedure
      .input(z.object({ adminKey: z.string() }))
      .mutation(async ({ input }) => {
        // Verify admin key - in production use environment variable
        const validKey = process.env.ADMIN_KEY || "biodata-admin-2026";
        if (input.adminKey !== validKey) {
          throw new Error("Invalid admin key");
        }
        await deleteAllScores();
        return { success: true };
      }),

    // Admin: Export scores as CSV
    exportScoresCSV: publicProcedure.query(async () => {
      const csv = await exportScoresAsCSV();
      return { csv };
    }),
  }),
});

export type AppRouter = typeof appRouter;
