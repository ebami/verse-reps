import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL as string
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY as string

export const createBrowserSupabaseClient = (): SupabaseClient =>
  createClient(supabaseUrl, supabaseAnonKey)

export const createServerSupabaseClient = (): SupabaseClient =>
  createClient(supabaseUrl, supabaseAnonKey, {
    global: { fetch },
  })

export const supabase = typeof window === 'undefined'
  ? createServerSupabaseClient()
  : createBrowserSupabaseClient()
