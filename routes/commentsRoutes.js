const db = require('../database')

module.exports = app => {
  app.get('/comments', async (req, res) => {
    const data = await db('comment')
      .where({ ideaId: req.body })
      .select('*')

    res.status(200)
    res.send(data)
  })

  app.post('/api/comments', async (req, res) => {
    const comment = await db('comment').insert(req.body)
  })
}
