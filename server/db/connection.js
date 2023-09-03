const mongoose = require('mongoose')
mongoose.set('strictQuery', true);
mongoose.connect("mongodb://0.0.0.0:27017", {
    dbName: "schedz",
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Connected to MongoBD"))
    .catch((e) => {
        console.log(e.message)
    })