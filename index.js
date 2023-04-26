const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const morgan = require("morgan");
const dotenv = require("dotenv");
const noteRoute = require("./routes/note");
const userRoute = require("./routes/user");

dotenv.config();
// connect database
mongoose.connect(process.env.MONGODB_URL, () => 
console.log("Connected to mongoDB"));



app.use(bodyParser.json({limit:"50mb"}));
app.use(cors());
app.use(morgan("common"));

//ROUTES
app.use("/v1/note", noteRoute);
app.use("/v1/user", userRoute);

const port = process.env.PORT || 5100;
app.listen(port, () => console.log(`server started on port ${port}`));