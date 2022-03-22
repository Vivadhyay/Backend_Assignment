const express = require("express");
const cors =require("cors")
const mongoose = require('mongoose');

const app = express();
const port = 4000;

mongoose.connect('mongodb+srv://vivek:vivek1292@cluster0.6gec7.mongodb.net/Database?retryWrites=true&w=majority')
.then(() =>{
    console.log("Connected to DB");
})
.catch((err) =>{
    console.log(err.message,"Not connected");
})

app.use(cors())
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json()); 
app.use(express.urlencoded({ extended: false }))
app.use(express.json());

app.use("/", require("./routes/routes"));


app.listen(port, () => {
  console.log(`App listening at port: http://localhost:${port}`);
});
