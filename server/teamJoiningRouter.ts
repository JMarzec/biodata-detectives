import { z } from "zod";
import { publicProcedure, router } from "./_core/trpc";
import {
  createTeamSession,
  getTeamSessionByCode,
  getTeamSessionById,
  joinTeamSession,
  getTeamMembers,
  updateTeamMemberStatus,
  updateTeamSessionStatus,
} from "./teamSessionDb";

export const teamJoiningRouter = router({
  /**
   * Create a new team session with a join code
   */
  createSession: publicProcedure
    .input(
      z.object({
        teamName: z.string().min(1).max(255),
        language: z.enum(["en", "pt"]),
        isExpertMode: z.boolean(),
        deviceId: z.string(), // Unique device identifier
      })
    )
    .mutation(async ({ input }) => {
      const session = await createTeamSession({
        teamName: input.teamName,
        language: input.language,
        isExpertMode: input.isExpertMode,
        createdBy: input.deviceId,
      });

      if (!session) {
        throw new Error("Failed to create team session");
      }

      return {
        sessionId: session.id,
        joinCode: session.joinCode,
        teamName: session.teamName,
        language: session.language,
        isExpertMode: session.isExpertMode === "true",
      };
    }),

  /**
   * Get team session by join code
   */
  getSessionByCode: publicProcedure
    .input(z.object({ joinCode: z.string().length(6) }))
    .query(async ({ input }) => {
      const session = await getTeamSessionByCode(input.joinCode);

      if (!session) {
        return null;
      }

      // Check if session is expired
      if (new Date() > session.expiresAt) {
        return null;
      }

      return {
        sessionId: session.id,
        joinCode: session.joinCode,
        teamName: session.teamName,
        language: session.language,
        isExpertMode: session.isExpertMode === "true",
        status: session.status,
      };
    }),

  /**
   * Join a team session
   */
  joinSession: publicProcedure
    .input(
      z.object({
        sessionId: z.string(),
        deviceId: z.string(),
        memberName: z.string().optional(),
      })
    )
    .mutation(async ({ input }) => {
      // Check if session exists and is not expired
      const session = await getTeamSessionById(input.sessionId);
      if (!session) {
        throw new Error("Team session not found");
      }

      if (new Date() > session.expiresAt) {
        throw new Error("Team session has expired");
      }

      // Check member count
      const members = await getTeamMembers(input.sessionId);
      if (members.length >= 10) {
        throw new Error("Team is full (maximum 10 members)");
      }

      const member = await joinTeamSession({
        sessionId: input.sessionId,
        deviceId: input.deviceId,
        memberName: input.memberName,
      });

      if (!member) {
        throw new Error("Failed to join team session");
      }

      return {
        memberId: member.id,
        sessionId: member.sessionId,
        status: member.status,
      };
    }),

  /**
   * Get team members for a session
   */
  getMembers: publicProcedure
    .input(z.object({ sessionId: z.string() }))
    .query(async ({ input }) => {
      const members = await getTeamMembers(input.sessionId);

      return members.map((m) => ({
        id: m.id,
        deviceId: m.deviceId,
        memberName: m.memberName,
        status: m.status,
        joinedAt: m.joinedAt,
      }));
    }),

  /**
   * Update team member status
   */
  updateMemberStatus: publicProcedure
    .input(
      z.object({
        memberId: z.string(),
        status: z.enum(["joined", "playing", "completed", "disconnected"]),
      })
    )
    .mutation(async ({ input }) => {
      await updateTeamMemberStatus(input.memberId, input.status);
      return { success: true };
    }),

  /**
   * Start game for entire team session
   */
  startGameSession: publicProcedure
    .input(z.object({ sessionId: z.string() }))
    .mutation(async ({ input }) => {
      await updateTeamSessionStatus(input.sessionId, "playing");
      return { success: true };
    }),

  /**
   * Complete game for entire team session
   */
  completeGameSession: publicProcedure
    .input(z.object({ sessionId: z.string() }))
    .mutation(async ({ input }) => {
      await updateTeamSessionStatus(input.sessionId, "completed");
      return { success: true };
    }),
});
