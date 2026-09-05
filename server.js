const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Fallback alias for banner.jpg which was referenced in CSS but provided as campus.jpg
app.get('/banner.jpg', (req, res) => {
  res.sendFile(path.join(__dirname, 'campus.jpg'));
});

// Serve static assets from project root
app.use(express.static(__dirname, {
  extensions: ['html', 'htm']
}));

// Fallback to index.html for root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// 404 handler
app.use((req, res) => {
  res.status(404).send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>404 - Page Not Found</title>
  <style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; text-align: center; padding: 60px 20px; color: #333; }
    h1 { color: #2C3E50; font-size: 2.5rem; margin-bottom: 10px; }
    p { font-size: 1.1rem; color: #666; margin-bottom: 25px; }
    a { background-color: #2C3E50; color: #fff; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-weight: bold; }
    a:hover { background-color: #1A252F; }
  </style>
</head>
<body>
  <h1>404 - Page Not Found</h1>
  <p>The page you are looking for does not exist or has been moved.</p>
  <a href="/">Return to Home</a>
</body>
</html>`);
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${port}/`);
});

