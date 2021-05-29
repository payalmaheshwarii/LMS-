const express = require('express')
const router = express.Router()
const userRoutes = require('./users')
const courseRoutes = require('./courses')
const subjectRoutes = require('./subjects')
const topicRoutes = require('./topics')

router.use('/users', userRoutes);
router.use('/courses', courseRoutes);
router.use('/subjects', subjectRoutes);
router.use('/topics', topicRoutes);

module.exports = router
