const express = require('express');
const router = express.Router();
const store = require('../data/store');
const validateNote = require('../middleware/validateNote');

// GET /api/notes - list all notes
router.get('/', (req, res) => {
  res.json(store.getAll());
});

// GET /api/notes/:id - get single note
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id)) return res.status(400).json({ error: 'Invalid id' });
  const note = store.findById(id);
  if (!note) {
    return res.status(404).json({ error: 'Note not found' });
  }
  res.json(note);
});

// POST /api/notes - create a note
router.post('/', validateNote, (req, res) => {
  const { title, description } = req.body;
  const created = store.create({ title, description });
  res.status(201).json(created);
});

// PUT /api/notes/:id - update a note
router.put('/:id', validateNote, (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id)) return res.status(400).json({ error: 'Invalid id' });
  const { title, description } = req.body;
  const existing = store.findById(id);
  if (!existing) {
    return res.status(404).json({ error: 'Note not found' });
  }
  const updated = store.update(id, { title, description });
  res.json(updated);
});

// DELETE /api/notes/:id - delete a note
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id)) return res.status(400).json({ error: 'Invalid id' });
  const existing = store.findById(id);
  if (!existing) {
    return res.status(404).json({ error: 'Note not found' });
  }
  store.remove(id);
  res.status(204).send();
});

module.exports = router;
