import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vutjjgcvasjlblzfdrts.supabase.co"; // Replace with your Supabase URL
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ1dGpqZ2N2YXNqbGJsemZkcnRzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ0NTY0MTIsImV4cCI6MjA1MDAzMjQxMn0.c0mt3l27l25J83ioWXgert-TmM0ZJq3BW7hTGG8qvMQ"; // Replace with your Supabase API key

export const supabase = createClient(supabaseUrl, supabaseKey);
