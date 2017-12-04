const db = require('../database');

module.exports = app => {
  app.get('/api/ideas', async (req, res) => {
    const data = await db.select().from('idea');

    res.status(200);
    res.send(data);
  });
};
