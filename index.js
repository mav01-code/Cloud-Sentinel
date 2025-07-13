const express = require('express');
const fs = require('fs');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = 80;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Log to file
const logDirectory = path.join(__dirname, 'logs');
if (!fs.existsSync(logDirectory)) fs.mkdirSync(logDirectory);
const accessLogStream = fs.createWriteStream(
  path.join(logDirectory, 'access.log'),
  { flags: 'a' }
);
app.use(morgan(':remote-addr - :method :url :status', { stream: accessLogStream }));

// Routes
app.get('/', (req, res) => res.send('🌐 CloudSentinel: Web App Running'));
app.get('/login', (req, res) => res.send('🔐 Simulated Login Page'));
app.get('/data', (req, res) => res.send('📊 Simulated Data API'));
app.post('/submit', (req, res) => res.send(`✅ Received: ${JSON.stringify(req.body)}`));
app.use((req, res) => res.status(404).send('❌ Route not found'));

// Start server
app.listen(PORT, () => {
  console.log(`🚀 CloudSentinel app running on http://localhost:${PORT}`);
});
