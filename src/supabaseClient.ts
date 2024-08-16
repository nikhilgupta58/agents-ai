import { createClient } from "@supabase/supabase-js";

// Environment variables
const supabaseUrl = "https://hhwsobwkrynoxjylsbno.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhod3NvYndrcnlub3hqeWxzYm5vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM4MTcxOTAsImV4cCI6MjAzOTM5MzE5MH0.FFuazmy4KGVIkz3wIMzWfiST3b7EHj5U7081IyXfbEU";

// Create a single Supabase client for interacting with your database
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
