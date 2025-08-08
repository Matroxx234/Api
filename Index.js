require('dotenv').config();
const express = require('express');
const app = express();
const routes = require('./routes');
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', routes);

app.get('/', (req, res) => {
  res.send('🚀 API Roblox prête !');
});

app.listen(PORT, () => {
  console.log(`API en ligne sur le port ${PORT}`);
});
