const supabase = require('../database/supabase');

// Get All Notes
async function httpGetAllNotes (req, res) {
  const { data, error } = await supabase.from("Notes").select();
  res.send(data);
}

// Post Notes
async function httpPostNotes(req, res) {
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

  res.status(201).send('Posted!');
}

// Update Note
async function httpUpdateNotes(req, res) {
  const {title, description} = req.body
  console.log(req.params.id)
  const { data, error } = await supabase.from('Notes').update({title: title, description: description}).eq('id', req.params.id)

  res.send('Updated!');
}

// Delete Note 
async function httpDeleteNotes(req, res) {
  const id = req.params.id;
  const { error } = await supabase.from("Notes").delete().eq("id", id);

  if (error) return res.send(error);

  res.send("Deleted!");
}

module.exports = {
  httpGetAllNotes,
  httpPostNotes,
  httpUpdateNotes,
  httpDeleteNotes
}