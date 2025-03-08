import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// Placeholder home route
app.get('/', (req, res) => {
  res.send('WOL placeholder: This will eventually wake the server!');
});

// Placeholder wake route
app.get('/wake', (req, res) => {
  res.send('Server not available yet! Check back later.');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Placeholder WOL server running on port ${PORT}`);
});
