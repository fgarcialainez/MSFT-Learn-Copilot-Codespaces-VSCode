// Create web server and listen to port 3000 using express
const express = require('express');
const app = express();

// Middleware to parse JSON body
app.use(express.json());

// Array of comments
const comments = [];

// GET /comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// POST /comments
app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.status(201).json(comment);
});

// Start server
app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});