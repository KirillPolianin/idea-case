const db = require('../database');

module.exports = app => {
  app.get('/api/members', async (req, res) => {
    try {
      const members = await db.select('*').from('member');

      res.status(200);
      res.json(members);
    } catch (err) {
      res.status(400);
      res.send(err);
    }
  });

  app.post('/api/members', async (req, res) => {
    try {
      const data = await db('member').insert(req.body);

      res.status(201);
      res.json(data);
    } catch (err) {
      res.status(400);
      res.send(err);
    }
  });

  app.get('/api/members/:id', async (req, res) => {
    try {
      const member = await db('member')
        .where({ id: req.params.id })
        .select('*');

      res.status(200);
      res.json(member[0]);
    } catch (err) {
      res.status(400);
      res.send(err);
    }
  });

  app.put('/api/members/:id', async (req, res) => {
    console.log(req.body);
    try {
      await db('member')
        .where({ id: req.params.id })
        .update(req.body);

      res.status(200);
      res.json({ message: 'Member updated!' });
    } catch (err) {
      res.status(400);
      res.send(err);
    }
  });

  //doesn't work right now, SQL scripts must be edited to enable CASCADE deleting
  app.delete('/api/members/:id', async (req, res) => {
    try {
      await db('member')
        .where({ id: req.params.id })
        .del();

      res.status(200);
      res.json({ message: 'Member successfully deleted!' });
    } catch (err) {
      res.status(400);
      res.send(err);
    }
  });
};
