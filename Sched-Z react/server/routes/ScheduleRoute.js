const router = require('express').Router()
const { addSchedule, getAllSchedule } = require('../controllers/ScheduleControllers')

router.post('/add', addSchedule)
router.get('/get-all', getAllSchedule)

module.exports = router