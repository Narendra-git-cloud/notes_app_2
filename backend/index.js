const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const notesRouter = require('./routes/notes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Health check
app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'Notes API is running' });
});

// Routes
app.use('/api/notes', notesRouter);

// 404 handler
app.use((req, res, next) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
});

app.listen(PORT, () => {
  console.log(`Notes API listening on http://localhost:${PORT}`);
});
