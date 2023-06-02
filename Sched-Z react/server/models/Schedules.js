const mongoose = require('mongoose');

const ScheduleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        default: Date.now()
    },
    bg: {
        type: String,
        default: "teal"
    }
})

const ScheduleModel = mongoose.model('Schedule', ScheduleSchema);
module.exports = ScheduleModel;