CREATE TABLE `teamMembers` (
	`id` varchar(64) NOT NULL,
	`sessionId` varchar(64) NOT NULL,
	`deviceId` varchar(64) NOT NULL,
	`memberName` varchar(255),
	`status` enum('joined','playing','completed','disconnected') NOT NULL DEFAULT 'joined',
	`joinedAt` timestamp NOT NULL DEFAULT (now()),
	`lastSeenAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `teamMembers_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `teamSessions` (
	`id` varchar(64) NOT NULL,
	`joinCode` varchar(6) NOT NULL,
	`teamName` varchar(255) NOT NULL,
	`language` varchar(10) NOT NULL DEFAULT 'en',
	`isExpertMode` enum('true','false') NOT NULL DEFAULT 'false',
	`status` enum('waiting','playing','completed') NOT NULL DEFAULT 'waiting',
	`createdBy` varchar(64) NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`startedAt` timestamp,
	`completedAt` timestamp,
	`expiresAt` timestamp NOT NULL,
	CONSTRAINT `teamSessions_id` PRIMARY KEY(`id`),
	CONSTRAINT `teamSessions_joinCode_unique` UNIQUE(`joinCode`)
);
