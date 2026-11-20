let nextId = 3;

const notes = [
  { id: 1, title: 'Grocery list', description: 'Buy milk, eggs, and bread' },
  { id: 2, title: 'Read book', description: 'Continue reading chapter 4 of the novel' }
];

function getAll() {
  // return a shallow copy to prevent external mutation
  return notes.slice();
}

function findById(id) {
  return notes.find(n => n.id === id) || null;
}

function create({ title, description }) {
  const note = {
    id: nextId++,
    title: title || '',
    description: description || ''
  };
  notes.push(note);
  return note;
}

function update(id, { title, description }) {
  const idx = notes.findIndex(n => n.id === id);
  if (idx === -1) return null;
  notes[idx] = Object.assign({}, notes[idx], {
    title: title !== undefined ? title : notes[idx].title,
    description: description !== undefined ? description : notes[idx].description
  });
  return notes[idx];
}

function remove(id) {
  const idx = notes.findIndex(n => n.id === id);
  if (idx === -1) return false;
  notes.splice(idx, 1);
  return true;
}

module.exports = {
  getAll,
  findById,
  create,
  update,
  remove,
  // expose raw notes for debugging (read-only intended)
  _notes: notes
};
