
const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
var moment = require('moment'); // require




//middleware
app.use(cors());
app.use(express.json());


//create a formrow
app.post("/events", async(req, res) => {
    try {
        const { department, typeofactivity } = req.body;
        const created = moment().format();
        const success = true;
        const newFormData = await pool.query(
            "INSERT INTO eventform(department, typeofactivity, created, success) VALUES($1, $2, $3, $4) RETURNING *", [department, typeofactivity, created, success]);
        res.json(newFormData.rows[0]);
    } catch (err) {
        console.log(err.message);
    }
})

//allform
app.get("/events", async(req, res) => {
    try {
        const allEvents = await pool.query("SELECT * FROM eventform");
        res.json(allEvents.rows);
    } catch (err) {
        console.error(err.message);
    }
})

//specific form
app.get("/events/:event_id", async(req, res) => {
    try {
        const { event_id } = req.params;
        const event = await pool.query("SELECT * FROM eventform WHERE event_id = $1", [event_id]);
        res.json(event.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})

//delete event
app.delete("/events/:event_id", async (req, res) => {
    try {
        const { event_id } = req.params;
        const deleteEvent = await pool.query("DELETE FROM eventform WHERE event_id = $1", [event_id]);
        res.json(`Event with number ${event_id} was deleted successfully`);
    } catch (err) {
        console.error(err.message);
    }
})


//admin
app.post("/admin", async (req, res) => {
    try {
        const { username, password } = req.body;
        const result = await pool.query("SELECT * FROM usertable WHERE username=$1",[username]);
        const dbpassword = result.rows[0].password
        if(dbpassword == password) {
            res.json("Success");
        } else {
            res.json("Error");
        }
    } catch (err) {
        console.error(err.message);
    }
})





app.listen(5000, () => {
    console.log("server has started on port 5000");
});