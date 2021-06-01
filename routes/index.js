const express = require('express')
const router = express.Router()
const userRoutes = require('./users')
const courseRoutes = require('./courses')
const subjectRoutes = require('./subjects')
const topicRoutes = require('./topics')
const loginRoutes = require('./login')



router.use('/users', userRoutes);
router.use('/courses', courseRoutes);
router.use('/subjects', subjectRoutes);
router.use('/topics', topicRoutes);
router.use('/login', loginRoutes)


module.exports = router
