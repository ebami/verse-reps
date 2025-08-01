-- Initial schema for verse-reps

-- Enable UUID generation
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Users table
CREATE TABLE IF NOT EXISTS public.users (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at timestamptz NOT NULL DEFAULT now()
);

-- Devotionals table
CREATE TABLE IF NOT EXISTS public.devotionals (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    verse_ref text NOT NULL,
    verse_text text NOT NULL,
    challenge text NOT NULL,
    created_at timestamptz NOT NULL DEFAULT now()
);

-- Workouts table
CREATE TABLE IF NOT EXISTS public.workouts (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id uuid NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
    devotional_id uuid NOT NULL REFERENCES public.devotionals(id) ON DELETE CASCADE,
    reps_done integer NOT NULL,
    completed_at timestamptz NOT NULL DEFAULT now()
);

-- Indexes for workouts
CREATE INDEX IF NOT EXISTS workouts_user_idx ON public.workouts(user_id);
CREATE INDEX IF NOT EXISTS workouts_devotional_idx ON public.workouts(devotional_id);
CREATE INDEX IF NOT EXISTS workouts_completed_at_idx ON public.workouts(completed_at);

-- Index for devotionals creation date
CREATE INDEX IF NOT EXISTS devotionals_created_at_idx ON public.devotionals(created_at);
