const db = require('../database');

module.exports = app => {
  app.get('/api/comments', async (req, res) => {
    const data = await db.select().from('comment');

    res.status(200);
    res.send(data);
  });

  app.post('/api/comments', async (req, res) => {
    const comment = await db('comment').insert(req.body);
  });
};
