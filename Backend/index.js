const express = require("express");
const cors = require('cors');
const app = express();
require('./data/config');
const cus = require('./data/Booking');
app.use(express.json());
app.use(cors());

app.post("/customer", async (req, res) => {

        let user = new cus(req.body);
        let result = await user.save();
        res.send(result);
});

app.listen(7000, () => {
    console.log('Hotel Side Running');
});
