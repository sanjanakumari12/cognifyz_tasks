const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors'); // Import cors module

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Use cors middleware
app.use(cors());

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Validate username and password
  if (username === 'admin' && password === 'password') {
    res.send('Login successful!');
  } else {
    res.status(401).send('Invalid credentials');
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
