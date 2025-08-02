# verse-reps
A daily devotional meets workout tracker. You get a verse and a quick bodyweight challenge each day, logged over time.

## Seeding Devotionals

To insert sample devotionals into your Supabase database, set your `SUPABASE_URL` and `SUPABASE_ANON_KEY` environment variables and run:

```bash
node --loader ts-node/esm scripts/seedDevotionals.ts
```

This script upserts 30 example rows into the `devotionals` table.
