const router = require('express').Router()
const { Story } = require('../db/models')
module.exports = router

router.post('/', async (req, res, next) => {
  try {
    const story = await Story.create(req.body)

    res.status(201).json(story)
  } catch (err) {
    next(err)
  }
})

router.post('/read', async (req, res, next) => {
  console.log(req.body)
  try {
    const { hash } = req.body

    const story = await Story.find({
      where: {
        hash: hash
      },
      attributes: ['firstName', 'lastName', 'dateOfEvent', 'eventDetails']
    })

    if (story) {
      res.status(200).send(story)
    } else {
      console.log('no story found.')
      res.status(204).send()
    }
  } catch (err) {
    next(err)
  }
})
