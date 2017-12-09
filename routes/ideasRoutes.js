const db = require('../database')

module.exports = app => {
  app.get('/api/ideas', async (req, res) => {
    try {
      const data = await db.select().from('idea')

      res.status(200)
      res.send(data)
    } catch (err) {
      res.status(400)
      res.send(err)
    }
  })

  app.post('/api/ideas', async (req, res) => {
    try {
      idea = {
        ...req.body,
        creationDate: new Date(),
        lastModified: new Date()
      }

      const data = await db('idea').insert(idea)

      res.send(201)
      res.send(data)
    } catch (err) {
      res.send(400)
      res.send(err)
    }
  })

  app.get('/ideas/:id', async (req, res) => {
    try {
      const { id } = req.params
      let idea = (await db('idea')
        .where({ id })
        .select('*'))[0]

      const comments = await db('comment')
        .select('*')
        .where({ ideaId: id })
        .leftJoin('member', 'comment.memberId', 'member.id')

      idea = { ...idea, comments }

      res.status(200)
      res.json(idea)
    } catch (err) {
      res.status(400)
      res.send(err)
    }
  })

  app.put('/api/ideas/:id', async (req, res) => {
    try {
      console.log(req.body)
      await db('idea')
        .where({ id: req.params.id })
        .update(req.body)

      res.status(200)
      res.json({ message: 'Member updated!' })
    } catch (err) {
      res.status(400)
      res.send(err)
    }
  })
}
