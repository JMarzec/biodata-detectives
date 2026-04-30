import { int, mysqlEnum, mysqlTable, text, timestamp, varchar, json, float } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

// BioData Detectives game tables
export const teams = mysqlTable("teams", {
  id: varchar("id", { length: 64 }).primaryKey(), // nanoid
  teamName: varchar("teamName", { length: 255 }).notNull(),
  language: varchar("language", { length: 10 }).default("en").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  completedAt: timestamp("completedAt"),
});

export type Team = typeof teams.$inferSelect;
export type InsertTeam = typeof teams.$inferInsert;

export const scores = mysqlTable("scores", {
  id: varchar("id", { length: 64 }).primaryKey(), // nanoid
  teamId: varchar("teamId", { length: 64 }).notNull(),
  totalScore: int("totalScore").notNull().default(0),
  accuracy: float("accuracy").notNull().default(0), // percentage 0-100
  timeTaken: int("timeTaken").notNull().default(0), // seconds
  answers: json("answers").notNull(), // JSON array of {questionId, answerId, isCorrect, timeSpent}
  rank: varchar("rank", { length: 100 }), // e.g., "Senior BioData Investigators"
  completedAt: timestamp("completedAt").defaultNow().notNull(),
});

export type Score = typeof scores.$inferSelect;
export type InsertScore = typeof scores.$inferInsert;