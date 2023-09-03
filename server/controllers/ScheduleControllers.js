const scheduleModel = require('../models/Schedules')

const addSchedule = async (req, res) => {

    const newSchedule = await scheduleModel.create({
        title: req.body.title,
        desc: req.body.desc,
        bg: req.body.bg,
    })
    await newSchedule.save()
    res.status(201).json("Hey your data is saved!")

}


const getAllSchedule = async (req, res) => {
    const allSchedules = await scheduleModel.find();
    res.status(200).json({
        data: allSchedules
    })

}

module.exports = {
    addSchedule,
    getAllSchedule
}