CREATE TYPE "public"."borrow_status" AS ENUM('BORROWED', 'RETURNED');--> statement-breakpoint
CREATE TYPE "public"."role" AS ENUM('ADMIN', 'USER');--> statement-breakpoint
CREATE TYPE "public"."status" AS ENUM('PENDING', 'APPROVED', 'REJECTED');--> statement-breakpoint
CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"full_name" varchar(255) NOT NULL,
	"email" text NOT NULL,
	"university_id" integer NOT NULL,
	"password" text NOT NULL,
	"university_card" text NOT NULL,
	"status" "status" DEFAULT 'PENDING' NOT NULL,
	"role" "role" DEFAULT 'USER' NOT NULL,
	"last_activity_date" date DEFAULT now() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	CONSTRAINT "users_id_unique" UNIQUE("id"),
	CONSTRAINT "users_email_unique" UNIQUE("email"),
	CONSTRAINT "users_university_id_unique" UNIQUE("university_id")
);
