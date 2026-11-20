module.exports = function (req, res, next) {
  const method = req.method;
  const { title } = req.body || {};

  if (method === 'POST' || method === 'PUT') {
    if (typeof title !== 'string' || title.trim().length === 0) {
      return res.status(400).json({ error: 'Title is required and must be a non-empty string' });
    }
    // normalize
    req.body.title = title.trim();
  }

  next();
};
