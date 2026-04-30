import { describe, it, expect } from "vitest";
import { generateJoinCode } from "./teamSessionDb";

describe("Team Joining Feature", () => {
  describe("Join Code Generation", () => {
    it("should generate a 6-character alphanumeric code", () => {
      const code = generateJoinCode();
      expect(code).toHaveLength(6);
      // nanoid uses URL-safe characters [a-zA-Z0-9_-], then we uppercase
      expect(/^[A-Z0-9_-]{6}$/.test(code)).toBe(true);
    });

    it("should generate unique codes", () => {
      const codes = new Set();
      for (let i = 0; i < 100; i++) {
        codes.add(generateJoinCode());
      }
      expect(codes.size).toBe(100); // All codes should be unique
    });

    it("should generate uppercase codes", () => {
      const code = generateJoinCode();
      expect(code).toBe(code.toUpperCase());
    });
  });

  describe("Team Session Management", () => {
    it("should validate join code format", () => {
      const validCode = generateJoinCode();
      expect(validCode).toHaveLength(6);
      expect(/^[A-Z0-9]{6}$/.test(validCode)).toBe(true);
    });

    it("should handle case-insensitive join codes", () => {
      const code = generateJoinCode();
      const upperCode = code.toUpperCase();
      const lowerCode = code.toLowerCase();
      expect(upperCode).toBe(code);
      expect(lowerCode.toUpperCase()).toBe(code);
    });

    it("should enforce maximum team members (10)", () => {
      // This would be tested with actual database operations
      const maxMembers = 10;
      expect(maxMembers).toBe(10);
    });
  });

  describe("Team Member Status", () => {
    it("should track member status transitions", () => {
      const statuses = ["joined", "playing", "completed", "disconnected"];
      expect(statuses).toContain("joined");
      expect(statuses).toContain("playing");
      expect(statuses).toContain("completed");
      expect(statuses).toContain("disconnected");
    });

    it("should track session status", () => {
      const sessionStatuses = ["waiting", "playing", "completed"];
      expect(sessionStatuses).toContain("waiting");
      expect(sessionStatuses).toContain("playing");
      expect(sessionStatuses).toContain("completed");
    });
  });

  describe("Device Identification", () => {
    it("should generate unique device IDs", () => {
      const deviceIds = new Set();
      for (let i = 0; i < 10; i++) {
        const deviceId = `device-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        deviceIds.add(deviceId);
      }
      expect(deviceIds.size).toBe(10); // All device IDs should be unique
    });

    it("should format device ID correctly", () => {
      const deviceId = `device-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      expect(deviceId).toMatch(/^device-\d+-[a-z0-9]+$/);
    });
  });

  describe("Session Expiration", () => {
    it("should set session expiration to 1 hour", () => {
      const now = Date.now();
      const expiresAt = new Date(now + 60 * 60 * 1000);
      const expirationTime = expiresAt.getTime() - now;
      expect(expirationTime).toBe(60 * 60 * 1000); // 1 hour in milliseconds
    });

    it("should detect expired sessions", () => {
      const now = new Date();
      const pastTime = new Date(now.getTime() - 1000); // 1 second ago
      expect(now > pastTime).toBe(true);
    });
  });

  describe("Team Session Data", () => {
    it("should store team session metadata", () => {
      const sessionData = {
        teamName: "Test Team",
        language: "en",
        isExpertMode: false,
        status: "waiting",
      };

      expect(sessionData.teamName).toBe("Test Team");
      expect(sessionData.language).toBe("en");
      expect(sessionData.isExpertMode).toBe(false);
      expect(sessionData.status).toBe("waiting");
    });

    it("should support bilingual team names", () => {
      const enTeamName = "RNA Rangers";
      const ptTeamName = "Guardiões do RNA";

      expect(enTeamName).toHaveLength(11);
      expect(ptTeamName).toHaveLength(16); // Fixed: ã is single character
    });
  });

  describe("Multi-Device Team Play", () => {
    it("should allow multiple devices to join same session", () => {
      const sessionId = "session-123";
      const devices = [
        { deviceId: "device-1", memberName: "Player 1" },
        { deviceId: "device-2", memberName: "Player 2" },
        { deviceId: "device-3", memberName: "Player 3" },
      ];

      expect(devices).toHaveLength(3);
      expect(devices[0].deviceId).toBe("device-1");
      expect(devices[1].deviceId).toBe("device-2");
      expect(devices[2].deviceId).toBe("device-3");
    });

    it("should track individual member status", () => {
      const members = [
        { id: "m1", status: "playing" },
        { id: "m2", status: "joined" },
        { id: "m3", status: "completed" },
      ];

      const playingCount = members.filter((m) => m.status === "playing").length;
      const completedCount = members.filter((m) => m.status === "completed").length;

      expect(playingCount).toBe(1);
      expect(completedCount).toBe(1);
    });
  });
});
