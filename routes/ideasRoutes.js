const db = require('../database');

module.exports = app => {
  app.get('/api/ideas', async (req, res) => {
    try {
      const data = await db.select().from('idea');

      res.status(200);
      res.send(data);
    } catch (err) {
      res.status(400);
      res.send(err);
    }
  });

  app.post('/api/ideas', async (req, res) => {
    try {
      const data = await db('idea').insert(req.body);

      res.send(201);
      res.send(data);
    } catch (err) {
      res.send(400);
      res.send(err);
    }
  });
};
