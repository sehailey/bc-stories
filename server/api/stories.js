const router = require('express').Router()
const {Story} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
    try {
        const stories = await Story.findAll()
        res.json(stories)
    } catch (err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const story = await Story.create(req.body)

        res.status(201).json(story)
    } catch (err) {
        next(err)
    }
})

router.post('/retrieve', async (req, res, next) => {
    try {
        const {hash} = req.body

        const story = await Story.find({
            where: {
                hash: hash,
            },
            attributes: [
                'firstName',
                'lastName',
                'dateOfEvent',
                'eventDetails',
            ],
        })
        console.log(story.firstName)
        if (story) {
            res.send(story)
        } else {
            res.status(404)
        }
    } catch (err) {
        next(err)
    }
})
