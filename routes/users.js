const express = require('express')
const router = express.Router()
const userController = require('../controllers/users')


// fetching all the users
router.get('/', userController.getAll)

// fetching one user
router.get('/:id', userController.getOne)

// saving user
router.post('/', userController.post)

// updating a user
router.put('/:id', userController.update)

// deleting a user
router.delete('/:id', userController.delete)

module.exports = router