const express = require('express')
const {createClient} = require('@supabase/supabase-js')

// Dot env
const dotenv = require('dotenv')
dotenv.config();

// Get Supbase
const supbase = createClient(process.env.SUPABASE_URL, process.env.SUPBASE_ANON_KEY)

const app = express()

// Middle Ware
app.use(express.json());

// Get All Note
app.get('/note', async (req, res) => {
  const { data, error } = await supbase.from('Notes').select();
  res.send(data)
});

// Post Note 
app.post('/note', async (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(400).json({
      error: 'Missing property required'
    });
  };

  const { error } = await supbase.from('Notes').insert({title: title, description: description }).select()
  if (error) {
    res.send(error)
  }

  res.status(201)
})


module.exports = app