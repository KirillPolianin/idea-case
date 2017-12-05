const db = require('../database');

module.exports = app => {
  app.get('/api/categories', async (req, res) => {
    try {
      const data = await db.select('*').from('category');

      res.status(200);
      res.send(data);
    } catch (err) {
      res.status(400);
      res.send(err);
    }
  });

  app.post('/api/categories', async (req, res) => {
    console.log(req.body);
    try {
      const data = await db('category').insert(req.body);

      res.status(201);
      res.send(data);
    } catch (err) {
      res.status(400);
      res.send(err);
    }
  });
};
