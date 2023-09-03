const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config({
    path: './config/.env'
})
const app = express();
app.use(cors({
    origin: "http://localhost:27017",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}))
const port = process.env.PORT || 5000;
const scheduleRoute = require('./routes/ScheduleRoute')
app.use(express.json());




// Routes
app.use('/schedule', scheduleRoute)


app.listen(port, () => {
    console.log(`Server is up ${port}`);
    require('./db/connection')
})