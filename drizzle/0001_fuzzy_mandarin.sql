CREATE TABLE `scores` (
	`id` varchar(64) NOT NULL,
	`teamId` varchar(64) NOT NULL,
	`totalScore` int NOT NULL DEFAULT 0,
	`accuracy` float NOT NULL DEFAULT 0,
	`timeTaken` int NOT NULL DEFAULT 0,
	`answers` json NOT NULL,
	`rank` varchar(100),
	`completedAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `scores_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `teams` (
	`id` varchar(64) NOT NULL,
	`teamName` varchar(255) NOT NULL,
	`language` varchar(10) NOT NULL DEFAULT 'en',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`completedAt` timestamp,
	CONSTRAINT `teams_id` PRIMARY KEY(`id`)
);
