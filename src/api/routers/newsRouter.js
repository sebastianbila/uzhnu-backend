const router = require('express').Router()
const { NewsController } = require('../controllers')

router.get('/', NewsController.getAllNews)
router.get('/:id', NewsController.getNewsDetail)

module.exports = router
