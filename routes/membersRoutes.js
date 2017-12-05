const db = require('../database');

module.exports = app => {
  app.get('/api/members', async (req, res) => {
    try {
      const data = await db.select().from('member');

      res.status(200);
      res.send(data);
    } catch (err) {
      res.status(400);
      res.send(err);
    }
  });

  app.post('/api/members', async (req, res) => {
    try {
      const data = await db('member').insert(req.body);

      res.status(201);
      res.send(data);
    } catch (err) {
      res.status(400);
      res.send(err);
    }
  });

  app.get('/api/members/:id', async (req, res) => {
    try {
      const data = await db('member')
        .where({ id: req.params.id })
        .select('*');

      res.status(200);
      res.send(data);
    } catch (err) {
      res.status(400);
      res.send(err);
    }
  });
};
