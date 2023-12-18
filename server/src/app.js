const express = require("express");
const { createClient } = require("@supabase/supabase-js");

// Dot env
const dotenv = require("dotenv");
dotenv.config();

// Get Supbase
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPBASE_ANON_KEY,
);

const app = express();

// Middle Ware
app.use(express.json());

// Get All Note
app.get("/note", async (req, res) => {
  const { data, error } = await supabase.from("Notes").select();
  res.send(data);
});

// Post Note
app.post("/note", async (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(400).json({
      error: "Missing property required",
    });
  }

  const { error } = await supabase
    .from("Notes")
    .insert({ title: title, description: description })
    .select();
  if (error) {
    res.send(error);
  }

  res.status(201);
});

// Delete Note
app.delete("/note/:id", async (req, res) => {
  const id = req.params.id;
  const { error } = await supabase.from("Notes").delete().eq("id", id);

  if (error) return res.send(error);

  res.send("Deleted!");
});

module.exports = app;
