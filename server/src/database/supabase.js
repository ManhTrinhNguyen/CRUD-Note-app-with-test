const { createClient } = require("@supabase/supabase-js");

// Dot env
const dotenv = require("dotenv");
dotenv.config();

// Get Supbase
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPBASE_ANON_KEY,
);

module.exports = supabase