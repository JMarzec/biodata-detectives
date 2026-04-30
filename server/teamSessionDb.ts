import { eq, and } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { teamSessions, teamMembers, TeamSession, TeamMember, InsertTeamSession, InsertTeamMember } from "../drizzle/schema";
import { ENV } from "./_core/env";
import { nanoid } from "nanoid";

let _db: ReturnType<typeof drizzle> | null = null;

async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

/**
 * Generate a 6-character alphanumeric join code (uppercase letters and numbers only)
 */
export function generateJoinCode(): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

/**
 * Create a new team session
 */
export async function createTeamSession(input: {
  teamName: string;
  language: string;
  isExpertMode: boolean;
  createdBy: string;
}): Promise<TeamSession | null> {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot create team session: database not available");
    return null;
  }

  try {
    const joinCode = generateJoinCode();
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000); // 1 hour from now

    const session: InsertTeamSession = {
      id: nanoid(),
      joinCode,
      teamName: input.teamName,
      language: input.language,
      isExpertMode: input.isExpertMode ? "true" : "false",
      status: "waiting",
      createdBy: input.createdBy,
      expiresAt,
    };

    await db.insert(teamSessions).values(session);

    const result = await db.select().from(teamSessions).where(eq(teamSessions.id, session.id)).limit(1);
    return result.length > 0 ? result[0] : null;
  } catch (error) {
    console.error("[Database] Failed to create team session:", error);
    throw error;
  }
}

/**
 * Get team session by join code
 */
export async function getTeamSessionByCode(joinCode: string): Promise<TeamSession | null> {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get team session: database not available");
    return null;
  }

  try {
    const result = await db
      .select()
      .from(teamSessions)
      .where(eq(teamSessions.joinCode, joinCode.toUpperCase()))
      .limit(1);

    return result.length > 0 ? result[0] : null;
  } catch (error) {
    console.error("[Database] Failed to get team session:", error);
    throw error;
  }
}

/**
 * Get team session by ID
 */
export async function getTeamSessionById(sessionId: string): Promise<TeamSession | null> {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get team session: database not available");
    return null;
  }

  try {
    const result = await db.select().from(teamSessions).where(eq(teamSessions.id, sessionId)).limit(1);

    return result.length > 0 ? result[0] : null;
  } catch (error) {
    console.error("[Database] Failed to get team session:", error);
    throw error;
  }
}

/**
 * Join a team session
 */
export async function joinTeamSession(input: {
  sessionId: string;
  deviceId: string;
  memberName?: string;
}): Promise<TeamMember | null> {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot join team session: database not available");
    return null;
  }

  try {
    const member: InsertTeamMember = {
      id: nanoid(),
      sessionId: input.sessionId,
      deviceId: input.deviceId,
      memberName: input.memberName,
      status: "joined",
    };

    await db.insert(teamMembers).values(member);

    const result = await db.select().from(teamMembers).where(eq(teamMembers.id, member.id)).limit(1);
    return result.length > 0 ? result[0] : null;
  } catch (error) {
    console.error("[Database] Failed to join team session:", error);
    throw error;
  }
}

/**
 * Get all team members for a session
 */
export async function getTeamMembers(sessionId: string): Promise<TeamMember[]> {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get team members: database not available");
    return [];
  }

  try {
    return await db.select().from(teamMembers).where(eq(teamMembers.sessionId, sessionId));
  } catch (error) {
    console.error("[Database] Failed to get team members:", error);
    throw error;
  }
}

/**
 * Update team member status
 */
export async function updateTeamMemberStatus(
  memberId: string,
  status: "joined" | "playing" | "completed" | "disconnected"
): Promise<void> {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot update team member: database not available");
    return;
  }

  try {
    await db.update(teamMembers).set({ status }).where(eq(teamMembers.id, memberId));
  } catch (error) {
    console.error("[Database] Failed to update team member:", error);
    throw error;
  }
}

/**
 * Update team session status
 */
export async function updateTeamSessionStatus(
  sessionId: string,
  status: "waiting" | "playing" | "completed"
): Promise<void> {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot update team session: database not available");
    return;
  }

  try {
    const updateData: any = { status };
    if (status === "playing") {
      updateData.startedAt = new Date();
    } else if (status === "completed") {
      updateData.completedAt = new Date();
    }

    await db.update(teamSessions).set(updateData).where(eq(teamSessions.id, sessionId));
  } catch (error) {
    console.error("[Database] Failed to update team session:", error);
    throw error;
  }
}

/**
 * Delete expired team sessions (older than 1 hour)
 */
export async function deleteExpiredSessions(): Promise<void> {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot delete expired sessions: database not available");
    return;
  }

  try {
    const now = new Date();
    await db.delete(teamSessions).where(eq(teamSessions.expiresAt, now));
  } catch (error) {
    console.error("[Database] Failed to delete expired sessions:", error);
    throw error;
  }
}
